import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import LoadingComponent from '../../../../shared/layout/LoadingComponent';

const mapState = (state) => ({
  user: state.firebase.profile,
  loading: state.async.loading
})

class SignupFlow extends Component {

  render() {
    const { user, loading } = this.props;
    if (loading) return <LoadingComponent inverted={false} />
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
              <Link to="/candidate/profile">
                <span className="dash-signupflow--checkbox dash-signupflow--checkbox-complete">2</span>
                <span className="dash-signupflow--text dash-signupflow--text-complete">Complete your profile &rarr;</span>
              </Link>
            </div>
          : <div className="dash-signupflow--link">
              <Link to="/candidate/profile">
                <span className="dash-signupflow--checkbox">2</span>
                <span className="dash-signupflow--text">Complete your profile &rarr;</span>
              </Link>
            </div>
        }
        { user.stage3
          ? <div className="dash-signupflow--link dash-signupflow--link-complete">
              <Link to="/candidate/quiz-basic" >
                <span className="dash-signupflow--checkbox dash-signupflow--checkbox-complete">3</span>
                <span className="dash-signupflow--text dash-signupflow--text-complete">Complete a basic multiple-choice quiz &rarr;</span>
              </Link>
            </div>
          : <div className="dash-signupflow--link">
              <Link to="/candidate/quiz-basic" >
                <span className="dash-signupflow--checkbox">3</span>
                <span className="dash-signupflow--text">Complete a basic multiple-choice quiz &rarr;</span>
              </Link>
            </div>
        }
        {/*{ user.stage4
          ? <div className="dash-signupflow--link dash-signupflow--link-complete">
              <Link to="/candidate/quiz-advanced" >
                <span className="dash-signupflow--checkbox dash-signupflow--checkbox-complete">4</span>
                <span className="dash-signupflow--text dash-signupflow--text-complete">Complete an advanced multiple-choice quiz &rarr;</span>
              </Link>
            </div>
          : <div className="dash-signupflow--link">
              <Link to="/candidate/quiz-advanced" >
                <span className="dash-signupflow--checkbox">4</span>
                <span className="dash-signupflow--text">Complete an advanced multiple-choice quiz &rarr;</span>
              </Link>
            </div>
        }*/}
        { user.stage5
          ? <div className="dash-signupflow--link dash-signupflow--link-complete">
              <Link to="/candidate/take-home" >
                <span className="dash-signupflow--checkbox dash-signupflow--checkbox-complete">4</span>
                <span className="dash-signupflow--text dash-signupflow--text-complete">Complete a take home coding challenge &rarr;</span>
              </Link>
            </div>
          : <div className="dash-signupflow--link">
              <Link to="/candidate/take-home" >
                <span className="dash-signupflow--checkbox">4</span>
                <span className="dash-signupflow--text">Complete a take home coding challenge &rarr;</span>
              </Link>
            </div>
        }
        { user.stage6
          ? <div className="dash-signupflow--link dash-signupflow--link-complete">
              <Link to="/candidate/activate" >
                <span className="dash-signupflow--checkbox dash-signupflow--checkbox-complete">5</span>
                <span className="dash-signupflow--text dash-signupflow--text-complete">Activate your account &rarr;</span>
              </Link>
            </div>
          : <div className="dash-signupflow--link">
              <Link to="/candidate/activate" >
                <span className="dash-signupflow--checkbox">5</span>
                <span className="dash-signupflow--text">Activate your account &rarr;</span>
              </Link>
            </div>
        }
        { user.approved
          ? <div className="dash-signupflow--link dash-signupflow--link-complete">
              <span className="dash-signupflow--checkbox dash-signupflow--checkbox-complete">6</span>
              <span className="dash-signupflow--text dash-signupflow--text-complete">Wait for approval from Industry14</span>
            </div>
          : <div className="dash-signupflow--link">
              <span className="dash-signupflow--checkbox">6</span>
              <span className="dash-signupflow--text">Wait for approval from Industry14</span>
            </div>
        }
      </div>
    )
  }
}

export default withFirebase((connect(mapState, null)(SignupFlow)));
