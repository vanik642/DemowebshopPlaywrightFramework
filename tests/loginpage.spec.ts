
import { expect, test } from '../fixtures/baseFixtures';


  test('Verify valid login ', async ({ homePage }) => {

    await expect(homePage.page).toHaveTitle('Demo Web Shop');
    
   });

  

