import * as puppeteer from 'puppeteer';

export class AppPage {
  browser: puppeteer.Browser;
  page: puppeteer.Page;
  baseUrl = 'http://localhost:4200';

  init = async () => {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
  }

  gotoPage = async (url) => await this.page.goto(this.baseUrl + url);

  getContent = async (selector) => await this.page.evaluate(select => document.querySelector(select).textContent, selector);

  waitFor = async (selector) => this.page.waitFor(selector);

  close = () => this.browser.close();
}
