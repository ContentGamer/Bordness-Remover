import { useCallback, useContext, useEffect } from "react";
import "./App.css"

function App() {
  let items = [];
  let isLoaded = false;
  let neededURL = "https://www.boredapi.com/api/activity"
  const data = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];
  const itemsURL = ["ddi-1", "ddi-2", "ddi-3", "ddi-4", "ddi-5", "ddi-6", "ddi-7", "ddi-8", "ddi-9"]
  const setURL = (num) => {
    console.log("Setting Type to "+data[num]);
    if(data[num] == null || data[num] == undefined) {
      neededURL = "https://www.boredapi.com/api/activity";
    }else {
      neededURL = `https://www.boredapi.com/api/activity?type=${data[num]}`;
    }
  };

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.setAttribute("data-bs-theme", "dark");
    for (const item of itemsURL) {
      document.querySelector("."+item).addEventListener("click", () => {
        const index = parseInt(item.replace("ddi-", ""));
        setURL(index-1);
      });
    }
    document.getElementById("rm").addEventListener("click", () => {
      fetch(new URL(neededURL))
      .then(res => res.json())
      .then(json => {
        document.getElementById("resultText_ACTIVITY").innerHTML = `Activity: ${json.activity}`;
        document.getElementById("resultText_TYPE").innerHTML = `Type: ${json.type}`;
        document.getElementById("resultText_PARTICIPANTS").innerHTML = `Participants: ${json.participants}`;
        document.getElementById("resultTex_PRICE").innerHTML = `Price: ${json.price}`;
        if(json.link != "") {
          document.getElementById("resultText_LINK").innerHTML = `Link: ${json.link}`;
          document.getElementById("resultText_ACCESSIBILITY").innerHTML = `Accessibility: ${json.accessibility}`;
        }else {
          document.getElementById("resultText_LINK").innerHTML =  `Accessibility: ${json.accessibility}`;
          document.getElementById("resultText_ACCESSIBILITY").innerHTML = "";
        }
      });
    });
  });

  return (
    <div className="App">
        <br></br>
        <br></br>
        <h2>Hi, Im an AI That helps you remove boredom!</h2>
        <br></br>
        <br></br>
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select Type</button>
          <ul className="dropdown-menu">
          <button value="1" className="dropdown-item ddi-1">Education</button>
          <button value="2" className="dropdown-item ddi-2">Recreational</button>
          <button value="3" className="dropdown-item ddi-3">Social</button>
          <button value="4" className="dropdown-item ddi-4">Diy</button>
          <button value="5" className="dropdown-item ddi-5">Charity</button>
          <button value="6" className="dropdown-item ddi-6">Cooking</button>
          <button value="7" className="dropdown-item ddi-7">Relaxation</button>
          <button value="8" className="dropdown-item ddi-8">Music</button>
          <button value="9" className="dropdown-item ddi-9">Busywork</button>
        </ul>
        <br></br>
        <button id="rm" className='btn btn-info'>Remove boredom</button>
        <br></br>
        <br></br>
        <br></br>
        <h5 id="resultText_ACTIVITY" className='resultText'></h5>
        <h5 id="resultText_TYPE" className='resultText'></h5>
        <h5 id="resultText_PARTICIPANTS" className='resultText'></h5>
        <h5 id="resultTex_PRICE" className='resultText'></h5>
        <h5 id="resultText_LINK" className='resultText'></h5>
        <h5 id="resultText_ACCESSIBILITY" className='resultText'></h5>
    </div>
  );
}

export default App;