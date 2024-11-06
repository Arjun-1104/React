import style from '../styles/FoodInput.module.css';


let FoodInput = ({handleKeyDown}) => {
    // const foodOnChange = (event) => {
    //     console.log(event.target.value);
    // }

    return <input type="text" className={`${style.foodInput}`} placeholder='Enter any food ?' onKeyDown={handleKeyDown}/>
}

export default FoodInput;