package net.chrisrichardson.eventstore.javaexamples.banking.apigateway;

import org.springframework.http.HttpStatus;

/**
 * Created by popikyardo on 07.12.15.
 */
public class RestUtil {

    public static boolean isError(HttpStatus status) {
        HttpStatus.Series series = status.series();
        return (HttpStatus.Series.CLIENT_ERROR.equals(series)
                || HttpStatus.Series.SERVER_ERROR.equals(series));
    }
}