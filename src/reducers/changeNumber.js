const initState = 0;

const changeNumber = (state=initState,action) => { 
        switch (action.type) {
            case 'INCREMENT': return state=state+action.payload;
            case 'DECREMENT':return state-1;
            default: return state;
        }
   
}

export default changeNumber;