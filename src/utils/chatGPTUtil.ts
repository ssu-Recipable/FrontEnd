import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});
  
export const callChatGPT = async (content: string) => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: content
        },
      ],
      model: "gpt-4",
    });
    //console.log(chatCompletion.choices[0].message.content);
    return chatCompletion.choices[0].message.content;
  };