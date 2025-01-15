<script setup lang="ts">
// import a reference to our ItemInterace
import type { ItemInterface } from "../../models/items/Item.interface";
import ItemComponent from "./children/Item.component.vue";
import Loader from '@/components/shared/Loader.component.vue'

// expose a property called items with a default value of a blank array
defineProps<{
  items: ItemInterface[];
  loading: boolean;
}>();

const emit = defineEmits<{
  (e: "selectItem", id: number): any;
}>();

// item click handler
const onSelectItem = (item: ItemInterface) => {
  emit("selectItem", item.id);
};
</script>
<template>
  <div>
    <h3>Items:</h3>
    <Loader v-show="loading" />

    <ul v-if="!loading">
      <ItemComponent
        v-for="(item, index) in items"
        :key="item.id"
        :model="item"
        @selectItem="onSelectItem(item)"
      />
    </ul>
  </div>
</template>

<style>
ul {
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
</style>
