import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../src';
import { IButton } from '../../src/common/types/button';
import * as example from '../example/button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IButton) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = example.Primary;

export const Secondary = Template.bind({});
Secondary.args = example.Secondary;

export const Large = Template.bind({});
Large.args = example.Large;

export const Small = Template.bind({});
Small.args = example.Small;
