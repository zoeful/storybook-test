<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import LabelItem from "../components/molecules/labelItem/LabelItem.vue"

const props = withDefaults(defineProps(), {
  label: '123',
  labelType: 'primary',
  labelSelectClass: null,
  tooltipText: '',
});
</script>

<template>
  <main>
    <TheWelcome />
    <LabelItem
      :label="props.label"
      class="label-select"
      :type="props.labelType"
    />
  </main>
</template>
