// used for wrap the guard function arround a function call
function guard(name, ...options) {
    if (localStorage.getItem("cookie_accepted") === "true") {
        if (options) {
            return localStorage[name](...options);
        }
        return localStorage[name]();
    }
    console.log("storage access denied!");
}

// actual wrapper for the localStorage object
const wrapper = {
    count: 0,
    clear() {
        return guard("clear");
    },
    setItem(key, value) {
        return guard("setItem", key, value);
    },
    getItem(key, value) {
        return guard("getItem", key, value);
    },
    key(index) {
        return guard("key", index);
    },
    removeItem(key) {
        return guard("removeItem", key);
    }
};

const LocalStorageWrapper = {
    install(Vue) {
        Vue.prototype.$localStorage = wrapper;
    }
};

export default LocalStorageWrapper;
