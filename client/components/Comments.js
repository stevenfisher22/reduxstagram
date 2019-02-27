import React from 'react';

const Comments = React.createClass({
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    },
    handleSubmit(e) {
        e.preventDefault();
        const { postid }= this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postid, author, comment);
    },
    render() {
        return (
            <div className="comment">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" ></input>
                    <input type="text" ref="comment" placeholder="comment" ></input>
                    <input type="submit" hidden ></input>
                </form>
            </div>
        )
    }
})

export default Comments