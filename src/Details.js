import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    pet.animal(this.props.id).then(
      ({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          brred: animal.breeds.primary,
          loading: false,
        });
      },
      (err) => console.error(err)
    );
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { animal, name, description, breed, location } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
