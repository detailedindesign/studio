import { ChatInterface } from "@/components/support/chat-interface";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SupportPage() {
  return (
    <div className="h-full flex flex-col">
      <Card className="mb-6 bg-soft-blue/10 border-soft-blue/20">
        <CardHeader>
          <CardTitle>Hello! How can I help you today?</CardTitle>
          <CardDescription>
            Ask me anything about your device, plan, or apps. For example: &quot;How do I check my voicemail?&quot; or &quot;My screen is too dim.&quot;
          </CardDescription>
        </CardHeader>
      </Card>
      <ChatInterface />
    </div>
  );
}
