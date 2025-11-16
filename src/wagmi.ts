import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  bsc,
} from 'wagmi/chains';
import { http } from 'wagmi';
import { Chain } from 'wagmi/chains'; // Import Chain from wagmi/chains


export const bsc_test = {
  id: 97,
  name: 'bsc_test',
  // iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  // iconBackground: '#fff',
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://bsc-testnet.nodereal.io/v1/2f02e0c6cb424949ad32ebf6f824ee6a'] },
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    bsc_test,
  ],
  ssr: true,
  transports: {
    // [bsc.id]: http('https://bsc-dataseed.nariox.org'),
    [bsc_test.id]: http('https://bsc-testnet.infura.io/v3/d2e3d6789fce4aff98a1079cd7e079f0')
    //[ganache.id]: http('http://127.0.0.1:7545'),
  },
});
