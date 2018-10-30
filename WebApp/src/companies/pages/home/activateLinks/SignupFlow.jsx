import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import LoadingComponent from '../../../../shared/layout/LoadingComponent';

const mapState = (state) => ({
  user: state.firebase.profile,
})

class SignupFlow extends Component {

  render() {
    const { user } = this.props;
    if (!isLoaded(user) || isEmpty(user)) return <LoadingComponent inverted={true} />
    return (
      <div className="dash-signupflow">
        { user.stage1
          ? <div className="dash-signupflow--link dash-signupflow--link-complete">
                <span className="dash-signupflow--checkbox dash-signupflow--checkbox-complete">1</span>
                <span className="dash-signupflow--text dash-signupflow--text-complete">Sign up to use Industry14 &rarr;</span>
            </div>
          : <div className="dash-signupflow--link">
                <span className="dash-signupflow--checkbox">1</span>
                <span className="dash-signupflow--text">Sign up to use Industry14 &rarr;</span>
            </div>
        }
        { user.stage2
          ? <div className="dash-signupflow--link dash-signupflow--link-complete">
              <Link to="/company/profile">
                <span className="dash-signupflow--checkbox dash-signupflow--checkbox-complete">2</span>
                <span className="dash-signupflow--text dash-signupflow--text-complete">Complete your company profile &rarr;</span>
              </Link>
            </div>
          : <div className="dash-signupflow--link">
              <Link to="/company/profile">
                <span className="dash-signupflow--checkbox">2</span>
                <span className="dash-signupflow--text">Complete your company profile &rarr;</span>
              </Link>
            </div>
        }
        { user.stage3
          ? <div className="dash-signupflow--link dash-signupflow--link-complete">
              <Link to="/company/activate" >
                <span className="dash-signupflow--checkbox dash-signupflow--checkbox-complete">3</span>
                <span className="dash-signupflow--text dash-signupflow--text-complete">Activate your company &rarr;</span>
              </Link>
            </div>
          : <div className="dash-signupflow--link">
              <Link to="/company/activate" >
                <span className="dash-signupflow--checkbox">3</span>
                <span className="dash-signupflow--text">Activate your company &rarr;</span>
              </Link>
            </div>
        }
        { user.approved
          ? <div className="dash-signupflow--link dash-signupflow--link-complete">
              <span className="dash-signupflow--checkbox dash-signupflow--checkbox-complete">4</span>
              <span className="dash-signupflow--text dash-signupflow--text-complete">Wait for approval from Industry14 &rarr;</span>
            </div>
          : <div className="dash-signupflow--link">
              <span className="dash-signupflow--checkbox">4</span>
              <span className="dash-signupflow--text">Wait for approval from Industry14 &rarr;</span>
            </div>
        }
      </div>
    )
  }
}

export default withFirebase((connect(mapState, null)(SignupFlow)));
