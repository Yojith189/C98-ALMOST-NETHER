var SpeechRecognition =window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();
function Clicked(){
    document.getElementById("TEXTOUTPUT").innerHTML="";
    Recognition.start();

}
Recognition.onresult=function(event){
    console.log(event);
    content =event.results[0][0].transcript;
    document.getElementById("TEXTOUTPUT").innerHTML= content;
    console.log(content);
    

}
