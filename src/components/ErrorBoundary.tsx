import { Component, ErrorInfo } from "react";

interface IState {
  hasError: boolean;
}

type TProps = {
  children: React.ReactNode;
};

class ErrorBoundary extends Component<TProps, IState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. Cats went missing</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
