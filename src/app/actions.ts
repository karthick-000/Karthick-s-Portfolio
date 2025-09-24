'use server';

import { z } from 'zod';
import { generateResumeSummary, ResumeSummaryInput } from '@/ai/flows/generate-resume-summary';
import { chat, ChatbotInput } from '@/ai/flows/chatbot-flow';
import { resumeDataForAI } from '@/lib/data';
import { contactFormSchema } from '@/lib/schemas';

export async function generateSummaryAction() {
  try {
    const summary = await generateResumeSummary(resumeDataForAI as ResumeSummaryInput);
    return summary;
  } catch (error) {
    console.error('Error generating AI summary:', error);
    return { summary: 'Could not generate a summary at this time. Please try again later.' };
  }
}

export async function sendContactMessageAction(values: z.infer<typeof contactFormSchema>) {
  // In a real application, you would send an email or save to a database here.
  // For this demo, we'll just log the values to the console.
  console.log('New contact form submission:', values);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // You can uncomment the line below to test the error case
  // return { success: false, error: 'Failed to send message. Please try again.' };

  return { success: true };
}


export async function chatAction(history: ChatbotInput['history']) {
  try {
    const { response } = await chat({ history });
    return { response };
  } catch (error) {
    console.error('Error in chat action:', error);
    return { response: 'Sorry, I encountered an error. Please try again.' };
  }
}
