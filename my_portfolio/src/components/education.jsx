import React, { useContext } from 'react';
import { DataContext } from '../contexts/dataContext';
import nustImg from '../images/educat/nust.jpg'
import mcsImg from '../images/educat/mcs.jpg'
import apsImg from '../images/educat/aps.png'

const Education = () => {
     const { apiData } = useContext(DataContext)
    console.log(apiData)

    return(
        <>
            <section className="education" id="education">

            <h1 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h1>

                <p className="qoute">Education is not the learning of facts, but the training of the mind to think.</p>

                <div className="box-container">

                <div className="box">
                    <div className="image">
                    <img draggable="false" src={nustImg} alt=""/>
                    </div>
                    <div className="content">
                    <h3>{apiData.degree_detail.ms.title}</h3>
                    <p>{apiData.degree_detail.ms.institution}</p>
                    <h4>{apiData.degree_detail.ms.year} | In Progress</h4>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                    <img draggable="false" src={mcsImg} alt=""/>
                    </div>
                    <div className="content">
                    <h3>{apiData.degree_detail.bs.title}</h3>
                    <p>{apiData.degree_detail.bs.institution}</p>
                    <h4>{apiData.degree_detail.bs.year} | Completed</h4>
                    </div>
                </div>
                

                <div className="box">
                    <div className="image">
                    <img draggable="false" src={apsImg} alt=""/>
                    </div>
                    <div className="content">
                    <h3>{apiData.degree_detail.intermediate.title}</h3>
                    <p>{apiData.degree_detail.intermediate.institution}</p>
                    <h4>{apiData.degree_detail.intermediate.year} | Completed</h4>
                    </div>
                </div>

                    
                <div className="box">
                    <div className="image">
                    <img draggable="false" src={apsImg} alt=""/>
                    </div>
                    <div className="content">
                    <h3>{apiData.degree_detail.metric.title}</h3>
                    <p>{apiData.degree_detail.metric.institution}</p>
                    <h4>{apiData.degree_detail.metric.year} | Completed</h4>
                    </div>
                </div>

            </div>
            </section>
        </>
    );

}

export default Education;

