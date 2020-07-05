(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{224:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"payment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#payment"}},[t._v("#")]),t._v(" Payment")]),t._v(" "),e("p",[t._v("Payments hold an amount of digital assets that are in transit.\nPayments can be deposited in purses, split into multiple payments,\ncombined, and claimed (getting an exclusive payment and revoking\naccess from anyone else). Payments are\nlinear, meaning that either a payment has its full original balance,\nor it is used up entirely. It is impossible to partially use a\npayment.")]),t._v(" "),e("p",[t._v("Payments are often received from other actors and therefore should not be trusted themselves. To get the balance of a payment, use the trusted issuer: issuer.getAmountOf(payment).")]),t._v(" "),e("p",[t._v("Payments can be converted to Purses by getting a trusted issuer and calling "),e("code",[t._v("issuer.makeEmptyPurse()")]),t._v(" to create a purse, then "),e("code",[t._v("purse.deposit(payment)")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"payment-getallegedbrand"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#payment-getallegedbrand"}},[t._v("#")]),t._v(" payment.getAllegedBrand()")]),t._v(" "),e("ul",[e("li",[t._v("Returns: "),e("code",[t._v("{Brand}")])])]),t._v(" "),e("p",[t._v("Get the allegedBrand, indicating the kind of digital asset this payment purports to be, and which issuer to use. Because payments are not trusted, any method calls on payments should be treated with suspicion and verified elsewhere.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" brand"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amountMath "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bucks'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" payment "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mintPayment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amountMath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" officialBrand "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" payment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllegedBrand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);