
var initialVal = {
    name:"Kondal"
}

const basicReducer = (storeData=initialVal,action)=>{

    if(action.type==="name"){
        return{
            name:action.username
        }
    }

    return storeData;
}

export default basicReducer