import { api } from "@/api/apiHelper";
import { Endpoints } from "@/api/apiConst";
import * as RfidUserType from "./rfidUserType";

/**
 * Create Rfid User
 * @returns {Auth Response}
 */
export const createRfidUser = async (
  user: RfidUserType.RfidUser,
  params?: any
): Promise<any> =>
  await api.post(Endpoints.RFID_USERS, user, {
    params,
  });

/**
 * Get Rfid Users List
 * @returns {Users List Response}
 */
export const getRfidUsers = async (
  params: any
): Promise<RfidUserType.RfidUser[]> =>
  await api.get(Endpoints.RFID_USERS, { params });

/**
 * Update Rfid User
 * @returns {Rfid User Response}
 */
export const updateRfidUser = async (
  user: RfidUserType.RfidUser,
  userId: string | number,
  params?: any
): Promise<RfidUserType.RfidUser> =>
  await api.patch(Endpoints.RFID_USERS + `/${userId}`, user, {
    params,
  });
