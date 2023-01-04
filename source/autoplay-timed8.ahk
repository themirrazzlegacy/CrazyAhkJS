#SingleInstance Ignore
Width:=507.904*0.76
Height:=400*0.76
Wideness:=A_ScreenWidth-Width
Gui, Add, Picture, x0 y0 h%Height% w%Width%, ./autoplay81.png
Gui -Caption +AlwaysOnTop +ToolWindow
Gui, Show, h%Height% w%Width% x%Wideness% y0
Sleep, %1%
ExitApp
return


GuiClose:
ExitApp