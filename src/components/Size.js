import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; 

function Size({ chooseSize, pizza}) {

    const PizzaSize = [" Personal 6' ", " Small 10' ", " Medium 12' ", " Large 14' ", " X-Large 16' "];

    const Listsizes = PizzaSize.map((PizzaSize, index) => 
       <motion.li 
       className="listItems"
       animate={{ y: 15, opacity: 1 }}
       transition={{ type: 'spring', stiffness: 400 }}
       whileHover={{ scale: 1.3 }}
       onClick={() => chooseSize(PizzaSize)}
       key={index}
       >
           {PizzaSize}
        </motion.li>
    );

    return (
        <motion.div 
        className="chooseStyle"
        initial={{ x: 200, opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', delay: 0.2 ,duration: 1.5 }}
        >
            <motion.h2
            initial={{ opacity: 0, y:-255}}
            animate={{ y: 15, opacity: 1 }}
            >Chose a Size:</motion.h2>

            {/*This is where the pizza List Renders */}
            <motion.ul className="PizzaList">
                <Link to="/Sauce">
                    {Listsizes}
                </Link>
            </motion.ul>

            <motion.div className="ButtonRow">
                <Link to="/">
                 <motion.button
                    initial={{ opacity: 0, delay: 5}}
                    animate={{ y: 15, opacity: 1 }}
                    whileHover={{ scale: 1.5, 
                    boxShadow: "0px 0px 20px rgb(255, 255, 255)" }}> 
                        Back
                 </motion.button>
                </Link>

            </motion.div>

        </motion.div>
    );


}


export default Size;