"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterPage;
const register_form_1 = require("@/components/auth/register-form");
function RegisterPage() {
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <register_form_1.RegisterForm />
    </div>);
}
