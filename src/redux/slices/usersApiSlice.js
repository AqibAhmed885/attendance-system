import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (userData) => ({
				url: `${USERS_URL}/login`, 
				method: "POST",
				body: userData,
			}),
		}),

		register: builder.mutation({
			query: (userData) => ({
				url: USERS_URL, // Use the full URL or relative path as defined in constants
				method: "POST",
				body: userData,
			}),
		}),

		logout: builder.mutation({
			query: (token) => ({
				url: `${USERS_URL}/logout`,
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
		profile: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/profile`,
				method: "PUT",
				body: data,
			}),
		}),
		getUsers: builder.query({
			query: () => ({
				url: USERS_URL,
			}),
			providesTags: ["User"],
			keepUnusedDataFor: 5,
		}),
		deleteUser: builder.mutation({
			query: (userId) => ({
				url: `${USERS_URL}/${userId}`,
				method: "DELETE",
			}),
		}),
		getUserDetails: builder.query({
			query: (id) => ({
				url: `${USERS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		getAllUserDetails: builder.query({
			query: (id) => ({
				url: `${USERS_URL}/all/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		getAllattendence: builder.query({
			query: (id) => ({
				url: `${USERS_URL}/all/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		updateUser: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/${data.userId}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const {
	useLoginMutation,
	useLogoutMutation,
	useRegisterMutation,
	useProfileMutation,
	useGetUsersQuery,
	useDeleteUserMutation,
	useUpdateUserMutation,
	useGetUserDetailsQuery,
	useGetAllUserDetailsQuery,
	useGetAllattendenceQuery
} = usersApiSlice;
