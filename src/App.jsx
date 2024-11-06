import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './component/AppName';
import FoodItems from './component/FoodItems';
import ErrorMessages from './component/ErrorMessages';
import Container from './component/Container';
import FoodInput from './component/FoodInput';
import './App.css';
import { useState } from 'react';


function App() {
  // let foodItems = ['Dal','Rice','Salad','Milk','Roti'];
  // let foodItems = [];

  let [textToShow,setTextToShow] = useState('Food Item Enter By User');
  let [foodItems,setFoodItems] = useState([]);

  let onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newItem = event.target.value;
      event.target.value = '';
      let newArr = [newItem,...foodItems];
      setFoodItems(newArr);

      
    }
    
    // console.log(event.target.value);
    // setTextToShow(event.target.value);
  }

  return (
    <>
    <Container>
      <div className='w-100'>
        <AppName></AppName>
        <FoodInput handleKeyDown={(event)=> onKeyDown(event)}></FoodInput>
        <ErrorMessages foodItem={foodItems}></ErrorMessages>
        {/* <p>{textToShow}</p> */}
        <FoodItems foodItem={foodItems}></FoodItems>
      </div>
    </Container>
    
    {/* <Container><p>This is a healthy food list.</p></Container> */}
    </>
  )
}

export default App
