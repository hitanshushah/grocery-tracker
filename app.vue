<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-bold">Grocerys Tracker</h1>
      <button
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        @click="logout"
      >
        Logout
      </button>
    </div>

    <div v-if="error">Failed to load users: {{ error.message }}</div>
    <div v-else-if="!users">Loading...</div>
    <ul v-else class="space-y-2">
      <li v-for="user in users" :key="user.id" class="border p-2 rounded">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const users = ref([]);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    users.value = await $fetch('/api/users');
  } catch (err: any) {
    error.value = err.message || 'Error fetching users';
  }
});

const logout = () => {
  window.location.href = '/grocery-tracker/outpost.goauthentik.io/sign_out';
};
</script>
