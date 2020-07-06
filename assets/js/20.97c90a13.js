(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{224:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mathhelpers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers"}},[t._v("#")]),t._v(" MathHelpers")]),t._v(" "),a("p",[t._v("AmountMath is about doing math operations on "),a("code",[t._v("amount")]),t._v("s, which are extents labeled with a brand.\nAmountMath uses MathHelpers to do its extent arithmatic operations. It then brands the results,\ncreating a new "),a("code",[t._v("amount")]),t._v(".")]),t._v(" "),a("p",[t._v("There are three different types of MathHelpers, each of which implements all the methods shown\non this page. You only have to specify the MathHelper type when creating an "),a("code",[t._v("issuer")]),t._v("; it then knows\nwhich type's operations to use on itself.")]),t._v(" "),a("p",[t._v("There are three types of MathHelpers, each of which implements all of the same\nset of API methods (i.e. MathHelpers are polymorphic):")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("nat")]),t._v(": Used with fungible assests.")]),t._v(" "),a("li",[a("code",[t._v("strSet")]),t._v(": Used with non-fungible assets.")]),t._v(" "),a("li",[a("code",[t._v("set")]),t._v(": Used with sets of objects, primarily non-fungible assets.")])]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("produceIssuer(allegedName, mathHelpersName)")]),t._v(" to specify which type of MathHelpers\nyour contract uses. The second parameter, "),a("code",[t._v("mathHelpersName")]),t._v(" is optional and defaults\nto "),a("code",[t._v("nat")]),t._v(" if not given. For example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos`); // Defaults to '")]),t._v("nat'\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'strSet'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos, '")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("For more details on the MathHelper types, see the "),a("a",{attrs:{href:"https://agoric.com/documentation/ertp/api/math-helpers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERTP Guide's MathHelpers section"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("MathHelpers versus AmountMath")]),t._v(" "),a("p",[t._v("MathHelper operations should not be used on their own. Instead, you\nshould first make a local version of AmountMath as shown below.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" brand "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bucks'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mathHelperName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" issuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMathHelpersName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'nat'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" localAmountMath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeAmountMath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("brand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mathHelpersName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"mathhelpers-doassertkind-allegedextent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-doassertkind-allegedextent"}},[t._v("#")]),t._v(" mathHelpers.doAssertKind(allegedExtent)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("allegedExtent")]),t._v(" "),a("code",[t._v("{Extent}")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("Check the kind of this extent and throw if it is not the expected kind.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath.make():")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("allegedExtent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  helpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doAssertKind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allegedExtent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    brand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    extent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" allegedExtent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"mathhelpers-dogetempty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-dogetempty"}},[t._v("#")]),t._v(" mathHelpers.doGetEmpty()")]),t._v(" "),a("ul",[a("li",[t._v("Returns: "),a("code",[t._v("{Extent}")])])]),t._v(" "),a("p",[t._v("Get the value for an empty extent (often 0 or an empty array).")]),t._v(" "),a("p",[t._v("Mathematically, this is a representation of the identity element for the addition operation.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" empty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("helpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doGetEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"mathhelpers-doisempty-extent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-doisempty-extent"}},[t._v("#")]),t._v(" mathHelpers.doIsEmpty(extent)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("extent")]),t._v(" "),a("code",[t._v("{Extent}")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{Boolean}")])])]),t._v(" "),a("p",[t._v("Is this an empty extent?")]),t._v(" "),a("p",[t._v("Mathematically, this determines if the extent is the identity element for the addition operation.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\nmathHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doIsEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"mathhelpers-doisgte-left-right"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-doisgte-left-right"}},[t._v("#")]),t._v(" mathHelpers.doIsGTE(left, right)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("left")]),t._v(" "),a("code",[t._v("{Extent}")])]),t._v(" "),a("li",[a("code",[t._v("right")]),t._v(" "),a("code",[t._v("{Extent}")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{Boolean}")])])]),t._v(" "),a("p",[t._v("Is the left greater than or equal to the right?")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\nhelpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doIsGTE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rightAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"mathhelpers-doisequal-left-right"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-doisequal-left-right"}},[t._v("#")]),t._v(" mathHelpers.doIsEqual(left, right)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("left")]),t._v(" "),a("code",[t._v("{Extent}")])]),t._v(" "),a("li",[a("code",[t._v("right")]),t._v(" "),a("code",[t._v("{Extent}")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{Boolean}")])])]),t._v(" "),a("p",[t._v("Does left equal right?")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\nhelpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doIsEqual")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rightAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"mathhelpers-doadd-left-right"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-doadd-left-right"}},[t._v("#")]),t._v(" mathHelpers.doAdd(left, right)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("left")]),t._v(" "),a("code",[t._v("{Extent}")])]),t._v(" "),a("li",[a("code",[t._v("right")]),t._v(" "),a("code",[t._v("{Extent}")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{Extent}")])])]),t._v(" "),a("p",[t._v("Return the left combined with the right.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" combinedExtent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" helpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doAdd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rightAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"mathhelpers-dosubtract-left-right"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers-dosubtract-left-right"}},[t._v("#")]),t._v(" mathHelpers.doSubtract(left, right)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("left")]),t._v(" "),a("code",[t._v("{Extent}")])]),t._v(" "),a("li",[a("code",[t._v("right")]),t._v(" "),a("code",[t._v("{Extent}")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{Extent}")])])]),t._v(" "),a("p",[t._v("Return what remains after removing the right from the left. If the result is negative (i.e. something in the right was not in the left) we throw an error.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used in amountMath:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" remainingExtent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" helpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSubtract")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExtent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rightAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);