import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PendingMembership } from '../src';
import { IPendingMembership } from '../src/common/types/PendingMembership';
import * as PendingMembershipExample from './example/pendingMembership';

export default {
  title: 'Screens/PendingMembership',
  component: PendingMembership,
} as ComponentMeta<typeof PendingMembership>;

const Template: ComponentStory<typeof PendingMembership> = (args: IPendingMembership) => (
  <PendingMembership {...args} />
);

export const Primary = Template.bind({});
Primary.args = PendingMembershipExample.Primary;
