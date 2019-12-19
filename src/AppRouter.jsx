import React from 'react';
import { Button, message, Layout } from 'antd';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Axios from 'axios';


export default function AppRouter() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider theme="light" style={{ minHeight: '100vh' }}>
        <ul>
          <li><Link to="/p1">p1</Link></li>
          <li><Link to="/p2">p2</Link></li>
          <li><Link to="/btn">btn</Link></li>
        </ul>

      </Layout.Sider>
      <Layout.Content>
          <Switch>
            <Route path="/p1">
              <h1>p1</h1>
            </Route>
            <Route path="/p2">
              <h1>p2</h1>
            </Route>
            <Route path="/btn">
              <Button onClick={() => {
                // message.info('开启!');
                Axios.get( '/api' ).then( res => {
                  // console.log( res );
                  message.info( JSON.stringify( res.data ) );
                } )
              }}>click to Start</Button>
            </Route>

            <Redirect to="/p1"></Redirect>
          </Switch>
      </Layout.Content>
    </Layout>
  )
}