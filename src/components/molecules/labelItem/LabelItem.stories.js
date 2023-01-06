import LabelItem from './LabelItem.vue';

export default {
    title: 'LabelItem',
    component: LabelItem,
};

export const Basic = () => ({
    components: { LabelItem },
    template: '<LabelItem type="primary" label="hi" />'
});

export const WithProp = () => ({
    components: { LabelItem },
    template: '<LabelItem type="ghost" label="bye"/>',
});
