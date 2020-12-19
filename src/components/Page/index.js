import React from 'react'
import Head from '@/components/Head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Page = (props) => {
	return (<>
		<Head title={props.title}></Head>
		<Header></Header>
		<main className="main">{props.children}</main>
		<Footer></Footer>
	</>)
}

export default Page
