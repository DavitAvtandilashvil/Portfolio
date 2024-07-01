import styled from "styled-components";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <main>
        <Outlet />
      </main>
    </StyledAppLayout>
  );
}

const StyledAppLayout = styled.div``;
