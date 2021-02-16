import React from 'react'

import Layout from 'components/layouts/main'
import styles from 'styles/Home.module.css'


const Content: React.FC = () => {
  return (
    <Layout title='about page'>
      <div className={styles.container}>
        <main className={styles.main}>
          This page is gonna host a about page. <br />
          Plase coming soon..
        </main>
      </div>
    </Layout>
  )
}


export default Content
