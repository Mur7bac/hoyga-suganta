import React, { Component } from 'react';
import classes from './SingIn.css';
import Layout from '../../components/Layout/Layout';
import Logo from '../../components/SingIn/Logo/Logo';
import Body from '../../components/SingIn/Body/Body';


class SingIn extends Component {
  render() {
    return (


        <Layout>
          <div className={classes.SingIn}>
            <Logo />
            <Body />
          </div>
        </Layout>


    );
  }
}

export default SingIn;
