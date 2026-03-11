import { expect, test } from '../fixtures/baseFixtures'
import { ResultsPage } from '../pages/ResultsPage';
import { ProductInfoPage } from '../pages/ProductInfoPage';



test('Verify product header ', async ({ homePage }) => {

   let resultPage: ResultsPage = await homePage.doSearch('Fiction');
   let productInfoPage: ProductInfoPage = await resultPage.selectProduct('Fiction');
   expect(await productInfoPage.getProductHeader()).toBe('Fiction');

});


test('Verify product metadata ', async ({ homePage }) => {
   let resultPage: ResultsPage = await homePage.doSearch('Fiction');
   let productInfoPage: ProductInfoPage = await resultPage.selectProduct('Fiction');
   let actualProductDetails = await productInfoPage.getProductDetails();
   expect.soft(actualProductDetails.get('Old price')).toBe('35.00')
   expect.soft(actualProductDetails.get('Price')).toBe('24.00')


});


test('Add to Cart', async ({ homePage }) => {
   let resultPage: ResultsPage = await homePage.doSearch('Fiction');
   let productInfoPage: ProductInfoPage = await resultPage.selectProduct('Fiction');
   await productInfoPage.addToCart();


});


