import { useEffect, ReactNode } from "react";
import useSensorsStore from "../../stores/SensorsStore.ts";

interface RequireWebSocketProps {
    children: ReactNode;
}

const RequireWebSocket = ({ children }: RequireWebSocketProps) => {
    const {startWebSocketConnection, closeWebSocketConnection} = useSensorsStore();

    useEffect(() => {
        startWebSocketConnection();

        return () => {
            closeWebSocketConnection();
        };
    }, [closeWebSocketConnection, startWebSocketConnection]);


    return children;
};

export default RequireWebSocket;