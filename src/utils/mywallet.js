import { ethers, formatEther } from "ethers";


class MyWallet {

    constructor(){
        this.contracts = {}
        this.account_callback = null;
        this.account = null;
        this.inited = false
    }

    //获取以太坊余额
    async getBalance (address) {
        this.web3_provider = new ethers.BrowserProvider(window.ethereum)
        if (this.web3_provider != null) {
            return formatEther(await this.web3_provider.getBalance(address))
        }
        return null
    }
    //获取当前网络ID
    async getNetworkId() {
        if (this.web3_provider != null) {
            const network = await this.web3_provider.getNetwork();
            return Number(network.chainId); // 返回网络 ID（BigNumber）
        }
        return null;
    }

    async getContract (address, abi) {
        if (this.inited) {
            try {
                let provider = new ethers.BrowserProvider(window.ethereum)
                let signer = await provider.getSigner();
                return new ethers.Contract(address, abi, signer);
            } catch (error) {
                console.error(error);
                return null;
            }
        }
    }

    async contract_call (address, abi, method, args) {
        let contract = await this.getContract(address, abi);
        if (contract) {
            return contract[method](...args);
        }
    }

    async contract_send (address, abi, method, args) {
        let contract = await this.getContract(address, abi);
        if (contract) {
            try {
                // 正确使用 estimateGas 方式（v6）
                const gas = await contract[method].estimateGas(...args).catch((err) => {
                    console.error("Gas 估算失败:", err);
                    throw err;
                });

                const gasLimit = gas * BigInt(3) / BigInt(2); // 增加 50% buffer

                // 发起 approve 交易
                const txResponse = await contract[method](...args, {
                    gasLimit,
                });

                if (txResponse) {
                    const receipt = await txResponse.wait();
                    return receipt;
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
    // async erc20_approve (token, spender, amount) {
    //     if (this.inited) {
    //         try {
    //             // 正确使用 estimateGas 方式（v6）
    //             const gas = await token.approve.estimateGas(spender, amount, {}).catch((err) => {
    //                 console.error("Gas 估算失败:", err);
    //                 throw err;
    //             });

    //             const gasLimit = gas * BigInt(3) / BigInt(2); // 增加 50% buffer

    //             // 发起 approve 交易
    //             const txResponse = await token.approve(spender, amount, {
    //                 gasLimit,
    //             });
    //             if (txResponse) {
    //                 const receipt = await txResponse.wait();
    //                 return receipt;
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // };

    async connect () {
        if (this.inited) {
            try {
                // 首先请求用户连接钱包（这会弹出钱包连接授权窗口）
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });
                
                if (accounts && accounts.length > 0) {
                    let provider = new ethers.BrowserProvider(window.ethereum)
                    let signer = await provider.getSigner();
                    const address = await signer.getAddress();
                    
                    // 更新当前账户
                    this.account = address;
                    
                    // 触发账户回调
                    if (this.account_callback) {
                        this.account_callback(address);
                    }
                    
                    return address;
                } else {
                    console.log('用户拒绝连接或没有可用账户');
                    return null;
                }
            } catch (error) {
                console.error('连接钱包失败:', error);
                
                // 检查特定的错误类型
                if (error.code === 4001) {
                    console.log('用户拒绝了连接请求');
                } else if (error.code === -32002) {
                    console.log('连接请求已在进行中，请检查钱包');
                } else {
                    console.log('连接钱包时发生未知错误');
                }
                
                return null;
            }
        }
        return null;
    }

    init(account_callback) {
        if (window.ethereum !== undefined) {
            this.account_callback = account_callback
            
            // 监听账户变化
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    console.log('账户已切换:', accounts[0]);
                    this.account = accounts[0];
                    if (this.account_callback) {
                        this.account_callback(accounts[0]);
                    }
                } else {
                    console.log('用户未登录或断开连接');
                    this.account = null;
                    if (this.account_callback) {
                        this.account_callback(null);
                    }
                }
            });

            // 监听网络切换
            window.ethereum.on('chainChanged', (chainId) => {
                const numericChainId = Number(chainId);
                console.log('网络已切换:', numericChainId);
                
                // 可以在这里触发刷新或通知 UI 更新
                // 例如：重新初始化合约、更新余额、提示用户等
            });
            
            this.inited = true;
            
            // 异步检查是否已经连接过钱包
            this.checkConnection();
            
            return true;
        }
        else {
            this.inited = false;
            return false;
        }
    }

    // 检查钱包连接状态（用于页面刷新后自动恢复连接）
    async checkConnection() {
        try {
            const accounts = await window.ethereum.request({
                method: 'eth_accounts'
            });
            
            if (accounts && accounts.length > 0) {
                console.log('检测到已连接的账户:', accounts[0]);
                this.account = accounts[0];
                if (this.account_callback) {
                    this.account_callback(accounts[0]);
                }
            } else {
                console.log('没有已连接的账户');
                if (this.account_callback) {
                    this.account_callback(null);
                }
            }
        } catch (error) {
            console.error('检查连接状态失败:', error);
            if (this.account_callback) {
                this.account_callback(null);
            }
        }
    }
}

var myWallet = new MyWallet()

export default myWallet;