"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9352],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4701:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},c="Writing Session Code",l={unversionedId:"developers/writing-onchain-code/writing-session-code",id:"developers/writing-onchain-code/writing-session-code",title:"Writing Session Code",description:"This section explains how to write session code. To review the definition of session code and the differences between session code and contract code, see Comparing Session Code and Contract Code. Session code can be written in any programming language that compiles to Wasm. However, the examples in this topic use Rust.",source:"@site/source/docs/casper/developers/writing-onchain-code/writing-session-code.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/writing-session-code",permalink:"/developers/writing-onchain-code/writing-session-code",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/writing-onchain-code/writing-session-code.md",tags:[],version:"current",lastUpdatedAt:1705671904,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Contracts and Session Code",permalink:"/developers/writing-onchain-code/contract-vs-session"},next:{title:"Testing Session Code",permalink:"/developers/writing-onchain-code/testing-session-code"}},p={},u=[{value:"Creating the Directory Structure",id:"directory-structure",level:2},{value:"Example 1: Writing Session Code",id:"writing-session-code",level:2},{value:"Dependencies in <code>Cargo.toml</code>",id:"dependencies-in-cargotoml",level:3},{value:"Updating the <code>main.rs</code> File",id:"updating-the-mainrs-file",level:3},{value:"Example 2: Calling a Contract with Session Code",id:"calling-contracts-with-session-code",level:2},{value:"Example 3: Transfers using Session Code",id:"transfers-using-session-code",level:2},{value:"Compiling Session Code",id:"compiling-session-code",level:2},{value:"Executing Session Code",id:"executing-session-code",level:2},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"writing-session-code"},"Writing Session Code"),(0,o.kt)("p",null,"This section explains how to write session code. To review the definition of session code and the differences between session code and contract code, see ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/contract-vs-session#what-is-session-code"},"Comparing Session Code and Contract Code"),". Session code can be written in any programming language that compiles to Wasm. However, the examples in this topic use Rust."),(0,o.kt)("h2",{id:"directory-structure"},"Creating the Directory Structure"),(0,o.kt)("p",null,"For writing session code, we use the same project structure used for writing contracts, described ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract#directory-structure"},"here"),"."),(0,o.kt)("h2",{id:"writing-session-code"},"Example 1: Writing Session Code"),(0,o.kt)("p",null,"The following steps illustrate the process of writing session code using an example repository containing sample session code for configuring an account: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig/"},"https://github.com/casper-ecosystem/two-party-multi-sig/"),". The sample code adds an associated key to the account and updates the action thresholds. Remember that an ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#accounts-head"},"Account")," on a Casper network can add associated accounts and set up a multi-signature scheme for deploys. To follow along, clone the repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-ecosystem/two-party-multi-sig/\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before executing session code, ensure that you know exactly what the session code is doing. If you don't know what it is meant for, it could be doing something malicious.")),(0,o.kt)("h3",{id:"dependencies-in-cargotoml"},"Dependencies in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Cargo.toml")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file includes the dependencies and versions the session code requires. At a minimum, you need to import the latest versions of the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/"},"casper-contract")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/"},"casper-types")," crates. The following dependencies and version numbers are only examples and must be adjusted based on your requirements."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'casper-contract = "1.4.4"')," - Provides the SDK for the execution engine (EE). The latest version of the crate is published ",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-contract"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'casper-types = "1.5.0"')," - Includes types shared by many Casper crates for use on a Casper network. This crate is necessary for the EE to understand and interpret the session code. The latest version of the crate is published ",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-types"},"here"),".")),(0,o.kt)("h3",{id:"updating-the-mainrs-file"},"Updating the ",(0,o.kt)("inlineCode",{parentName:"h3"},"main.rs")," File"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract/src/main.rs")," file that contains the sample session code. Notice these directives at the top of the file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#![no_std]")," - Specifies not to import the standard library."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#![no_main]")," - Indicates the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," function is not required since the session code has only one entry point as the ",(0,o.kt)("inlineCode",{parentName:"li"},"call")," function.")),(0,o.kt)("p",null,"Next, review the imported crates and other required libraries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#![no_std]\n#![no_main]\n\nuse casper_contract::contract_api::{account, runtime};\nuse casper_contract::unwrap_or_revert::UnwrapOrRevert;\nuse casper_types::account::{AccountHash, ActionType, Weight};\n")),(0,o.kt)("p",null,"After the imported libraries, we usually find the constants."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'const ASSOCIATED_ACCOUNT: &str = "deployment-account";\n')),(0,o.kt)("p",null,"Next, we see the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function, the only entry point in this example session code. The ",(0,o.kt)("inlineCode",{parentName:"p"},"#[no_mangle]")," flag ensures that the function name is retained as a string in the Wasm binary. For session code, this flag retains the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," string and marks the entry point for the execution engine. Explore the call function details by opening the cloned project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\npub extern "C" fn call() {\n    // Open the repository for details\n}\n')),(0,o.kt)("p",null,"When compiled, the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function could be used from another library. For example, a C library could link to the resulting Wasm."),(0,o.kt)("h2",{id:"calling-contracts-with-session-code"},"Example 2: Calling a Contract with Session Code"),(0,o.kt)("p",null,"Another example of session code is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/master/counter-call/src/main.rs"},"counter-call/src/main.rs")," file, in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter"},"counter")," repository. This example shows how we commonly use session code to invoke logic stored within a smart contract. To follow along, clone the repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-ecosystem/counter/\n")),(0,o.kt)("p",null,"Observe how the project is set up and review the dependencies in the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter/counter-call/Cargo.toml")," file. Then, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter/counter-call/src/main.rs")," file containing the session code. Notice the directives at the top of the file, the required dependencies, and the declared constants."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function interacts with the contract's ",(0,o.kt)("inlineCode",{parentName:"p"},"counter_inc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"counter_get")," entry points. This is how the session's ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," entry point triggers the logic stored inside the counter contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    // Call the counter to get the current value.\n    let current_counter_value: u32 =\n        runtime::call_contract(contract_hash, COUNTER_GET, RuntimeArgs::new());\n\n    // Call the counter to increment the value.\n    let _: () = runtime::call_contract(contract_hash, COUNTER_INC, RuntimeArgs::new());\n")),(0,o.kt)("h2",{id:"transfers-using-session-code"},"Example 3: Transfers using Session Code"),(0,o.kt)("p",null,"In this example, we use session code to perform a transfer using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_from_purse_to_purse.html"},"transfer_from_purse_to_purse")," system function. The entire session code is available in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/67c9c9bb84fdfc3f2d12103e25f0058104342bc0/smart_contracts/contracts/bench/transfer-to-purse/src/main.rs#L14"},"GitHub"),", but this is the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\npub extern "C" fn call() {\n    let target_purse: URef = runtime::get_named_arg(ARG_TARGET_PURSE);\n    let amount: U512 = runtime::get_named_arg(ARG_AMOUNT);\n\n    let source_purse = account::get_main_purse();\n\n    system::transfer_from_purse_to_purse(source_purse, target_purse, amount, None)\n        .unwrap_or_revert();\n}\n')),(0,o.kt)("p",null,"Another system function is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_to_public_key.html"},"transfer_to_public_key"),". The full session code example is on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/67c9c9bb84fdfc3f2d12103e25f0058104342bc0/smart_contracts/contracts/client/transfer-to-public-key/src/main.rs#L16"},"GitHub"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\npub extern "C" fn call() {\n    let account_hash: PublicKey = runtime::get_named_arg(ARG_TARGET);\n    let transfer_amount: U512 = runtime::get_named_arg(ARG_AMOUNT);\n    system::transfer_to_public_key(account_hash, transfer_amount, None).unwrap_or_revert();\n}\n')),(0,o.kt)("p",null,"Other transfer functions are available here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_to_account.html"},"transfer_to_account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_from_purse_to_account.html"},"transfer_from_purse_to_account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/system/fn.transfer_from_purse_to_public_key.html"},"transfer_from_purse_to_public_key"))),(0,o.kt)("h2",{id:"compiling-session-code"},"Compiling Session Code"),(0,o.kt)("p",null,"Before running session code to interact with a contract or other entities on the network, you must compile it to Wasm. Run the following command in the directory hosting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file and ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release --target wasm32-unknown-unknown\n")),(0,o.kt)("p",null,"For the examples above, you may use the Makefiles provided:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make build-contract\n")),(0,o.kt)("h2",{id:"executing-session-code"},"Executing Session Code"),(0,o.kt)("p",null,"Before running session code on a live Casper network, test it as described ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/testing-session-code"},"here"),". You can also set up a local network using ",(0,o.kt)("a",{parentName:"p",href:"/developers/dapps/setup-nctl"},"NCTL")," for additional tests."),(0,o.kt)("p",null,"Session code can execute on a Casper network via a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/D#deploy"},"Deploy"),". All deploys can be broadly categorized as some unit of work that, when executed and committed, affects change to the network's global state."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites#the-casper-command-line-client"},"Casper command-line client")," and its ",(0,o.kt)("inlineCode",{parentName:"p"},"put-deploy")," command provide one way to execute session code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy \\\n    --node-address <HOST:PORT> \\\n    --chain-name <NETWORK-NAME> \\\n    --secret-key <PATH> \\\n    --payment-amount <PAYMENT-AMOUNT> \\\n    --session-path <SESSION-PATH> \\\n    --session-arg <"NAME:TYPE=\'VALUE\'" OR "NAME:TYPE=null">\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the deploy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chain-name")," - The network where the deploy should be sent. For Mainnet, use ",(0,o.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,o.kt)("em",{parentName:"li"},"casper-test"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payment-amount")," - Payment for the deploy in motes. The payment amount varies based on the deploy and network ",(0,o.kt)("a",{parentName:"li",href:"/concepts/glossary/C#chainspec"},"chainspec"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"session-path")," - Path to the contract Wasm, pointing to the compiled contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"session-arg")," - A named and typed argument passed to the Wasm code.")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," option to view an updated list of supported arguments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy --help\n")),(0,o.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,o.kt)("p",null,"The following brief video describes ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig/"},"sample session code")," for configuring an account."),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=4",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn to ",(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/testing-session-code"},"test session code")," using the Casper testing framework.")))}h.isMDXComponent=!0}}]);