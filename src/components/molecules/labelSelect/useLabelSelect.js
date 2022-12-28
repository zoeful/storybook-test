import { useSelect } from '../select/useSelect';
import { ref } from 'vue';

const useLabelSelect = (props, emit) => {
    const {
        items, modelValue, onChange, getFirstSelectValue, transformSelectItems,
    } = useSelect(props, emit);

    const labelSelectClass = ref(`label-select--${props.selectType || 'medium'}`);
    const selectWidth = ref(props.selectWidth ?? '184px');

    return {
        items,
        modelValue,
        labelSelectClass,
        selectWidth,
        onChange,
        getFirstSelectValue,
        transformSelectItems,
    };
};

export { useLabelSelect };
