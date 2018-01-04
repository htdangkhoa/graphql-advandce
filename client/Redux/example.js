var redux = require('redux')

const defaultState = {
    mang: ['android', 'ios'],
    isAdding: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1;
        case 'TOGGLE': return {...state, isAdding: !state.isAdding}
        default: return state
    }
}

const store = redux.createStore(reducer)

export default store