"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApi = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("../config");
const endpoints_1 = require("./endpoints");
const app = (0, express_1.default)();
const initApi = () => {
    (0, endpoints_1.initEndpoints)(app);
    app.use((0, cors_1.default)());
    app.listen(config_1.PORT, () => {
        console.log(`Stats API listening on port ${config_1.PORT}`);
    });
};
exports.initApi = initApi;
//# sourceMappingURL=index.js.map