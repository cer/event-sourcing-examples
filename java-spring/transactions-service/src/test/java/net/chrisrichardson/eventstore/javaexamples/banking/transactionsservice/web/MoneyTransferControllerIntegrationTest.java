package net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.web;


import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MoneyTransferControllerIntegrationTestConfiguration.class)
@IntegrationTest
@WebAppConfiguration
public class MoneyTransferControllerIntegrationTest {

  @Autowired
  private WebApplicationContext wac;

  private MockMvc mockMvc;

  @Before
  public void setup() {
    this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
  }

  @Test
  public void shouldCreateAccount() throws Exception {
    mockMvc.perform(post("/api/transfers")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"fromAccountId\" : \"fromAccountId\", \"toAccountId\" : \"toAccountId\", \"amount\" : \"500\"}")
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk());
  }

  @Test
  public void shouldRejectBadRequest() throws Exception {
    mockMvc.perform(post("/api/transfers")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"fromAccountId\" : \"fromAccountIdXXXXXX\"}, {\"toAccountId\" : \"toAccountId\"}, {\"amount\" : \"500\"}")
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().is(HttpStatus.BAD_REQUEST.value()));
  }
}
