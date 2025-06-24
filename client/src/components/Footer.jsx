import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="lg:px-6 xl:px-32 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-5 border-t border-gray-500/30 text-gray-500">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-5 md:mx-5"
        >
          <span className="text-sm space-y-1">
            <a href="/" className="hover:underline">
              Home
            </a>
          </span>
          <span className="text-sm space-y-1">
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </span>
          <span className="text-sm space-y-1">
            <a href="#" className="hover:underline">
              FAQs
            </a>
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-sm text-gray-500"
        >
          Copyright 2025 © PixelDiary
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-5 md:mx-5"
        >
          <span className="text-sm font-semibold space-y-1">Follow me :</span>
          <span className="text-sm space-y-1">
            <a
              href="https://www.instagram.com/_asif47_/"
              target="_blank"
              className="hover:underline"
            >
              Instagram
            </a>
          </span>
          <span className="text-sm space-y-1">
            <a
              href="https://www.facebook.com/asif.istiaq.2025/"
              target="_blank"
              className="hover:underline"
            >
              Facebook
            </a>
          </span>
          <span className="text-sm space-y-1">
            <a
              href="https://bd.linkedin.com/in/md-istiaque-ahmed-asif-86972033a"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </span>
        </motion.div>
      </div>
    </div>
  );
};
export default Footer;
