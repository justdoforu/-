describe("测试函数API",function(){
    it("+1测试的应用",function(){
        expect(window.test(1)).toBe(1);
        expect(window.test(2)).toBe(3);
    });
})