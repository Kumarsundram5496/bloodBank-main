
import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI strictly using the environment variable directy as required by guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a helpful and compassionate AI assistant for the Indian Red Cross Society (Humanitarian Hub). 
Your goal is to provide information about:
1. Blood donation requirements and benefits.
2. How to find the nearest blood bank or service center.
3. Volunteering opportunities and registration.
4. Red Cross services like physiotherapy, clinics, and vocational training.
5. First aid basics (always with a disclaimer to seek professional medical help).

Keep your tone professional, empathetic, and informative. If you don't know an answer, direct users to call the local branch at +91-123-4567890.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently offline. Please contact us directly for urgent inquiries.";
  }
};
