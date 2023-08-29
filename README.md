# MiraiID - Web3Modal


## MiraiWeb3Modal

A Modal which is used for show QRCode/Select Chains with Mirai Sign Provider.

Support these common modules: ESM, CommonJS and UMD

### ⏪ Prerequisite

-   Node 16+

-   Authenticate to Github Packages

```
npm login --scope=@mirailabs-co --registry=https://npm.pkg.github.com
> Username: <Username>
> Password: <Personal access token>
> Email: <Public email address>
```

### 🚀 Installation

-   via yarn or npm:

```bash
yarn add @mirailabs-co/mirai-web3-modal

npm install @mirailabs-co/mirai-web3-modal
```

### Examples
An example application using the library 

##### Inititalize Sign Connection
You want to use our provider (sign, getAccounts, getChains,...)

```typescript
// import nescesary
import { MiraiWeb3Modal } from "@mirailabs-co/mirai-web3-modal";
```

```typescript
// Initialize MiraiSignCore to config for mirai provider
const web3ModalRef = useRef<MiraiWeb3Modal | null>(null);

const web3modal = new MiraiWeb3Modal();
if (web3modal) {
    web3ModalRef.current = web3modal;
}
```

```typescript
// if you want to open modal
await web3ModalRef.current.openModal({
    uri,
});
```

```typescript
// Or Close modal
await web3ModalRef.current?.closeModal();
```

```typescript
// Otherwise, if you want to open/close automatically, you can set showModalQrcode: true in MiraiCore
const miraiCore = await MiraiSignCore.init({
    clientId: "CLIENT_ID",
    chainNameSpace: "eip155",
    chains: ["0x1"],
    metaData: {
        name: "Mirai App",
        description: "Mirai App",
        icons: [""],
    },
    redirectUri: "https://miraiid.io",
    showModalQrcode: true
});
```
```typescript
/// After Connection had uri_display the modal will automatically show. After user approced/rejected that the modal will close

// You can get manual uri after showConnectionModal
const { uri } = await miraiCore.showConnectionModal(miraiConnection);

log(uri)
```