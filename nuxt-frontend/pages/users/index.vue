<template>
    <div class="container-fluid">
        <h2>THIS IS LIST USERS</h2>
            <el-button
                @click="create"
                class="mb-4"
            >
                Create User
            </el-button>
        <Dialog
            title="Create User"
            ref="create"
            :save="store"
        />
        <Dialog
            title="Update User"
            ref="edit"
            :save="update"
        />
        <div class="list-user mb-4">
            <el-table
                :data="users"
                border
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="ID"
                    width="50px"
                />
                <el-table-column
                    prop="name"
                    label="Name"
                />
                <el-table-column
                    prop="email"
                    label="Email"
                />
                <el-table-column
                    prop="id"
                    label="Modify"
                >
                    <template slot-scope="{ row }">
                        <nuxt-link :to="`/users/${row.id}`">
                            <el-button size="mini">
                                View
                            </el-button>
                        </nuxt-link>
                        <el-button
                            @click="edit(row)"
                            size="mini"
                        >
                            Update
                        </el-button>
                        <el-button
                            @click="remove(row)"
                            type="danger"
                            size="mini"
                        >
                            Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <Pagination
            :current-page="cursor.currentPage"
            :last-page="cursor.totalPage"
        />
    </div>
</template>

<script>
    import { api } from '../../api/users'
    import _assign from 'lodash/assign'
    import { updateData, updateRemoveData } from '../../utils/manage-data'
    import { queryUsers, createNewUser, updateOldUser, removeUser } from '../../libs/queryData'
    import Dialog from '~/components/Dialog.vue'
    import Pagination from '~/components/Pagination.vue'

    export default {
        name: 'Users',

        components: {
            Pagination,
            Dialog,
        },

        async asyncData({ route, query }) {
            const response = await api(queryUsers(query.page || 1))
                .then(( response ) => response.data.data.users)

            return {
                users: response.items,
                cursor: _assign({}, response.cursor, {
                    totalPage: Math.ceil(response.cursor.total / response.cursor.perPage)
                })
            }
        },

        data() {
            return {formLabelWidth: '100px'}
        },

        methods: {
            create() {
                this.$refs.create.open()
            },

            edit(user) {
                this.$refs.edit.open(user)
            },

            store(user) {
                api(createNewUser(user))
                    .then (response => {
                        this.users = [response.data.data.createUser, ...this.users]
                    }).catch((err) => {
                    this.$message.warning('Please try again later');
                    throw e
                })
            },

            async update(user) {
                try {
                    await api(updateOldUser(user))
                    this.users = updateData(this.users, 'id', user)
                } catch (e) {
                    this.$message.warning('Please try again later');
                    throw e
                }
            },

            async remove(user) {
                try {
                    await api(removeUser(user))
                    this.users = updateRemoveData(this.users, user)
                } catch (e) {
                    this.$message.warning('Please try again later');
                    throw e
                }
            }
        },

        watchQuery: true
    }
</script>

<style>
    h2 {
        text-align: center;
        margin: 1em 1em;
    }
</style>
