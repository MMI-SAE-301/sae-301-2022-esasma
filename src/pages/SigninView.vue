<template>
    <div class="bg-bleu p-20">
        <div class="bg-white p-40 text-center grid justify-center ">
            <h1> Tik Tak </h1>
            <ConnexionView class=" border-2 border-solid border-grisf my-4 p-3 w-60" />
            <ConnexionView provider="facebook" class=" border-2 border-solid border-grisf my-4  w-60 p-3" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ConnexionView from "@/components/ConnexionView.vue";
</script> 