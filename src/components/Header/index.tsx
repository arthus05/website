import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <header className="fixed h-16 w-full flex justify-end align-middle p-4">
      <ThemeToggle />
      {/* <p className='my-auto mx-4'>PT | EN</p> */}
    </header>
  );
};

export default Header;

