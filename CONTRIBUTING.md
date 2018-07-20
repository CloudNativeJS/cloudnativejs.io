## Contributing to www.cloudnativejs.io
Content on this site is licensed under the Apache Licence, Version 2.0.

### All Changes

#### Create development environment
1. Clone the cloudnativejs.io repo onto your machine:
	`git clone https://github.com/CloudNativeJS/cloudnativejs.io`
2. Create a new branch for your development:
	`git checkout -b <branch>`
3. Once changes have been made, open a PR against master and link to the corresponding issue, if applicable.

### Changing an existing guide

CloudNativeJS.io is written in HTML, CSS and JS.

When editing existing topics you should adhere to the following guidelines, doing so will provide styling for you.

#### Headings
Use `<h1>` tags for the title of the page.

Use `<h2>` tags for headers of sections.

Use `<h3>` tags for sub headers.

`<h4>` and `<h5>` also have styling included, if further nesting is required.

#### Normal text/paragraphs
Use the `<p>` tag for this.
NOTE that spacing is added above and below these elements, so wrap an entire paragraph in a single `<p>` tag.
For single sentences use a `<p>` tag for each.

#### Code Examples
Node.js/JavaScript code blocks should be wrapped in:

```
<pre><code class="language-js">

</code></pre>
```

Non-Node.js/JavaScript code blocks and single code lines should be wrapped in:

```
<pre><code>

</code></pre>
```

#### Tables
Tables should be structured as follows:

```
<table>
    <thead>
      <tr>
        <th>Some table heading</th>
        ...
     </tr>
    </thead>
    <tbody>
      <tr>
        <td>Some table content</td>
        ...
      </tr>
    </tbody>
</table>
```