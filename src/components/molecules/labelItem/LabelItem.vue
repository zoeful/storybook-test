<template>
  <dl class="label-item">
    <dt
        class="label-item__label"
        :class="labelClass"
    >
      {{ label }}
    </dt>
    <dd
        class="label-item__body"
        :class="linkedItemClass"
        @click="onClickItem"
    >
      blabla
    </dd>
  </dl>
</template>

<script setup>
import { useLabelItem } from "./useLabelItem.js";
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
})

// const props = withDefvaults(defineProps(), {
//   label: '',
//   type: 'default',
// });

const {
  labelClass,
  linkedItemClass,
  onClickItem,
} = useLabelItem(props);
</script>

<style lang="scss">
.label-item {
  display: inline-block;
  margin: 6px 8px 6px 0;
  font-size: 12px;
  color: #000000;
  width: 100px;

  &__label {
    display: inline;
    padding-right: 8px;
  }
  &__body {
    display: inline-block;
    padding-right: 8px;
  }

  .label-item__label--primary {
    color: #198FFF;
  }
  .label-item__label--ghost {
    color: #666666;
  }
  .label-item--is-linked {
    cursor: pointer;
    text-decoration-line: underline;
    &:hover {
      color: #198FFF;
    }
  }
}
</style>
