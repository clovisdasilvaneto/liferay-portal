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

import com.liferay.expando.kernel.model.ExpandoColumn;
import com.liferay.expando.kernel.service.ExpandoColumnLocalService;
import com.liferay.petra.string.StringPool;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.language.LanguageUtil;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.util.CamelCaseUtil;
import com.liferay.portal.kernel.util.ResourceBundleUtil;
import com.liferay.portal.kernel.util.StringUtil;
import com.liferay.portal.odata.entity.ComplexEntityField;
import com.liferay.portal.odata.entity.EntityField;
import com.liferay.portal.odata.entity.EntityModel;
import com.liferay.segments.criteria.Field;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.ResourceBundle;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

/**
 * @author Eduardo Garcia
 */
@Component(immediate = true, service = EntityModelFieldMapper.class)
public class EntityModelFieldMapper {

	public List<Field> getFields(EntityModel entityModel, Locale locale) {
		Map<String, EntityField> entityFieldsMap =
			entityModel.getEntityFieldsMap();

		List<Field> fields = new ArrayList();

		entityFieldsMap.forEach(
			(entityFieldName, entityField) -> fields.addAll(
				getFields(entityField, locale)));

		Collections.sort(fields);

		return fields;
	}

	protected List<Field> getFields(EntityField entityField, Locale locale) {
		ResourceBundle resourceBundle = ResourceBundleUtil.getBundle(
			locale, getClass());

		String name = entityField.getName();

		EntityField.Type entityFieldType = entityField.getType();

		if (entityFieldType == EntityField.Type.COMPLEX) {
			Map<String, EntityField> entityFieldsMap =
				((ComplexEntityField)entityField).getEntityFieldsMap();

			return _getComplexFields(name, entityFieldsMap, resourceBundle);
		}

		String label = LanguageUtil.get(
			resourceBundle, CamelCaseUtil.fromCamelCase(name));

		String type = getType(entityField.getType());

		return Collections.singletonList(
			new Field(name, label, type, Collections.emptyList()));
	}

	protected String getType(EntityField.Type entityFieldType) {
		if (entityFieldType == EntityField.Type.BOOLEAN) {
			return "boolean";
		}
		else if (entityFieldType == EntityField.Type.DATE) {
			return "date";
		}
		else if (entityFieldType == EntityField.Type.DOUBLE) {
			return "double";
		}
		else if (entityFieldType == EntityField.Type.INTEGER) {
			return "integer";
		}

		return "string";
	}

	private ExpandoColumn _decodeName(String entityFieldName) {
		String[] split = StringUtil.split(
			entityFieldName, StringPool.UNDERLINE);

		if (split.length < 2) {
			return null;
		}

		long columnId = Long.valueOf(split[1]);

		try {
			return _expandoColumnLocalService.getColumn(columnId);
		}
		catch (PortalException pe) {
			_log.error("Unable to find Expando Column with id " + columnId, pe);

			return null;
		}
	}

	private List<Field> _getComplexFields(
		String name, Map<String, EntityField> entityFieldsMap,
		ResourceBundle resourceBundle) {

		if (!name.equals("customField")) {
			return Collections.emptyList();
		}

		List<Field> complexFields = new ArrayList();

		entityFieldsMap.forEach(
			(entityFieldName, entityField) -> {
				ExpandoColumn expandoColumn = _decodeName(entityFieldName);

				if (expandoColumn == null) {
					return;
				}

				String label = expandoColumn.getDisplayName(
					resourceBundle.getLocale());

				String type = getType(entityField.getType());

				complexFields.add(
					new Field(
						entityFieldName, label, type, Collections.emptyList()));
			});

		return complexFields;
	}

	private static final Log _log = LogFactoryUtil.getLog(
		EntityModelFieldMapper.class);

	@Reference
	private ExpandoColumnLocalService _expandoColumnLocalService;

}