import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import PastLotteryDataContext from 'contexts/PastLotteryDataContext'
import { getLotteryIssueIndex } from 'utils/lotteryUtils'
import useI18n from 'hooks/useI18n'
import { useLottery } from 'hooks/useContract'
import Page from 'components/layout/Page'
import HowItWorks from './components/HowItWorks'
import Divider from './components/Divider'
import NextDrawPage from './NextDrawPage'
import PastDrawsPage from './PastDrawsPage'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`
const SvgHero = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding: 42px 12px;

  @media all and (max-width: 1350px) { 
    max-width: 100%;
  }
`

const Blablabla = styled.div`
  text-color: red;
  margin: 0px 18px;
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 1.3;
`
const Lottery: React.FC = () => {
  const lotteryContract = useLottery()
  const { account } = useWallet()
  const TranslateString = useI18n()
  const [activeIndex, setActiveIndex] = useState(0)
  const [historyData, setHistoryData] = useState([])
  const [historyError, setHistoryError] = useState(false)
  const [currentLotteryNumber, setCurrentLotteryNumber] = useState(0)
  const [mostRecentLotteryNumber, setMostRecentLotteryNumber] = useState(1)

  useEffect(() => {
    fetch(`https://gatsby-ART-api-jet.vercel.app/api/lotteryHistory`)
      .then((response) => response.json())
      .then((data) => setHistoryData(data))
      .catch(() => {
        setHistoryError(true)
      })
  }, [])

  useEffect(() => {
    const getInitialLotteryIndex = async () => {
      const index = await getLotteryIssueIndex(lotteryContract)
      const previousLotteryNumber = index - 1

      setCurrentLotteryNumber(index)
      setMostRecentLotteryNumber(previousLotteryNumber)
    }

    if (account && lotteryContract) {
      getInitialLotteryIndex()
    }
  }, [account, lotteryContract])

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <>

      {/* <HowItWorks /> */}
      <Page>
        <Wrapper>
          <ButtonMenu activeIndex={activeIndex} onClick={handleClick} size="sm" variant="subtle">
            <ButtonMenuItem>{TranslateString(999, 'Next draw')}</ButtonMenuItem>
            <ButtonMenuItem>{TranslateString(999, 'Winning Numbers')}</ButtonMenuItem>
          </ButtonMenu>
        </Wrapper>
        <PastLotteryDataContext.Provider
          value={{ historyError, historyData, mostRecentLotteryNumber, currentLotteryNumber }}
        >
          {activeIndex === 0 ? <NextDrawPage /> : <PastDrawsPage />}
        </PastLotteryDataContext.Provider>
        <Blablabla >
        Disclaimer: If you reside in a location where lottery, gambling, or betting over the internet is illegal, please do not click on anything related to these activities on this site. You must be 21 years of age to click on any gambling related items even if it is legal to do so in your location. Recognising that the laws and regulations involving online gaming are different everywhere, players are advised to check with the laws that exist within their own jurisdiction or region to ascertain the legality of the activities which are covered. The games provided by Artemis Protocol are based on blockchain, fair, and transparent. When you start playing these games, please take note that online gambling and lottery is an entertainment vehicle and that it carries with it a certain degree of financial risk. Players should be aware of these risks and govern themselves accordingly.
        </Blablabla>
      </Page>
    </>
  )
}

export default Lottery
