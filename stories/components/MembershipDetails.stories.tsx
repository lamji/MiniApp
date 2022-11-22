import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MembershipDetails } from '../../src';
import { IMembershipDetails } from '../../src/common/types/MembershipDetails';
import * as example from '../example/MembershipDetails';

export default {
  title: 'Components/MembershipDetails',
  component: MembershipDetails,
} as ComponentMeta<typeof MembershipDetails>;

const Template: ComponentStory<typeof MembershipDetails> = (args: IMembershipDetails) => (
  <MembershipDetails {...args} />
);

export const Primary = Template.bind({});
Primary.args = example.primary;
