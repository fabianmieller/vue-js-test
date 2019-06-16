<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a Server</p>
    <p v-else>
      Server #{{ server.id }} selected, Status: {{ server.status }}
      <button @click="resetStatus">Shutdown</button>
    </p>
  </div>
</template>

<script>
import { serverBus } from '../../main';

export default {
  data() {
    return {
      server: null,
    };
  },
  created() {
    serverBus.$on('serverSelected', (server) => {
      this.server = server;
    });
  },
  methods: {
    resetStatus() {
      this.server.status = 'Offline';
    },
  },
};
</script>
