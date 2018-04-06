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

package com.liferay.oauth2.provider.service.base;

import aQute.bnd.annotation.ProviderType;

import com.liferay.oauth2.provider.model.OAuth2ApplicationScopeAliases;
import com.liferay.oauth2.provider.service.OAuth2ApplicationScopeAliasesLocalService;
import com.liferay.oauth2.provider.service.persistence.OAuth2ApplicationScopeAliasesPersistence;
import com.liferay.oauth2.provider.service.persistence.OAuth2ScopeGrantFinder;
import com.liferay.oauth2.provider.service.persistence.OAuth2ScopeGrantPersistence;

import com.liferay.portal.kernel.bean.BeanReference;
import com.liferay.portal.kernel.dao.db.DB;
import com.liferay.portal.kernel.dao.db.DBManagerUtil;
import com.liferay.portal.kernel.dao.jdbc.SqlUpdate;
import com.liferay.portal.kernel.dao.jdbc.SqlUpdateFactoryUtil;
import com.liferay.portal.kernel.dao.orm.ActionableDynamicQuery;
import com.liferay.portal.kernel.dao.orm.DefaultActionableDynamicQuery;
import com.liferay.portal.kernel.dao.orm.DynamicQuery;
import com.liferay.portal.kernel.dao.orm.DynamicQueryFactoryUtil;
import com.liferay.portal.kernel.dao.orm.IndexableActionableDynamicQuery;
import com.liferay.portal.kernel.dao.orm.Projection;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.model.PersistedModel;
import com.liferay.portal.kernel.module.framework.service.IdentifiableOSGiService;
import com.liferay.portal.kernel.search.Indexable;
import com.liferay.portal.kernel.search.IndexableType;
import com.liferay.portal.kernel.service.BaseLocalServiceImpl;
import com.liferay.portal.kernel.service.PersistedModelLocalServiceRegistry;
import com.liferay.portal.kernel.service.persistence.GroupPersistence;
import com.liferay.portal.kernel.service.persistence.UserPersistence;
import com.liferay.portal.kernel.util.OrderByComparator;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.spring.extender.service.ServiceReference;

import java.io.Serializable;

import java.util.List;

import javax.sql.DataSource;

/**
 * Provides the base implementation for the o auth2 application scope aliases local service.
 *
 * <p>
 * This implementation exists only as a container for the default service methods generated by ServiceBuilder. All custom service methods should be put in {@link com.liferay.oauth2.provider.service.impl.OAuth2ApplicationScopeAliasesLocalServiceImpl}.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see com.liferay.oauth2.provider.service.impl.OAuth2ApplicationScopeAliasesLocalServiceImpl
 * @see com.liferay.oauth2.provider.service.OAuth2ApplicationScopeAliasesLocalServiceUtil
 * @generated
 */
@ProviderType
public abstract class OAuth2ApplicationScopeAliasesLocalServiceBaseImpl
	extends BaseLocalServiceImpl
	implements OAuth2ApplicationScopeAliasesLocalService,
		IdentifiableOSGiService {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this class directly. Always use {@link com.liferay.oauth2.provider.service.OAuth2ApplicationScopeAliasesLocalServiceUtil} to access the o auth2 application scope aliases local service.
	 */

	/**
	 * Adds the o auth2 application scope aliases to the database. Also notifies the appropriate model listeners.
	 *
	 * @param oAuth2ApplicationScopeAliases the o auth2 application scope aliases
	 * @return the o auth2 application scope aliases that was added
	 */
	@Indexable(type = IndexableType.REINDEX)
	@Override
	public OAuth2ApplicationScopeAliases addOAuth2ApplicationScopeAliases(
		OAuth2ApplicationScopeAliases oAuth2ApplicationScopeAliases) {
		oAuth2ApplicationScopeAliases.setNew(true);

		return oAuth2ApplicationScopeAliasesPersistence.update(oAuth2ApplicationScopeAliases);
	}

	/**
	 * Creates a new o auth2 application scope aliases with the primary key. Does not add the o auth2 application scope aliases to the database.
	 *
	 * @param oAuth2ApplicationScopeAliasesId the primary key for the new o auth2 application scope aliases
	 * @return the new o auth2 application scope aliases
	 */
	@Override
	public OAuth2ApplicationScopeAliases createOAuth2ApplicationScopeAliases(
		long oAuth2ApplicationScopeAliasesId) {
		return oAuth2ApplicationScopeAliasesPersistence.create(oAuth2ApplicationScopeAliasesId);
	}

	/**
	 * Deletes the o auth2 application scope aliases with the primary key from the database. Also notifies the appropriate model listeners.
	 *
	 * @param oAuth2ApplicationScopeAliasesId the primary key of the o auth2 application scope aliases
	 * @return the o auth2 application scope aliases that was removed
	 * @throws PortalException if a o auth2 application scope aliases with the primary key could not be found
	 */
	@Indexable(type = IndexableType.DELETE)
	@Override
	public OAuth2ApplicationScopeAliases deleteOAuth2ApplicationScopeAliases(
		long oAuth2ApplicationScopeAliasesId) throws PortalException {
		return oAuth2ApplicationScopeAliasesPersistence.remove(oAuth2ApplicationScopeAliasesId);
	}

	/**
	 * Deletes the o auth2 application scope aliases from the database. Also notifies the appropriate model listeners.
	 *
	 * @param oAuth2ApplicationScopeAliases the o auth2 application scope aliases
	 * @return the o auth2 application scope aliases that was removed
	 */
	@Indexable(type = IndexableType.DELETE)
	@Override
	public OAuth2ApplicationScopeAliases deleteOAuth2ApplicationScopeAliases(
		OAuth2ApplicationScopeAliases oAuth2ApplicationScopeAliases) {
		return oAuth2ApplicationScopeAliasesPersistence.remove(oAuth2ApplicationScopeAliases);
	}

	@Override
	public DynamicQuery dynamicQuery() {
		Class<?> clazz = getClass();

		return DynamicQueryFactoryUtil.forClass(OAuth2ApplicationScopeAliases.class,
			clazz.getClassLoader());
	}

	/**
	 * Performs a dynamic query on the database and returns the matching rows.
	 *
	 * @param dynamicQuery the dynamic query
	 * @return the matching rows
	 */
	@Override
	public <T> List<T> dynamicQuery(DynamicQuery dynamicQuery) {
		return oAuth2ApplicationScopeAliasesPersistence.findWithDynamicQuery(dynamicQuery);
	}

	/**
	 * Performs a dynamic query on the database and returns a range of the matching rows.
	 *
	 * <p>
	 * Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS} will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent and pagination is required (<code>start</code> and <code>end</code> are not {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS}), then the query will include the default ORDER BY logic from {@link com.liferay.oauth2.provider.model.impl.OAuth2ApplicationScopeAliasesModelImpl}. If both <code>orderByComparator</code> and pagination are absent, for performance reasons, the query will not have an ORDER BY clause and the returned result set will be sorted on by the primary key in an ascending order.
	 * </p>
	 *
	 * @param dynamicQuery the dynamic query
	 * @param start the lower bound of the range of model instances
	 * @param end the upper bound of the range of model instances (not inclusive)
	 * @return the range of matching rows
	 */
	@Override
	public <T> List<T> dynamicQuery(DynamicQuery dynamicQuery, int start,
		int end) {
		return oAuth2ApplicationScopeAliasesPersistence.findWithDynamicQuery(dynamicQuery,
			start, end);
	}

	/**
	 * Performs a dynamic query on the database and returns an ordered range of the matching rows.
	 *
	 * <p>
	 * Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS} will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent and pagination is required (<code>start</code> and <code>end</code> are not {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS}), then the query will include the default ORDER BY logic from {@link com.liferay.oauth2.provider.model.impl.OAuth2ApplicationScopeAliasesModelImpl}. If both <code>orderByComparator</code> and pagination are absent, for performance reasons, the query will not have an ORDER BY clause and the returned result set will be sorted on by the primary key in an ascending order.
	 * </p>
	 *
	 * @param dynamicQuery the dynamic query
	 * @param start the lower bound of the range of model instances
	 * @param end the upper bound of the range of model instances (not inclusive)
	 * @param orderByComparator the comparator to order the results by (optionally <code>null</code>)
	 * @return the ordered range of matching rows
	 */
	@Override
	public <T> List<T> dynamicQuery(DynamicQuery dynamicQuery, int start,
		int end, OrderByComparator<T> orderByComparator) {
		return oAuth2ApplicationScopeAliasesPersistence.findWithDynamicQuery(dynamicQuery,
			start, end, orderByComparator);
	}

	/**
	 * Returns the number of rows matching the dynamic query.
	 *
	 * @param dynamicQuery the dynamic query
	 * @return the number of rows matching the dynamic query
	 */
	@Override
	public long dynamicQueryCount(DynamicQuery dynamicQuery) {
		return oAuth2ApplicationScopeAliasesPersistence.countWithDynamicQuery(dynamicQuery);
	}

	/**
	 * Returns the number of rows matching the dynamic query.
	 *
	 * @param dynamicQuery the dynamic query
	 * @param projection the projection to apply to the query
	 * @return the number of rows matching the dynamic query
	 */
	@Override
	public long dynamicQueryCount(DynamicQuery dynamicQuery,
		Projection projection) {
		return oAuth2ApplicationScopeAliasesPersistence.countWithDynamicQuery(dynamicQuery,
			projection);
	}

	@Override
	public OAuth2ApplicationScopeAliases fetchOAuth2ApplicationScopeAliases(
		long oAuth2ApplicationScopeAliasesId) {
		return oAuth2ApplicationScopeAliasesPersistence.fetchByPrimaryKey(oAuth2ApplicationScopeAliasesId);
	}

	/**
	 * Returns the o auth2 application scope aliases with the primary key.
	 *
	 * @param oAuth2ApplicationScopeAliasesId the primary key of the o auth2 application scope aliases
	 * @return the o auth2 application scope aliases
	 * @throws PortalException if a o auth2 application scope aliases with the primary key could not be found
	 */
	@Override
	public OAuth2ApplicationScopeAliases getOAuth2ApplicationScopeAliases(
		long oAuth2ApplicationScopeAliasesId) throws PortalException {
		return oAuth2ApplicationScopeAliasesPersistence.findByPrimaryKey(oAuth2ApplicationScopeAliasesId);
	}

	@Override
	public ActionableDynamicQuery getActionableDynamicQuery() {
		ActionableDynamicQuery actionableDynamicQuery = new DefaultActionableDynamicQuery();

		actionableDynamicQuery.setBaseLocalService(oAuth2ApplicationScopeAliasesLocalService);
		actionableDynamicQuery.setClassLoader(getClassLoader());
		actionableDynamicQuery.setModelClass(OAuth2ApplicationScopeAliases.class);

		actionableDynamicQuery.setPrimaryKeyPropertyName(
			"oAuth2ApplicationScopeAliasesId");

		return actionableDynamicQuery;
	}

	@Override
	public IndexableActionableDynamicQuery getIndexableActionableDynamicQuery() {
		IndexableActionableDynamicQuery indexableActionableDynamicQuery = new IndexableActionableDynamicQuery();

		indexableActionableDynamicQuery.setBaseLocalService(oAuth2ApplicationScopeAliasesLocalService);
		indexableActionableDynamicQuery.setClassLoader(getClassLoader());
		indexableActionableDynamicQuery.setModelClass(OAuth2ApplicationScopeAliases.class);

		indexableActionableDynamicQuery.setPrimaryKeyPropertyName(
			"oAuth2ApplicationScopeAliasesId");

		return indexableActionableDynamicQuery;
	}

	protected void initActionableDynamicQuery(
		ActionableDynamicQuery actionableDynamicQuery) {
		actionableDynamicQuery.setBaseLocalService(oAuth2ApplicationScopeAliasesLocalService);
		actionableDynamicQuery.setClassLoader(getClassLoader());
		actionableDynamicQuery.setModelClass(OAuth2ApplicationScopeAliases.class);

		actionableDynamicQuery.setPrimaryKeyPropertyName(
			"oAuth2ApplicationScopeAliasesId");
	}

	/**
	 * @throws PortalException
	 */
	@Override
	public PersistedModel deletePersistedModel(PersistedModel persistedModel)
		throws PortalException {
		return oAuth2ApplicationScopeAliasesLocalService.deleteOAuth2ApplicationScopeAliases((OAuth2ApplicationScopeAliases)persistedModel);
	}

	@Override
	public PersistedModel getPersistedModel(Serializable primaryKeyObj)
		throws PortalException {
		return oAuth2ApplicationScopeAliasesPersistence.findByPrimaryKey(primaryKeyObj);
	}

	/**
	 * Returns a range of all the o auth2 application scope aliaseses.
	 *
	 * <p>
	 * Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS} will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent and pagination is required (<code>start</code> and <code>end</code> are not {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS}), then the query will include the default ORDER BY logic from {@link com.liferay.oauth2.provider.model.impl.OAuth2ApplicationScopeAliasesModelImpl}. If both <code>orderByComparator</code> and pagination are absent, for performance reasons, the query will not have an ORDER BY clause and the returned result set will be sorted on by the primary key in an ascending order.
	 * </p>
	 *
	 * @param start the lower bound of the range of o auth2 application scope aliaseses
	 * @param end the upper bound of the range of o auth2 application scope aliaseses (not inclusive)
	 * @return the range of o auth2 application scope aliaseses
	 */
	@Override
	public List<OAuth2ApplicationScopeAliases> getOAuth2ApplicationScopeAliaseses(
		int start, int end) {
		return oAuth2ApplicationScopeAliasesPersistence.findAll(start, end);
	}

	/**
	 * Returns the number of o auth2 application scope aliaseses.
	 *
	 * @return the number of o auth2 application scope aliaseses
	 */
	@Override
	public int getOAuth2ApplicationScopeAliasesesCount() {
		return oAuth2ApplicationScopeAliasesPersistence.countAll();
	}

	/**
	 * Updates the o auth2 application scope aliases in the database or adds it if it does not yet exist. Also notifies the appropriate model listeners.
	 *
	 * @param oAuth2ApplicationScopeAliases the o auth2 application scope aliases
	 * @return the o auth2 application scope aliases that was updated
	 */
	@Indexable(type = IndexableType.REINDEX)
	@Override
	public OAuth2ApplicationScopeAliases updateOAuth2ApplicationScopeAliases(
		OAuth2ApplicationScopeAliases oAuth2ApplicationScopeAliases) {
		return oAuth2ApplicationScopeAliasesPersistence.update(oAuth2ApplicationScopeAliases);
	}

	/**
	 * Returns the o auth2 application scope aliases local service.
	 *
	 * @return the o auth2 application scope aliases local service
	 */
	public OAuth2ApplicationScopeAliasesLocalService getOAuth2ApplicationScopeAliasesLocalService() {
		return oAuth2ApplicationScopeAliasesLocalService;
	}

	/**
	 * Sets the o auth2 application scope aliases local service.
	 *
	 * @param oAuth2ApplicationScopeAliasesLocalService the o auth2 application scope aliases local service
	 */
	public void setOAuth2ApplicationScopeAliasesLocalService(
		OAuth2ApplicationScopeAliasesLocalService oAuth2ApplicationScopeAliasesLocalService) {
		this.oAuth2ApplicationScopeAliasesLocalService = oAuth2ApplicationScopeAliasesLocalService;
	}

	/**
	 * Returns the o auth2 application scope aliases persistence.
	 *
	 * @return the o auth2 application scope aliases persistence
	 */
	public OAuth2ApplicationScopeAliasesPersistence getOAuth2ApplicationScopeAliasesPersistence() {
		return oAuth2ApplicationScopeAliasesPersistence;
	}

	/**
	 * Sets the o auth2 application scope aliases persistence.
	 *
	 * @param oAuth2ApplicationScopeAliasesPersistence the o auth2 application scope aliases persistence
	 */
	public void setOAuth2ApplicationScopeAliasesPersistence(
		OAuth2ApplicationScopeAliasesPersistence oAuth2ApplicationScopeAliasesPersistence) {
		this.oAuth2ApplicationScopeAliasesPersistence = oAuth2ApplicationScopeAliasesPersistence;
	}

	/**
	 * Returns the counter local service.
	 *
	 * @return the counter local service
	 */
	public com.liferay.counter.kernel.service.CounterLocalService getCounterLocalService() {
		return counterLocalService;
	}

	/**
	 * Sets the counter local service.
	 *
	 * @param counterLocalService the counter local service
	 */
	public void setCounterLocalService(
		com.liferay.counter.kernel.service.CounterLocalService counterLocalService) {
		this.counterLocalService = counterLocalService;
	}

	/**
	 * Returns the group local service.
	 *
	 * @return the group local service
	 */
	public com.liferay.portal.kernel.service.GroupLocalService getGroupLocalService() {
		return groupLocalService;
	}

	/**
	 * Sets the group local service.
	 *
	 * @param groupLocalService the group local service
	 */
	public void setGroupLocalService(
		com.liferay.portal.kernel.service.GroupLocalService groupLocalService) {
		this.groupLocalService = groupLocalService;
	}

	/**
	 * Returns the group persistence.
	 *
	 * @return the group persistence
	 */
	public GroupPersistence getGroupPersistence() {
		return groupPersistence;
	}

	/**
	 * Sets the group persistence.
	 *
	 * @param groupPersistence the group persistence
	 */
	public void setGroupPersistence(GroupPersistence groupPersistence) {
		this.groupPersistence = groupPersistence;
	}

	/**
	 * Returns the resource local service.
	 *
	 * @return the resource local service
	 */
	public com.liferay.portal.kernel.service.ResourceLocalService getResourceLocalService() {
		return resourceLocalService;
	}

	/**
	 * Sets the resource local service.
	 *
	 * @param resourceLocalService the resource local service
	 */
	public void setResourceLocalService(
		com.liferay.portal.kernel.service.ResourceLocalService resourceLocalService) {
		this.resourceLocalService = resourceLocalService;
	}

	/**
	 * Returns the user local service.
	 *
	 * @return the user local service
	 */
	public com.liferay.portal.kernel.service.UserLocalService getUserLocalService() {
		return userLocalService;
	}

	/**
	 * Sets the user local service.
	 *
	 * @param userLocalService the user local service
	 */
	public void setUserLocalService(
		com.liferay.portal.kernel.service.UserLocalService userLocalService) {
		this.userLocalService = userLocalService;
	}

	/**
	 * Returns the user persistence.
	 *
	 * @return the user persistence
	 */
	public UserPersistence getUserPersistence() {
		return userPersistence;
	}

	/**
	 * Sets the user persistence.
	 *
	 * @param userPersistence the user persistence
	 */
	public void setUserPersistence(UserPersistence userPersistence) {
		this.userPersistence = userPersistence;
	}

	/**
	 * Returns the o auth2 scope grant local service.
	 *
	 * @return the o auth2 scope grant local service
	 */
	public com.liferay.oauth2.provider.service.OAuth2ScopeGrantLocalService getOAuth2ScopeGrantLocalService() {
		return oAuth2ScopeGrantLocalService;
	}

	/**
	 * Sets the o auth2 scope grant local service.
	 *
	 * @param oAuth2ScopeGrantLocalService the o auth2 scope grant local service
	 */
	public void setOAuth2ScopeGrantLocalService(
		com.liferay.oauth2.provider.service.OAuth2ScopeGrantLocalService oAuth2ScopeGrantLocalService) {
		this.oAuth2ScopeGrantLocalService = oAuth2ScopeGrantLocalService;
	}

	/**
	 * Returns the o auth2 scope grant persistence.
	 *
	 * @return the o auth2 scope grant persistence
	 */
	public OAuth2ScopeGrantPersistence getOAuth2ScopeGrantPersistence() {
		return oAuth2ScopeGrantPersistence;
	}

	/**
	 * Sets the o auth2 scope grant persistence.
	 *
	 * @param oAuth2ScopeGrantPersistence the o auth2 scope grant persistence
	 */
	public void setOAuth2ScopeGrantPersistence(
		OAuth2ScopeGrantPersistence oAuth2ScopeGrantPersistence) {
		this.oAuth2ScopeGrantPersistence = oAuth2ScopeGrantPersistence;
	}

	/**
	 * Returns the o auth2 scope grant finder.
	 *
	 * @return the o auth2 scope grant finder
	 */
	public OAuth2ScopeGrantFinder getOAuth2ScopeGrantFinder() {
		return oAuth2ScopeGrantFinder;
	}

	/**
	 * Sets the o auth2 scope grant finder.
	 *
	 * @param oAuth2ScopeGrantFinder the o auth2 scope grant finder
	 */
	public void setOAuth2ScopeGrantFinder(
		OAuth2ScopeGrantFinder oAuth2ScopeGrantFinder) {
		this.oAuth2ScopeGrantFinder = oAuth2ScopeGrantFinder;
	}

	public void afterPropertiesSet() {
		persistedModelLocalServiceRegistry.register("com.liferay.oauth2.provider.model.OAuth2ApplicationScopeAliases",
			oAuth2ApplicationScopeAliasesLocalService);
	}

	public void destroy() {
		persistedModelLocalServiceRegistry.unregister(
			"com.liferay.oauth2.provider.model.OAuth2ApplicationScopeAliases");
	}

	/**
	 * Returns the OSGi service identifier.
	 *
	 * @return the OSGi service identifier
	 */
	@Override
	public String getOSGiServiceIdentifier() {
		return OAuth2ApplicationScopeAliasesLocalService.class.getName();
	}

	protected Class<?> getModelClass() {
		return OAuth2ApplicationScopeAliases.class;
	}

	protected String getModelClassName() {
		return OAuth2ApplicationScopeAliases.class.getName();
	}

	/**
	 * Performs a SQL query.
	 *
	 * @param sql the sql query
	 */
	protected void runSQL(String sql) {
		try {
			DataSource dataSource = oAuth2ApplicationScopeAliasesPersistence.getDataSource();

			DB db = DBManagerUtil.getDB();

			sql = db.buildSQL(sql);
			sql = PortalUtil.transformSQL(sql);

			SqlUpdate sqlUpdate = SqlUpdateFactoryUtil.getSqlUpdate(dataSource,
					sql);

			sqlUpdate.update();
		}
		catch (Exception e) {
			throw new SystemException(e);
		}
	}

	@BeanReference(type = OAuth2ApplicationScopeAliasesLocalService.class)
	protected OAuth2ApplicationScopeAliasesLocalService oAuth2ApplicationScopeAliasesLocalService;
	@BeanReference(type = OAuth2ApplicationScopeAliasesPersistence.class)
	protected OAuth2ApplicationScopeAliasesPersistence oAuth2ApplicationScopeAliasesPersistence;
	@ServiceReference(type = com.liferay.counter.kernel.service.CounterLocalService.class)
	protected com.liferay.counter.kernel.service.CounterLocalService counterLocalService;
	@ServiceReference(type = com.liferay.portal.kernel.service.GroupLocalService.class)
	protected com.liferay.portal.kernel.service.GroupLocalService groupLocalService;
	@ServiceReference(type = GroupPersistence.class)
	protected GroupPersistence groupPersistence;
	@ServiceReference(type = com.liferay.portal.kernel.service.ResourceLocalService.class)
	protected com.liferay.portal.kernel.service.ResourceLocalService resourceLocalService;
	@ServiceReference(type = com.liferay.portal.kernel.service.UserLocalService.class)
	protected com.liferay.portal.kernel.service.UserLocalService userLocalService;
	@ServiceReference(type = UserPersistence.class)
	protected UserPersistence userPersistence;
	@BeanReference(type = com.liferay.oauth2.provider.service.OAuth2ScopeGrantLocalService.class)
	protected com.liferay.oauth2.provider.service.OAuth2ScopeGrantLocalService oAuth2ScopeGrantLocalService;
	@BeanReference(type = OAuth2ScopeGrantPersistence.class)
	protected OAuth2ScopeGrantPersistence oAuth2ScopeGrantPersistence;
	@BeanReference(type = OAuth2ScopeGrantFinder.class)
	protected OAuth2ScopeGrantFinder oAuth2ScopeGrantFinder;
	@ServiceReference(type = PersistedModelLocalServiceRegistry.class)
	protected PersistedModelLocalServiceRegistry persistedModelLocalServiceRegistry;
}