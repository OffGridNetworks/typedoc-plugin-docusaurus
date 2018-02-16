---
id: api-readme
title: typedoc-plugin-docusaurus
sidebar_label: typedoc-plugin-docusaurus
---






### Modules

* [Enums](api-modules-enums.md)
* [interfaces](api-modules-interfaces.md)
* [moduleFunction](api-modules-modulefunction.md)


### Classes

* [BaseClass](api-classes-baseclass.md)
* [Color](api-classes-color.md)
* [DatabaseProviderBase](api-classes-databaseproviderbase.md)
* [Employee](api-classes-employee.md)
* [GenericClass](api-classes-genericclass.md)
* [Greeter](api-classes-greeter.md)
* [InternalClass](api-classes-internalclass.md)
* [NonGenericClass](api-classes-nongenericclass.md)
* [Person](api-classes-person.md)
* [SubClassA](api-classes-subclassa.md)
* [SubClassB](api-classes-subclassb.md)
* [Vector](api-classes-vector.md)


### Interfaces

* [IApiElementType](api-interfaces-iapielementtype.md)
* [IApiGameEvent](api-interfaces-iapigameevent.md)
* [IApiGameFormations](api-interfaces-iapigameformations.md)
* [IApiGameSettings](api-interfaces-iapigamesettings.md)
* [IApiLeaguePositions](api-interfaces-iapileaguepositions.md)
* [IGameEvent](api-interfaces-igameevent.md)
* [INameInterface](api-interfaces-inameinterface.md)
* [IPrintInterface](api-interfaces-iprintinterface.md)
* [IPrintNameInterface](api-interfaces-iprintnameinterface.md)


### Type aliases

* [SomeOptions](#markdown-header-someoptions)


### Variables

* [Promise](#markdown-header-promise)
* [amount](#markdown-header-const-amount)
* [color](#markdown-header-const-color)
* [commentsWithTags](#markdown-header-const-commentswithtags)
* [generalComments](#markdown-header-const-generalcomments)
* [greeter](#markdown-header-const-greeter)
* [isDone](#markdown-header-const-isdone)
* [numbers](#markdown-header-const-numbers)
* [publicVar](#markdown-header-const-publicvar)


### Functions

* [createSomething](#markdown-header-createsomething)
* [exportedFunction](#markdown-header-exportedfunction)
* [functionWithArguments](#markdown-header-functionwitharguments)
* [functionWithDefaults](#markdown-header-functionwithdefaults)
* [functionWithDocLink](#markdown-header-functionwithdoclink)
* [functionWithOptionalValue](#markdown-header-functionwithoptionalvalue)
* [functionWithRest](#markdown-header-functionwithrest)
* [genericFunction](#markdown-header-genericfunction)
* [internalFunction](#markdown-header-internalfunction)
* [multipleSignatures](#markdown-header-multiplesignatures)
* [publicFunction](#markdown-header-publicfunction)
* [returnTypeAny](#markdown-header-returntypeany)
* [returnTypeInterface](#markdown-header-returntypeinterface)
* [returnTypeInterfaceWithPromise](#markdown-header-returntypeinterfacewithpromise)
* [returnTypeObject](#markdown-header-returntypeobject)
* [variableFunction](#markdown-header-const-variablefunction)


### Object literals

* [aMixedObject](#markdown-header-object-literal-const-amixedobject)



---
# Type aliases


###  SomeOptions

**Τ SomeOptions**:  *`object`* 

*Defined in [basic-types.ts:49](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-49)*


#### Type declaration




«Optional»  aFunction: `function`




►(): `void`





**Returns:** `void`







___


# Variables


###  Promise

**●  Promise**:  *`any`* 

*Defined in [functions.ts:176](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-176)*





___



### «Const» amount

**●  amount**:  *`number`*  = 6

*Defined in [basic-types.ts:20](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-20)*



This is a number type

    const decimal: number = 6;




___



### «Const» color

**●  color**:  *`string`*  = "blue"

*Defined in [basic-types.ts:28](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-28)*



This is a string type

    const color: string = "blue";




___



### «Const» commentsWithTags

**●  commentsWithTags**:  *`boolean`*  = false

*Defined in [doc-comments.ts:27](https://bitbucket.org/owner/repository_name/src/master/src/doc-comments.ts?fileviewer&amp;#x3D;file-view-default#doc-comments.ts-27)*


*__name__*: AbstractMetadataModule

*__description__*: Provides the module for the [BaseClass](api-classes-baseclass.md)

    {
     declarations: [AbstractMetadataComponent],
     exports: [AbstractMetadataComponent],
     imports: [
       IonicModule,
       StackIonSelectModule,
     ],
     providers: [],
    }





___



### «Const» generalComments

**●  generalComments**:  *`boolean`*  = false

*Defined in [doc-comments.ts:9](https://bitbucket.org/owner/repository_name/src/master/src/doc-comments.ts?fileviewer&amp;#x3D;file-view-default#doc-comments.ts-9)*



Additionally you can link to other classes, members or functions using double square brackets.

Link to a class: [BaseClass](api-classes-baseclass.md) Link to a function: [createSomething](#markdown-header-createsomething) Link to a function: [color](#markdown-header-const-color)




___



### «Const» greeter

**●  greeter**:  *[Greeter](api-classes-greeter.md)*  =  new Greeter('world')

*Defined in [internal.ts:18](https://bitbucket.org/owner/repository_name/src/master/src/internal.ts?fileviewer&amp;#x3D;file-view-default#internal.ts-18)*





___



### «Const» isDone

**●  isDone**:  *`boolean`*  = false

*Defined in [basic-types.ts:12](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-12)*



This is a boolean type

    const isDone: boolean = false;




___



### «Const» numbers

**●  numbers**:  *`number`[]*  =  [1, 2, 3]

*Defined in [basic-types.ts:36](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-36)*



This is an array type

    const numbers: number[] = [1, 2, 3];




___




### «Const» publicVar

**●  publicVar**:  *"public variable"*  = "public variable"

*Defined in [private-members.ts:2](https://bitbucket.org/owner/repository_name/src/master/src/private-members.ts?fileviewer&amp;#x3D;file-view-default#private-members.ts-2)*





___


# Functions


###  createSomething

► **createSomething**(): `object`



*Defined in [functions.ts:155](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-155)*



A function that returns an object. Also no type information is given, the object should be correctly reflected.




**Returns:** `object`





___



###  exportedFunction

► **exportedFunction**(): `void`



*Defined in [functions.ts:11](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-11)*



This is a simple exported function.




**Returns:** `void`





___



###  functionWithArguments

► **functionWithArguments**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](api-interfaces-inameinterface.md)*): `number`



*Defined in [functions.ts:38](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-38)*



This is a function with multiple arguments and a return value.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string`   |  This is a string parameter. |
| paramG | `any`   |  This is a parameter flagged with any. This sentence is placed in the next line. |
| paramA | [INameInterface](api-interfaces-inameinterface.md)   |  This is a **parameter** pointing to an interface. |





**Returns:** `number`





___



###  functionWithDefaults

► **functionWithDefaults**(valueA?: *`string`*, valueB?: *`number`*, valueC?: *`number`*, valueD?: *`boolean`*, valueE: *`any`*): `string`



*Defined in [functions.ts:58](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-58)*



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



###  functionWithDocLink

► **functionWithDocLink**(): `void`



*Defined in [functions.ts:170](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-170)*



See [`INameInterface`](api-interfaces-inameinterface.md) and [INameInterface's name property](api-interfaces-inameinterface.md#markdown-header-name). Also, check out [Google](http://www.google.com) and [GitHub](https://github.com).

Taken from [http://usejsdoc.org/tags-inline-link.html](http://usejsdoc.org/tags-inline-link.html).




**Returns:** `void`





___



###  functionWithOptionalValue

► **functionWithOptionalValue**(requiredParam: *`string`*, optionalParam?: *`string`*): `void`



*Defined in [functions.ts:48](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-48)*



This is a function with a parameter that is optional.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| requiredParam | `string`   |  A normal parameter. |
| optionalParam | `string`   |  An optional parameter. |





**Returns:** `void`





___



###  functionWithRest

► **functionWithRest**(...rest: *`string`[]*): `string`



*Defined in [functions.ts:74](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-74)*



This is a function with rest parameter.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rest | `string`[]   |  Multiple strings. |





**Returns:** `string`
The combined string.






___



###  genericFunction

► **genericFunction**T(value: *`T`*): `T`



*Defined in [functions.ts:116](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-116)*



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



###  internalFunction

► **internalFunction**(): `void`



*Defined in [functions.ts:6](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-6)*



This is an internal function.




**Returns:** `void`





___



###  multipleSignatures

► **multipleSignatures**(value: *`string`*): `string`

► **multipleSignatures**(value: *`object`*): `string`



*Defined in [functions.ts:83](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-83)*



This is the first signature of a function with multiple signatures.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The name value. |





**Returns:** `string`



*Defined in [functions.ts:91](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-91)*



This is the second signature of a function with multiple signatures.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `object`   |  An object containing the name value. |





**Returns:** `string`





___




###  publicFunction

► **publicFunction**(): `string`



*Defined in [private-members.ts:10](https://bitbucket.org/owner/repository_name/src/master/src/private-members.ts?fileviewer&amp;#x3D;file-view-default#private-members.ts-10)*





**Returns:** `string`





___



###  returnTypeAny

► **returnTypeAny**(): `Promise`.<`any`>



*Defined in [functions.ts:191](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-191)*





**Returns:** `Promise`.<`any`>





___



###  returnTypeInterface

► **returnTypeInterface**(): [IGameEvent](api-interfaces-igameevent.md)



*Defined in [functions.ts:177](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-177)*





**Returns:** [IGameEvent](api-interfaces-igameevent.md)





___



###  returnTypeInterfaceWithPromise

► **returnTypeInterfaceWithPromise**(): `Promise`.<[IGameEvent](api-interfaces-igameevent.md)>



*Defined in [functions.ts:183](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-183)*





**Returns:** `Promise`.<[IGameEvent](api-interfaces-igameevent.md)>





___



###  returnTypeObject

► **returnTypeObject**(properties: *`object`*): `object`



*Defined in [functions.ts:201](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-201)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| properties | `object`   |  - |





**Returns:** `object`





___



### «Const» variableFunction

► **variableFunction**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](api-interfaces-inameinterface.md)*): `number`



*Defined in [functions.ts:23](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-23)*



This is a function with multiple arguments and a return value.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string`   |  This is a string parameter. |
| paramG | `any`   |  This is a parameter flagged with any. This sentence is placed in the next line. |
| paramA | [INameInterface](api-interfaces-inameinterface.md)   |  This is a **parameter** pointing to an interface. |





**Returns:** `number`





___




## Object literal: aMixedObject


This is an object with various types




###  someNumber

**●  someNumber**:  *`number`*  = 10

*Defined in [basic-types.ts:45](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-45)*





___


###  someString

**●  someString**:  *`string`*  = "hello"

*Defined in [basic-types.ts:46](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-46)*





___


###  someFunction

► **someFunction**(): `string`



*Defined in [basic-types.ts:42](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-42)*





**Returns:** `string`





___


