import {useParams} from 'react-router-dom';
import "./single.scss";
import { data } from "../../data";
import { FaGithub } from 'react-icons/fa';

export default function Single() {
    const {id}=useParams();
    const item = data.filter((item)=> item.id == id);
    // console.log(item);


    return (
        <div className="single">
            <div className="titleDetails">

                <h1>{item[0].title}</h1>
                <p> {item[0].content}</p>
            </div>
            <div className="tools">
            <div className="wrapper">
            
                
                <div className="left">
                    <div className="item" >
                        <img src={item[0].img} alt="" />
                        <button><a href={item[0].linkGit} target="_blank" rel="noreferrer"><FaGithub/></a></button>
                    </div>
                

                </div>
                

                <div className="right">
                    <h2>Tools Used</h2>
                <div className="container">
                {item[0].tools.map((item)=><span>{item}</span>)}

                </div>
                </div>

            </div>
            </div>
        </div>
    )
}
