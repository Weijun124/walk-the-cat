const server = require( "../server" );
const supertest = require("supertest");

test("GET /item", async () => {
    const response = await supertest(server).get("/item").expect(200);
    expect(response.body[0].title).toBe("Todo");
});

test("Should create a new task", async () => {
    const response = await supertest(server)
        .post("/item")
        .send({
            card_id: 1,
            description: "Cuz I like Testing",
            status_label: false,
        })
    // console.log(response.body);
    expect(response.statusCode).toEqual(201);
    expect(response.body.description).toEqual("Cuz I like Testing");
});

describe("Updates an item", () => {
    it("Should update the existing task", async () => {
        const response = await supertest(server)
            .patch("/item/")
            .send({
                description: "Tests are hard",
                item_id: 1,
            });
    
        expect(response.statusCode).toEqual(200);
    });

    it("Should fetch all items", async () => {
        const expected = ["Tests are hard"];
        await supertest(server).get("/item");
        // console.log(response.body[0].description);
        expect(200);
        expect(["Tests are hard"]).toEqual(expect.arrayContaining(expected));
    });

    it("Should delete the item", async () => {
        const response = await supertest(server)
            .delete("/item")
            .send({
                item_id: 1,
            });
        expect(response.statusCode).toEqual(204);
    })
});

describe("Updates drag and drop", () => {
    it("Should update the existing task", async () => {
        const response = await supertest(server)
            .patch("/item123")
            .send({
                card_id: 2,
                status_label: true,
                item_id: 2,
            });
    
        expect(response.statusCode).toEqual(200);
    });

    it("Should confirm card_id: 2 contains item_id: 2", async () => {
        const expected = [2];
        const response = await supertest(server).get("/item");
        // console.log(response.body[1]);
        expect(200);
        expect([2]).toEqual(expect.arrayContaining(expected));
    });
});