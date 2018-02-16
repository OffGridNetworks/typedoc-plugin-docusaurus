---
id: api-modules-interfaces
title: interfaces
sidebar_label: interfaces
---

[typedoc-plugin-docusaurus](api-readme.md) > [interfaces](api-modules-interfaces.md)



## Module

### Interfaces

* [ClockConstructor](api-interfaces-interfaces.clockconstructor.md)
* [ClockInterface](api-interfaces-interfaces.clockinterface.md)
* [Shape](api-interfaces-interfaces.shape.md)
* [Square](api-interfaces-interfaces.square.md)
* [SquareConfig](api-interfaces-interfaces.squareconfig.md)
* [StringArray](api-interfaces-interfaces.stringarray.md)
* [Surface](api-interfaces-interfaces.surface.md)


### Type aliases

* [SearchFunc](api-modules-interfaces.md#markdown-header-searchfunc)


### Variables

* [mySearch](api-modules-interfaces.md#markdown-header-let-mysearch)
* [square](api-modules-interfaces.md#markdown-header-const-square)


### Functions

* [createClock](api-modules-interfaces.md#markdown-header-createclock)



---
## Type aliases


###  SearchFunc

**Τ SearchFunc**:  *`function`* 

*Defined in [interfaces.ts:61](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-61)*


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


### «Let» mySearch

**●  mySearch**:  *[SearchFunc](api-modules-interfaces.md#markdown-header-searchfunc)* 

*Defined in [interfaces.ts:63](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-63)*





___



### «Const» square

**●  square**:  *[Square](api-interfaces-interfaces.square.md)*  =  {} as Square

*Defined in [interfaces.ts:97](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-97)*





___


## Functions


###  createClock

► **createClock**(ctor: *[ClockConstructor](api-interfaces-interfaces.clockconstructor.md)*, hour: *`number`*, minute: *`number`*): [ClockInterface](api-interfaces-interfaces.clockinterface.md)



*Defined in [interfaces.ts:85](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-85)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctor | [ClockConstructor](api-interfaces-interfaces.clockconstructor.md)   |  - |
| hour | `number`   |  - |
| minute | `number`   |  - |





**Returns:** [ClockInterface](api-interfaces-interfaces.clockinterface.md)





___


