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
    <div class="p-2 flex flex-col-reverse gap-5 md:grid md:grid-cols-2">
        <FormKit type="form" v-model="montre" @submit="upsertMontre"
            :submit-attrs="{ classes: { input: 'bg-green-600 text-green-100 p-2 rounded-lg text-xl mt-2' } }">
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
