"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const schemas_1 = require("../../db/schemas");
const config_1 = require("../../config");
const data_1 = require("../../data");
const getStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sport: qSport } = req.query;
    if (!qSport) {
        res.status(400).send("A sport is required.");
        return;
    }
    const sport = qSport.toUpperCase();
    if (!config_1.SPORTS.includes(sport)) {
        res.status(400).send("Invalid sport.");
        return;
    }
    let stats = yield schemas_1.Stats.findOne({ sport });
    if (!stats ||
        new Date().getTime() - new Date(stats.updatedAt).getTime() >=
            config_1.STATS_EXPIRATION) {
        let newStats = {};
        switch (sport) {
            case "MLB": {
                newStats = yield (0, data_1.loadMLBStats)();
                break;
            }
            case "NBA": {
                newStats = yield (0, data_1.loadNBAStats)();
                break;
            }
            default:
                break;
        }
        stats = yield schemas_1.Stats.findOneAndUpdate({ sport }, { stats: newStats }, { returnOriginal: false, upsert: true });
    }
    res.send(stats);
});
exports.getStats = getStats;
//# sourceMappingURL=getStats.js.map