import { connect } from "react-redux";

import "./App.css";

import Counter from "./component/counter/counter.component";

function App({ number }) {
  return (
    <div className="app">
      <span className="heading">Counter</span>
      <Counter />
      <h1 className="number">
        ** accessing counter value using redux in different component: {number}{" "}
        **
      </h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

export default connect(mapStateToProps)(App);
