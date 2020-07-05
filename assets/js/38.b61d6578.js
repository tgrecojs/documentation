(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{244:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ertp-introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ertp-introduction"}},[e._v("#")]),e._v(" ERTP Introduction")]),e._v(" "),s("p",[e._v("ERTP ("),s("em",[e._v("Electronic Rights Transfer Protocol")]),e._v(") is Agoric's token\nstandard for digital assets in\nJavaScript. Using ERTP, you can easily create a wide variety of digital assets,\nall of which are transferred exactly the same way and with exactly the\nsame security properties.")]),e._v(" "),s("p",[e._v("ERTP uses object capabilities to enforce access control. If your\nprogram has a reference to an object, it can call methods on that\nobject. If it doesn't have a reference, it can't.")]),e._v(" "),s("h2",{attrs:{id:"creating-assets-with-ertp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-assets-with-ertp"}},[e._v("#")]),e._v(" Creating assets with ERTP")]),e._v(" "),s("p",[e._v("In ERTP, "),s("em",[e._v("mints")]),e._v(" create digital "),s("em",[e._v("assets")]),e._v(". Access to an asset type's\nmint lets you create more digital assets of that type. You can then\nstore new assets in a "),s("em",[e._v("payment")]),e._v(" or a "),s("em",[e._v("purse")]),e._v(".")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Payments")]),e._v(": Assets you intend to send to someone else.")]),e._v(" "),s("li",[s("strong",[e._v("Purses")]),e._v(": Store assets until you withdraw them into a payment for use")])]),e._v(" "),s("p",[e._v("To send assets in ERTP:")]),e._v(" "),s("ol",[s("li",[e._v("Withdraw them from a purse. This creates a payment.")]),e._v(" "),s("li",[e._v("Send this payment to a recipient object as a message.")])]),e._v(" "),s("p",[e._v("To receive assets in ERTP:")]),e._v(" "),s("ol",[s("li",[e._v("Create a purse for the asset type you'll receive. "),s("strong",[e._v("Note:")]),e._v(" You\ndo not need access to the type's mint. The Issuer (which is widely shared) provides an empty purse for the asking.")]),e._v(" "),s("li",[e._v("Get access to the asset type you'll receive.")]),e._v(" "),s("li",[e._v("Receive the message with the payment and deposit the payment in\nyour purse.")])]),e._v(" "),s("h2",{attrs:{id:"security-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-properties"}},[e._v("#")]),e._v(" Security properties")]),e._v(" "),s("p",[e._v("ERTP purse objects have a "),s("code",[e._v("deposit")]),e._v(" message which takes a payment\nobject as its argument. It first checks that the payment object is\ngenuine and the same asset type as the purse (after all, quatloos\nare a very unstable asset, so we wouldn't want to let people deposit\nquatloos and get credit for simoleans. (Note: quatloos and simoleans are both\nimaginary currencies.)")]),e._v(" "),s("p",[e._v("If everything passes the checks, the asset moves from the payment to\nthe purse. If there's a problem, it throws an error.")]),e._v(" "),s("p",[e._v("After a successful deposit, ERTP guarantees:")]),e._v(" "),s("ul",[s("li",[e._v("The payment object is empty.")]),e._v(" "),s("li",[e._v("The purse contains the payment's full content.")])]),e._v(" "),s("p",[e._v("When the "),s("code",[e._v("deposit")]),e._v(" call throws an error (i.e. something went wrong),\nERTP guarantees:")]),e._v(" "),s("ul",[s("li",[e._v("The alleged payment is in the same state as before the call.")]),e._v(" "),s("li",[e._v("The purse is in the same state as before the call.")])]),e._v(" "),s("h2",{attrs:{id:"issuers-and-mints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issuers-and-mints"}},[e._v("#")]),e._v(" Issuers and mints")]),e._v(" "),s("p",[e._v("Other key ERTP objects are:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Mints")]),e._v(": Issue new digital assets as a new Payment. Mints only\nissue one type of asset (quatloos, simoleons, moola, etc. Note that these\nare all imaginary currencies used as examples.) We refer to\nthat type as the mint's "),s("em",[e._v("Brand")]),e._v(". So if a mint issues quatloos, it's a\nquatloo brand mint.  Only mints can issue new digital assets. To mint\nnew assets of a particular type, you must have a reference to that\ntype's mint")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Issuers")]),e._v(": Create empty purses and payments and map minted\nassets to them when assets are added or removed.\nIssuers verify and move digital assets.")])])]),e._v(" "),s("p",[e._v("An issuer's special admin facet is a Mint, and that Mint and Issuer are\nassociated with each other. With a reference to an issuer, you can\ncheck the validity of a payment in that issuer's mint's assets, as\nwell as claim it either as a new payment to yourself or a purse you\ncontrol.")]),e._v(" "),s("p",[e._v("Issuers (i.e. their references) should be gotten from a trusted source\nand then relied upon as the decider of whether an untrusted payment is\nvalid")]),e._v(" "),s("p",[s("strong",[e._v("Note")]),e._v(": There is a one-to-one correspondence between a brand and a\nmint, a mint and an issuer, and an issuer and a brand. In other\nwords, each mint issues a unique kind of digital asset, say,\nquatloos, and only that kind of asset.")]),e._v(" "),s("h2",{attrs:{id:"amounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amounts"}},[e._v("#")]),e._v(" Amounts")]),e._v(" "),s("p",[s("em",[e._v("Amounts")]),e._v(" describe digital assets without having any value of their own.\nAnyone can make one, and they can be sent to anyone. They have two parts:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Brand")]),e._v(": An unforgeable object identity for the digital asset's type,\nsuch as an object that represents quatloos.")]),e._v(" "),s("li",[s("strong",[e._v("Extent")]),e._v(": How much/many of the asset. Fungible extents are natural\nnumbers. Non-fungible extents are strings or objects representing\nattributes of the asset (say, a theater ticket's row and seat positions).")])]),e._v(" "),s("p",[e._v("Note: "),s("em",[e._v("fungible")]),e._v(" means any item in a set can be used. For example, for\nchange for a dollar, any four quarters work. "),s("em",[e._v("Non-fungible")]),e._v(" means\nspecific items in a set must be used. For  example, theater tickets\nare not all the same, and it matters if you get third row center or\nsecond balcony far left  (and affects what you're willing to trade for\nit).")]),e._v(" "),s("h2",{attrs:{id:"amount-math"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amount-math"}},[e._v("#")]),e._v(" Amount Math")]),e._v(" "),s("p",[e._v("Issuers must be able to deposit and withdraw assets from a purse. This\nrequires being able to add and subtract digital assets. They use a set\nof "),s("code",[e._v("amountMath")]),e._v(" functions, which are aided by "),s("code",[e._v("mathHelpers")]),e._v(" functions.")]),e._v(" "),s("p",[e._v("In addition to math operations, "),s("code",[e._v("amountMath")]),e._v(" functions check on their\narguments' brands, throwing an error if the wrong brand was used.")]),e._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),s("p",[e._v("If Getting Started, you should go to the "),s("a",{attrs:{href:"https://agoric.com/documentation/getting-started/intro-zoe.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction to Zoe"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("If you've finished the Getting Started material, you should go to the\n"),s("a",{attrs:{href:"https://agoric.com/documentation/ertp/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ERTP Guide"),s("OutboundLink")],1),e._v(" for a fuller explanation of ERTP\nconcepts, including ones not covered in this Introduction.")])])}),[],!1,null,null,null);t.default=n.exports}}]);