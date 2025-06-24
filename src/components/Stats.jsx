import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "24/7",
    label: "Health Monitoring",
    description: "Continuous tracking"
  },
  {
    number: "10M+",
    label: "Data Points Daily",
    description: "From sensors & wearables"
  },
  {
    number: "95%",
    label: "Accuracy Rate",
    description: "In health predictions"
  },
  {
    number: "50+",
    label: "Health Metrics",
    description: "Tracked automatically"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Health-Conscious Individuals
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real people using 1MBHealthy
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;