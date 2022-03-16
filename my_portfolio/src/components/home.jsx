import React, { useContext, useEffect, useRef  } from 'react';
import Typed from "typed.js";
import Hero from '../images/hero.png'
import { DataContext } from '../contexts/dataContext';
import ParticleBackground from './particleBackground';


const Home = ({value}) => {
    
    const { apiData } = useContext(DataContext)
    console.log(apiData)
  

    const ele = useRef(null);

    useEffect(() => {
        const typed = new Typed(ele.current, {
        // strings: ["Handy", "Mandy", "Candy", "More Strings"],  
          strings: apiData.interests, // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 200,
          smartBackspace: true,
          loop: true,
          showCursor: true,
        //   cursorChar: "!"
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, [apiData]);


    return(
        <>
            <section className="home" id="home">

                <div className="content" >
                    <h3>Hi There,<br/> I'm M. <span>{apiData.name}</span></h3>   
                    <p>i am into  <span ref={ele}></span></p>
                                        
                {/* <p>i am into <span className="typing-text"></span></p> */}
                <a href="#about" className="btn"><span>About Me</span>
                <i className="fas fa-arrow-circle-down"></i>
                </a>
                <div className="socials">
                    <ul className="social-icons">
                    <li><a className="linkedin" href={apiData.accounts.linkedin} target="_blank"><i className="fab fa-linkedin"></i></a></li> 
                    <li><a className="github" href={apiData.accounts.github} target="_blank"><i className="fab fa-github"></i></a></li>
                    <li><a className="twitter" href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                    {/* <li><a className="telegram" href="#" target="_blank"><i className="fab fa-telegram-plane"></i></a></li> */}
                    <li><a className="instagram" href="#"><i className="fab fa-instagram" target="_blank"></i></a></li>
                    {/* <li><a className="dev" href="#" target="_blank"><i className="fab fa-dev"></i></a></li> */}
                    <li><a className="dev" href="#" target="_blank"><i className="fab fa-hackerrank"></i></a></li>

                    </ul>
                </div>
                </div>
            <div className="image">
                <img draggable="false" className="tilt" src={Hero} alt="hero"/>
            </div>
            </section>

        </>
    );

}

export default Home;

