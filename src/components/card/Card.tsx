import { Card } from "flowbite-react";
import "../../assets/01.jpg";
import CardButtons from "../cardButtons/CardButtons";
import PropTypes from 'prop-types'

 export type cardprops = {
    title:string,
    description:string,
    key?:number,
    imgLink?:string 
    rating?:number
}
const url = "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

function MyCard({title,description,imgLink}:cardprops) {
  return (
    <div className="max-w-sm" style={{ marginTop: "20px" }}>
      <Card imgSrc={imgLink}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <CardButtons/>

      </Card>

    </div>
  );
}

export default MyCard;
