  var request = require("request");
var translationUsername= "Watson Language Translator Service Username"
var translationPassword= "Watson Language Translator Service Username"
var transUrl = "https://gateway.watsonplatform.net/language-translator/api/v2/translate";

var data = {};

data.source = "English";
data.target = "Spanish";
data.text = "whats going on amigo?";

request.post({
    url: transUrl,
    json: data,
    auth: {
        user: translationUsername,
        pass: translationPassword
    }
}, function (err, response, body) {       

    console.log(body);

});