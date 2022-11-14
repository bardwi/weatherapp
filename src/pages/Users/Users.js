import React, {useEffect, useState} from "react";
import axios from "axios";

const Users= ()=> {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=> {
        console.log(res.data)
        setUsers(res.data)
       
      })
    },[])

return (
    <div style ={{marginTop: "5%"}}>
        {users.map((usr,index)=>(
            <div key={index}>
               {usr.address.city}
             
            </div>
        )) }
    </div>
   )
}

export default Users;