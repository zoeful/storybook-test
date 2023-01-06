import { computed, reactive } from 'vue';

const useLabelItem = (props) => {
    console.log('props : ', props);
    const labelClass = computed(() => {
        switch (props.type) {
            case 'primary':
                return 'label-item__label--primary';
            case 'ghost':
                return 'label-item__label--ghost';
            default:
                return '';
        }
    });
    console.log('labelClass : ', labelClass.value);
    const linkedItemClass = reactive({
        'label-item--is-linked': !!props.clickItemFn,
    });
    const isValidClickItemFn = props.clickItemFn && typeof props.clickItemFn === 'function';
    const onClickItem = () => {
        if (!isValidClickItemFn) {
            return;
        }
        props.clickItemFn();
    };

    return {
        labelClass,
        linkedItemClass,
        isValidClickItemFn,
        onClickItem,
    };
};

export { useLabelItem };
