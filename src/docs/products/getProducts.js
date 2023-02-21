const getProducts = {
  get: {
    tags: ["Products CRUD operations"], // operation's tag.
    description: "Get Products", // operation's desc.
    operationId: "getProducts", // unique operation id.
    parameters: [], // expected params.
    responses: {
      200: {
        description: "Product Retrieved", // response desc.
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Product", // Todo model
            },
          },
        },
      },
    },
  },
};

export default getProducts;
