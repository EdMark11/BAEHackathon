import React, {useState} from "react";



function App() {

  const [carbon, setCarbon] = useState('test')
  const [user, setUser ] = useState("")

async function fetchData() {
  const response = await fetch(
    `https://api.carbonintensity.org.uk/regional/postcode/${user}?auth-token=X9N1x3zDUYCdCEMCy6OKgE58nS3P3IBs`
  );
  let data = await response.json();


if(data === undefined) {
  setCarbon("Null")
 
} else {
  setCarbon(data)
}
}

const info = carbon?.data?.[0]?.data?.[0]?.generationmix.map((index) => {
  return (
      <>
          <h3>{index.fuel}</h3>
          <p>{index.perc}</p>
        
      </>
  );
});

async function handleSearch(event) {
  setUser(event)
}



  return (
    <div>
      <h1 className="text-center text-3xl">MyIntensity </h1>
   {/* <div>{testResponse}</div> */}
   {info}
     <button onClick={()=>{fetchData()}}>Fetch</button>

<input 
placeholder="Search"
onChange={(event)=>handleSearch(event.target.value)}></input>
     <button onClick={()=>{console.log(carbon)}}>Console Log</button>
     <div>


     </div>
    </div>
  );
}

export default App;
