const public_fun = {
    isEmptyObject(obj) {
        for (var key in obj) {
            //返回false，不为空对象
            return false;
        }
        return true; //返回true，为空对象
    }
}

export default public_fun;