import store from '../store'
import axios from 'axios'
export const tennis=()=>{
    return{
    type:'Tennis'}
}
export const football=()=>{
    return{

    type:'Football'
}
}
export const others=()=>{
    return{
    type:'Others'
}
}
export const selectRegion=(value)=>{
    return{
        type:'SelectRegion',
        data:value
    }
}
export const selectSport=(value)=>{
    return{
        

    type:'SelectSport',
    data:value
}
}
export const prematch=()=>{
    return{

    type:'Prematch'
}
}
export const inPlay=()=>{
    return{

    type:'InPlay'
}
}
export const nextPage=()=>{
    return{

    type:'NextPage'
}
}
export const fetch_post = () => {
  return {
    type: "FETCH_USER"
  };
};
export const receive_post = post => {
    return {
      type: "FETCHED_USER",
      data: post
    };
  };
  export const receive_post2 = post => {
    return {
      type: "FETCHED_USER2",
      data: post
    };
  };
  export const receive_post3 = post => {
    return {
      type: "FETCHED_USER3",
      data: post
    };
  };
  export const receive_post4 = post => {
    return {
      type: "FETCHED_USER4",
      data: post
    };
  };
  export const edit = post => {
    return {
      type: "Edit",
      data: post
    };
  };
  export const save = () => {
    return {
      type: "Save"
    };
  };
  export const cancel = () => {
    return {
      type: "Cancel"
    };
  };
  export const search = (post) => {
    return {
      type: "Search",
      data:post
    };
  };
export const thunk_action_creator=()=>{
    //const user=username.replace(/\s/g,"");
    //store.dispatch(fetch_post());
    return function(dispatch,getState){
        
        return  fetch(`http://localhost:3000/mappings/`).then(data=>data.json()).then(data=>{
            
            dispatch(receive_post(data));
        })
    }
}
// export const thunk_action_creator=username=>{
//   const user=username.replace(/\s/g,"");
//   store.dispatch(fetch_post());
//   return function(dispatch,getState){
//       return    fetch(`https://api.github.com/users/${user}`).then(data=>data.json()).then(data=>{
//           if(data.message==="Not found"){
//               throw new Error("No succh user found!")
//                       }
//           else
//           dispatch(receive_post(data));
//       }).catch(err=>dispatch(receive_error()))
//   }
// }
export const thunk_action_creator2=()=>{
 
    store.dispatch(fetch_post());
    return function(dispatch,getState){
        
        return   fetch(`http://localhost:3000/coralDigitalUnmapped`).then(data=>data.json()).then(data=>{
            
            dispatch(receive_post2(data));
        })
    }
}
export const thunk_action_creator3=()=>{
 
  store.dispatch(fetch_post());
  return function(dispatch,getState){
      
      return   fetch(`http://localhost:3900/regions`).then(data=>data.json()).then(data=>{
          
          dispatch(receive_post3(data));
      })
  }
}
export const thunk_action_creator4=()=>{
 
  store.dispatch(fetch_post());
  return function(dispatch,getState){
      
      return   fetch(`http://localhost:3600/sports`).then(data=>data.json()).then(data=>{
          
          dispatch(receive_post4(data));
      })
  }
}
export const selectChange=()=>{
    
            return{
                type:"SelectChange"
            }
            
        
    }

