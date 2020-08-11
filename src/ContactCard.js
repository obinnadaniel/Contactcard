import React from 'react';
 
function ContactCard(props) {
    return(
        <div className="contact-card">
            <img src={props.imgUrl} />
            <p>{props.name}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    );
}
export default ContactCard;