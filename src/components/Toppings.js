import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


function Toppings({ chooseToppings, pizza}) {

    const pizzaToppings = [' Peperoni ',' Cheese ', 'Extra-Cheese', ' Pineapples ',' Sausage ',' Beef '];

    const listVariants = {
        hover: { 
            scale: 1.3,
            boxShadow: "0px 0px 20px rgb(255, 255, 255)", 
            transition: { yoyo: Infinity}
        }
    }


    
    const listToppings = pizzaToppings.map((pizzaToppings, index) => 
    <motion.div
    className={ pizza.toppings.includes(pizzaToppings) ? "IconAfterButton" : "listItems" }
    animate={{ y: 15, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 400 }}
    whileHover={{ scale: 1.3}}
    key={index}
    onClick={() => chooseToppings(pizzaToppings)}
    
    >
        {pizzaToppings}
    </motion.div>);

    
    return (
        <motion.div 
        className="ToppingsStyle"
        initial={{ x: 200, opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', delay: 0.2 ,duration: 1.5 }}
        >

            <motion.h2 
                initial={{ opacity: 0, y:-255}}
                animate={{ y: 15, opacity: 1 }}
            >
                Choose Your Toppings:
            </motion.h2>

            <motion.ul className="PizzaList">
            {listToppings}
            </motion.ul>

            <motion.div className="ButtonRow">
                <Link to='Order'>
                    <motion.button
                    variants={listVariants}
                    initial={{ opacity: 0, delay: 5}}
                    animate={{ y: 15, opacity: 1 }}
                    whileHover="hover"> 
                        Submit Order
                    </motion.button>
                </Link>

                <Link to='/Sauce'>
                 <motion.button
                    variants={listVariants}
                    initial={{ opacity: 0, delay: 5}}
                    animate={{ y: 15, opacity: 1 }}
                    whileHover="hover"> 
                        Back
                 </motion.button>
                </Link>

            </motion.div>
        </motion.div>

    );
}

export default Toppings;