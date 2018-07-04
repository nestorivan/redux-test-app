import React from 'react'
import Hero from './hero';

const HeroesList = ({heroesList}) => {
    return (
        <div>
            {heroesList.map(hero => <Hero key={hero.id} hero={hero}/>)}
        </div>
    )
}

export default HeroesList;