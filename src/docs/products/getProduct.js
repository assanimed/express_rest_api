const getProduct = {
  get: {
    tags: ["Products CRUD operations"],
    description: "Get Single Product",
    operationId: "getProduct",
    parameters: [
      {
        name: ":id",
        in: "path",
        schema: {
          type: "string",
        },
        required: true,
        description: "Id of Product to be retrieved",
      },
    ],
    responses: {
      200: {
        description: "Product Updated", // response desc.
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

export default getProduct;
