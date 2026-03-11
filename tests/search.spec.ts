
import { expect, test } from '../fixtures/baseFixtures';
import { ResultsPage } from '../pages/ResultsPage';


//data provider for product search key and results count//array
const searchData = [
    { searchKey: 'Fiction', resultsCount: 2 },
    { searchKey: 'Desktop', resultsCount: 2 },
    { searchKey: 'Photo', resultsCount: 2 },
    { searchKey: 'TCP', resultsCount: 7 },

];

for (const product of searchData) {
test(`@search verify product search ${product.searchKey}`, async ({ homePage }) => {
 
   let resultPaGE:ResultsPage= await homePage.doSearch(product.searchKey);
   expect(await resultPaGE.getResultsCount()).toBe(product.resultsCount);

  });
}

  

