import OpenAI from "openai";
// import { useState } from "react";

const RecommendRecipes = () => {
  const ingredient = [
    "김치",
    "즉석밥",
    "모짜렐라치즈",
    "계란",
    "식빵",
    "김",
    "고추장",
    "양배추",
    "통조림참치",
    "간장",
  ];
  const name = "참치김치찌개";
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const callGPT = async () => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content:
            "재료: " +
            ingredient +
            'if 재료가 모두 음식이라면 재료를 포함해서 만들 수 있는 요리 이름을 한 단어로 말해줘. 특히, 잘 알려진 음식을 우선으로 알려줘. 이 때 만드는 법은 말하지마. 출력형식은 "숫자 : "이고, 숫자는 반드시 1부터 시작해서 1씩 증가해. 개수는 반드시 3개로 생성해줘. 생성 후에 다른 문장은 출력하지마. else 재료가 음식이 아니라면 오류를 출력해줘. 오류 출력형식은 "정확한 재료를 입력해주세요" 딱 이 한문장이고, 다른 문장은 절대 출력하지마. (if, else 문에서 지시한 문장이 아니라면 어떠한 문장도 출력하지 마)',
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion.choices[0].message.content);
  };
  const createRecipes = async () => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a genious chef. you know all kind of recipes.",
        },
        {
          role: "user",
          content:
            "요리: " +
            name +
            "요리에 대한 레시피를 알려줘. 음식 이름, 한줄설명, 재료, 요리과정(레시피)를 반드시 포함해줘. 재료의 자세한 양도 반드시 포함해줘. 재료는 레시피에서 반드시 다 활용해야해. 지시한 문장이 아니라면 어떠한 문장도 출력하지 마.",
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion.choices[0].message.content);
  };
  const handleClickAPICall = async () => {
    await callGPT();
  };

  const handleCreateRecipes = async () => {
    await createRecipes();
  };

  return (
    <>
      <button onClick={handleClickAPICall}>chatGPT</button>
      <button onClick={handleCreateRecipes}>create</button>
    </>
  );
};
export default RecommendRecipes;
