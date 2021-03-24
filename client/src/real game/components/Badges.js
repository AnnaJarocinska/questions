import React from 'react';
import Badge from '../../styles/Badge';

const Badges = ({list, onClick, styles, className}) => {
    return ( 
        <>
{list.map((listItem, index) => 

            <Badge 
                continent={listItem}
                key={listItem}
                id= {index}
                name={listItem}
                onClick={onClick}
                className={className}
                // style={styles}
                // style={styles === null ? { backgroundColor: 'pink', color: 'white' }: { backgroundColor: 'black', color: 'white' } }
                // toggle={true}
            >
                {listItem} 
            </Badge>)}
        </>
     );
}
 
export default Badges;