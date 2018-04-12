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

package com.liferay.portal.workflow.kaleo.definition.internal.export.builder;

import com.liferay.portal.workflow.kaleo.definition.State;
import com.liferay.portal.workflow.kaleo.model.KaleoNode;

import org.osgi.service.component.annotations.Component;

/**
 * @author Michael C. Han
 */
@Component(
	immediate = true, property = "node.type=STATE", service = NodeBuilder.class
)
public class StateNodeBuilder
	extends BaseNodeBuilder<State> implements NodeBuilder {

	@Override
	protected State createNode(KaleoNode kaleoNode) {
		return new State(
			kaleoNode.getName(), kaleoNode.getDescription(),
			kaleoNode.isInitial());
	}

}