import React from 'react';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';

import Shop from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
// import { onSnapShot } from 'firebase/compat/firestore';

class  App extends React.Component {

  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log('state', this.state);
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log('inside snapshot', this.state);
        });
      }
      else{
        this.setState({
          currentUser: userAuth
        });
      }
      console.log('state', this.state);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
  return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/sign-in' component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
