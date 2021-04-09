import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      console.log("error" ,error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error catch: " ,error, "errorInfo:" ,errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;