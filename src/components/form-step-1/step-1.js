import React from 'react';

const FormStep1 = props => {
    return (
        <div>
            <label className='field-row'>
                <span className='field-text'>First Name:</span>
                <input type="text" onChange={value => props.onChange('firstName', value)} />
            </label>
            <label className='field-row'>
                <span className='field-text'>Last Name:</span>
                <input type="text" onChange={value => props.onChange('lastName', value)} />
            </label>
        </div>
    );
};

export default FormStep1;