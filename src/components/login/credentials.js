export const HOST = "http://18.224.170.154:8082";

export const TOKENKEY = "json-token";

export const CONFIG = {
    headers: {
        'x-access-token': localStorage.getItem(TOKENKEY)
    }
};

export default { HOST, TOKENKEY, CONFIG };

