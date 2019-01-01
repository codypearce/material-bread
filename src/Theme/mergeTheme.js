import defaultTheme from './defaultTheme';

function mergeTheme(userTheme) {
  const mergedTheme = {
    ...defaultTheme,
  };

  if (userTheme) {
    Object.keys(mergedTheme).forEach(key => {
      if (userTheme[key]) {
        mergedTheme[key] = { ...defaultTheme[key], ...userTheme[key] };
      }
    });
  }

  return mergedTheme;
}

export default mergeTheme;
