<template>
  <div class="home-page">
    <div class="hero-section">
      <h1>Ласкаво просимо до Керівництва на Паджа</h1>
      
      <div class="main-image">
        <img src="/images/4.png" alt="Керівництво Року" class="hero-image">
      </div>
      
      <p class="intro-text">Тут ви знайдете коротке керівництво про предмети які потрібно купувати на Паджі для перемоги.</p>
      
      <router-link to="/items" class="cta-button">
        Переглянути предмети
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-page {
  padding: 3rem 0;
}

.hero-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: #ffffffff;
  line-height: 1.2;
}

.main-image {
  margin: 2.5rem 0;
  display: flex;
  justify-content: center;
}

.hero-image {
  max-width: 600px;
  max-height: 400px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.intro-text {
  font-size: 1.3rem;
  line-height: 1.6;
  color: #c2c2c2ff;
  margin: 2.5rem 0;
  padding: 0 1rem;
}

.cta-button {
  display: inline-block;
  background-color: #cc6300ff;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 1);
}

.cta-button:hover {
  background-color: #cf6400ff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 1);
}

@media (max-width: 768px) {
  .home-page {
    padding: 2rem 0;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .hero-image {
    max-width: 100%;
    max-height: 350px;
  }
  
  .intro-text {
    font-size: 1.2rem;
    margin: 2rem 0;
  }
  
  .cta-button {
    padding: 12px 25px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .home-page {
    padding: 1.5rem 0;
  }
  
  h1 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-image {
    max-height: 250px;
  }
  
  .main-image {
    margin: 2rem 0;
  }
  
  .intro-text {
    font-size: 1.1rem;
    margin: 1.5rem 0;
    padding: 0;
  }
  
  .cta-button {
    padding: 10px 20px;
    margin-top: 1.5rem;
  }
}
</style>