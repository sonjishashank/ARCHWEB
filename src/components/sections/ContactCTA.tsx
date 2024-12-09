import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Let's collaborate to create something extraordinary together.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Get Started</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}