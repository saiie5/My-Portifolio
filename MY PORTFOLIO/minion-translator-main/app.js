var btnTranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector("textarea");
var outputDiv = document.querySelector("#output");

 var serverUrl = "https://api.funtranslations.com/translate/minion.json"


function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}


function errorHandler(error){
    console.log(error.message);
}


function clickHandler() {
    var textInput = textArea.value; //Taking input       
    
    //caling server for processing

    fetch(getTranslationUrl(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerHTML = translatedText;   //output 
            })
        .catch( errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);