---
name: dashboard-refresh
description: >
  ALWAYS use this skill to refresh Susan Wahl's Account Intelligence Dashboard with live data.
  Pulls from Salesforce (opportunities, activities, next steps), ZoomInfo (contacts, company intel,
  signals), Granola (meeting notes), Gmail (email threads), and Outreach (engagement history).
  Synthesizes AI-generated next steps and quick actions, then writes accounts.js to the dashboard.
  Trigger on: "refresh dashboard", "update dashboard data", "pull live data", "refresh my accounts",
  "sync dashboard", "update accounts.js", or any request to refresh the account intelligence dashboard.
allowed-tools: >
  Bash(python3 *), Bash(glob *), Bash(ls *), Bash(find *),
  Read, Write, Edit, Glob,
  mcp__7adaa089-de97-4951-8e78-e6af1ff010ae__account_search,
  mcp__7adaa089-de97-4951-8e78-e6af1ff010ae__opportunity_search,
  mcp__7adaa089-de97-4951-8e78-e6af1ff010ae__emails_search,
  mcp__7adaa089-de97-4951-8e78-e6af1ff010ae__kaia_meeting_search,
  mcp__3b9db786-720c-4809-845e-969a3ca2f606__account_research,
  mcp__3b9db786-720c-4809-845e-969a3ca2f606__contact_research,
  mcp__3b9db786-720c-4809-845e-969a3ca2f606__enrich_companies,
  mcp__3b9db786-720c-4809-845e-969a3ca2f606__enrich_contacts,
  mcp__3b9db786-720c-4809-845e-969a3ca2f606__search_scoops,
  mcp__3b9db786-720c-4809-845e-969a3ca2f606__enrich_intent,
  mcp__d6e647f2-6a7f-4f15-ba29-c081bdcdbdcb__query_granola_meetings,
  mcp__d6e647f2-6a7f-4f15-ba29-c081bdcdbdcb__get_meeting_transcript,
  mcp__d330fecb-a806-4000-ac06-8b1ec6b30b38__gmail_search_messages,
  mcp__d330fecb-a806-4000-ac06-8b1ec6b30b38__gmail_read_thread,
  mcp__cowork__request_cowork_directory
---

# Dashboard Refresh Skill

Pull live data from all connected sources and write `dashboard/data/accounts.js` so Susan's
Account Intelligence Dashboard reflects current signals, activities, and priorities.

## Accounts to Refresh

Always refresh these accounts (from Susan's book):

**Expansions:** 1Password, OnXMaps, dbt Labs
**New Logos (Lands):** NetScout, Tawkify, 1st Dibs, Synchronoss, Farmer's Dog, CarGurus

---

## Execution Steps

### Step 1: Find the dashboard file path

```python
import glob, os
# Find the dashboard data file across sessions
paths = glob.glob('/sessions/*/mnt/Claude master folder/dashboard/data/accounts.js')
if not paths:
    paths = glob.glob('/sessions/*/mnt/**/dashboard/data/accounts.js', recursive=True)
dashboard_path = paths[0] if paths else None
print(f"Dashboard path: {dashboard_path}")
```

If not found, ask the user to confirm their Claude master folder location.

### Step 2: Pull data for each account

For each account in the list, run these in parallel where possible:

#### Salesforce (via Outreach MCP)
```
account_search(query="<account name>")
→ get account ID
opportunity_search(accountId=<id>)
→ pull: stage, close date, ARR, next steps field, opportunity name
→ emails_search(query="<account name>", limit=5) → recent email activity
→ kaia_meeting_search(query="<account name>") → recent call recordings
```

#### ZoomInfo (company + contacts)
```
account_research(company="<account name>")
→ pull: industry, employee count, HQ, revenue, tech stack, intent signals, recent scoops
enrich_contacts(company="<account name>", titles=["VP", "Director", "Head", "CTO", "CPO", "CMO"])
→ pull: top 4-5 contacts with name, title, LinkedIn URL
enrich_intent(company="<account name>")
→ pull: intent score, buying stage, keywords being researched
search_scoops(company="<account name>")
→ pull: recent news, hiring signals, tech changes
```

#### Granola (meeting notes)
```
query_granola_meetings(query="<account name>", limit=3)
→ get most recent meeting note
get_meeting_transcript(meetingId=<id>)
→ extract key discussion points, action items, objections raised
```

#### Gmail (email context)
```
gmail_search_messages(query="<account domain> newer_than:30d", limit=5)
→ get most recent thread
gmail_read_thread(threadId=<id>)
→ extract last email exchange summary
```

### Step 3: Synthesize next steps (AI)

For each account, synthesize 3-5 prioritized `nextSteps` based on all signals. Use this logic:

**Priority = Today** if:
- Salesforce close date is within 7 days
- 6sense/ZoomInfo intent score jumped >20 points
- Granola notes have an open action item

**Priority = This Week** if:
- Stage 3 deal with no recent activity (>5 days)
- High intent score (70+) with no recent outreach
- Expansion account showing new product signals

**Priority = This Month** if:
- Stage 2 deal with regular cadence
- Low intent, maintaining relationship

**Quick action mapping** — always include these where relevant:

| Situation | Action ID | CTA Label |
|-----------|-----------|-----------|
| No recent outreach | `write-email` | Write Email |
| Upcoming call | `call-prep` | Prep Call |
| After a call | `call-summary` | Log Call |
| Expansion account | `expansion-intel` | Find Whitespace |
| Competitor in stack | `battlecard` | Build Battlecard |
| Stale SF next steps | `sfnotes` | Update SF |
| Need exec connection | `sequence` | Build Sequence |
| Deck needed | `deck` | Build Deck |
| Need new contacts | `contacts` | Find Contacts |
| New logo target | `account-research` | Research Account |

Always include at least 3 nextSteps per account. At least one should be `urgency: "today"` or `urgency: "week"`.

### Step 4: Write accounts.js

Write the complete file using this exact format:

```javascript
// accounts.js — auto-generated by dashboard-refresh skill
// Last updated: <ISO timestamp>
// DO NOT edit by hand — regenerated by Cowork on each refresh

const ACCOUNTS = {
  "<Account Name>": {
    type: "Expansion",  // or "Land"
    stage: "Stage 2",
    accountSummary: "<2-3 sentence summary of where the deal stands and why now>",

    linkedin: [
      { name: "<name>", title: "<title>", relevance: "buyer", note: "<1 sentence context>", liUrl: "<url or ''>" },
      // 3-5 contacts
    ],

    buyingMap: {
      focus:   ["<contact name>", ...],    // top 2-3 contacts to prioritize
      involve: ["<exec name>", ...]        // exec or Amplitude team to loop in
    },

    zoominfo: {
      industry:  "<industry>",
      employees: "<count>",
      hq:        "<city, state>",
      revenue:   "<ARR range>",
      techStack: [
        { name: "<tool>", type: "competitor" },  // or "tool"
      ],
      signals: [
        { text: "<signal description — what they're researching or doing>" }
      ]
    },

    salesforce: {
      oppName:   "<SF opportunity name>",
      stage:     "<stage>",
      closeDate: "<YYYY-MM-DD>",
      arr:       "<$XXK>",
      nextSteps: "<current SF next steps text>",
      activities: [
        { date: "<YYYY-MM-DD>", type: "Email|Call|Meeting", note: "<brief note>" }
      ]
    },

    sixsense: {
      score:    <0-100>,
      stage:    "<Awareness|Consideration|Decision|Purchase>",
      keywords: ["<keyword1>", "<keyword2>", ...],
      pageHits: [{ page: "<page name>", hits: <number> }]
    },

    mutiny: {
      recommendation: "<what Mutiny is showing this account + what it signals>"
    },

    nextSteps: [
      {
        p:       1,
        urgency: "today",   // "today" | "week" | "month"
        type:    "email",   // "email" | "call" | "deck" | "linkedin" | "meeting" | "event"
        title:   "<specific action title>",
        why:     "<why this matters right now — reference a specific signal>",
        who:     ["Susan"],  // or ["Susan", "Ariana Henck"] etc.
        action:  "write-email",  // action ID from mapping above
        cta:     "Write Email"
      },
      // 2-4 more steps
    ],

    granolaContext: "<most recent meeting notes — key points, decisions, action items>",
    slackContext:   null,
    gmailContext:   "<most recent email thread summary>"
  },
  // repeat for each account
};

const LAST_REFRESH = {
  timestamp: "<ISO timestamp>",
  sources: {
    salesforce: { status: "connected", lastSync: "<ISO timestamp>" },
    zoominfo:   { status: "connected", lastSync: "<ISO timestamp>" },
    granola:    { status: "connected", lastSync: "<ISO timestamp>" },
    gmail:      { status: "connected", lastSync: "<ISO timestamp>" },
    sixsense:   { status: "connected", lastSync: "<ISO timestamp>" }
  }
};
```

Write this file to the path found in Step 1 using Python:

```python
from datetime import datetime, timezone

content = f"""// accounts.js — auto-generated by dashboard-refresh skill
// Last updated: {datetime.now(timezone.utc).isoformat()}
// DO NOT edit by hand

const ACCOUNTS = {json.dumps(accounts_dict, indent=2)};

const LAST_REFRESH = {json.dumps(last_refresh_dict, indent=2)};
"""

with open(dashboard_path, 'w') as f:
    f.write(content)
print(f"✅ Wrote {len(accounts_dict)} accounts to {dashboard_path}")
```

### Step 5: Report to Susan

After writing, show a compact summary:

```
✅ Dashboard refreshed — <N> accounts updated

| Account     | Intent | Top Action          | Close Date |
|-------------|--------|---------------------|------------|
| 1Password   | 87     | Update SF next steps| 2026-05-30 |
| NetScout    | 72     | Prep discovery call | 2026-06-15 |
| ...         |        |                     |            |

Last sync: <timestamp>
Sources: Salesforce ✓ · ZoomInfo ✓ · Granola ✓ · Gmail ✓

[Open Dashboard](file:///path/to/dashboard/index.html)
```

---

## Error Handling

- If a source fails, mark it `status: "error"` in `LAST_REFRESH.sources` and continue with remaining sources
- If Granola has no notes for an account, set `granolaContext: null`
- If Gmail has no threads, set `gmailContext: null`
- If ZoomInfo can't find an account, use whatever data is already in accounts.js for that account
- Never leave `ACCOUNTS` empty — always write all accounts even if some data is partial

---

## Quick Actions Reference

Every account's `nextSteps` array drives the dashboard action buttons. Each step maps to a Cowork skill:

| action ID | Opens skill | Description |
|-----------|-------------|-------------|
| `write-email` | `sales:draft-outreach` | Personalized outreach email |
| `sequence` | `sales:draft-outreach` | 3-step sequence |
| `call-prep` | `sales:call-prep` | Pre-call brief |
| `call-summary` | `sales:call-summary` | Post-call summary + follow-up |
| `battlecard` | `sales:competitive-intelligence` | Competitor battlecard |
| `expansion-intel` | `amplitude-expansion-intel` | Expansion whitespace analysis |
| `account-research` | `sales:account-research` | Deep company research |
| `sfnotes` | `sf-next-steps-updater` | Update Salesforce next steps |
| `deck` | `amplitude-deck` | Account deck |
| `contacts` | `zoominfo-prospecting` | Find new buying committee contacts |
| `event` | *(none)* | Event/invite draft |
