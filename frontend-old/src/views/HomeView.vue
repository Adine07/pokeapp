<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

import Card from '../components/Card.vue'

onMounted(() => {
  
})
</script>

<template>
  <main>
    <h1>Poke App</h1>
    <div class="col-12">
      <div class="card mb-3">
        <div class="row">
          <div class="col-5">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" class="img-fluid rounded-start" alt="poke image" width="100%">
          </div>
          <div class="col-7">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
