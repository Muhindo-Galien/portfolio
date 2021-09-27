import { useState } from "react";
import "./portfolioList.scss"

export const PortfolioList = ({categories,filterItems}) => {
     const [selected,setSelected] = useState("All");
     
     

    return (
        <>
            
            {categories.map((category, index)=>{
            return ( <li className={selected === category ? "portfolioList active" : "portfolioList"}
     key={index}   onClick={()=>{
                filterItems(category)
                setSelected(category)
            }}>{category}</li>)
             })}

             
                
        </>
    )
}
