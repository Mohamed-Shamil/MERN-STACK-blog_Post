"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server = (app) => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`server running successfully on the PORT ${PORT}`);
    });
};
exports.default = server;
