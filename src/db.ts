import knex from "knex";

import { config } from "./config";

export default knex(require("../knexfile")[config.env]);

