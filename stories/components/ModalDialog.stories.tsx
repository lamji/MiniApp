import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ModalDialog } from '../../src';
import { IModalDialog } from '../../src/common/types/ModalDialog';
import * as example from '../example/ModalDialg';

export default {
  title: 'Components/ModalDialog',
  component: ModalDialog,
} as ComponentMeta<typeof ModalDialog>;

const Template: ComponentStory<typeof ModalDialog> = (args: IModalDialog) => (
  <ModalDialog {...args} />
);

export const Primary = Template.bind({});
Primary.args = example.Primary;
