
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
