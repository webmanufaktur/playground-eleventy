const path = require("path");
const Image = require("@11ty/eleventy-img");
const pluginWebc = require("@11ty/eleventy-plugin-webc");

async function imageShortcode(src, alt, wdth = "null") {
  let metadata = await Image(src, {
    widths: wdth,
    formats: ["webp", "jpeg"],
    urlPath: "/assets/media/", // used in frontend
    outputDir: "_site/assets/media/", // used in dev
    filenameFormat: function (id, src, width, format) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${id}-${width}w.${format}`;
    },
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    },
  });
  let imageAttributes = {
    alt,
    sizes: "auto",
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

// module exports
module.exports = function (eleventyConfig) {
  // #passthrough
  eleventyConfig.addPassthroughCopy("src/assets/");
  // #shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/components/*.webc",
  });

  return {
    // set the input and output directories
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
    templateFormats: ["njk", "md", "html", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
