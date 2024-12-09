import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ar. Supriya Biradar</h1>
            <p className="text-xl text-neutral-600">
              With over a decade of experience in interior architecture, creating spaces that inspire and transform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
                alt="Ar. Supriya Biradar"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-semibold">Our Vision</h2>
              <p className="text-neutral-600">
                To create exceptional spaces that perfectly balance aesthetics and functionality,
                transforming your vision into reality while exceeding expectations at every step.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    10+
                  </div>
                  <div>
                    <h3 className="font-semibold">Years of Experience</h3>
                    <p className="text-neutral-600">In Interior Architecture</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    150+
                  </div>
                  <div>
                    <h3 className="font-semibold">Projects Completed</h3>
                    <p className="text-neutral-600">Across India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-neutral-600">
                  Bachelor of Architecture<br />
                  Council of Architecture<br />
                  Advanced Interior Design Certification
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-neutral-600">
                  Residential Design<br />
                  Commercial Spaces<br />
                  Sustainable Design
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Recognition</h3>
                <p className="text-neutral-600">
                  Best Interior Designer 2023<br />
                  Excellence in Design Award<br />
                  Featured in Design Magazine
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}