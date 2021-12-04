import React from "react";

import CardList from "./components/CardList/CardList.jsx";
import "./App.css";
import Search from "./components/Search/Search.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchString: "",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleOnChange = (e) => {
    const searchText = e.target.value;
    this.setState({ searchString: searchText });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchString)
    );

    return (
      <div className="App">
        <h1>Monstars</h1>
        <Search
          searchString={this.state.searchString}
          handleOnChange={this.handleOnChange}
          placeholder={"Search monsters"}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
