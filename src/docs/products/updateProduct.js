const updateProduct = {
  patch: {
    tags: ["Products CRUD operations"],
    description: "Update Single Product",
    operationId: "updateProduct",
    parameters: [
      {
        name: "id",
        required: true,
        description: "Id of Product to be updated",
      },
    ],
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

export default updateProduct;
