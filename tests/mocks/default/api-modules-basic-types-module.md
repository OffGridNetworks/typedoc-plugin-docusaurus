---
id: api-modules-basic-types-module
title: basic-types Module
sidebar_label: basic-types
---

[typedoc-plugin-docusaurus](api-readme.md) > [[basic-types Module]](api-modules-basic-types-module.md)



## Module


For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like.

### Type aliases

* [SomeOptions](api-modules-basic-types-module.md#someoptions)


### Variables

* [amount](api-modules-basic-types-module.md#amount)
* [color](api-modules-basic-types-module.md#color)
* [isDone](api-modules-basic-types-module.md#isdone)
* [numbers](api-modules-basic-types-module.md#numbers)


### Object literals

* [aMixedObject](api-modules-basic-types-module.md#amixedobject)



---
## Type aliases
<a id="someoptions"></a>

###  SomeOptions

**Τ SomeOptions**:  *`object`* 

*Defined in [basic-types.ts:49](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/basic-types.ts#L49)*


#### Type declaration




«Optional»  aFunction: `function`




►(): `void`





**Returns:** `void`







___


## Variables
<a id="amount"></a>

### «Const» amount

**●  amount**:  *`number`*  = 6

*Defined in [basic-types.ts:20](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/basic-types.ts#L20)*



This is a number type

    const decimal: number = 6;




___

<a id="color"></a>

### «Const» color

**●  color**:  *`string`*  = "blue"

*Defined in [basic-types.ts:28](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/basic-types.ts#L28)*



This is a string type

    const color: string = "blue";




___

<a id="isdone"></a>

### «Const» isDone

**●  isDone**:  *`boolean`*  = false

*Defined in [basic-types.ts:12](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/basic-types.ts#L12)*



This is a boolean type

    const isDone: boolean = false;




___

<a id="numbers"></a>

### «Const» numbers

**●  numbers**:  *`number`[]*  =  [1, 2, 3]

*Defined in [basic-types.ts:36](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/basic-types.ts#L36)*



This is an array type

    const numbers: number[] = [1, 2, 3];




___


<a id="amixedobject"></a>

## Object literal: aMixedObject


This is an object with various types


<a id="amixedobject.somenumber"></a>

###  someNumber

**●  someNumber**:  *`number`*  = 10

*Defined in [basic-types.ts:45](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/basic-types.ts#L45)*





___
<a id="amixedobject.somestring"></a>

###  someString

**●  someString**:  *`string`*  = "hello"

*Defined in [basic-types.ts:46](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/basic-types.ts#L46)*





___
<a id="amixedobject.somefunction"></a>

###  someFunction

► **someFunction**(): `string`



*Defined in [basic-types.ts:42](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/basic-types.ts#L42)*





**Returns:** `string`





___


