import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

function App() {
    const [data, setData]= useState([])
    useEffect(()=>{
      fetch('http://localhost:8081/login')
      .then(res => res.json())
      .then((data) =>setData(data))
      .catch((err) => console.log(err));
    }, [])
  return (
    <div style={{padding:"50px"}}>
      <table>
        <thead>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>password</th>
        </thead>
        <tbody>
            {data.map((d, i) =>(
                <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.password}</td>
                </tr>
            ))}
        </tbody>
        </table> 
    </div>
  )
}

export default App