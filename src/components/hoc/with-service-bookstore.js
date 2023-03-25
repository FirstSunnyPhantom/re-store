import React from "react";
import {ServiceBookstoreConsumer} from "../service-bookstore-context";

const withServiceBookstore = () = (Wrapp
er) => {
	return (props) => {
		return (
			<ServiceBookstoreConsumer>
				{
					(serviceBookstore) => {
						return <Wrapper {...props} serviceBookstore={serviceBookstore}/>;
					}
				}
			</ServiceBookstoreConsumer>
		);
	}
}

export default withServiceBookstore;