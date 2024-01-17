import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import app from '../../../src/app';


chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

    it("deve retornar um status 200 com uma lista de orders", async function () {
      const mockedResponse = OrderModel.bulkBuild(orderMock.orderArrayResponse);
      
      sinon.stub(OrderModel, "findAll").resolves(mockedResponse)
      const response = await chai
        .request(app)
        .get("/orders")

      expect(response.status).to.equal(200);
    });
  });
