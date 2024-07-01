import styled from "styled-components";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function AppLayout() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: "easeOut", duration: 3.2 }}
    >
      <StyledAppLayout>
        <Header />
        <main>
          <Outlet />
        </main>
      </StyledAppLayout>
    </motion.div>
  );
}

const StyledAppLayout = styled.div`
  & > main {
    background: #11071f;
    overflow-x: hidden;
    min-height: 100vh;
  }
`;
