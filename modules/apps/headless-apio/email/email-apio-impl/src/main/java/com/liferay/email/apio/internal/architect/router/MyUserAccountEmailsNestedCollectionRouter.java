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

package com.liferay.email.apio.internal.architect.router;

import com.liferay.apio.architect.router.NestedCollectionRouter;
import com.liferay.email.apio.architect.identifier.EmailIdentifier;
import com.liferay.email.apio.internal.architect.router.base.BaseUserAccountEmailsNestedCollectionRouter;
import com.liferay.person.apio.architect.identifier.MyUserAccountIdentifier;
import com.liferay.portal.kernel.model.EmailAddress;

import org.osgi.service.component.annotations.Component;

/**
 * Provides the information necessary to expose the <a
 * href="http://schema.org/Email">Email</a> resources contained inside an
 * myUserAccount through a web API. The resources are mapped from the internal
 * model {@link EmailAddress}.
 *
 * @author Eduardo Perez
 * @review
 */
@Component(immediate = true)
public class MyUserAccountEmailsNestedCollectionRouter
	extends BaseUserAccountEmailsNestedCollectionRouter<MyUserAccountIdentifier>
	implements NestedCollectionRouter
		<EmailAddress, Long, EmailIdentifier, Long, MyUserAccountIdentifier> {
}