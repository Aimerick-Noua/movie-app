
import { motion } from 'framer-motion';
import { FaFilm } from 'react-icons/fa';
import './MovieLoader.css';


const MovieLoader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader-icon"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <FaFilm size={50} />
      </motion.div>
      <p>Loading Movies...</p>
    </div>
  );
};

export default MovieLoader;
