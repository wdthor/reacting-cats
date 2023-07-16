import { ChangeEvent, Component } from "react";
import { Cat, cats } from "../cats";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

interface IState {
  cats: Cat[];
  searchfield: string;
}

type TProps = unknown;

class App extends Component<TProps, IState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      cats: cats,
      searchfield: "",
    };
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredCats = this.state.cats.filter((cat) =>
      cat.username.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    return (
      <>
        <h1>Reacting cats</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList cats={filteredCats} />
      </>
    );
  }
}

export default App;
