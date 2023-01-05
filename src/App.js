import { useCallback, useContext, useEffect } from "react";
import "./App.css"

function App() {
  let items = [];
  let isLoaded = false;

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.setAttribute("data-bs-theme", "dark");
    document.getElementById("rm").addEventListener("click", () => {
      fetch(new URL("https://www.boredapi.com/api/activity"))
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
        <h2>Hi, Im an AI That helps you remove Boredom!</h2>
        <br></br>
        <br></br>
        <button id="rm" className='btn btn-info'>Remove bordoom</button>
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
