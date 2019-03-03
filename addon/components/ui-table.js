import Component from '@ember/component';

export default Component.extend({
    tagName: 'table',

    striped: true,
    hover: true,

    classNames: ['table', 'mb-0'],
    classNameBindings: ['hover:table-hover', 'striped:table-striped']
});
