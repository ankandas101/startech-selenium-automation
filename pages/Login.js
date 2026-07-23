import { Browser, Builder, By, Key, until } from 'selenium-webdriver';
import { driver } from "../utils/driver.js";
import { account } from '../test-data/loginInformation.js';
export default class Login{
       constructor(driver) {
        this.driver = driver;
    }
    


    async loginFormSubmit(){
    await this.driver.findElement(By.id("input-username")).sendKeys(account.username);
    await this.driver.findElement(By.id("input-password")).sendKeys(account.password);
    await this.driver.sleep(1000);
  //  await this.driver.findElement(By.xpath("//input[@name='cf-turnstile-response']")).sendKeys("1.8CM7s1sBEjO9zXQJw8QxurUZdC6fS5nOOp5hz4EnAP9rpXwR7kG5CnyltWtZRjYGYQyw9NFjyIMoVGh0POtL8xFIxRM2StH_jFNfQCQ3mTVsK4l1n8rzWfOcJPjXQkPY7CX9YVLqFvFjmySzbaRhazuSzhe6yjCe1nB1-tqnAus6IylCNCxissU2KVz1Ri28ZdtLGjjwt6OVT32Wh-Uv6un6gpV9GsZYGDOMRetBiNHuAb837y18dCnZFmMwEheco7pj0ULLSStlqeIfvqq_kYhs3fMcQTLWS362Cm-E_QQABf-4lfs8shghd5OlZKgG6ZcVUgewaQCP47a8hVz3k2akiyWrRHxbwNwSQtrHbEwPrPcg869PB2NUZGUGbHWPxT1nr7kxBcjaVOrdFrQLhJUIZsFiLDRbnCOgBH2ZWxokJrB84m3tRanN1WP5ZOtD4JGz44756-kKdmvh6xmmc7Fe1YxA4E5u-OcgubTupj_2mMV608prJdPSMfiCoLYBxhcKlv6mlFX3xGGmTTm0CwGcoLzjYqxVw0yKbNQAg0a2I_h4A4-cVyRkF8KIpQa16XDhLThfqPBhRisecDIPTP1sF4o9R3lgfCV4v0zTUxZGC2eWXAKzc1gQ9esf9GI7qADNe8s7k8Y8OapPLOY--Q.uwnP3KErAasxtoOWCZjAEQ.e02522da06a8ea8c1e8fcd622f7dd578b2d4c023f39bfa6900dca9aecba546b7")
    await this.driver.findElement(By.xpath("//button[contains(text(),'Login')]")).click();

    }
}


