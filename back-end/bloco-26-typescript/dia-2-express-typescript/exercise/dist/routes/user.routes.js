"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = __importDefault(require("../controllers/user.controllers"));
const router = (0, express_1.Router)();
const userController = new user_controllers_1.default();
router.get('/user', userController.getAll);
exports.default = router;
//# sourceMappingURL=user.routes.js.map