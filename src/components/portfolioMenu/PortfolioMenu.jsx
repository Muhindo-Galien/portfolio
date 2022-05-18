import React from 'react'
import { Link } from 'react-router-dom'

export const PortfolioMenu = ({portfoliodata}) => {

    return (
        <div className="container">
        {
            portfoliodata && portfoliodata.map((item)=>{
                const {id,title,img} = item;
                return (
                    <Link to={`/projects/${id}`}>
                        <div className="item" key={id}>
                            <img src={img} alt={title} />
                            <h3>{title}</h3>
                        </div>
                    </Link>
                )
            })
        }
          
                
            </div>
    )
}
