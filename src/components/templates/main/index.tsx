import React from 'react'
import Head from 'next/head'
import {
  Box
} from '@chakra-ui/react'
import Headroom from 'react-headroom'

import Header from './header'

type Props = {
  children: React.ReactNode,
  title: string,
}

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>
          {props.title}
        </title>
      </Head>
      <Headroom>
        <Header />
      </Headroom>
      <Box>
        {props.children}
      </Box>
    </>

  )
}


export default Layout
