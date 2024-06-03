import Footer from "./components/Footer";

function Layout(props) {
  const { children } = props;

  return (
    <>
      
      {children}
      <Footer />
    </>
  );
}

export default Layout;