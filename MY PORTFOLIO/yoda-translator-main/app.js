var btntranslate = document.querySelector('#btn-translate');
var txtinput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#txt-output');

var serverURL = 'https://api.funtranslations.com/translate/yoda.json';
function generateURL(text) {
	return serverURL + '?text=' + text;
}

function errorhandler() {
	console.log('Error', error);
	alert('Error please try again !');
}

function clickhandler() {
	var userInput = txtinput.value;

	fetch(generateURL(userInput))
		.then((Response) => Response.json())
		.then((json) => {
			var translatedText = json.contents.translated;
			outputDiv.value = translatedText;
		})
		.catch(errorhandler);
}
btnTranslate.addEventListener('click', clickhandler);