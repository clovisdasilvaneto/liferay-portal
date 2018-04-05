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

package com.liferay.portal.tools.service.builder.test.model;

import aQute.bnd.annotation.ProviderType;

import com.liferay.expando.kernel.model.ExpandoBridge;

import com.liferay.portal.kernel.model.BaseModel;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.service.ServiceContext;

import java.io.Serializable;

import java.math.BigDecimal;

/**
 * The base model interface for the BigDecimalEntry service. Represents a row in the &quot;BigDecimalEntry&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This interface and its corresponding implementation {@link com.liferay.portal.tools.service.builder.test.model.impl.BigDecimalEntryModelImpl} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link com.liferay.portal.tools.service.builder.test.model.impl.BigDecimalEntryImpl}.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see BigDecimalEntry
 * @see com.liferay.portal.tools.service.builder.test.model.impl.BigDecimalEntryImpl
 * @see com.liferay.portal.tools.service.builder.test.model.impl.BigDecimalEntryModelImpl
 * @generated
 */
@ProviderType
public interface BigDecimalEntryModel extends BaseModel<BigDecimalEntry> {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. All methods that expect a big decimal entry model instance should use the {@link BigDecimalEntry} interface instead.
	 */

	/**
	 * Returns the primary key of this big decimal entry.
	 *
	 * @return the primary key of this big decimal entry
	 */
	public long getPrimaryKey();

	/**
	 * Sets the primary key of this big decimal entry.
	 *
	 * @param primaryKey the primary key of this big decimal entry
	 */
	public void setPrimaryKey(long primaryKey);

	/**
	 * Returns the big decimal entry ID of this big decimal entry.
	 *
	 * @return the big decimal entry ID of this big decimal entry
	 */
	public long getBigDecimalEntryId();

	/**
	 * Sets the big decimal entry ID of this big decimal entry.
	 *
	 * @param bigDecimalEntryId the big decimal entry ID of this big decimal entry
	 */
	public void setBigDecimalEntryId(long bigDecimalEntryId);

	/**
	 * Returns the big decimal value of this big decimal entry.
	 *
	 * @return the big decimal value of this big decimal entry
	 */
	public BigDecimal getBigDecimalValue();

	/**
	 * Sets the big decimal value of this big decimal entry.
	 *
	 * @param bigDecimalValue the big decimal value of this big decimal entry
	 */
	public void setBigDecimalValue(BigDecimal bigDecimalValue);

	@Override
	public boolean isNew();

	@Override
	public void setNew(boolean n);

	@Override
	public boolean isCachedModel();

	@Override
	public void setCachedModel(boolean cachedModel);

	@Override
	public boolean isEscapedModel();

	@Override
	public Serializable getPrimaryKeyObj();

	@Override
	public void setPrimaryKeyObj(Serializable primaryKeyObj);

	@Override
	public ExpandoBridge getExpandoBridge();

	@Override
	public void setExpandoBridgeAttributes(BaseModel<?> baseModel);

	@Override
	public void setExpandoBridgeAttributes(ExpandoBridge expandoBridge);

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext);

	@Override
	public Object clone();

	@Override
	public int compareTo(BigDecimalEntry bigDecimalEntry);

	@Override
	public int hashCode();

	@Override
	public CacheModel<BigDecimalEntry> toCacheModel();

	@Override
	public BigDecimalEntry toEscapedModel();

	@Override
	public BigDecimalEntry toUnescapedModel();

	@Override
	public String toString();

	@Override
	public String toXmlString();
}