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

package com.liferay.portal.tools.java.parser;

import com.liferay.petra.string.StringPool;
import com.liferay.portal.kernel.util.StringBundler;

import java.util.List;

/**
 * @author Hugo Huijser
 */
public class JavaVariableDefinition extends BaseJavaTerm {

	public JavaVariableDefinition(String name) {
		_name = new JavaSimpleValue(name);
	}

	public JavaExpression getAssignValueJavaExpression() {
		return _assignValueJavaExpression;
	}

	public void setAssignValueJavaExpression(
		JavaExpression assignValueJavaExpression) {

		_assignValueJavaExpression = assignValueJavaExpression;
	}

	public void setJavaAnnotations(List<JavaAnnotation> javaAnnotations) {
		_javaAnnotations = javaAnnotations;
	}

	public void setJavaType(JavaType javaType) {
		_javaType = javaType;
	}

	public void setModifiers(List<JavaSimpleValue> modifiers) {
		_modifiers = modifiers;
	}

	@Override
	public String toString(
		String indent, String prefix, String suffix, int maxLineLength) {

		StringBundler sb = new StringBundler();

		for (int i = 0; i < _javaAnnotations.size(); i++) {
			if (i == 0) {
				appendNewLine(
					sb, _javaAnnotations.get(i), indent, prefix, "",
					maxLineLength);

				prefix = StringPool.BLANK;
			}
			else {
				appendNewLine(
					sb, _javaAnnotations.get(i), indent, maxLineLength);
			}
		}

		if (sb.index() > 0) {
			sb.append("\n");
		}

		sb.append(indent);

		indent = "\t" + indent;

		if (!_modifiers.isEmpty()) {
			indent = append(
				sb, _modifiers, " ", indent, prefix, " ", maxLineLength);

			prefix = StringPool.BLANK;
		}

		if (_javaType != null) {
			indent = append(
				sb, _javaType, indent, prefix, " ", maxLineLength, false);

			prefix = StringPool.BLANK;
		}

		if (_assignValueJavaExpression != null) {
			indent = append(sb, _name, indent, prefix, " = ", maxLineLength);

			if (_assignValueJavaExpression instanceof JavaOperatorExpression) {
				JavaOperatorExpression javaOperatorExpression =
					(JavaOperatorExpression)_assignValueJavaExpression;

				JavaOperator javaOperator =
					javaOperatorExpression.getJavaOperator();

				if (javaOperator.equals(
						JavaOperator.LOGICAL_COMPLEMENT_OPERATOR)) {

					append(
						sb, _assignValueJavaExpression, indent, "", suffix,
						maxLineLength, false);
				}
				else {
					append(
						sb, _assignValueJavaExpression, indent, "", suffix,
						maxLineLength);
				}
			}
			else if (_assignValueJavaExpression instanceof JavaTypeCast) {
				JavaTypeCast javaTypeCast =
					(JavaTypeCast)_assignValueJavaExpression;

				if (javaTypeCast.getValueJavaExpression() instanceof
						JavaOperatorExpression) {

					append(
						sb, _assignValueJavaExpression, indent, "", suffix,
						maxLineLength);
				}
				else {
					append(
						sb, _assignValueJavaExpression, indent, "", suffix,
						maxLineLength, false);
				}
			}
			else {
				append(
					sb, _assignValueJavaExpression, indent, "", suffix,
					maxLineLength, false);
			}
		}
		else {
			append(sb, _name, indent, "", suffix, maxLineLength);
		}

		return sb.toString();
	}

	private JavaExpression _assignValueJavaExpression;
	private List<JavaAnnotation> _javaAnnotations;
	private JavaType _javaType;
	private List<JavaSimpleValue> _modifiers;
	private final JavaSimpleValue _name;

}