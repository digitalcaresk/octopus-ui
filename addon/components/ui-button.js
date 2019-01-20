import Component from '@ember/component';

export default Component.extend({
    tagName: 'button',
    classNames: ['btn'],

    onClick() {

    },

    click() {
        this.onClick();
    }
});
