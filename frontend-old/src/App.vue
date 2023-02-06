<script setup>
import { RouterView } from 'vue-router'
</script>

<template>

  <div class="container">
    <div class="row">

      <RouterView />
      
      <div class="col-12">
        <nav class="fixed-bottom nav nav-pills nav-fill nav-light bg-light">
          <a class="nav-item nav-link rounded-0 active" href="#">All Pokemon</a>
          <a class="nav-item nav-link rounded-0" href="#">My Pokemon</a>
        </nav>
      </div>
      
    </div>
  </div>

</template>
