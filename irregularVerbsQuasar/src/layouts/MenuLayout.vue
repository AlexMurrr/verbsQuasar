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
        <q-route-tab icon="person" to="/your/route" replace label="Profile" />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Rules"
        />
      </q-tabs>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="bg-grey-2">
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
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
