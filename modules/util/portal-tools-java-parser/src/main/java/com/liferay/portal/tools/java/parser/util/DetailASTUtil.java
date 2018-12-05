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

package com.liferay.portal.tools.java.parser.util;

import com.liferay.portal.kernel.util.ArrayUtil;
import com.liferay.portal.tools.java.parser.Position;

import com.puppycrawl.tools.checkstyle.api.DetailAST;
import com.puppycrawl.tools.checkstyle.api.TokenTypes;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Hugo Huijser
 */
public class DetailASTUtil {

	public static final int ALL_TYPES = -1;

	public static List<DetailAST> getAllChildTokens(
		DetailAST detailAST, boolean recursive, int... tokenTypes) {

		return _getAllChildTokens(detailAST, recursive, null, tokenTypes);
	}

	public static DetailAST getClosingDetailAST(DetailAST detailAST) {
		DetailAST slistDetailAST = detailAST.findFirstToken(TokenTypes.SLIST);

		if (slistDetailAST != null) {
			return slistDetailAST;
		}

		DetailAST objBlockDetailAST = detailAST.findFirstToken(
			TokenTypes.OBJBLOCK);

		if (objBlockDetailAST != null) {
			return objBlockDetailAST;
		}

		DetailAST semiDetailAST = detailAST.findFirstToken(TokenTypes.SEMI);

		if (semiDetailAST != null) {
			return semiDetailAST;
		}

		DetailAST emptyStatDetailAST = detailAST.findFirstToken(
			TokenTypes.EMPTY_STAT);

		if (emptyStatDetailAST != null) {
			return emptyStatDetailAST;
		}

		if (detailAST.getType() == TokenTypes.LITERAL_ELSE) {
			return getClosingDetailAST(detailAST.getFirstChild());
		}

		DetailAST nextSiblingDetailAST = detailAST.getNextSibling();

		if (nextSiblingDetailAST.getType() == TokenTypes.SEMI) {
			return nextSiblingDetailAST;
		}

		return null;
	}

	public static Position getEndPosition(DetailAST detailAST) {
		if (detailAST.getType() == TokenTypes.LABELED_STAT) {
			detailAST = detailAST.getFirstChild();

			detailAST = detailAST.getNextSibling();
		}

		DetailAST closingDetailAST = getClosingDetailAST(detailAST);

		if (closingDetailAST != null) {
			return new Position(
				closingDetailAST.getLineNo(), closingDetailAST.getColumnNo());
		}

		String s = detailAST.getText();

		Position endPosition = new Position(
			detailAST.getLineNo(), detailAST.getColumnNo() + s.length());

		for (DetailAST childDetailAST :
				getAllChildTokens(detailAST, true, ALL_TYPES)) {

			s = childDetailAST.getText();

			Position childDetailASTEndPosition = new Position(
				childDetailAST.getLineNo(),
				childDetailAST.getColumnNo() + s.length());

			if (childDetailASTEndPosition.compareTo(endPosition) > 0) {
				endPosition = childDetailASTEndPosition;
			}
		}

		return endPosition;
	}

	public static Position getStartPosition(DetailAST detailAST) {
		Position startPosition = new Position(
			detailAST.getLineNo(), detailAST.getColumnNo());

		for (DetailAST childDetailAST :
				getAllChildTokens(detailAST, true, ALL_TYPES)) {

			Position childDetailASTStartPosition = new Position(
				childDetailAST.getLineNo(), childDetailAST.getColumnNo());

			if (childDetailASTStartPosition.compareTo(startPosition) < 0) {
				startPosition = childDetailASTStartPosition;
			}
		}

		return startPosition;
	}

	public static boolean hasParentWithTokenType(
		DetailAST detailAST, int... tokenTypes) {

		DetailAST parentDetailAST = detailAST.getParent();

		while (parentDetailAST != null) {
			if (ArrayUtil.contains(tokenTypes, parentDetailAST.getType())) {
				return true;
			}

			parentDetailAST = parentDetailAST.getParent();
		}

		return false;
	}

	private static List<DetailAST> _getAllChildTokens(
		DetailAST detailAST, boolean recursive, List<DetailAST> list,
		int... tokenTypes) {

		if (list == null) {
			list = new ArrayList<>();
		}

		DetailAST childDetailAST = detailAST.getFirstChild();

		while (childDetailAST != null) {
			if (ArrayUtil.contains(tokenTypes, childDetailAST.getType()) ||
				ArrayUtil.contains(tokenTypes, ALL_TYPES)) {

				list.add(childDetailAST);
			}

			if (recursive) {
				list = _getAllChildTokens(
					childDetailAST, recursive, list, tokenTypes);
			}

			childDetailAST = childDetailAST.getNextSibling();
		}

		return list;
	}

}