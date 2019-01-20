import Component from '@ember/component';

export default Component.extend({
    tagName: 'form',

    onSuccess() {

    },

    onSubmit() {

    },

    submit(event) {
        event.preventDefault();

        // Call events
        this.onSubmit();

        // Perform validation
        this.onSuccess();
    }
});
