const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-p3fxfu0AIkThnwoi6f0whIEh",
    apiKey: "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",
});

async function generateRegexFromSentence(sentence) {
  const openai = new OpenAIApi(configuration);
  const prompt = `Generate a regular expression that matches the following sentence: ${sentence}\nRegex:`;

  const models = (await openai.listModels()).data;
  console.log(models);
  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: prompt,
    max_tokens: 50,
    n: 1,
    stop: null,
    temperature: 0.5,
  });

  const regex = completion.data.choices[0].text.trim();
  console.log(regex);
  return regex;
}

generateRegexFromSentence('A valid phone number');