import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    // Wait a bit for React to fully render
    const timer = setTimeout(() => {
      // Check if script is already loaded
      const existingScript = document.querySelector(
        'script[data-widget-id="6928bcb45d98dbbcbcb15127"]'
      );

      if (existingScript) {
        console.log("LeadConnectorHQ chat widget script already loaded");
        return;
      }

      // Create and configure the script element exactly as provided
      const script = document.createElement("script");
      script.src = "https://beta.leadconnectorhq.com/loader.js";
      script.setAttribute(
        "data-resources-url",
        "https://beta.leadconnectorhq.com/chat-widget/loader.js"
      );
      script.setAttribute("data-widget-id", "6928bcb45d98dbbcbcb15127");

      // Append to body
      document.body.appendChild(script);

      console.log("LeadConnectorHQ chat widget script loaded");
    }, 500); // Small delay to ensure React has rendered

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default ChatWidget;

