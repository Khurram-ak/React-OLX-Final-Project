


export default function reducer(state={},action){
    
    console.log("In reducer",action.data);
    switch(action.type){
        case "ADDUSER":{
            return  {...state,userData:action.data}
        }
    case "REMOVEUSER":{
        return {...state,userData:null}
    }
    
    default:
        return state
    }

}


