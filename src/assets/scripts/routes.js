import React from 'react';
import { Route } from 'react-router-dom';

import { spring, AnimatedSwitch } from 'react-router-transition';

import Commission from "../../pages/Commission";
import Artworks from "../../pages/Artworks";
import About from "../../pages/About";

function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

export default () => (
    <AnimatedSwitch
        atEnter={{ offset: 3, opacity: 0 }}
        atLeave={{ offset: 3, opacity: 1 }}
        atActive={{ offset: 0, opacity: bounce(1) }}
        mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
            opacity: styles.opacity
        })}
        className="route-wrapper"
    >
        <Route path="/" exact component={Artworks} />
        <Route path="/commission" exact component={Commission} />
        <Route path="/about" exact component={About} />
    </AnimatedSwitch>
);