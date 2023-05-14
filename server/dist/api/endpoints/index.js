"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initEndpoints = void 0;
const getStats_1 = require("./getStats");
const initEndpoints = (app) => {
    app.get("/stats", getStats_1.getStats);
};
exports.initEndpoints = initEndpoints;
//# sourceMappingURL=index.js.map