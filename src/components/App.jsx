import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import HomePage from "../pages/HomePage/HomePage";
import ContactPage from "../pages/ContactsPage/ContactPage";

import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
