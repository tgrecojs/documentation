(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{241:function(t,e,o){"use strict";o.r(e);var n=o(0),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"before-using-agoric-software"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#before-using-agoric-software"}},[t._v("#")]),t._v(" Before Using Agoric Software")]),t._v(" "),o("p",[t._v("Before working with the Agoric CLI, Zoe, and other Agoric tools and\nsoftware, you need to install the following.")]),t._v(" "),o("table",{attrs:{border:"1"}},[o("tbody",[o("th",[o("b",[t._v("Step")])]),t._v(" "),o("th",[o("b",[t._v("Action")])]),t._v(" "),o("th",[o("b",[t._v("Explanation")])]),t._v(" "),o("tr",[o("td",[o("center",[t._v("0")])],1),t._v(" "),o("td",[t._v("Use a Unix-like environment")]),t._v(" "),o("td",[t._v("You will need to type commands at a Bash-like shell command line prompt,\n    such as is found in [Linux](https://en.wikipedia.org/wiki/Linux), [MacOS](https://www.apple.com/macos/), or\n    [Windows Subsystem for Linux (wsl)](https://docs.microsoft.com/en-us/windows/wsl/).")])]),o("tr",[o("td",[o("center",[t._v("1")])],1),t._v(" "),o("td",[o("a",{attrs:{href:"https://nodejs.org/"}},[t._v("Install Node.js")]),t._v(", version 12.16.1 or higher")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[o("center",[t._v("2")])],1),t._v(" "),o("td",[o("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/install"}},[t._v("Install Yarn 1"),o("br"),t._v("(Yes, Yarn 1 and not a later version)")])]),t._v(" "),o("td",[t._v("Yarn is a package manager for your code and lets developers\n  share code with others. Code is shared via a "),o("i",[t._v("package")]),t._v(" that contains all shared code and a\n  "),o("code",[t._v("package.json")]),t._v(" file describing the package. The link takes you to \n  the Yarn install page, where you first select what operating system you want to\n  install on. Your selection changes the page's content to give install instructions for that \n  OS and links to the needed downloads.")])]),t._v(" "),o("tr",[o("td",[o("center",[t._v("3")])],1),t._v(" "),o("td",[t._v("Open a shell. The rest of this table's Actions take place in\n  this shell.")]),t._v(" "),o("td",[o("ul",[o("li",[t._v("A terminal on Macs; see \n      "),o("b",[t._v("Finder>Applications>Utilities>terminal")])]),t._v(" "),o("li",[t._v("To launch a bash shell at a specific folder on Windows 10:\n        "),o("ol",[o("li",[t._v("Navigate to that folder in File Explorer.")]),t._v(" "),o("li",[t._v("Click the address bar while in that folder.")]),t._v(" "),o("li",[t._v("Type "),o("code",[t._v("bash")]),t._v(" in the address bar and press "),o("b",[t._v("Enter")])])])])])])]),t._v(" "),o("tr",[o("td",[o("center",[t._v("4")])],1),t._v(" "),o("td",[t._v("If you already have a "),o("code",[t._v("~/agoric-sdk")]),t._v(" directory, update it: \n      "),o("br"),o("code",[t._v("cd agoric-sdk")]),t._v(" "),o("br"),o("code",[t._v("git checkout master")]),t._v(" "),o("br"),o("code",[t._v("git pull")])]),t._v(" "),o("td",[t._v("In the next step, if you don't have a copy of our "),o("code",[t._v("agoric-sdk")]),t._v(" directory, you'll get one. This is in case you already have one and might need to update it.")])]),t._v(" "),o("tr",[o("td",[o("center",[t._v("5")])],1),t._v(" "),o("td",[t._v("If you don't have an "),o("code",[t._v("~/agoric-sdk")]),t._v(" directory with Agoric's SDK content in it,\n      "),o("code",[t._v("git clone https://github.com/Agoric/agoric-sdk")])]),t._v(" "),o("td",[t._v("Get the latest Agoric SDK from the Agoric GitHub\n  repository. It goes into the \n      "),o("code",[t._v("agoric-sdk")]),t._v(" sub-directory of your home directory.\n      If the "),o("code",[t._v("agoric-sdk")]),t._v(" sub-directory doesn't already exist, \n      this operation creates it.\n    ")])]),t._v(" "),o("tr",[o("td",[o("center",[t._v("6")])],1),t._v(" "),o("td",[o("code",[t._v("cd ~/agoric-sdk")])]),t._v(" "),o("td",[t._v("Change to the "),o("code",[t._v("agoric-sdk")]),t._v(" subdirectory in your home\n  directory.")])]),t._v(" "),o("tr",[o("td",[o("center",[t._v("7")])],1),t._v(" "),o("td",[o("code",[t._v("yarn install")])]),t._v(" "),o("td",[t._v("Install NPM dependencies.")])]),t._v(" "),o("tr",[o("td",[o("center",[t._v("8")])],1),t._v(" "),o("td",[o("code",[t._v("yarn build")])]),t._v(" "),o("td",[t._v("Build sources that need compiling. "),o("b",[t._v("Note:")]),t._v(" "),o("code",[t._v("build")]),t._v(" is not a standard "),o("code",[t._v("yarn")]),t._v(" command,\n  but one installed with the Agoric SDK.")])]),t._v(" "),o("tr",[o("td",[o("center",[t._v("9")])],1),t._v(" "),o("td",[t._v("Install the Agoric CLI by: "),o("code",[t._v("yarn link-cli \n      <"),o("i",[t._v("agoric script location")]),t._v(">")])]),t._v(" "),o("td",[t._v("Select a location for the Agoric CLI program. For example,\n      "),o("code",[t._v("yarn link-cli /usr/local/bin/agoric")]),t._v(" (or if that fails\n      with permission problems, "),o("code",[t._v("sudo yarn link-cli /usr/local/bin/agoric")]),t._v(")\n  ")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);