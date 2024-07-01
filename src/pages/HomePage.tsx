import styled from "styled-components";
import Introduce from "../components/Introduce";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function HomePage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: "easeOut", duration: 3.2 }}
    >
      <Home>
        <Introduce />
      </Home>
    </motion.div>
  );
}

const Home = styled.div``;
