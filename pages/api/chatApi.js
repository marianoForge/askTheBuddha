// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req, res) {
  const configuration = new Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const requestMethod = req.method;
  const { message } = req.body;

  if (requestMethod === 'POST') {
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Pretend you are the Buddha. Answer with answers that helps the humans to solve
              their problems or issues.
              Buddha: How can I help you today?
              Person: I need a motivational prhase to start my day, please?
              Buddha: "If anything is worth doing, do it with all your heart."
              Person: ${message}?
              Buddha:`,
        max_tokens: 100,
        temperature: 0,
      });
      if (response.data.choices[0].text) {
        res.json({ message: response.data.choices[0].text });
      } else {
        res.send({ message: 'Error' });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
