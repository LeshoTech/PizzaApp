import Nav from './components/Nav';
import Style from './components/Style';
import Size from './components/Size';
import Sauce from './components/Sauce';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  const [pizza, setPizza] = useState({ size: "", style: "", sauce: "", toppings: [],})

  const chooseSize = (size) => {
    setPizza({ ...pizza, size })
  }

  const chooseSauce = (sauce) => {
    setPizza({...pizza, sauce})
  } 

  const chooseStyle = (style) => {
    setPizza({...pizza, style})
  } 

  const chooseToppings = (toppings) => {
    let newTops;

    if (!pizza.toppings.includes(toppings)){
      newTops = [...pizza.toppings, toppings];
    } else {
      newTops = pizza.toppings.filter(item => item !== toppings);
    }

    setPizza({...pizza, toppings: newTops });
    console.log(pizza);
  }


  
  return (
    <Router>
        <Nav />
        <Switch>

          <Route 
          path="/" 
          exact render={() => <Style chooseStyle={chooseStyle} pizza={pizza}/>} 
          /> 

          <Route 
          path="/Size" 
          render={() => <Size chooseSize={chooseSize} pizza={pizza}/>} 
          /> 

          <Route 
          path="/Sauce" 
          render={() => <Sauce chooseSauce={chooseSauce} pizza={pizza} />} 
          />

          <Route 
          path="/Toppings" 
          render={() => <Toppings chooseToppings={chooseToppings} pizza={pizza} />}
          />

          <Route 
          path="/Order" 
          render={() => <Order pizza={pizza} />}
          />

        </Switch>
    </Router>
    
  );
}

export default App;
