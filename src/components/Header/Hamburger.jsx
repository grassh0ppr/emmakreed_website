export default function Hamburger({ isNavOpen, handleNavOpen }) {
  return (
    <button className="btn-mobile-nav" onClick={handleNavOpen}>
      <ion-icon
        className="icon-mobile-nav"
        name={isNavOpen ? "close-outline" : "menu-outline"}
        style={{ height: "48px", width: "48px", color: "#ff008c" }}
      ></ion-icon>
    </button>
  );
}
