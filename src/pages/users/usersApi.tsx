import { api } from "@/api/apiHelper";
import { Endpoints } from "@/api/apiConst";
import * as UserType from "./userType";

/**
 * Get Profile
 * @returns {Profile Response}
 */
export const getProfile = async (): Promise<any> =>
  await api.get(Endpoints.USERS + "/me");

/**
 * Get Users List
 * @returns {Users List Response}
 */
export const getUsers = async (params: any): Promise<any> =>
  await api.get(Endpoints.USERS, { params });

/**
 * Get User By Id
 * @returns {User Response}
 */
export const getUserById = async (id: string | number): Promise<any> =>
  await api.get(Endpoints.USERS + `/${id}`);

/**
 * Update User
 * @returns {User Response}
 */
export const updateUser = async (
  user: UserType.UpdateUser,
  userId: string,
  params?: any
): Promise<any> =>
  await api.patch(Endpoints.USERS + `/${userId}`, user, {
    params,
  });
