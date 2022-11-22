import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MembershipCard } from '../../src';
import { IMembershipCard } from '../../src/common/types/MembershipCard';
import * as example from '../example/MembershipCrad';

export default {
  title: 'Components/MembershipCard',
  component: MembershipCard,
} as ComponentMeta<typeof MembershipCard>;

const Template: ComponentStory<typeof MembershipCard> = (args: IMembershipCard) => (
  <MembershipCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = example.Primary;
