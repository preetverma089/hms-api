// swaggerOptions.js
export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HMS API Docs",
      version: "1.0.0",
      description: "Hospital Management System API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // 📌 Path to your route files
};
