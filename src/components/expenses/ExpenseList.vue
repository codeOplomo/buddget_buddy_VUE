<template>
    <div class="main-layout">
      <h1>Expense Manager</h1>
      <ul>
        <li v-for="expense in expenses" :key="expense.id">
          {{ expense.description }} - {{ expense.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        expenses: [] // Replace with your logic to fetch or manage expenses
      };
    }
  };
  </script>