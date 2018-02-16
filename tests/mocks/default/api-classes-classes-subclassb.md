---
id: api-classes-classes-subclassb
title: SubClassB
sidebar_label: SubClassB
---

[typedoc-plugin-docusaurus](api-readme.md) > [[classes Module]](api-modules-classes-module.md) > [SubClassB](api-classes-classes-subclassb.md)



## Class


This is a class that extends another class.

The constructor of the original class should be overwritten.

## Hierarchy


 [BaseClass](api-classes-classes-baseclass.md)

**↳ SubClassB**







## Implements

* [INameInterface](api-interfaces-classes-inameinterface.md)

### Constructors

* [constructor](api-classes-classes-subclassb.md#constructor)


### Properties

* [kind](api-classes-classes-subclassb.md#kind)
* [name](api-classes-classes-subclassb.md#name)


### Methods

* [arrowFunction](api-classes-classes-subclassb.md#arrowfunction)
* [doSomething](api-classes-classes-subclassb.md#dosomething)
* [getName](api-classes-classes-subclassb.md#getname)
* [setName](api-classes-classes-subclassb.md#setname)
* [caTest](api-classes-classes-subclassb.md#catest)
* [getInstance](api-classes-classes-subclassb.md#getinstance)
* [getName](api-classes-classes-subclassb.md#getname-1)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new SubClassB**(name: *`string`*): [SubClassB](api-classes-classes-subclassb.md)


*Overrides [BaseClass](api-classes-classes-baseclass.md).[constructor](api-classes-classes-baseclass.md#constructor)*

*Defined in [classes.ts:238](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L238)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |





**Returns:** [SubClassB](api-classes-classes-subclassb.md)

---


## Properties
<a id="kind"></a>

### «Protected» kind

**●  kind**:  *`number`* 

*Inherited from [BaseClass](api-classes-classes-baseclass.md).[kind](api-classes-classes-baseclass.md#kind)*

*Defined in [classes.ts:65](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L65)*



This is a simple protected member.




___

<a id="name"></a>

###  name

**●  name**:  *`string`* 

*Implementation of [INameInterface](api-interfaces-classes-inameinterface.md).[name](api-interfaces-classes-inameinterface.md#name)*

*Inherited from [BaseClass](api-classes-classes-baseclass.md).[name](api-classes-classes-baseclass.md#name)*

*Defined in [classes.ts:60](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L60)*



This is a simple public member.




___


## Methods
<a id="arrowfunction"></a>

###  arrowFunction

► **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`



*Inherited from [BaseClass](api-classes-classes-baseclass.md).[arrowFunction](api-classes-classes-baseclass.md#arrowfunction)*

*Defined in [classes.ts:129](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L129)*



This is a simple fat arrow function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| param2 | `string`   |  The second parameter needed by this function. |
| param1 | `number`   |  The first parameter needed by this function. |





**Returns:** `void`





___

<a id="dosomething"></a>

###  doSomething

► **doSomething**(value: *[`string`,[SubClassA](api-classes-classes-subclassa.md),[SubClassB](api-classes-classes-subclassb.md)]*): `void`



*Defined in [classes.ts:243](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L243)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [`string`,[SubClassA](api-classes-classes-subclassa.md),[SubClassB](api-classes-classes-subclassb.md)]   |  - |





**Returns:** `void`





___

<a id="getname"></a>

###  getName

► **getName**(): `string`



*Implementation of [INameInterface](api-interfaces-classes-inameinterface.md).[getName](api-interfaces-classes-inameinterface.md#getname)*

*Inherited from [BaseClass](api-classes-classes-baseclass.md).[getName](api-classes-classes-baseclass.md#getname)*

*Defined in [classes.ts:94](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L94)*



This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___

<a id="setname"></a>

###  setName

► **setName**(name: *`string`*): `void`



*Inherited from [BaseClass](api-classes-classes-baseclass.md).[setName](api-classes-classes-baseclass.md#setname)*

*Defined in [classes.ts:117](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L117)*



This is a simple member function.

It should be inherited by all subclasses.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The new name. |





**Returns:** `void`





___

<a id="catest"></a>

### «Static» caTest

► **caTest**(originalValues: *[BaseClass](api-classes-classes-baseclass.md)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`



*Inherited from [BaseClass](api-classes-classes-baseclass.md).[caTest](api-classes-classes-baseclass.md#catest)*

*Defined in [classes.ts:153](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L153)*


*__see__*: [https://github.com/sebastian-lenz/typedoc/issues/42](https://github.com/sebastian-lenz/typedoc/issues/42)



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| originalValues | [BaseClass](api-classes-classes-baseclass.md)   |  - |
| newRecord | `any`   |  - |
| fieldNames | `string`[]   |  - |
| mandatoryFields | `string`[]   |  - |





**Returns:** `string`





___

<a id="getinstance"></a>

### «Static» getInstance

► **getInstance**(): [BaseClass](api-classes-classes-baseclass.md)



*Inherited from [BaseClass](api-classes-classes-baseclass.md).[getInstance](api-classes-classes-baseclass.md#getinstance)*

*Defined in [classes.ts:146](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L146)*



This is a static function.

Static functions should not be inherited.




**Returns:** [BaseClass](api-classes-classes-baseclass.md)
An instance of BaseClass.






___

<a id="getname-1"></a>

### «Static» getName

► **getName**(): `string`



*Inherited from [BaseClass](api-classes-classes-baseclass.md).[getName](api-classes-classes-baseclass.md#getname-1)*

*Defined in [classes.ts:106](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L106)*



This is a simple static member function.

Static functions should not be inherited. This class has a member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___


