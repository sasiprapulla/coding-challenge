import React from 'react';

const FormView = props => {
    const {
        firstName,
        lastName,
        age,
        gender
    } = props.formFields;
    return (
        <div>
            <div className='field-row'>
                <span className='field-text'>First Name:</span>
                <span>{firstName}</span>
            </div>
            <div className='field-row'>
                <span className='field-text'>Last Name:</span>
                <span>{lastName}</span>
            </div>
            <div className='field-row'>
                <span className='field-text'>Age:</span>
                <span>{age}</span>
            </div>
            <div className='field-row'>
                <span className='field-text'>Gender:</span>
                <span>{gender}</span>
            </div>
        </div>
    );
};

export default FormView;