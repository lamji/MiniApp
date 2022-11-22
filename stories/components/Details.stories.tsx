import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Details } from '../../src';
import { IDetails } from '../../src/common/types/Details';
import * as example from '../example/Details';

export default {
  title: 'Components/Details',
  component: Details,
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = (args: IDetails) => <Details {...args} />;

export const Primary = Template.bind({});
Primary.args = example.Primary;
