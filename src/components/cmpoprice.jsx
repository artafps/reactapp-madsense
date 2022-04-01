import React from 'react';

const Price1 = (props) => {
    return ( 
        <div>
            <div className="price">
                 تومان / <span className="price3">{`${props.price}`}</span>
            </div>
        </div>
     );
}
 
export default Price1;
