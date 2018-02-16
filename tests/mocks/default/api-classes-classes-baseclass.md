---
id: api-classes-classes-baseclass
title: BaseClass
sidebar_label: BaseClass
---

[typedoc-plugin-docusaurus](api-readme.md) > [[classes Module]](api-modules-classes-module.md) > [BaseClass](api-classes-classes-baseclass.md)



## Class


This is a simple base class.

This is a simple example on how to use BaseClass.

![My image alt text](media/logo-128.png)

## Hierarchy

**BaseClass**

↳  [SubClassA](api-classes-classes-subclassa.md)




↳  [SubClassB](api-classes-classes-subclassb.md)








## Implements

* [INameInterface](api-interfaces-classes-inameinterface.md)

### Constructors

* [constructor](api-classes-classes-baseclass.md#constructor)


### Properties

* [internalClass](api-classes-classes-baseclass.md#internalclass)
* [kind](api-classes-classes-baseclass.md#kind)
* [name](api-classes-classes-baseclass.md#name)
* [instance](api-classes-classes-baseclass.md#instance)
* [instances](api-classes-classes-baseclass.md#instances)


### Methods

* [arrowFunction](api-classes-classes-baseclass.md#arrowfunction)
* [checkName](api-classes-classes-baseclass.md#checkname)
* [getName](api-classes-classes-baseclass.md#getname)
* [setName](api-classes-classes-baseclass.md#setname)
* [caTest](api-classes-classes-baseclass.md#catest)
* [getInstance](api-classes-classes-baseclass.md#getinstance)
* [getName](api-classes-classes-baseclass.md#getname-1)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new BaseClass**(name: *`string`*): [BaseClass](api-classes-classes-baseclass.md)


### ⊕ **new BaseClass**(source: *[BaseClass](api-classes-classes-baseclass.md)*): [BaseClass](api-classes-classes-baseclass.md)


*Defined in [classes.ts:70](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L70)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |





**Returns:** [BaseClass](api-classes-classes-baseclass.md)

*Defined in [classes.ts:72](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L72)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| source | [BaseClass](api-classes-classes-baseclass.md)   |  - |





**Returns:** [BaseClass](api-classes-classes-baseclass.md)

---


## Properties
<a id="internalclass"></a>

### «Private» internalClass

**●  internalClass**:  *[InternalClass](api-classes-classes-internalclass.md)* 

*Defined in [classes.ts:70](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L70)*



This is an instance member of an internal class.




___

<a id="kind"></a>

### «Protected» kind

**●  kind**:  *`number`* 

*Defined in [classes.ts:65](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L65)*



This is a simple protected member.




___

<a id="name"></a>

###  name

**●  name**:  *`string`* 

*Implementation of [INameInterface](api-interfaces-classes-inameinterface.md).[name](api-interfaces-classes-inameinterface.md#name)*

*Defined in [classes.ts:60](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L60)*



This is a simple public member.




___

<a id="instance"></a>

### «Static»«Private» instance

**●  instance**:  *[BaseClass](api-classes-classes-baseclass.md)* 

*Defined in [classes.ts:55](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L55)*



This is a static member.

Static members should not be inherited.




___

<a id="instances"></a>

### «Static»«Private» instances

**●  instances**:  *[BaseClass](api-classes-classes-baseclass.md)[]* 

*Defined in [classes.ts:56](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L56)*





___


## Methods
<a id="arrowfunction"></a>

###  arrowFunction

► **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`



*Defined in [classes.ts:129](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L129)*



This is a simple fat arrow function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| param2 | `string`   |  The second parameter needed by this function. |
| param1 | `number`   |  The first parameter needed by this function. |





**Returns:** `void`





___

<a id="checkname"></a>

### «Private» checkName

► **checkName**(): `boolean`



*Defined in [classes.ts:135](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L135)*



This is a private function.




**Returns:** `boolean`





___

<a id="getname"></a>

###  getName

► **getName**(): `string`



*Implementation of [INameInterface](api-interfaces-classes-inameinterface.md).[getName](api-interfaces-classes-inameinterface.md#getname)*

*Defined in [classes.ts:94](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L94)*



This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___

<a id="setname"></a>

###  setName

► **setName**(name: *`string`*): `void`



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



*Defined in [classes.ts:146](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L146)*



This is a static function.

Static functions should not be inherited.




**Returns:** [BaseClass](api-classes-classes-baseclass.md)
An instance of BaseClass.






___

<a id="getname-1"></a>

### «Static» getName

► **getName**(): `string`



*Defined in [classes.ts:106](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L106)*



This is a simple static member function.

Static functions should not be inherited. This class has a member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___


