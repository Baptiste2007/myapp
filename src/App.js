
import React, { useState } from 'react';
import './App.css';

function App() {

  const [identifiant, setIdentifiant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [message, setMessage] = useState("");

  function connexion() {

    if (identifiant === "Bat" && motDePasse === "1234") {
      setMessage("Connexion réussie !");
    } else {
      setMessage("Identifiant ou mot de passe incorrect");
    }

  }

  return (
    <div className="container">

      <h1>Connexion</h1>

      <input
        type="text"
        placeholder="Identifiant"
        value={identifiant}
        onChange={(e) => setIdentifiant(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={motDePasse}
        onChange={(e) => setMotDePasse(e.target.value)}
      />

      <button onClick={connexion}>
        Se connecter
      </button>

      <p>{message}</p>

    </div>
  );
}

export default App;
