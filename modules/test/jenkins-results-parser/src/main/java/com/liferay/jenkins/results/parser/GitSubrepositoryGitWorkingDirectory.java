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

package com.liferay.jenkins.results.parser;

import java.io.IOException;

/**
 * @author Michael Hashimoto
 * @author Peter Yoo
 */
public class GitSubrepositoryGitWorkingDirectory extends GitWorkingDirectory {

	protected GitSubrepositoryGitWorkingDirectory(
			String upstreamBranchName, String workingDirectoryPath)
		throws IOException {

		super(upstreamBranchName, workingDirectoryPath);
	}

	protected GitSubrepositoryGitWorkingDirectory(
			String upstreamBranchName, String workingDirectoryPath,
			String gitRepositoryName)
		throws IOException {

		super(upstreamBranchName, workingDirectoryPath, gitRepositoryName);
	}

	@Override
	protected void setUpstreamGitRemoteToPrivateGitRepository() {
		GitRemote upstreamGitRemote = getUpstreamGitRemote();

		String remoteURL = upstreamGitRemote.getRemoteURL();

		if (!remoteURL.contains("-private")) {
			remoteURL = remoteURL.replace(".git", "-private.git");
		}

		addGitRemote(true, "upstream-temp", remoteURL);
	}

	@Override
	protected void setUpstreamGitRemoteToPublicGitRepository() {
		GitRemote upstreamGitRemote = getUpstreamGitRemote();

		String remoteURL = upstreamGitRemote.getRemoteURL();

		if (remoteURL.contains("-private")) {
			remoteURL = remoteURL.replace("-private", "");
		}

		addGitRemote(true, "upstream-temp", remoteURL);
	}

}