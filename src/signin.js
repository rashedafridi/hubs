import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import registerTelemetry from "./telemetry";
import Store from "./storage/store";
import "./utils/theme";
import { lang, messages } from "./utils/i18n";
import { SDK } from "./sdk/SDK";
import { SDKContext } from "./react-components/sdk/SDKContext";
import { SignInPage } from "./react-components/auth/SignInPage";

registerTelemetry("/signin", "Hubs Sign In Page");

const store = new Store();
window.APP = { store };
const sdk = new SDK(store);

function Root() {
  return (
    <IntlProvider locale={lang} messages={messages}>
      <SDKContext.Provider value={sdk}>
        <SignInPage />
      </SDKContext.Provider>
    </IntlProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById("ui-root"));