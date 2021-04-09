const { default: Navbar } = require("./Navbar");
const { default: Footer } = require("./Footer");

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
