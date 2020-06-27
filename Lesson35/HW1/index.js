export const parseUser = (jSon) => {
    try {
        return JSON.parse(jSon);
    } catch {
        return null;
    }
};