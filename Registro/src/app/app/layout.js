"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
require("./globals.css");
const google_1 = require("next/font/google");
const theme_provider_1 = require("@/components/theme-provider");
const toaster_1 = require("@/components/ui/toaster");
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
exports.metadata = {
    title: 'Sistema de União Estável',
    description: 'Sistema de registro e gerenciamento de uniões estáveis',
};
function RootLayout({ children, }) {
    return (<html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <theme_provider_1.ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <toaster_1.Toaster />
        </theme_provider_1.ThemeProvider>
      </body>
    </html>);
}
