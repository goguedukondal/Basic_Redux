import React from 'react'
import myStore from '../Redux/Store'
import {useState} from "react"
import {useSelector} from "react-redux"

function Input() {
    const data = useSelector((storeData)=>{
        return storeData;
    })
    const [state, setState] = useState("")
    const add=()=>{
        myStore.dispatch(
            {
                type:"name",
                username:state
            }
        )
    }

  return (
    <div>
        <h2>User Name :{data.name}</h2>
        <input
        type='text'
        onChange={(e)=>{setState(e.target.value)}}
        />
        <button onClick={()=>{add()}}>Submit</button>
    </div>
  )
}

export default Input