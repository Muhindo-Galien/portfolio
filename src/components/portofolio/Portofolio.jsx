import { useState } from 'react';
import { PortfolioList } from '../portfolioList/PortfolioList';
import { PortfolioMenu } from '../portfolioMenu/PortfolioMenu';
import  './portofolio.scss'


export default function Portofolio({portfoliodata, categories,filterItems}) {
   
    
    

    return (
        <div className="portfolio" id='portfolio'>
            <h1>Projects</h1>
            <ul>
                <PortfolioList 
                 categories={categories} 
                 filterItems={filterItems}/>
            </ul>
            <PortfolioMenu portfoliodata={portfoliodata}/>
        </div>
    )
}
