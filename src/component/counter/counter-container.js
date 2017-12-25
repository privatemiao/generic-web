import {connect} from "react-redux";
import {Counter} from "./counter";
import {decrement, increment, incrementAsync} from "../../reducer/counter.reducer";

const CounterContainer = connect(
    (state) => ({num: state.counter.num}),
    {increment, decrement, incrementAsync}
)(Counter);

export default CounterContainer;