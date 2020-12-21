import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider, useSelector } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import { createFirestoreInstance,reduxFirestore, getFirestore  } from 'redux-firestore'
import firebase from 'firebase/app'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import fbaseConfig from './config/fbConfig'

const store = createStore(rootReducer,compose(
  applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
  reduxFirestore(fbaseConfig)
))

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB

  // I added this after problems with auth
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions'
}

const rrfProps = {
  firebase,
  config: rrfConfig, 
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

// I added this after problems with auth
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {/* I added this after problems with auth */}
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
        
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()