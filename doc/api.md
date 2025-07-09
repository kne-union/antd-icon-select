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