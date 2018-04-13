import {connect} from 'react-redux';
import Comment from '../components/Comment';
import {thumbUpComment} from './index'

const mapDispatchToProps = dispatch => ({
    thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);