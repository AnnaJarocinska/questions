import React from 'react';
import Badge from '../styles/Badge';

const Badges = ({list, onClick, unclickable}) => {
    return ( 
        <>
{list.map((listItem, index) => 

            <Badge 
                continent= {listItem}
                key= {listItem}
                id= {index}
                name= {listItem}
                onClick= {onClick}
                unclickable ={unclickable}
            >
                {listItem} 
            </Badge>)}
        </>
     );
}
 
export default Badges;