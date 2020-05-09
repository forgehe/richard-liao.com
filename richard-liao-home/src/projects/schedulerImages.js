function importAll(r) {
  return r.keys().map(r);
}

const schedulerImages = importAll(
  require.context("./scheduler", true, /\.(png|jpe?g|svg|gif)$/)
);

export default schedulerImages;
