module.exports = function(eleventyConfig) {
  return {
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    pathPrefix: "/LDSChristian/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
