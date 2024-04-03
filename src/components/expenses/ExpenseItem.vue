<template>
        <div>
        <!-- Display expense details -->
        <p>Description: {{ expense.description }}</p>
        <p>Price: {{ expense.price }}</p>
        <p>Date: {{ expense.date }}</p>
        <!-- Edit and delete buttons -->
        <button @click="edit">Edit</button>
        <button @click="remove">Delete</button>
        </div>

  </template>
  
  <script>

  export default {
    props: ['expense'],
    methods: {
      edit() {
        // Emit event to parent component for editing this expense
        this.$emit('edit', this.expense);
      },
      remove() {
        // Emit event to parent component for deleting this expense
        this.$emit('delete', this.expense);
      }
    }
  }
  </script>