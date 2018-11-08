<template>
    <el-dialog
        :visible.sync="show"
        :title="title"
    >
        <el-form :model="form">
            <el-form-item
                :label-width="formLabelWidth"
                label="Name"
            >
                <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item
                :label-width="formLabelWidth"
                label="Email"
            >
                <el-input
                    v-model="form.email"
                    type="email"
                />
            </el-form-item>
            <el-form-item
                :label-width="formLabelWidth"
                label="New Password"
            >
                <el-input
                    v-model="form.password"
                    type="password"
                />
            </el-form-item>
        </el-form>
        <span
            slot="footer"
            class="dialog-footer"
        >
                <el-button @click="close">Cancel</el-button>
                <el-button
                    :loading="processing"
                    type="primary"
                    @click="submit"
                >
                    Confirm
                </el-button>
            </span>
    </el-dialog>
</template>

<script>
    import form from '~/mixins/form'
    import { api } from '~/api/users'

    const emptyState = () => ({
        name: '',
        email: '',
        password: '',
    })

    export default {
        mixins: [form],
        props: {
            title: String,
            save: {
                type: Function,
                required: true
            },

            formLabelWidth: {
                default: '120px',
                type: String
            },
        },

        data () {
            return { form: emptyState() }
        },
    }
</script>
