(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{229:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"distributed-programming-in-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distributed-programming-in-javascript"}},[t._v("#")]),t._v(" Distributed programming in JavaScript")]),t._v(" "),a("p",[t._v("Agoric's platform is built mainly in JavaScript and enables authors to write secure smart contracts in JavaScript.")]),t._v(" "),a("p",[t._v("For the biggest part, all JavaScript knowledge is directly applicable to the Agoric platform. However, there are a couple of Agoric-specific additions at various layers that are better to understand before programming on the Agoric platform.")]),t._v(" "),a("p",[t._v("Some specificities are "),a("strong",[t._v("concepts")]),t._v(", other are at the "),a("strong",[t._v("syntax level")]),t._v(", others are "),a("strong",[t._v("Agoric library additions")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"vats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vats"}},[t._v("#")]),t._v(" Vats")]),t._v(" "),a("p",[t._v("A vat is a "),a("em",[t._v("unit of synchrony")]),t._v(". This means that within a JavaScript vat, objects\nand functions can communicate with one another synchronously. It also means that\ncommunication with objects outside the vat can be done, but it requires\n"),a("a",{attrs:{href:"#Communicating-with-remote-objects-via-E"}},[t._v("managing asynchronous messages and responses")]),t._v(".")]),t._v(" "),a("p",[t._v("A vat runs a single "),a("em",[t._v("event loop")]),t._v(".")]),t._v(" "),a("p",[t._v("A physical machine can run one or several vats. A blockchain can run one or several communicating vats.")]),t._v(" "),a("p",[t._v("Different vats can communicate by sending asynchronous messages to other vats.")]),t._v(" "),a("p",[t._v("A vat is the moral equivalent of a Unix Process.")]),t._v(" "),a("p",[t._v("The internal state of a vat can be stored in persistent memory so that the vat\ncan be turned off and later turned back on (on the same or a different physical\nmachine) by loading the stored state.")]),t._v(" "),a("p",[t._v("In cosmic-swingset, several vats are started. Each vat hosts a service (registrar, zoe, etc.). Currently (April, 2020), all contracts run in the Zoe vat, but eventually, each contract will run in its own dedicated vat.")]),t._v(" "),a("h2",{attrs:{id:"secure-ecmascript-ses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secure-ecmascript-ses"}},[t._v("#")]),t._v(" Secure EcmaScript (SES)")]),t._v(" "),a("p",[t._v("SES is a standards-track extension of\n"),a("a",{attrs:{href:"https://www.ecma-international.org/publications/standards/Ecma-262.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("EcmaScript"),a("OutboundLink")],1),t._v(",\nthe JavaScript standard - common to web browsers, Node.js, and embedded\ndevices. SES provides a secure platform for executing programs, which means that\nit's possible to run code you don't completely trust, without being vulnerable\nto its bugs or bad intentions. The guest code runs in an immutable realm that has no\naccess to ambient authority by default. The hosting code can provide access to\ndisk or network or other services, and any authority not granted is inaccessible\nto the guest code.")]),t._v(" "),a("p",[t._v("SES can be enabled via the "),a("a",{attrs:{href:"https://www.npmjs.com/package/@agoric/harden",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ses")]),t._v(" package"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("lockdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ses"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// turns the current realm into an immutable realm")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// calling this function also adds a global Compartment constructor to create compartments")]),t._v("\n")])])]),a("h3",{attrs:{id:"compartments-and-realms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compartments-and-realms"}},[t._v("#")]),t._v(" Compartments and realms")]),t._v(" "),a("p",[t._v("JavaScript code runs in the context of a "),a("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/10.0/index.html#sec-code-realms",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Realm")]),a("OutboundLink")],1),t._v(". A realm is composed of the set of "),a("em",[t._v("primordials")]),t._v(" (objects and functions of the standard library like "),a("code",[t._v("Array.prototype.push")]),t._v(") and of a global object. In a web browser, an iframe is a realm. In Node.js, a Node process is a realm.")]),t._v(" "),a("p",[t._v("For historical reasons, the ECMAScript specification requires the "),a("em",[t._v("primordials")]),t._v("\nto be mutable ("),a("code",[t._v("Array.prototype.push = yourFunction")]),t._v(" is valid ECMAScript but not\nrecommended). SES makes it possible to turn the current realm into an\n"),a("strong",[t._v("immutable realm")]),t._v(", that is a realm within which the primordials are deeply\nfrozen. It also allows programs to create "),a("strong",[t._v("Compartments")]),t._v(".")]),t._v(" "),a("p",[t._v('Compartments are "mini-realms". They have their own dedicated global object and environment, but they inherit the primordials from their parent realm.')]),t._v(" "),a("p",[t._v('Agoric "deploy scripts" and smart contract code run in an immutable realm with compartments providing just enough authority to create useful and secure contracts (but not enough authority to do anything unintended or harmful to the participants of the smart contract)')]),t._v(" "),a("h3",{attrs:{id:"harden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#harden"}},[t._v("#")]),t._v(" harden")]),t._v(" "),a("p",[a("code",[t._v("harden")]),t._v(" is a function provided by the\n"),a("a",{attrs:{href:"https://www.npmjs.com/package/@agoric/harden",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@agoric/harden")]),t._v(" package"),a("OutboundLink")],1),t._v(".  It ensures\nthat external callers of hardened objects can only interact with them through\nfunctions present in their API.  "),a("code",[t._v("harden")]),t._v(" does a transitive version of\n"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Object.freeze")]),a("OutboundLink")],1),t._v(",\nwhich only locks up an object's own properties.")]),t._v(" "),a("p",[t._v("All objects that will be transferred across a trust boundary must have their API\nsurface frozen (usually by calling harden). This ensures that other objects can only\ninteract with them through their defined method interface. CapTP, our communications\nlayer for passing references to distributed objects, enforces this at vat boundaries.")]),t._v(" "),a("p",[t._v("After you've "),a("a",{attrs:{href:"https://docs.npmjs.com/cli/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("installed"),a("OutboundLink")],1),t._v(" the "),a("a",{attrs:{href:"https://www.npmjs.com/package/@agoric/harden",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@agoric/harden")]),t._v(" package"),a("OutboundLink")],1),t._v(", you can use it this way:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" harden "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/harden'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12 because o is still mutable")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// throws a TypeError because o is now hardened")]),t._v("\n")])])]),a("h3",{attrs:{id:"communicating-with-remote-objects-using-e"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#communicating-with-remote-objects-using-e"}},[t._v("#")]),t._v(" Communicating with remote objects using "),a("code",[t._v("E")])]),t._v(" "),a("p",[t._v("On the Agoric platform, objects may be running in distinct vats, or on a remote\nmachine, or even on a blockchain. Whenever you send messages to an object that\nisn't accessible locally in the same vat, the response can't be received\nimmediately and can't be acted upon locally until the response comes back. In\norder to ensure that local code isn't blocked while waiting for the response, we\nreturn a Promise for the result. You can send further messages to the result of\nthat promise, and if the promise resolves to a remote object the message will be\nforwarded to its location, and the result will eventually be returned and\nprocessed locally.")]),t._v(" "),a("p",[t._v("JavaScript\n"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",target:"_blank",rel:"noopener noreferrer"}},[t._v("supports Promises"),a("OutboundLink")],1),t._v("\nnatively, and Agoric's HandledPromises are compatible and interoperable with\nstandard Promises. The standard way to interact with a Promise is to do further\nprocessing either in a "),a("code",[t._v(".then()")]),t._v(" clause or after using "),a("code",[t._v("await")]),t._v(" to get the\nresult, and that works the same way with HandledPromises.")]),t._v(" "),a("p",[t._v("You can send messages to the eventual result of a Promise, or to a presence (a\nproxy for a remote object), using the "),a("code",[t._v("E")]),t._v("\nnotation. "),a("code",[t._v("E(remoteServiceP).startup(params)")]),t._v(". Since the result of a send\nusing"),a("code",[t._v("E")]),t._v(" will always be a Promise, the normal thing to do with the result (as\nwith any object) is either pass it as a parameter or invoke a function to be\nperformed once the Promise is fulfilled.")]),t._v(" "),a("p",[a("code",[t._v("E(remoteServiceP).startup(params).then(result => useTheService(result);")])]),t._v(" "),a("p",[t._v("Deploy scripts and Zoe smart contracts may need to access services that run in a\ndifferent vat. For instance, a deploy script may want to install a contract in a\nZoe instance running in a blockchain. For this to happen, the deploy script\ncannot call "),a("code",[t._v("zoe.install(code, moduleFormat)")]),t._v(", because it does not have local\naccess to the "),a("code",[t._v("zoe")]),t._v(" object which is in a different vat. However, the deploy\nscript is given access to a "),a("code",[t._v("zoe")]),t._v(" "),a("em",[t._v("presence")]),t._v(". In order to call methods on the\nactual Zoe object, the deploy code can do:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" installationHandle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moduleFormat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("E")]),t._v(' function is a local "bridge" that makes is possible to invoke methods on\nremote object. The local version of a remote object is called a\n'),a("strong",[t._v("presence")]),t._v(". "),a("code",[t._v("E")]),t._v(" takes a presence as an argument and creates an object with the\ncorresponding methods. It performs the communication asynchronously. Method\ncalls can take arguments that are objects in the current vat or presences for\nobjects in other vats.")]),t._v(" "),a("h3",{attrs:{id:"notifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notifiers"}},[t._v("#")]),t._v(" Notifiers")]),t._v(" "),a("p",[t._v("DApps and other tools may want to be notified about changes to the state of a Zoe\ncontract or a particular offer. We support this with a Notifier tool based on Promises,\nwhich allows many parties to subscribe to be notified without requiring that the\npublisher track a subscription list.")]),t._v(" "),a("p",[t._v("This is currently supported by Zoe itself, which publishes updates to the state of\noffers (reallocations and completions), and by some contracts, which can publish\ncurrent prices or other details specific to the contract.")]),t._v(" "),a("h4",{attrs:{id:"getting-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-notifications"}},[t._v("#")]),t._v(" Getting Notifications")]),t._v(" "),a("p",[t._v("Zoe has a public method "),a("code",[t._v("getOfferNotifier()")]),t._v(", and contracts will have similar\nmethods. This provides a long-lived notifier object associated with a particular\nstream of updates. At any time, you can call "),a("code",[t._v("notifier.getUpdateSince()")]),t._v(", and it will\nreturn a record "),a("code",[t._v("{ value, updateHandle, done }")]),t._v(". "),a("code",[t._v("value")]),t._v(" is the current state,\naccording to the source. "),a("code",[t._v("done")]),t._v(" will be false until the stream reaches a final state,\nafter which "),a("code",[t._v("value")]),t._v(" will never change, and the same record will always be\nreturned. "),a("code",[t._v("updateHandle")]),t._v(" allows you to ask to be notified the next time there's a\nchange to the state.")]),t._v(" "),a("p",[t._v("If you call "),a("code",[t._v("getUpdateSince(oldUpdateHandle)")]),t._v(" with no handle, or any "),a("code",[t._v("updateHandle")]),t._v("\nother than the most recent one, the notifier will immediately return a record with\nthe current state. If you call "),a("code",[t._v("getUpdateSince(updateHandle)")]),t._v(" with the most-recently\ngenerated "),a("code",[t._v("updateHandle")]),t._v(", you'll get a promise for the next record, which will be\nresolved the next time there's a change in the state.")]),t._v(" "),a("p",[t._v("Well-designed notification systems can provide access either to the most recent\nstate, or to a complete list of changes. (Sometimes providing changes since a recent\nepoch improves the UX.) This API is designed to support the former style of update,\nthough it's a simple work-around to include deltas as part of the state.")]),t._v(" "),a("p",[t._v("A common pattern for following updates to the notifier until it's done looks like this:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStateOnChanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUpdateSince")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" done "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopTracking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("respondToNewValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resubscribe for more updates")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStateOnChanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNotifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offerHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("notifier")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStateOnChanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Zoe's updates for an offer show the current allocation that will be paid if the\ncontract completes without further changes. When the contract calls "),a("code",[t._v("complete()")]),t._v(" on\nthe offer, the notifier is marked "),a("code",[t._v("done")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"providing-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#providing-updates"}},[t._v("#")]),t._v(" providing updates")]),t._v(" "),a("p",[t._v("Contracts can provide updates using a notifier by importing notifer and calling "),a("code",[t._v("produceNotifier()")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" produceNotifier "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/notifier'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updater "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceNotifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The notifier half of the pair can be returned to anyone who should be allowed to see\nstate changes.")]),t._v(" "),a("p",[t._v("The updater has only two methods: "),a("code",[t._v("updateState(newState)")]),t._v(", and\n"),a("code",[t._v("resolve(finalState)")]),t._v(". Both send a notification with the new state to any waiting\nnotifiers. "),a("code",[t._v("resolve()")]),t._v(" also resolves the promise to a record with "),a("code",[t._v("done: true, updateHandle: undefined")]),t._v(", and ensures that the answer will never change.")])])}),[],!1,null,null,null);e.default=s.exports}}]);