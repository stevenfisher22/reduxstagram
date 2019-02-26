// Increment Likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
};

// Add Comment
export function addCommment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId, 
        author, 
        comment
    }
}

// Remove Comment
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i, 
        postId
    }
}