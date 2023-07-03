import React from "react";

function Home({langs}) {
    return <div><h1>Home</h1>
    <p>I did this last minute because im a procrastinator so its not going to be pretty</p>
    <p>Maybe ill come back to it one day and make a better version</p>
    <p>{":)"}</p>

    <h2>Langues Included: </h2>

        {langs.map((l) => {return <h4 key={l.name}>{l.name}</h4>})}

    </div>
}

export default Home;