import _get from 'lodash/get'
import _clone from 'lodash/clone'
import ResponseErrors from '../utils/ResponseErrors'

export default {
    props: {
        validateForm: Boolean,
        save: {
            type: Function,
            required: true
        }
    },

    data: () => ({
        form: {},
        data: {},
        errors: new ResponseErrors(),
        show: false,
        processing: false
    }),

    methods: {
        open(data = null) {
            if (data) {
                this.data = data
                this.form = _clone(data)
            }

            this.show = true
        },

        close() {
            if (this.validateForm && this.$refs.form) {
                this.$refs.form.clearValidate()
            }

            this.errors.reset()
            this.show = false
        },

        validateBeforeSubmit(onSuccess) {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    return onSuccess()
                }
                return false
            })
        },

        submit() {
            if (this.validateForm && this.$refs.form) {
                this.validateBeforeSubmit(() => this.handleSubmit())
            } else {
                this.handleSubmit()
            }
        },

        async handleSubmit() {
            try {
                this.processing = true
                await this.save(this.form, this.data)
                this.close()
            } catch (err) {
                const formErrors = _get(err, 'response.data.errors')

                if (formErrors) {
                    this.errors.collect(formErrors)
                } else {
                    throw err
                }
            } finally {
                this.processing = false
            }
        }
    }
}
