import './menu.scss'
export default function Menu({isOpen, setIsOpen}) {
    return (
        <div className={"menu "+(isOpen && "active")}>
        <ul>
            <li onClick={()=>setIsOpen(false)}>
            <a href="/#intro">Home</a>
            </li>
            
            <li onClick={()=>setIsOpen(false)}>
            <a href="/#about">About</a>
            </li>
            <li onClick={()=>setIsOpen(false)}>
            <a href="/#portfolio">Projects</a>
            </li>   

            <li onClick={()=>setIsOpen(false)}>
            <a href="/#contact">Contact</a>
            </li>
        </ul>
    </div>
    )
}
