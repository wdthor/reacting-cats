import { ChangeEvent, Component } from "react";
import { Cat } from "../cats";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

interface IState {
  cats: Cat[];
  searchfield: string;
}

type TProps = unknown;

class App extends Component<TProps, IState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      cats: [],
      searchfield: "",
    };
  }

  async componentDidMount() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response: Response) => response.json())
      .then((users: Cat[]) => {
        this.setState({ cats: users });
      });
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredCats = this.state.cats.filter((cat) =>
      cat.username.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    if (this.state.cats.length === 0) return <h1>Loading</h1>;
    return (
      <>
        <h1>Reacting cats</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList cats={filteredCats} />
        </Scroll>
      </>
    );
  }
}

export default App;
