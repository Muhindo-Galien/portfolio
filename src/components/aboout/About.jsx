import "./about.scss";

export const About = () => {
    return (
        <div className="about" id="about">
        
            <h1>About me</h1>
            <div className="wrapper">
            
                
                <div className="left">
                    <h2>Get to know me!</h2>
                    <p>
                        I'm a Frontend Web Developer building
                         the Front-end of Websites and Web Applications
                        that leads to the success of the overall product.
                         Check out some of my work in the Projects section.
                        
                    </p>
                

                </div>
                

                <div className="right">
                    <h2>My Skills</h2>
                <div className="container">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>SASS</span>
                    <span>GIT</span>
                    <span>Github</span>
                    <span>Responsive Design</span>
                    <span>Terminal</span>
                    <span>Express Basics</span>
                    <span>SQL Basics</span>

                </div>
                </div>

            </div>
        </div>
    )
}
