<template>
  <nav class="items-center p-8 max-w-screen-xl ">
    <ul class="flex justify-between">
      <li>
        <router-link class="" to="/">
          + TiK Tac
        </router-link>
      </li>
      <div class="flex">
        <li class="group">
          <router-link to="/CustomView">
            Customize
          </router-link>
        </li>
        <li class="mx-12">
          <router-link to="/HistoriqueView">
            My selection
          </router-link>
        </li>
        <li>
          <router-link to="/ConnexionView">
            Sig in
          </router-link>
        </li>
      </div>
    </ul>
  </nav>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="" />
  </Suspense>
</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>
