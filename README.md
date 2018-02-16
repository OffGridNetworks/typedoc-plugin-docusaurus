# typedoc-plugin-docusaurus

[![npm](https://img.shields.io/npm/v/typedoc-plugin-docusaurus.svg)](https://www.npmjs.com/package/typedoc-plugin-docusaurus)

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that exposes themes and options for rendering markdown for [Docusaurus](https://github.com/facebook/docusaurus)

## Getting started

### Installation

```javascript
npm install --save-dev typedoc typedoc-plugin-docusaurus
```

### How to use

The plugin provides an additional markdown theme.

```javascript
node_modules/.bin/typedoc --theme markdown
```

## Additional arguments

The plugin exposes the following additional arguments:

* `--mdFlavour<github|bitbucket>`<br />
Specifies the markdown rendering engine.  Defaults to `github`.
* `--mdHideSources`<br />
Suppress sources from output 
* `--mdSourceRepo<path.to.repo>`<br />
The source repo to use for source file linking. Will be ignored on github flavoured projects.<br />
For bitbucket use: `https://bitbucket.org/owner/repository_name`.<br />


## Example output

### The following DocComments:

```javascript
/**
 * This is a function with multiple arguments and a return value.
 * @param paramZ  This is a string parameter.
 * @param paramG  This is a parameter flagged with any.
 */

export function functionWithArguments(paramZ:string, paramG:any):number {
    return 0;
}
```
 
### Will generate the following output:

► **functionWithArguments**(paramZ: *`string`*, paramG: *`any`*): `number`

*Defined in functions.ts:41*

This is a function with multiple arguments and a return value.

**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| paramZ | `string` | This is a string parameter. |
| paramG | `any` | This is a parameter flagged with any.|

**Returns:** `number`

## Samples

Browse some <a href="https://github.com/offgridnetworks/typedoc-plugin-docusaurus/tree/master/tests/mocks/default/README.md">mocked samples</a> to view further examples of generated output. 

## Acknowledgements

* This is a quick and dirty fork of Thomas Grey's [typedoc-plugin-markdown](https://github.com/tgreyjs/typedoc-plugin-markdown) with a few minor edits required to flatten the output and make it suitable for direct use in Docusaurus.   When we have more time we will come back and make this a parameter switch and submit a pull request to [typedoc-plugin-markdown](https://github.com/tgreyjs/typedoc-plugin-markdown).   Until then, feel free to submit pull requests to this one if it gets out of date with upstream.

* He thanked  kimamula's [typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme) for the inspiration behind this project.
