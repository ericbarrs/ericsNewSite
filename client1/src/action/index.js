export function sendMessage(data) {
  return function(dispatch) {
    fetch("/message", {
      method: "POST",
      cors: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(message => dispatch(messageSent(message)));
  };
}

function messageSent(message) {
  return {
    type: "SENDMESSAGE",
    payload: message
  };
}
