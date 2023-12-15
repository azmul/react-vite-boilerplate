import { api } from "@/api/apiHelper";
import { Endpoints } from "@/api/apiConst";
import * as RoleType from "./roleType";

/**
 * Get All Permissible Actions List
 * @returns {Permissible Actions}
 */
export const getActions = async (params: any): Promise<any> =>
  await api.get(Endpoints.ACTIONS, { params });

/**
 * Get Roles
 * @returns {Roles List Response}
 */
export const getRoles = async (params: any): Promise<any> =>
  await api.get(Endpoints.ROLES, { params });

/**
 * Create New Role
 * @returns {Role Response}
 */
export const createRole = async (
  role: RoleType.CreateRole,
  params?: any
): Promise<any> =>
  await api.post(Endpoints.ROLES, role, {
    params,
  });

/**
 * Get Role By Id
 * @returns {Role Response}
 */
export const getRoleById = async (id: string | number): Promise<any> =>
  await api.get(Endpoints.ROLES + `/${id}`);

/**
 * Add Action to Role
 * @returns {Action Response}
 */
export const addActionToRole = async (
  roleAction: RoleType.RoleAction,
  params?: any
): Promise<any> =>
  await api.put(Endpoints.ROLES + "/actions", roleAction, {
    params,
  });

/**
 * Delete Action to Role
 * @returns {Action Response}
 */
export const deleteActionToRole = async (
  roleAction: RoleType.RoleAction
): Promise<any> =>
  await api.delete(Endpoints.ROLES + "/actions", {
    data: roleAction,
  });

/**
 * Add Role to User
 * @returns {Role Response}
 */
export const addRoleToUser = async (
  role: RoleType.UserRole,
  params?: any
): Promise<any> =>
  await api.post(Endpoints.USER_ROLE, role, {
    params,
  });

/**
 * Get Role By User Id
 * @returns {User Response}
 */
export const getRoleByUserId = async (userId: string | number): Promise<any> =>
  await api.get(Endpoints.USER_ROLE + `/${userId}`);
