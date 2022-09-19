<template>
  <div class="d-flex justify-center align-center" style="height: 100%">
    <v-card max-width="400" width="100%" elevation="10">
      <v-toolbar>
        <v-toolbar-title>Sign Up</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <sing-up-form :cbCheckId="checkId" :cbCheckEmail="checkEmail" @onSave="save"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
//import InputDuplicateCheckVue from '@/components/InputForms/InputDuplicateCheck.vue';
//Module call import
import { mapActions } from 'vuex';
//Wrong typing need to check "SingUpForm"
import SingUpForm from "../../components/auth/SignUpForm.vue";
export default {
  components: { SingUpForm },
  name: "Join",
  methods: {
    ...mapActions('user', ['duplicateCheck']),
    async checkId(id) {
      //When your forward > move into user.js payload
      const data = await this.duplicateCheck({field: 'mb_id', value: id});      
      //console.log(id);
      return data;
    },
    async checkEmail(email) {
      //When your forward > move into user.js payload
      const data = await this.duplicateCheck({field: 'mb_email', value: email});      
      //console.log(id);
      return data;
    },
    async save(form) {
      console.log(this.form)
    }
  },
};
</script>

<style>
</style>