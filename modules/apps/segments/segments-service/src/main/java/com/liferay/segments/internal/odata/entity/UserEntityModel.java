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

package com.liferay.segments.internal.odata.entity;

import com.liferay.portal.kernel.search.Field;
import com.liferay.portal.odata.entity.ComplexEntityField;
import com.liferay.portal.odata.entity.DateTimeEntityField;
import com.liferay.portal.odata.entity.EntityField;
import com.liferay.portal.odata.entity.EntityModel;
import com.liferay.portal.odata.entity.StringEntityField;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Provides the entity data model from the Indexed Entity (User).
 *
 * @author David Arques
 * @review
 */
public class UserEntityModel implements EntityModel {

	public static final String NAME = "User";

	public UserEntityModel(List<EntityField> customEntityFields) {
		_entityFieldsMap = Stream.of(
			new ComplexEntityField("customField", customEntityFields),
			new DateTimeEntityField(
				"dateModified",
				locale -> Field.getSortableFieldName(Field.MODIFIED_DATE),
				locale -> Field.MODIFIED_DATE),
			new StringEntityField(
				"ancestorOrganizationIds", locale -> "ancestorOrganizationIds"),
			new StringEntityField("classPK", locale -> Field.USER_ID),
			new StringEntityField("companyId", locale -> Field.COMPANY_ID),
			new StringEntityField("emailAddress", locale -> "emailAddress"),
			new StringEntityField(
				"firstName", locale -> Field.getSortableFieldName("firstName")),
			new StringEntityField("groupId", locale -> Field.GROUP_ID),
			new StringEntityField("groupIds", locale -> "groupIds"),
			new StringEntityField(
				"jobTitle", locale -> Field.getSortableFieldName("jobTitle")),
			new StringEntityField(
				"lastName", locale -> Field.getSortableFieldName("lastName")),
			new StringEntityField(
				"organizationCount", locale -> "organizationCount"),
			new StringEntityField(
				"organizationIds", locale -> "organizationIds"),
			new StringEntityField("roleIds", locale -> "roleIds"),
			new StringEntityField(
				"scopeGroupId", locale -> Field.SCOPE_GROUP_ID),
			new StringEntityField(
				"screenName",
				locale -> Field.getSortableFieldName("screenName")),
			new StringEntityField("teamIds", locale -> "teamIds"),
			new StringEntityField("userGroupIds", locale -> "userGroupIds"),
			new StringEntityField("userId", locale -> Field.USER_ID),
			new StringEntityField("userName", locale -> Field.USER_NAME)
		).collect(
			Collectors.toMap(EntityField::getName, Function.identity())
		);
	}

	@Override
	public Map<String, EntityField> getEntityFieldsMap() {
		return _entityFieldsMap;
	}

	@Override
	public String getName() {
		return NAME;
	}

	private final Map<String, EntityField> _entityFieldsMap;

}