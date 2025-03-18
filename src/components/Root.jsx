import Header from "./Header/Header";
// import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { useDarkMode } from "../contexts/DarkModeContext";

function Root() {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Root;
