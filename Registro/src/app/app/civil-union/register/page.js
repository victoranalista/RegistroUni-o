"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CivilUnionRegisterPage;
const civil_union_form_1 = require("@/components/civil-union/civil-union-form");
function CivilUnionRegisterPage() {
    return (<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <civil_union_form_1.CivilUnionForm />
    </div>);
}
