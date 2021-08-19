const initialState={
    result:{}
}
const simpleReducer = (state=initialState,action) =>{
    switch(action.type){
        case'FETCH_DATA':
            return{...state,
                result:action.payload
            }
            default:
                return state
    }
}

export default simpleReducer
//basically reducers will describe the state changes with respect to 
//actions dispatched