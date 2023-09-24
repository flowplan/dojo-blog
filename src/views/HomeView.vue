<template>
  <div class="home">
    home
    <!-- ref="p" reference const p -->
    <!-- <p ref="p">My name is {{ name }} and my age is {{ age }}</p> -->
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <div>
      <!-- <button @click="clickHandle">Button</button> -->
      <button @click="refReactive">Button</button>
      <button @click="age++">Add 1 to age</button>
      <input v-model="name" type="text">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',


  //Composition API
  setup(){
    console.log('setup')

    //reference value typing ref to appear the import { ref } from 'vue'
    const p = ref(null)

    // let name = "Ace"
    // let age = "25"

    // reactive values
    const name = ref("Ace")
    const age = ref("25")
    
    const clickHandle = () => {
      // console.log("You clicked me!");
      console.log(p, p.value)
      // adding classes
      p.value.classList.add('test') 
      // updating the context of the p above
      p.value.textContent = 'Hello Huzaa !'

    }

    // handles the reactive values
    const refReactive = () => {
      name.value = "huzaa"
      age.value = "30"
    }

    return{ name, age, clickHandle, refReactive, p } 
    // can input values and function
  }
}
</script>
