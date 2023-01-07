import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    const loadUsers = async()=>{
      const response = await axios.get('https://reqres.in/api/users')
      //console.log(response.data)
      setUsers(response.data.data)
    }
    loadUsers()
  }, [])
  const onChangeHandler = (text) => {
   setText(text)
  }
  return (
    <div className="container">
      <div>{text}</div>
      <input type="text" className='col-md-12 input' style={{marginTop:10}}
        onChange={e=>onChangeHandler(e.target.value)}
        value={text}
      />
    </div>
  );
}

export default App;
