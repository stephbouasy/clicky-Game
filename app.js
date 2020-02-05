const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  authenticator: new IamAuthenticator({
    apikey: 'j8_S9oguJ5em6hJnjS0ByEYCuveLZEDhOmxfbtEuN0l6',
  }),
  url: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/dfc05c57-0989-4b05-bd5f-3530ce8a3e80',
});

const translateParams = {
  text: 'Hello',
  modelId: 'en-es',
};

languageTranslator.translate(translateParams)
  .then(translationResult => {
    console.log(JSON.stringify(translationResult, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

  // module.exports = {
  //   Script: require("./script"),
  //   Server: require("./server")
  // };

  // module.exports = script;
  // <script type="text/javascript" src="./script.js"></script> 