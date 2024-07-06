package io.openweb3.xpay;

import io.openweb3.pay.AccountListOptions;
import io.openweb3.pay.Walletpay;
import io.openweb3.pay.WalletpayOptions;
import io.openweb3.pay.exceptions.ApiException;
import io.openweb3.pay.models.ListResponseAccountOut;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;

public class WalletpayTest {
    @Test
    public void TestAccount() throws IOException {
        File file = new File("/path/to/rsa_private.pem");
        InputStream is = Files.newInputStream(file.toPath());
        byte[] pemData = is.readAllBytes();
        is.close();

        WalletpayOptions opts = new WalletpayOptions().debug(true);
        Walletpay walletpay = new Walletpay("apikey", new String(pemData, StandardCharsets.UTF_8), opts);

        try {
            ListResponseAccountOut rsp = walletpay.getAccount().list(new AccountListOptions());
            System.out.println(rsp.toString());
        } catch (ApiException e) {
            throw new RuntimeException(e);
        }
    }


}
