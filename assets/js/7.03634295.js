(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{363:function(e,t,o){e.exports=o.p+"assets/img/Agoric-Registration.77971813.png"},364:function(e,t,o){e.exports=o.p+"assets/img/REPL-1.fa02da7a.png"},365:function(e,t,o){e.exports=o.p+"assets/img/REPL-2.1e179f60.png"},403:function(e,t,o){"use strict";o.r(t);var a=o(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"agoric-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agoric-cli"}},[e._v("#")]),e._v(" Agoric CLI")]),e._v(" "),a("p",[e._v("You use the Agoric CLI to install dependencies, initialize, deploy, and start Agoric projects. This Guide has two parts:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#starting-multiuser-dapps"}},[e._v("Starting Multiuser Dapps")]),e._v(": How to use the Agoric CLI to deploy and start a local-chain-multiuser scenario, for development and and testing of multiuser Dapps")]),e._v(" "),a("li",[a("a",{attrs:{href:"#agoric-cli-command-reference"}},[e._v("Agoric CLI Command Reference")]),e._v(": Reference material for the five "),a("code",[e._v("agoric")]),e._v(" CLI commands.")])]),e._v(" "),a("h3",{attrs:{id:"starting-multiuser-dapps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-multiuser-dapps"}},[e._v("#")]),e._v(" Starting Multiuser Dapps")]),e._v(" "),a("p",[e._v("When developing a Dapp, you may need to test how it behaves with multiple users before deploying it publicly.\nThese users could have different roles, such as the contract deployer, an auctioneer, a bidder, a buyer, a seller, etc.\nThe Agoric CLI implements a local-chain-multiuser scenario for developing and testing multiuser Dapps.")]),e._v(" "),a("h4",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("Develop your Dapp as described in the "),a("RouterLink",{attrs:{to:"/getting-started/"}},[e._v("Agoric Getting Started Guide")]),e._v(".\nAfter using "),a("code",[e._v("agoric start")]),e._v(" to test with the simulated chain, stop the simulated\nchain with Control-C.")],1),e._v(" "),a("p",[e._v("You must first compile the Golang dependencies in the Agoric SDK by running")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" agoric-sdk/packages/cosmic-swingset "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\n")])])]),a("p",[e._v("Check that the "),a("code",[e._v("ag-cosmos-helper")]),e._v(" binary is in your "),a("code",[e._v("$PATH")]),e._v(" and works by running the following. If not, you\nneed to add it to your "),a("code",[e._v("$PATH")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Display the directory that should be in your $PATH.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${GOBIN-${GOPATH-$HOME"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("go}")]),e._v("/bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Attempt to run a binary that was installed there.")]),e._v("\nag-cosmos-helper version --long\n")])])]),a("p",[e._v("Then start a real local chain by running the following command. If you want to\nstart the Agoric process afresh, add the "),a("code",[e._v("--reset")]),e._v(" option at the end.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("agoric start local-chain\n")])])]),a("p",[e._v("There won’t be any running clients yet, but the chain will start and be fully functional.")]),e._v(" "),a("p",[e._v("If you’re satisfied with the restart and want to run the chain in the background, you must know how to manage background\nprocesses on your system.  For example, Unix-like systems can use the following to log to "),a("code",[e._v("chain.log")]),e._v(" and start in the background:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("agoric start local-chain "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">&")]),e._v(" chain.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])]),a("p",[e._v("To start a local solo machine connected to the above local chain (your API ag-solo), run the following.\nNote this should either give an error or take a long time (i.e. over a minute) during which your\nlocal chain should be logging something like "),a("code",[e._v("validTxs=1")]),e._v(". There are over 50 round trips (at 2 seconds apiece)\nbefore the local ag-solo is ready to use.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("agoric start local-solo "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v("\n")])])]),a("p",[e._v("This starts a solo machine listening for HTTP on TCP port 8000.")]),e._v(" "),a("p",[e._v("To start other local ag-solos, use a unique port number for each one, such as 8001 or 8002 with:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("agoric start local-solo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PORT-NUMBER"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("For each new local ag-solo, you need to either:")]),e._v(" "),a("ul",[a("li",[e._v("Open the wallet corresponding to each local-solo port number by running:\n"),a("ul",[a("li",[a("code",[e._v("agoric open --hostport=localhost:<local-solo-portnumber>")])])])]),e._v(" "),a("li",[e._v("Or open the wallet, get its URL displayed, and then copy/paste the URL into the browser you want to\nview the wallet in:\n"),a("ul",[a("li",[a("code",[e._v("agoric open --no-browser --hostport=localhost:<local-solo-portnumber>")])])])])]),e._v(" "),a("p",[e._v("Test that each of your ag-solos is running and has a wallet by connecting to "),a("code",[e._v("http://localhost:<PORT-NUMBER>/")]),e._v(" for each port you used.")]),e._v(" "),a("p",[e._v("Run your contract and API deployment scripts against the API ag-solo with this "),a("code",[e._v("agoric deploy")]),e._v(" command. Note that port 8000 is the default\nfor "),a("code",[e._v("agoric deploy")]),e._v(" operations. To deploy to an ag-solo running on a different port, use "),a("code",[e._v("agoric deploy --hostport=127.0.0.1:<PORT-NUMBER>")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("agoric deploy "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")]),e._v("-TO-DEPLOY.JS"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("To use your Dapp UI with different clients, you’ll need to connect to https://local.agoric.com in different browsers (or\ndifferent profiles of the same browser).  Then fill out the localhost address of the ag-solo that you want to use with\nthat browser. This connects the processes in the browsers to their own wallets so they do not share per-client data\nsuch as cookies, storage, etc. Test your UI in each browser!")]),e._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("This section shows how you do the above steps.")]),e._v(" "),a("p",[e._v("Start the local chain and ag-solos")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Build the Golang dependencies.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("cd agoric-sdk/packages/cosmic-swingset "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Check that ag-cosmos-helper binary is in your $PATH and working")]),e._v("\nag-cosmos-helper version --long\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Initialize a Dapp directory.")]),e._v("\nagoric init foo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Change to the Dapp directory.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" foo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install NPM dependencies.")]),e._v("\nagoric "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start the local chain, logging to chain.log.")]),e._v("\nagoric start local-chain "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">&")]),e._v(" chain.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start a local API ag-solo (takes over a minute to finish)")]),e._v("\nagoric start local-solo "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">&")]),e._v(" solo-8000.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Open the associated wallet")]),e._v("\nagoric "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),e._v(" --hostport"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("localhost:8000\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start a second ag-solo.")]),e._v("\nagoric start local-solo "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8001")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">&")]),e._v(" solo-8001.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Open the second associated wallet")]),e._v("\nagoric "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),e._v(" --hostport"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("localhost:8001\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Repeat for any other ag-solos you wish to start (8002, 8003, etc)")]),e._v("\n")])])]),a("p",[e._v("Configure the first client browser")]),e._v(" "),a("p",[e._v("Open a browser (or a new profile), and navigate to https://local.agoric.com/")]),e._v(" "),a("p",[a("img",{attrs:{src:o(363),alt:"Agoric Registration"}})]),e._v(" "),a("p",[e._v("Keep the recommended address ("),a("code",[e._v("http://localhost:8000")]),e._v("), click "),a("strong",[e._v("Open")]),e._v(", and verify that it opens a wallet and\nREPL (Read-Eval-Print-Loop).")]),e._v(" "),a("p",[e._v("In the REPL, type "),a("code",[e._v("console.log(8000)")]),e._v(", hit "),a("strong",[e._v("Enter")]),e._v(", and see the\ncommand and output in the REPL history.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(364),alt:"REPL"}})]),e._v(" "),a("h4",{attrs:{id:"configure-an-additional-client-browser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-an-additional-client-browser"}},[e._v("#")]),e._v(" Configure an additional client browser")]),e._v(" "),a("p",[e._v("Open a different browser. Not just another tab or window, but a completely different browser or browser profile\nthat doesn’t share cookies with any other ag-solo’s browser. For example, if you had an open Chrome window,\ncreate a new Chrome profile, or open a Firefox or Safari window.")]),e._v(" "),a("p",[e._v("Navigate to "),a("code",[e._v("https://local.agoric.com/")]),e._v(" and,\nin the resulting page, set the address to "),a("code",[e._v("http://localhost:8001")])]),e._v(" "),a("p",[e._v("Click "),a("strong",[e._v("Save")]),e._v(". Then click "),a("strong",[e._v("Open")]),e._v(" and\nverify that it opens a wallet page (but note that you won't have access yet).")]),e._v(" "),a("p",[e._v("Type "),a("code",[e._v("console.log(8001)")]),e._v("\nin the REPL, hit "),a("strong",[e._v("Enter")]),e._v(", and see the "),a("code",[e._v("console.log")]),e._v(" command and output in the REPL's history.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(365),alt:"REPL"}})]),e._v(" "),a("p",[e._v("You can repeat this section for as many other ports as you ran ag-solos for.")]),e._v(" "),a("h4",{attrs:{id:"test-the-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-the-ui"}},[e._v("#")]),e._v(" Test the UI")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Deploy the contract and API service.")]),e._v("\nagoric deploy contract/deploy.js api/deploy.js\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start the UI")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("cd ui "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("Then navigate to "),a("code",[e._v("http://localhost:3000")]),e._v(" in each browser/profile for which you want to use the UI."),a("br"),e._v("\nWhen the UI opens your wallet, the browser should navigate to the same URL you entered in that browser\nor profile’s "),a("code",[e._v("https://local.agoric.com")]),e._v(" page.")]),e._v(" "),a("h3",{attrs:{id:"agoric-cli-command-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agoric-cli-command-reference"}},[e._v("#")]),e._v(" Agoric CLI Command Reference")]),e._v(" "),a("p",[e._v("Add a command name to "),a("code",[e._v("agoric")]),e._v(" to specify what command to run. "),a("strong",[e._v("Note")]),e._v(": Required argument names need not be given, only their values. Optional argument names must be given, along with their values. See the command's examples if you're not sure if a name is needed.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("agoric")]),e._v(" commands documented here are the ones useful for dapp developers. Other "),a("code",[e._v("agoric")]),e._v(" commands you may see listed\nare not covered in this document.")]),e._v(" "),a("p",[e._v("In general, you want to issue these Agoric CLI commands in this order:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("agoric init")])]),e._v(" "),a("li",[a("code",[e._v("agoric install")])]),e._v(" "),a("li",[a("code",[e._v("agoric start")]),e._v(" (Usually with "),a("code",[e._v("--reset")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("agoric deploy")])])]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("agoric help")]),e._v(" whenever you need help with one of the above Agoric CLI commands.")]),e._v(" "),a("p",[e._v("There are some general options for all commands, whose usage is:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("agoric "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[e._v("They are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-V")]),e._v(", "),a("code",[e._v("--version")]),e._v(" "),a("ul",[a("li",[e._v("Output the version number.")])])]),e._v(" "),a("li",[a("code",[e._v("--docker-tag <tag>")]),e._v(" "),a("ul",[a("li",[e._v("Use the specified tag of any started Docker containers.  Defaults to\n"),a("code",[e._v("latest")]),e._v(".")])])]),e._v(" "),a("li",[a("code",[e._v("--sdk")]),e._v(" "),a("ul",[a("li",[e._v("Use the Agoric SDK containing this program.")])])]),e._v(" "),a("li",[a("code",[e._v("-v")]),e._v(", "),a("code",[e._v("--verbose")]),e._v(" "),a("ul",[a("li",[e._v("Be verbose.  Multiple occurrences increase verbosity.")])])]),e._v(" "),a("li",[a("code",[e._v("-h")]),e._v(", "),a("code",[e._v("--help")]),e._v(" "),a("ul",[a("li",[e._v("Display help for the command.")])])])]),e._v(" "),a("h4",{attrs:{id:"agoric-init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agoric-init"}},[e._v("#")]),e._v(" "),a("code",[e._v("agoric init")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Function")]),e._v(":\n"),a("ul",[a("li",[e._v("Creates a new Dapp directory named "),a("code",[e._v("<project>")]),e._v(" with contents copied from the "),a("code",[e._v("dapp-template")]),e._v(" argument template.")])])]),e._v(" "),a("li",[a("strong",[e._v("Required Arguments")]),e._v(":\n"),a("ul",[a("li",[a("code",[e._v("project")]),e._v(": Name of the new project to initialize.")])])]),e._v(" "),a("li",[a("strong",[e._v("Optional Arguments")]),e._v(":\n"),a("ul",[a("li",[a("code",[e._v("--dapp-template <name>")]),e._v(": Use the template specified by "),a("code",[e._v("<name>")]),e._v(". Defaults to the demo Dapp "),a("code",[e._v("dapp-fungible-faucet")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("--dapp-base <base-url>")]),e._v(": Look under this directory for the Dapp template. Defaults to "),a("code",[e._v("git://github.com/Agoric/")])]),e._v(" "),a("li",[a("code",[e._v("-h")]),e._v(", "),a("code",[e._v("--help")]),e._v(": Display help for "),a("code",[e._v("init")]),e._v(" command.")])])]),e._v(" "),a("li",[a("strong",[e._v("Examples")]),e._v(":\n"),a("ul",[a("li",[e._v("Creates a directory named "),a("code",[e._v("demo")]),e._v(" with contents copied from the default "),a("code",[e._v("dapp-template")]),e._v(" value "),a("code",[e._v("dapp-simple-exchange")]),e._v(".\n"),a("ul",[a("li",[a("code",[e._v("agoric init demo")])])])]),e._v(" "),a("li",[e._v("Creates a directory named "),a("code",[e._v("my-first-contract")]),e._v(" with contents copied from the default "),a("code",[e._v("dapp-template")]),e._v(" value "),a("code",[e._v("dapp-simple-exchange")]),e._v(".\n"),a("ul",[a("li",[a("code",[e._v("agoric init my-first-contract")])])])]),e._v(" "),a("li",[e._v("Creates a directory named "),a("code",[e._v("my-contract")]),e._v(" with contents copied from a template named "),a("code",[e._v("dapp-skeleton")]),e._v(" located under the URL "),a("code",[e._v("file:///home/contracts")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("agoric init my-contract --dapp-template dapp-skeleton --dapp-base file:///home/contracts")])])])])])])]),e._v(" "),a("h4",{attrs:{id:"agoric-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agoric-install"}},[e._v("#")]),e._v(" "),a("code",[e._v("agoric install")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Function")]),e._v(":\n"),a("ul",[a("li",[e._v("Install Dapp JavaScript dependencies. This may take a while. You use this instead of established npm install tools.\nThe reason is that there is both an SDK ("),a("code",[e._v("--sdk")]),e._v(") and NPM mode. Currently we only support SDK mode, which allows you to link your Dapp\nagainst the SDK dependencies. This lets you modify in any package in the SDK against the SDK dependencies (and see the changes)\nand not have to register those packages with Yarn or NPM.")])])]),e._v(" "),a("li",[a("strong",[e._v("Required Arguments")]),e._v(":\n"),a("ul",[a("li",[e._v("None.")])])]),e._v(" "),a("li",[a("strong",[e._v("Optional Arguments")]),e._v(":\n"),a("ul",[a("li",[e._v("None.")])])]),e._v(" "),a("li",[a("strong",[e._v("Examples")]),e._v(":\n"),a("ul",[a("li",[e._v("Installs Dapp JavaScript dependencies\n"),a("ul",[a("li",[a("code",[e._v("agoric install")])])])])])])]),e._v(" "),a("h4",{attrs:{id:"agoric-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agoric-start"}},[e._v("#")]),e._v(" "),a("code",[e._v("agoric start")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Function")]),e._v(":\n"),a("ul",[a("li",[e._v("Run an Agoric VM on which contracts will run.")])])]),e._v(" "),a("li",[a("strong",[e._v("Required Arguments")]),e._v(":\n"),a("ul",[a("li",[a("code",[e._v("[profile]")]),e._v(": Specifies the environment for the VM. Defaults to "),a("code",[e._v("dev")]),e._v(" for development mode, "),a("code",[e._v("testnet")]),e._v(" connects to our current testnet.")]),e._v(" "),a("li",[a("code",[e._v("[args]")]),e._v(": Ignore this for now. It currently has no valid values.")])])]),e._v(" "),a("li",[a("strong",[e._v("Optional Arguments")]),e._v(":\n"),a("ul",[a("li",[a("code",[e._v("--reset")]),e._v(":  Clear all VM state before starting.")]),e._v(" "),a("li",[a("code",[e._v("--pull")]),e._v(":  For Docker-based VM, pull the image before running.")]),e._v(" "),a("li",[a("code",[e._v("--delay [seconds]")]),e._v(": Delay the given number of seconds for each round-trip to the simulated chain and back for a simulated chain to process messages. A "),a("code",[e._v("1")]),e._v(" value lets you easily count the number of trips in your head.")]),e._v(" "),a("li",[a("code",[e._v("--inspect")]),e._v(': [host[:port]]`: Activate inspector on host:port (default: "127.0.0.1:9229")')]),e._v(" "),a("li",[a("code",[e._v("--inspect-brk [host[:port]]")]),e._v(':  Activate inspector on host:port and break at start of script (default: "127.0.0.1:9229")')]),e._v(" "),a("li",[a("code",[e._v("-h")]),e._v(", "),a("code",[e._v("--help")]),e._v(": Display help for "),a("code",[e._v("start")]),e._v(" command")])])]),e._v(" "),a("li",[a("strong",[e._v("Examples")]),e._v(":\n"),a("ul",[a("li",[e._v("Restart the Agoric VM, clearing all existing state before doing so.\n"),a("ul",[a("li",[a("code",[e._v("agoric start --reset")])])])]),e._v(" "),a("li",[e._v("For Docker-based VM, before running pull the image.\n"),a("ul",[a("li",[a("code",[e._v("agoric start --pull")])])])]),e._v(" "),a("li",[e._v("Delay 5 seconds for each round-trip to the simulated chain and back in order for a simulated chain to\nprocess messages.\n"),a("ul",[a("li",[a("code",[e._v("agoric start --delay 5")])])])])])])]),e._v(" "),a("h4",{attrs:{id:"agoric-deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agoric-deploy"}},[e._v("#")]),e._v(" "),a("code",[e._v("agoric deploy")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Function")]),e._v(":\n"),a("ul",[a("li",[e._v("Run one or more deployment scripts against the local Agoric VM. You may optionally specify which host and port to connect to the VM on.")])])]),e._v(" "),a("li",[a("strong",[e._v("Required Arguments")]),e._v(":\n"),a("ul",[a("li",[a("code",[e._v("<script...>")]),e._v(": Deployment script(s) to run against the local Agoric instance. You must specify at least one, and may specify more than one.")])])]),e._v(" "),a("li",[a("strong",[e._v("Optional Arguments")]),e._v(":\n"),a("ul",[a("li",[a("code",[e._v("--hostport <HOST:PORT>")]),e._v(": Host and port on which to connect to the VM.")]),e._v(" "),a("li",[a("code",[e._v("-h")]),e._v(", "),a("code",[e._v("--help")]),e._v(": Display help for "),a("code",[e._v("deploy")]),e._v(" command")])])]),e._v(" "),a("li",[a("strong",[e._v("Examples")]),e._v(":\n"),a("ul",[a("li",[e._v("Run the specified "),a("code",[e._v("deploy.js")]),e._v(" scripts against the local Agoric VM.\n"),a("ul",[a("li",[a("code",[e._v("agoric deploy ./contract/deploy.js ./api/deploy.js")])])])]),e._v(" "),a("li",[e._v("Run the specified "),a("code",[e._v("deploy.js")]),e._v(" scripts on VM host 128.7.3.139 and\nport 99.\n"),a("ul",[a("li",[a("code",[e._v("agoric deploy --hostport 128.7.3.139:99 ./contract/deploy.js")])])])])])])]),e._v(" "),a("h4",{attrs:{id:"agoric-open"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agoric-open"}},[e._v("#")]),e._v(" "),a("code",[e._v("agoric open")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Function")]),e._v(":\n"),a("ul",[a("li",[e._v("Launch the Agoric UI")])])]),e._v(" "),a("li",[a("strong",[e._v("Required Arguments")]),e._v(" "),a("ul",[a("li",[e._v("None")])])]),e._v(" "),a("li",[a("strong",[e._v("Optional Arguments")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--hostport <host:port>")]),e._v(': Host and port on which to connect to the VM (default: "127.0.0.1:8000").')]),e._v(" "),a("li",[a("code",[e._v("--no-browser")]),e._v(": Display the UI's URL, but don't open a browser.")]),e._v(" "),a("li",[a("code",[e._v("--repl [yes | only | no]")]),e._v(":  Whether to show the Read-Eval-Print loop. Defaults to "),a("code",[e._v("yes")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("-h")]),e._v(", "),a("code",[e._v("--help")]),e._v(": Display help for "),a("code",[e._v("open")]),e._v(" command.")])])]),e._v(" "),a("li",[a("strong",[e._v("Examples")]),e._v(" "),a("ul",[a("li",[e._v("Launch the Agoric UI in a browser\n"),a("ul",[a("li",[a("code",[e._v("agoric open")])])])]),e._v(" "),a("li",[e._v("Display the Agoric UI's URL, but don't open it in a browser.\n"),a("ul",[a("li",[a("code",[e._v("agoric open --no-browser")])])])]),e._v(" "),a("li",[e._v("Display only the REPL for the Agoric UI in a browser.\n"),a("ul",[a("li",[a("code",[e._v("agoric open --repl only")])])])])])])]),e._v(" "),a("h4",{attrs:{id:"agoric-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agoric-help"}},[e._v("#")]),e._v(" "),a("code",[e._v("agoric help")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Function")]),e._v(":\n"),a("ul",[a("li",[e._v("Displays the Agoric CLI commands and arguments with brief descriptions.")])])]),e._v(" "),a("li",[a("strong",[e._v("Required Arguments")]),e._v(":\n"),a("ul",[a("li",[e._v("None")])])]),e._v(" "),a("li",[a("strong",[e._v("Optional Arguments")]),e._v(":\n"),a("ul",[a("li",[a("code",[e._v("-V")]),e._v(", "),a("code",[e._v("--version")]),e._v(": Output Agoric's version number.")]),e._v(" "),a("li",[a("code",[e._v("--sdk")]),e._v(": Use the Agoric SDK containing this program.")]),e._v(" "),a("li",[a("code",[e._v("-v")]),e._v(", "),a("code",[e._v("--verbose")]),e._v(": Output a more detailed version of help (note: only for some commands)")]),e._v(" "),a("li",[a("code",[e._v("-h")]),e._v(", "),a("code",[e._v("--help")]),e._v(": display help for command")])])]),e._v(" "),a("li",[a("strong",[e._v("Examples")]),e._v(":\n"),a("ul",[a("li",[e._v("Display Agoric CLI commands with brief descriptions.\n"),a("ul",[a("li",[a("code",[e._v("agoric help")])])])]),e._v(" "),a("li",[e._v("Display current Agoric version number\n"),a("ul",[a("li",[a("code",[e._v("agoric -V help")])])])]),e._v(" "),a("li",[e._v("Display verbose help for an Agoric command\n"),a("ul",[a("li",[a("code",[e._v("agoric start -h -v")])])])]),e._v(" "),a("li",[e._v("Display verbose general help\n"),a("ul",[a("li",[a("code",[e._v("agoric help -v")])])])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);