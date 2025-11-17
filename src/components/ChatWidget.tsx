import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[data-widget-id="691b2d8af4a10e8f28098f58"]')) {
      return;
    }

    // Create and configure the script element
    const script = document.createElement("script");
    script.src = "https://beta.leadconnectorhq.com/loader.js";
    script.setAttribute("data-resources-url", "https://beta.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute("data-widget-id", "691b2d8af4a10e8f28098f58");
    script.async = true;
    script.defer = true;

    // Append to body
    document.body.appendChild(script);

    // Cleanup function to remove script on unmount (optional)
    return () => {
      const existingScript = document.querySelector('script[data-widget-id="691b2d8af4a10e8f28098f58"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ChatWidget;

