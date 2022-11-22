import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopButton } from '../../src';
import { ITapButtonProps } from '../../src/common/types/TopButton';
import * as example from '../example/TopButton';

export default {
  title: 'Components/TopButton',
  component: TopButton,
} as ComponentMeta<typeof TopButton>;

const Template: ComponentStory<typeof TopButton> = (args: ITapButtonProps) => (
  <TopButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = example.Primary;
