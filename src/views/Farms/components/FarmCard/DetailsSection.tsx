import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, Link, LinkExternal } from '@pancakeswap-libs/uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  isTokenOnly,
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })

  return (

    <Wrapper>

      {!removed && (
        <Flex justifyContent="space-between">
          <Text bold marginBottom='8px'>{TranslateString(23, 'Total Liquidity 📄')}</Text>
          <Text bold>{totalValueFormated}</Text>
        </Flex>
      )}

      
      <Flex justifyContent="flex-start">
        <StyledLinkExternal external href='https://vfat.tools/harmony/' bold={false} style={{"color": "#4c68ef"}}>
          {TranslateString(999, 'VFAT')}
        </StyledLinkExternal>
      </Flex>

      <Flex justifyContent="left">
        <StyledLinkExternal style={{"color": "#4c68ef"}} href={
          isTokenOnly ?
            `https://app.sushi.com/swap?inputCurrency=${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
            :
            `https://app.sushi.com/add/${liquidityUrlPathParts}`
        }>
          {lpLabel}
        </StyledLinkExternal>
      </Flex>

      <Flex justifyContent="flex-start">
        <Link external href={bscScanAddress} bold={false} style={{"color": "#4c68ef"}}>
          {TranslateString(999, 'View on Explorer')}
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
