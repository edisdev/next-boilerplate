import React from 'react'
import styles from '~@/pages/home.module.scss'

import Page from '@/components/Page'
import Button from '@/components/Button'
import Image from '@/components/Image'
import Icon from '@/components/Icon'

import helper from '@/utils/helper'

import colors from '~@/modules/colors.module.scss'
import sizes from '~@/modules/sizes.module.scss'
import fonts from '~@/modules/fonts.module.scss'



const Home = () => {

  console.log('you can using scss colors on template', colors)
  console.log('you can using scss sizes on template', sizes)
  console.log('you can using scss fonts on template', fonts)


  return (
    <Page title="Next Template | Home">
      <section className={styles.section}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.Buttons}>
          <Button>Hello</Button>

          <Button
            primary
            backgroundColor="purple"
            size="large"
            className="m-left-10 m-right-10">Hi
          </Button>

          <Button
            primary
            onClick={helper}
            size="large">
            <span>Click this button</span>
          </Button>
        </div>

        <hr/>

        <div className={styles.ImageArea}>
          <Image
            src="/images/js.jpg"
            loading="lazy"
            layout="intrinsic"
            width="auto"
            height="auto" />

          <Image className="m-left-20"
            circle={true}
            src="/images/js.jpg"
            layout="intrinsic"
            loading="lazy"
            width={130}
            height={130} />
        </div>

        <div className="icons">
          <Icon
            name="ShopBag"
            width={45}
            height={45}
            colors={['#FFBB6F', '#F74949', '#1c2f39', '#7b8187']} />

          <Icon
            name="Sunshine"
            width={45}
            height={45} />
          
          <Icon
            name="HobbitHome"
            width={45}
            height={45} />
        </div>
      </section>
    </Page>
  )
}

export default Home
