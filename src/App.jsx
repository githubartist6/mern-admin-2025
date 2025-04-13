import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Footer } from "./components/layout/Footer";
import { Error } from "./pages/Error";
// admin panal
import { AdminNavbar } from "./components/layout/Admin-layout";
import { AdminUser } from "./pages/Admin/Admin-user";
import { AdmnContacts } from "./pages/Admin/Admin-contacts";
import { AdminService } from "./pages/Admin/Admin-service";
import { Adminupdate } from "./pages/Admin/Admin-Update";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="*" element={<Error />} /> */}

          <Route path="/admin" element={<AdminNavbar />}>
            <Route path="user" element={<AdminUser />} />
            <Route path="user/:id" element={<Adminupdate />} />
            <Route path="contact" element={<AdmnContacts />} />
            <Route path="service" element={<AdminService />} />
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;
