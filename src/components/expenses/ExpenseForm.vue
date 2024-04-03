<template>
    <div class="expense-form">
        <h2>Create Expense</h2>
        <form @submit.prevent="submitExpense">
            <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" id="description" v-model="expense.description">
            </div>
            <div class="form-group">
                <label for="price">Price:</label>
                <input type="number" id="price" v-model="expense.price">
            </div>
            <div class="form-group">
                <label for="date">Date:</label>
                <input type="date" id="date" v-model="expense.date">
            </div>
            <button type="submit">Save Expense</button>
        </form>
    </div>
</template>


<script>
import apiClient from '@/axios';

export default {
    data() {
        return {
            expense: {
                description: '',
                price: null,
                date: ''
            }
        };
    },
    methods: {
        submitExpense() {
            const token = this.$store.state.auth.token; // Assuming you store the token in your Vuex store
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            apiClient.post('api/expenses', this.expense, config)
                .then(response => {
                    console.log('Expense submitted:', response.data.expenses);
                })
                .catch(error => {
                    console.error('Error submitting expense:', error.response.data.message);
                });
        }

    }
}
</script>


<style scoped>
/* Scoped styles for ExpenseForm component */
.expense-form {
    max-width: 400px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="date"] {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button[type="submit"] {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}
</style>