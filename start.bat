echo off

title react-antd-admin
MODE con: COLS=100 LINES=100

@echo **********************************************************************
@echo                This project is designed for doublewill's project
@echo.
@echo                      1. npm run start
@echo.
@echo                      2. npm run build
@echo.
@echo                      2. install package
@echo
@echo **********************************************************************

choice /C 123 /N /M "please select a choice in 5 seconds, if not the first will be the default" /T 5 /D 1

if %errorlevel%==1 goto dev
if %errorlevel%==2 goto build
if %errorlevel%==3 goto install

:build
if exist dist (
  @echo removing dist
  call rmdir dist /s /q
)

@echo building
call npm run build:sit

goto end

:install
if exist node_modules (
  @echo removing node_modules
  call rmdir node_modules /s /q
  call npm cache clean --force & npm i
) else (
  @echo installing develop dependency
  call npm cache clean --force & npm i
)

:dev
if not exist node_modules goto install

echo starting
call npm run start

:end
pause
