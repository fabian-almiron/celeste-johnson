import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

const TestimonialCard = ({ quote, name, location }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-neutral-200">
      <div className="text-primary mb-4">
        <FaQuoteLeft size={24} />
      </div>
      <p className="text-neutral-700 mb-4 leading-relaxed italic">
        {quote}
      </p>
      <div className="border-t border-neutral-200 pt-4">
        <p className="font-bold text-neutral-900">{name}</p>
        <p className="text-sm text-neutral-600">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
