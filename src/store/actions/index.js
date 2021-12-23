
function storeUser(value){
    console.log("action compo",value);
    return{
        type:"ADDUSER",
        data:value
    }

}
function removeUser(){

    return{
        type:"REMOVEUSER",

    }
}
export {
    storeUser,
    removeUser
}



