import GlobalStyles from '../src/styles/global';

const withGlobalStyles = (storyFn) => (
  <>
   <GlobalStyles />
   {storyFn()}
  </>
);

export default withGlobalStyles;
