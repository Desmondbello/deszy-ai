import { GoogleGenAI } from "@google/genai";

export async function POST(request: Request) {
 console.log("POST function started");

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

console.log("Gemini response:", JSON.stringify(response, null, 2));
console.log("Response text:", response.text);

return Response.json({
  reply: response.text ?? "No text returned",
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