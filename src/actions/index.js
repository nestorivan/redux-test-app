//Actions

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';
export const RECEIVE_HEROES = 'RECEIVE_HEROES';

export const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
export const REQUEST_TEAMS = 'REQUEST_TEAMS';
export const REQUEST_HEROES = 'REQUEST_HEROES';

export const REJECT_PLAYERS = 'REJECT_PLAYERS';
export const REJECT_TEAMS = 'REJECT_TEAMS';
export const REJECT_HEROES = 'REJECT_HEROES';

// Action Creators

/***
 * get HeroesStats
 * get Players
 * get Teams
 *
 */

export const requestHeroes = () => ({type: REQUEST_HEROES})

export const receiveHeroes = heroes => ({type: RECEIVE_HEROES, heroes})

export const rejectHeroes = () => ({type: REJECT_HEROES})

export const fetchHeroes = heroId => dispatch => {
    dispatch(requestHeroes)
    return fetch(`https://api.opendota.com/api/heroStats`)
        .then(heroes => heroes.json())
        .then(json => dispatch(receiveHeroes(json)))
}


export const shouldFetchHeroes = (state) => {
    const heroes = state.heroes;
    const {heroes: heroesList} = heroes;

    if (!heroesList)
        return true
    if (heroes.isFetching)
        return false
    return heroes.didInvalidate
}

export const fetchHeroesIfNeeded = () => (dispatch, getState) => {
    if (shouldFetchHeroes(getState())) {
        return dispatch(fetchHeroes())
    }
}