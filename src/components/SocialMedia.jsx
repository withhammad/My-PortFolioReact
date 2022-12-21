import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsYoutube, BsLinkedin } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://github.com/withhammad">
      <BsGithub/>
      </a>
    </div>

    <div>
    <a href="https://www.youtube.com/c/TravellingBuggy">
      <BsYoutube/>
      </a>
    </div>

    <div>
    <a href="https://www.instagram.com/with.hamad/">
      <BsInstagram/>
      </a>
    </div>
   
    <div>
    <a href="https://www.linkedin.com/in/withhammad/">
      <BsLinkedin/>
      </a>
    </div>
    
  </div>
);

export default SocialMedia;