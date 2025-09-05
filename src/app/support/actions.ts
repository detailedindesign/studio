"use server";

import { autoSupportAI } from "@/ai/flows/auto-support-ai";
import { z } from "zod";

const AskQuestionSchema = z.object({
  question: z.string().min(5, { message: "Question must be at least 5 characters." }),
});

export type FormState = {
  message: string;
  answer?: string;
  citations?: string[];
  question?: string;
};

export async function askQuestion(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = AskQuestionSchema.safeParse({
    question: formData.get("question"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please enter a valid question.",
    };
  }

  const { question } = validatedFields.data;

  try {
    // In a real app, you might add more context here, like user ID, device type, etc.
    const result = await autoSupportAI({ question });
    
    // This is a mock response because the Genkit flow is not fully implemented.
    if (!result || !result.answer) {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
        const mockAnswer = `For your question about "${question}", here is a general solution: First, try restarting your device. This often solves many common issues. If the problem persists, please check your device's settings menu for relevant options. For more specific help, you can consult your device's user manual.`;
        const mockCitations = ['Source: General Troubleshooting Guide, Article #101'];
        return {
            message: "success",
            answer: mockAnswer,
            citations: mockCitations,
            question,
        }
    }

    return {
      message: "success",
      answer: result.answer,
      citations: result.citations,
      question,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An error occurred while getting an answer. Please try again.",
    };
  }
}
