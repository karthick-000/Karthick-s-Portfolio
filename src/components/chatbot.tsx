'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { chatAction } from '@/app/actions';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    startTransition(async () => {
      const result = await chatAction(newMessages);
      setMessages((prev) => [...prev, { role: 'model', content: result.response }]);
    });
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);
  
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={toggleChat} size="icon" className="rounded-full h-14 w-14 shadow-lg">
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
          <div
            className="fixed bottom-24 right-6 z-50"
          >
            <Card className="w-[350px] h-[500px] flex flex-col shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bot />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col gap-4 overflow-hidden">
                <ScrollArea className="flex-grow pr-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={cn(
                          'flex items-end gap-2',
                          message.role === 'user' ? 'justify-end' : 'justify-start'
                        )}
                      >
                        {message.role === 'model' && (
                          <Avatar className="h-8 w-8">
                            <AvatarFallback><Bot size={20}/></AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={cn(
                            'rounded-lg px-4 py-2 max-w-[80%]',
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          )}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </div>
                    ))}
                    {isPending && (
                       <div className="flex items-end gap-2 justify-start">
                           <Avatar className="h-8 w-8">
                                <AvatarFallback><Bot size={20}/></AvatarFallback>
                           </Avatar>
                           <div className="rounded-lg px-4 py-2 bg-muted">
                               <Loader2 className="h-5 w-5 animate-spin text-muted-foreground"/>
                           </div>
                       </div>
                    )}
                  </div>
                </ScrollArea>
                <div className="flex items-center gap-2 mt-auto">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !isPending && handleSend()}
                    placeholder="Ask me anything..."
                    disabled={isPending}
                  />
                  <Button onClick={handleSend} disabled={isPending || !input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
    </>
  );
}
