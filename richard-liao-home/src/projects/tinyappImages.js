function importAll(r) {
  return r.keys().map(r);
}

const tinyappImages = importAll(
  require.context("./tinyapp", true, /\.(png|jpe?g|svg|gif)$/)
);

export default tinyappImages;
