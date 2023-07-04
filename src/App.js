import React, {useState} from "react";



function App() {

  const [testResponse, setTestResponse] = useState('test')

async function fetchStuff() {
  const response = await fetch(
    "https://api.carbonintensity.org.uk/regional/postcode/B30?auth-token=X9N1x3zDUYCdCEMCy6OKgE58nS3P3IBs"
  );
  let data = await response.json();


if(data === undefined) {
  setTestResponse("Null")
 
} else {
  setTestResponse(data)
}
}



  return (
    <div>
      <h1 className="text-center text-3xl">MyIntensity </h1>
   {/* <div>{testResponse}</div> */}
     <button onClick={()=>{fetchStuff()}}>Fetch B30</button>
     <button onClick={()=>{console.log(testResponse)}}>Console Log</button>
     <div></div>
    </div>
  );
}

export default App;
