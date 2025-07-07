import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star } from "lucide-react";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero-gradient pt-16 pb-8 lg:pt-20 lg:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:mx-0"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <p className="text-lg text-primary font-medium">Glide through shared finances</p>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Track <span className="text-primary">peer loans</span><br />
              effortlessly
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              Never lose track of money lent or borrowed. Get smart reminders, 
              monitor repayment progress, and gain insights into your personal net worth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex-1"
                >
                  <Button 
                    className="btn-download"
                    onClick={() => window.open('https://apps.apple.com/app/gliding-loan-tracker', '_blank')}
                  >
                    <SiApple className="mr-2 h-5 w-5" />
                    Download for iOS
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex-1"
                >
                  <Button 
                    className="btn-download"
                    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.gliding.loantracker', '_blank')}
                  >
                    <SiGoogleplay className="mr-2 h-5 w-5" />
                    Download for Android
                  </Button>
                </motion.div>
              </div>
              
              
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 lg:mt-0 lg:col-span-6"
          >
            <div className="relative mx-auto max-w-md">
              {/* Mobile App Mockup */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gray-900 rounded-3xl p-2 shadow-2xl"
              >
                <div className="bg-white rounded-2xl aspect-[9/19] p-4 overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-4 text-xs text-gray-600">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      <div className="w-6 h-3 border border-gray-300 rounded-sm">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-2">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Gliding</h3>
                    <p className="text-xs text-gray-500">Your loans, simplified</p>
                  </div>

                  {/* Loan cards */}
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 rounded-xl border border-primary/20">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-primary rounded-full"></div>
                          <span className="text-sm font-medium text-gray-800">Alex Johnson</span>
                        </div>
                        <span className="text-sm font-bold text-primary">$250</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-primary h-1.5 rounded-full w-3/4"></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">75% repaid</p>
                    </div>

                    <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-3 rounded-xl border border-secondary/20">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-secondary rounded-full"></div>
                          <span className="text-sm font-medium text-gray-800">Sarah Chen</span>
                        </div>
                        <span className="text-sm font-bold text-secondary">$180</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-secondary h-1.5 rounded-full w-1/2"></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Overdue 2 days</p>
                    </div>

                    <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-3 rounded-xl border border-accent/20">
                      <div className="text-center">
                        <p className="text-xs text-gray-600 mb-1">Net Balance</p>
                        <p className="text-xl font-bold text-gray-900">+$430</p>
                        <p className="text-xs text-gray-500">You're owed more</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-secondary text-white p-3 rounded-xl shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-xl shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}