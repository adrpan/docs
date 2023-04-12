"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8832],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),s=["components"],i={},l="Casper-Client Commands",c={unversionedId:"resources/tutorials/beginner/counter-testnet/commands",id:"resources/tutorials/beginner/counter-testnet/commands",title:"Casper-Client Commands",description:"State Root Hash",source:"@site/source/docs/casper/resources/tutorials/beginner/counter-testnet/commands.md",sourceDirName:"resources/tutorials/beginner/counter-testnet",slug:"/resources/tutorials/beginner/counter-testnet/commands",permalink:"/resources/tutorials/beginner/counter-testnet/commands",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/resources/tutorials/beginner/counter-testnet/commands.md",tags:[],version:"current",lastUpdatedAt:1681310269,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{},sidebar:"resources",previous:{title:"Overview",permalink:"/resources/tutorials/beginner/counter-testnet/overview"},next:{title:"Tutorial Walkthrough",permalink:"/resources/tutorials/beginner/counter-testnet/walkthrough"}},u={},p=[{value:"State Root Hash",id:"state-root-hash",level:2},{value:"Querying Network State",id:"querying-network-state",level:2},{value:"Put Deploys (onto the Chain)",id:"put-deploys-onto-the-chain",level:2},{value:"Deploy via a compiled Wasm binary",id:"deploy-via-a-compiled-wasm-binary",level:3},{value:"Deploy via a named key already on the blockchain",id:"deploy-via-a-named-key-already-on-the-blockchain",level:3},{value:"Get Deploys (from the Chain)",id:"get-deploys-from-the-chain",level:2}],m={toc:p},d="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"casper-client-commands"},"Casper-Client Commands"),(0,o.kt)("h2",{id:"state-root-hash"},"State Root Hash"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client get-state-root-hash --node-address http://[IP]:7777\n")),(0,o.kt)("p",null,"You can find a list of Testnet IP addresses at ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/peers"},"CSPR live"),"."),(0,o.kt)("p",null,"The first command to cover is the ",(0,o.kt)("em",{parentName:"p"},"get-state-root-hash")," command from the ",(0,o.kt)("em",{parentName:"p"},"casper-client")," tool. The state root hash is an identifier of the current network state. It is similar to a Git commit ID for commit history. It gives a snapshot of the blockchain state at a moment in time. For this tutorial, it will be used to query the network state after sending deploys."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"After sending deploys to the network, you must get the new state root hash to see the changes reflected. Otherwise, you will be looking at events in the past.")),(0,o.kt)("h2",{id:"querying-network-state"},"Querying Network State"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client query-global-state \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] \\\n    -q "[SESSION_NAME]/[SESSION_NAMED_KEY]" (OPTIONAL)\n')),(0,o.kt)("p",null,"This command allows you to query the state of a Casper network at a given moment in time, which is specified by the ",(0,o.kt)("em",{parentName:"p"},"state-root-hash")," described above."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"node-address")," is the server on the network."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"key")," is the identifier for the query. It must be either the account public key, account hash, contract address hash, transfer hash, or deploy hash. The tutorial demonstrates two of these key types."),(0,o.kt)("li",{parentName:"ul"},"The optional query path argument (",(0,o.kt)("em",{parentName:"li"},"q"),") allows you to drill into the specifics of a query concerning the key.")),(0,o.kt)("h2",{id:"put-deploys-onto-the-chain"},"Put Deploys (onto the Chain)"),(0,o.kt)("h3",{id:"deploy-via-a-compiled-wasm-binary"},"Deploy via a compiled Wasm binary"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 5000000000000 \\\n    --session-path [CONTRACT_PATH]/counter-v1.wasm\n")),(0,o.kt)("p",null,"This command creates a deploy and sends it to the network for execution. In this first usage of the command,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"session-path")," points to a compiled Wasm contract."),(0,o.kt)("li",{parentName:"ul"},"This contract is then installed on the network specified by the ",(0,o.kt)("em",{parentName:"li"},"chain-name"),'. The Testnet is "casper-test" but this is configurable.'),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"payment-amount")," is in units of motes (1 nano-CSPR) and is required to pay the transaction fee for the deploy. If it is too small, the transaction will get denied due to insufficient funds.")),(0,o.kt)("h3",{id:"deploy-via-a-named-key-already-on-the-blockchain"},"Deploy via a named key already on the blockchain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name casper-test \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount 5000000000000 \\\n    --session-name "counter" \\\n    --session-entry-point "counter_inc"\n')),(0,o.kt)("p",null,"This second usage of ",(0,o.kt)("em",{parentName:"p"},"put-deploy")," does not place a new contract on the chain, but it allows you to call entry points (functions) defined in smart contracts."),(0,o.kt)("p",null,'This examples uses "counter" and "counter_inc" from the ',(0,o.kt)("a",{parentName:"p",href:"/resources/tutorials/beginner/counter-testnet/walkthrough"},"tutorial walkthrough"),". However, these will be different when you write your contracts."),(0,o.kt)("h2",{id:"get-deploys-from-the-chain"},"Get Deploys (from the Chain)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client get-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    [DEPLOY_HASH]\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"get-deploy")," command is complementary to the ",(0,o.kt)("em",{parentName:"p"},"put-deploy")," command. It retrieves a deploy from the network and allows you to check the status of the deploy. The ",(0,o.kt)("em",{parentName:"p"},"DEPLOY_HASH")," is the identifier to a specific deploy and is returned by the ",(0,o.kt)("em",{parentName:"p"},"put-deploy")," command."))}h.isMDXComponent=!0}}]);