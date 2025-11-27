import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    className?: string;
    children?: React.ReactNode;
}

const PageHero = ({
    title,
    subtitle,
    backgroundImage = "/hero-cinematic.png",
    className,
    children
}: PageHeroProps) => {
    return (
        <div className={cn("relative pt-32 pb-24 md:pt-40 md:pb-32 bg-black text-white overflow-hidden", className)}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt="Background"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <AnimatedSection direction="up">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        {title}
                    </h1>
                </AnimatedSection>

                {subtitle && (
                    <AnimatedSection direction="up" delay={100}>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            {subtitle}
                        </p>
                    </AnimatedSection>
                )}

                {children && (
                    <AnimatedSection direction="up" delay={200} className="mt-8">
                        {children}
                    </AnimatedSection>
                )}
            </div>
        </div>
    );
};

export default PageHero;
