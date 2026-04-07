// gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateAIContent(prompt) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // FIX: .text() is a method, call it with ()
    const text = response.text(); 
    
    return text;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error; // Throw so server.js catches it
  }
}

export default generateAIContent;