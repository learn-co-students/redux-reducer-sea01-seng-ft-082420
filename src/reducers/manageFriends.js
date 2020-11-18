export function manageFriends(state={friends: []}, action){
    switch(action.type) {
        case 'REMOVE_FRIEND':
            return {...state.friends.filter(friend => friend.id !== action.id)}
        case 'ADD_FRIEND':
            return {...state.friends.push(action.friend)}
        default:
            return state
    }
}
