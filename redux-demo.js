const redux = require('redux');

const counterReducer = (state={counter:0},action) =>{
    if(action.type === 'increment'){

        return{
            counter : state.counter + 2
        }
    }
    if(action.type === 'decrement'){
        return{
            counter : state.counter - 1
        }
    }
}
const store = redux.createStore(counterReducer);
// console.log(store.getState());
const counterSubscriber=()=>{
    const localState = store.getState();
    console.log(localState);
}
store.subscribe(counterSubscriber);
store.dispatch({type:'increment'});
store.dispatch({type : 'decrement'});