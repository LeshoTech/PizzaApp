import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


function Sauce({ chooseSauce, pizza}) {

    const pizzaSauce = [" Light sauce ", " Heavy Sauce ", " No Sauce "];

    const listSauces = pizzaSauce.map((pizzaSauce, index) =>     
    <motion.li 
    className="listItems"
    animate={{ y: 15, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 400 }}
    whileHover={{ scale: 1.3 }}
    onClick={() => chooseSauce(pizzaSauce)}
    key={index}
    >
        {pizzaSauce}
    </motion.li>);

    return (
        <motion.div 
        className="SauceStyle"
        initial={{ x: 200, opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', delay: 0.2 ,duration: 1.5 }}
        >

            <motion.h2 
            initial={{ opacity: 0, y:-255}}
            animate={{ y: 15, opacity: 1 }}
            >
                Choose your Sauce:
            </motion.h2>

            <motion.ul className="PizzaList">
                <Link to="/Toppings">
                    {listSauces}
                </Link>
            </motion.ul>


            <motion.div className="ButtonRow">
                <Link to='/Size'>
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

export default Sauce;