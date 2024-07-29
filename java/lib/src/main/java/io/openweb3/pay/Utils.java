package io.openweb3.pay;

import io.openweb3.pay.exceptions.ApiException;

import java.io.*;
import java.math.BigInteger;

final class Utils {
    private Utils() {
    }

    public static ApiException WrapInternalApiException(final io.openweb3.pay.internal.ApiException e) {
        return new ApiException(e.getMessage(), e, e.getCode(), e.getResponseHeaders(), e.getResponseBody());
    }

    public static String getStringFromFile(String filePath) throws Exception {
        FileInputStream in = new FileInputStream(filePath);
        InputStreamReader inReader = new InputStreamReader(in, "UTF-8");
        BufferedReader bf = new BufferedReader(inReader);
        StringBuilder sb = new StringBuilder();
        String line;
        do {
            line = bf.readLine();
            if (line != null) {
                if (sb.length() != 0) {
                    sb.append("\n");
                }
                sb.append(line);
            }
        } while (line != null);

        return sb.toString();
    }

    public static String toHex(byte[] array) {
        BigInteger bi = new BigInteger(1, array);
        String hex = bi.toString(16);
        int paddingLength = (array.length * 2) - hex.length();
        if (paddingLength > 0) {
            return String.format("%0" + paddingLength + "d", 0) + hex;
        } else {
            return hex;
        }
    }
}
