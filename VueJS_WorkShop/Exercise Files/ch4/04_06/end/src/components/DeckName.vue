<template>
    <h1>{{name}}</h1>
</template>

<script>
    export default {
        name: 'DeckName',
        props: ['name']
    };
</script>

<style scoped>
    h1 {
        font-style: italic;
    }
</style>