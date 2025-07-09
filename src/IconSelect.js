import React from 'react';
import { Select } from 'antd';
import { hooks } from '@kne/react-form-antd';
import * as icons from '@ant-design/icons';
import style from './style.module.scss';
import { createWithIntlProvider, useIntl } from '@kne/react-intl';
import zhCN from './locale/zh-CN';
import enUS from './locale/en-US';

const iconList = Object.keys(icons)
  .filter(name => /(Outlined|Filled|TwoTone)$/.test(name))
  .map(name => {
    const IconComponent = icons[name];
    return { label: <IconComponent />, value: name };
  });

const IconSelectField = props => {
  return (
    <Select
      {...props}
      virtual={false}
      classNames={{
        root: style['icon-select'],
        popup: {
          root: style['icon-select-popup']
        }
      }}
      options={iconList}
      showSearch
      filterOption={(input, option) => {
        return (option?.value || '').toLowerCase().includes(input.toLowerCase());
      }}
    />
  );
};
const IconSelect = createWithIntlProvider({
  defaultLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})(props => {
  const { formatMessage } = useIntl();
  const { useOnChange } = hooks;
  const render = useOnChange(Object.assign({}, { placeholder: formatMessage({ id: 'placeholder' }, { label: props.label || '' }) }, props));
  return render(IconSelectField);
});

IconSelect.Field = IconSelectField;

export default IconSelect;
