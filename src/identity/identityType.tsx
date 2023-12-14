export type FieldType = {
  username?: string;
  password?: string;
};

export type JwtPayload = { roles: string[]; exp: number; sub: number; username: string};
