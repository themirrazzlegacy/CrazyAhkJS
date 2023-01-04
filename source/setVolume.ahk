#SingleInstance Off
SoundSet, %1%
Send ^{Volume_Up}
if (%1% = "100") {
  Send ^{Volume_Down}
}
