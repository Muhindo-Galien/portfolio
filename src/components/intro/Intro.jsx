import  './intro.scss';
import { FaGithub,FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import Social from '../social/Social';


export default function Intro() {
    return (
        <div className='intro' id="intro">

            <div className="left">
                <div className="imgContainer">
                    <img src="assets/galien.png" alt="" />
                </div>
            </div>
        <div className="right">

           <div className="wrapper">
               <h3>Hi there, I'm</h3>
               <h1>Muhindo Galien</h1>
               <h2>
                a web developer
               </h2>
               
               <Social/>
           </div>
           <a className="arrowd" href="#about">
            <img src="assets/pngwing.com.png" alt="" />
           </a>
        </div>
        </div>
    )
}
