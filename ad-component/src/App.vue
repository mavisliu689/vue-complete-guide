<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button class="btn btn-promary" @click="selectedComponent = 'appQuote'">Quote</button>
                <button class="btn btn-promary" @click="selectedComponent = 'appAuthor'">Author</button>
                <button class="btn btn-promary" @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent}}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                            <p>Default content</p>
                    </component>
                </keep-alive>
               <!-- <app-quote>
                <h2 slot="title">{{ quoteTitle }}}</h2>
                <p slot="content"> wonderful Quote</p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';
    export default {
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        },
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        methods: {

        }
    }
</script>

<style>
</style>
