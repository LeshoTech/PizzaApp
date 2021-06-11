import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Order(pizza) {

    const resetState = (e) => {
        pizza.pizza.size = "";
        pizza.pizza.sauce = "";
        pizza.pizza.style = "";
        pizza.pizza.toppings = [];
    } 

    return (
        <div>
            <motion.div
            className="OrderStyle"
            initial={{ y: 200, opacity: 0}}
            animate={{ y: -20, opacity: 1 }}
            transition={{ type: 'spring', delay: 0.5, stiffness: 300 }}
            >

                <h2>Thank you for ordering!</h2>
                <p>Your order is as follows</p>
               
                <div className="order-Box">
                    Style: {`${pizza.pizza.style}`} <br />
                    Size: {`${pizza.pizza.size}`} <br />
                    Sauce:  {`${pizza.pizza.sauce}`} <br />
                    Topping(s): {`${pizza.pizza.toppings}`} <br />

                </div>
                
                <Link to='/'>
                    <motion.button
                    initial={{ opacity: 0, delay: 5}}
                    animate={{ y: 15, opacity: 1 }}
                    whileHover={{ scale: 1.5,  
                    boxShadow: "0px 0px 20px rgb(255, 255, 255)"   }}
                    onClick={resetState}
                    >
                        Start Over
                    </motion.button>
                </Link>
            </motion.div>

        </div>

    );
}

export default Order;