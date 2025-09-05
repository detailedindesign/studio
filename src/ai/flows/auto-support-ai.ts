'use server';

/**
 * @fileOverview AutoSupport AI flow for answering user questions about device, carrier, or app issues.
 *
 * - autoSupportAI - A function that handles the user's support question and returns an answer.
 * - AutoSupportAIInput - The input type for the autoSupportAI function.
 * - AutoSupportAIOutput - The return type for the autoSupportAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutoSupportAIInputSchema = z.object({
  question: z.string().describe('The question the user is asking about their device, carrier, or app issue.'),
});
export type AutoSupportAIInput = z.infer<typeof AutoSupportAIInputSchema>;

const AutoSupportAIOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question, incorporating information from the MCP server.'),
  citations: z.array(z.string()).describe('The source IDs of the snippets used to answer the question.'),
});
export type AutoSupportAIOutput = z.infer<typeof AutoSupportAIOutputSchema>;

export async function autoSupportAI(input: AutoSupportAIInput): Promise<AutoSupportAIOutput> {
  return autoSupportAIFlow(input);
}

const summarizeMarketPrompt = ai.definePrompt({
  name: 'autoSupportAIPrompt',
  input: {schema: AutoSupportAIInputSchema},
  output: {schema: AutoSupportAIOutputSchema},
  prompt: `You are an AI assistant providing support for a device, carrier, and app issues. Use the provided information to answer the user's question. Include citations to the source articles.

Question: {{{question}}}`,
});

const autoSupportAIFlow = ai.defineFlow(
  {
    name: 'autoSupportAIFlow',
    inputSchema: AutoSupportAIInputSchema,
    outputSchema: AutoSupportAIOutputSchema,
  },
  async input => {
    const {output} = await summarizeMarketPrompt(input);
    return output!;
  }
);
