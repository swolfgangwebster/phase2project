import React, {useState} from "react";

function Family({langs}) {
    const [sel, ssel] = useState("Indo-European")

    const fams = []

    for (let i = 0; i < langs.length; i++) {
        let lf = langs[i].family;
        if (!(fams.includes(lf))) {
            fams.push(lf)
        }
    }
console.log(sel)

    return <div>
        <select name="family" value={sel} onChange={(e) => ssel(e.target.value)}>
            {
            fams.map((f) => {return <option key={f} value={f}>{f}</option>})
            }
        </select>

        <h1>Languages in that family</h1><br/>
        
            {langs.filter((l) => l.family === sel).map((l) => {return <div key={l.name} ><h3 >{l.name}</h3><p>{l.speakers} million L1 speakers.</p></div>})}
        
    </div>
}

export default Family