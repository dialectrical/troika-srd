export default {
  name: "background",
  title: "Background",
  type: "document",
  fields: [
    {
      name: "number",
      title: "Number",
      type: "number"
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },

    {
      name: "items",
      title: "Possessions",
      type: "blockContent"
    },
    {
      name: "skills",
      title: "Advanced Skills",
      type: "blockContent"
    },
    {
      name: "special",
      title: "Special",
      type: "blockContent"
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
