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

package com.liferay.oauth2.provider.model.impl;

import aQute.bnd.annotation.ProviderType;

import com.liferay.expando.kernel.model.ExpandoBridge;
import com.liferay.expando.kernel.util.ExpandoBridgeFactoryUtil;

import com.liferay.oauth2.provider.model.OAuth2Authorization;
import com.liferay.oauth2.provider.model.OAuth2AuthorizationModel;
import com.liferay.oauth2.provider.model.OAuth2AuthorizationSoap;

import com.liferay.portal.kernel.bean.AutoEscapeBeanHandler;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.model.ModelWrapper;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.model.impl.BaseModelImpl;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.service.UserLocalServiceUtil;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.ProxyUtil;
import com.liferay.portal.kernel.util.StringBundler;

import java.io.Serializable;

import java.sql.Types;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * The base model implementation for the OAuth2Authorization service. Represents a row in the &quot;OAuth2Authorization&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This implementation and its corresponding interface {@link OAuth2AuthorizationModel} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link OAuth2AuthorizationImpl}.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see OAuth2AuthorizationImpl
 * @see OAuth2Authorization
 * @see OAuth2AuthorizationModel
 * @generated
 */
@ProviderType
public class OAuth2AuthorizationModelImpl extends BaseModelImpl<OAuth2Authorization>
	implements OAuth2AuthorizationModel {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this class directly. All methods that expect a o auth2 authorization model instance should use the {@link OAuth2Authorization} interface instead.
	 */
	public static final String TABLE_NAME = "OAuth2Authorization";
	public static final Object[][] TABLE_COLUMNS = {
			{ "oAuth2AuthorizationId", Types.BIGINT },
			{ "companyId", Types.BIGINT },
			{ "userId", Types.BIGINT },
			{ "userName", Types.VARCHAR },
			{ "createDate", Types.TIMESTAMP },
			{ "oAuth2ApplicationId", Types.BIGINT },
			{ "oA2AScopeAliasesId", Types.BIGINT },
			{ "accessTokenContent", Types.VARCHAR },
			{ "accessTokenContentHash", Types.BIGINT },
			{ "accessTokenCreateDate", Types.TIMESTAMP },
			{ "accessTokenExpirationDate", Types.TIMESTAMP },
			{ "remoteIPInfo", Types.VARCHAR },
			{ "refreshTokenContent", Types.VARCHAR },
			{ "refreshTokenContentHash", Types.BIGINT },
			{ "refreshTokenCreateDate", Types.TIMESTAMP },
			{ "refreshTokenExpirationDate", Types.TIMESTAMP }
		};
	public static final Map<String, Integer> TABLE_COLUMNS_MAP = new HashMap<String, Integer>();

	static {
		TABLE_COLUMNS_MAP.put("oAuth2AuthorizationId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("companyId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("userId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("userName", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("createDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("oAuth2ApplicationId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("oA2AScopeAliasesId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("accessTokenContent", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("accessTokenContentHash", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("accessTokenCreateDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("accessTokenExpirationDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("remoteIPInfo", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("refreshTokenContent", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("refreshTokenContentHash", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("refreshTokenCreateDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("refreshTokenExpirationDate", Types.TIMESTAMP);
	}

	public static final String TABLE_SQL_CREATE = "create table OAuth2Authorization (oAuth2AuthorizationId LONG not null primary key,companyId LONG,userId LONG,userName VARCHAR(75) null,createDate DATE null,oAuth2ApplicationId LONG,oA2AScopeAliasesId LONG,accessTokenContent VARCHAR(75) null,accessTokenContentHash LONG,accessTokenCreateDate DATE null,accessTokenExpirationDate DATE null,remoteIPInfo VARCHAR(75) null,refreshTokenContent VARCHAR(75) null,refreshTokenContentHash LONG,refreshTokenCreateDate DATE null,refreshTokenExpirationDate DATE null)";
	public static final String TABLE_SQL_DROP = "drop table OAuth2Authorization";
	public static final String ORDER_BY_JPQL = " ORDER BY oAuth2Authorization.oAuth2AuthorizationId ASC";
	public static final String ORDER_BY_SQL = " ORDER BY OAuth2Authorization.oAuth2AuthorizationId ASC";
	public static final String DATA_SOURCE = "liferayDataSource";
	public static final String SESSION_FACTORY = "liferaySessionFactory";
	public static final String TX_MANAGER = "liferayTransactionManager";
	public static final boolean ENTITY_CACHE_ENABLED = GetterUtil.getBoolean(com.liferay.oauth2.provider.service.util.ServiceProps.get(
				"value.object.entity.cache.enabled.com.liferay.oauth2.provider.model.OAuth2Authorization"),
			true);
	public static final boolean FINDER_CACHE_ENABLED = GetterUtil.getBoolean(com.liferay.oauth2.provider.service.util.ServiceProps.get(
				"value.object.finder.cache.enabled.com.liferay.oauth2.provider.model.OAuth2Authorization"),
			true);
	public static final boolean COLUMN_BITMASK_ENABLED = GetterUtil.getBoolean(com.liferay.oauth2.provider.service.util.ServiceProps.get(
				"value.object.column.bitmask.enabled.com.liferay.oauth2.provider.model.OAuth2Authorization"),
			true);
	public static final long ACCESSTOKENCONTENTHASH_COLUMN_BITMASK = 1L;
	public static final long OAUTH2APPLICATIONID_COLUMN_BITMASK = 2L;
	public static final long REFRESHTOKENCONTENTHASH_COLUMN_BITMASK = 4L;
	public static final long USERID_COLUMN_BITMASK = 8L;
	public static final long OAUTH2AUTHORIZATIONID_COLUMN_BITMASK = 16L;

	/**
	 * Converts the soap model instance into a normal model instance.
	 *
	 * @param soapModel the soap model instance to convert
	 * @return the normal model instance
	 */
	public static OAuth2Authorization toModel(OAuth2AuthorizationSoap soapModel) {
		if (soapModel == null) {
			return null;
		}

		OAuth2Authorization model = new OAuth2AuthorizationImpl();

		model.setOAuth2AuthorizationId(soapModel.getOAuth2AuthorizationId());
		model.setCompanyId(soapModel.getCompanyId());
		model.setUserId(soapModel.getUserId());
		model.setUserName(soapModel.getUserName());
		model.setCreateDate(soapModel.getCreateDate());
		model.setOAuth2ApplicationId(soapModel.getOAuth2ApplicationId());
		model.setOAuth2ApplicationScopeAliasesId(soapModel.getOAuth2ApplicationScopeAliasesId());
		model.setAccessTokenContent(soapModel.getAccessTokenContent());
		model.setAccessTokenContentHash(soapModel.getAccessTokenContentHash());
		model.setAccessTokenCreateDate(soapModel.getAccessTokenCreateDate());
		model.setAccessTokenExpirationDate(soapModel.getAccessTokenExpirationDate());
		model.setRemoteIPInfo(soapModel.getRemoteIPInfo());
		model.setRefreshTokenContent(soapModel.getRefreshTokenContent());
		model.setRefreshTokenContentHash(soapModel.getRefreshTokenContentHash());
		model.setRefreshTokenCreateDate(soapModel.getRefreshTokenCreateDate());
		model.setRefreshTokenExpirationDate(soapModel.getRefreshTokenExpirationDate());

		return model;
	}

	/**
	 * Converts the soap model instances into normal model instances.
	 *
	 * @param soapModels the soap model instances to convert
	 * @return the normal model instances
	 */
	public static List<OAuth2Authorization> toModels(
		OAuth2AuthorizationSoap[] soapModels) {
		if (soapModels == null) {
			return null;
		}

		List<OAuth2Authorization> models = new ArrayList<OAuth2Authorization>(soapModels.length);

		for (OAuth2AuthorizationSoap soapModel : soapModels) {
			models.add(toModel(soapModel));
		}

		return models;
	}

	public static final String MAPPING_TABLE_OA2AUTHS_OA2SCOPEGRANTS_NAME = "OA2Auths_OA2ScopeGrants";
	public static final Object[][] MAPPING_TABLE_OA2AUTHS_OA2SCOPEGRANTS_COLUMNS =
		{
			{ "companyId", Types.BIGINT },
			{ "oAuth2AuthorizationId", Types.BIGINT },
			{ "oAuth2ScopeGrantId", Types.BIGINT }
		};
	public static final String MAPPING_TABLE_OA2AUTHS_OA2SCOPEGRANTS_SQL_CREATE = "create table OA2Auths_OA2ScopeGrants (companyId LONG not null,oAuth2AuthorizationId LONG not null,oAuth2ScopeGrantId LONG not null,primary key (oAuth2AuthorizationId, oAuth2ScopeGrantId))";
	public static final boolean FINDER_CACHE_ENABLED_OA2AUTHS_OA2SCOPEGRANTS = GetterUtil.getBoolean(com.liferay.oauth2.provider.service.util.ServiceProps.get(
				"value.object.finder.cache.enabled.OA2Auths_OA2ScopeGrants"),
			true);
	public static final long LOCK_EXPIRATION_TIME = GetterUtil.getLong(com.liferay.oauth2.provider.service.util.ServiceProps.get(
				"lock.expiration.time.com.liferay.oauth2.provider.model.OAuth2Authorization"));

	public OAuth2AuthorizationModelImpl() {
	}

	@Override
	public long getPrimaryKey() {
		return _oAuth2AuthorizationId;
	}

	@Override
	public void setPrimaryKey(long primaryKey) {
		setOAuth2AuthorizationId(primaryKey);
	}

	@Override
	public Serializable getPrimaryKeyObj() {
		return _oAuth2AuthorizationId;
	}

	@Override
	public void setPrimaryKeyObj(Serializable primaryKeyObj) {
		setPrimaryKey(((Long)primaryKeyObj).longValue());
	}

	@Override
	public Class<?> getModelClass() {
		return OAuth2Authorization.class;
	}

	@Override
	public String getModelClassName() {
		return OAuth2Authorization.class.getName();
	}

	@Override
	public Map<String, Object> getModelAttributes() {
		Map<String, Object> attributes = new HashMap<String, Object>();

		attributes.put("oAuth2AuthorizationId", getOAuth2AuthorizationId());
		attributes.put("companyId", getCompanyId());
		attributes.put("userId", getUserId());
		attributes.put("userName", getUserName());
		attributes.put("createDate", getCreateDate());
		attributes.put("oAuth2ApplicationId", getOAuth2ApplicationId());
		attributes.put("oAuth2ApplicationScopeAliasesId",
			getOAuth2ApplicationScopeAliasesId());
		attributes.put("accessTokenContent", getAccessTokenContent());
		attributes.put("accessTokenContentHash", getAccessTokenContentHash());
		attributes.put("accessTokenCreateDate", getAccessTokenCreateDate());
		attributes.put("accessTokenExpirationDate",
			getAccessTokenExpirationDate());
		attributes.put("remoteIPInfo", getRemoteIPInfo());
		attributes.put("refreshTokenContent", getRefreshTokenContent());
		attributes.put("refreshTokenContentHash", getRefreshTokenContentHash());
		attributes.put("refreshTokenCreateDate", getRefreshTokenCreateDate());
		attributes.put("refreshTokenExpirationDate",
			getRefreshTokenExpirationDate());

		attributes.put("entityCacheEnabled", isEntityCacheEnabled());
		attributes.put("finderCacheEnabled", isFinderCacheEnabled());

		return attributes;
	}

	@Override
	public void setModelAttributes(Map<String, Object> attributes) {
		Long oAuth2AuthorizationId = (Long)attributes.get(
				"oAuth2AuthorizationId");

		if (oAuth2AuthorizationId != null) {
			setOAuth2AuthorizationId(oAuth2AuthorizationId);
		}

		Long companyId = (Long)attributes.get("companyId");

		if (companyId != null) {
			setCompanyId(companyId);
		}

		Long userId = (Long)attributes.get("userId");

		if (userId != null) {
			setUserId(userId);
		}

		String userName = (String)attributes.get("userName");

		if (userName != null) {
			setUserName(userName);
		}

		Date createDate = (Date)attributes.get("createDate");

		if (createDate != null) {
			setCreateDate(createDate);
		}

		Long oAuth2ApplicationId = (Long)attributes.get("oAuth2ApplicationId");

		if (oAuth2ApplicationId != null) {
			setOAuth2ApplicationId(oAuth2ApplicationId);
		}

		Long oAuth2ApplicationScopeAliasesId = (Long)attributes.get(
				"oAuth2ApplicationScopeAliasesId");

		if (oAuth2ApplicationScopeAliasesId != null) {
			setOAuth2ApplicationScopeAliasesId(oAuth2ApplicationScopeAliasesId);
		}

		String accessTokenContent = (String)attributes.get("accessTokenContent");

		if (accessTokenContent != null) {
			setAccessTokenContent(accessTokenContent);
		}

		Long accessTokenContentHash = (Long)attributes.get(
				"accessTokenContentHash");

		if (accessTokenContentHash != null) {
			setAccessTokenContentHash(accessTokenContentHash);
		}

		Date accessTokenCreateDate = (Date)attributes.get(
				"accessTokenCreateDate");

		if (accessTokenCreateDate != null) {
			setAccessTokenCreateDate(accessTokenCreateDate);
		}

		Date accessTokenExpirationDate = (Date)attributes.get(
				"accessTokenExpirationDate");

		if (accessTokenExpirationDate != null) {
			setAccessTokenExpirationDate(accessTokenExpirationDate);
		}

		String remoteIPInfo = (String)attributes.get("remoteIPInfo");

		if (remoteIPInfo != null) {
			setRemoteIPInfo(remoteIPInfo);
		}

		String refreshTokenContent = (String)attributes.get(
				"refreshTokenContent");

		if (refreshTokenContent != null) {
			setRefreshTokenContent(refreshTokenContent);
		}

		Long refreshTokenContentHash = (Long)attributes.get(
				"refreshTokenContentHash");

		if (refreshTokenContentHash != null) {
			setRefreshTokenContentHash(refreshTokenContentHash);
		}

		Date refreshTokenCreateDate = (Date)attributes.get(
				"refreshTokenCreateDate");

		if (refreshTokenCreateDate != null) {
			setRefreshTokenCreateDate(refreshTokenCreateDate);
		}

		Date refreshTokenExpirationDate = (Date)attributes.get(
				"refreshTokenExpirationDate");

		if (refreshTokenExpirationDate != null) {
			setRefreshTokenExpirationDate(refreshTokenExpirationDate);
		}
	}

	@Override
	public long getOAuth2AuthorizationId() {
		return _oAuth2AuthorizationId;
	}

	@Override
	public void setOAuth2AuthorizationId(long oAuth2AuthorizationId) {
		_oAuth2AuthorizationId = oAuth2AuthorizationId;
	}

	@Override
	public long getCompanyId() {
		return _companyId;
	}

	@Override
	public void setCompanyId(long companyId) {
		_companyId = companyId;
	}

	@Override
	public long getUserId() {
		return _userId;
	}

	@Override
	public void setUserId(long userId) {
		_columnBitmask |= USERID_COLUMN_BITMASK;

		if (!_setOriginalUserId) {
			_setOriginalUserId = true;

			_originalUserId = _userId;
		}

		_userId = userId;
	}

	@Override
	public String getUserUuid() {
		try {
			User user = UserLocalServiceUtil.getUserById(getUserId());

			return user.getUuid();
		}
		catch (PortalException pe) {
			return "";
		}
	}

	@Override
	public void setUserUuid(String userUuid) {
	}

	public long getOriginalUserId() {
		return _originalUserId;
	}

	@Override
	public String getUserName() {
		if (_userName == null) {
			return "";
		}
		else {
			return _userName;
		}
	}

	@Override
	public void setUserName(String userName) {
		_userName = userName;
	}

	@Override
	public Date getCreateDate() {
		return _createDate;
	}

	@Override
	public void setCreateDate(Date createDate) {
		_createDate = createDate;
	}

	@Override
	public long getOAuth2ApplicationId() {
		return _oAuth2ApplicationId;
	}

	@Override
	public void setOAuth2ApplicationId(long oAuth2ApplicationId) {
		_columnBitmask |= OAUTH2APPLICATIONID_COLUMN_BITMASK;

		if (!_setOriginalOAuth2ApplicationId) {
			_setOriginalOAuth2ApplicationId = true;

			_originalOAuth2ApplicationId = _oAuth2ApplicationId;
		}

		_oAuth2ApplicationId = oAuth2ApplicationId;
	}

	public long getOriginalOAuth2ApplicationId() {
		return _originalOAuth2ApplicationId;
	}

	@Override
	public long getOAuth2ApplicationScopeAliasesId() {
		return _oAuth2ApplicationScopeAliasesId;
	}

	@Override
	public void setOAuth2ApplicationScopeAliasesId(
		long oAuth2ApplicationScopeAliasesId) {
		_oAuth2ApplicationScopeAliasesId = oAuth2ApplicationScopeAliasesId;
	}

	@Override
	public String getAccessTokenContent() {
		if (_accessTokenContent == null) {
			return "";
		}
		else {
			return _accessTokenContent;
		}
	}

	@Override
	public void setAccessTokenContent(String accessTokenContent) {
		_accessTokenContent = accessTokenContent;
	}

	@Override
	public long getAccessTokenContentHash() {
		return _accessTokenContentHash;
	}

	@Override
	public void setAccessTokenContentHash(long accessTokenContentHash) {
		_columnBitmask |= ACCESSTOKENCONTENTHASH_COLUMN_BITMASK;

		if (!_setOriginalAccessTokenContentHash) {
			_setOriginalAccessTokenContentHash = true;

			_originalAccessTokenContentHash = _accessTokenContentHash;
		}

		_accessTokenContentHash = accessTokenContentHash;
	}

	public long getOriginalAccessTokenContentHash() {
		return _originalAccessTokenContentHash;
	}

	@Override
	public Date getAccessTokenCreateDate() {
		return _accessTokenCreateDate;
	}

	@Override
	public void setAccessTokenCreateDate(Date accessTokenCreateDate) {
		_accessTokenCreateDate = accessTokenCreateDate;
	}

	@Override
	public Date getAccessTokenExpirationDate() {
		return _accessTokenExpirationDate;
	}

	@Override
	public void setAccessTokenExpirationDate(Date accessTokenExpirationDate) {
		_accessTokenExpirationDate = accessTokenExpirationDate;
	}

	@Override
	public String getRemoteIPInfo() {
		if (_remoteIPInfo == null) {
			return "";
		}
		else {
			return _remoteIPInfo;
		}
	}

	@Override
	public void setRemoteIPInfo(String remoteIPInfo) {
		_remoteIPInfo = remoteIPInfo;
	}

	@Override
	public String getRefreshTokenContent() {
		if (_refreshTokenContent == null) {
			return "";
		}
		else {
			return _refreshTokenContent;
		}
	}

	@Override
	public void setRefreshTokenContent(String refreshTokenContent) {
		_refreshTokenContent = refreshTokenContent;
	}

	@Override
	public long getRefreshTokenContentHash() {
		return _refreshTokenContentHash;
	}

	@Override
	public void setRefreshTokenContentHash(long refreshTokenContentHash) {
		_columnBitmask |= REFRESHTOKENCONTENTHASH_COLUMN_BITMASK;

		if (!_setOriginalRefreshTokenContentHash) {
			_setOriginalRefreshTokenContentHash = true;

			_originalRefreshTokenContentHash = _refreshTokenContentHash;
		}

		_refreshTokenContentHash = refreshTokenContentHash;
	}

	public long getOriginalRefreshTokenContentHash() {
		return _originalRefreshTokenContentHash;
	}

	@Override
	public Date getRefreshTokenCreateDate() {
		return _refreshTokenCreateDate;
	}

	@Override
	public void setRefreshTokenCreateDate(Date refreshTokenCreateDate) {
		_refreshTokenCreateDate = refreshTokenCreateDate;
	}

	@Override
	public Date getRefreshTokenExpirationDate() {
		return _refreshTokenExpirationDate;
	}

	@Override
	public void setRefreshTokenExpirationDate(Date refreshTokenExpirationDate) {
		_refreshTokenExpirationDate = refreshTokenExpirationDate;
	}

	public long getColumnBitmask() {
		return _columnBitmask;
	}

	@Override
	public ExpandoBridge getExpandoBridge() {
		return ExpandoBridgeFactoryUtil.getExpandoBridge(getCompanyId(),
			OAuth2Authorization.class.getName(), getPrimaryKey());
	}

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext) {
		ExpandoBridge expandoBridge = getExpandoBridge();

		expandoBridge.setAttributes(serviceContext);
	}

	@Override
	public OAuth2Authorization toEscapedModel() {
		if (_escapedModel == null) {
			_escapedModel = (OAuth2Authorization)ProxyUtil.newProxyInstance(_classLoader,
					_escapedModelInterfaces, new AutoEscapeBeanHandler(this));
		}

		return _escapedModel;
	}

	@Override
	public Object clone() {
		OAuth2AuthorizationImpl oAuth2AuthorizationImpl = new OAuth2AuthorizationImpl();

		oAuth2AuthorizationImpl.setOAuth2AuthorizationId(getOAuth2AuthorizationId());
		oAuth2AuthorizationImpl.setCompanyId(getCompanyId());
		oAuth2AuthorizationImpl.setUserId(getUserId());
		oAuth2AuthorizationImpl.setUserName(getUserName());
		oAuth2AuthorizationImpl.setCreateDate(getCreateDate());
		oAuth2AuthorizationImpl.setOAuth2ApplicationId(getOAuth2ApplicationId());
		oAuth2AuthorizationImpl.setOAuth2ApplicationScopeAliasesId(getOAuth2ApplicationScopeAliasesId());
		oAuth2AuthorizationImpl.setAccessTokenContent(getAccessTokenContent());
		oAuth2AuthorizationImpl.setAccessTokenContentHash(getAccessTokenContentHash());
		oAuth2AuthorizationImpl.setAccessTokenCreateDate(getAccessTokenCreateDate());
		oAuth2AuthorizationImpl.setAccessTokenExpirationDate(getAccessTokenExpirationDate());
		oAuth2AuthorizationImpl.setRemoteIPInfo(getRemoteIPInfo());
		oAuth2AuthorizationImpl.setRefreshTokenContent(getRefreshTokenContent());
		oAuth2AuthorizationImpl.setRefreshTokenContentHash(getRefreshTokenContentHash());
		oAuth2AuthorizationImpl.setRefreshTokenCreateDate(getRefreshTokenCreateDate());
		oAuth2AuthorizationImpl.setRefreshTokenExpirationDate(getRefreshTokenExpirationDate());

		oAuth2AuthorizationImpl.resetOriginalValues();

		return oAuth2AuthorizationImpl;
	}

	@Override
	public int compareTo(OAuth2Authorization oAuth2Authorization) {
		long primaryKey = oAuth2Authorization.getPrimaryKey();

		if (getPrimaryKey() < primaryKey) {
			return -1;
		}
		else if (getPrimaryKey() > primaryKey) {
			return 1;
		}
		else {
			return 0;
		}
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}

		if (!(obj instanceof OAuth2Authorization)) {
			return false;
		}

		OAuth2Authorization oAuth2Authorization = (OAuth2Authorization)obj;

		long primaryKey = oAuth2Authorization.getPrimaryKey();

		if (getPrimaryKey() == primaryKey) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public int hashCode() {
		return (int)getPrimaryKey();
	}

	@Override
	public boolean isEntityCacheEnabled() {
		return ENTITY_CACHE_ENABLED;
	}

	@Override
	public boolean isFinderCacheEnabled() {
		return FINDER_CACHE_ENABLED;
	}

	@Override
	public void resetOriginalValues() {
		OAuth2AuthorizationModelImpl oAuth2AuthorizationModelImpl = this;

		oAuth2AuthorizationModelImpl._originalUserId = oAuth2AuthorizationModelImpl._userId;

		oAuth2AuthorizationModelImpl._setOriginalUserId = false;

		oAuth2AuthorizationModelImpl._originalOAuth2ApplicationId = oAuth2AuthorizationModelImpl._oAuth2ApplicationId;

		oAuth2AuthorizationModelImpl._setOriginalOAuth2ApplicationId = false;

		oAuth2AuthorizationModelImpl._originalAccessTokenContentHash = oAuth2AuthorizationModelImpl._accessTokenContentHash;

		oAuth2AuthorizationModelImpl._setOriginalAccessTokenContentHash = false;

		oAuth2AuthorizationModelImpl._originalRefreshTokenContentHash = oAuth2AuthorizationModelImpl._refreshTokenContentHash;

		oAuth2AuthorizationModelImpl._setOriginalRefreshTokenContentHash = false;

		oAuth2AuthorizationModelImpl._columnBitmask = 0;
	}

	@Override
	public CacheModel<OAuth2Authorization> toCacheModel() {
		OAuth2AuthorizationCacheModel oAuth2AuthorizationCacheModel = new OAuth2AuthorizationCacheModel();

		oAuth2AuthorizationCacheModel.oAuth2AuthorizationId = getOAuth2AuthorizationId();

		oAuth2AuthorizationCacheModel.companyId = getCompanyId();

		oAuth2AuthorizationCacheModel.userId = getUserId();

		oAuth2AuthorizationCacheModel.userName = getUserName();

		String userName = oAuth2AuthorizationCacheModel.userName;

		if ((userName != null) && (userName.length() == 0)) {
			oAuth2AuthorizationCacheModel.userName = null;
		}

		Date createDate = getCreateDate();

		if (createDate != null) {
			oAuth2AuthorizationCacheModel.createDate = createDate.getTime();
		}
		else {
			oAuth2AuthorizationCacheModel.createDate = Long.MIN_VALUE;
		}

		oAuth2AuthorizationCacheModel.oAuth2ApplicationId = getOAuth2ApplicationId();

		oAuth2AuthorizationCacheModel.oAuth2ApplicationScopeAliasesId = getOAuth2ApplicationScopeAliasesId();

		oAuth2AuthorizationCacheModel.accessTokenContent = getAccessTokenContent();

		String accessTokenContent = oAuth2AuthorizationCacheModel.accessTokenContent;

		if ((accessTokenContent != null) && (accessTokenContent.length() == 0)) {
			oAuth2AuthorizationCacheModel.accessTokenContent = null;
		}

		oAuth2AuthorizationCacheModel.accessTokenContentHash = getAccessTokenContentHash();

		Date accessTokenCreateDate = getAccessTokenCreateDate();

		if (accessTokenCreateDate != null) {
			oAuth2AuthorizationCacheModel.accessTokenCreateDate = accessTokenCreateDate.getTime();
		}
		else {
			oAuth2AuthorizationCacheModel.accessTokenCreateDate = Long.MIN_VALUE;
		}

		Date accessTokenExpirationDate = getAccessTokenExpirationDate();

		if (accessTokenExpirationDate != null) {
			oAuth2AuthorizationCacheModel.accessTokenExpirationDate = accessTokenExpirationDate.getTime();
		}
		else {
			oAuth2AuthorizationCacheModel.accessTokenExpirationDate = Long.MIN_VALUE;
		}

		oAuth2AuthorizationCacheModel.remoteIPInfo = getRemoteIPInfo();

		String remoteIPInfo = oAuth2AuthorizationCacheModel.remoteIPInfo;

		if ((remoteIPInfo != null) && (remoteIPInfo.length() == 0)) {
			oAuth2AuthorizationCacheModel.remoteIPInfo = null;
		}

		oAuth2AuthorizationCacheModel.refreshTokenContent = getRefreshTokenContent();

		String refreshTokenContent = oAuth2AuthorizationCacheModel.refreshTokenContent;

		if ((refreshTokenContent != null) &&
				(refreshTokenContent.length() == 0)) {
			oAuth2AuthorizationCacheModel.refreshTokenContent = null;
		}

		oAuth2AuthorizationCacheModel.refreshTokenContentHash = getRefreshTokenContentHash();

		Date refreshTokenCreateDate = getRefreshTokenCreateDate();

		if (refreshTokenCreateDate != null) {
			oAuth2AuthorizationCacheModel.refreshTokenCreateDate = refreshTokenCreateDate.getTime();
		}
		else {
			oAuth2AuthorizationCacheModel.refreshTokenCreateDate = Long.MIN_VALUE;
		}

		Date refreshTokenExpirationDate = getRefreshTokenExpirationDate();

		if (refreshTokenExpirationDate != null) {
			oAuth2AuthorizationCacheModel.refreshTokenExpirationDate = refreshTokenExpirationDate.getTime();
		}
		else {
			oAuth2AuthorizationCacheModel.refreshTokenExpirationDate = Long.MIN_VALUE;
		}

		return oAuth2AuthorizationCacheModel;
	}

	@Override
	public String toString() {
		StringBundler sb = new StringBundler(33);

		sb.append("{oAuth2AuthorizationId=");
		sb.append(getOAuth2AuthorizationId());
		sb.append(", companyId=");
		sb.append(getCompanyId());
		sb.append(", userId=");
		sb.append(getUserId());
		sb.append(", userName=");
		sb.append(getUserName());
		sb.append(", createDate=");
		sb.append(getCreateDate());
		sb.append(", oAuth2ApplicationId=");
		sb.append(getOAuth2ApplicationId());
		sb.append(", oAuth2ApplicationScopeAliasesId=");
		sb.append(getOAuth2ApplicationScopeAliasesId());
		sb.append(", accessTokenContent=");
		sb.append(getAccessTokenContent());
		sb.append(", accessTokenContentHash=");
		sb.append(getAccessTokenContentHash());
		sb.append(", accessTokenCreateDate=");
		sb.append(getAccessTokenCreateDate());
		sb.append(", accessTokenExpirationDate=");
		sb.append(getAccessTokenExpirationDate());
		sb.append(", remoteIPInfo=");
		sb.append(getRemoteIPInfo());
		sb.append(", refreshTokenContent=");
		sb.append(getRefreshTokenContent());
		sb.append(", refreshTokenContentHash=");
		sb.append(getRefreshTokenContentHash());
		sb.append(", refreshTokenCreateDate=");
		sb.append(getRefreshTokenCreateDate());
		sb.append(", refreshTokenExpirationDate=");
		sb.append(getRefreshTokenExpirationDate());
		sb.append("}");

		return sb.toString();
	}

	@Override
	public String toXmlString() {
		StringBundler sb = new StringBundler(52);

		sb.append("<model><model-name>");
		sb.append("com.liferay.oauth2.provider.model.OAuth2Authorization");
		sb.append("</model-name>");

		sb.append(
			"<column><column-name>oAuth2AuthorizationId</column-name><column-value><![CDATA[");
		sb.append(getOAuth2AuthorizationId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>companyId</column-name><column-value><![CDATA[");
		sb.append(getCompanyId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>userId</column-name><column-value><![CDATA[");
		sb.append(getUserId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>userName</column-name><column-value><![CDATA[");
		sb.append(getUserName());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>createDate</column-name><column-value><![CDATA[");
		sb.append(getCreateDate());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>oAuth2ApplicationId</column-name><column-value><![CDATA[");
		sb.append(getOAuth2ApplicationId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>oAuth2ApplicationScopeAliasesId</column-name><column-value><![CDATA[");
		sb.append(getOAuth2ApplicationScopeAliasesId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>accessTokenContent</column-name><column-value><![CDATA[");
		sb.append(getAccessTokenContent());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>accessTokenContentHash</column-name><column-value><![CDATA[");
		sb.append(getAccessTokenContentHash());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>accessTokenCreateDate</column-name><column-value><![CDATA[");
		sb.append(getAccessTokenCreateDate());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>accessTokenExpirationDate</column-name><column-value><![CDATA[");
		sb.append(getAccessTokenExpirationDate());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>remoteIPInfo</column-name><column-value><![CDATA[");
		sb.append(getRemoteIPInfo());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>refreshTokenContent</column-name><column-value><![CDATA[");
		sb.append(getRefreshTokenContent());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>refreshTokenContentHash</column-name><column-value><![CDATA[");
		sb.append(getRefreshTokenContentHash());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>refreshTokenCreateDate</column-name><column-value><![CDATA[");
		sb.append(getRefreshTokenCreateDate());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>refreshTokenExpirationDate</column-name><column-value><![CDATA[");
		sb.append(getRefreshTokenExpirationDate());
		sb.append("]]></column-value></column>");

		sb.append("</model>");

		return sb.toString();
	}

	private static final ClassLoader _classLoader = OAuth2Authorization.class.getClassLoader();
	private static final Class<?>[] _escapedModelInterfaces = new Class[] {
			OAuth2Authorization.class, ModelWrapper.class
		};
	private long _oAuth2AuthorizationId;
	private long _companyId;
	private long _userId;
	private long _originalUserId;
	private boolean _setOriginalUserId;
	private String _userName;
	private Date _createDate;
	private long _oAuth2ApplicationId;
	private long _originalOAuth2ApplicationId;
	private boolean _setOriginalOAuth2ApplicationId;
	private long _oAuth2ApplicationScopeAliasesId;
	private String _accessTokenContent;
	private long _accessTokenContentHash;
	private long _originalAccessTokenContentHash;
	private boolean _setOriginalAccessTokenContentHash;
	private Date _accessTokenCreateDate;
	private Date _accessTokenExpirationDate;
	private String _remoteIPInfo;
	private String _refreshTokenContent;
	private long _refreshTokenContentHash;
	private long _originalRefreshTokenContentHash;
	private boolean _setOriginalRefreshTokenContentHash;
	private Date _refreshTokenCreateDate;
	private Date _refreshTokenExpirationDate;
	private long _columnBitmask;
	private OAuth2Authorization _escapedModel;
}