const deleteProduct = {
  delete: {
    tags: ["Products CRUD operations"],
    description: "Delete Single Product",
    operationId: "deleteProduct",
    parameters: [
      {
        name: ":id",
        in: "path",
        schema: {
          type: "string",
        },
        required: true,
        description: "Id of Product to be Deleted",
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

export default deleteProduct;
