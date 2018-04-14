import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, editComment, addComment}) =>
    <li>
        {text} <span>votes: {votes} </span>
        <button onClick={() => thumbUpComment(id)}>
            Thumb up
        </button>
        <button onClick={() => thumbDownComment(id)}>
            Thumb down
        </button>
        <button onClick={() => {
            var text = prompt('Edit comment');
            editComment(text, id);
        }}>
            Edit
        </button>
        <button onClick={() => {
            var text = prompt('Write new comment');
            addComment(text)
        }}>
            Add comment
        </button>
    </li>;

export default Comment;