import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Swipepage from "./Swipepage.js"
import Signin from './Signin.js'
import Signup from './Signup.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "swipepage" component = {Swipepage} initial = {true} />
         <Scene key = "signin" component = {Signin} />
         <Scene key = "signup" component = {Signup} />
      </Scene>
   </Router>
)
export default Routes