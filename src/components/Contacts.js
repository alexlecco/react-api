import React, { Fragment } from 'react'

const Contacts = ({ contacts }) => {
    return (
        <Fragment>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-muted">{contact.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                        <p class="card-text text-muted">{contact.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </Fragment>
    )
};

export default Contacts