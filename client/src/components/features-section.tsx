import { Handshake, Bell, PieChart, Wallet, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Handshake,
    title: "Loan Tracking",
    description: "Easily log money lent or borrowed between friends and family. Keep detailed records with timestamps and notes.",
    color: "bg-primary",
    bgGradient: "from-primary/5 to-primary/10",
    borderColor: "border-primary/10"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Automated reminders and due dates ensure timely repayments. Gentle nudges for both borrowers and lenders.",
    color: "bg-secondary",
    bgGradient: "from-secondary/5 to-secondary/10",
    borderColor: "border-secondary/10"
  },
  {
    icon: PieChart,
    title: "Repayment Progress",
    description: "Visualize payment progress with timeline views. Track partial payments and outstanding balances clearly.",
    color: "bg-accent",
    bgGradient: "from-accent/5 to-accent/10",
    borderColor: "border-accent/10"
  },
  {
    icon: Wallet,
    title: "Net Worth Dashboard",
    description: "Get an aggregated view of what you owe and what you're owed. Balance your financial relationships.",
    color: "bg-purple-500",
    bgGradient: "from-purple-500/5 to-purple-500/10",
    borderColor: "border-purple-500/10"
  },
  {
    icon: Users,
    title: "Contact Management",
    description: "Organize your lending relationships with contact profiles and transaction history for each person.",
    color: "bg-pink-500",
    bgGradient: "from-pink-500/5 to-pink-500/10",
    borderColor: "border-pink-500/10"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-level security with local data storage. Your financial information stays private and secure.",
    color: "bg-teal-500",
    bgGradient: "from-teal-500/5 to-teal-500/10",
    borderColor: "border-teal-500/10"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Powerful Features</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your peer-to-peer loans and financial relationships
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className={`bg-gradient-to-br ${feature.bgGradient} p-6 sm:p-8 rounded-2xl border ${feature.borderColor} hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="w-12 h-12 text-white rounded-xl flex items-center justify-center mb-6 bg-[#adadad]"
              >
                <feature.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
