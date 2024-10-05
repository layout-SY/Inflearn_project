window.onload = function () {
	fetch('https://api.github.com/rate_limit', GitHub_API_Token())
		.then((response) => response.json())
		.then((data) => {
			const remaining = data.rate.remaining;
			const resetTime = new Date(data.rate.reset * 1000);
			console.log(`남은 요청 횟수: ${remaining}`);
			console.log(`리셋 시간: ${resetTime}`);
		});

	function GitHub_API_Token() {
		return {
			headers: {
				Authorization: `token github_token`,
			},
		};
	}

	async function searchUserGitHub(username) {
		const profileURL = `https://api.github.com/users/${username}`;
		const repoURL = `https://api.github.com/users/${username}/repos`;

		try {
			const [profileResponse, repoResponse] = await Promise.all([
				fetch(profileURL, GitHub_API_Token()),
				fetch(repoURL, GitHub_API_Token()),
			]);
			const profileData = await profileResponse.json();
			const repoData = await repoResponse.json();

			console.log(profileData);

			if (profileData.avatar_url) {
				document.querySelector('.profile-img').src = profileData.avatar_url;
			}

			document.getElementById('public-repo').innerHTML = `Public Repos: ${profileData.public_repos || 'N/A'}`;
			document.getElementById('public-Gists').innerHTML = `Public Gists: ${profileData.public_gists || 'N/A'}`;
			document.getElementById('Followers').innerHTML = `Followers: ${profileData.followers || 'N/A'}`;
			document.getElementById('Following').innerHTML = `Following: ${profileData.following || 'N/A'}`;
			document.getElementById('company').innerHTML = `<strong>Company:</strong> ${profileData.company || 'N/A'}`;
			document.getElementById('email-url').href = profileData.email ? `mailto:${profileData.email}` : '#';
			document.getElementById('location').innerHTML = `<strong>Location:</strong> ${
				profileData.location || 'N/A'
			}`;
			document.getElementById('members').innerHTML = `<strong>Member Since:</strong> ${
				new Date(profileData.created_at).toLocaleDateString() || 'N/A'
			}`;

			let repoList = document.querySelector('.repoList');
			repoList.innerHTML = '';
			repoData.forEach((repo) => {
				let repoItem = document.createElement('li');
				repoItem.classList.add('repoItem');
				repoItem.classList.add('flex');
				repoItem.innerHTML = `
					<a target="_blank" href="${repo.html_url}">${repo.name || 'N/A'}</a>
					<ul class="tag_list flex">
						<li>Stars: ${repo.stargazers_count || 0}</li>
						<li>Watchers: ${repo.watchers_count || 0}</li>
						<li>Forks: ${repo.forks_count || 0}</li>
					</ul>
				`;
				repoList.appendChild(repoItem);
			});
		} catch (e) {
			console.error(`Error: ${e}`);
		}
	}

	let searchUser = document.getElementById('searchUser');
	searchUser.addEventListener('input', function (e) {
		if (searchUser.value) {
			searchUserGitHub(searchUser.value);
		}
	});
};
