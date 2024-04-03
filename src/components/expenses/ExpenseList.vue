<template>
  <div class="main-layout">
    <h1>Expense Manager</h1>
    <div class="row">
      <div class="col-10">
        <div class="table-container">
          <table class="table table-striped expense-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Price</th>
                <th>Date</th>
                <th>Action</th> <!-- Add a new column for actions -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="expense in expenses" :key="expense.id">
                <td>{{ expense.description }}</td>
                <td>{{ expense.price }}</td>
                <td>{{ expense.date }}</td>
                <td>
                  <!-- Add a delete button with a click event handler -->
                  <button @click="deleteExpense(expense.id)" class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from '@/axios';

export default {
  data() {
    return {
      expenses: [] // Array to store expenses data
    };
  },
  mounted() {
    this.fetchExpenses(); // Fetch expenses data when the component is mounted
  },
  methods: {
    async fetchExpenses() {
      try {
        const response = await apiClient.get('api/expensesIndex'); // Adjust the URL based on your API route
        this.expenses = response.data.expenses; // Assign fetched expenses to the expenses array
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    },
    async deleteExpense(expenseId) {
      try {
        const token = localStorage.getItem('token'); // Get the token from local storage or other storage mechanism
        const response = await apiClient.delete(`api/expensesDelete/${expenseId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.status === 200) {
          // Expense deleted successfully, update the expenses list
          this.expenses = this.expenses.filter(expense => expense.id !== expenseId);
          console.log('Expense deleted successfully');
        } else {
          console.error('Delete failed: Unexpected response status');
        }
      } catch (error) {
        console.error('Delete failed:', error);
      }
    }
  }
};
</script>

<style scoped>
.main-layout {
  padding: 20px;
}

.table-container {
  overflow-x: auto;
}

.expense-table {
  width: 100%;
  border-collapse: collapse;
}

.expense-table th,
.expense-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

.expense-table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.expense-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.expense-table tbody tr:hover {
  background-color: #f2f2f2;
}
</style>
