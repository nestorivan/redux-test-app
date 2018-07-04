import {combineReducers} from 'redux';
import {
    REQUEST_HEROES,
    RECEIVE_HEROES,
    REQUEST_PLAYERS,
    RECEIVE_PLAYERS,
    REQUEST_TEAMS,
    RECEIVE_TEAMS,
    REJECT_HEROES,
    REJECT_TEAMS,
    REJECT_PLAYERS
} from '../actions';

const heroes = (state = {
    isFetching: false,
    didInvalidate: false,
    heroesList: []
}, action) => {
    switch (action.type) {
        case REQUEST_HEROES:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_HEROES:
            return {
                ...state,
                isFetching: false,
                heroesList: action.heroes
            }
        case REJECT_HEROES:
            return {
                ...state,
                isFetching: false,
                didInvalidate: true
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    heroes,
})

export default rootReducer;