import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

const TestimonialCard = ({ quote, name, location }: TestimonialCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-neutral-100 hover:border-secondary/50 overflow-hidden hover:translate-y-[-8px]">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Stars */}
        <div className="flex gap-1.5 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="fill-secondary text-secondary group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}} />
          ))}
        </div>

        {/* Quote Icon */}
        <div className="text-secondary/40 mb-4 group-hover:text-secondary/60 transition-colors duration-300">
          <Quote size={32} />
        </div>

        {/* Quote Text */}
        <p className="text-neutral-700 mb-8 leading-relaxed italic text-lg font-medium">
          "{quote}"
        </p>

        {/* Author Info */}
        <div className="border-t border-neutral-200 pt-6">
          <p className="font-bold text-neutral-900 text-lg">{name}</p>
          <p className="text-sm text-neutral-600 font-medium flex items-center gap-2 mt-1">
            <span className="w-1 h-1 rounded-full bg-secondary"></span>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
