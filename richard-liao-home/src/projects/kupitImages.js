function importAll(r) {
  return r.keys().map(r);
}

const kupitImages = importAll(
  require.context("./kupit", true, /\.(png|jpe?g|svg|gif)$/)
);

export default kupitImages;
