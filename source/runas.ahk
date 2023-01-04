full_command_line := DllCall("GetCommandLine", "str")

if not (A_IsAdmin or RegExMatch(full_command_line, " /restart(?!\S)"))
{
    try
    {
        Run *RunAs %1%
    }
    ExitApp
}

MsgBox A_IsAdmin: %A_IsAdmin%`nCommand line: %full_command_line%