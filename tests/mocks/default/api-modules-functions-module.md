---
id: api-modules-functions-module
title: functions Module
sidebar_label: functions
---

[typedoc-plugin-docusaurus](api-readme.md) > [[functions Module]](api-modules-functions-module.md)



## Module

### Modules

* [moduleFunction](api-modules-functions-modulefunction.md)


### Interfaces

* [IGameEvent](api-interfaces-functions-igameevent.md)


### Variables

* [Promise](api-modules-functions-module.md#promise)


### Functions

* [createSomething](api-modules-functions-module.md#createsomething)
* [exportedFunction](api-modules-functions-module.md#exportedfunction)
* [functionWithArguments](api-modules-functions-module.md#functionwitharguments)
* [functionWithDefaults](api-modules-functions-module.md#functionwithdefaults)
* [functionWithDocLink](api-modules-functions-module.md#functionwithdoclink)
* [functionWithOptionalValue](api-modules-functions-module.md#functionwithoptionalvalue)
* [functionWithRest](api-modules-functions-module.md#functionwithrest)
* [genericFunction](api-modules-functions-module.md#genericfunction)
* [internalFunction](api-modules-functions-module.md#internalfunction)
* [multipleSignatures](api-modules-functions-module.md#multiplesignatures)
* [returnTypeAny](api-modules-functions-module.md#returntypeany)
* [returnTypeInterface](api-modules-functions-module.md#returntypeinterface)
* [returnTypeInterfaceWithPromise](api-modules-functions-module.md#returntypeinterfacewithpromise)
* [returnTypeObject](api-modules-functions-module.md#returntypeobject)
* [variableFunction](api-modules-functions-module.md#variablefunction)



---
## Variables
<a id="promise"></a>

###  Promise

**●  Promise**:  *`any`* 

*Defined in [functions.ts:176](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L176)*





___


## Functions
<a id="createsomething"></a>

###  createSomething

► **createSomething**(): `object`



*Defined in [functions.ts:155](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L155)*



A function that returns an object. Also no type information is given, the object should be correctly reflected.




**Returns:** `object`





___

<a id="exportedfunction"></a>

###  exportedFunction

► **exportedFunction**(): `void`



*Defined in [functions.ts:11](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L11)*



This is a simple exported function.




**Returns:** `void`





___

<a id="functionwitharguments"></a>

###  functionWithArguments

► **functionWithArguments**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](api-interfaces-classes-inameinterface.md)*): `number`



*Defined in [functions.ts:38](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L38)*



This is a function with multiple arguments and a return value.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string`   |  This is a string parameter. |
| paramG | `any`   |  This is a parameter flagged with any. This sentence is placed in the next line. |
| paramA | [INameInterface](api-interfaces-classes-inameinterface.md)   |  This is a **parameter** pointing to an interface. |





**Returns:** `number`





___

<a id="functionwithdefaults"></a>

###  functionWithDefaults

► **functionWithDefaults**(valueA?: *`string`*, valueB?: *`number`*, valueC?: *`number`*, valueD?: *`boolean`*, valueE: *`any`*): `string`



*Defined in [functions.ts:58](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L58)*



This is a function with a parameter that has a default value.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| valueA | `string`  | &quot;defaultValue&quot; |   Comment for value A. |
| valueB | `number`  | 100 |   - |
| valueC | `number`  |  Number.NaN |   Comment for value C |
| valueD | `boolean`  | true |   - |
| valueE | `any`  | - |   Comment for value E |





**Returns:** `string`
The input value or the default value.






___

<a id="functionwithdoclink"></a>

###  functionWithDocLink

► **functionWithDocLink**(): `void`



*Defined in [functions.ts:170](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L170)*



See [`INameInterface`](api-interfaces-classes-inameinterface.md) and [INameInterface's name property](api-interfaces-classes-inameinterface.md#name). Also, check out [Google](http://www.google.com) and [GitHub](https://github.com).

Taken from [http://usejsdoc.org/tags-inline-link.html](http://usejsdoc.org/tags-inline-link.html).




**Returns:** `void`





___

<a id="functionwithoptionalvalue"></a>

###  functionWithOptionalValue

► **functionWithOptionalValue**(requiredParam: *`string`*, optionalParam?: *`string`*): `void`



*Defined in [functions.ts:48](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L48)*



This is a function with a parameter that is optional.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| requiredParam | `string`   |  A normal parameter. |
| optionalParam | `string`   |  An optional parameter. |





**Returns:** `void`





___

<a id="functionwithrest"></a>

###  functionWithRest

► **functionWithRest**(...rest: *`string`[]*): `string`



*Defined in [functions.ts:74](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L74)*



This is a function with rest parameter.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rest | `string`[]   |  Multiple strings. |





**Returns:** `string`
The combined string.






___

<a id="genericfunction"></a>

###  genericFunction

► **genericFunction**T(value: *`T`*): `T`



*Defined in [functions.ts:116](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L116)*



This is a generic function.


**Type parameters:**

#### T 

The type parameter.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `T`   |  The typed value. |





**Returns:** `T`
Returns the typed value.






___

<a id="internalfunction"></a>

###  internalFunction

► **internalFunction**(): `void`



*Defined in [functions.ts:6](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L6)*



This is an internal function.




**Returns:** `void`





___

<a id="multiplesignatures"></a>

###  multipleSignatures

► **multipleSignatures**(value: *`string`*): `string`

► **multipleSignatures**(value: *`object`*): `string`



*Defined in [functions.ts:83](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L83)*



This is the first signature of a function with multiple signatures.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The name value. |





**Returns:** `string`



*Defined in [functions.ts:91](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L91)*



This is the second signature of a function with multiple signatures.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `object`   |  An object containing the name value. |





**Returns:** `string`





___

<a id="returntypeany"></a>

###  returnTypeAny

► **returnTypeAny**(): `Promise`.<`any`>



*Defined in [functions.ts:191](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L191)*





**Returns:** `Promise`.<`any`>





___

<a id="returntypeinterface"></a>

###  returnTypeInterface

► **returnTypeInterface**(): [IGameEvent](api-interfaces-functions-igameevent.md)



*Defined in [functions.ts:177](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L177)*





**Returns:** [IGameEvent](api-interfaces-functions-igameevent.md)





___

<a id="returntypeinterfacewithpromise"></a>

###  returnTypeInterfaceWithPromise

► **returnTypeInterfaceWithPromise**(): `Promise`.<[IGameEvent](api-interfaces-functions-igameevent.md)>



*Defined in [functions.ts:183](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L183)*





**Returns:** `Promise`.<[IGameEvent](api-interfaces-functions-igameevent.md)>





___

<a id="returntypeobject"></a>

###  returnTypeObject

► **returnTypeObject**(properties: *`object`*): `object`



*Defined in [functions.ts:201](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L201)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| properties | `object`   |  - |





**Returns:** `object`





___

<a id="variablefunction"></a>

### «Const» variableFunction

► **variableFunction**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](api-interfaces-classes-inameinterface.md)*): `number`



*Defined in [functions.ts:23](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/functions.ts#L23)*



This is a function with multiple arguments and a return value.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string`   |  This is a string parameter. |
| paramG | `any`   |  This is a parameter flagged with any. This sentence is placed in the next line. |
| paramA | [INameInterface](api-interfaces-classes-inameinterface.md)   |  This is a **parameter** pointing to an interface. |





**Returns:** `number`





___


