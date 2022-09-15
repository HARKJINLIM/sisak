<template>
  <div style="padding:20px;">
    <br>
    <h2>DEMULATOR WebDev.Env.Conf. Checklist</h2>
    <P>Please refer in the below description for SoW.</P>
    <br>
    <p>1. SSH Testing has been confirmed and deploy completed</p>
    <p>2. HTTS(S) Testing has been confirmed and deploy completed</p>
    <p>3. Proxy Hosting Testing has been confirmed and deploy completed</p>
    <p>4. SSR Testing has been confirmed and deploy completed</p>
    <p>5. Toast Plugin developmnet has been Contirmed and deployed</p>
    <div>
      <v-btn @click="toastTest1">Toast Info</v-btn>
      <v-btn @click="toastTest2">Toast Success</v-btn>
      <v-btn @click="toastTest3">Toast Error</v-btn>
      <v-btn @click="toastTest4">Toast Warning</v-btn>
      <v-btn @click="toastTest5">Total Error</v-btn>
    </div>
    <br>
    <p>6. progressbar Plugin developmnet has been Contirmed and deployed</p>
    <div>
      <v-btn @click="barTest1">Start</v-btn>
      <v-btn @click="barTest2">Finish</v-btn>
      <v-btn @click="barTest3">Fail</v-btn>
    </div>
    <br>
    <p>7. NotifyTest Plugin developmnet has been Contirmed and deployed</p>
    <div>
      <v-btn @click="notifyTest1">Start</v-btn>
      <v-btn @click="notifyTest2">Confirm</v-btn>
      <v-btn @click="notifyTest3">PromptStart</v-btn>
    </div>
    <br>
    <p>8. Mixins server side testing has been confirmed and deploy completed</p>
    <p>9. Express setup has been confirmed and deploy completed</p>
    <p>10. Mysql setup has been confirmed and deploy completed</p>
    <p>11. WebS. Apache setup has been confirmed and deploy completed</p>
    <p>12. SSR Lifecycle routing has been check and deleted</p>
    <p>13. Vuetify library has been installed and deployed</p>
    <p>14. SiteTitle component has been developed and deployed</p>
    <p>15. SiteFooter component has been developed and deployed</p>
  </div>
</template>

<script>
export default {
    name: "Home",
    data() {
      return {
        title : "DEMULATOR"
      }
    },
    title() {
      return this.title;
    },
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
      },
      async notifyTest1() {
        const res = await this.$ezNotify.alert('message1', 'message2');
        console.log(res);
      },
      async notifyTest2() {
        const res = await this.$ezNotify.confirm('message3', 'message4');
        console.log(res);
      },
      async notifyTest3() {
        const res = await this.$ezNotify.prompt('message5', 'message6');
        console.log(res);
      }
    },
  }
</script>
