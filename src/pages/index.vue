<template>

  <div class="relative ">
    <p class="text-noir font-fasthand sm:font-2xl md:font-5xl absolute top-1/4 right-70%"> One watch many styles </p>
    <img src="/img/fondpage1-2.jpg" alt="">
  </div>
  <div class="grid grid-cols-2 ">
    <div>
      <img class="h-44 w-full " src="@/assets/img/montre.jpg" alt="">
    </div>
    <div class="bg-gris">
      <h1 class="m-3 text-center"> Tik Tok </h1>
      <p class="text-xs ml-5 mr-2"> + Tic Tac is a web site that allow you to express yourself and be yourself with
        our new
        collection of
        customizable watch <br />
        100% made in France with quality material and recyclabe material </p>
    </div>
  </div>
  <div class="grid grid-cols-2 mt-10">
    <div>
      <img class="h-72 w-64 " src="@/assets/img/daniel-korpai-hbTKIbuMmBI-unsplash 1.jpg" alt="">
    </div>
    <div class>
      <p class="m-3 text-center"> 159,99 $</p>
      <p class="text-xs ml-5 mr-2"> A symbol of uniqueness and rarity, the Tik Tak watch is distinguished by its
        minimalist design and its many variations. <br />
        Only priced at $159.00, it guarantees unique comfort. <br />
        100% made in France with quality material and recyclabe material </p>
    </div>
  </div>
  <h2 class="text-center m-6"> Tik Tok </h2>
  <div class="grid grid-cols-4 "> <img src="@/assets/img/montre4.jpg" alt="">
    <img src="@/assets/img/montre3.png" alt="">
    <img src="@/assets/img/montrenoirronde.png" alt="">
    <img src="@/assets/img/montreblanche.png" alt="">

  </div>
  <div class="flex justify-center m-aut p-10">
    <Button />
  </div>

  <div class="flex grid-flow-row bg-gris p-2 m-10">
    <div class="p-1">
      <photoavis />
      <p> Elise F****</p>
      <p> Octobre 22, 2022 </p>
    </div>
    <div class="grid">
      <div class="flex">
        <etoileVue />
        <etoileVue />
        <etoileVue />
        <etoileVue />
        <etoileVue />
      </div>
      <p> The watch is perfect, the materials are great </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Boutton.vue"
import etoileVue from "@/components/etoile.vue";
import photoavis from "@/components/photoavis.vue"
</script>