<template>
    <div class="main-layout">
        <header>
            <h1>Buddget Buddy</h1>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link v-show="!isAuthenticated" to="/register">Register</router-link>
                <router-link v-show="!isAuthenticated" to="/login">Login</router-link>
                <router-link v-show="isAuthenticated" to="/expenses/create">Create Expense</router-link>
                <router-link v-show="isAuthenticated" @click="logout" to="#">Logout</router-link>
            </nav>
        </header>

        <!-- Main content area -->
        <main>
            <!-- Use named slots for content -->
            <slot name="content"></slot>
        </main>

        <footer>
            <p>&copy; 2024 Expense Manager</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'MainLayout',
    computed: {
        isAuthenticated() {
        return this.$store.state.auth.isAuthenticated;
    }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
        },
    }
}
</script>

<style scoped>
/* Scoped styles for MainLayout component */
.main-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
}

header h1 {
    margin: 0;
}

nav {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
}

nav a:hover {
    text-decoration: underline;
}

main {
    flex: 1;
    padding: 20px;
}

footer {
    background-color: #2c3e50;
    color: white;
    padding: 10px;
    text-align: center;
}
</style>