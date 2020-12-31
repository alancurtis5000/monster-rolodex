import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster, i) => (
        <Card key={i} monster={monster}></Card>
      ))}
    </div>
  );
};
