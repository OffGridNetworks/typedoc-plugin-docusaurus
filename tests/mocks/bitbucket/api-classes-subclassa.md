---
id: api-classes-subclassa
title: SubClassA
sidebar_label: SubClassA
---

[typedoc-plugin-docusaurus](api-readme.md) > [SubClassA](api-classes-subclassa.md)



## Class


This is a class that extends another class.

This class has no own constructor, so its constructor should be inherited from BaseClass.

## Hierarchy


 [BaseClass](api-classes-baseclass.md)

**↳ SubClassA**







## Implements

* [INameInterface](api-interfaces-inameinterface.md)
* [IPrintNameInterface](api-interfaces-iprintnameinterface.md)

### Constructors

* [constructor](api-classes-subclassa.md#markdown-header-constructor)


### Properties

* [kind](api-classes-subclassa.md#markdown-header-protected-kind)
* [name](api-classes-subclassa.md#markdown-header-name)


### Accessors

* [nameProperty](api-classes-subclassa.md#markdown-header-nameproperty)
* [readOnlyNameProperty](api-classes-subclassa.md#markdown-header-readonlynameproperty)
* [writeOnlyNameProperty](api-classes-subclassa.md#markdown-header-writeonlynameproperty)


### Methods

* [arrowFunction](api-classes-subclassa.md#markdown-header-arrowfunction)
* [getName](api-classes-subclassa.md#markdown-header-getname)
* [print](api-classes-subclassa.md#markdown-header-print)
* [printName](api-classes-subclassa.md#markdown-header-printname)
* [setName](api-classes-subclassa.md#markdown-header-setname)
* [caTest](api-classes-subclassa.md#markdown-header-static-catest)
* [getInstance](api-classes-subclassa.md#markdown-header-static-getinstance)
* [getName](api-classes-subclassa.md#markdown-header-static-getname)



---
## Constructors



### ⊕ **new SubClassA**(name: *`string`*): [SubClassA](api-classes-subclassa.md)


### ⊕ **new SubClassA**(source: *[BaseClass](api-classes-baseclass.md)*): [SubClassA](api-classes-subclassa.md)


*Inherited from [BaseClass](api-classes-baseclass.md).[constructor](api-classes-baseclass.md#markdown-header-constructor)*

*Defined in [classes.ts:70](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-70)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |





**Returns:** [SubClassA](api-classes-subclassa.md)

*Inherited from [BaseClass](api-classes-baseclass.md).[constructor](api-classes-baseclass.md#markdown-header-constructor)*

*Defined in [classes.ts:72](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-72)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| source | [BaseClass](api-classes-baseclass.md)   |  - |





**Returns:** [SubClassA](api-classes-subclassa.md)

---


## Properties


### «Protected» kind

**●  kind**:  *`number`* 

*Inherited from [BaseClass](api-classes-baseclass.md).[kind](api-classes-baseclass.md#markdown-header-protected-kind)*

*Defined in [classes.ts:65](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-65)*



This is a simple protected member.




___



###  name

**●  name**:  *`string`* 

*Implementation of [IPrintNameInterface](api-interfaces-iprintnameinterface.md).[name](api-interfaces-iprintnameinterface.md#markdown-header-name)*

*Inherited from [BaseClass](api-classes-baseclass.md).[name](api-classes-baseclass.md#markdown-header-name)*

*Defined in [classes.ts:60](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-60)*



This is a simple public member.




___


## Accessors


###  nameProperty


getnameProperty(): `string`setnameProperty(value: *`string`*): `void`

*Defined in [classes.ts:199](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-199)*



Returns the name. See [BaseClass.name](api-classes-baseclass.md#markdown-header-name).




**Returns:** `string`
The return value.


*Defined in [classes.ts:209](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-209)*



Sets the name. See [BaseClass.name](api-classes-baseclass.md#markdown-header-name).


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The new name. |





**Returns:** `void`
The return value.




___



###  readOnlyNameProperty


getreadOnlyNameProperty(): `string`

*Defined in [classes.ts:218](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-218)*



Returns the name. See [BaseClass.name](api-classes-baseclass.md#markdown-header-name).




**Returns:** `string`
The return value.




___



###  writeOnlyNameProperty


setwriteOnlyNameProperty(value: *`string`*): `void`

*Defined in [classes.ts:228](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-228)*



Sets the name. See [BaseClass.name](api-classes-baseclass.md#markdown-header-name).


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The new name. |





**Returns:** `void`
The return value.




___


## Methods


###  arrowFunction

► **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`



*Inherited from [BaseClass](api-classes-baseclass.md).[arrowFunction](api-classes-baseclass.md#markdown-header-arrowfunction)*

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



*Implementation of [IPrintNameInterface](api-interfaces-iprintnameinterface.md).[getName](api-interfaces-iprintnameinterface.md#markdown-header-getname)*

*Inherited from [BaseClass](api-classes-baseclass.md).[getName](api-classes-baseclass.md#markdown-header-getname)*

*Defined in [classes.ts:94](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-94)*



This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___



###  print

► **print**(value: *`string`*): `void`



*Implementation of [IPrintNameInterface](api-interfaces-iprintnameinterface.md).[print](api-interfaces-iprintnameinterface.md#markdown-header-print)*

*Defined in [classes.ts:185](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-185)*



This is a simple interface function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  - |





**Returns:** `void`





___



###  printName

► **printName**(): `void`



*Implementation of [IPrintNameInterface](api-interfaces-iprintnameinterface.md).[printName](api-interfaces-iprintnameinterface.md#markdown-header-printname)*

*Defined in [classes.ts:190](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-190)*



This is a interface function of IPrintNameInterface




**Returns:** `void`





___



###  setName

► **setName**(name: *`string`*): `void`



*Inherited from [BaseClass](api-classes-baseclass.md).[setName](api-classes-baseclass.md#markdown-header-setname)*

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



*Inherited from [BaseClass](api-classes-baseclass.md).[caTest](api-classes-baseclass.md#markdown-header-static-catest)*

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



*Inherited from [BaseClass](api-classes-baseclass.md).[getInstance](api-classes-baseclass.md#markdown-header-static-getinstance)*

*Defined in [classes.ts:146](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-146)*



This is a static function.

Static functions should not be inherited.




**Returns:** [BaseClass](api-classes-baseclass.md)
An instance of BaseClass.






___



### «Static» getName

► **getName**(): `string`



*Inherited from [BaseClass](api-classes-baseclass.md).[getName](api-classes-baseclass.md#markdown-header-static-getname)*

*Defined in [classes.ts:106](https://bitbucket.org/owner/repository_name/src/master/src/classes.ts?fileviewer&amp;#x3D;file-view-default#classes.ts-106)*



This is a simple static member function.

Static functions should not be inherited. This class has a member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___


