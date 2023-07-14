import Card from "../components/Card";
import { Cat } from "../cats";

const CardList = ({ cats }: { cats: Cat[] }) => {
  const CardComponents = cats.map((cat, i) => {
    return <Card key={cat.id} cat={cats[i]} />;
  });
  return <div className="card-list">{CardComponents}</div>;
};

export default CardList;
