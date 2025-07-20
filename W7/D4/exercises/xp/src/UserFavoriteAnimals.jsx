import { Component } from "react";

class UserFavoriteAnimals extends Component {
    render() {
        return (
            <ul>
                {this.props.favAnimals.map((favAnimal, i) => (
                    <li key={i}>{favAnimal}</li>
                ))}
            </ul>
        );
    }
}

export default UserFavoriteAnimals;