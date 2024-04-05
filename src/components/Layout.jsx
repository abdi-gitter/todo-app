import MainNavbar from './MainNavbar';

const Layout = ({ children }) => {
  return (
    <>
      <MainNavbar />
      {children}
    </>
  );
};

export default Layout;
