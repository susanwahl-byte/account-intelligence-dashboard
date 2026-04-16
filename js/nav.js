// nav.js — shared nav component injected into every page

const LOGO_SRC = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iQXJ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODM5Ljc5NDI3IDgwMCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGcgaWQ9ImxvZ29fYW1wbGl0dWRlX2Z1bGwiPgogICAgPHBhdGggaWQ9ImxvZ29fYW1wbGl0dWRlX2xvZ290eXBlIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMTE0LjMwNjA0LDE0NC4yMjM5MWwtMTczLjg0MDkyLDQzNS44MTY2MWg3Ny4xOTUxN2wzNC4zMzY2Ny04Ny4yMjQwNGgxODQuMTczMzZsMzMuNzQwMzYsODcuMjI0MDRoNzkuMDE2NjNsLTE3My41MzczNC00MzUuODE2NjFoLTYxLjA4MzkzWk0xMDc4Ljc0NDIyLDQyMy4yMjE1N2w2NS4zNDQ4NC0xNjYuODU4NjYsNjQuNzI2ODUsMTY2Ljg1ODY2aC0xMzAuMDcxNjlaTTE3NDQuMDEwNDYsMjY5LjQzODM4Yy0yMC44NzA4OSwwLTQwLjExNTQ3LDQuODEzODYtNTcuNzQ0NTksMTQuNDMwNzMtMTcuNjE4MjgsOS42Mjc3MS0zMC42OTM3NSwyMi42NDg5OC0zOS4yMDQ3NCwzOS4wNTI5NS0xOC4wMzAyOC0zNS42NTk0LTQ5LjQzOTYtNTMuNDgzNjgtOTQuMjA2My01My40ODM2OC0xOC4wNDExMiwwLTM1LjQxMDAzLDMuOTAzMTMtNTIuMTI4NDIsMTEuNjk4NTQtMTYuNzE4MzksNy44MDYyNS0zMC4yMzgzOSwyMC4zMTc5NC00MC41NzA4MywzNy41MzUwN3YtNDIuODU4NWgtNjguOTg3NzZ2MzA0LjIyNzAzaDY4Ljk4Nzc2di0xNzAuNTAxNThjMC0yNC4zMDc4LDYuNjM1MzItNDIuNjQxNjYsMTkuOTA1OTUtNTUuMDAxNTYsMTMuMjcwNjMtMTIuMzU5OSwyOS4yMTkyNC0xOC41Mzk4NSw0Ny44Njc1MS0xOC41Mzk4NSwyMC42NjQ4OSwwLDM2Ljk3MTI4LDYuNTI2ODksNDguOTMwMDMsMTkuNjAyMzcsMTEuOTQ3OSwxMy4wNjQ2MywxNy45MzI3LDMxLjA1MTU0LDE3LjkzMjcsNTMuOTM5MDR2MTcwLjUwMTU4aDY5LjU5NDkydi0xNzAuNTAxNThjMC0yNC4zMDc4LDYuNTgxMTEtNDIuNjQxNjYsMTkuNzU0MTYtNTUuMDAxNTYsMTMuMTczMDUtMTIuMzU5OSwyOS4xNzU4Ny0xOC41Mzk4NSw0OC4wMTkzLTE4LjUzOTg1LDIwLjQ1ODg5LDAsMzYuNTcwMTMsNi41MjY4OSw0OC4zMjI4OCwxOS42MDIzNywxMS43NTI3NSwxMy4wNjQ2MywxNy42MjkxMiwzMS4wNTE1NCwxNy42MjkxMiw1My45MzkwNHYxNzAuNTAxNThoNzAuNTA1NjR2LTE4NS45OTQ4MmMwLTM3Ljg5Mjg1LTExLjQ5MjU0LTY4LjEzMTI0LTM0LjQ4ODQ2LTkwLjcyNjAxLTIyLjk5NTkyLTIyLjU4MzkyLTUzLjAzOTE1LTMzLjg4MTMxLTkwLjExODg2LTMzLjg4MTMxWk0yMTg2Ljg2MzU0LDI5MC43MTA0MmMtMjIuMTkzNjEtMTQuMTgxMzYtNDYuNTU1NjMtMjEuMjcyMDQtNzMuMDk2ODktMjEuMjcyMDQtMjQuMzA3OCwwLTQ1LjY4ODI2LDUuMjY5MjItNjQuMTE5NywxNS43OTY4Mi0xOC40NDIyNywxMC41Mzg0NC0zMy4yNDE2MywyNS42NDEzNy00NC4zNzYzOCw0NS4yODcxMXYtNTQuNzA4ODJoLTY4Ljk4Nzc2djQxMC41OTgwN2g2OC45ODc3NnYtMTYxLjA2OTAyYzExLjEzNDc1LDE5LjQ1MDU4LDI1LjkzNDExLDM0LjQ0NTA5LDQ0LjM3NjM4LDQ0Ljk3MjY5LDE4LjQzMTQzLDEwLjUzODQ0LDM5LjgxMTg5LDE1LjgwNzY2LDY0LjExOTcsMTUuODA3NjYsNDAuMzIxNDcsMCw3NC41NjA1Ni0xNS4zNTIzLDEwMi43MjgxMi00Ni4wNDYwNSwyOC4xNTY3Mi0zMC42OTM3NSw0Mi4yNDA1LTY4LjAyMjgyLDQyLjI0MDUtMTExLjk5ODA1LDAtMjguNzYzODctNi40MjkzMi01NS4zMDUxNC0xOS4yOTg3OS03OS42MjM3OC0xMi44Njk0OC0yNC4zMTg2NS0zMC4zOTAxOC00My41NjMyMy01Mi41NzI5NS01Ny43NDQ1OVpNMjE2My45MTA5OSw0OTMuMjcxODVjLTE3LjgyNDI4LDE3LjkzMjctMzkuNjA1ODksMjYuODk5MDUtNjUuMzM0LDI2Ljg5OTA1LTI2Ljc0NzI2LDAtNDguOTg0MjQtOC44MTQ1Ni02Ni43MTA5NC0yNi40NDM2OC0xNy43Mzc1NC0xNy42MjkxMi0yNi41OTU0Ny0zOS41MDgzMS0yNi41OTU0Ny02NS42NDg0MiwwLTI2LjU0MTI2LDguODU3OTMtNDguNjI2NDUsMjYuNTk1NDctNjYuMjU1NTcsMTcuNzI2Ny0xNy42MTgyOCwzOS45NjM2OC0yNi40MzI4NCw2Ni43MTA5NC0yNi40MzI4NCwyNS43MjgxMSwwLDQ3LjUwOTcyLDguOTY2MzUsNjUuMzM0LDI2Ljg4ODIxLDE3LjgzNTEyLDE3LjkzMjcsMjYuNzQ3MjYsMzkuODY2MSwyNi43NDcyNiw2NS44MDAyMSwwLDI1LjUzMjk1LTguOTEyMTQsNDcuMjYwMzYtMjYuNzQ3MjYsNjUuMTkzMDZaTTIzMTMuNDQ0MSw1ODAuMDQwNTJoNjguOTg3NzZWMTQ0LjIyMzkxaC02OC45ODc3NnY0MzUuODE2NjFaTTI0NDkuNDU3MjIsNTgwLjA0MDUyaDY4Ljk4Nzc2di0zMDQuMjI3MDNoLTY4Ljk4Nzc2djMwNC4yMjcwM1pNMjQ4NC40MDEwNSwxMzQuNDk4NjJjLTEyLjE1MzksMC0yMi41OTQ3Nyw0LjM1ODQ5LTMxLjMwMDkxLDEzLjA2NDYzLTguNzE2OTgsOC43MTY5OC0xMy4wNjQ2MywxOS4wNDk0My0xMy4wNjQ2MywzMC45OTczMywwLDEyLjM1OTksNC4zNDc2NSwyMi44OTgzNCwxMy4wNjQ2MywzMS42MTUzMyw4LjcwNjE0LDguNzA2MTQsMTkuMTQ3LDEzLjA2NDYzLDMxLjMwMDkxLDEzLjA2NDYzLDEyLjE2NDc0LDAsMjIuNjQ4OTgtNC4zNTg0OSwzMS40NjM1NC0xMy4wNjQ2Myw4LjgxNDU2LTguNzE2OTgsMTMuMjE2NDItMTkuMjU1NDIsMTMuMjE2NDItMzEuNjE1MzMsMC0xMS45NDc5LTQuNDAxODYtMjIuMjgwMzUtMTMuMjE2NDItMzAuOTk3MzMtOC44MTQ1Ni04LjcwNjE0LTE5LjI5ODc5LTEzLjA2NDYzLTMxLjQ2MzU0LTEzLjA2NDYzWk0yNjg5Ljg1NzI5LDE5NC4wNjQ2N2gtNjkuNTk0OTJ2ODEuNzQ4ODJoLTU3Ljc0NDU5djY1Ljk1Mmg1Ny43NDQ1OXYxMjMuNjk2NTljMCwzNy44OTI4NSwxMC4xMjY0NSw2Ny4wNjg3MiwzMC4zOTAxOCw4Ny41Mjc2MSwyMC4yNTI4OSwyMC40Njk3Myw0Ny41MDk3MiwzMC43MDQ2LDgxLjc0ODgyLDMwLjcwNDYsMTQuMTgxMzYsMCwyNi42NDk2OC0xLjIxNDMxLDM3LjM4MzI4LTMuNjUzNzZ2LTY0LjExOTdjLTYuMjc3NTMsMS42MTU0Ni0xMy43ODAyMSwyLjQyODYxLTIyLjQ4NjM1LDIuNDI4NjEtMTcuODM1MTIsMC0zMS44NjQ2OS00LjQxMjctNDIuMDg4NzEtMTMuMjI3MjYtMTAuMjM0ODctOC44MTQ1Ni0xNS4zNTIzLTIyLjQzMjE0LTE1LjM1MjMtNDAuODc0NDF2LTEyMi40ODIyOGg3OS45MjczNnYtNjUuOTUyaC03OS45MjczNnYtODEuNzQ4ODJaTTMwMzYuMDEwNDEsNDQwLjU0NzEyYzAsMjMuOTA2NjUtNi44MzA0Nyw0My4wNTM2NS0yMC41MTMxLDU3LjQ0MTAxLTEzLjY3MTc5LDE0LjM4NzM2LTMxLjc1NjI3LDIxLjU3NTYyLTU0LjI0MjYyLDIxLjU3NTYyLTIyLjI5MTE5LDAtNDAuMjIzODktNy4xODgyNi01My43OTgwOS0yMS41NzU2Mi0xMy41NzQyMS0xNC4zODczNi0yMC4zNjEzMS0zMy41MzQzNi0yMC4zNjEzMS01Ny40NDEwMXYtMTY0LjczMzYzaC02OC45ODc3NnYxNzIuOTQxMDNjMCw0Mi43NTAwOCwxMS4yNDMxNyw3Ni4zMjc4MSwzMy43Mjk1MiwxMDAuNzQ0MDMsMjIuNDk3MTksMjQuNDE2MjMsNTMuMzg2MSwzNi42MjQzNCw5Mi42OTkyNiwzNi42MjQzNCwyMC4wNTc3MywwLDM3Ljg4MjAxLTQuNjYyMDcsNTMuNDgzNjgtMTMuOTg2MiwxNS42MDE2Ni05LjMxMzI5LDI4LjI2NTE0LTIyLjY4MTUsMzcuOTkwNDMtNDAuMTE1NDd2NDguMDE5M2g2OS42MDU3NnYtMzA0LjIyNzAzaC02OS42MDU3NnYxNjQuNzMzNjNaTTM0MTIuMTc0MjMsMzI5LjMwODAxYy0xMS4xNDU1OS0xOS4yNDQ1OC0yNS44MjU2OS0zNC4wNDM5NC00NC4wNjE5Ni00NC4zNzYzOC0xOC4yMzYyNy0xMC4zMzI0NC0zOS40MTA3NC0xNS40OTMyNC02My41MjMzOC0xNS40OTMyNC0yNi41NDEyNiwwLTUwLjk1NzQ5LDYuOTgyMjYtNzMuMjM3ODMsMjAuOTY4NDYtMjIuMjkxMTksMTMuOTc1MzYtMzkuOTIwMzEsMzMuMTIyMzctNTIuODg3MzYsNTcuNDQxMDEtMTIuOTY3MDUsMjQuMzE4NjUtMTkuNDUwNTgsNTAuODU5OTEtMTkuNDUwNTgsNzkuNjIzNzgsMCwyOC43NzQ3Miw2LjQ4MzUzLDU1LjM3MDE5LDE5LjQ1MDU4LDc5Ljc4NjQxLDEyLjk2NzA1LDI0LjQxNjIzLDMwLjU5NjE4LDQzLjY2MDgxLDUyLjg4NzM2LDU3Ljc0NDU5LDIyLjI4MDM1LDE0LjA4Mzc4LDQ2LjY5NjU3LDIxLjEyMDI1LDczLjIzNzgzLDIxLjEyMDI1LDI0LjExMjY1LDAsNDUuMjg3MTEtNS4xMTc0Myw2My41MjMzOC0xNS4zNTIzLDE4LjIzNjI3LTEwLjIyNDAyLDMyLjkxNjM3LTI0Ljk2OTE3LDQ0LjA2MTk2LTQ0LjIxMzc1djUzLjQ4MzY4aDY5LjkwOTMzVjE0NC4yMjM5MWgtNjkuOTA5MzN2MTg1LjA4NDA5Wk0zMzg1LjU4OTYsNDkzLjU3NTQzYy0xNy43Mzc1NCwxNy43Mzc1NC0zOS43Njg1MiwyNi41OTU0Ny02Ni4xMDM3OSwyNi41OTU0Ny0yNS43Mzg5NSwwLTQ3LjUyMDU3LTguOTY2MzUtNjUuMzQ0ODQtMjYuODk5MDUtMTcuODM1MTItMTcuOTMyNy0yNi43NDcyNi0zOS44NTUyNi0yNi43NDcyNi02NS44MDAyMSwwLTI1LjUyMjExLDguOTEyMTQtNDcuMjYwMzYsMjYuNzQ3MjYtNjUuMTkzMDYsMTcuODI0MjgtMTcuOTIxODYsMzkuNjA1ODktMjYuODg4MjEsNjUuMzQ0ODQtMjYuODg4MjEsMjYuMzM1MjYsMCw0OC4zNjYyNCw4LjgxNDU2LDY2LjEwMzc5LDI2LjQzMjg0LDE3LjcyNjcsMTcuNjI5MTIsMjYuNTg0NjMsMzkuNTE5MTYsMjYuNTg0NjMsNjUuNjQ4NDIsMCwyNi4zNDYxLTguODU3OTMsNDguMzc3MDktMjYuNTg0NjMsNjYuMTAzNzlaTTM4MzkuNzk0MjcsNDIxLjQwMDExYzAtMjguOTgwNzEtNi42ODk1My01NS4xNjQxOS0yMC4wNTc3My03OC41NzIxMS0xMy4zNzkwNS0yMy4zOTcwOC0zMS4zNTUxMi00MS40ODE1Ni01My45NDk4OC01NC4yNDI2Mi0yMi41OTQ3Ny0xMi43NzE5LTQ3LjQ2NjM2LTE5LjE0Ny03NC42MTQ3Ny0xOS4xNDctMjguNzYzODcsMC01NS4xNTMzNSw2Ljg4NDY4LTc5LjE2ODQyLDIwLjY2NDg5LTI0LjAwNDIzLDEzLjc4MDIxLTQyLjk1NjA4LDMyLjY2Ny01Ni44MzM4Niw1Ni42ODIwNy0xMy44Nzc3OCwyNC4wMDQyMy0yMC44MTY2OCw1MC41MDIxMi0yMC44MTY2OCw3OS40NzE5OSwwLDI5Ljc4MzAyLDYuOTM4ODksNTYuOTQyMjgsMjAuODE2NjgsODEuNDU2MDgsMTMuODc3NzgsMjQuNTEzOCwzMi44NzMsNDMuNzE1MDIsNTYuOTg1NjUsNTcuNTkyOCwyNC4xMTI2NSwxMy44Nzc3OCw1MC44NTk5MSwyMC44MTY2OCw4MC4yNDE3OCwyMC44MTY2OCwzNy40ODA4NiwwLDY5LjM4ODkyLTkuNzI1MjksOTUuNzM1MDItMjkuMTc1ODcsMjYuMzM1MjYtMTkuNDUwNTgsNDIuMzM4MDgtNDUuMTc4NjksNDguMDE5My03Ny4xOTUxN2gtNjkuNjA1NzZjLTMuMDM1NzcsMTIuOTY3MDUtMTEuMjk3MzgsMjMuNTA1NS0yNC43NjMxNywzMS42MDQ0OC0xMy40NzY2Myw4LjEwOTgzLTI5LjUzMzY2LDEyLjE1MzktNDguMTcxMDksMTIuMTUzOS0yNC4xMTI2NSwwLTQzLjg2NjgxLTYuNDgzNTMtNTkuMjYyNDctMTkuNDUwNTgtMTUuNDA2NTEtMTIuOTU2MjEtMjUuMzM3OC0zMC43OTEzMy0yOS43OTM4Ny01My40ODM2OGgyMzMuNDE3ODFjMS4yMTQzMS01LjQ3NTIyLDEuODIxNDYtMTUuMjAwNTEsMS44MjE0Ni0yOS4xNzU4N1pNMzYwNi4zODczLDM5MS4zMTM1MWM1LjA2MzIyLTE4LjY0ODI3LDE0LjY4MDA5LTMzLjEzMzIxLDI4Ljg3MjI5LTQzLjQ2NTY1LDE0LjE4MTM2LTEwLjMzMjQ0LDMxLjQ5NjA2LTE1LjUwNDA5LDUxLjk2NTc5LTE1LjUwNDA5LDIwLjY2NDg5LDAsMzcuOTM2MjIsNS40MzE4NSw1MS44MTQwMSwxNi4yNjMwMywxMy44Nzc3OCwxMC44NDIwMiwyMi4zNDU0LDI1LjA3NzU5LDI1LjM4MTE2LDQyLjcwNjcxaC0xNTguMDMzMjZaIi8+CiAgICA8cGF0aCBpZD0ibG9nb19hbXBsaXR1ZGVfbWFyay1jaXJjbGUiIGNsYXNzPSJjbHMtMSIgZD0iTTQwMCwwQzE3OS4xMTYyNywwLDAsMTc5LjExNjIxLDAsNDAwczE3OS4xMTYyNyw0MDAsNDAwLDQwMCw0MDAtMTc5LjExNjk0LDQwMC00MDBTNjIwLjg4Mzc5LDAsNDAwLDBaTTY3NC4zMDkzMyw0MTIuMjA4ODZoLTE5MC4wODQ0N2MxMy42MTE0NSw1NC41ODE0MiwzOC41NjkyNywxODUuMDYwMTgsNzIuODkxNzgsMTg1LjA2MDE4LDI1Ljk3NDA2LDAsMzguMDQ3NjEtNDAuNjI5ODgsNjEuNTI2NDMtMTA2LjM0NTA5LDMuODQ2MDEtMTAuNzY0ODksOC45OTc1Ni0yNS43Mjc5MSwxNC45MTEzMi00MS43NzE4NSwxLjM2NTExLTMuNzAzMjUsNC44NTMwMy02LjMxNzAyLDguNzk5OC02LjI4NTI4LDYuMTYxOTMuMDQ5NDQsMTAuNTU3OCw2LjA0NzQ5LDguNjkwNjcsMTEuOTM0OTQtMy40MjE1MSwxMC43ODg5NC02Ljc2Mjc2LDIzLjEyMjU2LTkuOTEyMTEsMzcuMjQ2MzQtMjEuNDgyNDIsOTYuMzQxMDYtNDYuODQ1NzYsMTU4Ljg3NTQ5LTk3Ljk5MjEzLDE1OC44NzU0OS01Ny43MjEwMSwwLTkxLjc2OTcxLTE0OS4xMDc0Mi0xMTYuMzA1MDUtMjM4LjcxNDcyaC0xNzQuMTM2MzVzLTE4LjU1NTYsNTguMTYyMzUtMzQuNDY5NDIsMTEwLjkyMDY1Yy0yLjMxMzM1LDcuNjY5NTYtOS4zNzQzMywxMi45MTY1LTE3LjM4NTEzLDEyLjkxNjVoLS4wMDAwNmMtMTEuMTMyNTEsMC0xOS42NTgzOS05LjkyMjczLTE3Ljk0OTg5LTIwLjkyMzIyLDQuODAwMjktMzAuOTA3NDcsMTEuMDc1NS02My44NTU0NywxOS4zNjI3My0xMDMuMDc0NThoLTcwLjE1OTQyYy0xNS4yNzM1LDAtMjcuNjU1MDktMTIuMzgxNTktMjcuNjU1MDktMjcuNjU1MTVoMGMwLTE1LjQyNzczLDEyLjYyMzE3LTI3Ljg3MjMxLDI4LjA0OTI2LTI3LjY1MjM0bDgyLjA2NjM1LDEuMTY5NjhjMjkuMjk0MDEtMTE5Ljc0MTgyLDcyLjkwNDA1LTIzNS42NjExMywxMzIuNDM3ODEtMjM1LjY2MTEzLDU2LjkzOTgyLDAsMTAzLjA2MDU1LDE1NC4wNzQ3MSwxMjQuNzQ2ODMsMjM4Ljc3NDksNzEuNTU4NDcsMS42MjEzNCwxNDcuODUyNjYsNC4zMDY4OCwyMDQuMjU4NjEsOC43NTYxLDExLjA0NTQxLjg3MTA5LDE5LjU1NTM2LDEwLjEwMTA3LDE5LjU1NTM2LDIxLjE4MDY2di4wMDAxMmMwLDExLjczNDc0LTkuNTEzLDIxLjI0NzgtMjEuMjQ3OCwyMS4yNDc4Wk0zNDQuOTA3OSwxNzUuNTgyNTJjLTE4LjUyMTczLDAtNTEuOTU1Miw3NC43MzU4NC03OS42MTA5NiwxODIuOTcyMTcsNi4zODgwNi4wMDM0Miw2OC43OTgwMy4wNzAzMSwxNDcuMzY1MjMsMS4zMzIyOC0yMy4xNTU0Ni04NS40NDg3My01MS4wMjgwOC0xODQuMzA0NDQtNjcuNzU0MjctMTg0LjMwNDQ0WiIvPgogIDwvZz4KPC9zdmc+";

const SKILL_LINKS = {
  'write-email':      'claude://skill/sales:draft-outreach',
  'sequence':         'claude://skill/sales:draft-outreach',
  'call-prep':        'claude://skill/sales:call-prep',
  'call-summary':     'claude://skill/sales:call-summary',
  'battlecard':       'claude://skill/sales:competitive-intelligence',
  'expansion-intel':  'claude://skill/amplitude-expansion-intel',
  'account-research': 'claude://skill/sales:account-research',
  'sfnotes':          'claude://skill/sf-next-steps-updater',
  'deck':             'claude://skill/amplitude-deck',
  'event':            'claude://',
  'contacts':         'claude://skill/zoominfo-prospecting',
};

function injectNav(activePage) {
  const lastSync = (typeof LAST_REFRESH !== 'undefined' && LAST_REFRESH.timestamp)
    ? new Date(LAST_REFRESH.timestamp).toLocaleString('en-US', { month:'short', day:'numeric', hour:'numeric', minute:'2-digit' })
    : 'Never synced';

  const pages = [
    { id: 'index',   label: 'My Accounts', icon: '◎', href: 'index.html' },
    { id: 'queue',   label: 'Action Queue', icon: '⚡', href: 'queue.html' },
    { id: 'settings',label: 'Settings',    icon: '⚙', href: 'settings.html' },
  ];

  const links = pages.map(p => {
    const cls = p.id === activePage ? 'active' : '';
    return `<a href="${p.href}" class="${cls}">${p.icon} ${p.label}</a>`;
  }).join('');

  document.getElementById('app-nav').innerHTML = `
    <nav class="nav">
      <div style="display:flex;align-items:center;gap:20px;">
        <a href="index.html" style="display:flex;align-items:center;">
          <img src="${LOGO_SRC}" alt="Amplitude" style="height:20px;width:auto;" />
        </a>
        <div class="nav-links">${links}</div>
      </div>
      <div class="nav-right">
        <span class="last-sync">Last sync: ${lastSync}</span>
        <button class="refresh-btn" onclick="openRefresh()">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          Refresh Data
        </button>
      </div>
    </nav>
  `;
}

function openRefresh() {
  window.location.href = 'claude://skill/amplitude-expansion-intel';
}

// ── Action Modal ──────────────────────────────────────────────────
let _currentSkillLink = 'claude://';
let _currentPrompt = '';

function injectModal() {
  const div = document.createElement('div');
  div.id = 'actionModal';
  div.style.display = 'none';
  div.className = 'modal-overlay';
  div.onclick = (e) => { if (e.target === div) closeModal(); };
  div.innerHTML = `
    <div class="modal-box">
      <div class="modal-head">
        <div class="modal-head-title">
          <span id="modalEmoji">⚡</span>
          <span id="modalTitle">Action</span>
        </div>
        <button class="modal-close" onclick="closeModal()">×</button>
      </div>
      <div class="modal-body">
        <button class="modal-cowork-btn" id="modalCoworkBtn" onclick="openInCowork()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Open in Cowork
        </button>
        <div class="modal-prompt-hint">Prompt auto-copies when you click above — just paste in Cowork</div>
        <div class="modal-prompt-text" id="modalPrompt"></div>
        <button class="modal-copy-btn" id="modalCopyBtn" onclick="copyModalPrompt()">Copy prompt</button>
      </div>
    </div>
  `;
  document.body.appendChild(div);
}

function openAction(actionId, acct, title, prompt) {
  _currentSkillLink = SKILL_LINKS[actionId] || 'claude://';
  _currentPrompt = prompt;
  document.getElementById('modalEmoji').textContent = '⚡';
  document.getElementById('modalTitle').textContent = title || actionId;
  document.getElementById('modalPrompt').textContent = prompt;
  document.getElementById('modalCoworkBtn').className = 'modal-cowork-btn';
  document.getElementById('modalCoworkBtn').innerHTML = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    Open in Cowork`;
  document.getElementById('modalCopyBtn').textContent = 'Copy prompt';
  document.getElementById('modalCopyBtn').classList.remove('copied');
  document.getElementById('actionModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('actionModal').style.display = 'none';
}

function openInCowork() {
  const btn = document.getElementById('modalCoworkBtn');
  navigator.clipboard.writeText(_currentPrompt).then(() => {
    btn.classList.add('success');
    btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied! Opening Cowork…`;
    setTimeout(() => { window.location.href = _currentSkillLink; }, 400);
    setTimeout(() => {
      btn.classList.remove('success');
      btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Open in Cowork`;
    }, 3000);
  });
}

function copyModalPrompt() {
  navigator.clipboard.writeText(_currentPrompt).then(() => {
    const btn = document.getElementById('modalCopyBtn');
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy prompt'; btn.classList.remove('copied'); }, 2500);
  });
}
