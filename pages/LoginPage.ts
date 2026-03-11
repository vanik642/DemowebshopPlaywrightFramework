import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ElementUtil } from '../utils/ElementUtil';
import { HomePage } from './HomePage';

export class LoginPage {
  // constructor(page: Page) {
  //   super(page);
  // }

  private readonly page:Page;
  private readonly eleUtil:ElementUtil;
  private readonly emailId:Locator;
  private readonly password:Locator;
  private readonly loginBtn:Locator;


  constructor(page:Page){
    this.page=page;
    this.eleUtil=new ElementUtil(page);
    this.emailId=page.getByRole('textbox',{name:'Email'});
    this.password=page.getByRole('textbox',{name:'Password'});
    this.loginBtn=page.getByRole('button',{name:'Log in'});
  }
  
  async goToLoginPage(baseURL:string|undefined){
    await this.page.goto(baseURL+'/login');
  }

async doLogin(email:string,password:string):Promise<HomePage>{
  await this.eleUtil.fill(this.emailId,email);
  await this.eleUtil.fill(this.password,password);
  await this.eleUtil.click(this.loginBtn);
  const pageTitle =await this.page.title();
  console.log('Title of the page :'+pageTitle)
  //return pageTitle;

  return new HomePage(this.page);
}

  
}
