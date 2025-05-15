import { useEffect, ReactNode } from "react";
import useSensorsStore from "../../stores/SensorsStore.ts";

interface RequireWebSocketProps {
    children: ReactNode;
}

const RequireWebSocket = ({ children }: RequireWebSocketProps) => {
    const {startWebSocketConnection} = useSensorsStore();

    useEffect(() => {
        startWebSocketConnection();

        /*
        return (() => {
            closeWebSocketConnection();
        })
         */
    })


    return children;
};

export default RequireWebSocket;