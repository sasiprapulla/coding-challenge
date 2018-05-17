import React from 'react';

const FormStep2 = props => {
    return (
        <div>
            <label className='field-row'>
                <span className='field-text'>Age:</span>
                <input type="text" onChange={value => props.onChange('age', value)} />
            </label>
            <div className='field-row'>
                <span className='field-text'>Gender:</span>
                <label>
                    <span>Male</span>
                    <input 
                        name='gender'
                        type="radio"
                        value='Male'
                        onChange={value => props.onChange('gender', value)}
                    />
                </label>
                <label>
                    <span>Female</span>
                    <input
                        name='gender'
                        type="radio"
                        value="Female"
                        onChange={value => props.onChange('gender', value)}
                    />
                </label>
            </div>
        </div>
    );
};

export default FormStep2;