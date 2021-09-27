import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pancakeswap-libs/uikit'
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const Ifo = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <IfoCards isSingle>
        <IfoCard ifo={activeIfo} />
      </IfoCards>
      <LaunchIfoCallout>
      <div>
          <div>
            <Title as="h2">{TranslateString(999, 'About ArtemisPad')}</Title>
            <Text mb={3}>
              {TranslateString(
                999,
                'We decentralize the way ideas raise capital, by aligning interests of both users and creators via attractive incentives and yields. Projects wishing to launch on Artemis will not only be able to raise capital for liquidity, but also will be rewarded for it, this includes taking part in our incubator pools, solo staking and incentivized liquidity pools.',
              )}
            </Text>
            <LinkExternal href="https://viper.exchange/#/swap?outputCurrency=0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a" mr="16px">
              {TranslateString(999, 'Apply for Launch')}
            </LinkExternal>

          </div>
        </div>
      <div>
          <div>
            <Title as="h2">{TranslateString(999, 'How to Participate on the Sale?')}</Title>
            
            <Text mb={3}>
              {TranslateString(
                999,
                'First, wrap your ONE tokens and when the sale is live, commit your WONE to buy a share of the pooled MIS. Once the launchpad sale is over, claim the tokens you bought, along with any unspent funds.',
              )}
            </Text>

          </div>
        </div>

        
      </LaunchIfoCallout>
    </div>
  )
}

export default Ifo
