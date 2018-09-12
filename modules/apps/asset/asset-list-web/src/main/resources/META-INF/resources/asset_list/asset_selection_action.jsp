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
SearchContainer searchContainer = (SearchContainer)request.getAttribute("liferay-ui:search:searchContainer");

ResultRow row = (ResultRow)request.getAttribute(WebKeys.SEARCH_CONTAINER_RESULT_ROW);

int assetEntryOrder = searchContainer.getStart() + row.getPos();
%>

<portlet:actionURL name="/asset_list/remove_asset_entry_selection" var="removeAssetEntrySelectionURL">
	<portlet:param name="redirect" value="<%= currentURL %>" />
	<portlet:param name="assetListEntryId" value="<%= String.valueOf(assetListDisplayContext.getAssetListEntryId()) %>" />
	<portlet:param name="assetEntryOrder" value="<%= String.valueOf(assetEntryOrder) %>" />
</portlet:actionURL>

<liferay-ui:icon
	icon="times-circle"
	markupView="lexicon"
	url="<%= removeAssetEntrySelectionURL %>"
/>