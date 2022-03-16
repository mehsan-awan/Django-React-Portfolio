import React from 'react';


const Footer = () => {
    return(
        <>
           <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>Jigar's Portfolio</h3>
                        <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> Please wait for a while all major projects will be listed soon. Till then keep visiting. Connect with me over live chat!</p>
                    </div>

                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#home"><i className="fas fa-chevron-circle-right"></i> home</a>
                        <a href="#about"><i className="fas fa-chevron-circle-right"></i> about</a>
                        <a href="#skills"><i className="fas fa-chevron-circle-right"></i> skills</a>
                        <a href="#education"><i className="fas fa-chevron-circle-right"></i> education</a>
                        <a href="#work"><i className="fas fa-chevron-circle-right"></i> work</a>
                        <a href="#experience"><i className="fas fa-chevron-circle-right"></i> experience</a>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <p> <i className="fas fa-phone"></i>+91 704-302-4736</p>
                        <p> <i className="fas fa-envelope"></i>jigarsable21@gmail.com</p>
                        <p> <i className="fas fa-map-marked-alt"></i>Gujarat, India-396195</p>
                        <div className="share">

                            <a href="https://www.linkedin.com/in/jigar-sable" className="fab fa-linkedin" target="_blank"></a>
                            <a href="https://github.com/jigar-sable" className="fab fa-github" target="_blank"></a>
                            <a href="mailto:jigarsable21@gmail.com" className="fas fa-envelope" target="_blank"></a>
                            <a href="https://twitter.com/jigar_sab" className="fab fa-twitter" target="_blank"></a>
                            <a href="https://t.me/lifecode5" className="fab fa-telegram-plane" target="_blank"></a>
                        </div>
                    </div>
                </div>

                <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="https://www.linkedin.com/in/jigar-sable"> jigar sable</a></h1>

            </section>
            


        </>
    );

}

export default Footer;

