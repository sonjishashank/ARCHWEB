import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ar. Supriya Biradar</h3>
            <p className="text-neutral-400">
              Creating exceptional interior spaces that inspire and transform.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="/projects" className="hover:text-white">Projects</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Residential Design</li>
              <li>Commercial Projects</li>
              <li>Interior Styling</li>
              <li>Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-neutral-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-neutral-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-neutral-400">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Ar. Supriya Biradar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}