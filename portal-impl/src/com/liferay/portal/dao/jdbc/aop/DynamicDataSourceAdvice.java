/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package com.liferay.portal.dao.jdbc.aop;

import com.liferay.portal.kernel.dao.jdbc.aop.DynamicDataSourceTargetSource;
import com.liferay.portal.kernel.dao.jdbc.aop.MasterDataSource;
import com.liferay.portal.kernel.dao.jdbc.aop.Operation;
import com.liferay.portal.spring.aop.AnnotationChainableMethodAdvice;
import com.liferay.portal.spring.aop.ServiceBeanAopCacheManager;
import com.liferay.portal.spring.transaction.TransactionInterceptor;

import java.lang.reflect.Method;

import org.aopalliance.intercept.MethodInvocation;

import org.springframework.transaction.interceptor.TransactionAttribute;

/**
 * @author Shuyang Zhou
 * @author László Csontos
 */
public class DynamicDataSourceAdvice
	extends AnnotationChainableMethodAdvice<MasterDataSource> {

	public DynamicDataSourceAdvice() {
		super(MasterDataSource.class);
	}

	@Override
	public Object before(MethodInvocation methodInvocation) throws Throwable {
		Operation operation = Operation.WRITE;

		MasterDataSource masterDataSource = findAnnotation(methodInvocation);

		if (masterDataSource == null) {
			TransactionAttribute transactionAttribute =
				_transactionInterceptor.getTransactionAttribute(
					methodInvocation);

			if (transactionAttribute.isReadOnly()) {
				operation = Operation.READ;
			}
		}

		_dynamicDataSourceTargetSource.pushOperation(operation);

		return null;
	}

	@Override
	public void duringFinally(MethodInvocation methodInvocation) {
		_dynamicDataSourceTargetSource.popOperation();
	}

	@Override
	public boolean isEnabled(Class<?> targetClass, Method method) {
		return _transactionInterceptor.isEnabled(targetClass, method);
	}

	public void setDynamicDataSourceTargetSource(
		DynamicDataSourceTargetSource dynamicDataSourceTargetSource) {

		_dynamicDataSourceTargetSource = dynamicDataSourceTargetSource;
	}

	public void setTransactionInterceptor(
		TransactionInterceptor transactionInterceptor) {

		_transactionInterceptor = transactionInterceptor;
	}

	@Override
	protected MasterDataSource findAnnotation(
		MethodInvocation methodInvocation) {

		Object target = methodInvocation.getThis();

		return serviceBeanAopCacheManager.findAnnotation(
			target.getClass(), methodInvocation.getMethod(),
			MasterDataSource.class);
	}

	@Override
	protected void setServiceBeanAopCacheManager(
		ServiceBeanAopCacheManager serviceBeanAopCacheManager) {

		super.setServiceBeanAopCacheManager(serviceBeanAopCacheManager);
	}

	private DynamicDataSourceTargetSource _dynamicDataSourceTargetSource;
	private TransactionInterceptor _transactionInterceptor;

}