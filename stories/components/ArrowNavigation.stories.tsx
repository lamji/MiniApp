import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArrowNavigation } from '../../src';
import { IButton } from '../../src/common/types/button';
import * as example from '../example/button';

export default {
  title: 'Components/ArrowNavigation',
  component: ArrowNavigation,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArrowNavigation>;

const Template: ComponentStory<typeof ArrowNavigation> = (args: IButton) => (
  <ArrowNavigation {...args} />
);

export const Primary = Template.bind({});
Primary.args = example.Primary;
