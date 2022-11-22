import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExpandCardModal } from '../../src';
import { IExpandCardModal } from '../../src/common/types/ExpandCardModal';
import * as example from '../example/ExpandCardModal';

export default {
  title: 'Components/ExpandCardModal',
  component: ExpandCardModal,
} as ComponentMeta<typeof ExpandCardModal>;

const Template: ComponentStory<typeof ExpandCardModal> = (args: IExpandCardModal) => (
  <ExpandCardModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = example.Primary;
