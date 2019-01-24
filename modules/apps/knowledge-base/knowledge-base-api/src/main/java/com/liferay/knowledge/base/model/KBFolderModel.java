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

package com.liferay.knowledge.base.model;

import aQute.bnd.annotation.ProviderType;

import com.liferay.portal.kernel.bean.AutoEscape;
import com.liferay.portal.kernel.model.BaseModel;
import com.liferay.portal.kernel.model.ShardedModel;
import com.liferay.portal.kernel.model.StagedGroupedModel;

import java.util.Date;

/**
 * The base model interface for the KBFolder service. Represents a row in the &quot;KBFolder&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This interface and its corresponding implementation {@link com.liferay.knowledge.base.model.impl.KBFolderModelImpl} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link com.liferay.knowledge.base.model.impl.KBFolderImpl}.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see KBFolder
 * @see com.liferay.knowledge.base.model.impl.KBFolderImpl
 * @see com.liferay.knowledge.base.model.impl.KBFolderModelImpl
 * @generated
 */
@ProviderType
public interface KBFolderModel extends BaseModel<KBFolder>, ShardedModel,
	StagedGroupedModel {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. All methods that expect a kb folder model instance should use the {@link KBFolder} interface instead.
	 */

	/**
	 * Returns the primary key of this kb folder.
	 *
	 * @return the primary key of this kb folder
	 */
	public long getPrimaryKey();

	/**
	 * Sets the primary key of this kb folder.
	 *
	 * @param primaryKey the primary key of this kb folder
	 */
	public void setPrimaryKey(long primaryKey);

	/**
	 * Returns the uuid of this kb folder.
	 *
	 * @return the uuid of this kb folder
	 */
	@AutoEscape
	@Override
	public String getUuid();

	/**
	 * Sets the uuid of this kb folder.
	 *
	 * @param uuid the uuid of this kb folder
	 */
	@Override
	public void setUuid(String uuid);

	/**
	 * Returns the kb folder ID of this kb folder.
	 *
	 * @return the kb folder ID of this kb folder
	 */
	public long getKbFolderId();

	/**
	 * Sets the kb folder ID of this kb folder.
	 *
	 * @param kbFolderId the kb folder ID of this kb folder
	 */
	public void setKbFolderId(long kbFolderId);

	/**
	 * Returns the group ID of this kb folder.
	 *
	 * @return the group ID of this kb folder
	 */
	@Override
	public long getGroupId();

	/**
	 * Sets the group ID of this kb folder.
	 *
	 * @param groupId the group ID of this kb folder
	 */
	@Override
	public void setGroupId(long groupId);

	/**
	 * Returns the company ID of this kb folder.
	 *
	 * @return the company ID of this kb folder
	 */
	@Override
	public long getCompanyId();

	/**
	 * Sets the company ID of this kb folder.
	 *
	 * @param companyId the company ID of this kb folder
	 */
	@Override
	public void setCompanyId(long companyId);

	/**
	 * Returns the user ID of this kb folder.
	 *
	 * @return the user ID of this kb folder
	 */
	@Override
	public long getUserId();

	/**
	 * Sets the user ID of this kb folder.
	 *
	 * @param userId the user ID of this kb folder
	 */
	@Override
	public void setUserId(long userId);

	/**
	 * Returns the user uuid of this kb folder.
	 *
	 * @return the user uuid of this kb folder
	 */
	@Override
	public String getUserUuid();

	/**
	 * Sets the user uuid of this kb folder.
	 *
	 * @param userUuid the user uuid of this kb folder
	 */
	@Override
	public void setUserUuid(String userUuid);

	/**
	 * Returns the user name of this kb folder.
	 *
	 * @return the user name of this kb folder
	 */
	@AutoEscape
	@Override
	public String getUserName();

	/**
	 * Sets the user name of this kb folder.
	 *
	 * @param userName the user name of this kb folder
	 */
	@Override
	public void setUserName(String userName);

	/**
	 * Returns the create date of this kb folder.
	 *
	 * @return the create date of this kb folder
	 */
	@Override
	public Date getCreateDate();

	/**
	 * Sets the create date of this kb folder.
	 *
	 * @param createDate the create date of this kb folder
	 */
	@Override
	public void setCreateDate(Date createDate);

	/**
	 * Returns the modified date of this kb folder.
	 *
	 * @return the modified date of this kb folder
	 */
	@Override
	public Date getModifiedDate();

	/**
	 * Sets the modified date of this kb folder.
	 *
	 * @param modifiedDate the modified date of this kb folder
	 */
	@Override
	public void setModifiedDate(Date modifiedDate);

	/**
	 * Returns the parent kb folder ID of this kb folder.
	 *
	 * @return the parent kb folder ID of this kb folder
	 */
	public long getParentKBFolderId();

	/**
	 * Sets the parent kb folder ID of this kb folder.
	 *
	 * @param parentKBFolderId the parent kb folder ID of this kb folder
	 */
	public void setParentKBFolderId(long parentKBFolderId);

	/**
	 * Returns the name of this kb folder.
	 *
	 * @return the name of this kb folder
	 */
	@AutoEscape
	public String getName();

	/**
	 * Sets the name of this kb folder.
	 *
	 * @param name the name of this kb folder
	 */
	public void setName(String name);

	/**
	 * Returns the url title of this kb folder.
	 *
	 * @return the url title of this kb folder
	 */
	@AutoEscape
	public String getUrlTitle();

	/**
	 * Sets the url title of this kb folder.
	 *
	 * @param urlTitle the url title of this kb folder
	 */
	public void setUrlTitle(String urlTitle);

	/**
	 * Returns the description of this kb folder.
	 *
	 * @return the description of this kb folder
	 */
	@AutoEscape
	public String getDescription();

	/**
	 * Sets the description of this kb folder.
	 *
	 * @param description the description of this kb folder
	 */
	public void setDescription(String description);

	/**
	 * Returns the last publish date of this kb folder.
	 *
	 * @return the last publish date of this kb folder
	 */
	@Override
	public Date getLastPublishDate();

	/**
	 * Sets the last publish date of this kb folder.
	 *
	 * @param lastPublishDate the last publish date of this kb folder
	 */
	@Override
	public void setLastPublishDate(Date lastPublishDate);
}