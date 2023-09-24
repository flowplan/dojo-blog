<template>
  <div class="home">
    <input v-model="search" type="text">
    <p>search value - {{ search }}</p>
    <div v-for="name in computedValue" :key="name">{{name}}</div>
    <button @click="clickHandle">Stop Watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue"
export default {
    name: 'name',
    setup(){
        const search = ref("")
        const names = ref(["Ace", "Pharrah", "El Dogge", "Apple", "Mario", "Luigi"])

        const stopwatch = watch(search, () => {
            console.log('watch function run')
        })

        const stopwatchEffect = watchEffect(() => {
            console.log("watch function run", search.value)
        })

        const computedValue = computed(() => {
            // searches the something on the names
            return names.value.filter((name) => name.includes(search.value))
        })

        const clickHandle = () => {
            stopwatch()
            stopwatchEffect()
        }

        return {names, search, computedValue, clickHandle}
    }
}
</script>

<style>

</style>