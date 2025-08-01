/*# License: MIT
Generated via github.com/Manoonchai/kiimo
*/
var AltGr = { PLAIN: "plain", ALTERNATE: "alternate" };
var Shift = { PLAIN: "plain", SHIFTED: "shifted" };

var contextID = -1;
var altGrState = AltGr.PLAIN;
var shiftState = Shift.PLAIN;
var lastRemappedKeyEvent = undefined;

var lut = {
"Digit0": { "plain": {"plain": "0", "shifted": ")"}, "alternate": {"plain": "๐", "shifted":""}, "code": "Digit0"},
"Digit1": { "plain": {"plain": "1", "shifted": "!"}, "alternate": {"plain": "๑", "shifted":""}, "code": "Digit1"},
"Digit2": { "plain": {"plain": "2", "shifted": "@"}, "alternate": {"plain": "๒", "shifted":""}, "code": "Digit2"},
"Digit3": { "plain": {"plain": "3", "shifted": "#"}, "alternate": {"plain": "๓", "shifted":""}, "code": "Digit3"},
"Digit4": { "plain": {"plain": "4", "shifted": "$"}, "alternate": {"plain": "๔", "shifted":""}, "code": "Digit4"},
"Digit5": { "plain": {"plain": "5", "shifted": "%"}, "alternate": {"plain": "๕", "shifted":""}, "code": "Digit5"},
"Digit6": { "plain": {"plain": "6", "shifted": "^"}, "alternate": {"plain": "๖", "shifted":""}, "code": "Digit6"},
"Digit7": { "plain": {"plain": "7", "shifted": "&"}, "alternate": {"plain": "๗", "shifted":""}, "code": "Digit7"},
"Digit8": { "plain": {"plain": "8", "shifted": "*"}, "alternate": {"plain": "๘", "shifted":""}, "code": "Digit8"},
"Digit9": { "plain": {"plain": "9", "shifted": "("}, "alternate": {"plain": "๙", "shifted":""}, "code": "Digit9"},
"Minus": { "plain": {"plain": "-", "shifted": "_"}, "alternate": {"plain": "÷", "shifted":""}, "code": "Minus"},
"Equal": { "plain": {"plain": "=", "shifted": "+"}, "alternate": {"plain": "×", "shifted":""}, "code": "Equal"},
"Backquote": { "plain": {"plain": "`", "shifted": "~"}, "alternate": {"plain": "`", "shifted":""}, "code": "Backquote"},
"IntlYen": { "plain": {"plain": "`", "shifted": "~"}, "alternate": {"plain": "¥", "shifted":""}, "code": "IntlYen"},
"KeyQ": { "plain": {"plain": "พ", "shifted": "ฑ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyQ"},
"KeyW": { "plain": {"plain": "ค", "shifted": "ฒ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyW"},
"KeyE": { "plain": {"plain": "ย", "shifted": "ษ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyE"},
"KeyR": { "plain": {"plain": "ว", "shifted": "ญ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyR"},
"KeyT": { "plain": {"plain": "ล", "shifted": "ฟ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyT"},
"KeyY": { "plain": {"plain": "ป", "shifted": "ฎ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyY"},
"KeyU": { "plain": {"plain": "ั", "shifted": "ฉ"}, "alternate": {"plain": "ฺ", "shifted":""}, "code": "KeyU"},
"KeyI": { "plain": {"plain": "ก", "shifted": "ภ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyI"},
"KeyO": { "plain": {"plain": "ต", "shifted": "ฐ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyO"},
"KeyP": { "plain": {"plain": "บ", "shifted": "ฤ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyP"},
"BracketLeft": { "plain": {"plain": "็", "shifted": "ฆ"}, "alternate": {"plain": "[", "shifted":"{"}, "code": "BracketLeft"},
"BracketRight": { "plain": {"plain": "ู", "shifted": "ฌ"}, "alternate": {"plain": "]", "shifted":"}"}, "code": "BracketRight"},
"KeyA": { "plain": {"plain": "ห", "shifted": "ๆ"}, "alternate": {"plain": "◌", "shifted":""}, "code": "KeyA"},
"KeyS": { "plain": {"plain": "เ", "shifted": "ถ"}, "alternate": {"plain": "๏", "shifted":""}, "code": "KeyS"},
"KeyD": { "plain": {"plain": "น", "shifted": "แ"}, "alternate": {"plain": "๛", "shifted":""}, "code": "KeyD"},
"KeyF": { "plain": {"plain": "ร", "shifted": "ข"}, "alternate": {"plain": "฿", "shifted":""}, "code": "KeyF"},
"KeyG": { "plain": {"plain": "ม", "shifted": "ผ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyG"},
"KeyH": { "plain": {"plain": "อ", "shifted": "ึ"}, "alternate": {"plain": "ํ", "shifted":""}, "code": "KeyH"},
"KeyJ": { "plain": {"plain": "า", "shifted": "ใ"}, "alternate": {"plain": "ๅ", "shifted":""}, "code": "KeyJ"},
"KeyK": { "plain": {"plain": "่", "shifted": "ำ"}, "alternate": {"plain": "ฃ", "shifted":""}, "code": "KeyK"},
"KeyL": { "plain": {"plain": "้", "shifted": "โ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyL"},
"Semicolon": { "plain": {"plain": "ง", "shifted": "ศ"}, "alternate": {"plain": ";", "shifted":":"}, "code": "Semicolon"},
"Quote": { "plain": {"plain": "ื", "shifted": "ฮ"}, "alternate": {"plain": "'", "shifted":"\""}, "code": "Quote"},
"Backslash": { "plain": {"plain": "๋", "shifted": "ฯ"}, "alternate": {"plain": "\\", "shifted":"|"}, "code": "Backslash"},
"IntlBackslash": { "plain": {"plain": ".", "shifted": ","}, "alternate": {"plain": "§", "shifted":""}, "code": "IntlBackslash"},
"KeyZ": { "plain": {"plain": "ช", "shifted": "ฬ"}, "alternate": {"plain": "ฦ", "shifted":""}, "code": "KeyZ"},
"KeyX": { "plain": {"plain": "ไ", "shifted": "๋"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyX"},
"KeyC": { "plain": {"plain": "ส", "shifted": "๊"}, "alternate": {"plain": "๚", "shifted":""}, "code": "KeyC"},
"KeyV": { "plain": {"plain": "ท", "shifted": "ซ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyV"},
"KeyB": { "plain": {"plain": "จ", "shifted": "ฝ"}, "alternate": {"plain": "", "shifted":""}, "code": "KeyB"},
"KeyN": { "plain": {"plain": "ิ", "shifted": "?"}, "alternate": {"plain": "ฅ", "shifted":""}, "code": "KeyN"},
"KeyM": { "plain": {"plain": "ี", "shifted": "ณ"}, "alternate": {"plain": "๎", "shifted":""}, "code": "KeyM"},
"Comma": { "plain": {"plain": "ด", "shifted": "ธ"}, "alternate": {"plain": ",", "shifted":"<"}, "code": "Comma"},
"Period": { "plain": {"plain": "ะ", "shifted": "ฏ"}, "alternate": {"plain": ".", "shifted":">"}, "code": "Period"},
"Slash": { "plain": {"plain": "ุ", "shifted": "฿"}, "alternate": {"plain": "/", "shifted":"?"}, "code": "Slash"},
"IntlRo": { "plain": {"plain": "_", "shifted": "_"}, "alternate": {"plain": "_", "shifted":"_"}, "code": "IntlRo"},
"Space": { "plain": {"plain": " ", "shifted": " "}, "alternate": {"plain": " ", "shifted":" "}, "code": "Space"},
"NumpadDecimal": { "plain": {"plain": ".", "shifted": ","}, "alternate": {"plain": ".", "shifted":"."}, "code": "NumpadDecimal"},
};


chrome.input.ime.onFocus.addListener(function(context) {
  contextID = context.contextID;
});

function updateAltGrState(keyData) {
  altGrState = (keyData.code == "AltRight") ? ((keyData.type == "keydown") ? AltGr.ALTERNATE : AltGr.PLAIN) : altGrState;
}

function updateShiftState(keyData) {
  shiftState = ((keyData.shiftKey && !(keyData.capsLock)) || (!(keyData.shiftKey) && keyData.capsLock)) ? Shift.SHIFTED : Shift.PLAIN;
}

function isPureModifier(keyData) {
  return (keyData.key == "Shift") || (keyData.key == "Ctrl") || (keyData.key == "Alt");
}

function isRemappedEvent(keyData) {
  // hack, should check for a sender ID (to be added to KeyData)
  return lastRemappedKeyEvent != undefined &&
         (lastRemappedKeyEvent.key == keyData.key &&
          lastRemappedKeyEvent.code == keyData.code &&
          lastRemappedKeyEvent.type == keyData.type
         ); // requestID would be different so we are not checking for it  
}


chrome.input.ime.onKeyEvent.addListener(
    function(engineID, keyData) {
      var handled = false;
      
      if (isRemappedEvent(keyData)) {
        lastRemappedKeyEvent = undefined;
        return handled;
      }

      updateAltGrState(keyData);
      updateShiftState(keyData);
                
      if (lut[keyData.code]) {
        //avoid hell key:process loop
        if (keyData.ctrlKey === true && keyData.code != "Space") {
            return;
        }
          var remappedKeyData = keyData;
          remappedKeyData.key = lut[keyData.code][altGrState][shiftState];
          remappedKeyData.code = lut[keyData.code].code;
        
        if (chrome.input.ime.sendKeyEvents != undefined) {
          chrome.input.ime.sendKeyEvents({"contextID": contextID, "keyData": [remappedKeyData]});
          handled = true;
          lastRemappedKeyEvent = remappedKeyData;
        } else if (keyData.type == "keydown" && !isPureModifier(keyData)) {
          chrome.input.ime.commitText({"contextID": contextID, "text": remappedKeyData.key});
          handled = true;
        }
      }
      
      return handled;
});
