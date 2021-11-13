import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  libraries: {
    html2react: {
      processors: [image, iframe, link],
    },
  },
};

export default marsTheme;
