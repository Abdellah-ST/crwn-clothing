import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.action';

import Homepage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';

import Shop from './pages/shop/shop.component';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
// import { onSnapShot } from 'firebase/compat/firestore';

class  App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log('state', this.state);
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
      else{
          setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
  return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/sign-in' render={() => this.props.currentUser ? 
            (<Redirect to='/' />) : (<SignInAndSignOutPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,
                mapDispatchToProps)
                (App);
