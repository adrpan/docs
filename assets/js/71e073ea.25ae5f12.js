"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7059],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,d=u["".concat(i,".").concat(h)]||u[h]||_[h]||s;return n?a.createElement(d,c(c({ref:t},p),{},{components:n})):a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,c[1]=o;for(var l=2;l<s;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),c=["components"],o={title:"Testing Guide",slug:"/resources/tokens/cep18/tests"},i="Testing Framework for CEP-18",l={unversionedId:"resources/tokens/cep18/tests",id:"resources/tokens/cep18/tests",title:"Testing Guide",description:"The testing framework in this tutorial uses the Casper engine test support crate for testing the contract implementation against the Casper execution environment.",source:"@site/source/docs/casper/resources/tokens/cep18/tests.md",sourceDirName:"resources/tokens/cep18",slug:"/resources/tokens/cep18/tests",permalink:"/resources/tokens/cep18/tests",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/tokens/cep18/tests.md",tags:[],version:"current",lastUpdatedAt:1705671904,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{title:"Testing Guide",slug:"/resources/tokens/cep18/tests"},sidebar:"resources",previous:{title:"CEP-18 Transfers",permalink:"/resources/tokens/cep18/transfer"},next:{title:"Introduction",permalink:"/resources/tokens/cep78/introduction"}},p={},u=[{value:"Configuring the Test Package",id:"configuring-the-test-package",level:2},{value:"Testing Logic",id:"testing-logic",level:2},{value:"Setting up the Testing Context",id:"setting-up-the-testing-context",level:3},{value:"Installing the Contract",id:"installing-the-contract",level:3},{value:"Creating Helper Functions",id:"creating-helper-functions",level:3},{value:"Creating Unit Tests",id:"creating-unit-tests",level:2},{value:"Running the Tests",id:"running-the-tests",level:2}],_={toc:u},h="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,s.kt)(h,(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing-framework-for-cep-18"},"Testing Framework for CEP-18"),(0,s.kt)("p",null,"The testing framework in this tutorial uses the ",(0,s.kt)("a",{parentName:"p",href:"https://crates.io/crates/casper-engine-test-support"},"Casper engine test support")," crate for testing the contract implementation against the Casper execution environment."),(0,s.kt)("p",null,"The following section reviews the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/tree/master/tests"},"GitHub testing folder"),", which creates a testing framework for the Casper ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18"},"Fungible Token")," project. You can find more details about testing Casper contracts ",(0,s.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/testing-contracts/"},"here"),"."),(0,s.kt)("p",null,"The following is an example of a complete test expecting a failed transfer:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[should_panic(expected = "ApiError::User(65534) [131070]")]\n#[test]\nfn should_not_transfer_with_insufficient_balance() {\n    let mut fixture = TestFixture::install_contract();\n\n    let initial_ali_balance = fixture.balance_of(Key::from(fixture.ali)).unwrap();\n    assert_eq!(fixture.balance_of(Key::from(fixture.bob)), None);\n\n    fixture.transfer(\n        Key::from(fixture.bob),\n        initial_ali_balance + U256::one(),\n        fixture.ali,\n    );\n}\n')),(0,s.kt)("p",null,"To build and run the tests, issue the following command in the project folder, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18"},"cep18"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,s.kt)("p",null,"The project contains a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/dev/Makefile"},"Makefile"),", which is a custom build script that compiles the contract before running tests in ",(0,s.kt)("em",{parentName:"p"},"release")," mode. Then, the script copies the ",(0,s.kt)("inlineCode",{parentName:"p"},"contract.wasm")," file to the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/wasm")," directory. In practice, you only need to run the ",(0,s.kt)("inlineCode",{parentName:"p"},"make test")," command during development."),(0,s.kt)("h2",{id:"configuring-the-test-package"},"Configuring the Test Package"),(0,s.kt)("p",null,"In this project, we define a ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," package using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/dev/tests/Cargo.toml"},"tests/Cargo.toml")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'[package]\nname = "tests"\nversion = "1.0.0"\n...\n\n[dependencies]\ncasper-types = "2.0.0"\ncasper-engine-test-support = "4.0.0"\ncasper-execution-engine = "4.0.0"\nonce_cell = "1.16.0"\n\n[lib]\nname = "tests"\n...\n')),(0,s.kt)("h2",{id:"testing-logic"},"Testing Logic"),(0,s.kt)("p",null,"In Github, you will find an ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/tree/dev/cep18"},"example")," containing a Casper Fungible Token ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/dev/cep18/src/main.rs"},"contract")," implementation with the corresponding ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/tree/dev/tests/src"},"tests"),". The tests follow this sequence:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#setting-up-the-testing-context"},"Step 1")," - Specify the starting state of the blockchain."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#deploying-the-contract"},"Step 2")," - Deploy the compiled contract to the blockchain and query it."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#invoking-contract-entrypoints"},"Step 3")," - Create additional deploys for calling each of the entrypoints in the contract.")),(0,s.kt)("p",null,"The test fixture accomplishes these steps by simulating a real-world deploy that stores the contract on the blockchain and then invoking the contract's entrypoints."),(0,s.kt)("h3",{id:"setting-up-the-testing-context"},"Setting up the Testing Context"),(0,s.kt)("p",null,"The code in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/tree/dev/tests/src/utility"},"utility directory")," initializes the blockchain's ",(0,s.kt)("a",{parentName:"p",href:"/concepts/glossary/G/#global-state"},"global state")," with all the data and entrypoints the smart contract needs."),(0,s.kt)("p",null,"Expand the example below to see a subset of the required constants for this project. The testing framework defines constants via the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/constants.rs"},(0,s.kt)("inlineCode",{parentName:"a"},"constants.rs"))," file within the ",(0,s.kt)("inlineCode",{parentName:"p"},"utility")," directory. For the most up-to-date version of the code, visit ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18"},"GitHub"),"."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Example of required constants"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"// File https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/installer_request_builders.rs\n\nuse casper_engine_test_support::{\n    ExecuteRequestBuilder, InMemoryWasmTestBuilder, DEFAULT_ACCOUNT_ADDR,\n    MINIMUM_ACCOUNT_CREATION_BALANCE, PRODUCTION_RUN_GENESIS_REQUEST,\n};\nuse casper_execution_engine::core::engine_state::ExecuteRequest;\nuse casper_types::{\n    account::AccountHash, bytesrepr::FromBytes, runtime_args, system::mint, CLTyped, ContractHash, ContractPackageHash, Key, RuntimeArgs, U256,\n};\n\nuse crate::utility::constants::{\n    ALLOWANCE_AMOUNT_1, ALLOWANCE_AMOUNT_2, TOTAL_SUPPLY_KEY, TRANSFER_AMOUNT_1, TRANSFER_AMOUNT_2,\n};\n\nuse super::constants::{\n    ACCOUNT_1_ADDR, ACCOUNT_2_ADDR, ARG_ADDRESS, ARG_AMOUNT, ARG_DECIMALS, ARG_NAME, ARG_OWNER, ARG_RECIPIENT, ARG_SPENDER, ARG_SYMBOL, ARG_TOKEN_CONTRACT, ARG_TOTAL_SUPPLY, CEP18_CONTRACT_WASM, CEP18_TEST_CONTRACT_KEY, CEP18_TEST_CONTRACT_WASM, CEP18_TOKEN_CONTRACT_KEY, CHECK_ALLOWANCE_OF_ENTRYPOINT, CHECK_BALANCE_OF_ENTRYPOINT,CHECK_TOTAL_SUPPLY_ENTRYPOINT, METHOD_APPROVE, METHOD_APPROVE_AS_STORED_CONTRACT,METHOD_TRANSFER, METHOD_TRANSFER_AS_STORED_CONTRACT, RESULT_KEY, TOKEN_DECIMALS, TOKEN_NAME, TOKEN_SYMBOL, TOKEN_TOTAL_SUPPLY,\n};\n"))),(0,s.kt)("h3",{id:"installing-the-contract"},"Installing the Contract"),(0,s.kt)("p",null,"The next step is to define a struct that has its own virtual machine (VM) instance and implements the Fungible Token entrypoints. This struct holds a ",(0,s.kt)("inlineCode",{parentName:"p"},"TestContext")," of its own. The ",(0,s.kt)("em",{parentName:"p"},"contract_hash")," and the ",(0,s.kt)("em",{parentName:"p"},"session_code")," won\u2019t change after the contract is deployed, so it is good to keep them handy."),(0,s.kt)("p",null,"This code snippet builds the context and includes the compiled contract ",(0,s.kt)("em",{parentName:"p"},".wasm")," binary being tested. The ",(0,s.kt)("inlineCode",{parentName:"p"},"TestContext")," struct creates a new instance of the ",(0,s.kt)("inlineCode",{parentName:"p"},"cep18_token")," with several test accounts."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note"),": These accounts have a positive initial balance."),(0,s.kt)("p",null,"The full and most recent code implementation is available on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/installer_request_builders.rs"},"GitHub"),"."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Example of a CEP-18 token in a test"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'// File https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/installer_request_builders.rs\n\n// Creating the `TestContext` struct.\n\npub(crate) struct TestContext {\npub(crate) cep18_token: ContractHash,\npub(crate) cep18_test_contract_package: ContractPackageHash,\n}\n\n// Setting up the test instance of CEP-18.\n\npub(crate) fn setup() -> (InMemoryWasmTestBuilder, TestContext) {\n    setup_with_args(runtime_args! {\n        ARG_NAME => TOKEN_NAME,\n        ARG_SYMBOL => TOKEN_SYMBOL,\n        ARG_DECIMALS => TOKEN_DECIMALS,\n        ARG_TOTAL_SUPPLY => U256::from(TOKEN_TOTAL_SUPPLY),\n    })\n}\n\n// Establishing test accounts.\n\npub(crate) fn setup_with_args(install_args: RuntimeArgs) -> (InMemoryWasmTestBuilder, TestContext) {\n    let mut builder = InMemoryWasmTestBuilder::default();\n    builder.run_genesis(&PRODUCTION_RUN_GENESIS_REQUEST);\n\n    let id: Option<u64> = None;\n    let transfer_1_args = runtime_args! {\n        mint::ARG_TARGET => *ACCOUNT_1_ADDR,\n        mint::ARG_AMOUNT => MINIMUM_ACCOUNT_CREATION_BALANCE,\n        mint::ARG_ID => id,\n    };\n    let transfer_2_args = runtime_args! {\n        mint::ARG_TARGET => *ACCOUNT_2_ADDR,\n        mint::ARG_AMOUNT => MINIMUM_ACCOUNT_CREATION_BALANCE,\n        mint::ARG_ID => id,\n    };\n\n    let transfer_request_1 =\n        ExecuteRequestBuilder::transfer(*DEFAULT_ACCOUNT_ADDR, transfer_1_args).build();\n    let transfer_request_2 =\n        ExecuteRequestBuilder::transfer(*DEFAULT_ACCOUNT_ADDR, transfer_2_args).build();\n\n    // Installing the test version of CEP-18 with the default account.\n\n    let install_request_1 =\n        ExecuteRequestBuilder::standard(*DEFAULT_ACCOUNT_ADDR, CEP18_CONTRACT_WASM, install_args)\n            .build();\n\n    let install_request_2 = ExecuteRequestBuilder::standard(\n        *DEFAULT_ACCOUNT_ADDR,\n        CEP18_TEST_CONTRACT_WASM,\n        RuntimeArgs::default(),\n    )\n    .build();\n\n    builder.exec(transfer_request_1).expect_success().commit();\n    builder.exec(transfer_request_2).expect_success().commit();\n    builder.exec(install_request_1).expect_success().commit();\n    builder.exec(install_request_2).expect_success().commit();\n\n    let account = builder\n        .get_account(*DEFAULT_ACCOUNT_ADDR)\n        .expect("should have account");\n\n    let cep18_token = account\n        .named_keys()\n        .get(CEP18_TOKEN_CONTRACT_KEY)\n        .and_then(|key| key.into_hash())\n        .map(ContractHash::new)\n        .expect("should have contract hash");\n\n    let cep18_test_contract_package = account\n        .named_keys()\n        .get(CEP18_TEST_CONTRACT_KEY)\n        .and_then(|key| key.into_hash())\n        .map(ContractPackageHash::new)\n        .expect("should have contract package hash");\n\n    let test_context = TestContext {\n        cep18_token,\n        cep18_test_contract_package,\n    };\n\n    (builder, test_context)\n}\n'))),(0,s.kt)("h3",{id:"creating-helper-functions"},"Creating Helper Functions"),(0,s.kt)("p",null,"The previous step has simulated sending a real deploy on the network. The next code snippet in ",(0,s.kt)("inlineCode",{parentName:"p"},"installer_request_builders.rs")," defines helper functions that will be used throughout the testing framework:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cep18_check_total_supply")," - A function for testing the total supply of the CEP-18 contract instance."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cep18_check_balance_of")," - A function for checking an account's balance of CEP-18 tokens."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cep18_check_allowance_of")," - A function for checking an account's spending allowance from another account's balance.")),(0,s.kt)("p",null,"These are followed by functions that check specific aspects of the CEP-18 contract. These include ",(0,s.kt)("inlineCode",{parentName:"p"},"test_cep18_transfer"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"make_cep18_approve_request")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"test_approve_for"),"."),(0,s.kt)("p",null,"The following code snippet is an example function that tests the ability to transfer CEP-18 tokens from the default address to the two other addresses established in ",(0,s.kt)("a",{parentName:"p",href:"#installing-the-contract-deploying-the-contract"},"contract installation"),":"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Example helper function"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"// File https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/installer_request_builders.rs\n\npub(crate) fn test_cep18_transfer(\n    builder: &mut InMemoryWasmTestBuilder,\n    test_context: &TestContext,\n    sender1: Key,\n    recipient1: Key,\n    sender2: Key,\n    recipient2: Key) {\n    let TestContext { cep18_token, .. } = test_context;\n\n    // Defining the amount to be transferred to each account.\n\n    let transfer_amount_1 = U256::from(TRANSFER_AMOUNT_1);\n    let transfer_amount_2 = U256::from(TRANSFER_AMOUNT_2);\n\n    // Checking the pre-existing balances of the default address and the two receiving addresses.\n\n    let sender_balance_before = cep18_check_balance_of(builder, cep18_token, sender1);\n    assert_ne!(sender_balance_before, U256::zero());\n\n    let account_1_balance_before = cep18_check_balance_of(builder, cep18_token, recipient1);\n    assert_eq!(account_1_balance_before, U256::zero());\n\n    let account_2_balance_before = cep18_check_balance_of(builder, cep18_token, recipient1);\n    assert_eq!(account_2_balance_before, U256::zero());\n\n    // Creating the first transfer request.\n\n    let token_transfer_request_1 =\n        make_cep18_transfer_request(sender1, cep18_token, recipient1, transfer_amount_1);\n\n    builder\n        .exec(token_transfer_request_1)\n        .expect_success()\n        .commit();\n\n    // Checking the prior balance against the new balance to ensure the transfer occurred correctly.\n\n    let account_1_balance_after = cep18_check_balance_of(builder, cep18_token, recipient1);\n    assert_eq!(account_1_balance_after, transfer_amount_1);\n    let account_1_balance_before = account_1_balance_after;\n\n    let sender_balance_after = cep18_check_balance_of(builder, cep18_token, sender1);\n    assert_eq!(\n        sender_balance_after,\n        sender_balance_before - transfer_amount_1\n    );\n    let sender_balance_before = sender_balance_after;\n\n    // Creating the second transfer request.\n\n    let token_transfer_request_2 =\n        make_cep18_transfer_request(sender2, cep18_token, recipient2, transfer_amount_2);\n\n    builder\n        .exec(token_transfer_request_2)\n        .expect_success()\n        .commit();\n\n    // Checking prior balances against new balances.\n\n    let sender_balance_after = cep18_check_balance_of(builder, cep18_token, sender1);\n    assert_eq!(sender_balance_after, sender_balance_before);\n\n    let account_1_balance_after = cep18_check_balance_of(builder, cep18_token, recipient1);\n    assert!(account_1_balance_after < account_1_balance_before);\n    assert_eq!(\n        account_1_balance_after,\n        transfer_amount_1 - transfer_amount_2\n    );\n\n    let account_2_balance_after = cep18_check_balance_of(builder, cep18_token, recipient2);\n    assert_eq!(account_2_balance_after, transfer_amount_2);\n}\n"))),(0,s.kt)("h2",{id:"creating-unit-tests"},"Creating Unit Tests"),(0,s.kt)("p",null,"Within this testing context, the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/tree/dev/tests/src"},(0,s.kt)("inlineCode",{parentName:"a"},"tests")," directory")," includes a variety of unit tests, which verify the contract code by invoking the functions defined in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/installer_request_builders.rs"},"installer_request_builders.rs")," file."),(0,s.kt)("p",null,"The example below shows one of the tests. Visit ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/tree/dev/tests/src"},"GitHub")," to find all the available tests."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Example test querying token properties"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"// File https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/install.rs\n\nuse casper_engine_test_support::DEFAULT_ACCOUNT_ADDR;\nuse casper_types::{Key, U256};\n\nuse crate::utility::{\n    constants::{\n        ALLOWANCES_KEY, BALANCES_KEY, DECIMALS_KEY, NAME_KEY, SYMBOL_KEY, TOKEN_DECIMALS,\n        TOKEN_NAME, TOKEN_SYMBOL, TOKEN_TOTAL_SUPPLY, TOTAL_SUPPLY_KEY,\n    },\n    installer_request_builders::{\n        cep18_check_balance_of, invert_cep18_address, setup, TestContext,\n    },\n};\n\n#[test]\nfn should_have_queryable_properties() {\n    let (mut builder, TestContext { cep18_token, .. }) = setup();\n\n    let name: String = builder.get_value(cep18_token, NAME_KEY);\n    assert_eq!(name, TOKEN_NAME);\n\n    let symbol: String = builder.get_value(cep18_token, SYMBOL_KEY);\n    assert_eq!(symbol, TOKEN_SYMBOL);\n\n    let decimals: u8 = builder.get_value(cep18_token, DECIMALS_KEY);\n    assert_eq!(decimals, TOKEN_DECIMALS);\n\n    let total_supply: U256 = builder.get_value(cep18_token, TOTAL_SUPPLY_KEY);\n    assert_eq!(total_supply, U256::from(TOKEN_TOTAL_SUPPLY));\n\n    let owner_key = Key::Account(*DEFAULT_ACCOUNT_ADDR);\n\n    let owner_balance = cep18_check_balance_of(&mut builder, &cep18_token, owner_key);\n    assert_eq!(owner_balance, total_supply);\n\n    let contract_balance =\n        cep18_check_balance_of(&mut builder, &cep18_token, Key::Hash(cep18_token.value()));\n    assert_eq!(contract_balance, U256::zero());\n\n    // Ensures that Account and Contract ownership is respected and we're not keying ownership under\n    // the raw bytes regardless of variant.\n    let inverted_owner_key = invert_cep18_address(owner_key);\n    let inverted_owner_balance =\n        cep18_check_balance_of(&mut builder, &cep18_token, inverted_owner_key);\n    assert_eq!(inverted_owner_balance, U256::zero());\n}\n"))),(0,s.kt)("h2",{id:"running-the-tests"},"Running the Tests"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/lib.rs"},"lib.rs")," file is configured to run the example integration tests via the ",(0,s.kt)("inlineCode",{parentName:"p"},"make test")," command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[cfg(test)]\nmod allowance;\n#[cfg(test)]\nmod install;\n#[cfg(test)]\nmod mint_and_burn;\n#[cfg(test)]\nmod transfer;\n#[cfg(test)]\nmod utility;\n")),(0,s.kt)("p",null,"To run the tests, navigate to the parent ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18"},"cep18 directory")," and run the command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,s.kt)("p",null,"This example uses ",(0,s.kt)("inlineCode",{parentName:"p"},"bash"),". If you are using a Rust IDE, you need to configure it to run the tests."))}d.isMDXComponent=!0}}]);