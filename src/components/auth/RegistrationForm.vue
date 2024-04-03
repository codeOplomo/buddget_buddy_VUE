<template>
    <div class="register-form">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" placeholder="Enter your name">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" placeholder="Enter your password">
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
import { useRouter } from 'vue-router'; 
import apiClient from '@/axios'; 

export default {
  setup() {
    const router = useRouter();
    const formData = {
      name: '',
      email: '',
      password: ''
    };

    const register = async () => {
      try {
        const response = await apiClient.post('api/register', formData); 
        console.log('Response:', response);
        router.push('/login');
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return {
      formData,
      register
    };
  }
};
</script>


  <style scoped>
  .register-form {
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
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button[type="submit"] {
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button[type="submit"]:hover {
    background-color: #218838;
  }
  </style>
  