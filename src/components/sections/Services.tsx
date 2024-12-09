import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Building2, HomeIcon, Users2 } from "lucide-react";

const services = [
  {
    icon: HomeIcon,
    title: "Residential Design",
    description: "Creating beautiful, functional living spaces that reflect your personality and lifestyle."
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Innovative design solutions for offices, restaurants, and retail spaces."
  },
  {
    icon: Paintbrush,
    title: "Interior Styling",
    description: "Expert styling and decoration services to perfect your space."
  },
  {
    icon: Users2,
    title: "Consultation",
    description: "Professional guidance and expertise for your interior architecture projects."
  }
];

export function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Comprehensive interior architecture services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="w-12 h-12 mb-4 text-neutral-900" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}