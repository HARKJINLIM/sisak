<template>
  <v-form @submit.prevent="save" ref="form" v-model="valid" lazy-validation>
    <input-duplicate-check
      ref="id"
      v-model="form.mb_id"
      label="ID"
      prepend-icon="mdi-account"
      counter="30"
      :rules="rules.id()"
      :cbCheck="cbCheckId"
    />
    <v-text-field
      label="Name"
      v-model="form.mb_name"
      prepend-icon="mdi-card-account-details-outline"
      :rules="rules.name()"
    />
    <input-password
      label="Password"
      v-model="form.mb_password"
      prepend-icon="mdi-lock"
      :rules="rules.password()"
    />
    <input-password
      label="Password confirm"
      v-model="confirmPw"
      prepend-icon="mdi-lock"
      :rules="[rules.matchValue(form.mb_password)]"
    />
    <input-duplicate-check
      ref="email"
      v-model="form.mb_email"
      label="email"
      prepend-icon="mdi-email"
      :rules="rules.email()"
      :cbCheck="cbCheckEmail"
    />
    <input-date
      v-model="form.mb_birth"
      label="Birthday"
      prepend-icon="mdi-calendar"
      :rules="rules.date({ label: 'Birthday' })"
    />
    <input-radio
      v-model="form.mb_gender"
      :items="genderItems"
      row
      prepend-icon="mdi-gender-male-female"
      :rules="[rules.require({ label: 'Gender' })]"
    />
    <input-phone
      v-model="form.mb_phone"
	    label="Phone number"
	    prepend-icon="mdi-phone"
	    :rules="rules.phone()"
    />

    <v-btn type="submit" block color="primary">Sign Up</v-btn>
  </v-form>
</template>

<script>
import validateRules from "../../../util/validateRules";
import InputDate from "../InputForms/InputDate.vue";
import InputDuplicateCheck from "../InputForms/InputDuplicateCheck.vue";
import InputPassword from "../InputForms/InputPassword.vue";
import InputPhone from '../InputForms/InputPhone.vue';
import InputRadio from "../InputForms/InputRadio.vue";
export default {
  components: { InputDuplicateCheck, InputPassword, InputDate, InputRadio, InputPhone },
  name: "SignUpForm",
  props: {
    cbCheckId: {
      type: Function,
      default: null,
    },
    cbCheckEmail: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      valid: true,
      form: {
        mb_id: "test123",
        mb_password: "asaf12",
        mb_name: "adfad",
        mb_birth: "2000-01-01",
        mb_gender: "m",
        mb_email: "adfa@gadfa.com",
        mb_phone: "031-330-3310",
        mb_zip: "",
        mb_addr1: "",
        mb_addr2: "",
      },
      //Below confirmPw is only for check. no need to push to DB. So no need form
      confirmPw: "asaf12",
      genderItems : [
        { label: "Male", value: "M" },
        { label: "Female", value: "F" },
      ],
    };
  },
  computed: {
    rules: () => validateRules,
  },
  methods: {
    async save() {
      this.$refs.form.validate();
      await this.$nextTick();
      if (!this.valid) return;
      if (!this.$refs.id.validate()) return;
      if (!this.$refs.email.validate()) return;

      console.log(this.form);
      //this.$emit('onSave', this.form);
    },
  },
};
</script>

<style>
</style>