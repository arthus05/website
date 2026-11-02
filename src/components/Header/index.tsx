import ThemeToggle from "../ThemeToggle";

const Header = () => (
  <header className="site-header">
    <a className="wordmark" href="#intro" aria-label="Arthus Vinícius, back to introduction">av<span aria-hidden="true">.</span></a>
    <nav aria-label="Main navigation">
      <a href="#projects">Work</a>
      <a href="#experience">Experience</a>
      {/* <a href="#about">About</a> */}
      <a href="#contact">Contact</a>
    </nav>
    <ThemeToggle />
  </header>
);

export default Header;
