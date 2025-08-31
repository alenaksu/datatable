import { Preview, setCustomElementsManifest } from '@storybook/web-components';
import customElementsManifest from '../custom-elements.json' assert { type: 'json' };
import {registerTheme} from '../src/index.js';

setCustomElementsManifest(customElementsManifest);

registerTheme();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
