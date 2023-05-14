import { connect } from "./db";
import { initApi } from "./api";

const server = async () => {
  await connect();

  initApi();
};

server();
