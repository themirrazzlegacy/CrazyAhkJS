# CrazyAHKJS Docs
Documentation, ya know :)

## Table of Contents
[Change the enviornment](#change-the-enviornment)
[Table of Contents](#table-of-contents)
[Error dialogs](#error-dialogs)
[Running outside programs](#running-outside-programs)
[User Account Control](#user-account-control)
[AutoPlay Dialogs](#autoplay-dialogs)
[Pausing in your Code](#pausing-in-your-code)
[Playing Background Music](#playing-background-music)
[Set Device Volume](#set-device-volume)

## Change the enviornment
Add this line to the beggining of your code:
```js
// @env enviornment
```
Replace `enviornment` with the enviornment ID of your choice: `Win11`, `Win10`, `Win8.1`, `Win7`, or `WinXP`. (the default is `Win11`).

## Error Dialogs
Error dialogs use a simple JavaScript command:
```ts
ShowDialog(
   title: string,
   message: string,
   options: number,
   x: number,
   y: number
)
```
You can use our special `ErOpt` options dialog to help with the options.
For example, you could create an error like this:
```js
ShowDialog("Error", "what did u do", 16, 15, 15)
```
Or, you could do it like this:
```js
ShowDialog(
  "Error",
  "what did u do",
  ErOpt.Style.Hand,
  15,15
)
```

The `ErOpt` object has the following properties:
* `ErOpt.Style`
  * `Hand` - Shows the error icon
  * `Warning` - Shows the warning icon
  * `Information` - Shows the information "I"
  * `Question` - Shows the question mark
  * `None` - Shows no icon (default)
* `ErOpt.Buttons`
  * `OK` - OK (default)
  * `OkCancel` - Ok and cancel
  * `AbortRetryIgnore` - Abort, Retry, and Ignore
  * `YesNoCancel` - Yes, No, and Cancel
  * `YesNo` - Yes and No
  * `RetryCancel` - Retry and Cancel
  * `CancelTryAgainContinue` - Cancel, Try Again, and Continue
* `ErOpt.DefaultButton`
  * `First` - 1st is focused automatically (default)
  * `Second` - 2nd is focused automatically
  * `Third` - 3rd is focused automatically
  * `Fourth` - Help is focused automatically
* `HelpButton` - adds a help button
* `RightToLeft` - right to left, for languages like Hebrew and Arabic (or for red zones)
* `SystemModal` - system modal
* `TaskModal` - task modal
* `RightAlign` - text-align to right (NOT the same as right to left!!)
* `AlwaysOnTop` - anoying thing...

If you want to put a dialog in the center, you can use `ShowDialogCentered`:
```ts
ShowDialogCentered(
  title: string,
  message: string,
  offset: string
)
```

For example:
```js
ShowDialogCentered("","This dialog is in the center!")
```

You can also use `ShowDialogCenterOffset` to center a dialog and then move it by a certain amount of pixels:
```js
ShowDialogCenterOffset("","This dialog is 30 pixels away from the center!", 30, 30)
```
Or make a dialog appear at a random position onscreen.
```js
ShowDialogRandom("","This dialog is in a random position!")
```

## Running Outside Programs
We don't recommend, but you can use `Wsh.Run` or `Wsh.Exec`.

## User Account Control
You can show genuine UAC dialogs using `ShowUACFor`. For example, you could use this code to show a user account control dialog for running Notepad with admin permissions:
```js
ShowUACFor("notepad.exe")
```
This works for any executable as long as you know the absolute path, or if it's the same folder or in `C:\Windows` or `C:\Windows\system32`.

## AutoPlay Dialogs
Like stated, you'll need to take the screenshots yourself and put them in the "source" folder (titled `autoplay.png` for Windows 11, `autoplay10.png` for Windows 10, and `autoplay81.png` for Windows 8.1). You can then use `ShowAutoPlay` to show the dialog:
```js
ShowAutoPlay()
```
You can hide it again using `HideAutoPlay`:
```js
HideAutoPlay()
```

Every time `HideAutoPlay` is called, a command prompt quickly opens and closes. To prevent this, you can used Asynchronous Time-Based AutoPlay dialogs, via the `ShowAutoPlayFor` command:
```js
ShowAutoPlayFor(1000) // show an autoplay dialog for 1 second
```

If you need your code to wait, you can use this alternative instead of a `Sleep` function:
```js
ShowAutoPlaySync(1000)
```
## Pausing in your Code
Using the `Sleep` function, it pauses the specified number of milliseconds:
```js
Sleep(1000) // sleep for 1 second
```

## Playing Background Music
You can play background music using the `StartBGM` function:
```js
StartBGM("Marisa Stole the Precious Thing")
```
Note it only supports `.mp3` files that are in the `source` directory (for now).
You don't need to do this if you're going to add it in a video editor later.

## Set Device Volume
You can set the master volume of your device by using the `SetMasterVolume` script:
```js
SetMasterVolume(100)
```

## Recycling Bin
Use `FillRecycleBin` to create a junk file and recycle it:
```js
FillRecycleBin()
```
To empty the recycle bin, just use `EmptyRecycleBin`:
```js
EmptyRecycleBin()
```
