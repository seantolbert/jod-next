import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ],
});
