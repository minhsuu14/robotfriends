import React from 'react';

const Searchbox = ({searchchange}) => {
    return( 
        <div className='pa2'>
            <input 
            className='bg-lightest-blue ba pa3' 
            type='search' 
            placeholder='search robots' 
            onChange={searchchange}
            />
        </div>
    )
};

export default Searchbox