<template>
  <div v-for="item in arrData" :key="item">
    <h1>{{ item.title }}</h1>
    <p v-for="data in addData" :key="data">{{ data }}</p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const arrData = ref([
      {
        title: "use me",
        body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores veniam non ducimus quos temporibus nostrum dolorum placeat quidem eveniet adipisci.",
      },
      {
        title: "use me",
        body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores veniam non ducimus quos temporibus nostrum dolorum placeat quidem eveniet adipisci.",
      },
    ]);

    const addData = computed(() => {
      return arrData.value.map(
        (add) => add.body.substring(0, 50) + " read more"
      );
    });

    return {
      arrData,
      addData,
    };
  },
};
</script>

<style></style>
