<template>
    <div class="user">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Company</th>
                <th scope="col">DOB</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">{{ user.id }}</th>
                <td style="width: 200px">{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.profile ? user.profile.address : '' }}</td>
                <td style="width: 200px">{{ user.profile ? user.profile.company : '' }}</td>
                <td style="width: 200px">{{ user.profile ? user.profile.dob : '' }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { getUser } from '../../libs/queryData'
    import { api } from '../../api/users'

    export default {
        async asyncData({ params }) {
            const response = await api(getUser(params.id))
                .then(( response ) => response.data.data)

            return {
                user: response.user
            }
        }
    }
</script>

<style>
    .user {
        padding-top: 10rem;
    }
</style>
