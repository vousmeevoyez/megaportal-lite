import useSWR from 'swr';

import { GET_TEAM_MEMBER_QUERY_BY_EMAIL } from 'graphql/teamMembers.graphql';
import { fetchData } from 'libs';
import { User } from 'types/user';

export const useUserQuery = () => {
	const { data: dataUser } = useSWR<{ users: User[] }>(
		''
			? [
					GET_TEAM_MEMBER_QUERY_BY_EMAIL,
					{
						email: '',
					},
			  ]
			: null,
		fetchData
	);
	const user = dataUser?.users?.[0];
	return user;
};
