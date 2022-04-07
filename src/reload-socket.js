function connectWebSocket() {
    const webSocketServerAddress = "ws://localhost:8080";
    const retryTime = 2000;

    console.log(
        `Connecting to WebSocket Server in '${webSocketServerAddress}'...`
    );

    const ws = new WebSocket(webSocketServerAddress);

    ws.addEventListener("open", (event) => {
        console.log(
            `Connected to WebSocket Server in '${webSocketServerAddress}'.`
        );
    });

    ws.addEventListener("close", () => {
        console.log(
            `Connection close with socket '${webSocketServerAddress}'.`
        );

        console.log("Retrying...");

        setTimeout(() => {
            connectWebSocket();
        }, retryTime);
    });

    ws.addEventListener("message", function message(socketData) {
        const { data: rawData } = socketData;

        const data = JSON.parse(rawData);

        console.log(
            `receiving message from WebSocket Server in '${webSocketServerAddress}'...`
        );

        if (data.type === "webpack-reload") {
            console.log("Reloading page...");

            setTimeout(() => {
                document.location.reload(true);
            }, 100);
        }
    });
}

connectWebSocket();
