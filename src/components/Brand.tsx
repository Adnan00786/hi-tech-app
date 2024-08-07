import React from "react";
import useDarkMode from 'use-dark-mode';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Brands = () => {
  const darkMode = useDarkMode(true);

  const brands = [
    {
      name: "Canon",
      description: "Canon is a renowned brand known for its high-quality cameras, printers, and imaging products. With a focus on innovation and reliability, Canon products are trusted worldwide for their performance and durability.",
      image: "/assets/Canon-logo.jpg",
    },
    {
      name: "Xerox",
      description: "Xerox is synonymous with photocopying and document management solutions. It offers a wide range of printers and copiers known for their efficiency, ease of use, and advanced technology.",
      image: "/assets/Xerox-logo.png",
    },
    {
      name: "Kyocera",
      description: "Kyocera offers a range of printers and multifunctional products known for their sustainability and reliability. It focuses on providing eco-friendly solutions without compromising on performance.",
      image: "/assets/kyocera-logo.jpeg",
    }
  ];

  const brandVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`w-full min-h-screen ${darkMode.value ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <br />
        <h2 className="text-5xl mb-8 text-center">Brands We Offer</h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg ${darkMode.value ? 'bg-gray-800' : 'bg-white'}`}
              variants={brandVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-40">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className={`text-xl mb-2 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>{brand.name}</h3>
                <p className={`${darkMode.value ? 'text-gray-300' : 'text-gray-600'}`}>{brand.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
