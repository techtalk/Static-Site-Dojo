module.exports = function(eleventyConfig) {
  const { HtmlBasePlugin } = import("@11ty/eleventy");

  eleventyConfig.addPlugin(HtmlBasePlugin);
  
  // Pass through assets
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Add a filter for i18n translations
  eleventyConfig.addFilter("translate", function(key, lang) {
    const translations = this.ctx.i18n;
    if (translations && translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    return key;
  });
  
  // Add a filter to get trainings by category
  eleventyConfig.addFilter("byCategory", function(trainings, category) {
    return trainings.filter(t => t.categories && t.categories.includes(category));
  });
  
  // Add a filter to check if array includes value
  eleventyConfig.addFilter("includes", function(array, value) {
    return array && array.includes(value);
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};
