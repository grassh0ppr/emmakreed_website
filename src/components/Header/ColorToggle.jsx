import { useDarkMode } from "../../contexts/DarkModeContext";

const ColorToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button id="colorToggle" onClick={toggleDarkMode}>
      <ion-icon
        className="color-theme-icon"
        name={darkMode ? "sunny" : "moon"}
      ></ion-icon>
    </button>
  );
};

export default ColorToggle;
