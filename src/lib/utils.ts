import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const callGemini = async (userMessage: string): Promise<string> => {
  if (!GEMINI_API_KEY) {
    console.error("Missing Gemini API Key. Check your .env file.");
    return "⚠️ Gemini API key is missing.";
  }

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
      {
        contents: [
          {
            parts: [{ text: userMessage }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": GEMINI_API_KEY,
        },
      }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!reply) {
      console.warn("No reply from Gemini:", response.data);
      return "🤖 I didn’t understand that. Try again?";
    }

    return reply;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "🚧 Sorry, I'm having trouble reaching Gemini right now.";
  }
};
