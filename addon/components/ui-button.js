import Component from '@ember/component';

export default Component.extend({
    tagName: 'button',
    type: 'submit',
    disabled: false,

    classNames: ['btn'],
    attributeBindings: ['disabled', 'type'],

    onClick() {

    },

    click() {
        this.onClick();
    }
});
