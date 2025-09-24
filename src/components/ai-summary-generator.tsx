'use client';

import { useState, useTransition } from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { generateSummaryAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export function AiSummaryGenerator() {
  const [isPending, startTransition] = useTransition();
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');

  const handleClick = () => {
    setError('');
    setSummary('');
    startTransition(async () => {
      const result = await generateSummaryAction();
      if (result.summary) {
        setSummary(result.summary);
      } else {
        setError('Failed to generate summary. Please try again later.');
      }
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle>AI-Powered Summary</CardTitle>
          <CardDescription>
            Click the button to generate a concise, AI-powered summary of my professional profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleClick} disabled={isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            {isPending ? 'Generating...' : 'Generate Summary'}
          </Button>
        </CardContent>
      </Card>

      {summary && (
        <Alert className="animate-fade-in-up">
          <Wand2 className="h-4 w-4" />
          <AlertTitle className="font-headline">Generated Summary</AlertTitle>
          <AlertDescription className="mt-2 prose prose-sm max-w-none">
            {summary}
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="animate-fade-in-up">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
