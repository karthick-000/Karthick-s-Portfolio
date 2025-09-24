'use server';

/**
 * @fileOverview This file defines a Genkit flow for a conversational chatbot.
 *
 * It includes:
 * - `chat`: An asynchronous function that takes a message history and returns a chatbot response.
 * - `ChatbotInput`: The input type for the chatbot, containing the message history.
 * - `ChatbotOutput`: The output type for the chatbot, containing the bot's response.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { resumeDataForAI } from '@/lib/data';

// Define the input schema for the chatbot.
const ChatbotInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The conversation history.'),
});

export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

// Define the output schema for the chatbot response.
const ChatbotOutputSchema = z.object({
  response: z.string().describe("The chatbot's response."),
});

export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;


// Define the main function that calls the flow.
export async function chat(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const professionalProfile = `
Career Objective: ${resumeDataForAI.careerObjective}
Work Experience: ${resumeDataForAI.workExperience}
Projects: ${resumeDataForAI.projects}
Education: ${resumeDataForAI.education}
Skills: ${resumeDataForAI.skills}
Certifications: ${resumeDataForAI.certifications}
`;

// Define the prompt for the chatbot.
const chatbotPrompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatbotInputSchema},
  output: {schema: ChatbotOutputSchema},
  prompt: `You are a friendly and helpful AI assistant for Karthick Raja M's portfolio website. Your goal is to answer questions about Karthick based on his professional profile provided below. Be conversational and engaging. If a question is outside the scope of the provided information, politely decline to answer.

Here is Karthick's professional profile:
${professionalProfile}

Conversation History:
{{#each history}}
{{role}}: {{{content}}}
{{/each}}
model:`,
});

// Define the Genkit flow for the chatbot.
const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async input => {
    const {output} = await chatbotPrompt(input);
    return { response: output!.response };
  }
);
