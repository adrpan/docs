"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7207],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1669:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=n(4996),s=["components"],l={},c="Delegation Details",p={unversionedId:"concepts/economics/delegation",id:"concepts/economics/delegation",title:"Delegation Details",description:"This section provides a detailed explanation of the delegation cost mechanism, how the gas cost relates with delegations, where to find the details etc. Please note that the cost amounts are likely to change with time and you may have to check the latest release details to get the most up-to-date and accurate details.",source:"@site/source/docs/casper/concepts/economics/delegation.md",sourceDirName:"concepts/economics",slug:"/concepts/economics/delegation",permalink:"/concepts/economics/delegation",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/economics/delegation.md",tags:[],version:"current",lastUpdatedAt:1681154268,formattedLastUpdatedAt:"Apr 10, 2023",frontMatter:{},sidebar:"concepts",previous:{title:"Staking",permalink:"/staking"},next:{title:"Appendix",permalink:"/glossary"}},u={},d=[{value:"Delegation Cost",id:"delegation-cost",level:2},{value:"Delegation Fees",id:"delegation-fees",level:3},{value:"First-time Delegation",id:"first-time-delegation",level:3}],h={toc:d},m="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)(m,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"delegation-details"},"Delegation Details"),(0,i.kt)("p",null,"This section provides a detailed explanation of the delegation cost mechanism, how the gas cost relates with delegations, where to find the details etc. Please note that the cost amounts are likely to change with time and you may have to check the latest release details to get the most up-to-date and accurate details."),(0,i.kt)("h2",{id:"delegation-cost"},"Delegation Cost"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How much does delegation cost?")),(0,i.kt)("p",null,"The delegation cost is defined in the chainspec.toml file for each Casper network. In this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/release-1.3.2/resources/production/chainspec.toml"},"example chainspec"),", the delegation is set to cost 2.5 CSPR. However, ",(0,i.kt)("inlineCode",{parentName:"p"},"when you perform the delegation, you see that it costs a little more")," than what is specified in the chainspec. Let\u2019s discuss why this happens."),(0,i.kt)("p",null,"When you delegate, the system automatically charges some gas to set up related data in the global state of the network to track your delegation. This cost is addition to the delegation cost defined in the chainspec file."),(0,i.kt)("p",null,"For example, the chainspec file in release 1.3.2 will contain the following information. This is how the delegation cost is defined in the chainspec.toml file of a Casper network."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,r.Z)("/image/economic-delegationCost.png"),alt:"cost",width:"400",class:"center"})),(0,i.kt)("p",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 1"),": Delegation cost is defined in the chainspec.toml file of a Casper network")),(0,i.kt)("h3",{id:"delegation-fees"},"Delegation Fees"),(0,i.kt)("p",null,"Delegation fees may change over time, so, it is essential to stay up to date. To do so, select the latest release in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node"},"Github"),", and navigate to the chainspec.toml file."),(0,i.kt)("p",null,"If you are unsure about anything, please join the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/PjAQVXRx4Y"},"Discord channel")," to ask us questions."),(0,i.kt)("h3",{id:"first-time-delegation"},"First-time Delegation"),(0,i.kt)("p",null,"If you perform the delegation for the first time, the system charges some gas to create a purse to hold the delegated tokens."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example:")," The system can charge 0.5 CSPR in addition to the base delegation fee of 2.5 CSPR, resulting in a delegation cost of 3 CSPR on ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Mainnet")),(0,i.kt)("p",null,"It is essential to have enough funds in your account's main purse when you set up a delegation transaction. Otherwise, the transaction will fail, and you will lose the transfer cost. For example, if you have 200 CSPR in your purse, delegate at most 197 CSPR and leave at least 3 CSPR for the delegation cost. Another option is to delegate 195 CSPR and leave some additional buffer."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transaction Fee")),(0,i.kt)("p",null,"As a result, when performing a ",(0,i.kt)("a",{parentName:"p",href:"/developers/cli/delegate"},"delegation using the command line"),", we recommend you specify a little more than the base transaction payment to ensure that the transaction will go through without failure."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,r.Z)("/image/economic-delegationDetails.png"),alt:"details",width:"400"})," "),(0,i.kt)("p",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 2")," : On Testnet or Mainnet, the transaction fee for a delegation is a little bit higher than 2.5 CSPR ")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))),(0,i.kt)("p",null,"Transaction costs depend on each Casper network and the cost tables defined in the chainspec. The examples you will find in the documentation are general."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Lastly, we recommend that you try out delegations on the ",(0,i.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/%3E"},"Casper Testnet")," before making actual transactions on the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Casper Mainnet"),". This way, you will understand the costs involved in delegating tokens."))}g.isMDXComponent=!0}}]);