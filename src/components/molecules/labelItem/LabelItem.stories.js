import LabelItem from './LabelItem.vue';
import { storiesOf } from '@storybook/vue3';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('HelloWorld', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
stories.addDecorator(withKnobs);

stories.add('with hello message', () => ({
    components: { LabelItem },
    props: {
        msg: {
            /*
            * The text(label, defaultValue) method from Knobs allows you to receive
            * value dynamically in the Storybook Ui.
            */
            default: text('Text', 'Hello Storybook')
        }
    },
    template: '<LabelItem :msg="msg"/>'
}));
