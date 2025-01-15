<template>
  <li :data-testid="testid" :class="cssClass" @click="handleClick">
    <div class="selected-indicator">*</div>
    <div class="name">{{ model.name }} [{{ model.selected }}]</div>
  </li>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { ItemInterface } from "../../../models/items/Item.interface";
import type { PropType } from "@vue/runtime-core";

const emit = defineEmits(["selectItem"]);

const props = defineProps({
  testid: {
    default: "not-set",
  },
  model: {
    type: Object as PropType<ItemInterface>,
    default: () => {
      return {};
    },
  },
});

const cssClass = computed(() => {
  let css = "item";

  if (props.model.selected) {
    css += " selected";
  }

  return css.trim();
});

const handleClick = () => {
  emit("selectItem", props.model.id);
};
</script>

<style>
li.item {
  padding: 5px;
  outline: solid 1px #eee;
  display: flex;
  align-items: center;
  height: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

li.item .name {
  margin-left: 6px;
}

li.item .selected-indicator {
  font-size: 2em;
  line-height: 0.5em;
  margin: 10px 8px 0 8px;
  color: lightgray;
}

li.item.selected .selected-indicator {
  color: skyblue;
}

li.item:hover {
  background-color: #eee;
}
</style>
