"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1132],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6665:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=(a(4996),["components"]),s={title:"Getting Started with Rust"},l="Getting Started with Rust Casper Contracts",c={unversionedId:"developers/writing-onchain-code/getting-started",id:"developers/writing-onchain-code/getting-started",title:"Getting Started with Rust",description:"This guide covers additional prerequisites for writing your first Casper smart contract. You will also build a sample smart contract and run a few basic tests on it on your local machine.",source:"@site/source/docs/casper/developers/writing-onchain-code/getting-started.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/getting-started",permalink:"/developers/writing-onchain-code/getting-started",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/writing-onchain-code/getting-started.md",tags:[],version:"current",lastUpdatedAt:1705671904,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{title:"Getting Started with Rust"},sidebar:"developers",previous:{title:"Introduction",permalink:"/writing-contracts"},next:{title:"Getting Started with AssemblyScript",permalink:"/developers/writing-onchain-code/assembly-script"}},p={},u=[{value:"Creating a Project",id:"creating-a-project",level:2},{value:"Using the nightly toolchain",id:"using-the-nightly-toolchain",level:3},{value:"Available Casper Rust crates",id:"available-casper-rust-crates",level:3},{value:"Available API documentation",id:"available-api-documentation",level:3},{value:"Compiling to Wasm",id:"compiling-to-wasm",level:2},{value:"Testing the Contract",id:"test-the-contract",level:2},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"Rust Resources",id:"rust-resources",level:2}],m={toc:u},h="wrapper";function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-rust-casper-contracts"},"Getting Started with Rust Casper Contracts"),(0,o.kt)("p",null,"This guide covers additional prerequisites for writing your first Casper smart contract. You will also build a sample smart contract and run a few basic tests on it on your local machine."),(0,o.kt)("p",null,"Casper's blockchain is built upon the Rust programming language and compiles to WebAssembly. This guide will walk you through the steps to write your first contract, assuming you have already set up your development environment as described ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites"},"here"),"."),(0,o.kt)("h2",{id:"creating-a-project"},"Creating a Project"),(0,o.kt)("p",null,"You can create a new sample project very easily with the ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo casper")," crate. For example, let's say that I want to create a project named ",(0,o.kt)("strong",{parentName:"p"},"my-project")," for this tutorial (you can choose a different name if you wish), then I can simply run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo casper my-project\n")),(0,o.kt)("p",null,"If you look inside the newly-created ",(0,o.kt)("em",{parentName:"p"},"my-project")," folder, you will find two crates: ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tests"),". This is a complete basic smart contract that saves a value, passed as an argument, on the blockchain. The ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," crate provides a runtime environment of the Casper virtual machine, and a basic smart contract test."),(0,o.kt)("h3",{id:"using-the-nightly-toolchain"},"Using the nightly toolchain"),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"my-project")," folder and open the ",(0,o.kt)("inlineCode",{parentName:"p"},"rust-toolchain")," file. You will notice that the file's contents specify a nightly version of Rust. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nightly-2022-08-03\n")),(0,o.kt)("p",null,"Having the latest nightly toolchain to develop smart contracts in Rust would be best. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/concepts/channels.html"},"Rust Documentation on Channels")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/concepts/toolchains.html"},"Rust Documentation on Toolchains")," for further information."),(0,o.kt)("p",null,"As shown in this example, we recommend setting up the ",(0,o.kt)("inlineCode",{parentName:"p"},"rust-toolchain")," file in your project's top-level directory."),(0,o.kt)("p",null,"You can also install the nightly Rust toolchain with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup toolchain install nightly\n")),(0,o.kt)("h3",{id:"available-casper-rust-crates"},"Available Casper Rust crates"),(0,o.kt)("p",null,"To support smart contract development with Rust, the following crates are published:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-contract"},"casper-contract")," - a library supporting communication with the blockchain. This is the main library you will need to write smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-engine-test-support"},"casper-engine-test-support")," - a virtual machine against which you can test your smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-types"},"casper-types")," - a library with types we use across the Rust ecosystem.")),(0,o.kt)("p",null,"A crate is a compilation unit that can be compiled into a binary or a library."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For a comprehensive list of crates, visit the ",(0,o.kt)("a",{parentName:"p",href:"/developers/essential-crates"},"Essential Casper Crates")," page.")),(0,o.kt)("h3",{id:"available-api-documentation"},"Available API documentation"),(0,o.kt)("p",null,"Each of the Casper crates comes with API documentation and examples for each function, located at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/releases/search?query=casper"},"https://docs.rs"),". The latest contract API documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/"},"here"),"."),(0,o.kt)("h2",{id:"compiling-to-wasm"},"Compiling to Wasm"),(0,o.kt)("p",null,"The Casper blockchain uses WebAssembly (Wasm) in its runtime environment. Compilation targets for Wasm are available for Rust, giving developers access to all the Rust ecosystem tools when developing smart contracts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note: Wasm allows for the use of other languages, including but not limited to: C/C++, C#, Go, Julia, Lobster and ZIG.")),(0,o.kt)("p",null,"To compile the smart contract into Wasm, go into the ",(0,o.kt)("em",{parentName:"p"},"my-project")," folder, and run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-project\nmake prepare\nmake build-contract\n")),(0,o.kt)("p",null,"You can find the compiled contract on this path: ",(0,o.kt)("inlineCode",{parentName:"p"},"my-project/contract/target/wasm32-unknown-unknown/release/contract.wasm"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linting")),(0,o.kt)("p",null,"Casper contracts support Rust tooling such as ",(0,o.kt)("inlineCode",{parentName:"p"},"clippy")," for linting contracts. Feel free to use them! You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"make check-lint")," command for linting your contract. Run this command inside the ",(0,o.kt)("em",{parentName:"p"},"my-project")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make check-lint\n")),(0,o.kt)("h2",{id:"test-the-contract"},"Testing the Contract"),(0,o.kt)("p",null,"In addition to creating the contract, the Casper crate also automatically created sample tests in the ",(0,o.kt)("em",{parentName:"p"},"my-project/tests")," folder."),(0,o.kt)("p",null,"The Casper local environment provides a virtual machine against which you can run your contract for testing. When you run the test crate, it will automatically build the smart contract in release mode and then run a series of tests against it in the Casper runtime environment. The custom build script is named ",(0,o.kt)("em",{parentName:"p"},"build.rs")," if you are interested in looking more into it."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Since the test script automatically builds the contract, during development you only need to run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"make test")," without the need for ",(0,o.kt)("inlineCode",{parentName:"p"},"make build-contract"),".")),(0,o.kt)("p",null,"A successful test run indicates that your smart contract environment is set up correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,o.kt)("p",null,"After the compilation finishes, the test should run and you should see output similar to this message in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"running 2 tests\ntest tests::should_error_on_missing_runtime_arg ... ok\ntest tests::should_store_hello_world ... ok\n\ntest result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.09s\n")),(0,o.kt)("p",null,"As a brief example, open up ",(0,o.kt)("em",{parentName:"p"},"my-project/contract/src/main.rs")," in your editor, modify the ",(0,o.kt)("em",{parentName:"p"},"KEY_NAME")," value in the contract, and then rerun the ",(0,o.kt)("inlineCode",{parentName:"p"},"make test")," command. You should observe that the smart contract recompiles and the test fails now."),(0,o.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,o.kt)("p",null,"The following video tutorial complements this guide."),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed/aIhA5fPIHus",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h2",{id:"rust-resources"},"Rust Resources"),(0,o.kt)("p",null,"These Rust resources are excellent and we highly recommend them:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/foreword.html"},"https://doc.rust-lang.org/book/foreword.html")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://rustwasm.github.io/docs/book/"},"https://rustwasm.github.io/docs/book/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/stable/rust-by-example"},"https://doc.rust-lang.org/stable/rust-by-example"))))}d.isMDXComponent=!0}}]);