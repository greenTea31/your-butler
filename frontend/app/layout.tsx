import type { Metadata } from "next";
import Recoil from "@/recoil";
import ReactQuery from "@/react-query";
import RootStyleRegistry from "@/lib/registry";
import AuthSession from "@/Oauth/AuthSession";
import { GlobalCssProvider } from "@/styles/GlobalCssProvider";
import React from "react";


export const metadata: Metadata = {
  title: "당신의집사",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></script>
        <Recoil>
          <ReactQuery>
            <AuthSession>
              <RootStyleRegistry>
                <GlobalCssProvider>
                  {children}
                </GlobalCssProvider>
              </RootStyleRegistry>
            </AuthSession>
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  );
};

export default RootLayout;
