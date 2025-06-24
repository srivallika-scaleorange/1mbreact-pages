import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-blue-600 to-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <Smartphone className="w-16 h-16 text-white mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Health Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who are staying ahead of their health with AI-powered insights, 
            real-time monitoring, and personalized care recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
              Download 1MBHealthy
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
          <p className="text-blue-100 text-sm mt-6">
            Available on iOS and Android • Free to download
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;