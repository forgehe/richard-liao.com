function importAll(r) {
  return r.keys().map(r);
}

const skillsImages = importAll(
  require.context(".", true, /\.(png|jpe?g|svg|gif)$/)
);

export default skillsImages;
