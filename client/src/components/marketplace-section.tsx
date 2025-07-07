import { Button } from "@/components/ui/button";
import { Rocket, Percent, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Percent,
    title: "Earn Interest",
    description: "Lend to verified peers and earn competitive interest rates on your money."
  },
  {
    icon: ShieldCheck,
    title: "Verified Community",
    description: "All participants are identity-verified for secure lending relationships."
  },
  {
    icon: Zap,
    title: "Quick Access",
    description: "Fast loan approval and funding from our community of lenders."
  }
];

export default function MarketplaceSection() {
  return (
    <section id="marketplace" className="py-12 sm:py-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <Rocket className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm font-medium">Coming Soon</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            The Future of Peer Lending
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
            Soon, connect with a verified community of lenders and borrowers. 
            Earn interest securely or access loans with competitive rates from trusted peers.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <Button className="bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-white/90 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Join Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
