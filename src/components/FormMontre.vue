<script setup lang="ts">
import type { Montre } from "@/types";
import { colors } from "@/types"
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../supabase";
import montrevue from "./montre.vue";
import FormKitListColors from "./FormKitListColors.vue";
import { mesMat } from "@/types";
import FormKitListMatVue from "./FormKitListMat.vue";
import FormKitListmesMotifs from "./FormKitListmesMotifs.vue";
import FormKitListmesBoitier from "./FormKitListmesBoitier.vue";

const router = useRouter();


const props = defineProps(["id", "data"]);
const montre = ref<Montre>(props.data ?? {});


if (props.id) {

    let { data, error } = await supabase
        .from("Montre")
        .select("*")
        .eq("id_montre", props.id);
    if (error) console.log("n'a pas pu charger le table montre :", error);
    else montre.value = (data as any[])[0];
}
// @ts-ignore
async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("Montre").upsert(dataForm);
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push("/");
    }
}

//             <img :src="context.option.urlsvg" alt="">
</script>

<template>
    <div
        class="p-2 flex flex-col-reverse gap-5 md:grid md:grid-cols-2 text-center sm:text-xl md:text-2xl lg:text-4xl m-10 font-playfair-display font-semibold text-grisf">
        <FormKit type="form" v-model="montre" @submit="upsertMontre"
            :submit-attrs="{ classes: { input: 'text-white bg-bleuf border border-white hover:bg-white hover:text-bleuf hover:border-bleuf active:bg-bleuf font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' } }">
            <FormKitListColors name="bracelet" label="bracelet" />
            <FormKitListmesMotifs name="type_bracelet" label="Type de bracelet" />
            <FormKitListMatVue name="materiaux_bracelet" label=" Matiere du bracelet" />
            <FormKitListmesBoitier name="type_boitier" label=" Type boitier" />
            <!--            <FormKit type="select" label="Taille" :options="{ 'Small': 's', 'Large': 'L' }" />-->
        </FormKit>
        <div class=" ">
            <montrevue v-bind="montre" class="w-64 h-64" />
        </div>
    </div>
</template>
