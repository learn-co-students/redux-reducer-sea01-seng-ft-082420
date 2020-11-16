// let state= {numberOfPresents: 0}

export function managePresents(state = {numberOfPresents: 0}, action){


    // action = {
    //     type: 'INCREASE'
    // }
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1}
        default:
            return state
    }
}
