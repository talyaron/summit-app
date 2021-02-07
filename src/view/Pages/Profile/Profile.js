import React, {useEffect , useState} from 'react';
import './Profile.css';
import { DB } from '../../../control/firebase/firebase.js';
import { Link, useHistory } from "react-router-dom";

const profileList = DB.collection("users")
const profilesDB = [];

let Profile = function () {
    const [user, setUser] = useState({displayName:''})
    const history = useHistory();

    useEffect(()=>{
        
        setUser( JSON.parse(sessionStorage.getItem('user')));

    }, [])

      
        function handleClick() {
          sessionStorage.clear();
        }
      
       
  
      
      if(JSON.parse(sessionStorage.getItem('user'))){

     
    return (
        <div className='profile'>
            <h1> החשבון שלי </h1>
        
  

        <div className='Name' key={user.uid}>
            שם: {user.displayName}
         </div>

         <div className='Photo' key={user.uid}>
             <img className='image' src={user.photoURL} alt={"photo of" + user.displayName}/>
         </div>
         
        
         <div><Link to ='/Login'><button className = 'logout' type="button" onClick={handleClick} href = '/Login'>
         התנתק
          </button>
          </Link></div>
                </div>
            
            
        

        
        
    )}else{
        history.push("/login");
    }
    
}

  
    
    
  
    

export default Profile;