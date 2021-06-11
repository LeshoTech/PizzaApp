import logo from './logo.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function Nav() {
  
  return (
    <div>
      <motion.div className="ugo">
        <motion.h1>Chuck's Pizza</motion.h1> 

        <Link to='/'>
          <motion.img 
          src={logo} 
          alt="Logo Here" 
          className="logo" 
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: -390, opacity: 1}}
          transition={{ delay: 1, duration: 1, ease: "easeIn" }}
          />
        </Link>

        

      </motion.div>

      <motion.hr 
      className="nav-line"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: -10, opacity: 1, }}
      transition={{ type: 'spring', delay: 0.5 }}
      />  
    </div>
  );
}

export default Nav;

