export const getLocalVal = (key: string) => {
  try {
    return window?.localStorage?.getItem(key);
  } catch (err) {
    console.log("err:", err);
    
  }
};

export const setLocalVal = (key: string, val: string) => {
  try {
    window?.localStorage?.setItem(key, val);
  } catch (err) {
    console.log("err:", err);
  }
};
