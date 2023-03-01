import Head from 'next/head'
import { Roboto_Flex } from '@next/font/google'

import { ReactNode } from 'react'
import Header from '@/components/Header';

interface IProps {
  children: ReactNode;
}

const roboto = Roboto_Flex({ subsets: ['latin'] })

const Default = ({ children }: IProps) => {
  return (
    <>
      <Head>
        <title>arthus.dev</title>
      </Head>

      <Header />

      <main className={roboto.className}>
        { children }
      </main>

      {/* <Footer /> */}
    </>
  )
}

export default Default