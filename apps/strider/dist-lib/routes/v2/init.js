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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const co_router_1 = __importDefault(require("co-router"));
const user_1 = __importDefault(require("../../models/user"));
const router = new co_router_1.default();
/*
 * POST /init
 *
 * Create a admin if none exist
 */
router.post('/', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.user) {
            return next();
        }
        const admins = yield user_1.default.count({ account_level: 1 });
        if (admins > 0) {
            return next();
        }
        // TODO: create admin, use same code as cli add-user
        res.status(201).json({ ok: true });
    });
});
exports.default = router;
//# sourceMappingURL=init.js.map