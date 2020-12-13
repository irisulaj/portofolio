import React from 'react'
import "./footer.style.css"

const FooterBanner = () => {
    return (
        <div id="contactfooter">
            
        
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify"> This is a portfolio made with React Js which  
            represent a summary of my skills, education and some modest projects.
            <br/>The purpose of this portfolio is to give a practical insight of my capabilities
            in the fields of web and software development. Enjoy!!!
             
              </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="#skills">Front End</a></li>
              <li><a href="#skills">Back End</a></li>
              <li><a href="#skills">Hosting Platforms</a></li>
              <li><a href="#skills">Programming Languages</a></li>
              <li><a href="#skills">Database</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#hello">Hello</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#mywork">My work</a></li>
              <li><a href="#contactfooter">Contact</a></li>
            </ul>
          </div>
        </div>
        <hr/>
    
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
            <li><a className="linkedin" href="https://www.linkedin.com/in/shaqir-sulaj-3370051aa" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
              <li><a className="instagram" href="https://github.com/irisulaj/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
              <li><a className="facebook" href="#facebook"><i className="fa fa-facebook"></i></a></li>
                 
            </ul>
          </div>
        </div>
      </div>
</footer>

        </div>
    )
}

export default FooterBanner
