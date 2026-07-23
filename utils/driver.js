import { Browser, Builder, By, Key, until } from 'selenium-webdriver';
import { Select } from 'selenium-webdriver/lib/select.js'

import { baseUrl } from "./config.js";
import { expect } from 'chai';

const driver = new Builder().forBrowser(Browser.CHROME).build();

export { driver };