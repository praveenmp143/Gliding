import { Smartphone } from "lucide-react";

const screenshots = [
  {
    title: "Dashboard",
    description: "Overview of all your loans and relationships",
    mockupContent: (
      <div className="p-3">
        {/* Status bar */}
        <div className="flex justify-between items-center mb-3 text-xs text-gray-600">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-1.5 bg-gray-300 rounded-sm"></div>
            <div className="w-0.5 h-0.5 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-2 border border-gray-300 rounded-sm">
              <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900">Dashboard</h3>
          <div className="w-6 h-6 bg-primary rounded-full"></div>
        </div>

        {/* Loan items */}
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-primary/5 p-2 rounded-lg border border-primary/20">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-full"></div>
              <div>
                <p className="text-xs font-medium text-gray-800">Mike Chen</p>
                <p className="text-xs text-gray-600">Due today</p>
              </div>
            </div>
            <span className="text-xs font-bold text-primary">$150</span>
          </div>
          
          <div className="flex items-center justify-between bg-secondary/5 p-2 rounded-lg border border-secondary/20">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-secondary rounded-full"></div>
              <div>
                <p className="text-xs font-medium text-gray-800">Emma Wilson</p>
                <p className="text-xs text-gray-600">3 days left</p>
              </div>
            </div>
            <span className="text-xs font-bold text-secondary">$200</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-4 bg-gradient-to-r from-accent/10 to-accent/5 p-2 rounded-lg">
          <p className="text-xs text-gray-600 text-center">Total Active</p>
          <p className="text-lg font-bold text-center text-gray-900">$350</p>
        </div>
      </div>
    )
  },
  {
    title: "Track Progress",
    description: "Monitor repayments and payment history",
    mockupContent: (
      <div className="p-3">
        {/* Status bar */}
        <div className="flex justify-between items-center mb-3 text-xs text-gray-600">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-1.5 bg-gray-300 rounded-sm"></div>
            <div className="w-0.5 h-0.5 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-2 border border-gray-300 rounded-sm">
              <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900">Progress</h3>
          <div className="w-6 h-6 bg-primary rounded-full"></div>
        </div>

        {/* Progress cards */}
        <div className="space-y-3">
          <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-gray-800">Alex Johnson</span>
              <span className="text-xs text-gray-600">$250</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
              <div className="bg-primary h-1.5 rounded-full w-4/5"></div>
            </div>
            <p className="text-xs text-gray-600">80% paid • $50 remaining</p>
          </div>
          
          <div className="bg-secondary/10 p-3 rounded-lg border border-secondary/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-gray-800">Sarah Kim</span>
              <span className="text-xs text-gray-600">$180</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
              <div className="bg-secondary h-1.5 rounded-full w-1/3"></div>
            </div>
            <p className="text-xs text-gray-600">33% paid • $120 remaining</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Insights",
    description: "Understand your financial relationships",
    mockupContent: (
      <div className="p-3">
        {/* Status bar */}
        <div className="flex justify-between items-center mb-3 text-xs text-gray-600">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-1.5 bg-gray-300 rounded-sm"></div>
            <div className="w-0.5 h-0.5 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-2 border border-gray-300 rounded-sm">
              <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900">Insights</h3>
          <div className="w-6 h-6 bg-primary rounded-full"></div>
        </div>

        {/* Net worth display */}
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-white text-xs font-bold">+$1.2K</span>
          </div>
          <p className="text-xs text-gray-600">Net Balance</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-primary/10 p-2 rounded-lg text-center border border-primary/20">
            <p className="text-xs text-gray-600">Lent Out</p>
            <p className="text-sm font-bold text-primary">$2.1K</p>
          </div>
          <div className="bg-secondary/10 p-2 rounded-lg text-center border border-secondary/20">
            <p className="text-xs text-gray-600">Borrowed</p>
            <p className="text-sm font-bold text-secondary">$900</p>
          </div>
        </div>

        {/* Activity indicator */}
        <div className="mt-3 flex items-center justify-center space-x-1">
          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
          <span className="text-xs text-gray-600">2 payments this week</span>
        </div>
      </div>
    )
  }
];

export default function ScreenshotsSection() {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Beautiful. Simple. Effective.</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Designed with simplicity in mind, powerful under the hood
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl mx-auto mb-4 max-w-xs">
                <div className="bg-white rounded-2xl aspect-[9/16] overflow-hidden">
                  {screenshot.mockupContent}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{screenshot.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{screenshot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
