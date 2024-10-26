import { Route, Routes } from "react-router-dom";
import "./App.css"
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Contacts } from "./components/Contacts/Contacts";
import { AboutUs } from "./components/AboutUS/AboutUs";
import { Projects } from "./components/Projects/Projects";
import { allProjectList } from "./constants/allProjectList";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/projects/:id" element={<Projects projectList={allProjectList}/>}></Route>
        <Route path="/projects" element={<ProjectsList projectList={allProjectList}/>}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
