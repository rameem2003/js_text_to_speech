var text = document.querySelector("textarea");
var btn = document.querySelector("button");
var select = document.querySelector("select");

function voices(){
    for(var voice of speechSynthesis.getVoices()){
        console.log(voice);
        var option = `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
        select.insertAdjacentHTML("beforeend", option);
    }
}

speechSynthesis.addEventListener("voiceschanged", voices)

function text_to_speech(text){
    var speech = new SpeechSynthesisUtterance(text);
    for(var voice of speechSynthesis.getVoices()){
        if(voice.name === select.value){
            speech.voice = voice;
        }
    }
    speechSynthesis.speak(speech);
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(text.value != ""){
        text_to_speech(text.value);
    }
    else{
        text_to_speech("You didn't input any message");
    }
})