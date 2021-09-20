import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
   {
    tokenName: 'XYA',
    stakingTokenName: QuoteToken.MIS,
    stakingTokenAddress: '0xc078b878ae6BB14a8734d8a788F496984Cc7dde2',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      1666600000: '0xbb24f8080fB72c7b83C29ed443bA3f7690B4777D',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https: pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
   },
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af166660000033061A',
  //     1666600000: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af166660000033061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
