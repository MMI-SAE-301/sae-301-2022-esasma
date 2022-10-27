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



/*if (props.id) {
    // On charge les données de la maison
    let { data, error } = await supabase
        .from("")
        .select("*")
        .eq("chaussure_id", props.id);
    if (error || !data)
        console.log("n'a pas pu charger le table Maison :", error);
    else chaussure.value = data[0];
}

async function upsertBasket(dataForm, node) {
    dataForm.user_id = supabase.auth.user().id
    const { data, error } = await supabase.from("chaussure").upsert(dataForm);
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({ name: "basket-edit-id", params: { id: data[0].chaussure_id } });
    }
}

async function commander() {
    const { data, error } = await supabase
        .from('chaussure')
        .update({ chaussure_commandee: true })
        .eq('chaussure_id', props.id)
}

*/
//             <img :src="context.option.urlsvg" alt="">
</script>

<template>
    <div class="p-2">
        <FormKit type="form" v-model="montre"
            :submit-attrs="{ classes: { input: 'bg-green-600 text-green-100 p-2 rounded-lg text-xl mt-2' } }">
            <FormKitListColors name="bracelet" label="bracelet" />
            <FormKitListColors name="ecran" label="ecran" />
            <FormKitListmesMotifs name="type_bracelet" label="Type de bracelet" />
            <FormKitListMatVue name="materiaux_bracelet" label=" Matiere du bracelet" />
            <FormKitListmesBoitier name="type_boitier" label=" Type boitier" />
            <FormKit type="select" name="label" label="Taille" :options="{ 'Small': 's', 'Large': 'L' }" />
        </FormKit>
    </div>
    <montrevue v-bind="montre" />
</template>
