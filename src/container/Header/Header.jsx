import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 ,marginTop: 20
          }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">HAMMAD</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Software Developer</p>
          <p className="p-text">UI Designer</p>
          <p className="p-text">Marketing Specialist</p>
        </div>
      </div>
    </motion.div>
    

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      
      <div className="circle-cmp app__flex" >
      <lottie-player 
      src="https://assets3.lottiefiles.com/packages/lf20_498gmG.json"  
      background="transparent"  speed="1"  
       loop  autoplay></lottie-player>
        </div>
        <div className="circle-cmp app__flex" >
        <lottie-player 
        src="https://assets1.lottiefiles.com/packages/lf20_ctaacxzb.json"  
        background="transparent"  speed="1"    
        loop  autoplay></lottie-player>
        </div>
        <div className="circle-cmp app__flex" >
        <lottie-player 
        src="https://assets1.lottiefiles.com/packages/lf20_kc4lctca.json"  
        background="transparent"  speed="1"  
         loop  autoplay></lottie-player>
        </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');