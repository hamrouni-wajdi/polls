import MyCard from "../card/Card";
import CardListStyles from "./CardList.module.css"
const arr = [1,2,3,4,5,6]

function CardList(){
    return (
        <div className={CardListStyles.cardListContainer}>
        {arr.map(function(card, key){
            return <MyCard key ={key}/>
        })}
        
        </div>
    )

}

export default CardList