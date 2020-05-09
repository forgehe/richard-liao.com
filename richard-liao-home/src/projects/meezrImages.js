function importAll(r) {
  return r.keys().map(r);
}

const meezrImages = importAll(
  require.context("./meezr", true, /\.(png|jpe?g|svg|gif)$/)
);

export default meezrImages;
