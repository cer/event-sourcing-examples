package net.chrisrichardson.eventstorestore.javaexamples.testutil;

import io.eventuate.Aggregate;
import io.eventuate.ReflectiveMutableCommandProcessingAggregate;
import io.eventuate.javaclient.spring.EventEntityUtil;
import org.junit.Test;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Method;

public abstract class AbstractEntityEventTest {

  @Test
  public void eventDefinitionsShouldBeCorrect() {

    ReflectionUtils.doWithMethods(entityClass(), new ReflectionUtils.MethodCallback() {
              @Override
              public void doWith(Method method) throws IllegalArgumentException, IllegalAccessException {
                Class eventClass = method.getParameterTypes()[0];
                EventEntityUtil.toEntityType(eventClass);
              }
            },
            new ReflectionUtils.MethodFilter() {
              @Override
              public boolean matches(Method method) {
                return method.getName().startsWith("apply") &&
                        method.getDeclaringClass() != Aggregate.class &&
                        method.getDeclaringClass() != ReflectiveMutableCommandProcessingAggregate.class;
              }
            });

  }

  protected abstract Class<?> entityClass();
}
