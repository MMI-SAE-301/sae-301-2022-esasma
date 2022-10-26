<script setup lang="ts">
import type { Provider } from '@supabase/supabase-js';
import { supabase, user } from '../supabase';
withDefaults(defineProps<{ provider: Provider }>(), {
    provider: "google",
});
</script>
<template>
    <div>
        <button v-if="user" @pointerdown="supabase.auth.signOut()">
            Se déconnecter ({{ user.email }})
        </button>
        <button v-else @pointerdown="supabase.auth.signIn({ provider })">
            Se connecter avec <span class="capitalize">{{ provider }}</span>
        </button>
    </div>
</template>  