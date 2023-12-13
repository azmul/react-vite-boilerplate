import { api } from "@/api/apiHelper";
import { Endpoints } from "@/api/apiConst";

/**
 * Login User
 * @returns {Auth Response}
 */
export const loginUser = async (user: any, params?: any): Promise<any> =>
  await api.post(Endpoints.AUTH + "/login", user, {
    params,
  });
