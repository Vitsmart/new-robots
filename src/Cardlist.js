import React from 'react';
import Card1 from './Card1';

const  Cardlist = ({ robots1 }) => {
    //I added "const" to the variable Card1component, you can check your file for changes, i also changed robots1[i] to user, it doesn't actually make a difference, just for readability... P.S :Good work by the way, more grace
 const Card1component = robots1.map((user, i) => {
    return (
         <Card1 
         key={i}
    id={user.id} 
    name={user.name} 
    email={user.email}/>
      );
    })

    return (
        <div>
            {Card1component}
        </div>
    )
    };
export default Cardlist;