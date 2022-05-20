import  Navbar  from "./components/Navbar";
import Footer from "./components/footer/Footer";import { BrowserRouter,
  Routes,Route } from "react-router-dom"
import Home from "./components/Home/Home.js";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>} >
          </Route>
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
