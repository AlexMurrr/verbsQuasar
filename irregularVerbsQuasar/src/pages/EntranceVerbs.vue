<template>
  <div class="enter-form">
    <q-page-container>
      <q-card class="q-ma-md" style="max-width: 400px">
        <q-card-section>
          <q-form @submit="submitForm">
            <q-input
              outlined
              v-model="name"
              label="Имя"
              class="q-mb-md"
            ></q-input>
            <q-input
              outlined
              v-model="password"
              label="Пароль"
              type="password"
              class="q-mb-md"
            ></q-input>
            <q-btn color="primary" label="Войти" type="submit"></q-btn>
          </q-form>
        </q-card-section>
      </q-card>
    </q-page-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Форма отправлена");
    },
  },
};
</script>

<style scoped>
.enter-form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
}
</style>
