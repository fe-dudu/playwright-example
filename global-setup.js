// import { chromium } from "@playwright/test";

async function globalSetup() {
  // const browser = await chromium.launch();
  // const page = await browser.newPage();

  // await page.goto(process.env.DOMAIN);

  // await page.getByLabel("아이디 또는 전화번호").fill(`${process.env.EMAIL}`);
  // await page.getByLabel("비밀번호").fill(`${process.env.PASSWORD}`);
  // await page.getByRole("button", { name: "로그인" }).click();

  // await page.context().storageState({ path: "auth.json" });
  console.log(`${process.env.DOMAIN}에서 ${process.env.EMAIL}계정으로 set-up을 진행하세요.`);
}

export default globalSetup;
