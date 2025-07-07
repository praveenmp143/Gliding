import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Small Business Owner",
    content: "Gliding completely transformed how I manage money between friends. No more awkward conversations about forgotten loans!",
    avatar: "SC",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "College Student",
    content: "Perfect for keeping track of group expenses and loans. The reminders are gentle but effective.",
    avatar: "MJ",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Freelancer",
    content: "The net worth insights help me understand my financial relationships better. Simple and powerful.",
    avatar: "ER",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">What Users Say</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands to manage their peer-to-peer financial relationships
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}