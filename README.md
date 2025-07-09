
# antd-icon-select


### 描述

用来选择@ant-design/icons中的一个Icon，也可以将选择结果转化为一个图标


### 安装

```shell
npm i --save @kne/antd-icon-select
```


### 概述

antd-icon-select 是一个基于 Ant Design 的图标选择器组件，提供了便捷的方式来选择和显示 Ant Design 图标库中的图标。该组件封装了 Ant Design 的 Select 组件，并集成了所有可用的图标，使开发者能够轻松地在表单中实现图标的选择功能。

### 功能特点

- **丰富的图标库**：集成了 Ant Design 图标库中的所有图标，包括 Outlined、Filled 和 TwoTone 三种风格
- **搜索过滤**：支持按图标名称进行搜索和过滤
- **国际化支持**：内置中文和英文两种语言的支持
- **表单集成**：可以作为表单控件使用，与 @kne/react-form 组件无缝集成
- **自定义样式**：使用 CSS Modules 进行样式隔离，支持自定义样式

### 使用场景

- 需要在表单中选择图标的场景
- 菜单配置、权限管理等需要图标选择的功能
- 自定义组件库中需要图标选择的场景
- 后台管理系统中的图标配置功能

### 组件结构

1. **IconSelect.Field**：基于 antd 的 Select 组件封装，提供图标选择功能
2. **IconSelect**：对 IconSelect.Field 进行了封装可以直接在@kne/react-form及以此基础的Form中使用
3. **IconDisplay**：用于显示选定的图标

这组件可以单独使用，也可以配合使用，满足不同的使用场景。

### 国际化支持

组件内置了中文和英文两种语言的支持，会根据系统环境自动选择合适的语言。目前支持的语言包括：

- 中文 (zh-CN)
- 英文 (en-US)


### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _AntdIconSelect(@kne/current-lib_antd-icon-select)[import * as _AntdIconSelect from "@kne/antd-icon-select"],(@kne/current-lib_antd-icon-select/dist/index.css),remoteLoader(@kne/remote-loader)

```jsx
const { default: IconSelect, IconDisplay } = _AntdIconSelect;
const { createWithRemoteLoader } = remoteLoader;

const Display = createWithRemoteLoader({
  modules: ['components-core:FormInfo']
})(({ remoteModules }) => {
  const [FormInfo] = remoteModules;
  const { formData } = FormInfo.useFormContext();
  return <IconDisplay type={formData?.icon} />;
});

const BaseExample = createWithRemoteLoader({
  modules: ['components-core:FormInfo']
})(({ remoteModules }) => {
  const [FormInfo] = remoteModules;
  const { Form } = FormInfo;
  return (
    <Form>
      <Display />
      <IconSelect name="icon" label="Icon" />
    </Form>
  );
});

render(<BaseExample />);

```


### API

### 导出组件

| 组件名称             | 导出类型 | 描述                                                 |
|------------------|------|----------------------------------------------------|
| IconSelect       | 默认导出 | 图标选择器组件，用于选择 Ant Design 图标，需要在@kne/react-form中进行使用 |
| IconSelect.Field | -    | 图标选择器组件，用于选择 Ant Design 图标                         |
| IconDisplay      | 命名导出 | 图标显示组件，用于显示选定的图标                                   |

### IconSelect 组件

IconSelect 组件是基于 Ant Design 的 Select 组件封装的图标选择器，提供了选择 Ant Design 图标的功能。

#### 属性

| 属性          | 类型              | 默认值                     | 说明          |
|-------------|-----------------|-------------------------|-------------|
| value       | string          | -                       | 当前选中的图标名称   |
| onChange    | function(value) | -                       | 选择图标时的回调函数  |
| placeholder | string          | '请选择图标' / 'Select Icon' | 选择框默认文本     |
| allowClear  | boolean         | true                    | 是否允许清除选中的图标 |
| showSearch  | boolean         | true                    | 是否显示搜索框     |
| disabled    | boolean         | false                   | 是否禁用选择器     |
| style       | object          | -                       | 选择器的样式      |
| className   | string          | -                       | 选择器的类名      |

除上述属性外，IconSelect 组件还支持 Ant Design Select
组件的所有属性，详情可参考 [Ant Design Select 文档](https://ant.design/components/select-cn/)。

### IconDisplay 组件

IconDisplay 组件用于显示选定的图标，接收图标类型名称并渲染对应的图标。

#### 属性

| 属性           | 类型      | 默认值   | 说明                                |
|--------------|---------|-------|-----------------------------------|
| type         | string  | -     | 图标类型名称，必须是 Ant Design 图标库中的有效图标名称 |
| style        | object  | -     | 图标的样式，如 fontSize、color 等          |
| className    | string  | -     | 图标的类名                             |
| spin         | boolean | false | 是否使图标旋转                           |
| rotate       | number  | -     | 图标旋转角度                            |
| twoToneColor | string  | -     | 仅适用于双色图标，设置双色图标的主要颜色              |

除上述属性外，IconDisplay 组件还支持 Ant Design
图标组件的所有属性，详情可参考 [Ant Design 图标文档](https://ant.design/components/icon-cn/)。
