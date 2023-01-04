# CrazyAHKJS Docs
Documentation, ya know :)

## Table of Contents
[Table of Contents](#table-of-contents)
[Error dialogs](#error-dialogs)
[Running outside programs](#running-outside-programs)
[User Account Control](#user-account-control)
[AutoPlay Dialogs](#autoplay-dialogs)

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
```ts
ShowDialogCentered("","This dialog is in the center!")
```

You can also use `ShowDialogCenterOffset` to center a dialog and then move it by a certain amount of pixels:
```ts
ShowDialogCenterOffset("","This dialog is 30 pixels away from the center!", 30, 30)
```
Or make a dialog appear at a random position onscreen.
```ts
ShowDialogRandom("","This dialog is in a random position!")
```

## unning Outside Programs
We don't recommend, but you can use `Wsh.Run` or `Wsh.Exec`.
