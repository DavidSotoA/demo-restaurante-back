"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require('dotenv').config();
app_1.default.listen(process.env.PORT, () => {
    console.log('Express server listening on port ' + process.env.PORT);
});
//# sourceMappingURL=server.js.map