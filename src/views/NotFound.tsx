import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        <object type="image/svg+xml" data="images/ppltalking.svg" height="370px">&nbsp;</object>
        <Heading size="xl" mt='15px' mb='25px'  >Await for Mainnet Launch</Heading>
        <Button as="a" href="/" size="md">
          {TranslateString(999, 'My Page')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
