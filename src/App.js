import "./App.css";
import Home from "./modules/screens/home";
import About from "./modules/screens/about";
import LevelTest1 from "./modules/screens/levelTest/levelTest1";
import LevelTest2 from "./modules/screens/levelTest/levelTest2";
import Contact from "./modules/screens/contact";
import Header from "./modules/menu/header";
import Footer from "./modules/menu/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from "./modules/screens/blog";
import Testimonials from "./modules/screens/testimony";
import Blog from "./modules/screens/blog/blog";

function App(props) {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/leveltest" component={LevelTest1} />
          <Route exact path="/leveltest2" component={LevelTest2} />
          <Route exact path="/blog" component={Blogs} />
          <Route exact path="/blog/:Id" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/testimonials" component={Testimonials} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
