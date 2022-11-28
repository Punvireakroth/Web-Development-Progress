const cards = [
    {
        front: 'ways to add Vue.js to a project',
        back: 'script tag (local or CDN)<br>install with npm<br>use vue-cli'
    },
    {
        front: 'motivation for using Vue.js',
        back: 'Managing the complexity of <strong>DOM</strong> updates can be challenging. This is especially true when we need to deal with user interaction and when the the states of various elements are mutually dependent. Vue allows us to manage this complexity in a declarative, reactive way, which simplifies handling changes to underlying data.'
    },
    {
        front: 'mustache syntax',
        back: "Aka double curly braces. Used for text interpolation between tags. Can't be used in HTML attributes."
    },
    {
        front: 'v-text',
        back: "Directive used to indicate a value for an element's inner text. Escapes HTML content."
    },
    {
        front: 'v-html',
        back: "Directive used to indicate inner HTML content of an element. Renders HTML content correctly."
    },
    {
        front: 'v-model',
        back: "Used to bind an element's value attribute to a data property of the Vue instance."
    },
    {
        front: 'v-bind',
        back: 'Used to bind an attribute value to a data property of the Vue instance<br><br>v-bind:href="example.com"<br>shorthand syntax: :href="example.com"'
    },
    {
        front: 'v-on',
        back: 'Used to bind an event to a method of the Vue instance<br><br>v-on:click="submit"<br>shorthand syntax: @click="submit"'
    }
];
