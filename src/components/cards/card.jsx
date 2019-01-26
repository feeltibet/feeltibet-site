import React from 'react';

export const Card = (props) => {
    return (
        <div class="card" style={{
            minWidth: "20rem",
            maxWidth: "20rem",
            flex: 1,
            margin: 5,
            minHeight: '6em',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10
        }}>
            <img class="card-img-top" src={props.img} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <a data-toggle="modal" style={{color:"white", background:'#f8b600', borderRadius: 0, border: 'none'}} data-target={props.modal} class="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    )
}
