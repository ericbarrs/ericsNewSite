export function sendMessage(data) {
	return function (dispatch) {
		dispatch(loading(true));
		fetch("/message", {
			method: "POST",
			cors: "no-cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((message) => {
				dispatch(loading(false));
				dispatch(messageSent(message));
			})
			.then(() => {
				setTimeout(() => {
					dispatch(messageSent(null));
				}, 10000);
			});
	};
}

function loading(bool) {
	return {
		type: "Loading",
		payload: bool,
	};
}

function messageSent(message) {
	return {
		type: "SENDMESSAGE",
		payload: message,
	};
}
