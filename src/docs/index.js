import info from "./info.js";
import servers from "./server.js";
import tags from "./tags.js";
import components from "./components.js";
import products from "./products/index.js";

const spec = {
  ...info,
  ...servers,
  ...tags,
  ...components,
  ...products,
};

export default spec;
