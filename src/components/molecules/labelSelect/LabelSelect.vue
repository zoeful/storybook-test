<template>
  <label-item
      :label="props.label"
      class="label-select"
      :class="labelSelectClass"
      :type="props.labelType"
  >
    <ev-select
        v-model="modelValue"
        :items="props.items"
        :placeholder="props.placeholder"
        @change="onChange"
    />
  </label-item>
</template>

<script setup>
import LabelItem from '../labelItem/LabelItem.vue';
import { useLabelSelect } from './useLabelSelect';

const props = defineProps();
const emit = defineEmits();

const {
  modelValue, labelSelectClass, selectWidth, onChange,
} = useLabelSelect(props, emit);
</script>

<style lang="scss">
.label-select {
  .ev-select {
    width: v-bind('selectWidth') !important;
  }
  &--medium {
    .ev-input {
      height: 32px !important;
    }
  }
  &--small {
    .ev-input {
      height: 28px !important;
    }
  }
}
</style>
