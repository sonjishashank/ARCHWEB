import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Building2, HomeIcon, Users2, Palette, Ruler } from "lucide-react";

const services = [
  {
    icon: HomeIcon,
    title: "Residential Design",
    description: "Creating beautiful, functional living spaces that reflect your personality and lifestyle.",
    features: ["Space Planning", "Custom Furniture", "Color Consultation"]
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Innovative design solutions for offices, restaurants, and retail spaces.",
    features: ["Office Layout", "Retail Design", "Restaurant Interiors"]
  },
  {
    icon: Paintbrush,
    title: "Interior Styling",
    description: "Expert styling and decoration services to perfect your space.",
    features: ["Decor Selection", "Art Curation", "Accessories"]
  },
  {
    icon: Users2,
    title: "Consultation",
    description: "Professional guidance and expertise for your interior architecture projects.",
    features: ["Design Strategy", "Material Selection", "Budget Planning"]
  },
  {
    icon: Palette,
    title: "3D Visualization",
    description: "Realistic 3D renderings to help you visualize your space before execution.",
    features: ["3D Modeling", "Virtual Tours", "Material Visualization"]
  },
  {
    icon: Ruler,
    title: "Project Management",
    description: "End-to-end project management ensuring timely and quality execution.",
    features: ["Timeline Planning", "Vendor Management", "Quality Control"]
  }
];

export function Services() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Comprehensive interior architecture services tailored to transform your space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <service.icon className="w-12 h-12 mb-4 text-neutral-900" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}