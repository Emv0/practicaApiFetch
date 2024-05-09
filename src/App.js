import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [data,setData] = useState(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response)=>Response.json())
    .then((data)=>setData(data));
  }, []);  

  return (
    <div className='app'>
      <h1>Fetch a una API Json</h1>
      <div className="card"></div>
      <ul>
        {data?.map((user)=>(<li key={user.id}>{user.name}</li>))}
      </ul>
    </div>
  );
}

export default App;
