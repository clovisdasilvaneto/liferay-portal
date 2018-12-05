<%--
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
--%>

<%@ include file="/init.jsp" %>

<%
String className = (String)request.getAttribute("contact_information.jsp-className");
long classPK = (long)request.getAttribute("contact_information.jsp-classPK");
String contactInformationRequireJS = (String)request.getAttribute("contact_information.jsp-contactInformationRequireJS");

String emptyResultsMessage = ParamUtil.getString(request, "emptyResultsMessage");

List<Website> websites = WebsiteServiceUtil.getWebsites(className, classPK);
%>

<liferay-ui:error-marker
	key="<%= WebKeys.ERROR_SECTION %>"
	value="websites"
/>

<liferay-ui:error key="<%= NoSuchListTypeException.class.getName() + className + ListTypeConstants.WEBSITE %>" message="please-select-a-type" />
<liferay-ui:error exception="<%= WebsiteURLException.class %>" message="please-enter-a-valid-url" />

<h3 class="sheet-subtitle">
	<span class="autofit-padded-no-gutters autofit-row">
		<span class="autofit-col autofit-col-expand">
			<span class="heading-text">
				<liferay-ui:message key="websites" />
			</span>
		</span>
		<span class="autofit-col">
			<liferay-ui:icon
				cssClass="modify-website-link"
				data="<%=
					new HashMap<String, Object>() {
						{
							put("title", LanguageUtil.get(request, "add-website"));
						}
					}
				%>"
				label="<%= true %>"
				linkCssClass="btn btn-secondary btn-sm"
				message="add"
				url="javascript:;"
			/>
		</span>
	</span>
</h3>

<liferay-ui:search-container
	compactEmptyResultsMessage="<%= true %>"
	cssClass="lfr-search-container-wrapper"
	curParam="websitesCur"
	deltaParam="websitesDelta"
	emptyResultsMessage="<%= emptyResultsMessage %>"
	headerNames="website,type,"
	id="websitesSearchContainer"
	iteratorURL="<%= currentURLObj %>"
	total="<%= websites.size() %>"
>
	<liferay-ui:search-container-results
		results="<%= websites.subList(searchContainer.getStart(), searchContainer.getResultEnd()) %>"
	/>

	<liferay-ui:search-container-row
		className="com.liferay.portal.kernel.model.Website"
		escapedModel="<%= true %>"
		keyProperty="websiteId"
		modelVar="website"
	>
		<liferay-ui:search-container-column-text
			cssClass="table-cell-content"
			name="website"
			property="url"
		/>

		<%
		ListType websiteListType = ListTypeServiceUtil.getListType(website.getTypeId());

		String websiteTypeKey = websiteListType.getName();
		%>

		<liferay-ui:search-container-column-text
			cssClass="table-cell-content"
			name="type"
			value="<%= LanguageUtil.get(request, websiteTypeKey) %>"
		/>

		<liferay-ui:search-container-column-text
			cssClass="table-cell-content"
		>
			<c:if test="<%= website.isPrimary() %>">
				<span class="label label-primary">
					<span class="label-item label-item-expand"><%= StringUtil.toUpperCase(LanguageUtil.get(request, "primary"), locale) %></span>
				</span>
			</c:if>
		</liferay-ui:search-container-column-text>

		<liferay-ui:search-container-column-jsp
			cssClass="entry-action-column"
			path="/common/website_action.jsp"
		/>
	</liferay-ui:search-container-row>

	<liferay-ui:search-iterator
		markupView="lexicon"
	/>
</liferay-ui:search-container>

<portlet:renderURL var="editWebsiteRenderURL" windowState="<%= LiferayWindowState.POP_UP.toString() %>">
	<portlet:param name="mvcPath" value="/common/edit_website.jsp" />
	<portlet:param name="className" value="<%= className %>" />
</portlet:renderURL>

<aui:script require="<%= contactInformationRequireJS %>">
	ContactInformation.registerContactInformationListener(
		'.modify-website-link a',
		'<%= editWebsiteRenderURL.toString() %>',
		460
	);
</aui:script>