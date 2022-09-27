import { Button } from "flowbite-react";
import styles from './CardButtons.module.css'


function CardButtons() {
  return (
    <div className={styles.container}>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
        Up Vote
      </button>{" "}
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
        Down Vote
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Try Location
      </button>
    </div>
  );
}

export default CardButtons;
