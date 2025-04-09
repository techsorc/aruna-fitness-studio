
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  quote: string;
  beforeImage: string;
  afterImage: string;
  className?: string;
}

const TestimonialCard = ({
  name,
  quote,
  beforeImage,
  afterImage,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn("bg-white rounded-2xl overflow-hidden shadow-custom", className)}>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 relative">
          <div className="absolute top-2 left-2 bg-aruna-purple text-white text-xs px-2 py-1 rounded-full">
            Before
          </div>
          <img
            src={beforeImage}
            alt={`${name} before`}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="flex-1 relative">
          <div className="absolute top-2 left-2 bg-aruna-purple text-white text-xs px-2 py-1 rounded-full">
            After
          </div>
          <img
            src={afterImage}
            alt={`${name} after`}
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-600 italic">"{quote}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
