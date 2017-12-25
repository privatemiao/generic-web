const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initState = {
    num: 0
};

export const Calculator = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                num: state.num + 1
            };
        case DECREMENT:
            return {
                ...state,
                num: state.num - 1
            };
        default:
            return state;
    }
};

export const increment = () => {
    return {type: INCREMENT};
};

export const decrement = () => {
    return {type: DECREMENT};
};

export const incrementAsync = () => {
    return dispatch => {
        setTimeout(() => {
            return dispatch(increment());
        }, 2000);
    }
};
