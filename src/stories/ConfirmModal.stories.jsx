import React from 'react';
import {ConfirmModal} from '../components/'

export default {
  title: 'ConfirmModal component',
  component: ConfirmModal,
};

const Template = (args) => <ConfirmModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    open: true,
    url: 'http://localhost:3000/recommends?title=asdasd&ids=758323,502356,868759,934433,594767,640146',
    title: 'My fav movies',
    onClose: () => {}
};