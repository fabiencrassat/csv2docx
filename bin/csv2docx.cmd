@ECHO OFF

@SETLOCAL ENABLEEXTENSIONS
@SET me=%~n0
@SET parent=%~dp0
@SET filepath="..\bin_node\cli.js"

@IF EXIST "%parent%\node.exe" (
  "%parent%\node.exe" "%parent%\%filepath%" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node "%parent%\%filepath%" %*
)
