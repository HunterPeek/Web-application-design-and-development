<template>
  <div class="item-details-page">
    <div v-if="loading" class="loading">Завантаження...</div>
    
    <div v-else-if="item" class="item-details">
      <button @click="goBack" class="back-button">← Назад</button>
      
      <div class="image-container">
        <img v-if="item.image" :src="item.image" :alt="item.title" class="detail-image">
      </div>
      
      <h1>{{ item.title }}</h1>
      <p class="description">{{ item.description }}</p>
      <div class="content">
        <p>{{ item.content }}</p>
      </div>
      <div class="meta">
        <span>ID: {{ item.id }}</span>
      </div>
    </div>
    
    <div v-else class="not-found">
      <h2>Проєкт не знайдено</h2>
      <router-link to="/items" class="back-link">Повернутися до списку</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const item = ref(null)
const loading = ref(true)
const route = useRoute()
const router = useRouter()

const fetchItemDetails = async () => {
  try {
    const response = await fetch('/data.json')
    const data = await response.json()
    const foundItem = data.items.find(i => i.id === parseInt(route.params.id))
    item.value = foundItem
  } catch (error) {
    console.error('Помилка завантаження даних:', error)
  } finally {
    loading.value = false
  }
}

const goBack = () => {
  router.back()
}

onMounted(() => {
  fetchItemDetails()
})
</script>

<style scoped>
.back-button {
  background: none;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 2rem;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.detail-image {
  max-width: 600px;
  max-height: 720px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .detail-image {
    max-width: 100%;
    max-height: 500px;
  }
}

@media (max-width: 480px) {
  .detail-image {
    max-height: 400px;
  }
}

.back-button:hover {
  background-color: #f5f5f5;
}

.item-details {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #c02e1bff;
  line-height: 1.3;
}

.description {
  font-size: 1.2rem;
  color: #ffffffff;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.content {
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.meta {
  padding-top: 2rem;
  border-top: 1px solid #ffffffff;
  color: #ffffffff;
  font-size: 0.9rem;
}

.not-found {
  text-align: center;
  padding: 4rem 0;
}

.back-link {
  color: #ffffffff;
  text-decoration: none;
  font-weight: 500;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  padding: 3rem 0;
  color: #ffffffff;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
    margin-bottom: 1.25rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
}
</style>