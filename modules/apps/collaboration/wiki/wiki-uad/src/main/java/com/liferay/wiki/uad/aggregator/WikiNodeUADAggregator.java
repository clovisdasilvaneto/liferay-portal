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

package com.liferay.wiki.uad.aggregator;

import com.liferay.portal.kernel.dao.orm.DynamicQuery;
import com.liferay.portal.kernel.exception.PortalException;

import com.liferay.user.associated.data.aggregator.DynamicQueryUADAggregator;
import com.liferay.user.associated.data.aggregator.UADAggregator;

import com.liferay.wiki.model.WikiNode;
import com.liferay.wiki.service.WikiNodeLocalService;
import com.liferay.wiki.uad.constants.WikiUADConstants;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import java.io.Serializable;

import java.util.List;

/**
 * @author Brian Wing Shun Chan
 * @generated
 */
@Component(immediate = true, property =  {
	"model.class.name=" + WikiUADConstants.CLASS_NAME_WIKI_NODE}, service = UADAggregator.class)
public class WikiNodeUADAggregator extends DynamicQueryUADAggregator<WikiNode> {
	@Override
	public String getApplicationName() {
		return WikiUADConstants.APPLICATION_NAME;
	}

	@Override
	public WikiNode get(Serializable primaryKey) throws PortalException {
		return _wikiNodeLocalService.getWikiNode(Long.valueOf(
				primaryKey.toString()));
	}

	@Override
	protected long doCount(DynamicQuery dynamicQuery) {
		return _wikiNodeLocalService.dynamicQueryCount(dynamicQuery);
	}

	@Override
	protected DynamicQuery doGetDynamicQuery() {
		return _wikiNodeLocalService.dynamicQuery();
	}

	@Override
	protected List<WikiNode> doGetRange(DynamicQuery dynamicQuery, int start,
		int end) {
		return _wikiNodeLocalService.dynamicQuery(dynamicQuery, start, end);
	}

	@Override
	protected String[] doGetUserIdFieldNames() {
		return WikiUADConstants.USER_ID_FIELD_NAMES_WIKI_NODE;
	}

	@Reference
	private WikiNodeLocalService _wikiNodeLocalService;
}