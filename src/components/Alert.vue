<template>
  <div>
    <b-alert v-model="showSuccessAlert" variant="success" show dismissible
      ><b-icon icon="exclamation-circle-fill"></b-icon> A successful
      toast.</b-alert
    >

    <b-alert v-model="showDefaultAlert" show dismissible>
      An information toast.<b>&rArr;</b>
    </b-alert>

    <b-alert v-model="showWarningAlert" variant="warning" dismissible>
      A destructive toast.
    </b-alert>

    <b-alert v-model="showDangerAlert" variant="danger" dismissible>
      A warning toast.
    </b-alert>

    <b-button @click="showSuccessAlert = true" variant="info" class="m-1">
      Show dismissible alert ({{ showSuccessAlert ? "visible" : "hidden" }})
    </b-button>
    <b-button @click="showDefaultAlert = true" variant="info" class="m-1">
      Show dismissible alert ({{ showDefaultAlert ? "visible" : "hidden" }})
    </b-button>
    <b-button @click="showWarningAlert = true" variant="info" class="m-1">
      Show dismissible alert ({{ showWarningAlert ? "visible" : "hidden" }})
    </b-button>
    <b-button @click="showDangerAlert = true" variant="info" class="m-1">
      Show dismissible alert ({{ showDangerAlert ? "visible" : "hidden" }})
    </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSuccessAlert: false,
      showDefaultAlert: false,
      showWarningAlert: false,
      showDangerAlert: false,
    };
  },
};
</script>

<style scoped>
@import url("../assets/css/alert.css");
</style>
