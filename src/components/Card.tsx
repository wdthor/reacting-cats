import { Cat } from "../cats";

const Card = ({ cat: { id, username, email } }: { cat: Cat }) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?size=200x200&set=set4`} alt="cat" />
      <div>
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
