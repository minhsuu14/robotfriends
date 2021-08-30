import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardindex = (value,i) => {
        return <Card key={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email} />
    };
    const cardArr = robots.map(cardindex);
    return (
        <div>
            {cardArr}    
        </div>
    );
};
export default CardList;