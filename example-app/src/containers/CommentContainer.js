import {connect} from 'react-redux';
import Comment from '../components/Comment';
import {thumbUpComment} from '../actions/actions.js';

const mapDispatchToProps = dispatch => ({
    thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);