<template>
  <li
    class="list-group-item"
    style="cursor: pointer"
    @click="selectServer">Server #{{ server.id }}</li>
</template>

<script>
import { serverBus } from '../../main';

export default {
  props: ['server'],
  methods: {
    selectServer() {
      serverBus.$emit('serverSelected', this.server);
    },
  },
};
</script>
