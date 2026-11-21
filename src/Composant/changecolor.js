
import React, { useState } from 'react';

const FunctionalComponent = ({ couleur }) => {

    const [color, setcolor] = useState(couleur);

    const changeColor = () => {

        const couleurAleatoire = '#' + Math.floor(Math.random() * 16777215).toString(16);

        setcolor(couleurAleatoire);

    };

    return (
        <div>

            <div
                style={{ color: color }}
                onMouseEnter={changeColor}
            >
                Je suis un composant
            </div>

        </div>
    );
};

export default FunctionalComponent;
