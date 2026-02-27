import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

const TestimonialCard = ({ quote, name, location }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 border border-neutral-200">
      <div className="text-secondary mb-4">
        <Quote size={28} />
      </div>
      <p className="text-neutral-700 mb-6 leading-relaxed italic text-lg">
        "{quote}"
      </p>
      <div className="border-t border-neutral-200 pt-4">
        <p className="font-bold text-neutral-900">{name}</p>
        <p className="text-sm text-neutral-600">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
