---
id: api-classes-baseclass
title: BaseClass
sidebar_label: BaseClass
---

[typedoc-plugin-docusaurus](api-readme.md) > [BaseClass](api-classes-baseclass.md)



## Class


This is a simple base class.

This is a simple example on how to use BaseClass.

![My image alt text](media/logo-128.png)

## Hierarchy

**BaseClass**

↳  [SubClassA](api-classes-subclassa.md)




↳  [SubClassB](api-classes-subclassb.md)








## Implements

* [INameInterface](api-interfaces-inameinterface.md)

### Constructors

* [constructor](api-classes-baseclass.md#markdown-header-constructor)


### Properties

* [kind](api-classes-baseclass.md#markdown-header-protected-kind)
* [name](api-classes-baseclass.md#markdown-header-name)


### Methods

* [arrowFunction](api-classes-baseclass.md#markdown-header-arrowfunction)
* [getName](api-classes-baseclass.md#markdown-header-getname)
* [setName](api-classes-baseclass.md#markdown-header-setname)
* [caTest](api-classes-baseclass.md#markdown-header-static-catest)
* [getInstance](api-classes-baseclass.md#markdown-header-static-getinstance)
* [getName](api-classes-baseclass.md#markdown-header-static-getname)



---
## Constructors



### ⊕ **new BaseClass**(name: *`string`*): [BaseClass](api-classes-baseclass.md)


### ⊕ **new BaseClass**(source: *[BaseClass](api-classes-baseclass.md)*): [BaseClass](api-classes-baseclass.md)


*Defined in [classes.ts:70](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-70)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |





**Returns:** [BaseClass](api-classes-baseclass.md)

*Defined in [classes.ts:72](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-72)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| source | [BaseClass](api-classes-baseclass.md)   |  - |





**Returns:** [BaseClass](api-classes-baseclass.md)

---


## Properties


### «Protected» kind

**●  kind**:  *`number`* 

*Defined in [classes.ts:65](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-65)*



This is a simple protected member.




___



###  name

**●  name**:  *`string`* 

*Implementation of [INameInterface](api-interfaces-inameinterface.md).[name](api-interfaces-inameinterface.md#markdown-header-name)*

*Defined in [classes.ts:60](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-60)*



This is a simple public member.




___


## Methods


###  arrowFunction

► **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`



*Defined in [classes.ts:129](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-129)*



This is a simple fat arrow function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| param2 | `string`   |  The second parameter needed by this function. |
| param1 | `number`   |  The first parameter needed by this function. |





**Returns:** `void`





___



###  getName

► **getName**(): `string`



*Implementation of [INameInterface](api-interfaces-inameinterface.md).[getName](api-interfaces-inameinterface.md#markdown-header-getname)*

*Defined in [classes.ts:94](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-94)*



This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___



###  setName

► **setName**(name: *`string`*): `void`



*Defined in [classes.ts:117](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-117)*



This is a simple member function.

It should be inherited by all subclasses.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The new name. |





**Returns:** `void`





___



### «Static» caTest

► **caTest**(originalValues: *[BaseClass](api-classes-baseclass.md)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`



*Defined in [classes.ts:153](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-153)*


*__see__*: [https://github.com/sebastian-lenz/typedoc/issues/42](https://github.com/sebastian-lenz/typedoc/issues/42)



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| originalValues | [BaseClass](api-classes-baseclass.md)   |  - |
| newRecord | `any`   |  - |
| fieldNames | `string`[]   |  - |
| mandatoryFields | `string`[]   |  - |





**Returns:** `string`





___



### «Static» getInstance

► **getInstance**(): [BaseClass](api-classes-baseclass.md)



*Defined in [classes.ts:146](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-146)*



This is a static function.

Static functions should not be inherited.




**Returns:** [BaseClass](api-classes-baseclass.md)
An instance of BaseClass.






___



### «Static» getName

► **getName**(): `string`



*Defined in [classes.ts:106](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-106)*



This is a simple static member function.

Static functions should not be inherited. This class has a member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___


