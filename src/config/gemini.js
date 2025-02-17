// const apikey="AIzaSyClhgInjVkXquNvN2B4JjYySHletVIe1ec";



const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
//   process.env.GEMINI_API_KEY
  
  const apiKey = "AIzaSyBGxe38jGnejBBW8SQFfvYEfa5ZuNKEOqw";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response=result.response;
    console.log(result.response.text());
    return response.text();
  }
  
export default  run;