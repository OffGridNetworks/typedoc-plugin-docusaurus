---
id: api-classes-interfaces-color
title: Color
sidebar_label: Color
---

[typedoc-plugin-docusaurus](api-readme.md) > [[interfaces Module]](api-modules-interfaces-module.md) > [Color](api-classes-interfaces-color.md)



## Class

### Constructors

* [constructor](api-classes-interfaces-color.md#constructor)


### Properties

* [b](api-classes-interfaces-color.md#b)
* [g](api-classes-interfaces-color.md#g)
* [r](api-classes-interfaces-color.md#r)
* [background](api-classes-interfaces-color.md#background)
* [black](api-classes-interfaces-color.md#black)
* [defaultColor](api-classes-interfaces-color.md#defaultcolor)
* [grey](api-classes-interfaces-color.md#grey)
* [white](api-classes-interfaces-color.md#white)


### Methods

* [plus](api-classes-interfaces-color.md#plus)
* [scale](api-classes-interfaces-color.md#scale)
* [times](api-classes-interfaces-color.md#times)
* [toDrawingColor](api-classes-interfaces-color.md#todrawingcolor)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Color**(r: *`number`*, g: *`number`*, b: *`number`*): [Color](api-classes-interfaces-color.md)


*Defined in [interfaces.ts:23](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L23)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| r | `number`   |  - |
| g | `number`   |  - |
| b | `number`   |  - |





**Returns:** [Color](api-classes-interfaces-color.md)

---


## Properties
<a id="b"></a>

###  b

**●  b**:  *`number`* 

*Defined in [interfaces.ts:26](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L26)*





___

<a id="g"></a>

###  g

**●  g**:  *`number`* 

*Defined in [interfaces.ts:25](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L25)*





___

<a id="r"></a>

###  r

**●  r**:  *`number`* 

*Defined in [interfaces.ts:24](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L24)*





___

<a id="background"></a>

### «Static» background

**●  background**:  *[Color](api-classes-interfaces-color.md)*  =  Color.black

*Defined in [interfaces.ts:34](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L34)*





___

<a id="black"></a>

### «Static» black

**●  black**:  *[Color](api-classes-interfaces-color.md)*  =  new Color(0.0, 0.0, 0.0)

*Defined in [interfaces.ts:33](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L33)*





___

<a id="defaultcolor"></a>

### «Static» defaultColor

**●  defaultColor**:  *[Color](api-classes-interfaces-color.md)*  =  Color.black

*Defined in [interfaces.ts:35](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L35)*





___

<a id="grey"></a>

### «Static» grey

**●  grey**:  *[Color](api-classes-interfaces-color.md)*  =  new Color(0.5, 0.5, 0.5)

*Defined in [interfaces.ts:32](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L32)*





___

<a id="white"></a>

### «Static» white

**●  white**:  *[Color](api-classes-interfaces-color.md)*  =  new Color(1.0, 1.0, 1.0)

*Defined in [interfaces.ts:31](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L31)*





___


## Methods
<a id="plus"></a>

### «Static» plus

► **plus**(v1: *[Color](api-classes-interfaces-color.md)*, v2: *[Color](api-classes-interfaces-color.md)*): [Color](api-classes-interfaces-color.md)



*Defined in [interfaces.ts:29](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L29)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v1 | [Color](api-classes-interfaces-color.md)   |  - |
| v2 | [Color](api-classes-interfaces-color.md)   |  - |





**Returns:** [Color](api-classes-interfaces-color.md)





___

<a id="scale"></a>

### «Static» scale

► **scale**(k: *`number`*, v: *[Color](api-classes-interfaces-color.md)*): [Color](api-classes-interfaces-color.md)



*Defined in [interfaces.ts:28](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L28)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| k | `number`   |  - |
| v | [Color](api-classes-interfaces-color.md)   |  - |





**Returns:** [Color](api-classes-interfaces-color.md)





___

<a id="times"></a>

### «Static» times

► **times**(v1: *[Color](api-classes-interfaces-color.md)*, v2: *[Color](api-classes-interfaces-color.md)*): [Color](api-classes-interfaces-color.md)



*Defined in [interfaces.ts:30](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L30)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v1 | [Color](api-classes-interfaces-color.md)   |  - |
| v2 | [Color](api-classes-interfaces-color.md)   |  - |





**Returns:** [Color](api-classes-interfaces-color.md)





___

<a id="todrawingcolor"></a>

### «Static» toDrawingColor

► **toDrawingColor**(c: *[Color](api-classes-interfaces-color.md)*): `object`



*Defined in [interfaces.ts:36](https://github.com/OffGridNetworks/typedoc-plugin-docusaurus/blob/master/tests/src/interfaces.ts#L36)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| c | [Color](api-classes-interfaces-color.md)   |  - |





**Returns:** `object`





___


