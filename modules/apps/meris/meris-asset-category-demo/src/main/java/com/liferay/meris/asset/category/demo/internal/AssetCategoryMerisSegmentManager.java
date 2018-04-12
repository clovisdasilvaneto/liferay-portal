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

package com.liferay.meris.asset.category.demo.internal;

import com.liferay.asset.kernel.model.AssetCategory;
import com.liferay.asset.kernel.model.AssetEntry;
import com.liferay.asset.kernel.model.AssetVocabulary;
import com.liferay.asset.kernel.service.AssetCategoryLocalService;
import com.liferay.asset.kernel.service.AssetEntryLocalService;
import com.liferay.asset.kernel.service.AssetVocabularyLocalService;
import com.liferay.meris.MerisSegmentManager;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.model.User;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

/**
 * @author Eduardo Garcia
 */
@Component(immediate = true, service = MerisSegmentManager.class)
public class AssetCategoryMerisSegmentManager
	implements MerisSegmentManager<AssetCategoryMerisSegment> {

	@Override
	public Collection<AssetCategoryMerisSegment> getMerisSegments(
		long groupId) {

		try {
			AssetVocabulary assetVocabulary =
				_assetVocabularyLocalService.getGroupVocabulary(
					groupId, _ASSET_VOCABULARY_NAME);

			List<AssetCategory> assetCategories =
				assetVocabulary.getCategories();

			Stream<AssetCategory> stream = assetCategories.stream();

			return stream.map(
				assetCategory -> new AssetCategoryMerisSegment(assetCategory)
			).collect(
				Collectors.toList()
			);
		}
		catch (PortalException pe) {
			_log.error(
				String.format(
					"Asset vocabulary %s not found in group %s",
					_ASSET_VOCABULARY_NAME, groupId),
				pe);

			return Collections.emptyList();
		}
	}

	@Override
	public boolean matches(
		long userId, AssetCategoryMerisSegment assetCategoryMerisSegment,
		Map<String, Object> context) {

		AssetEntry assetEntry = _assetEntryLocalService.fetchEntry(
			User.class.getName(), userId);

		if (assetEntry == null) {
			return false;
		}

		return _assetCategoryLocalService.hasAssetEntryAssetCategory(
			assetEntry.getEntryId(),
			assetCategoryMerisSegment.getAssetCategoryId());
	}

	private static final String _ASSET_VOCABULARY_NAME = "Segments";

	private static final Log _log = LogFactoryUtil.getLog(
		AssetCategoryMerisSegmentManager.class);

	@Reference
	private AssetCategoryLocalService _assetCategoryLocalService;

	@Reference
	private AssetEntryLocalService _assetEntryLocalService;

	@Reference
	private AssetVocabularyLocalService _assetVocabularyLocalService;

}