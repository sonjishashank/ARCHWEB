import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    category: "Residential",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Luxury Restaurant Design",
    category: "Commercial",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Contemporary Office Space",
    category: "Commercial",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Penthouse Suite",
    category: "Residential",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Urban Apartment",
    category: "Residential",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop"
  }
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Explore our portfolio of carefully crafted spaces that showcase our commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer h-full">
                  <CardContent className="p-0 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-neutral-200 mb-2">{project.category}</p>
                        <p className="text-neutral-300">{project.location}</p>
                      </div>
                    </div>
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