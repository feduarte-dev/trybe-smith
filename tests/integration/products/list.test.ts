import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productsModel from '../../../src/database/models/product.model'
import productsMock from '../../mocks/products.mock'
import app from '../../../src/app'

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

    it("deve retornar um status 200 com uma lista de  produtos", async function () {
      const mockedResponse = productsModel.bulkBuild(productsMock.mockedProductsArrayResponse);
      
      sinon.stub(productsModel, "findAll").resolves(mockedResponse)
      const response = await chai
        .request(app)
        .get("/products")

      expect(response.status).to.equal(200);
    });
  });
