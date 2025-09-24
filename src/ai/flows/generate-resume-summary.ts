'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a concise resume summary from provided details.
 *
 * It includes:
 * - `generateResumeSummary`: An asynchronous function that takes resume details as input and returns a generated summary.
 */

import {ai} from '@/ai/genkit';
import { ResumeSummaryInput, ResumeSummaryInputSchema, ResumeSummaryOutput, ResumeSummaryOutputSchema } from './types';


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
