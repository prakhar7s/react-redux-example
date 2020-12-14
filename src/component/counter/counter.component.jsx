import React from "react";

import { connect } from "react-redux";

import {
  incrementCounter,
  decrementCounter,
} from "../../redux/counter/counter.actions";

import "./counter.styles.scss";

const Counter = ({ number, incrementCounter, decrementCounter }) => (
  <div className="counter">
    <button onClick={() => decrementCounter(number)}>-</button>
    <span>{number}</span>
    <button onClick={() => incrementCounter(number)}>+</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
  };
};

const mapDisptachToProps = (dispatch) => ({
  incrementCounter: (number) => dispatch(incrementCounter(number)),
  decrementCounter: (number) => dispatch(decrementCounter(number)),
});

export default connect(mapStateToProps, mapDisptachToProps)(Counter);
