import Api from "@services/api";

// Usually I setting up api config here, eg. token, session, other web services, etc.
export const useApi = () => {
  const api = Api.create();
  return {
    api,
  };
};
