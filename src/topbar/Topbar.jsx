import './topbar.scss'
import { Link } from 'react-router-dom';
export default function Topbar({isOpen, setIsOpen}){
    return (
        
        <div className={isOpen? "topbar active":"topbar"}>
            <div className='wrapper'>
                <div className='left'>
                
                    <a href="/#intro" className="logo">M G</a>
                </div>
                
            
                <div className="right">
                    <div className="navlinks">
                        <ul>
                            <li onClick={()=>setIsOpen(false)}>
                            <a href="#intro">Home</a>
                            </li>
                            <li onClick={()=>setIsOpen(false)}>
                            <a href="#about">About</a>
                            </li>
                            <li onClick={()=>setIsOpen(false)}>
                            <a href="#portfolio">Projects</a>
                            </li>   

                            <li onClick={()=>setIsOpen(false)}>
                            <a href="#contact">Contact</a>
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
