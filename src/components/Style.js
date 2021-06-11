import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; 

function Style({ chooseStyle, pizza}) {

    const PizzaStyle = ["Deep Dish", "Thin Crust", "Traditional", "Pan Pizza" , "Chicago", "Square"];

    const Listsizes = PizzaStyle.map((PizzaStyle, index) => 
       <motion.li 
       className="listItems"
       animate={{ y: 15, opacity: 1 }}
       transition={{ type: 'spring', stiffness: 400 }}
       whileHover={{ scale: 1.3 }}
       onClick={() => chooseStyle(PizzaStyle)}
       key={index}
       >
           {PizzaStyle}
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
            >Chose a Style:</motion.h2>

            {/*This is where the pizza List Renders */}
            <motion.ul className="PizzaList">
                <Link to="/Size">
                    {Listsizes}
                </Link>
            </motion.ul>

        </motion.div>
    );


}


export default Style;