import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import orderModel from "../../../src/database/models/order.model";
import orderMock from "../../mocks/order.mock";
import app from "../../../src/app";
import UserModel from "../../../src/database/models/user.model";
import loginMock from "../../mocks/login.mock";

chai.use(chaiHttp);

describe("POST /orders", function () {
  beforeEach(function () {
    sinon.restore();
  });

  it("deve retornar um status 201 com um produto adicionado", async function () {
    const mockedUser = UserModel.build(loginMock.validUser);
    sinon.stub(UserModel, 'findOne').resolves(mockedUser);

    const response = await chai
    .request(app)
    .post("/orders")
    .set({
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTcwNTQ5ODEzNX0.h9BamLQe2OomFbSwBT3tW5TEANQfodooSJcCiLlThRk',
    })      
    .send(orderMock.mockedOrderBody)
    

    const mockedProduct = orderModel.build(orderMock.mockedOrderResponse);

    sinon.stub(orderModel, "create").resolves(mockedProduct);

    expect(response.status).to.equal(201);
  });
});
