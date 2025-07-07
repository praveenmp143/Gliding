import { Users, DollarSign, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Users",
    description: "Trust Gliding for their financial relationships"
  },
  {
    icon: DollarSign,
    value: "$2.5M+",
    label: "Loans Tracked",
    description: "In total loan value managed through our platform"
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable access to your financial data"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
    description: "Always here when you need assistance"
  }
];

export default function StatsSection() {
  return (
    <section className="py-8 sm:py-12 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Trusted by Thousands</h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Join a growing community of users who've simplified their financial relationships
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <p className="text-blue-100 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}