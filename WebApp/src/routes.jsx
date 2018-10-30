import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';

// COMPONENTS
import ProtectedAppRoute from './ProtectedAppRoute';
import Layout from './shared/layout/layout';

// Visitors
import LayoutVisitor from './visitors/layout/LayoutVisitor';
import Home from './visitors/pages/candidates/home/Home';

// Companies
import LayoutComp from './companies/layout/LayoutCompanies';
import CompHome from './companies/pages/home/Home';
import Activate from './companies/pages/activate/Activate';
import Positions from './companies/pages/positions/Positions';
import PositionItem from './companies/pages/positions/positionItem/PositionItem';
import CandidateSearch from './companies/pages/search/Search';
import CandidateProfile from './companies/pages/candidateProfile/CandidateProfile';
import CompanyProfile from './companies/pages/profile/Profile';
import CompanySettings from './companies/pages/settings/Settings';
import CompanyUserProfile from './companies/pages/userProfile/UserProfile';
import CompanyUserSettings from './companies/pages/userSettings/UserSettings';

// Candidates
import LayoutCand from './candidates/layout/LayoutCandidates';
import CandHome from './candidates/pages/home/Home';
import LayoutQuiz from './candidates/layout/LayoutQuiz';
import CandActivate from './candidates/pages/activate/Activate';
import CandProfile from './candidates/pages/profile/Profile';
import CandQuizBasic from './candidates/pages/quizBasic/QuizBasic';
import CandQuizBasicChallenge from './candidates/pages/quizBasic/challenge/Challenge';
import CandQuizAdvanced from './candidates/pages/quizAdvanced/QuizAdvanced';
import CandQuizAdvancedChallenge from './candidates/pages/quizAdvanced/challenge/Challenge';
import CandTakeHome from './candidates/pages/takeHome/TakeHome';
import CandTakeHomeChallenge from './candidates/pages/takeHome/challenge/Challenge';

// Admin
import LayoutAdmin from './admin/layout/LayoutAdmin';
import AdminHome from './admin/pages/home/Home';
import AdminAnalytics from './admin/pages/analytics/Analytics';
import AdminKPIs from './admin/pages/kpis/KPIs';

function AppRoute({layout, component, ...rest}){
  return (
    <Route {...rest} render={(props) => React.createElement(layout, props, React.createElement(component, props))}/>
  );
}

class Routes extends Component {

  render() {

    return (
      <Layout>
        <ReduxToastr
          position='bottom-left'
          transitionIn='fadeIn'
          transitionOut='fadeOut'
        />
        <Switch>
          { /* ADMIN */}
          <AppRoute path="/admin/kpi" layout={LayoutAdmin} component={ AdminKPIs } exact />
          <AppRoute path="/admin/analytics" layout={LayoutAdmin} component={ AdminAnalytics } />
          <AppRoute path="/admin" layout={LayoutAdmin} component={ AdminHome } exact />

          { /* CANDIDATES */}
          <ProtectedAppRoute path="/candidate/take-home/challenge" layout={LayoutCand} component={ CandTakeHomeChallenge } />
          <ProtectedAppRoute path="/candidate/take-home" layout={LayoutCand} component={ CandTakeHome } />
          <ProtectedAppRoute path="/candidate/quiz-advanced/challenge" layout={LayoutQuiz} component={ CandQuizAdvancedChallenge } />
          <ProtectedAppRoute path="/candidate/quiz-advanced" layout={LayoutCand} component={ CandQuizAdvanced } />
          <ProtectedAppRoute path="/candidate/quiz-basic/challenge" layout={LayoutQuiz} component={ CandQuizBasicChallenge } />
          <ProtectedAppRoute path="/candidate/quiz-basic" layout={LayoutCand} component={ CandQuizBasic } />
          <ProtectedAppRoute path="/candidate/profile" layout={LayoutCand} component={ CandProfile } />
          <ProtectedAppRoute path="/candidate/activate" layout={LayoutCand} component={ CandActivate } />
          <ProtectedAppRoute path="/candidate" layout={LayoutCand} component={ CandHome } exact />

          {/* COMPANIES */}
          <ProtectedAppRoute path="/company/user-settings" layout={LayoutComp} component={ CompanyUserSettings } /> 
          <ProtectedAppRoute path="/company/settings" layout={LayoutComp} component={ CompanySettings } /> 
          <ProtectedAppRoute path="/company/profile" layout={LayoutComp} component={ CompanyProfile } /> 
          <ProtectedAppRoute path="/company/candidate/:id" layout={LayoutComp} component={ CandidateProfile } /> 
          <ProtectedAppRoute path="/company/search" layout={LayoutComp} component={ CandidateSearch } /> 
          <ProtectedAppRoute path="/company/positions/:id" layout={LayoutComp} component={ PositionItem } /> 
          <ProtectedAppRoute path="/company/positions" layout={LayoutComp} component={ Positions } /> 
          <ProtectedAppRoute path="/company/activate" layout={LayoutComp} component={ Activate } /> 
          <ProtectedAppRoute path="/company/user-profile" layout={LayoutComp} component={ CompanyUserProfile } /> 
          <ProtectedAppRoute path="/company" layout={LayoutComp} component={ CompHome } exact /> 

          {/* VISITORS */}
          <AppRoute path="/" layout={LayoutVisitor} component={ Home } exact />

        </Switch>
      </Layout>

    )
  }    
}

export default Routes;