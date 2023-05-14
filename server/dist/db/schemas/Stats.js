"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../../config");
const statsSchema = new mongoose_1.Schema({
    stats: mongoose_1.Schema.Types.Mixed,
    sport: {
        type: String,
        enum: config_1.SPORTS,
    },
}, { timestamps: true });
exports.Stats = (0, mongoose_1.model)("Stats", statsSchema);
//# sourceMappingURL=Stats.js.map