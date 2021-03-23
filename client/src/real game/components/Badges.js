import React from 'react';
import Badge from '../../styles/Badge';

const Badges = ({list, onClick}) => {
    return ( 
        <>
{list.map((listItem, index, className) => 
            <Badge 
                continent={listItem}
                key={listItem}
                id= {index}
                name={listItem}
                onClick={onClick}
                className={className}
            >
                {listItem} 
            </Badge>)}
        </>
     );
}
 
export default Badges;