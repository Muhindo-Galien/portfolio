import './topbar.scss'
import logo from "../assets/elie_logo.png"
import { Link } from 'react-router-dom'
export default function Topbar({isOpen, setIsOpen}){
    return (
        
        <div className={isOpen? "topbar active":"topbar"}>
            <div className='wrapper'>
                <div className='left'>
                    <Link to='/'>
                        <a href="/#intro" className="logo"><img src={logo} alt="logo" /></a>
                    </Link>
                
                </div>
                
            
                <div className="right">
                    <div className="navlinks">
                        <ul>
                            <li onClick={()=>setIsOpen(false)}>
                            <Link to='/'>
                                <a href="#intro">Home</a>
                            </Link>
                            </li>

                            

                            <li onClick={()=>setIsOpen(false)}>
                                <Link to='/about'>
                                    <a href="#about">About</a>
                                </Link>
                            </li>

                            
                            <li onClick={()=>setIsOpen(false)}>
                                <Link to='/portfolio'>
                                    <a>Projects</a>
                                </Link>
                            </li>   

                            <li onClick={()=>setIsOpen(false)}>
                                <Link to='/contact'>
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger" onClick={()=>setIsOpen(!isOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
