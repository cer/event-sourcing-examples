package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.AccountConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.util.ObservableReturnValueHandler;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import java.util.ArrayList;
import java.util.List;

@Configuration
@Import({AccountConfiguration.class})
@ComponentScan
@EnableAutoConfiguration
public class CommandSideWebAccountsConfiguration extends WebMvcConfigurerAdapter {

	class FakeThing {}

	@Bean
	public FakeThing init(RequestMappingHandlerAdapter adapter) {
		// https://jira.spring.io/browse/SPR-13083
		List<HandlerMethodReturnValueHandler> handlers = new ArrayList<HandlerMethodReturnValueHandler>(adapter.getReturnValueHandlers());
		handlers.add(0, new ObservableReturnValueHandler());
		adapter.setReturnValueHandlers(handlers);
		return new FakeThing();
	}

}
