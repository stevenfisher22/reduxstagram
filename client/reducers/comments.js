function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            // Return existing state plus new comment
            return [...state,{
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            // Return new state without the deleted comment
            console.log('removing a comment')
            return [
                // From the start to the one we want to delete
                ...state.slice(0, action.i),
                // After the deleted one, to the end
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
    return state;
};

function comments(state = [], action) {
    if(typeof action.postid !== undefined) {
        return {
            // Take the current state
            ...state,
            // Overwrite the new state
            [action.postid]: postComments(state[action.postid], action)
        }
    }
    return state
};

export default comments