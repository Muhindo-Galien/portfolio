import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { data } from "../../data";

import "./single.scss";

export default function Single() {
    const {id}=useParams();
  const [portfoliodata, setPortfoliodata]= useState([]);
  
  useEffect(()=>{
        const specific = data.filter((item)=>item.id === id);
        setPortfoliodata(specific);
        console.log(portfoliodata);
    },[id])
    return (
        <div className="single">
            <div className="titleDetails">

                <h1>title</h1>
                <p> This page contains the case study of Boreal Coffee
                 Clone Website which includes 
                the Project Overview, Tools Used and Live Links to
                 the official product.</p>
            </div>
            <div className="tools">
            <div className="wrapper">
            
                
                <div className="left">
                    <div className="item" >
                        <img src="assets/shake.svg" alt="" />
                        <button><a href="#lo">Try it</a></button>
                    </div>
                

                </div>
                

                <div className="right">
                    <h2>Tools Used</h2>
                <div className="container">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>SASS</span>
                    <span>GIT</span>
                    <span>Github</span>
                    <span>Responsive Design</span>
                    <span>Terminal</span>
                    <span>Express Basics</span>
                    <span>SQL Basics</span>

                </div>
                </div>

            </div>
            </div>
        </div>
    )
}
