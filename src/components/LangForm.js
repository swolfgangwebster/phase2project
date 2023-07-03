import React, {useState} from "react";

function LangForm({Langs, setLangs, url}) {
const [l, setl] = useState("")
const [f, setf] = useState("")
const [n, setn] = useState("")

function addLang(e) {
    e.preventDefault()

    const newLang = {name: l, family: f, speakers: n}
    setLangs([...Langs, newLang])

    fetch(`${url}/languages`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newLang)
    })
    .then (r => r.json())
    .then (data => console.log(data))

    setl("")
    setf("")
    setn("")

}

    return <div>
        <form onSubmit={(e) => addLang(e)}>
            <label>Language<br/>
                <input type="text" value={l} name="lang" onChange={(e) => setl(e.target.value)}/>
            </label><br/><br/>
            <label>
                Language Family<br/> 
                <input type="text" value={f} name="fam" onChange={(e) => setf(e.target.value)}/>
            </label><br/><br/>
            <label>
                Number of L1 Speakers<br/> 
                <input type="text" value={n} name="speakers" onChange={(e) => setn(e.target.value)}/>
            </label><br/><br/>
            <input type="submit" value="add language" />
        </form>

    </div>
}

export default LangForm;