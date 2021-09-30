import axios from 'axios'
import React, { useState } from 'react'

export default function Home() {

    const [apidata,setApiData]=useState([])

    axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    },[])
    return (
        <div>
            HOME PAGE
        </div>
    )
}
