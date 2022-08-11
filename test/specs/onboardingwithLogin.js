
var expect = require('chai').expect

const SecurePage = require ('../pageobjects/secure.page')

describe('Login', () => {
    it('Onboarding', async () => {
       
        const deger_1 = await $('id=com.marsathletic.android.macfit.app.dev:id/tv_subtitle')
        const deger = await deger_1.getText()

        console.log("Onboarding ... " + ":" +deger)

        expect(deger).to.equal("Hayatının her anında spora, fit olmaya ve iyi yaşamaya inanıyorsan doğru yerdesin")

      
        await expect(deger).to.have.contains("fit olmaya ve iyi yaşamaya")

        await browser.pause(1000);
        await SecurePage.swipe();

        await deger_1.waitForDisplayed(2500)

    
        const deger2 = await deger_1.getText();
        expect(deger2).to.equal("Nerede olursan ol yüzlerce farklı içeriği hayatının akışına göre uygula")


        await browser.pause(1000);
        await SecurePage.swipe();
        await deger_1.waitForDisplayed(2500)
        const deger3 = await deger_1.getText();

        expect(deger3).to.equal("Kardiyo, kuvvet, esnetme, yoga, pilates…")

        await $("id=com.marsathletic.android.macfit.app.dev:id/btn_start").click()
        await $("id=com.marsathletic.android.macfit.app.dev:id/edt_phone").setValue("5322222222");
        await $("id=com.marsathletic.android.macfit.app.dev:id/btn_start").click();
        await $("id=com.marsathletic.android.macfit.app.dev:id/otp_view").setValue("112233");
        await browser.pause(1000);
        await $("id=com.marsathletic.android.macfit.app.dev:id/btn_start").click();
        await browser.pause(1000);
        await $("id=com.marsathletic.android.macfit.app.dev:id/btn_next").click();
        await $("id=com.marsathletic.android.macfit.app.dev:id/btn_next").click();
        await $("id=com.marsathletic.android.macfit.app.dev:id/btn_skip").click();
        await $("id=com.marsathletic.android.macfit.app.dev:id/btn_okay").click();

        




    });
});


