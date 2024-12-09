<template>
  <div>
    <button @click="generateRandomKey" class="VPButton primary">Get a random APP_KEY</button>
  </div>
</template>

<script>
export default {
  methods: {
    generateRandomKey() {
      const randomBytes = new Uint8Array(32);
      crypto.getRandomValues(randomBytes);
      const base64String = `base64:${btoa(String.fromCharCode(...randomBytes))}`;
      alert(base64String);
    },
  },
};
</script>