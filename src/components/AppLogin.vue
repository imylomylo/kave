<template>
<v-container>
  <v-form @submit.prevent="submit">
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      type="password"
      label="Password"
      required
    ></v-text-field>
    <v-btn type="submit" color="yellow">Submit</v-btn>
  </v-form>
  </v-container>
</template>
<script>
export default {
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        submit() {
            console.log("hello")
        }
    }
}
</script>