import Nav from "./components/Navbar";
import Footer from "./components/Footer";

function Layout(props) {
  const { children } = props;

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;