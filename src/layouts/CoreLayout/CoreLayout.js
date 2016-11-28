import React from 'react'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import './CoreLayout.scss'
import '../../styles/screen.scss'
import '../../styles/bootstrap.scss'
import '../../styles/clean-blog.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Nav />
    <Header />

    <div className="container">
      {children}
    </div>

    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <ul className="list-inline text-center">
              <li>
                <a href="http://twitter.com/yoeight">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-twitter fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </li>
              <li>
                <a href="http://github.com/YoEight">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-github fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </li>
            </ul>
            <p className="copyright text-muted">Copyright &copy; Yorick Laupa 2016</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
