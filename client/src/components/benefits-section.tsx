import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Never Forget Again",
    description: "Eliminate awkward conversations about forgotten loans with automated tracking and reminders.",
    color: "bg-primary"
  },
  {
    title: "Build Trust",
    description: "Transparent tracking builds stronger relationships and trust with friends and family.",
    color: "bg-secondary"
  },
  {
    title: "Financial Clarity",
    description: "Get clear insights into your net worth and financial relationships at a glance.",
    color: "bg-accent"
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-8 sm:py-12 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-slideInLeft">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Gliding?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Take control of your peer-to-peer lending with intelligent tracking and insights.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[#1a1614]">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <Button className="bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Tracking Today
              </Button>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 animate-slideInRight">
            <div className="relative">
              {/* Mobile app mockup showing insights */}
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl max-w-sm mx-auto">
                <div className="bg-white rounded-2xl aspect-[9/16] p-4 overflow-hidden">
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

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Insights</h3>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">GH</span>
                    </div>
                  </div>

                  {/* Net worth circle */}
                  <div className="text-center mb-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-full h-full bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-xl font-bold text-primary">+$2.1K</p>
                            <p className="text-xs text-gray-600">Net Worth</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-3 rounded-xl border border-primary/20">
                      <p className="text-xs text-gray-600 mb-1">Total Lent</p>
                      <p className="text-lg font-bold text-primary">$3.2K</p>
                      <p className="text-xs text-gray-500">5 active loans</p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-3 rounded-xl border border-secondary/20">
                      <p className="text-xs text-gray-600 mb-1">Total Owed</p>
                      <p className="text-lg font-bold text-secondary">$1.1K</p>
                      <p className="text-xs text-gray-500">2 active loans</p>
                    </div>
                  </div>

                  {/* Recent activity */}
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-900 mb-3">Recent Activity</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-700">Payment received</span>
                        </div>
                        <span className="text-xs text-gray-500">2h ago</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-xs text-gray-700">Reminder sent</span>
                        </div>
                        <span className="text-xs text-gray-500">1d ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$12,450</div>
                  <div className="text-sm text-gray-600">Total Tracked</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">98%</div>
                  <div className="text-sm text-gray-600">Repayment Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
