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

package com.liferay.segments.web.internal.portlet.action;

import com.liferay.osgi.service.tracker.collections.map.ServiceTrackerMap;
import com.liferay.osgi.service.tracker.collections.map.ServiceTrackerMapFactory;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.kernel.util.Portal;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.segments.constants.SegmentsPortletKeys;
import com.liferay.segments.criteria.Criteria;
import com.liferay.segments.criteria.contributor.SegmentsCriteriaContributor;
import com.liferay.segments.criteria.contributor.SegmentsCriteriaContributorRegistry;
import com.liferay.segments.odata.retriever.ODataRetriever;
import com.liferay.segments.service.SegmentsEntryService;

import java.io.PrintWriter;

import java.util.List;
import java.util.Locale;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import javax.servlet.http.HttpServletRequest;

import org.osgi.framework.BundleContext;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Reference;

/**
 * @author Gavin Wan
 * @author Pei-Jung Lan
 */
@Component(
	immediate = true,
	property = {
		"javax.portlet.name=" + SegmentsPortletKeys.SEGMENTS,
		"mvc.command.name=getSegmentsEntryClassPKsCount"
	},
	service = MVCResourceCommand.class
)
public class GetSegmentsEntryClassPKsCountMVCResourceCommand
	implements MVCResourceCommand {

	@Activate
	public void activate(BundleContext bundleContext) {
		_serviceTrackerMap = ServiceTrackerMapFactory.openSingleValueMap(
			bundleContext, ODataRetriever.class, "model.class.name");
	}

	@Deactivate
	public void deactivate() {
		_serviceTrackerMap.close();
	}

	@Override
	public boolean serveResource(
			ResourceRequest resourceRequest, ResourceResponse resourceResponse)
		throws PortletException {

		try {
			PrintWriter printWriter = resourceResponse.getWriter();

			printWriter.write(getText(resourceRequest, resourceResponse));

			return false;
		}
		catch (Exception e) {
			throw new PortletException(e);
		}
	}

	protected Criteria getCriteria(
		ResourceRequest resourceRequest, String type) {

		Criteria criteria = new Criteria();

		List<SegmentsCriteriaContributor> segmentsCriteriaContributors =
			_segmentsCriteriaContributorRegistry.
				getSegmentsCriteriaContributors(type, Criteria.Type.MODEL);

		for (SegmentsCriteriaContributor segmentsCriteriaContributor :
				segmentsCriteriaContributors) {

			String filterString = ParamUtil.getString(
				resourceRequest,
				"criterionFilter" + segmentsCriteriaContributor.getKey());

			if (Validator.isNull(filterString)) {
				continue;
			}

			String conjunctionString = ParamUtil.getString(
				resourceRequest,
				"criterionConjunction" + segmentsCriteriaContributor.getKey(),
				Criteria.Conjunction.AND.getValue());

			segmentsCriteriaContributor.contribute(
				criteria, filterString,
				Criteria.Conjunction.parse(conjunctionString));
		}

		return criteria;
	}

	protected int getSegmentsEntryClassPKsCount(
			long companyId, Criteria criteria, String type, Locale locale)
		throws Exception {

		ODataRetriever oDataRetriever = _serviceTrackerMap.getService(type);

		if (oDataRetriever == null) {
			return 0;
		}

		return oDataRetriever.getResultsCount(
			companyId, criteria.getFilterString(Criteria.Type.MODEL), locale);
	}

	protected String getText(
			ResourceRequest resourceRequest, ResourceResponse resourceResponse)
		throws Exception {

		HttpServletRequest request = _portal.getOriginalServletRequest(
			_portal.getHttpServletRequest(resourceRequest));

		long companyId = _portal.getCompanyId(request);

		String type = ParamUtil.getString(resourceRequest, "type");

		Criteria criteria = getCriteria(resourceRequest, type);

		int count = getSegmentsEntryClassPKsCount(
			companyId, criteria, type, _portal.getLocale(resourceRequest));

		return String.valueOf(count);
	}

	@Reference
	private Portal _portal;

	@Reference
	private SegmentsCriteriaContributorRegistry
		_segmentsCriteriaContributorRegistry;

	@Reference
	private SegmentsEntryService _segmentsEntryService;

	private ServiceTrackerMap<String, ODataRetriever> _serviceTrackerMap;

}