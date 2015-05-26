package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions;

import java.util.List;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransferConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.util.ObservableReturnValueHandler;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@Import({MoneyTransferConfiguration.class})
@ComponentScan
public class CommandSideWebTransactionsConfiguration extends WebMvcConfigurerAdapter {

	@Override
	public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> handlers) {
		handlers.add(new ObservableReturnValueHandler());
	}

}
