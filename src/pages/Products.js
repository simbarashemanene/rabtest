import React, { useEffect, useState } from 'react'
import './product.css'
import axios from 'axios'

const Products = () => {
  const [data, setData] = useState([])
  const [name,setName] =useState('')
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')

  useEffect(()=> {
    axios.get('http://localhost:8081/products')
    .then(res => setData(res.data))
    .catch(er => console.log(er));
  },[])

const handleSubmit= async (event) =>{
event.preventDefault();
await axios.post('http://localhost:8081/products',
{
  name: name,
  email: email,
  password: password
})
.then(res => console.log(res))
.catch(err => console.log(err))

}
  return (
    <div className='container'>
        <div className='form-div'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Name'  onChange={e=> setName(e.target.value)} 
 />
                <input type='email' placeholder='Enter Email' onChange={e=> setEmail(e.target.value)}  />
                <input type='password' placeholder='Enter Password' onChange={e=> setPassword(e.target.value)} />
                <button>Add</button>
            </form>
        </div>
      
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
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
        </table> 
       
      
    </div>
    
  )
}


export default Products
