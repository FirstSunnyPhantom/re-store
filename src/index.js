import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import ServiceBookstore from "./services/service-bookstore";
import {ServiceBookstoreProvider} from "./components/service-bookstore-context";

import store from "./store"

const container = document.getElementById('root');
const root = createRoot(container);
const serviceBookstore = new ServiceBookstore();

root.render(
	<Provider store={store}>
		<ErrorBoundary>
			<ServiceBookstoreProvider value={serviceBookstore}>
				<Router>
					<App />
				</Router>
			</ServiceBookstoreProvider>
		</ErrorBoundary>
	</Provider>
);