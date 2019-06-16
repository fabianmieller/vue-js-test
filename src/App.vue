<template>
  <div class="container">
    <fm-header></fm-header>
    <hr>
    <div class="row">
      <fm-servers></fm-servers>
      <fm-server-details></fm-server-details>
    </div>
    <hr>
    <fm-footer></fm-footer>
  </div>
</template>

<script>
import HeaderVue from './components/Shared/Header.vue';
import FooterVue from './components/Shared/Footer.vue';
import ServersVue from './components/Server/Servers.vue';
import ServerDetailsVue from './components/Server/ServerDetails.vue';

export default {
  components: {
    'fm-header': HeaderVue,
    'fm-footer': FooterVue,
    'fm-servers': ServersVue,
    'fm-server-details': ServerDetailsVue,
  },
};
</script>

<style>
</style>
