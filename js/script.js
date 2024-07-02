var speech = new SpeechSynthesisUtterance();

function toSpeech(){
    var txtToSpeech = document.getElementById("txtToSpeech");
    speech.text = txtToSpeech.value;
    speech.rate=1;
    speech.volume=5;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
}