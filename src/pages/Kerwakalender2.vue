<template>
    <div class="content container">
    <h1>Kerwakalender</h1>
    <keep-alive>
        <KalenderEintrag></KalenderEintrag>
    </keep-alive>
  </div>
</template>

<script>
import KalenderEintrag from '~/components/KalenderEintrag.vue'

    export default {
        mounted() {
        },
        data() {
            return {}
        },
        methods: {
        },
        components: {
            KalenderEintrag
        },
        metaInfo: {
            title: 'Kerwakalender'
        }
    }
</script>