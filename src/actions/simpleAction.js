import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com/users';

export const simpleAction=(data)=>{
  return async dispatch=>{
    
      await axios({
        method: 'GET',
        url:ROOT_URL,
      }).then(res=>{
        // console.log(res.data)
        dispatch({
          type:'FETCH_DATA',
          payload:res.data
        })

      });
    
  }

  
}


//dispatch is for changing state via actions!!!
//type : What type of action?
//Payload: actual info to store