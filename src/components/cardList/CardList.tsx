import MyCard from "../card/Card";
import CardListStyles from "./CardList.module.css"
import {cardprops} from "../card/Card"

function CardList(cardlist:any){
    return (
        <div className={CardListStyles.cardListContainer}>
        {cardlist.cardlist.map(function(card:cardprops){
            return <MyCard key={card.key} rating={card.rating} title={card.title} description={card.description} imgLink={card.imgLink}/>
        })}
        
        </div>
    )

}

export default CardList