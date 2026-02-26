import { io } from 'socket.io-client';
import { SOCKET_URL, STORAGE_KEYS } from '../config/constants';

let socket = null;

export const getSocket = () => {
    if (!socket) {
        socket = io(SOCKET_URL, {
            auth: {
                token: localStorage.getItem(STORAGE_KEYS.TOKEN),
            },
            autoConnect: false,
        });
    }
    return socket;
};

export const connectSocket = () => {
    const s = getSocket();
    if (!s.connected) s.connect();
    return s;
};

export const disconnectSocket = () => {
    if (socket?.connected) socket.disconnect();
};
