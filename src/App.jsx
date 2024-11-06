import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './component/AppName';
import FoodItems from './component/FoodItems';
import ErrorMessages from './component/ErrorMessages';
import Container from './component/Container';
import FoodInput from './component/FoodInput';
import './App.css';


function App() {
  let foodItems = ['Dal','Rice','Salad','Milk','Roti'];
  // let foodItems = [];
  return (
    <>
    <Container>
      <div className='w-100'>
        <AppName></AppName>
        <ErrorMessages foodItem={foodItems}></ErrorMessages>
        <FoodInput foodOnChange={(event)=>{console.log(event.target.value)}}></FoodInput>
        <FoodItems foodItem={foodItems}></FoodItems>
      </div>
    </Container>
    
    <Container><p>This is a healthy food list.</p></Container>
    </>
  )
}

export default App
