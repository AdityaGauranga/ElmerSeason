var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("txt-input");
var outputdiv = document.querySelector("output");

var serverURL = "https://api.funtranslations.com/translate/fudd.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("An error came up :/", error)
    alert("It seems an unexpected error came up. Please try again after few moments later")
}

function clickHandler() {
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        outputdiv.innerText = translatedTxt;
    })
}