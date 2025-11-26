<template>
  <div class="items-list-page">
    <h1>Список предметів</h1>
    
    <div v-if="loading" class="loading">Завантаження...</div>
    
    <div v-else class="items-grid">
      <div 
        v-for="item in items" 
        :key="item.id" 
        class="item-card"
        @click="goToDetails(item.id)"
      >
        <img v-if="item.image" :src="item.image" :alt="item.title" class="item-image">
        
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <span class="details-link">Детальніше →</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const items = ref([])
const loading = ref(true)
const router = useRouter()

const fetchItems = async () => {
  try {
    const response = await fetch('/data.json')
    const data = await response.json()
    items.value = data.items
  } catch (error) {
    console.error('Помилка завантаження даних:', error)
  } finally {
    loading.value = false
  }
}

const goToDetails = (id) => {
  router.push(`/items/${id}`)
}

onMounted(() => {
  fetchItems()
})
</script>

<style scoped>
.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.item-card {
  border: 1px solid #ffffffff;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.item-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.details-link {
  color: #ffffffff;
  font-weight: 500;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  margin: 2rem 0;
}
</style>