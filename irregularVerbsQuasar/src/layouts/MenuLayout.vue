<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar-title align="center" class="font-bold">
        <h4>Изучаем неправильные глаголы</h4>
        <buttonStart
          v-if="chengeButton"
          label="start"
          @click="chengeButton = !chengeButton"
        />
        <buttonStart
          v-else
          label="chack"
          @click="chengeButton = !chengeButton"
        />
      </q-toolbar-title>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab icon="person" to="/profile" replace label="Profile" />
        <q-route-tab icon="assignment" to="/rules" replace label="Rules" />
        <q-route-tab icon="edit" to="/reg" replace label="Reg" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import buttonStart from "../components/buttonStart.vue";

export default {
  name: "MenuLayout",

  components: {
    buttonStart,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const chengeButton = ref(true);

    return {
      chengeButton,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
