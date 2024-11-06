import style from '../styles/FoodInput.module.css';


let FoodInput = ({foodOnChange}) => {
    // const foodOnChange = (event) => {
    //     console.log(event.target.value);
    // }

    return <input type="text" className={`${style.foodInput}`} placeholder='Enter any food ?' onChange={foodOnChange}/>
}

export default FoodInput;