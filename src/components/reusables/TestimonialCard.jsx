import { GoQuote } from 'react-icons/go';
const TestimonialCard = ({testimonial}) => {
    return (
        <div className="bg-white min-h-[27rem]  shadow-sm p-5 flex flex-col justify-between gap-5 rounded-md">
            <div className="mt-4 text-gray-800">
            <GoQuote className="text-5xl text-secondary/30 mb-2" />
                <p className="font-primary tracking-wide leading-6 text-md " >{testimonial.testimonial}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src={testimonial.image} className="w-20 rounded-full" alt="client-photo" />
                <h3 className="font-display text-xl text-center mt-3">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.designation}</p>
            </div>
       
        </div>
    );
};

export default TestimonialCard;