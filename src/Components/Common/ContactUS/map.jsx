import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ProAnimatedMap = () => {
  return (
    <div className="space-y-8 shadow-2xl rounded-2xl  md:max-h-[850px] relative overflow-hidden">

      <motion.div
        className="relative h-[350px] sm:h-[500px] rounded-xl overflow-hidden shadow-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ rotateX: 8, rotateY: -6, scale: 1.05 }}
      >
        {/* Google Maps  */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3220200827564!2d80.20131067463313!3d13.015153891767103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671455555557%3A0xc132a69138b8fdf6!2sOlympia%20Technology%20Park!5e0!3m2!1sen!2sin!4v1736798581566!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>


        <motion.div
          className="absolute top-[52%] left-[50.2%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          initial={{ y: -20, opacity: 0, scale: 0.5 }}
          animate={{ y: [0, -10, 0], opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          {/* Pulsing Radar Effect */}
          <motion.div
            className="absolute w-20 h-20 bg-red-500 rounded-full opacity-20 blur-md"
            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
          {/* Drop  for Pin */}
          <motion.div
            className="absolute w-6 h-6 bg-black rounded-full opacity-30 blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3, y: [2, -2, 2] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          />
          {/* 3D  Map Pin */}
          <MapPin className="text-red-600 w-12 h-12 drop-shadow-xl transform transition-transform hover:scale-125" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProAnimatedMap;
