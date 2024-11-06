import style from '../styles/Item.module.css';

let Item = ({item,handleBuyButton}) =>{
    

    // const handleBuyFood = (item) => {
    //     console.log(`${item} buy by me.`);
    // }
    return <>
        <li key={item} className={`list-group-item  ${style['ar-item']}`}>
            {item}
            <button type="button" className={`btn btn-info ${style.button}`} onClick={handleBuyButton}>Buy</button>
        </li>
        
    </>
}

export default Item;