package net.chrisrichardson.eventstore.javaexamples.banking.web.queryside;

import java.util.List;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.QuerySideAccountConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.util.ObservableReturnValueHandler;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@Import({QuerySideAccountConfiguration.class})
@ComponentScan
public class QuerySideWebConfiguration extends WebMvcConfigurerAdapter {

	@Override
	public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> handlers) {
		handlers.add(new ObservableReturnValueHandler());
	}

}
