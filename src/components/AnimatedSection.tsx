import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0,
  direction = "up" 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const directionClasses = {
    up: isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
    down: isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0",
    left: isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
    right: isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
    fade: isVisible ? "opacity-100" : "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        directionClasses[direction],
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

