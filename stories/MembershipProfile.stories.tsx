import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MembershipProfile } from '../src';
import { IMembershipProfile } from '../src/common/types/membershipProfile';
import * as MembershipProfileExample from './example/membershipProfile';

export default {
  title: 'Screens/MembershipProfile',
  component: MembershipProfile,
} as ComponentMeta<typeof MembershipProfile>;

const Template: ComponentStory<typeof MembershipProfile> = (args: IMembershipProfile) => (
  <MembershipProfile {...args} />
);

export const Primary = Template.bind({});
Primary.args = MembershipProfileExample.Primary;
