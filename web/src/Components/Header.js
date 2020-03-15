import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

import '../styles/header.css'
export default () =>{
    const [search,setSearch] = useState(false)
    return(
    <header className="header">   
        <h1>Quiz</h1>
        <div>
            <button onClick={() =>setSearch(!search)}>
                <FontAwesomeIcon color="white" icon={faSearch}/>
            </button>
            <input type="text" className={`${(search)? "" : "none"}`}/>
        </div>
        <button>+</button>
    </header>
)}