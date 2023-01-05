import { Helmet } from "react-helmet";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React, { useState } from 'react';
import { domain_signup } from '../API/env.js';

//signup schema
const signupSchema = yup.object().shape({
    firstname: yup
        .string()
        .min(2, "kein Vorname")
        .max(20, "kein Vorname")
        .matches(/[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|0-9|=.,]{1,20}$/, "Ungültiger Vorname")
        .required("Erforderlich"),
    surname: yup
        .string()
        .min(2, "kein Nachname")
        .matches(/[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|0-9|=.,]{1,20}$/, "Ungültiger Nachname")
        .required("Erforderlich"),
    email: yup
        .string()
        .email("Ungültige Email Adresse")
        .required("Erforderlich"),
    mobile: yup
        .string()
        .min(10, "keine Telefonnummer")
        .max(15, "keine Telefonnummer")
        .matches(/(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/, "Ungültige Telefonnummer"),
}).required();

export const Signup = () => {
    const [responseStatus, setResponseStatus] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchema),
    });

    const submitForm = (user) => {
        let formData = new FormData();
        Object.keys(user).forEach(key => {
            formData.append(key, user[key]);
        });

        fetch(domain_signup, {method: 'POST', body: formData})
            .then((response) => {
                if(!response.ok) {
                    setResponseStatus(response.status);
                }
                //Weiterleitung auf Verifizierungsseite nach Server Validierung
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    }

    return (
        <div>
            <Helmet>
                <title>SOSA - Registrierung</title>
                <meta name="signup" content="SOSA registrieren" />
            </Helmet>
            <main className="h-screen w-screen bg-slate-200 place-center">
                <h1 className="text-4xl font-extrabold">Registrierung</h1>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="mb-6">
                        <label 
                            htmlFor="firstname"
                            className="block mb-2 text-sm font-medium"
                        >Vorname</label>
                        <input
                            id ="firstname"
                            name="firstname"
                            type="text"
                            className=""
                            {...register("firstname")}
                        />
                        {errors.firstname && <span className="text-red-500">{errors.firstname.message}</span>}
                    </div>
                    <div className="mb-6">
                        <label 
                            htmlFor="surname"
                            className="block mb-2 text-sm font-medium"
                        >Nachname</label>
                        <input 
                            id="surname"
                            name="surname"
                            type="text" 
                            className=""
                            {...register("surname")}
                        />
                        {errors.surname && <span className="text-red-500">{errors.surname.message}</span>}
                    </div>
                    <div className="mb-6">
                        <label 
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium"
                        >Email</label>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            className="" 
                            {...register("email")}
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="mobile"
                            className="block mb-2 text-sm font-medium"
                        >Mobiltelefon</label>
                        <input
                            id="mobile"
                            name="mobile"
                            type="text"
                            className=""
                            {...register("mobile")}
                        />
                        {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}
                    </div>

                    <button 
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Registrieren</button>                
                </form>
                {responseStatus !== null ? <p>Fehler: {responseStatus}</p> : null}
            </main>
        </div>
    )
}