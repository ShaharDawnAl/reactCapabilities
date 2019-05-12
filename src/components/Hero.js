import React from 'react'

function Hero({heroName}) {
    /*
    //to throw an Error
    if(heroName === 'Joker'){
        throw new Error('Not a hero');
    }
    */
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
