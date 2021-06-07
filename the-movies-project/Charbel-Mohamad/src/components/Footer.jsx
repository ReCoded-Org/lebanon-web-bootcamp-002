import React from 'react';
import { MarkGithubIcon} from '@primer/octicons-react';
import '../Footer.css';


const Footer = () => {
    return (
        <footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
      
        <div className="footer-pad">
          <h4>This Work is done by :</h4>
          {/* <ul className="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Payment Center</a></li>
            <li><a href="#">Contact Directory</a></li>
            <li><a href="#">Forms</a></li>
            <li><a href="#">News and Updates</a></li>
            <li><a href="#">FAQs</a></li>
          </ul> */}
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
       
        <div className="footer-pad">
          <h4>Charbel Hbayter</h4>
          <ul className="list-unstyled">
            <li><a href="https://github.com/charbelh99" target='_blank' ><MarkGithubIcon size={25}/></a></li>
            {/* <li><a href="#">Accessibility</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Webmaster</a></li> */}
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
      
        <div className="footer-pad">
          <h4>Mohamad El Sabaa </h4>
           <ul className="list-unstyled">
           <li><a href="https://github.com/Mohamad-Sabaa" target='_blank'><MarkGithubIcon size={25}/></a></li>
            {/* <li><a href="#">Public Works</a></li>
            <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li>
              <a href="#"></a>
            </li> */}
          </ul> 
        </div>
      </div>
    	{/* <div className="col-md-3">
    		<h4>Follow Us</h4>
            <ul className="social-network social-circle">
             <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
            </ul>				
		</div> */}
    </div>
	<div className="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2021 -Hbayter & Sebaa.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
        
    )
}

export default Footer
// <div>
        //     <p>This website is made by..</p>
        //     <h1>
        //       <a href="https://github.com/Mohamad-Sabaa">
        //         <MarkGithubIcon size={16} color="black" aria-label="GitHub" /> 
        //     </a>
        //     Mohamad ALSabaa
        // </h1>
        // <h1>
        //       <a href="https://github.com/charbelh99">
        //         <MarkGithubIcon size={16} color="black" aria-label="GitHub" />
        //     </a>
        //     Charbel Hbayter 
        // </h1>

        // </div>
  