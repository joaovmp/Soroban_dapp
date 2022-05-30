/* eslint-disable sort-keys-fix/sort-keys-fix */
import { WalletChain } from '../../WalletChainContext';
import { Wallet } from '../../Wallet';

export interface FreighterOptions {
  appName?: string;
  chains: WalletChain[];
}

export function freighter({ appName, chains }: FreighterOptions): Wallet {
  const installed = typeof window !== "undefined" && !!((window as any)?.freighterApi);

  return {
    id: 'freighter',
    name: 'Freighter',
    iconUrl: async () => "",
    // iconUrl: async () => (await import('./freighter.svg')).default,
    iconBackground: '#fff',
    installed,
    downloadUrls: {
      browserExtension:
        'https://chrome.google.com/webstore/detail/freighter/bcacfldlkkdogcmkkibnjlakofdplcbk?hl=en'
    },
    isConnected() {
      return !!(window as any).freighterApi?.isConnected();
    },
    getPublicKey() {
      return (window as any).freighterApi.getPublicKey();
    },
    createConnector: (_args) => {
      // TODO: Implement this
      return {};
    },
  };
};
