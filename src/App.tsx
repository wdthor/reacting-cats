import { ChangeEvent, Component } from "react";
import { Cat } from "./cats";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";

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
    const { cats, searchfield } = this.state;

    const filteredCats = cats.filter((cat) =>
      cat.username.toLowerCase().includes(searchfield.toLowerCase())
    );

    if (!cats.length) return <h1>Loading</h1>;

    return (
      <>
        <h1>Reacting cats</h1>
        <ErrorBoundary>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList cats={filteredCats} />
          </Scroll>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
