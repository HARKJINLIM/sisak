<template>
  <v-text-field
    ref="field"
    :value="value"
    @input="onInput"
    v-bind="$attrs"
    :maxlength="$attrs.counter"
    :error-messages="errMsg"
    :success-messages="successMsg"
  >
    <template v-if="!isCheck" v-slot:append>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-on="on"
            v-bind="attrs"
            icon
            small
            tabindex="-1"
            @click="check"
            :loading="loading"
          >
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </template>
        {{ $attrs.label }} duplicate check
      </v-tooltip>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "InputDuplicateCheck",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: String,
    cbCheck: {
      type: Function,
      default: null,
    },
    origin: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isCheck: false,
      loading: false,
      errMsg: "",
      successMsg: "",
    };
  },
  computed: {
    isSend() {
      return !!this.cbCheck && this.$refs.field.errorBucket.length === 0;
    },
  },
  mounted() {
    // console.log(this.$attrs);
    console.log(this.$refs.field);
  },
  methods: {
    onInput(val) {
      this.isCheck = this.origin ? this.origin === val : !this.cbCheck;
      this.errMsg = "";
      this.successMsg = "";
      this.$emit("input", val);
    },
    async check() {
      if (!this.isSend) return;
      this.loading = true;
      this.errMsg = "";
      this.successMsg = "";
      const data = await this.cbCheck(this.value);
      console.log(data);
      if (data.cnt == 0) {
        this.successMsg = `Available ${this.$attrs.label}`;
        this.isCheck = true;
      } else {
        this.errMsg = `Duplicated ${this.$attrs.label}`;
        this.isCheck = false;
      }
      this.loading = false;
    },
    validate() {
      if (!this.isCheck) {
        this.errMsg = `Please do a duplicate ${this.$attrs.label} check`;
        this.$refs.field.focus();
      }
    },
  },
};
</script>

<style>
</style>