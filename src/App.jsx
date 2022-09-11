import Navlinks from "./Components/Navlinks";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import Workspace from "./Components/Workspace";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #F5F7F8;
`;

function App() {
  return (
    <AppWrapper>
      <Sidebar />
      {/* <Navlinks /> */}
      <Workspace />
    </AppWrapper>
  );
}

export default App;
