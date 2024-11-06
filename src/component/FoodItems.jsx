import Item from "./Item";

let FoodItems = ({foodItem}) => {
    // let foodItems = ['Dal','Rice','Salad','Milk','Roti'];
    return <>
        <ul className="list-group">
            {foodItem.map((item)=> (
                <Item key={item} item={item} handleBuyButton={()=> console.log(`${item} bought by me.`)}></Item>
            ))} 
        </ul>
    </>
}

export default FoodItems;