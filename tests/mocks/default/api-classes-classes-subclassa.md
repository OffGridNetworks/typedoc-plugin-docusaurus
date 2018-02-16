---
id: api-classes-classes-subclassa
title: SubClassA
sidebar_label: SubClassA
---

[typedoc-plugin-docusaurus](api-readme.md) > [[classes Module]](api-modules-classes-module.md) > [SubClassA](api-classes-classes-subclassa.md)



## Class


This is a class that extends another class.

This class has no own constructor, so its constructor should be inherited from BaseClass.

## Hierarchy


 [BaseClass](api-classes-classes-baseclass.md)

**↳ SubClassA**







## Implements

* [INameInterface](api-interfaces-classes-inameinterface.md)
* [IPrintNameInterface](api-interfaces-classes-iprintnameinterface.md)

### Constructors

* [constructor](api-classes-classes-subclassa.md#constructor)


### Properties

* [kind](api-classes-classes-subclassa.md#kind)
* [name](api-classes-classes-subclassa.md#name)


### Accessors

* [nameProperty](api-classes-classes-subclassa.md#nameproperty)
* [readOnlyNameProperty](api-classes-classes-subclassa.md#readonlynameproperty)
* [writeOnlyNameProperty](api-classes-classes-subclassa.md#writeonlynameproperty)


### Methods

* [arrowFunction](api-classes-classes-subclassa.md#arrowfunction)
* [getName](api-classes-classes-subclassa.md#getname)
* [print](api-classes-classes-subclassa.md#print)
* [printName](api-classes-classes-subclassa.md#printname)
* [setName](api-classes-classes-subclassa.md#setname)
* [caTest](api-classes-classes-subclassa.md#catest)
* [getInstance](api-classes-classes-subclassa.md#getinstance)
* [getName](api-classes-classes-subclassa.md#getname-1)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new SubClassA**(name: *`string`*): [SubClassA](api-classes-classes-subclassa.md)


### ⊕ **new SubClassA**(source: *[BaseClass](api-classes-classes-baseclass.md)*): [SubClassA](api-classes-classes-subclassa.md)


*Inherited from [BaseClass](api-classes-classes-baseclass.md).[constructor](api-classes-classes-baseclass.md#constructor)*

*Defined in [classes.ts:70](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L70)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |





**Returns:** [SubClassA](api-classes-classes-subclassa.md)

*Inherited from [BaseClass](api-classes-classes-baseclass.md).[constructor](api-classes-classes-baseclass.md#constructor)*

*Defined in [classes.ts:72](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L72)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| source | [BaseClass](api-classes-classes-baseclass.md)   |  - |





**Returns:** [SubClassA](api-classes-classes-subclassa.md)

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

*Implementation of [IPrintNameInterface](api-interfaces-classes-iprintnameinterface.md).[name](api-interfaces-classes-iprintnameinterface.md#name)*

*Inherited from [BaseClass](api-classes-classes-baseclass.md).[name](api-classes-classes-baseclass.md#name)*

*Defined in [classes.ts:60](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L60)*



This is a simple public member.




___


## Accessors
<a id="nameproperty"></a>

###  nameProperty


getnameProperty(): `string`setnameProperty(value: *`string`*): `void`

*Defined in [classes.ts:199](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L199)*



Returns the name. See [BaseClass.name](api-classes-classes-baseclass.md#name).




**Returns:** `string`
The return value.


*Defined in [classes.ts:209](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L209)*



Sets the name. See [BaseClass.name](api-classes-classes-baseclass.md#name).


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The new name. |





**Returns:** `void`
The return value.




___

<a id="readonlynameproperty"></a>

###  readOnlyNameProperty


getreadOnlyNameProperty(): `string`

*Defined in [classes.ts:218](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L218)*



Returns the name. See [BaseClass.name](api-classes-classes-baseclass.md#name).




**Returns:** `string`
The return value.




___

<a id="writeonlynameproperty"></a>

###  writeOnlyNameProperty


setwriteOnlyNameProperty(value: *`string`*): `void`

*Defined in [classes.ts:228](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L228)*



Sets the name. See [BaseClass.name](api-classes-classes-baseclass.md#name).


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The new name. |





**Returns:** `void`
The return value.




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

<a id="getname"></a>

###  getName

► **getName**(): `string`



*Implementation of [IPrintNameInterface](api-interfaces-classes-iprintnameinterface.md).[getName](api-interfaces-classes-iprintnameinterface.md#getname)*

*Inherited from [BaseClass](api-classes-classes-baseclass.md).[getName](api-classes-classes-baseclass.md#getname)*

*Defined in [classes.ts:94](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L94)*



This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___

<a id="print"></a>

###  print

► **print**(value: *`string`*): `void`



*Implementation of [IPrintNameInterface](api-interfaces-classes-iprintnameinterface.md).[print](api-interfaces-classes-iprintnameinterface.md#print)*

*Defined in [classes.ts:185](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L185)*



This is a simple interface function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  - |





**Returns:** `void`





___

<a id="printname"></a>

###  printName

► **printName**(): `void`



*Implementation of [IPrintNameInterface](api-interfaces-classes-iprintnameinterface.md).[printName](api-interfaces-classes-iprintnameinterface.md#printname)*

*Defined in [classes.ts:190](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/classes.ts#L190)*



This is a interface function of IPrintNameInterface




**Returns:** `void`





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


