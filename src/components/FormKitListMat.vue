<script setup lang="ts" >
//import { mesMat } from "@/types";

const { data: mesMat, error } = await supabase
    .from('Materiel')
    .select('*')

defineProps<{
    name?: string;
    label?: string;
}>();
</script>

<template>
    <FormKit v-if="mesMat" :name="name" :label="label" value="#FFFFFF" type="radio" :options="mesMat"
        :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }" input-class="peer sr-only"
        options-class="flex gap-1 mb-3 mt-1">
        <template #label="context">
            <div class="border-2 peer-checked:border-red-600">
                <span class="">{{ context.option.label }}</span>
            </div>
        </template>
    </FormKit>
</template>