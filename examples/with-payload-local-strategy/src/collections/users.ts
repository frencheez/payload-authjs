import type { CollectionConfig } from "payload";

const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
  },
  auth: {
    /**
     * Enable API Key Strategy
     *
     * @see https://payloadcms.com/docs/authentication/api-keys
     */
    useAPIKey: true,
  },
  fields: [],
};

export default Users;
