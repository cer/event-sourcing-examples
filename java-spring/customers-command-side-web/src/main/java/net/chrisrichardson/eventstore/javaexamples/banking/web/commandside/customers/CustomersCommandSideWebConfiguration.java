package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers.CustomerConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.util.ObservableReturnValueHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by popikyardo on 03.02.16.
 */
@Configuration
@Import({CustomerConfiguration.class})
@ComponentScan
public class CustomersCommandSideWebConfiguration extends WebMvcConfigurerAdapter {

    class FakeThing {}

    @Bean
    public FakeThing init(RequestMappingHandlerAdapter adapter) {
        // https://jira.spring.io/browse/SPR-13083
        List<HandlerMethodReturnValueHandler> handlers = new ArrayList<HandlerMethodReturnValueHandler>(adapter.getReturnValueHandlers());
        handlers.add(0, new ObservableReturnValueHandler());
        adapter.setReturnValueHandlers(handlers);
        return new FakeThing();
    }

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        // put the jackson converter to the front of the list so that application/json content-type strings will be treated as JSON
        converters.add(new MappingJackson2HttpMessageConverter());
        // and probably needs a string converter too for text/plain content-type strings to be properly handled
        converters.add(new StringHttpMessageConverter());
    }

}