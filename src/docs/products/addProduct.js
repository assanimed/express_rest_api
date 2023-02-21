const addProduct = {
  post: {
    tags: ["Products CRUD operations"], // operation's tag.
    description: "Add Product", // operation's desc.
    operationId: "addProduct", // unique operation id.
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Product", // todo input data model
          },
        },
      },
    },
    responses: {
      200: {
        description: "Product Added", // response desc.
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

export default addProduct;
