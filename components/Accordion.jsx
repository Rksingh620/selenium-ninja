import React from "react";
import { motion } from "framer-motion";

const Accordion = ({ data }) => {
  return (
    <div>
      <div className="w-full px-8 mx-auto mt-20 ">
        <motion.details className="p-4 rounded-lg">
          <summary className="font-semibold">
            How to create Accordion (FAQ) in react ?
          </summary>
          <motion.div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              React with Tailwind CSS Faq Accordion 1
            </p>
          </motion.div>
        </motion.details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">
            How to use tailwind css 3 in react
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              React with Tailwind CSS Faq Accordion 2
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">
            How to install Tailwind CSS 3 ?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              React with Tailwind CSS Faq Accordion 3
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold">How to send feedback ?</summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              React with Tailwind CSS Faq Accordion 4
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Accordion;