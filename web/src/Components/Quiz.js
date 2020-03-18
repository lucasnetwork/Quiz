import React from 'react'
import '../styles/quiz.css'
export default ({img,tags,text}) => (
    <article className="quiz">
        <img src={img}/>
        <div className="tags">Tags: {tags.map(tag => `#${tag}`)}</div>
        <p>{text}</p>
        <button>Iniciar o Quiz</button>
    </article>
)