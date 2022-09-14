<template>
  <div>
    <h1>Toast Tesing</h1>
    <div>
      <v-btn @click="toastTest1">Toast Info</v-btn>
      <v-btn @click="toastTest2">Toast Success</v-btn>
      <v-btn @click="toastTest3">Toast Error</v-btn>
      <v-btn @click="toastTest4">Toast Warning</v-btn>
      <v-btn @click="toastTest5">Total Error</v-btn>
    </div>
    <br>
    <h1>progressbar</h1>
    <div>
      <v-btn @click="barTest1">Start</v-btn>
      <v-btn @click="barTest2">Finish</v-btn>
      <v-btn @click="barTest3">Fail</v-btn>
    </div>

  </div>
</template>

<script>
   export default {
    name: "Home",
    methods: {
      toastTest1() {
        this.$toast.info('Hello Info');
      },
      toastTest2() {
        this.$toast.success('Hello Info');
      },
      toastTest3() {
        this.$toast.error('Hello Info');
      },
      toastTest4() {
        this.$toast.warning('Hello Info');
      },
      toastTest5() {
        throw new Error("Total error");
      },
      barTest1() {
        this.$Progress.start();
      },
      barTest2() {
        this.$Progress.finish();
      },
      barTest3() {
        this.$Progress.fail();
      }
    },
  }
</script>
