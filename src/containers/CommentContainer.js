import {connect} from 'react-redux';
import Comment from '../components/Comment';
import {
    thumbUpComment,
    thumbDownComment,
    editComment,
    addComment,
    removeComment
} from '../actions/actions.js';

const mapDispatchToProps = dispatch => ({
    thumbUpComment: (id) => dispatch(thumbUpComment(id)),
    thumbDownComment: (id) => dispatch(thumbDownComment(id)),
    editComment: (text, id) => dispatch(editComment(text, id)),
    addComment: (text) => dispatch(addComment(text)),
    removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);