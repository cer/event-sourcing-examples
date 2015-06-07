package net.chrisrichardson.eventstore.javaexamples.banking.web.util;

import rx.Observable;

import org.springframework.core.MethodParameter;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.context.request.async.DeferredResult;
import org.springframework.web.context.request.async.WebAsyncUtils;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.method.support.ModelAndViewContainer;


public class ObservableReturnValueHandler implements HandlerMethodReturnValueHandler {

	@Override
	public boolean supportsReturnType(MethodParameter returnType) {
		return Observable.class.equals(returnType.getParameterType());
	}

	@Override
	public void handleReturnValue(Object returnValue, MethodParameter returnType, ModelAndViewContainer mavContainer,
			NativeWebRequest webRequest) throws Exception {

		if (returnValue == null) {
			return;
		}
		DeferredResult<?> d = DeferredUtils.toDeferredResult((Observable<?>) returnValue);
		WebAsyncUtils.getAsyncManager(webRequest).startDeferredResultProcessing(d, mavContainer);
	}

}
