var text = document.querySelector("textarea");
var btn = document.querySelector("button");


function text_to_speech(text){
    var utternance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utternance);
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