// Increment Likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
};

// Add Comment
export function addComment(postid, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postid, 
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