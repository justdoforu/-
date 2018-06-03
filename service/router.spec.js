// const axios = require('axios');
// const {expect} = require("chai");

const app = require("./app");
const supertest = require("supertest");

function request(){
    return supertest(app.listen());
}

describe("后台接口测试",function(){
    it('test接口',(done) => {
        // axios.get('http://localhost:3000/test')
        //     .then(function (res) {
        //         expect(res.status).to.equal(200);
        //         if(res.data.data == 'hello world'){
        //             done();
        //         }else{
        //             done(new Error("结果不符合预期"));
        //         }
        //      })
        //     .catch(function(error){
        //         done(error);
        //     })

    })
})