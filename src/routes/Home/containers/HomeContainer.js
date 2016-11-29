import { connect } from 'react-redux'
import HomeView from '../components/HomeView'
import { actions } from '../modules/home'

const mapDispatchToProps = {
 loadPosts: actions.loadPosts
}

const mapStateToProps = (state) => ({
  homepage: state.homepage
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
