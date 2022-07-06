import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.7, duration: 0.7 },
  },
};

const btnVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 0 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
    },
  },
  visible: {
    x: [],
    transition: { delay: 2 },
  },
  exit: {
    //   x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 2 },
  },
};
const Home = () => {
  return (
    <motion.div
      className="home container"
      animate="visible"
      initial="hidden"
      variants={containerVariants}
      exit="exit"
    >
      <motion.h2
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={btnVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
