import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
   {
    sousId: 0,
    tokenName: 'XYA',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xc078b878ae6BB14a8734d8a788F496984Cc7dde2',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      1666600000: '0xcD81CBB9248a6635e6Fd26C2991911FC6c01F85C',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https: pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.1',
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
