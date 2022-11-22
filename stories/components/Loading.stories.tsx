import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoadingIndicatorModal } from '../../src';
import { ILoading } from '../../src/common/types/Loading';
import * as example from '../example/loading';

export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicatorModal,
} as ComponentMeta<typeof LoadingIndicatorModal>;

const Template: ComponentStory<typeof LoadingIndicatorModal> = (args: ILoading) => (
  <LoadingIndicatorModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = example.Primary;
