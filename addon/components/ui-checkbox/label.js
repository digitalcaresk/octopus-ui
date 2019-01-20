import Component from '@ember/component';

export default Component.extend({
    tagName: 'label',
    attributeBindings: ['for'],

    classNames: ['custom-control-label']
});
