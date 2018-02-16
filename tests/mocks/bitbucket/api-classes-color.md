---
id: api-classes-color
title: Color
sidebar_label: Color
---

[typedoc-plugin-docusaurus](api-readme.md) > [Color](api-classes-color.md)



## Class

### Constructors

* [constructor](api-classes-color.md#markdown-header-constructor)


### Properties

* [b](api-classes-color.md#markdown-header-b)
* [g](api-classes-color.md#markdown-header-g)
* [r](api-classes-color.md#markdown-header-r)
* [background](api-classes-color.md#markdown-header-static-background)
* [black](api-classes-color.md#markdown-header-static-black)
* [defaultColor](api-classes-color.md#markdown-header-static-defaultcolor)
* [grey](api-classes-color.md#markdown-header-static-grey)
* [white](api-classes-color.md#markdown-header-static-white)


### Methods

* [plus](api-classes-color.md#markdown-header-static-plus)
* [scale](api-classes-color.md#markdown-header-static-scale)
* [times](api-classes-color.md#markdown-header-static-times)
* [toDrawingColor](api-classes-color.md#markdown-header-static-todrawingcolor)



---
## Constructors



### ⊕ **new Color**(r: *`number`*, g: *`number`*, b: *`number`*): [Color](api-classes-color.md)


*Defined in [interfaces.ts:23](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-23)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| r | `number`   |  - |
| g | `number`   |  - |
| b | `number`   |  - |





**Returns:** [Color](api-classes-color.md)

---


## Properties


###  b

**●  b**:  *`number`* 

*Defined in [interfaces.ts:26](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-26)*





___



###  g

**●  g**:  *`number`* 

*Defined in [interfaces.ts:25](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-25)*





___



###  r

**●  r**:  *`number`* 

*Defined in [interfaces.ts:24](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-24)*





___



### «Static» background

**●  background**:  *[Color](api-classes-color.md)*  =  Color.black

*Defined in [interfaces.ts:34](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-34)*





___



### «Static» black

**●  black**:  *[Color](api-classes-color.md)*  =  new Color(0.0, 0.0, 0.0)

*Defined in [interfaces.ts:33](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-33)*





___



### «Static» defaultColor

**●  defaultColor**:  *[Color](api-classes-color.md)*  =  Color.black

*Defined in [interfaces.ts:35](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-35)*





___



### «Static» grey

**●  grey**:  *[Color](api-classes-color.md)*  =  new Color(0.5, 0.5, 0.5)

*Defined in [interfaces.ts:32](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-32)*





___



### «Static» white

**●  white**:  *[Color](api-classes-color.md)*  =  new Color(1.0, 1.0, 1.0)

*Defined in [interfaces.ts:31](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-31)*





___


## Methods


### «Static» plus

► **plus**(v1: *[Color](api-classes-color.md)*, v2: *[Color](api-classes-color.md)*): [Color](api-classes-color.md)



*Defined in [interfaces.ts:29](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-29)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v1 | [Color](api-classes-color.md)   |  - |
| v2 | [Color](api-classes-color.md)   |  - |





**Returns:** [Color](api-classes-color.md)





___



### «Static» scale

► **scale**(k: *`number`*, v: *[Color](api-classes-color.md)*): [Color](api-classes-color.md)



*Defined in [interfaces.ts:28](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-28)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| k | `number`   |  - |
| v | [Color](api-classes-color.md)   |  - |





**Returns:** [Color](api-classes-color.md)





___



### «Static» times

► **times**(v1: *[Color](api-classes-color.md)*, v2: *[Color](api-classes-color.md)*): [Color](api-classes-color.md)



*Defined in [interfaces.ts:30](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-30)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v1 | [Color](api-classes-color.md)   |  - |
| v2 | [Color](api-classes-color.md)   |  - |





**Returns:** [Color](api-classes-color.md)





___



### «Static» toDrawingColor

► **toDrawingColor**(c: *[Color](api-classes-color.md)*): `object`



*Defined in [interfaces.ts:36](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-36)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| c | [Color](api-classes-color.md)   |  - |





**Returns:** `object`





___


