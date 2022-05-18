import  './intro.scss';
import Social from '../social/Social';
import elie from "../../assets/elie.png"


export default function Intro() {
    return (
        <div className='intro' id="intro">

            <div className="left">
                <div className="imgContainer">
                    <img src={elie} alt="elie_image" />
                </div>
            </div>
        <div className="right">

           <div className="wrapper">
               <h3>Hi there, I'm</h3>
               <h1>Elie Kinahwa</h1>
               <h2>
                 A Flutter Developer
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
