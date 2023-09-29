import Card from "./components/card";
import { useState, useEffect } from "react";
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchData = async()=>{
      const res = await axios.get('https://reqres.in/api/users?page=2')
      setUsers(res.data.data)
    }
    fetchData()
  }, [])
  
  return (
    <div className="App">
      {users.map((user, i) => (
        <Card>
          <Card.Image src={user.avatar}/>
          <Card.Body>
            <Card.Title>{user.first_name} {user.last_name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Card.Button>Details</Card.Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
