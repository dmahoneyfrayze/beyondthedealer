import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Simulate sending message
    console.log("Message sent:", message);
    setMessage("");
    
    // Simulate auto-response
    setTimeout(() => {
      // In real implementation, this would be from a chat service
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-2xl flex flex-col">
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Chat with Us</CardTitle>
                <p className="text-xs opacity-90">We typically reply in minutes</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="bg-background border rounded-lg p-3 text-sm">
                    <p className="font-semibold mb-1">Olympic Hyundai</p>
                    <p>Hi! 👋 How can we help you find your perfect vehicle today?</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Just now</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t bg-background">
              <div className="flex gap-2 mb-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                  asChild
                >
                  <a href="tel:604-555-0100">
                    <Phone className="w-3 h-3 mr-1" />
                    Call Us
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                  asChild
                >
                  <a href="/finance">Get Pre-Approved</a>
                </Button>
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="sm" variant="cta">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                By continuing, you agree to our terms of service
              </p>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default LiveChatWidget;

