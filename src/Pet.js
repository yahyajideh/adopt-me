import { Link } from "react-router-dom";

// const Pet = ({ name, animal, breed }) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, name),
//     React.createElement("h3", {}, animal),
//     React.createElement("h3", {}, breed),
//   ]);
// };
const Pet = ({ name, animal, breed, image, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (image.length) {
    hero = image[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h3>{`${animal} - ${breed} - ${location}`}</h3>
      </div>
    </Link>
  );
};

export default Pet;
