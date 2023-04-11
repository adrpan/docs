"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1942],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2658:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={},l="Node Endpoints",p={unversionedId:"operators/setup/node-endpoints",id:"operators/setup/node-endpoints",title:"Node Endpoints",description:"As specified in the Network Requirements, a Casper node uses specific ports to communicate with client applications and other nodes on the network. Each node has an identity linked with an IP and port pair where the node is reachable. This address is also called an endpoint. The Network Communication page explains how the nodes connect and communicate securely. Node connections are established using TLS, presenting a client certificate to encrypt peer-to-peer communication.",source:"@site/source/docs/casper/operators/setup/node-endpoints.md",sourceDirName:"operators/setup",slug:"/operators/setup/node-endpoints",permalink:"/operators/setup/node-endpoints",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/setup/node-endpoints.md",tags:[],version:"current",lastUpdatedAt:1681154268,formattedLastUpdatedAt:"Apr 10, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Basic Node Configuration",permalink:"/operators/setup/basic-node-configuration"},next:{title:"Installing a Node",permalink:"/operators/setup/install-node"}},d={},c=[{value:"Default Networking Port: 35000",id:"35000",level:2},{value:"Default JSON-RPC HTTP Server Port: 7777",id:"7777",level:2},{value:"Default REST HTTP Server Port: 8888",id:"8888",level:2},{value:"Example usage",id:"example-usage",level:3},{value:"Default SSE HTTP Event Stream Server Port: 9999",id:"9999",level:2},{value:"Restricting Access for Private Networks",id:"restricting-access-for-private-networks",level:2},{value:"Summary of Related Links",id:"summary-of-related-links",level:2}],u={toc:c},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-endpoints"},"Node Endpoints"),(0,o.kt)("p",null,"As specified in the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/install-node#network-requirements"},"Network Requirements"),", a Casper node uses specific ports to communicate with client applications and other nodes on the network. Each node has an identity linked with an IP and port pair where the node is reachable. This address is also called an endpoint. The ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/p2p"},"Network Communication")," page explains how the nodes connect and communicate securely. Node connections are established using TLS, presenting a client certificate to encrypt peer-to-peer communication."),(0,o.kt)("p",null,"This document describes in more detail a Casper node's default endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#35000"},"Networking port: 35000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#7777"},"JSON-RPC HTTP server port: 7777")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#8888"},"REST HTTP server port: 8888")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#9999"},"SSE HTTP event stream server port: 9999"))),(0,o.kt)("p",null,"Node operators can modify a node's configuration options, including the port settings, by updating the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/basic-node-configuration#config-file"},"node's config.toml")," file. An example configuration file can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-protocol-release/blob/main/config/config-example.toml"},"here"),"."),(0,o.kt)("p",null,"The default endpoints for Mainnet and Testnet are open by default and are described below in more detail. If the node connects to a different network, the ports may differ depending on how the network was set up."),(0,o.kt)("h2",{id:"35000"},"Default Networking Port: 35000"),(0,o.kt)("p",null,"The configuration options for networking are under the ",(0,o.kt)("inlineCode",{parentName:"p"},"network")," section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"bind_address")," using port 35000 is the only port required to be open for the node to function. A Casper node taking part in the network should open connections to every other node it is aware of and has not blocked. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file, the setting is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"bind_address = '0.0.0.0:35000'\n")),(0,o.kt)("p",null,"If the networking port is closed, the node becomes unreachable, and the node won't be discoverable in the network. If this is a validator, it will face eviction. A read-only node will be considered to be offline."),(0,o.kt)("h2",{id:"7777"},"Default JSON-RPC HTTP Server Port: 7777"),(0,o.kt)("p",null,"The configuration options for the JSON-RPC HTTP server are under the ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc_server")," section in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," using port 7777 is the listening address for JSON-RPC HTTP server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"address = '0.0.0.0:7777'\n")),(0,o.kt)("p",null,"DApps would use this address to ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/"},"interact with the Casper JSON-RPC API"),". Users would use this address to ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/"},"interact with the network using CLI"),". Validators would use this address to ",(0,o.kt)("a",{parentName:"p",href:"/operators/becoming-a-validator/bonding#example-bonding-transaction"},"bond")," or ",(0,o.kt)("a",{parentName:"p",href:"/operators/becoming-a-validator/unbonding"},"unbond"),". If this port is closed, the requests coming to this port will not be served, but the node remains unaffected."),(0,o.kt)("h2",{id:"8888"},"Default REST HTTP Server Port: 8888"),(0,o.kt)("p",null,"The configuration options for the JSON-RPC HTTP server are under the ",(0,o.kt)("inlineCode",{parentName:"p"},"rest_server")," section in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," listing port 8888 is the listening address for the REST HTTP server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"address = '0.0.0.0:8888'\n")),(0,o.kt)("p",null,"Opening port 8888 is recommended but not required. This port allows the node to be included in the general network health metrics, thus giving a more accurate picture of overall network health. If this port is closed, the requests coming to this port will not be served, but the node remains unaffected."),(0,o.kt)("p",null,"One may use this port to ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/basic-node-configuration#trusted-hash-for-synchronizing"},"get a trusted hash"),", ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/upgrade#verifying-successful-staging"},"verify successful staging")," during an upgrade, or to ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/joining#step-7-confirm-the-node-is-synchronized"},"confirm that the node is synchronized"),"."),(0,o.kt)("h3",{id:"example-usage"},"Example usage"),(0,o.kt)("p",null,"For general health metrics, use this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://<node_address>:8888/metrics\n")),(0,o.kt)("p",null,"You can check the node's status using this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://<node_address>:8888/status\n")),(0,o.kt)("p",null,"To get information about the next upgrade, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://<node_address>:8888/status | jq .next_upgrade\n")),(0,o.kt)("p",null,"To get information about the last added block, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://<node_address>:8888/status | jq .last_added_block_info\n")),(0,o.kt)("p",null,"To monitor the downloading of blocks to your node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"watch -n 15 'curl -s http://<node_address>:8888/status | jq \".peers | length\"; curl -s localhost:8888/status | jq .last_added_block_info'\n")),(0,o.kt)("p",null,"To monitor local block height as well as RPC port status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"watch -n 15 'curl -s http://<node_address>:8888/status | jq \".peers | length\"; curl -s localhost:8888/status | jq .last_added_block_info; casper-client get-block'\n")),(0,o.kt)("h2",{id:"9999"},"Default SSE HTTP Event Stream Server Port: 9999"),(0,o.kt)("p",null,"The configuration options for the SSE HTTP event stream server are listed under the ",(0,o.kt)("inlineCode",{parentName:"p"},"event_stream_server")," section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," listing port 9999 is the listening address for the SSE HTTP event stream server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"address = '0.0.0.0:9999'\n")),(0,o.kt)("p",null,"If this port is closed, the requests coming to this port will not be served, but the node remains unaffected. For details and useful commands, see ",(0,o.kt)("a",{parentName:"p",href:"/developers/dapps/monitor-and-consume-events"},"Monitoring and Consuming Events"),"."),(0,o.kt)("h2",{id:"restricting-access-for-private-networks"},"Restricting Access for Private Networks"),(0,o.kt)("p",null,"Any node can join Mainnet and Testnet and communicate with the nodes in the network. Private networks may wish to restrict access for new nodes joining the network as described ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup-network/create-private#network-access-control"},"here"),"."),(0,o.kt)("h2",{id:"summary-of-related-links"},"Summary of Related Links"),(0,o.kt)("p",null,"Here is a summary of the links mentioned on this page:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/install-node#network-requirements"},"Network requirements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/design/p2p"},"Network communication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/basic-node-configuration#config-file"},"The node configuration file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/json-rpc/"},"Interacting with the Casper JSON-RPC API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/"},"Interacting with the network using CLI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/becoming-a-validator/bonding#example-bonding-transaction"},"Bonding")," or ",(0,o.kt)("a",{parentName:"li",href:"/operators/becoming-a-validator/unbonding"},"unbonding")," as a validator"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/basic-node-configuration#trusted-hash-for-synchronizing"},"Getting a trusted node hash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/upgrade#verifying-successful-staging"},"Verifying successful staging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup/joining#step-7-confirm-the-node-is-synchronized"},"Confirming that the node is synchronized")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/dapps/monitor-and-consume-events"},"Monitoring and consuming events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/operators/setup-network/create-private#network-access-control"},"Private network access control")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/faq/faq-validator"},"FAQs for a basic validator node ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cspr.community/docs/faq-validator.html"},"External FAQs on Mainnet and Testnet validator node setup"))))}h.isMDXComponent=!0}}]);