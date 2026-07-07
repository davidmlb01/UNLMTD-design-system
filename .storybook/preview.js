import '../src/styles/globals.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'unlmtd-black',
      values: [
        { name: 'unlmtd-black', value: '#0D0D0D' },
        { name: 'unlmtd-ink',   value: '#1A1A1A' },
        { name: 'unlmtd-cream', value: '#EDE8DC' },
      ],
    },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    layout: 'centered',
  },
};

export default preview;
