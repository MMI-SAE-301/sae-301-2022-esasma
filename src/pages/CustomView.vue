<script setup lang="ts">
import FormMontre from '@/components/FormMontre.vue';
import Footer from "@/components/Footer.vue";

</script>

<template>
    <div class="bg-bleu p-20">
        <div class="bg-white p-40 text-center grid justify-center ">
            <div>
                <h1
                    class=" text-center sm:text-xl md:text-2xl lg:text-4xl m-10 font-playfair-display font-semibold pb-2">
                    All your customization </h1>
            </div>
            <FormMontre />
        </div>
    </div>
    <Footer />

</template>