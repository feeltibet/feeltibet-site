import React from 'react';

export const Cards = (props) => {
    return (
        <div style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            {props.children}
        </div>
    )
}