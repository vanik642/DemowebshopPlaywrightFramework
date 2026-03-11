import { Page, Locator } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil.js';
import { ProductInfoPage } from './ProductInfoPage.js';


export class ResultsPage{
    
   // private readonly page: Page;
    readonly page: Page;
    private readonly eleUtil:ElementUtil;
   
    private readonly results:Locator;
    
    
    //Page class Constructor

    constructor(page: Page) {
        this.page = page;
        this.eleUtil = new ElementUtil(page);
        this.results=page.locator('.item-box');
        

    }

    async getResultsCount():Promise<number>{
        console.log("Count :"+ await this.results.count());
        return this.results.count();

    }

    async selectProduct(productName:string):Promise<ProductInfoPage>{
        
        await this.eleUtil.click(this.page.getByRole('link',{name:`${productName}`}));
        return new ProductInfoPage(this.page);
    }

   
}

