<template>
    <el-pagination
        v-if="lastPage > 1"
        :current-page="currentPage"
        :page-count="lastPage"
        class="text-center mt-1"
        background
        @current-change="go"
    />
</template>


<script>
    import _omit from 'lodash/omit';
    import _assign from 'lodash/assign';

    export default {
        props: {
            currentPage: {
                type: Number,
                default: 1,
            },
            lastPage: {
                type: Number,
                default: 1,
            },
            queryParam: {
                type: String,
                default: 'page',
            },
        },

        methods: {
            go(page) {
                this.$router.push(this.to(page));
            },

            to(page) {
                const path = this.$route.path;

                const otherParams = _omit(this.$route.query, [this.queryParam]);
                const query = page !== 1
                    ? _assign({}, otherParams, { [this.queryParam]: page })
                    : otherParams;

                return { path, query };
            },
        },
    };
</script>

<style>
    .text-center {
        text-align: center;
    }
</style>
