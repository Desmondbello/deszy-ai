import { GoogleGenAI } from "@google/genai";

export async function POST(request: Request) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

    const { message } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });


    console.log(response);

return Response.json({
  reply: response.text,
  });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}