<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{remoteGreetMessage}}
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return { remoteGreetMessage: "default" };
  },
  mounted() {
    axios
      .get("/api/greet")
      .then(resp => {
        this.remoteGreetMessage = resp.data.greetMessage;
      })
      .catch(err => {
        this.remoteGreetMessage =
          err.response.status + " - " + err.response.statusText;
      });
  }
};
</script>
