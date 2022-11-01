<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import montreView from "@/components/montre.vue";
import type { Montre } from "@/types";
import { supabase } from "@/supabase";
import Footer from "@/components/Footer.vue";

import { useRouter } from "vue-router";
const router = useRouter();

// @ts-ignore
const montre = ref<Montre>(props.data ?? {});


if (props.id) {
    let { data, error } = await supabase
        .from("Montre")
        .select("*")
        .eq("id_montre", props.id);
    if (error) console.log("n'a pas pu charger le table montre :", error);
    else montre.value = (data as any[])[0];
}

const props = defineProps<{
    max?: number;
}>();

const { data: montres, error } = await supabase
    .from("Montre")
    .select("*")
    .limit(props.max ?? 80);
if (error) {
    console.log("n'a pas pu récupérer les montres", { error });
}

</script>
<template>
    <div class="bg-bleu p-10">
        <div class="bg-white w-10/12 h-fit m-auto text-center flex flex-col gap-3 ">
            <h1 class=" pb-2"> Tik Tak </h1>


            <ul class="my-16 grid grid-cols-produits gap-16 md:my-5 md:gap-5">
                <li v-for="montre in montres" :key="montre.id"
                    class="mb-5 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-5 m-auto h-fit w-full justify-items-center">
                    <router-link :to="{
                        name: 'edit-id',
                        params: { id: montre.id_montre },
                    }">
                        <montreView class="h-64 w-64" v-bind="montre" />
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <Footer />
</template>
