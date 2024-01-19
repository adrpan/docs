"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3355],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return b}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,b=u["".concat(i,".").concat(h)]||u[h]||p[h]||o;return t?a.createElement(b,s(s({ref:n},d),{},{components:t})):a.createElement(b,s({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=h;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3712:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),s=["components"],l={title:"Querying a Node",slug:"/resources/tutorials/beginner/querying-network"},i="Querying a Casper Node",c={unversionedId:"resources/beginner/querying-network",id:"resources/beginner/querying-network",title:"Querying a Node",description:"The Casper node supports queries for users and developers to obtain information stored on the blockchain.",source:"@site/source/docs/casper/resources/beginner/querying-network.md",sourceDirName:"resources/beginner",slug:"/resources/tutorials/beginner/querying-network",permalink:"/resources/tutorials/beginner/querying-network",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/beginner/querying-network.md",tags:[],version:"current",lastUpdatedAt:1705671904,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{title:"Querying a Node",slug:"/resources/tutorials/beginner/querying-network"},sidebar:"resources",previous:{title:"Tutorial Walkthrough",permalink:"/resources/beginner/counter-testnet/walkthrough"},next:{title:"Contract Upgrades",permalink:"/resources/tutorials/beginner/upgrade-contract"}},d={},u=[{value:"Obtaining the Global State Root Hash",id:"obtaining-the-global-state-root-hash",level:2},{value:"Querying an Account",id:"querying-an-account",level:2},{value:"Querying Blocks",id:"querying-blocks",level:2},{value:"Querying Deploys",id:"querying-deploys",level:2}],p={toc:u},h="wrapper";function b(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)(h,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"querying-a-casper-node"},"Querying a Casper Node"),(0,o.kt)("p",null,"The Casper node supports queries for users and developers to obtain information stored on the blockchain."),(0,o.kt)("p",null,"This document assumes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You have met the ",(0,o.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"prerequisites")),(0,o.kt)("li",{parentName:"ol"},"You are familiar with the structure of the ",(0,o.kt)("a",{parentName:"li",href:"/design"},"Global State and the Blockchain Design")," to query data from the network")),(0,o.kt)("p",null,"When sending a query, it is important to note that the request will be routed to a single node in the network. You can request several types of data from a node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Account details"),(0,o.kt)("li",{parentName:"ul"},"Block information"),(0,o.kt)("li",{parentName:"ul"},"Deploy information")),(0,o.kt)("h2",{id:"obtaining-the-global-state-root-hash"},"Obtaining the Global State Root Hash"),(0,o.kt)("p",null,"Since the system state changes with each block created, obtaining the latest global state hash is essential before querying information from a node."),(0,o.kt)("p",null,"All queries made to global state require the ",(0,o.kt)("inlineCode",{parentName:"p"},"state-root-hash"),", which you can obtain with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash \\\n     --id 1 \\\n     --node-address http://<node-ip-address>:7777\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - (STRING OR INTEGER) Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "chain_get_state_root_hash",\n    "params": null,\n    "id": 1\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "state_root_hash": "f97d8d36630a8f4acdb323223596f6fa01ee3b0d49ad70d84d715c156c5dbec6"\n    },\n    "id": 1\n}\n'))),(0,o.kt)("h2",{id:"querying-an-account"},"Querying an Account"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#accounts-head"},"Accounts")," are stored in the global state and can be queried using the ",(0,o.kt)("inlineCode",{parentName:"p"},"query-global-state")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n  --id 4 \\\n  --node-address http://<node-ip-address>:7777 \\\n  --state-root-hash <state-root-hash> \\\n  --key <hex-encoded-source-account-public-key>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the state root"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key")," - The base key for the query. This must be a properly formatted public key, account hash, contract address hash, URef, transfer hash or deploy-info hash.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important response fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"result"."stored_value"."Account"."main_purse"')," - the address of the main purse containing the sender's tokens. This purse is the source of the tokens transferred in this example")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Account Query with Verbose Output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -v \\\n  --id 4 \\\n  --node-address https://rpc.testnet.casperlabs.io/ \\\n  --state-root-hash a306a9cf869e52fe9eacdc28aade94215112cc04b6737b3669c35568a47a7dc2 \\\n  --key 01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the sample JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "query_global_state",\n    "params": {\n        "state_identifier": {\n            "StateRootHash": "a306a9cf869e52fe9eacdc28aade94215112cc04b6737b3669c35568a47a7dc2"\n        },\n        "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n        "path": []\n    },\n    "id": 4\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 4,\n    "result": {\n        "api_version": "1.5.2",\n        "block_header": null,\n        "stored_value": {\n            "Account": {\n                "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                "named_keys": [\n                    {\n                        "name": "counter",\n                        "key": "hash-4bf23564c8849a0a3193781f0a9df7d27c4bce2cc585d6e9bb161a7a1ce5cd7e"\n                    },\n                    {\n                        "name": "counter_access_uref",\n                        "key": "uref-76b6c7e7a87b752d34a8c3ccdc070dbfd1940960016c537525b2ab9076b61a3e-007"\n                    },\n                    {\n                        "name": "counter_package_name",\n                        "key": "hash-e4b2060f098fa763f9a68c5c98a2d98a4fa80815ec0fd6b93ac9efbb0c18f19b"\n                    },\n                    {\n                        "name": "my-key-name",\n                        "key": "uref-09376d4202d32457ceefa4d9cdf1db6ab2324981ade06ba6f495cdf14124c3b9-007"\n                    },\n                    {\n                        "name": "version",\n                        "key": "uref-244a270207dd13ef5ff190f75d84efe4ab54bd5787be0bbb175c3fb154b7f5ed-007"\n                    }\n                ],\n                "main_purse": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-007",\n                "associated_keys": [\n                    {\n                        "account_hash": "account-hash-0ea7998b2822afe5b62b08a21d54c941ad791279b089f3f7ede0d72b477eca34",\n                        "weight": 1\n                    },\n                    {\n                        "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                        "weight": 3\n                    },\n                    {\n                        "account_hash": "account-hash-77ea2e433c94c9cb8303942335da458672249d38c1fa5d1d7a7500b862ff52a4",\n                        "weight": 1\n                    },\n                    {\n                        "account_hash": "account-hash-d65d053f5017af101b752a9a12ba4c41fe3054b8632998a69193b891eab4caf5",\n                        "weight": 1\n                    },\n                    {\n                        "account_hash": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n                        "weight": 1\n                    },\n                    {\n                        "account_hash": "account-hash-f1802d2dbd83e41f638eb9b046f762e481d56b27d4aa00817fec77fbb21f944a",\n                        "weight": 1\n                    }\n                ],\n                "action_thresholds": {\n                    "deployment": 2,\n                    "key_management": 3\n                }\n            }\n        },\n        "merkle_proof": "[32054 hex chars]"\n    }\n}\n'))),(0,o.kt)("p",null,"To query the account balance, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"query-balance")," command and the purse identifier, which can be a public key or account hash, implying the main purse of the given account should be used. Alternatively, the purse's URef can be used. The balance returned is in motes (the unit that makes up the Casper token). For full details, run the following help command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-balance --help\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-balance \\\n--id 6 \\\n--node-address http://<node-ip-address>:7777 \\\n--state-root-hash <state-root-hash> \\\n--purse-identifier <account>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the state root"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"purse-identifier")," - A public key or account hash, implying the main purse of the given account should be used. Alternatively, the purse's URef.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," option generates verbose output, printing the RPC request and response generated. Let's explore an example below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Balance Query with Verbose Output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-balance -v \\\n  --id 6 \\\n  --node-address https://rpc.testnet.casperlabs.io/ \\\n  --state-root-hash a306a9cf869e52fe9eacdc28aade94215112cc04b6737b3669c35568a47a7dc2 \\\n  --purse-identifier 01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "query_balance",\n    "params": {\n        "state_identifier": {\n            "StateRootHash": "a306a9cf869e52fe9eacdc28aade94215112cc04b6737b3669c35568a47a7dc2"\n        },\n        "purse_identifier": {\n            "main_purse_under_public_key": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986"\n        }\n    },\n    "id": 6\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.5.2",\n        "balance": "164000000000"\n    },\n    "id": 6\n}\n'))),(0,o.kt)("h2",{id:"querying-blocks"},"Querying Blocks"),(0,o.kt)("p",null,"It is possible to obtain detailed block information from the system. To do this, obtain the hash of the block of interest and send this query to a node in the network. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-block \\\n      --id 3 \\\n      --node-address http://<node-ip-address>:7777 \\\n      --block-identifier <block-hash> \\\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"block-identifier")," - Hex-encoded block hash or height of the block. If not given, the last block added to the chain as known at the given node will be used")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important response fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"result"."block"."header"."state_root_hash"')," - contains the ",(0,o.kt)("inlineCode",{parentName:"li"},"state-root-hash")," for this block")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 3,\n    "jsonrpc": "2.0",\n    "method": "chain_get_block",\n    "params": {\n        "block_identifier": {\n            "Hash": "7c7e9b0f087bba5ce6fc4bd067b57f69ea3c8109157a3ad7f6d98b8da77d97f9"\n        }\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 3,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "block": {\n            "body": {\n                "deploy_hashes": [],\n                "proposer": "012c6775c0e9e09f93b9450f1c5348c5f6b97895b0f52bb438f781f96ba2675a94",\n                "transfer_hashes": ["ec2d477a532e00b08cfa9447b7841a645a27d34ee12ec55318263617e5740713"]\n            },\n            "hash": "7c7e9b0f087bba5ce6fc4bd067b57f69ea3c8109157a3ad7f6d98b8da77d97f9",\n            "header": {\n                "accumulated_seed": "50b8ac019b7300cd1fdeec050310e61b900e9238aa879929745900a91bd0fc4f",\n                "body_hash": "224076b19c04279ae9b97f620801d5ff40ba64f431fe0d5089ef7cb84fdff45a",\n                "era_end": null,\n                "era_id": 0,\n                "height": 8,\n                "parent_hash": "416f339c4c2ff299c64a4b3271c5ef2ac2297bb40a477ceacce1483451a4db16",\n                "protocol_version": "1.0.0",\n                "random_bit": true,\n                "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3",\n                "timestamp": "2021-04-20T18:04:42.368Z"\n            },\n            "proofs": [\n                {\n                    "public_key": "010f50b0116f213ef65b99d1bd54483f92bf6131de2f8aceb7e3f825a838292150",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "012c6775c0e9e09f93b9450f1c5348c5f6b97895b0f52bb438f781f96ba2675a94",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "018d5da83f22c9b65cdfdf9f9fdf9f7c98aa2b8c7bcf14bf855177bbb9c1ac7f0a",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "01b9088b92c8a8d592f6ec8c3e8153d7c55fc0c38b5999a214e37e73a2edd6fe0f",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "01b9e3484d96d5693e6c5fe789e7b28972aa392b054a76d175f079692967f604de",\n                    "signature": "130 chars"\n                }\n            ]\n        }\n    }\n}\n'))),(0,o.kt)("h2",{id:"querying-deploys"},"Querying Deploys"),(0,o.kt)("p",null,"Once you submit a deploy to the network, you can check its execution status using ",(0,o.kt)("inlineCode",{parentName:"p"},"get-deploy"),". If the ",(0,o.kt)("inlineCode",{parentName:"p"},"execution_results")," in the output are null, the transaction has not run yet. Note that transactions are finalized upon execution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy \\\n      --id 2 \\\n      --node-address http://<node-ip-address>:7777 \\\n      <deploy-hash>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - JSON-RPC identifier, applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deploy-hash")," - Hex-encoded hash of the deploy")))}b.isMDXComponent=!0}}]);