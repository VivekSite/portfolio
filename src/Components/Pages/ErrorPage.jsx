import React from 'react';
import Layout from './../Layout/Layout'

export default function ErrorPage() {
  return (
    <Layout>
      <div id="errorPage">
        <img src={require('./../../Images/404.png')} alt='ErrorPage' />
        <h3>Page Not Found</h3>
      </div>
    </Layout>
  )
}
