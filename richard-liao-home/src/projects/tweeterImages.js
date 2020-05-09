function importAll(r) {
  return r.keys().map(r);
}

const tweeterImages = importAll(
  require.context("./tweeter", true, /\.(png|jpe?g|svg|gif)$/)
);

export default tweeterImages;
