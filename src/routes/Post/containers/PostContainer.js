import { connect } from 'react-redux'
import { actions } from '../modules/post'
import Post from '../components/Post'

const mapDispatchToProps = {
  loadPost: actions.loadPost
}

const mapStateToProps = (state) => ({
  post: state.post
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
