import React from "react";
import { User } from "lucide-react";

// Type for testimonial data
type TestimonialData = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
};

// Sample testimonial data
const testimonialData: TestimonialData[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content: `This platform has completely transformed our marketing workflow. We've seen a 40% increase in productivity since implementation. The customer support team is also incredibly responsive and helpful.`,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "StartupX",
    content: `We evaluated several solutions before choosing this one. The integration was seamless, and our team was up and running within days. The ROI has been tremendous, and we couldn't be happier with our decision.`,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "Global Services Inc.",
    content: `The automation features are incredible. What used to take our team hours now happens in minutes. This tool has become essential to our daily operations and continues to exceed our expectations.`,
  },
  {
    id: "4",
    name: "David Kim",
    role: "Product Manager",
    company: "InnovateCo",
    content: `The analytics dashboard provides insights we never had access to before. We're making more informed decisions and seeing better results. This platform is worth every penny.`,
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "CEO",
    company: "DataFlow Systems",
    content: `As a CEO, I needed a solution that would scale with our company. This platform has not only met but exceeded those expectations. The ROI was evident within the first quarter.`,
  },
  {
    id: "6",
    name: "James Wilson",
    role: "IT Director",
    company: "Enterprise Solutions",
    content: `Security was our primary concern when choosing a SaaS platform. The robust security features and compliance certifications gave us confidence in our choice. Highly recommended.`,
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to
            say about their experience with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900 rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-red-600 rounded-full mr-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200">
            View More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
