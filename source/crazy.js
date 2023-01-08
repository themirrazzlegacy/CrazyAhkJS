var fs=new ActiveXObject("Scripting.FileSystemObject");
var wsh = new ActiveXObject("WScript.Shell");
var $CURRENTENV="Win11"
var homedir = wsh.ExpandEnvironmentStrings("%USERPROFILE%");
function ShowDialog(title,text,options,x,y) {
  wsh.Exec("./message-box.exe \""+kindOfToJSON(title)+"\" \""+kindOfToJSON(text)+"\" "+options+" "+x+" "+y)
}

var ErOpt={
    Style: {
        None: 0,
        Hand: 16,
        Warning: 48,
        Asterisk: 64,
        Question: 32
    },
    Buttons: {
        OK:0,
        OkCancel:1,
        AbortRetryIgnore:2,
        YesNoCancel: 3,
        YesNo: 4,
        RetryCancel: 5,
        CancelTryAgainContinue: 6
    },
    DefaultButton: {
        First: 0,
        Second: 256,
        Third: 512,
        Forth: 768
    },
    ShowHelpButton:16384,
    RightToLeft: 1048576,
    RightAlign: 524288,
    AlwaysOnTop:262144,
    SystemModal: 4096,
    TaskModal: 8192
}

//Reads a binary file, returns a string
// https://stackoverflow.com/a/6585953/17003847
function i_binaryFileToString(fileName) {
    var binStream = new ActiveXObject("ADODB.Stream");
    var fs$ = new ActiveXObject("Scripting.FileSystemObject");
    var size = (fs$.getFile(
        fs.GetAbsolutePathName(fileName)
    )).size;

    binStream.Type = 1; //adTypeBinary
    binStream.Open;

    binStream.loadFromFile(fileName);
    var binVariant = binStream.read();
    var adLongVarChar = 201;
    var RS = new ActiveXObject("ADODB.Recordset");

    RS.fields.append("mBinary", adLongVarChar, size);
    RS.open();
    RS.addNew();
    RS("mBinary").appendChunk(binVariant);
    RS.update();
    return RS("mBinary").value;
};
//

function ShowUACFor(program) {
  wsh.Exec("./runas.exe \""+kindOfToJSON(program)+"\"")
}

function i_changeEnv(ne) {
  $CURRENTENV=ne
}

function ShowDialogCenterOffset(title,text,options,x,y) {
  wsh.Exec("./message-box-centerby.exe \""+kindOfToJSON(title)+"\" \""+kindOfToJSON(text)+"\" "+options+" "+x+" "+y)
}
function ShowDialogCentered(title,text,options) {
  wsh.Exec("./message-box-center.exe \""+kindOfToJSON(title)+"\" \""+kindOfToJSON(text)+"\" "+options)
}

function ShowDialogRandom(title,text,options) {
  wsh.Exec("./message-box-random.exe \""+kindOfToJSON(title)+"\" \""+kindOfToJSON(text)+"\" "+options)
}

function StartBGM(type) {
  wsh.Exec("./play-music.exe ./"+type+".mp3");
  Sleep(250)
}

function getHomeDir() {
  return wsh.ExpandEnvironmentStrings('%USERPROFILE%')
}

function InitiateBSOD() {
  wsh.Exec("./InvokeBSOD.exe");
}
function ShowAutoPlay() {
  wsh.Exec('./autoplay.exe')
}

function FillRecycleBin() {
  wsh.Exec('./createtrash.exe')
}

function EmptyRecycleBin() {
  wsh.Exec('./emptytrash.exe')
}

function ShowAutoPlayFor(time) {
  var Execs$={
    'Win11':'autoplay-timed',
    'Win10':'autoplay-timed10',
    'Win8':'autoplay-timed8.exe',
    'Win7': 'autoplay-timed7.exe',
    'WinVista':'autoplay-timed7.exe',
    'WinXP':'autoplay-timedXP.exe'
  }
  wsh.Exec('./'+(Execs$[$CURRENTENV]||'autoplay-timed')+'.exe '+time)
}

function ShowAutoPlaySync(time) {
  var Execs$={
    'Win11':'autoplay-timed',
    'Win10':'autoplay-timed10',
    'Win8':'autoplay-timed8.exe',
    'Win7': 'autoplay-timed7.exe',
    'WinVista':'autoplay-timed7.exe',
    'WinXP':'autoplay-timedXP.exe'
  }
  wsh.Exec('./'+(Execs$[$CURRENTENV]||'autoplay-timed')+'.exe '+time)
  Sleep(time)
}

function HideAutoPlay() {
  wsh.Exec('taskkill /F /IM autoplay.exe')
}


function ShowBaloon(title,text,seconds,options) {
  wsh.Exec("./toast.exe \""+kindOfToJSON(title)+"\" \""+kindOfToJSON(text)+"\" "+seconds+" "+options)
}
function kindOfToJSON(g) {
  var out='';
  for(var i=0;i<g.length;i++) {
    /*if(g.slice(i,i+1)==="\\") {
      out+="`\\"
    } else if(g.slice(i,i+1)==="\n") {
      out+="`n"
    } else */if(g.slice(i,i+1)==="\"") {
      out+="\\\""
    } else {
      out+=g.slice(i,i+1)
    }
  }
  return out
}
function Sleep(ms){
  var od=new Date();
  while(true){
    if(((new Date()).getTime()-od.getTime())>=ms){break}
  }
}

function SetMasterVolume(volume) {
	wsh.Exec('./setVolume.exe '+volume)
}

// Crazy Error Code
Sleep(5000);
(function(){
    var content=i_binaryFileToString('.\\czesource.js');
    /*
    Based on the first comment, we'll change the enviornment.
    Used to make sure AutoPlay dialogs and whatnot match the
    target operating system.
    */
    if(content.slice(0,14)==="// @env Win8.1") {
        i_changeEnv('Win8.1')
    } else if(content.slice(0,13)==="// @env Win11") {
        i_changeEnv('Win11')
    } else if(content.slice(0,13)==="// @env WinXP") {
        i_changeEnv('WinXP')
    } else if(content.slice(0,13)==="// @env Win10") {
        i_changeEnv('Win10')
    } else if(content.slice(0,12)==="// @env Win7") {
        i_changeEnv('Win7')
    } else if(content.slice(0,13)==="// @env WinXP") {
        i_changeEnv('WinXP')
    }
    eval(content);
})()

// End Crazy Error
Sleep(15000)
wsh.Exec("taskkill /F /IM toast.exe");
wsh.Exec("taskkill /F /IM message-box.exe");
wsh.Exec("taskkill /F /IM setVolume.exe");
wsh.Exec("taskkill /F /IM autoplay.exe");
wsh.Exec("taskkill /F /IM autoplay-timed.exe");
wsh.Exec("taskkill /F /IM autoplay-timed10.exe");
wsh.Exec("taskkill /F /IM autoplay-timed8.exe");
wsh.Exec("taskkill /F /IM message-box-center.exe");
wsh.Exec("taskkill /F /IM message-box-centerby.exe");
wsh.Exec("taskkill /F /IM message-box-random.exe");
wsh.Exec("taskkill /F /IM play-music.exe");
