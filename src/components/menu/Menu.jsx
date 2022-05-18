import './menu.scss'
import {Link} from 'react-router-dom';

export default function Menu({isOpen, setIsOpen}) {
    return (
        <div className={"menu "+(isOpen && "active")}>
        <ul>
            <li onClick={()=>setIsOpen(false)}>
                <Link to='/'>
                    <a>Home</a>
                </Link>
            </li>
            
            <li onClick={()=>setIsOpen(false)}>
                <Link to='/about'>
                    <a >About</a>
                </Link>
            </li>
            <li onClick={()=>setIsOpen(false)}>
                {/* <Link to='/'> */}
                    <a href="/#portfolio">Projects</a>
                {/* </Link> */}
            </li>   

            <li onClick={()=>setIsOpen(false)}>
                <Link to='/contact'>
                    <a >Contact</a>
                </Link>
            </li>
        </ul>
    </div>
    )
}
