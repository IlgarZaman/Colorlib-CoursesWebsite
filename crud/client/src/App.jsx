import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollButton from "./components/scroll";
import Footer from "./layout/footer";
import Header from "./layout/header";
import AddCourse from "./pages/addcourse";
import Details from "./pages/details";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/addcourse" element={<AddCourse/>}/>
      </Routes>
      <ScrollButton/>
      <Footer/>
    </div>
  );
}

export default App;
