---
id: api-modules-interfaces-interfaces
title: interfaces
sidebar_label: interfaces
---

[typedoc-plugin-docusaurus](api-readme.md) > [[interfaces Module]](api-modules-interfaces-module.md) > [interfaces](api-modules-interfaces-interfaces.md)



## Module

### Interfaces

* [ClockConstructor](api-interfaces-interfaces-interfaces.clockconstructor.md)
* [ClockInterface](api-interfaces-interfaces-interfaces.clockinterface.md)
* [Shape](api-interfaces-interfaces-interfaces.shape.md)
* [Square](api-interfaces-interfaces-interfaces.square.md)
* [SquareConfig](api-interfaces-interfaces-interfaces.squareconfig.md)
* [StringArray](api-interfaces-interfaces-interfaces.stringarray.md)
* [Surface](api-interfaces-interfaces-interfaces.surface.md)


### Type aliases

* [SearchFunc](api-modules-interfaces-interfaces.md#searchfunc)


### Variables

* [mySearch](api-modules-interfaces-interfaces.md#mysearch)
* [square](api-modules-interfaces-interfaces.md#square-1)


### Functions

* [createClock](api-modules-interfaces-interfaces.md#createclock)



---
## Type aliases
<a id="searchfunc"></a>

###  SearchFunc

**Τ SearchFunc**:  *`function`* 

*Defined in [interfaces.ts:61](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L61)*


#### Type declaration
►(source: *`string`*, subString: *`string`*): `boolean`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| source | `string`   |  - |
| subString | `string`   |  - |





**Returns:** `boolean`






___


## Variables
<a id="mysearch"></a>

### «Let» mySearch

**●  mySearch**:  *[SearchFunc](api-modules-interfaces-interfaces.md#searchfunc)* 

*Defined in [interfaces.ts:63](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L63)*





___

<a id="square-1"></a>

### «Const» square

**●  square**:  *[Square](api-interfaces-interfaces-interfaces.square.md)*  =  {} as Square

*Defined in [interfaces.ts:97](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L97)*





___


## Functions
<a id="createclock"></a>

###  createClock

► **createClock**(ctor: *[ClockConstructor](api-interfaces-interfaces-interfaces.clockconstructor.md)*, hour: *`number`*, minute: *`number`*): [ClockInterface](api-interfaces-interfaces-interfaces.clockinterface.md)



*Defined in [interfaces.ts:85](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L85)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctor | [ClockConstructor](api-interfaces-interfaces-interfaces.clockconstructor.md)   |  - |
| hour | `number`   |  - |
| minute | `number`   |  - |





**Returns:** [ClockInterface](api-interfaces-interfaces-interfaces.clockinterface.md)





___


