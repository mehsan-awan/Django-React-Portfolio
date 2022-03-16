import React, { useContext } from 'react';
import Profile from '../images/ehsan.jpg'
import { DataContext } from '../contexts/dataContext';


const About = () => {   
    const { apiData } = useContext(DataContext)

    return(
        <>
            <section className="about" id="about">
                <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
                
                <div className="row">

                <div className="image">
                    <img draggable="false" className="tilt" src={Profile} alt=""/>
                </div>
                <div className="content">
                    <h3>I'm {apiData.name}</h3>
                    <span className="tag">Passionate Web and App Developer</span>
                    <p>Currently pursuing my first year engineering focused on information technology. I am very passionate about improving my coding skills & developing my own applications & softwares. Having some experience in web development. Interested in android. Loves to develop core Java & MySQL stuff.</p>
                    
                    <div className="box-container">
                        <div className="box">
                        <p><span> age: </span> 24</p>
                        <p><span> phone : </span> +92 336-541-0874</p>
                        </div>
                        <div className="box">
                        <p><span> email : </span> 354721ehsan@gmail.com</p>
                        <p><span> place : </span> Rawalpindi, Pakistan - 46000</p>
                        </div>
                    </div>
                    
                    <div className="resumebtn">
                        <a href="#" className="btn"><span>Resume</span>
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>

                </div>
                </div>
            </section>

        </>
    );

}

export default About;

