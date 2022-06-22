import React from 'react';
import Card1 from './Card1';

const  Cardlist = ({ robots1 }) => {
 const Card1component = robots1.map((user, i) => {
    return (
         <Card1 
    id={robots1[i].id} 
    name={robots1[i].name} 
    email={robots1[i].email}/>
      );
    })

    return (
        <div>
            {Card1component}
        </div>
    )
    };
export default Cardlist;