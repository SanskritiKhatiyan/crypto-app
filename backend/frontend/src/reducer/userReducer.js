
const intialState={
    user: ""
  }

  function UserName(){
    return {
        type:"User_Name",
        payload:"logged in name"
    }
  }

const Reducer =(state=intialState,action)=>{
    switch(action.type){
        case "User_Name":return{
            // ...state,
            user: data.name
        }
  
        default: return state;
    }
  }