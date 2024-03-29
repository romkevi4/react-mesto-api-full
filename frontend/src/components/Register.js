import React, { useState } from 'react';

import AuthForm from './AuthForm';


export default function Register({ handleRegister, children }) {
    const [ formParams, setFormParams ] = useState({
        password: '',
        email: ''
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormParams((previous) => ({
            ...previous,
            [name]: value
        }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleRegister(formParams);
    }


    return (
        <>
            <AuthForm
                formTitle="Регистрация"
                formBtnText="Зарегистрироваться"
                formParams={formParams}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {children}
        </>
    );
}