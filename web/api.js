import { Client } from "@gadget-client/testing-all-in-one";

export const api = new Client({ environment: window.gadgetConfig.environment });
