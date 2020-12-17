import Button from './index';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
let children = <span>Button</span>

Primary.args = {
  primary: true,
  children
};

export const Secondary = Template.bind({});
Secondary.args = {
  children
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children
};
