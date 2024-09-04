import type { NextAuthConfig } from "next-auth";
import type { CollectionSlug } from "payload";

export interface AuthjsPluginConfig {
  /**
   * Enable or disable plugin
   *
   * @default true
   */
  enabled?: boolean;

  /**
   * The slug of the collection that contains the users
   *
   * @default "users"
   */
  userCollectionSlug?: CollectionSlug;

  /**
   * Auth.js configuration
   *
   * @example
   * import { config } from "./auth.config";
   *
   * authjsPlugin({ authjsConfig: config })
   */
  authjsConfig: NextAuthConfig;
}

export interface User {
  id: string;
  email: string;
  name?: string | null;
  image?: string | null;
  emailVerified?: string | null;
  accounts?: Account[] | null;
  sessions?: Session[] | null;
  verificationTokens?: VerificationToken[] | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Account {
  id?: string | null;
  provider: string;
  providerAccountId: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Session {
  id?: string | null;
  sessionToken: string;
  expires: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface VerificationToken {
  id?: string | null;
  token: string;
  expires: string;
}
