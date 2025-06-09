<template>
  <div>
    <div class="flex justify-between items-center p-4">
      <h1>Grocery Tracker</h1>
      <div>
        <button 
          v-if="status !== 'authenticated'" 
          @click="signIn('authentik')" 
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign In with Authentik
        </button>
        <div v-else class="flex items-center gap-4">
          <span>Welcome, {{ data?.user?.name || data?.user?.email }}!</span>
          <button 
            @click="signOut" 
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>

    <div v-if="status === 'authenticated'">
      <div class="p-4">
        <Card>
          <template #title>Inventory</template>
          <template #content>
            <p class="text-gray-700">Milk, Bread, Eggs</p>
          </template>
        </Card>
      </div>
    </div>
    <div v-else-if="status === 'loading'" class="p-4">
      <p>Loading...</p>
    </div>
    <div v-else class="p-4">
      <p>Please sign in to access your grocery inventory.</p>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '#imports'

const { status, signIn, signOut, data } = useAuth()

// Debug logging (remove in production)
watchEffect(() => {
  console.log('Auth status:', status.value)
  console.log('Auth data:', data.value)
})
</script>