import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';
import BackofficeBackendApp from '../../../../../../src/apps/backoffice/backend/BackofficeBackendApp';

var expect = require('expect.js');

let _request: request.Test;
let _response: request.Response;
let application: BackofficeBackendApp;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer).put(route).send(JSON.parse(body));
});

Then('the response status code should be {int}', async (status: number) => {
  await _request.expect(status);
});

Then('the response should be empty', () => {
  expect(_response).to.be(undefined);
});

BeforeAll(async () => {
  application = new BackofficeBackendApp();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
