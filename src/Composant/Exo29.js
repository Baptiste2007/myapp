import React, { useState } from 'react';

function Connexion() {

    const login = "bat";
    const password = "1234";

    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");

    const connexion = () => {

        setMessage("Le login : " + login);
        setMessage2("le password :" + password);
    }

    let Connexion2 = new Object();
    Connexion2.logins = "bat2";
    Connexion2.pwd = "8888";

    const [message3, setMessage3] = useState("");
    const [message4, setMessage4] = useState("");


    const connexion2 = () => {

        setMessage("Le login : " + Connexion2.logins);
        setMessage2("le password :" + Connexion2.pwd);
    }


    return (

        <div>

            <h1>Partie 1 : </h1>

            <button onClick={connexion}> Connexion
            </button>

            <p>{message}</p>
            <p>{message2}</p>

            <h1>Partie 2 : </h1>

            <button onClick={connexion2}>
                Connexion2
            </button>

            <p>{message3}</p>
            <p>{message4}</p>


        </div>



    )
}

export default Connexion;