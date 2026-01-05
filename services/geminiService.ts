// Use the official @google/generative-ai library (standard for Gemini)
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access the key using the Vite-specific syntax
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize the AI
const genAI = new GoogleGenerativeAI(API_KEY || "");

const SYSTEM_INSTRUCTION = `... (your instruction) ...`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // Note: Use 'gemini-1.5-flash' for the best balance of speed/cost
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION 
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently offline. Please contact us directly.";
  }
};