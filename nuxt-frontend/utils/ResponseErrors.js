export default class ResponseErrors {
    constructor (errors = {}) {
        this.errors = errors
    }

    has (field) {
        return this.errors.hasOwnProperty(field)
    }

    get (field) {
        if (this.has(field)) {
            const errors = this.errors[field]

            return Array.isArray(errors) ? errors[0] : errors
        }

        return null
    }

    reset (field) {
        if (field) {
            delete this.errors[field]

            return
        }

        this.errors = {}
    }

    clear (field) {
        this.reset(field)
    }

    collect (errors) {
        this.errors = errors
    }

    any () {
        return Object.keys(this.errors).length > 0
    }

    all () {
        let errorsList = []
        Object.values(this.errors).forEach(item => errorsList = errorsList.concat(item))
        return errorsList
    }
}
