import dayjs from 'dayjs';
export function isSameDay(currentMessage, diffMessage) {
    if (!diffMessage || !diffMessage.createdAt)
        return false;
    const currentCreatedAt = dayjs(currentMessage.createdAt);
    const diffCreatedAt = dayjs(diffMessage.createdAt);
    if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid())
        return false;
    return currentCreatedAt.isSame(diffCreatedAt, 'day');
}
export function isSameUser(currentMessage, diffMessage) {
    return !!(diffMessage &&
        diffMessage.user &&
        currentMessage.user &&
        diffMessage.user._id === currentMessage.user._id);
}
//# sourceMappingURL=utils.js.map