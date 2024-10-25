import { Route, Routes } from "react-router-dom";
import "./App.css"
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Contacts } from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about-us" element={<div>О нас</div>}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
