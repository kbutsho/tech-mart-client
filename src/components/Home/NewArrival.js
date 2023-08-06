import React from 'react';

const NewArrival = (props) => {
    const { code, name } = props.newArrival

    return (
        <div>
            {name}
        </div>
    );
};

export default NewArrival;