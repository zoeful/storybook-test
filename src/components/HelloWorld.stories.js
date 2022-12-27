import HelloWorld from './HelloWorld.vue';
import { storiesOf } from '@storybook/vue3';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('HelloWorld', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
stories.addDecorator(withKnobs);

stories.add('with hello message', () => ({
    components: { HelloWorld },
    props: {
        msg: {
            /*
            * The text(label, defaultValue) method from Knobs allows you to receive
            * value dynamically in the Storybook Ui.
            */
            default: text('Text', 'Hello Storybook')
        }
    },
    template: '<HelloWorld :msg="msg"/>'
}));
