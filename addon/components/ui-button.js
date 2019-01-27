import Component from '@ember/component';

export default Component.extend({
    tagName: 'button',
    disabled: false,

    classNames: ['btn'],
    attributeBindings: ['disabled'],

    onClick() {

    },

    click() {
        this.onClick();
    }
});
