import DataSource from "./dataSource";
import React from "react";
export default function withSubscription(WrappedComponent, selectData) {
    return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props),
      };
    }

    static logHello = WrappedComponent.logHello;

    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props),
      });
    }

    render() {
      const { extraProp, injectedProp } = this.props;
      return <WrappedComponent data={this.state.data} header={injectedProp}/>;
    }
  };
}
