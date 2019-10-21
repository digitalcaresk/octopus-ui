import Component from '@ember/component';

export default Component.extend({
    tagName: 'button',
    type: 'submit',
    disabled: false,
    active: false,

    classNames: ['btn'],
    classNameBindings: ['active'],
    attributeBindings: ['disabled', 'type'],

    onClick() {

    },

    click() {
        this.onClick();
    }
});
