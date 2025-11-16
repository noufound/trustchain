import React from 'react';
import { Button, Avatar, Space, Typography, Dropdown, Menu } from 'antd';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance } from 'wagmi';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

export function WalletConnectButton() {
  // const [mounted, setMounted] = useState(false);
  // const { message } = App.useApp();
  const { address, isConnected } = useAccount();
  const { data: balanceData, isLoading: balanceLoading, isError: balanceError } = useBalance({
    address: address,
  });

  // 定义钱包菜单项，并传递 openChainModal 到每个项
  const getWalletMenuItems = (
    openChainModal: () => void,
    openAccountModal: () => void,
    account: {
      address: string;
      balanceDecimals?: number;
      balanceFormatted?: string;
      balanceSymbol?: string;
      displayBalance?: string;
      displayName: string;
      ensAvatar?: string;
      ensName?: string;
      hasPendingTransactions: boolean;
    },
    chain: {
      hasIcon: boolean;
      iconUrl?: string;
      iconBackground?: string; // 这里是可选的
      id: number;
      name?: string;
      unsupported?: boolean;
    }
  ) => [
      {
        key: 'address',
        label: (
          <button onClick={openAccountModal} type="button">
            {account.displayName}
            {account.displayBalance ? ` (${account.displayBalance})` : ''}
            {isConnected ? (
              <div>
                {balanceLoading && <p>Loading balance...</p>}
                {balanceError && <p>Error fetching balance.</p>}
                {balanceData && <p>Balance: {balanceData.formatted} {balanceData.symbol}</p>}
              </div>
            ) : (
              <p>Connect your wallet to see your balance.</p>
            )}
          </button>
        ),
        disabled: true,
      },
      {
        key: 'balance',
        label: (
          <div className="p-2 min-w-[200px]">
            <Text className="text-text-secondary text-sm block mb-2">账户余额</Text>
            <div className="space-y-1">
              <div className="flex justify-between">
                <Text>ETH:</Text>
                <Text className="font-mono">{balanceData ? parseFloat(balanceData.formatted).toFixed(4) : '0.0000'}</Text>
              </div>
            </div>
          </div>
        ),
        disabled: true,
      },
      {
        key: 'network',
        label: (
          <div className="p-2">
            <button onClick={openChainModal} style={{ display: 'flex', alignItems: 'center' }} type="button">
              {chain.hasIcon && (
                <div
                  style={{
                    background: chain.iconBackground,
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    overflow: 'hidden',
                    marginRight: 4,
                  }}
                >
                  {chain.iconUrl && <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} width={12} height={12} />}
                </div>
              )}
              {chain.name}
            </button>
          </div>
        ),
        disabled: true,
      },
      // Menu Divider作为单独的元素
      {
        key: 'divider',
        label: <Menu.Divider />,
        disabled: true,
      },
    ];


  // useEffect(() => {
  //   setMounted(true); // 确保组件已挂载
  // }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 12 }}>
      <ConnectButton showBalance={false} />
      {/* <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
        }) => {
          if (!mounted || !account || !chain) {
            return (
              <button onClick={openConnectModal} type="button">
                连接钱包
              </button>
            );
          }

          // 如果当前链不受支持
          if (chain.unsupported) {
            return (
              <button onClick={openChainModal} type="button">
                错误的网络
              </button>
            );
          }

          // 已连接，显示钱包菜单
          return (
            <Dropdown
              menu={{ items: getWalletMenuItems(openChainModal, openAccountModal, account, chain) }}
              trigger={['click']}
              placement="bottomRight"
            >
              <Button
                type="default"
                className="flex items-center space-x-2"
                size="large"
                style={{
                  color: 'var(--color-text-primary)',
                  backgroundColor: 'var(--color-primary-card)',
                  border: '1px solid var(--color-border-gold)',
                  borderRadius: 'var(--radius-base)',
                  padding: '4px 12px',
                }}
              >
                <Avatar
                  size={20}
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: 'var(--color-accent-gold)',
                    color: 'var(--color-text-on-gold)',
                    fontSize: '12px',
                  }}
                />
                <Space size={4} className="hidden sm:flex">
                  <Text className="text-text-primary font-medium">
                    {account.displayName}
                  </Text>
                  <DownOutlined className="text-text-secondary text-xs" />
                </Space>
              </Button>
            </Dropdown>
          );
        }}
      </ConnectButton.Custom> */}
    </div>
  );
}

export default WalletConnectButton;
