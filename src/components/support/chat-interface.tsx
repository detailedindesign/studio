"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { askQuestion, FormState } from "@/app/support/actions";
import { Bot, User, CornerDownLeft, CircleSlash, Loader2, Mic, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from 'framer-motion';

type Message = {
  role: "user" | "bot";
  text: string;
  citations?: string[];
};

const initialState: FormState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" aria-label="Send message" disabled={pending}>
      {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : <CornerDownLeft className="h-5 w-5" />}
    </Button>
  );
}

export function ChatInterface() {
  const [state, formAction] = useFormState(askQuestion, initialState);
  const [messages, setMessages] = useState<Message[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.message === "success" && state.answer && state.question) {
      setMessages((prev) => [
        ...prev,
        { role: "user", text: state.question! },
        { role: "bot", text: state.answer!, citations: state.citations },
      ]);
      formRef.current?.reset();
    } else if (state.message && state.message !== "success") {
       setMessages((prev) => [
        ...prev,
        { role: "bot", text: state.message },
      ]);
    }
  }, [state]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Card className="flex-1 flex flex-col h-full">
      <CardContent className="flex-1 flex flex-col p-4">
        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            <AnimatePresence>
            {messages.map((msg, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
                >
                {msg.role === "bot" && (
                    <div className="p-2 bg-primary/20 text-primary rounded-full">
                        <Bot className="h-6 w-6" />
                    </div>
                )}
                <div className={`max-w-xl p-4 rounded-xl ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    {msg.citations && msg.citations.length > 0 && (
                        <div className="mt-4 border-t pt-2">
                            <h4 className="text-xs font-semibold mb-1 flex items-center gap-1.5"><Sparkles className="w-3 h-3"/> Sources:</h4>
                            <ul className="space-y-1">
                            {msg.citations.map((citation, i) => (
                                <li key={i} className="text-xs text-muted-foreground">{citation}</li>
                            ))}
                            </ul>
                        </div>
                    )}
                </div>
                {msg.role === "user" && (
                    <div className="p-2 bg-muted rounded-full">
                        <User className="h-6 w-6" />
                    </div>
                )}
                </motion.div>
            ))}
            </AnimatePresence>
          {messages.length === 0 && (
             <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <CircleSlash className="h-12 w-12 mb-4" />
                <p className="text-lg">No messages yet</p>
                <p>Ask a question below to start the conversation.</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form ref={formRef} action={formAction} className="mt-6 flex items-center gap-2 border-t pt-4">
          <div className="relative flex-1">
             <Input
                name="question"
                placeholder="Type your question here..."
                className="pr-20 text-base"
                required
                />
            <Button type="button" variant="ghost" size="icon" className="absolute right-10 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground">
                <Mic className="h-5 w-5"/>
            </Button>
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
