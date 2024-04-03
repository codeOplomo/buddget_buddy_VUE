<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" placeholder="Enter your password">
        </div>
        <button type="submit">Login</button>
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
      email: '',
      password: ''
    };

    const login = async () => {
      try {
        const response = await apiClient.post('api/login', formData);
        console.log(response.data);
        router.push('/'); 
      } catch (error) {
        console.error(error.response.data);
      }
    };

    return {
      formData,
      login
    };
  }
};
</script>
  
  <style scoped>
  .login-form {
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
  
  input[type="email"],
  input[type="password"] {
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
  