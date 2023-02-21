const components = {
  components: {
    schemas: {
      Product: {
        type: "object",
        required: ["name", "price"],
        properties: {
          name: {
            type: "string",
            description: "product name",
            example: "HP 4K monitor",
          },
          price: {
            type: "double",
            description: "product price",
            example: "399, 3.4, ...",
          },
        },
      },
    },
  },
};

export default components;
