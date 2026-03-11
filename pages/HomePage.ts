import { Page, Locator } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil.js';
import {LoginPage} from '../pages/LoginPage.js';
import { ResultsPage } from './ResultsPage.js';


export class HomePage{
    
    //Page Locators/Objects/Object Reporitied -Use Encapsulayion -use private and make final

   // private readonly page: Page;
    readonly page: Page;
    private readonly eleUtil:ElementUtil;
    private readonly logoutLink:Locator;
    private readonly search:Locator;
    private readonly searchIcon:Locator;
    
    //Page class Constructor

    constructor(page: Page) {
        this.page = page;
        this.eleUtil = new ElementUtil(page);
        this.logoutLink=page.locator('.ico-logout');
       // this.logoutLink=page.getByRole('link', { name: 'Logout' });
        this.search=page.locator("//input[@id='small-searchterms']");
        this.searchIcon=page.locator('.button-1.search-box-button');
        

    }

    async isUserLoggedIn():Promise<boolean>{
        await this.logoutLink.waitFor({ state: 'visible' });
        return this.eleUtil.isVisible(this.logoutLink);

    }

    async logOut():Promise<LoginPage>{
        await this.eleUtil.click(this.logoutLink);
        return new LoginPage(this.page);

    }

    async doSearch(searchKey:string):Promise<ResultsPage>{
        console.log(`search key :${searchKey}`);
        await this.eleUtil.fill(this.search,searchKey);
        await this.eleUtil.click(this.searchIcon);
        return new ResultsPage(this.page);

    }
}