import React from 'react'
import { About } from '../components/aboout/About'
import Intro from '../components/intro/Intro'
import Menu from '../components/menu/Menu'
import Portofolio from '../components/portofolio/Portofolio'
import Single from '../components/single/Single'
import { Contact } from '../contact/Contact'
import Topbar from '../topbar/Topbar'


export default function Home({portfoliodata,categories,filterItems}) {
    return (
        <>
          <div className="app">
      
      <div className="sections">
        <Intro/>
        <About/>
        <Portofolio portfoliodata={portfoliodata} categories={categories} filterItems={filterItems}/>
        <Contact/>
      </div>
      

    </div>  
        </>
    )
}
