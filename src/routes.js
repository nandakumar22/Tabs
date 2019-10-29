import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
// import Tabone from './tabOne';
// import Tabtwo from './tabTwo';
// import Tabthree from './tabThree';
import Tabz from './tab';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" initial={true} component={Tabz} hideNavBar={true} />
      {/* <Scene key="frgt" component={Tabthree} hideNavBar={false} />
      <Scene key="up" component={Tabtwo} hideNavBar={false} />
      <Scene key="indv" component={Tabone} hideNavBar={false} /> */}
    </Scene>
  </Router>
);

export default Routes;
