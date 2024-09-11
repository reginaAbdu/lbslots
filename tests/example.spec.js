// @ts-check
const { test, expect } = require("@playwright/test");
const { countReset } = require("console");
const fs = require("fs-extra");
const url = fs.readFileSync;
require("dotenv").config();
const Notifier = require("../notifier");
let arr = [];
let arr2 = [];
let counter = 1;

test("has title", async ({ page }) => {
  await page.goto("https://www.leasebreak.com/sign-in");
  await expect(page).toHaveTitle("Sign In | LeaseBreak.com");
  await page.locator("#UserModel_email").fill("welcome@junehomes.com");
  await page.locator("#UserModel_password").fill("36F%~20^9HFK9glIQ44");
  await page
    .locator(
      "div[class = 'login-content-button-block for-float']> button[type = 'submit']"
    )
    .click();
  const numbertag = page.locator(
    "span[class = 'lead relative'] > span:first-child"
  );
  await numbertag.waitFor();
  await expect(numbertag).toBeVisible();
  try {
    await expect(numbertag).toHaveText("10");
  } catch (error) {
    await Notifier.notify();
  }
  await page.locator("#featuredOnly").click();
  await page.locator("#featuredOnly").isChecked();
  const address = await page.locator("span[class = 'h1 text-secondary']");
  const count = await address.count();
  for (let i = 0; i < count; ++i) {
    let name = await address.nth(i).textContent();
    arr.push(name);
  }
  for (let i = 0; i < arr.length; i += 2) {
    arr2.push(arr[i].concat(", ").concat(arr[counter]));
    counter += 2;
  }
  const data = new Set(arr2);
  const finedata = [...data].join(", ");
  fs.appendFile("./logs.txt", finedata + "," + new Date() + "\n");
});


