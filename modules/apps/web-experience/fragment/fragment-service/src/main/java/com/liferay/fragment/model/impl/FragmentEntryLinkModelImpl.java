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

package com.liferay.fragment.model.impl;

import aQute.bnd.annotation.ProviderType;

import com.liferay.expando.kernel.model.ExpandoBridge;
import com.liferay.expando.kernel.util.ExpandoBridgeFactoryUtil;

import com.liferay.fragment.model.FragmentEntryLink;
import com.liferay.fragment.model.FragmentEntryLinkModel;

import com.liferay.portal.kernel.bean.AutoEscapeBeanHandler;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.model.impl.BaseModelImpl;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.kernel.util.ProxyUtil;
import com.liferay.portal.kernel.util.StringBundler;
import com.liferay.portal.kernel.util.Validator;

import java.io.Serializable;

import java.sql.Types;

import java.util.HashMap;
import java.util.Map;

/**
 * The base model implementation for the FragmentEntryLink service. Represents a row in the &quot;FragmentEntryLink&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This implementation and its corresponding interface {@link FragmentEntryLinkModel} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link FragmentEntryLinkImpl}.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see FragmentEntryLinkImpl
 * @see FragmentEntryLink
 * @see FragmentEntryLinkModel
 * @generated
 */
@ProviderType
public class FragmentEntryLinkModelImpl extends BaseModelImpl<FragmentEntryLink>
	implements FragmentEntryLinkModel {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this class directly. All methods that expect a fragment entry link model instance should use the {@link FragmentEntryLink} interface instead.
	 */
	public static final String TABLE_NAME = "FragmentEntryLink";
	public static final Object[][] TABLE_COLUMNS = {
			{ "fragmentEntryLinkId", Types.BIGINT },
			{ "groupId", Types.BIGINT },
			{ "originalFragmentEntryLinkId", Types.BIGINT },
			{ "fragmentEntryId", Types.BIGINT },
			{ "classNameId", Types.BIGINT },
			{ "classPK", Types.BIGINT },
			{ "css", Types.VARCHAR },
			{ "html", Types.VARCHAR },
			{ "js", Types.VARCHAR },
			{ "editableValues", Types.VARCHAR },
			{ "position", Types.INTEGER }
		};
	public static final Map<String, Integer> TABLE_COLUMNS_MAP = new HashMap<String, Integer>();

	static {
		TABLE_COLUMNS_MAP.put("fragmentEntryLinkId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("groupId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("originalFragmentEntryLinkId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("fragmentEntryId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("classNameId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("classPK", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("css", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("html", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("js", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("editableValues", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("position", Types.INTEGER);
	}

	public static final String TABLE_SQL_CREATE = "create table FragmentEntryLink (fragmentEntryLinkId LONG not null primary key,groupId LONG,originalFragmentEntryLinkId LONG,fragmentEntryId LONG,classNameId LONG,classPK LONG,css STRING null,html STRING null,js STRING null,editableValues STRING null,position INTEGER)";
	public static final String TABLE_SQL_DROP = "drop table FragmentEntryLink";
	public static final String ORDER_BY_JPQL = " ORDER BY fragmentEntryLink.classNameId ASC, fragmentEntryLink.classPK ASC, fragmentEntryLink.position ASC";
	public static final String ORDER_BY_SQL = " ORDER BY FragmentEntryLink.classNameId ASC, FragmentEntryLink.classPK ASC, FragmentEntryLink.position ASC";
	public static final String DATA_SOURCE = "liferayDataSource";
	public static final String SESSION_FACTORY = "liferaySessionFactory";
	public static final String TX_MANAGER = "liferayTransactionManager";
	public static final boolean ENTITY_CACHE_ENABLED = GetterUtil.getBoolean(com.liferay.fragment.service.util.ServiceProps.get(
				"value.object.entity.cache.enabled.com.liferay.fragment.model.FragmentEntryLink"),
			true);
	public static final boolean FINDER_CACHE_ENABLED = GetterUtil.getBoolean(com.liferay.fragment.service.util.ServiceProps.get(
				"value.object.finder.cache.enabled.com.liferay.fragment.model.FragmentEntryLink"),
			true);
	public static final boolean COLUMN_BITMASK_ENABLED = GetterUtil.getBoolean(com.liferay.fragment.service.util.ServiceProps.get(
				"value.object.column.bitmask.enabled.com.liferay.fragment.model.FragmentEntryLink"),
			true);
	public static final long CLASSNAMEID_COLUMN_BITMASK = 1L;
	public static final long CLASSPK_COLUMN_BITMASK = 2L;
	public static final long FRAGMENTENTRYID_COLUMN_BITMASK = 4L;
	public static final long GROUPID_COLUMN_BITMASK = 8L;
	public static final long POSITION_COLUMN_BITMASK = 16L;
	public static final long LOCK_EXPIRATION_TIME = GetterUtil.getLong(com.liferay.fragment.service.util.ServiceProps.get(
				"lock.expiration.time.com.liferay.fragment.model.FragmentEntryLink"));

	public FragmentEntryLinkModelImpl() {
	}

	@Override
	public long getPrimaryKey() {
		return _fragmentEntryLinkId;
	}

	@Override
	public void setPrimaryKey(long primaryKey) {
		setFragmentEntryLinkId(primaryKey);
	}

	@Override
	public Serializable getPrimaryKeyObj() {
		return _fragmentEntryLinkId;
	}

	@Override
	public void setPrimaryKeyObj(Serializable primaryKeyObj) {
		setPrimaryKey(((Long)primaryKeyObj).longValue());
	}

	@Override
	public Class<?> getModelClass() {
		return FragmentEntryLink.class;
	}

	@Override
	public String getModelClassName() {
		return FragmentEntryLink.class.getName();
	}

	@Override
	public Map<String, Object> getModelAttributes() {
		Map<String, Object> attributes = new HashMap<String, Object>();

		attributes.put("fragmentEntryLinkId", getFragmentEntryLinkId());
		attributes.put("groupId", getGroupId());
		attributes.put("originalFragmentEntryLinkId",
			getOriginalFragmentEntryLinkId());
		attributes.put("fragmentEntryId", getFragmentEntryId());
		attributes.put("classNameId", getClassNameId());
		attributes.put("classPK", getClassPK());
		attributes.put("css", getCss());
		attributes.put("html", getHtml());
		attributes.put("js", getJs());
		attributes.put("editableValues", getEditableValues());
		attributes.put("position", getPosition());

		attributes.put("entityCacheEnabled", isEntityCacheEnabled());
		attributes.put("finderCacheEnabled", isFinderCacheEnabled());

		return attributes;
	}

	@Override
	public void setModelAttributes(Map<String, Object> attributes) {
		Long fragmentEntryLinkId = (Long)attributes.get("fragmentEntryLinkId");

		if (fragmentEntryLinkId != null) {
			setFragmentEntryLinkId(fragmentEntryLinkId);
		}

		Long groupId = (Long)attributes.get("groupId");

		if (groupId != null) {
			setGroupId(groupId);
		}

		Long originalFragmentEntryLinkId = (Long)attributes.get(
				"originalFragmentEntryLinkId");

		if (originalFragmentEntryLinkId != null) {
			setOriginalFragmentEntryLinkId(originalFragmentEntryLinkId);
		}

		Long fragmentEntryId = (Long)attributes.get("fragmentEntryId");

		if (fragmentEntryId != null) {
			setFragmentEntryId(fragmentEntryId);
		}

		Long classNameId = (Long)attributes.get("classNameId");

		if (classNameId != null) {
			setClassNameId(classNameId);
		}

		Long classPK = (Long)attributes.get("classPK");

		if (classPK != null) {
			setClassPK(classPK);
		}

		String css = (String)attributes.get("css");

		if (css != null) {
			setCss(css);
		}

		String html = (String)attributes.get("html");

		if (html != null) {
			setHtml(html);
		}

		String js = (String)attributes.get("js");

		if (js != null) {
			setJs(js);
		}

		String editableValues = (String)attributes.get("editableValues");

		if (editableValues != null) {
			setEditableValues(editableValues);
		}

		Integer position = (Integer)attributes.get("position");

		if (position != null) {
			setPosition(position);
		}
	}

	@Override
	public long getFragmentEntryLinkId() {
		return _fragmentEntryLinkId;
	}

	@Override
	public void setFragmentEntryLinkId(long fragmentEntryLinkId) {
		_fragmentEntryLinkId = fragmentEntryLinkId;
	}

	@Override
	public long getGroupId() {
		return _groupId;
	}

	@Override
	public void setGroupId(long groupId) {
		_columnBitmask |= GROUPID_COLUMN_BITMASK;

		if (!_setOriginalGroupId) {
			_setOriginalGroupId = true;

			_originalGroupId = _groupId;
		}

		_groupId = groupId;
	}

	public long getOriginalGroupId() {
		return _originalGroupId;
	}

	@Override
	public long getOriginalFragmentEntryLinkId() {
		return _originalFragmentEntryLinkId;
	}

	@Override
	public void setOriginalFragmentEntryLinkId(long originalFragmentEntryLinkId) {
		_originalFragmentEntryLinkId = originalFragmentEntryLinkId;
	}

	@Override
	public long getFragmentEntryId() {
		return _fragmentEntryId;
	}

	@Override
	public void setFragmentEntryId(long fragmentEntryId) {
		_columnBitmask |= FRAGMENTENTRYID_COLUMN_BITMASK;

		if (!_setOriginalFragmentEntryId) {
			_setOriginalFragmentEntryId = true;

			_originalFragmentEntryId = _fragmentEntryId;
		}

		_fragmentEntryId = fragmentEntryId;
	}

	public long getOriginalFragmentEntryId() {
		return _originalFragmentEntryId;
	}

	@Override
	public String getClassName() {
		if (getClassNameId() <= 0) {
			return "";
		}

		return PortalUtil.getClassName(getClassNameId());
	}

	@Override
	public void setClassName(String className) {
		long classNameId = 0;

		if (Validator.isNotNull(className)) {
			classNameId = PortalUtil.getClassNameId(className);
		}

		setClassNameId(classNameId);
	}

	@Override
	public long getClassNameId() {
		return _classNameId;
	}

	@Override
	public void setClassNameId(long classNameId) {
		_columnBitmask = -1L;

		if (!_setOriginalClassNameId) {
			_setOriginalClassNameId = true;

			_originalClassNameId = _classNameId;
		}

		_classNameId = classNameId;
	}

	public long getOriginalClassNameId() {
		return _originalClassNameId;
	}

	@Override
	public long getClassPK() {
		return _classPK;
	}

	@Override
	public void setClassPK(long classPK) {
		_columnBitmask = -1L;

		if (!_setOriginalClassPK) {
			_setOriginalClassPK = true;

			_originalClassPK = _classPK;
		}

		_classPK = classPK;
	}

	public long getOriginalClassPK() {
		return _originalClassPK;
	}

	@Override
	public String getCss() {
		if (_css == null) {
			return "";
		}
		else {
			return _css;
		}
	}

	@Override
	public void setCss(String css) {
		_css = css;
	}

	@Override
	public String getHtml() {
		if (_html == null) {
			return "";
		}
		else {
			return _html;
		}
	}

	@Override
	public void setHtml(String html) {
		_html = html;
	}

	@Override
	public String getJs() {
		if (_js == null) {
			return "";
		}
		else {
			return _js;
		}
	}

	@Override
	public void setJs(String js) {
		_js = js;
	}

	@Override
	public String getEditableValues() {
		if (_editableValues == null) {
			return "";
		}
		else {
			return _editableValues;
		}
	}

	@Override
	public void setEditableValues(String editableValues) {
		_editableValues = editableValues;
	}

	@Override
	public int getPosition() {
		return _position;
	}

	@Override
	public void setPosition(int position) {
		_columnBitmask = -1L;

		_position = position;
	}

	public long getColumnBitmask() {
		return _columnBitmask;
	}

	@Override
	public ExpandoBridge getExpandoBridge() {
		return ExpandoBridgeFactoryUtil.getExpandoBridge(0,
			FragmentEntryLink.class.getName(), getPrimaryKey());
	}

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext) {
		ExpandoBridge expandoBridge = getExpandoBridge();

		expandoBridge.setAttributes(serviceContext);
	}

	@Override
	public FragmentEntryLink toEscapedModel() {
		if (_escapedModel == null) {
			_escapedModel = (FragmentEntryLink)ProxyUtil.newProxyInstance(_classLoader,
					_escapedModelInterfaces, new AutoEscapeBeanHandler(this));
		}

		return _escapedModel;
	}

	@Override
	public Object clone() {
		FragmentEntryLinkImpl fragmentEntryLinkImpl = new FragmentEntryLinkImpl();

		fragmentEntryLinkImpl.setFragmentEntryLinkId(getFragmentEntryLinkId());
		fragmentEntryLinkImpl.setGroupId(getGroupId());
		fragmentEntryLinkImpl.setOriginalFragmentEntryLinkId(getOriginalFragmentEntryLinkId());
		fragmentEntryLinkImpl.setFragmentEntryId(getFragmentEntryId());
		fragmentEntryLinkImpl.setClassNameId(getClassNameId());
		fragmentEntryLinkImpl.setClassPK(getClassPK());
		fragmentEntryLinkImpl.setCss(getCss());
		fragmentEntryLinkImpl.setHtml(getHtml());
		fragmentEntryLinkImpl.setJs(getJs());
		fragmentEntryLinkImpl.setEditableValues(getEditableValues());
		fragmentEntryLinkImpl.setPosition(getPosition());

		fragmentEntryLinkImpl.resetOriginalValues();

		return fragmentEntryLinkImpl;
	}

	@Override
	public int compareTo(FragmentEntryLink fragmentEntryLink) {
		int value = 0;

		if (getClassNameId() < fragmentEntryLink.getClassNameId()) {
			value = -1;
		}
		else if (getClassNameId() > fragmentEntryLink.getClassNameId()) {
			value = 1;
		}
		else {
			value = 0;
		}

		if (value != 0) {
			return value;
		}

		if (getClassPK() < fragmentEntryLink.getClassPK()) {
			value = -1;
		}
		else if (getClassPK() > fragmentEntryLink.getClassPK()) {
			value = 1;
		}
		else {
			value = 0;
		}

		if (value != 0) {
			return value;
		}

		if (getPosition() < fragmentEntryLink.getPosition()) {
			value = -1;
		}
		else if (getPosition() > fragmentEntryLink.getPosition()) {
			value = 1;
		}
		else {
			value = 0;
		}

		if (value != 0) {
			return value;
		}

		return 0;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}

		if (!(obj instanceof FragmentEntryLink)) {
			return false;
		}

		FragmentEntryLink fragmentEntryLink = (FragmentEntryLink)obj;

		long primaryKey = fragmentEntryLink.getPrimaryKey();

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
		FragmentEntryLinkModelImpl fragmentEntryLinkModelImpl = this;

		fragmentEntryLinkModelImpl._originalGroupId = fragmentEntryLinkModelImpl._groupId;

		fragmentEntryLinkModelImpl._setOriginalGroupId = false;

		fragmentEntryLinkModelImpl._originalFragmentEntryId = fragmentEntryLinkModelImpl._fragmentEntryId;

		fragmentEntryLinkModelImpl._setOriginalFragmentEntryId = false;

		fragmentEntryLinkModelImpl._originalClassNameId = fragmentEntryLinkModelImpl._classNameId;

		fragmentEntryLinkModelImpl._setOriginalClassNameId = false;

		fragmentEntryLinkModelImpl._originalClassPK = fragmentEntryLinkModelImpl._classPK;

		fragmentEntryLinkModelImpl._setOriginalClassPK = false;

		fragmentEntryLinkModelImpl._columnBitmask = 0;
	}

	@Override
	public CacheModel<FragmentEntryLink> toCacheModel() {
		FragmentEntryLinkCacheModel fragmentEntryLinkCacheModel = new FragmentEntryLinkCacheModel();

		fragmentEntryLinkCacheModel.fragmentEntryLinkId = getFragmentEntryLinkId();

		fragmentEntryLinkCacheModel.groupId = getGroupId();

		fragmentEntryLinkCacheModel.originalFragmentEntryLinkId = getOriginalFragmentEntryLinkId();

		fragmentEntryLinkCacheModel.fragmentEntryId = getFragmentEntryId();

		fragmentEntryLinkCacheModel.classNameId = getClassNameId();

		fragmentEntryLinkCacheModel.classPK = getClassPK();

		fragmentEntryLinkCacheModel.css = getCss();

		String css = fragmentEntryLinkCacheModel.css;

		if ((css != null) && (css.length() == 0)) {
			fragmentEntryLinkCacheModel.css = null;
		}

		fragmentEntryLinkCacheModel.html = getHtml();

		String html = fragmentEntryLinkCacheModel.html;

		if ((html != null) && (html.length() == 0)) {
			fragmentEntryLinkCacheModel.html = null;
		}

		fragmentEntryLinkCacheModel.js = getJs();

		String js = fragmentEntryLinkCacheModel.js;

		if ((js != null) && (js.length() == 0)) {
			fragmentEntryLinkCacheModel.js = null;
		}

		fragmentEntryLinkCacheModel.editableValues = getEditableValues();

		String editableValues = fragmentEntryLinkCacheModel.editableValues;

		if ((editableValues != null) && (editableValues.length() == 0)) {
			fragmentEntryLinkCacheModel.editableValues = null;
		}

		fragmentEntryLinkCacheModel.position = getPosition();

		return fragmentEntryLinkCacheModel;
	}

	@Override
	public String toString() {
		StringBundler sb = new StringBundler(23);

		sb.append("{fragmentEntryLinkId=");
		sb.append(getFragmentEntryLinkId());
		sb.append(", groupId=");
		sb.append(getGroupId());
		sb.append(", originalFragmentEntryLinkId=");
		sb.append(getOriginalFragmentEntryLinkId());
		sb.append(", fragmentEntryId=");
		sb.append(getFragmentEntryId());
		sb.append(", classNameId=");
		sb.append(getClassNameId());
		sb.append(", classPK=");
		sb.append(getClassPK());
		sb.append(", css=");
		sb.append(getCss());
		sb.append(", html=");
		sb.append(getHtml());
		sb.append(", js=");
		sb.append(getJs());
		sb.append(", editableValues=");
		sb.append(getEditableValues());
		sb.append(", position=");
		sb.append(getPosition());
		sb.append("}");

		return sb.toString();
	}

	@Override
	public String toXmlString() {
		StringBundler sb = new StringBundler(37);

		sb.append("<model><model-name>");
		sb.append("com.liferay.fragment.model.FragmentEntryLink");
		sb.append("</model-name>");

		sb.append(
			"<column><column-name>fragmentEntryLinkId</column-name><column-value><![CDATA[");
		sb.append(getFragmentEntryLinkId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>groupId</column-name><column-value><![CDATA[");
		sb.append(getGroupId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>originalFragmentEntryLinkId</column-name><column-value><![CDATA[");
		sb.append(getOriginalFragmentEntryLinkId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>fragmentEntryId</column-name><column-value><![CDATA[");
		sb.append(getFragmentEntryId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>classNameId</column-name><column-value><![CDATA[");
		sb.append(getClassNameId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>classPK</column-name><column-value><![CDATA[");
		sb.append(getClassPK());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>css</column-name><column-value><![CDATA[");
		sb.append(getCss());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>html</column-name><column-value><![CDATA[");
		sb.append(getHtml());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>js</column-name><column-value><![CDATA[");
		sb.append(getJs());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>editableValues</column-name><column-value><![CDATA[");
		sb.append(getEditableValues());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>position</column-name><column-value><![CDATA[");
		sb.append(getPosition());
		sb.append("]]></column-value></column>");

		sb.append("</model>");

		return sb.toString();
	}

	private static final ClassLoader _classLoader = FragmentEntryLink.class.getClassLoader();
	private static final Class<?>[] _escapedModelInterfaces = new Class[] {
			FragmentEntryLink.class
		};
	private long _fragmentEntryLinkId;
	private long _groupId;
	private long _originalGroupId;
	private boolean _setOriginalGroupId;
	private long _originalFragmentEntryLinkId;
	private long _fragmentEntryId;
	private long _originalFragmentEntryId;
	private boolean _setOriginalFragmentEntryId;
	private long _classNameId;
	private long _originalClassNameId;
	private boolean _setOriginalClassNameId;
	private long _classPK;
	private long _originalClassPK;
	private boolean _setOriginalClassPK;
	private String _css;
	private String _html;
	private String _js;
	private String _editableValues;
	private int _position;
	private long _columnBitmask;
	private FragmentEntryLink _escapedModel;
}