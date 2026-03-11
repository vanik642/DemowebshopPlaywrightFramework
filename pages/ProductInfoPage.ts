import { Page, Locator } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil.js';
import { ShoppingCartPage } from './ShoppingCartPage.ts';


export class ProductInfoPage {

    // private readonly page: Page;
    readonly page: Page;
    private readonly eleUtil: ElementUtil;
    private readonly header: Locator;
    private readonly productMetaLabel: Locator;
    private readonly cartButton: Locator
    private readonly productMap = new Map<string, string>();


    //Page class Constructor

    constructor(page: Page) {
        this.page = page;
        this.eleUtil = new ElementUtil(page);
        this.header = page.locator('h1');
        this.productMetaLabel = page.locator(`//div[@class='overview']/div[@class='prices']/div`);
        this.cartButton = page.locator('.button-1.add-to-cart-button');

    }

    async getProductHeader(): Promise<string> {
        const header = await this.eleUtil.getInnerText(this.header);
        console.log('product header :' + header);
        return header.trim();
    }

    async getProductDetails(): Promise<Map<string, string | number | null>> {
        const header = await this.getProductHeader();
        this.productMap.set('header', header);
        await this.getProductMetaData();
        return this.productMap;

    }


    async addToCart() {
        await this.eleUtil.click(this.cartButton);
    }



    private async printProductDetails() {
        for (const [key, value] of this.productMap) {
            console.log(key, value);
        }
    }


    private async getProductMetaData() {
        let priceData: string[] = await this.productMetaLabel.allInnerTexts();

        for (let meta of priceData) {
            let metadata: string[] = meta.split(':');

            let metaKey = metadata[0].trim();
            let metaValue = metadata[1].trim();


            this.productMap.set(metaKey, metaValue)


        }
    }

}