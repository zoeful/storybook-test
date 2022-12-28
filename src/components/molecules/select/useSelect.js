import { computed, ref } from 'vue';

const useSelect = (props, emit) => {
    const items = ref([]);

    const modelValue = computed({
        get: () => props.modelValue,
        set: (val) => emit('update:modelValue', val),
    });

    const onChange = (val) => emit('change', val);

    const getFirstSelectValue = (selectItems) => {
        let result = null;
        if (selectItems.length) {
            result = selectItems[0].value;
        }
        return result;
    };

    const transformSelectItems = (data, options = {name: '', value: '', includeAll: false}) => [
        ...options.includeAll ? [{ name: 'ALL', value: 'all' }] : [],
        ...data.map(({ [options.name]: name, [options.value]: value }) => ({
            name: typeof name === 'string' ? name : '',
            value: typeof value === 'string'
            || typeof value === 'number'
            || typeof value === 'boolean' ? value : '',
        })),
    ];

    return {
        items,
        modelValue,
        onChange,
        getFirstSelectValue,
        transformSelectItems,
    };
};

export { useSelect };
