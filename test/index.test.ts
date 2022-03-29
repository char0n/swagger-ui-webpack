import SwaggerUI from "swagger-ui";

describe("swagger-ui", () => {
	it("should work", () => {
		SwaggerUI({
			dom_id: "#app",
			url: "https://petstore.swagger.io/v2/swagger.json"
		});
		
		expect(true).toBe(true);
	});
});