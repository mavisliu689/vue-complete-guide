<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button>Quote</button>
                <button>Author</button>
                <button>New</button>
               <app-quote>
                <h2 slot="title">{{ quoteTitle }}}</h2>
                <p slot="content"> wonderful Quote</p>
               </app-quote>
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
        }
    }
</script>

<style>
</style>
