import React from 'react';
import Card1 from './Card1';

const  Cardlist = ({ robots1 }) => {
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