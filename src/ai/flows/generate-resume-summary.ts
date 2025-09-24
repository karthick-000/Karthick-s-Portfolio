'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a concise resume summary from provided details.
 *
 * It includes:
 * - `generateResumeSummary`: An asynchronous function that takes resume details as input and returns a generated summary.
 * - `ResumeSummaryInput`: The input type for the resume summary, defining the structure of the resume details.
 * - `ResumeSummaryOutput`: The output type for the resume summary, defining the structure of the generated summary.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the resume details.
const ResumeSummaryInputSchema = z.object({
  careerObjective: z.string().describe('The career objective of the individual.'),
  workExperience: z.string().describe('The work experience of the individual.'),
  projects: z.string().describe('The projects the individual has worked on.'),
  education: z.string().describe('The educational background of the individual.'),
  skills: z.string().describe('The skills of the individual.'),
  certifications: z.string().describe('The certifications of the individual.'),
});

export type ResumeSummaryInput = z.infer<typeof ResumeSummaryInputSchema>;

// Define the output schema for the generated resume summary.
const ResumeSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise and compelling resume summary.'),
});

export type ResumeSummaryOutput = z.infer<typeof ResumeSummaryOutputSchema>;

// Define the main function that calls the flow.
export async function generateResumeSummary(input: ResumeSummaryInput): Promise<ResumeSummaryOutput> {
  return generateResumeSummaryFlow(input);
}

// Define the prompt for generating the resume summary.
const resumeSummaryPrompt = ai.definePrompt({
  name: 'resumeSummaryPrompt',
  input: {schema: ResumeSummaryInputSchema},
  output: {schema: ResumeSummaryOutputSchema},
  prompt: `Given the following resume details, generate a concise and compelling resume summary that highlights key achievements and skills.

Career Objective: {{{careerObjective}}}
Work Experience: {{{workExperience}}}
Projects: {{{projects}}}
Education: {{{education}}}
Skills: {{{skills}}}
Certifications: {{{certifications}}}

Summary:`, // Handlebars template for prompt.
});

// Define the Genkit flow for generating the resume summary.
const generateResumeSummaryFlow = ai.defineFlow(
  {
    name: 'generateResumeSummaryFlow',
    inputSchema: ResumeSummaryInputSchema,
    outputSchema: ResumeSummaryOutputSchema,
  },
  async input => {
    const {output} = await resumeSummaryPrompt(input);
    return output!;
  }
);
