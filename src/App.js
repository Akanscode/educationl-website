//import { BrowserRouter } from "react-router-dom";
import "./App.css";
//import Header from "./CommonComponent/HeadComponent/Heading";

//import router from "react-router-dom";
//import Home from "./Home/Home";
//import About from "./About/About";
//import CoursesHome from "./CoursesCard/CoursesHome";
//import Price from "./Pricing/Price";
//import Blog from "./Blog/Blog";
import Home from "./Home/Home";
//import Pricing from "./Pricing/Price";

function App() {
  return (
    <div className="App">
      <>
        <Home />

        {/* <BrowserRouter>
          <Router>
           <Pricing />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/courses" component={CoursesHome} />
            <Route exact path="/price" component={Price} />
            <Route exact path="/journal" component={Blog} />
          </Router>
        </BrowserRouter>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CoursesHome} />
          <Route exact path="/price" component={Price} />
          <Route exact path="/journal" component={Blog} />
        </Router>*/}
      </>
    </div>
  );
}

export default App;
