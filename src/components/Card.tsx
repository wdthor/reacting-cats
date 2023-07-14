import { Robot } from "../robots";

const Card = ({ id, username, email }: Robot) => {
  return (
    <div>
      <img src={`https://robohash.org/${id}?size=200x200&set=set4`} alt="cat" />
      <div>
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
