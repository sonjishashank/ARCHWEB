import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-neutral-900" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-neutral-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-neutral-900" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-neutral-600">contact@supriyabiradar.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-neutral-900" />
                    <div>
                      <p className="font-medium">Studio Address</p>
                      <p className="text-neutral-600">Design Studio, Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-neutral-900" />
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-neutral-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Location</h2>
                <div className="aspect-video bg-neutral-100 rounded-lg">
                  {/* Add Google Maps iframe here */}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input placeholder="Phone Number" />
                  <Input placeholder="Subject" />
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[150px]"
                  />
                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}