# Module Insights

This page is designed to help you quickly view key information on modules and make a more informed decision on which you include in your application.

To get started, select the Platform you wish to view data for, this will refresh the table with relevant information. Currently this list includes:
- ubuntu-16.04 (x64)
- ubuntu-16.04 (s390x)
- ubuntu-16.04 (ppc64le)
- macos10.10 (x64)
- win10 (x64)

Column Titles
- **Name** is the NPM name of the module. Clicking the name will take you to an additional information page which includes a list of found licenses.
- **Commercial Support** Indicates whether commercial support is available for the module, and a list of providers. At time of launch this has only been populated with IBM support.
- **Stability** Indicates whether the module adheres to the [Module LTS Policy](https://github.com/CloudNativeJS/ModuleLTS).
- **Recommended Versions** We recommend a major version of a module against each LTS version of Node, with the latest version of said module in brackets. <span style="color:green;">GREEN</span> indicates that tests have passed for the selected module on the selected module. <span style="color:red;">RED</span> indicates failure. If the cell is grey, we have been unable to retrieve any results. Clicking a module version will take you to a detailed view on the passes and failures against each platform and each node version.
- **Latest Version Status** shows the latest module version number, and whether that passes against the latest LTS version of Node and gives additional information on the module itself, including:
 - **License** The license found for the module
 - **Sublicenses** A count of unique licenses found within the dependency tree for the module. You can view this list by clicking the name of the module.
 - **Code Coverage** To get code coverage results we utilise [NYC](https://www.npmjs.com/package/nyc).
 - **Tags** Is intended to provide information to help you find or compare modules. This list is currently empty.

You can also use the search box at the top right of the table to filter on information in *any* column.

To get in touch with us about this page, or any of the work contained within CloudNativeJS, please see our [Contact](https://www.cloudnativejs.io/contact.html) page.
