import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import Topbar from "./topbar/Topbar";
import './app.scss';
import { Contact } from "./contact/Contact";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import { data } from "./data";
import { About } from "./components/aboout/About";
import Single from "./components/single/Single";
import Social from "./components/social/Social";
import Home from "./pages/Home";

const allcategories = ['All',...new Set(data.map((item)=>
item.category))]

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [portfoliodata, setPortfoliodata]= useState(data);
  const [categories, setCategories] = useState(allcategories);

   const filterItems = (category)=>{
    if(category ==='All'){
      setPortfoliodata(data);
      return;
    }
   const  newItems = data.filter((item)=> item.category === category);
   console.log(newItems);
    setPortfoliodata(newItems);
  }
  return (
    <Router>
    <Topbar isOpen= {isOpen} setIsOpen = {setIsOpen}/>
    <Menu isOpen= {isOpen} setIsOpen = {setIsOpen}/>
      <Switch>
          <Route exact path="/">
            <Home 

            portfoliodata={portfoliodata}
            categories={categories} 
            filterItems={filterItems} />
          </Route>
          <Route path="/projects/:id">
            <Single/>
          </Route>
          <Route path="/">
            <Single/>
          </Route>
      </Switch>
    
      
    </Router>
    
  );
}

export default App;
