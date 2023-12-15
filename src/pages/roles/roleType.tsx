export interface CreateRole {
  name: string;
  note: string;
  type: string;
}

export interface RoleAction {
  roleId: number;
  actionId: number;
}
export interface UserRole {
  userId: number;
  roleId: number;
  ruleLevel: string;
  resourceId: number;
}
