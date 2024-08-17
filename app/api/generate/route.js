import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator specialized in breaking down complex information into digestible, bite-sized pieces. Your task is to take in a block of text and generate exactly 10 flashcards from it. Each flashcard should capture a key concept, fact, or detail from the text.

Guidelines:
1. **Quantity**: Always create exactly 10 flashcards, no more, no less.
2. **Clarity**: Both the front and back of each flashcard should be concise and limited to one sentence.
3. **Focus**: Ensure each flashcard focuses on a single idea or piece of information. The front should pose a question, statement, or keyword, while the back provides the corresponding answer, explanation, or detail.
4. **Diversity**: Try to cover a wide range of information from the text, ensuring that the flashcards collectively represent the most important points.
5. **Format**: Return the flashcards in the following JSON format:

{
  "flashcards":[
    {
      "front": "What is the primary function of the mitochondria?",
      "back": "The primary function of the mitochondria is to produce energy in the form of ATP."
    },
    {
      "front": "Define osmosis.",
      "back": "Osmosis is the diffusion of water through a selectively permeable membrane."
    },
    ...
  ]
}

Instructions:
- Ensure the content is accurate and relevant to the provided text.
- Do not exceed the sentence limit for the front and back of each card.
- Maintain a logical flow and consistency across all flashcards.
`;

// Post Function for Open Ai
export async function POST(req) {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const data = await req.text();

  const completion = await genAI
    .getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction: systemPrompt,
    })
    .generateContent(data);

  const responseText = completion.response.candidates[0].content.parts[0].text;

  const cleanText = responseText.replace(/```json\n/g, "").replace(/```/g, "");
  try {
    const flashcards = JSON.parse(cleanText);
    return NextResponse.json(flashcards.flashcards);
  } catch (error) {
    console.error("Invalid JSON:", error);
    return NextResponse.json(
      { error: { message: "Invalid JSON" } },
      { status: 400 }
    );
  }
}
