/**
 * @fileOverview This file contains the type definitions for the AI flows.
 */

import { z } from 'genkit';

// ################### Chatbot Flow Types ###################
export const ChatbotInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The conversation history.'),
});

export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

export const ChatbotOutputSchema = z.object({
  response: z.string().describe("The chatbot's response."),
});

export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;


// ############## Resume Summary Flow Types #################
export const ResumeSummaryInputSchema = z.object({
  careerObjective: z.string().describe('The career objective of the individual.'),
  workExperience: z.string().describe('The work experience of the individual.'),
  projects: z.string().describe('The projects the individual has worked on.'),
  education: z.string().describe('The educational background of the individual.'),
  skills: z.string().describe('The skills of the individual.'),
  certifications: z.string().describe('The certifications of the individual.'),
});

export type ResumeSummaryInput = z.infer<typeof ResumeSummaryInputSchema>;

export const ResumeSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise and compelling resume summary.'),
});

export type ResumeSummaryOutput = z.infer<typeof ResumeSummaryOutputSchema>;
