import React, {useState} from "react";



function App() {

  const [testResponse, setTestResponse] = useState('test')

async function fetchStuff() {
  const response = await fetch(
    "https://api.carbonintensity.org.uk/regional/postcode/B30?auth-token=X9N1x3zDUYCdCEMCy6OKgE58nS3P3IBs"
  );
  let data = await response.json();
 setTestResponse(data)
 console.log(testResponse)
}



  return (
    <div>
      <h1 className="text-center text-3xl">MyIntensity OIOKOKOK</h1>
   
     <button onClick={()=>{fetchStuff()}}>HELP ME</button>
    </div>
  );
}

export default App;
