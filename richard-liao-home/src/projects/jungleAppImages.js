function importAll(r) {
  return r.keys().map(r);
}

const jungleAppImages = importAll(
  require.context("./jungle-app", true, /\.(png|jpe?g|svg|gif)$/)
);

export default jungleAppImages;
