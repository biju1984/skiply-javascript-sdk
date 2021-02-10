const doLogin = require('../login');

test('user should not be able to login successfully',async()=>{
    const value =await doLogin('tom','jerry');
    expect(value).not.toEqual(true);

})
test('incorrect login',async()=>{
    const value = await doLogin('JoeBiden','jerry');
    expect(value).not.toEqual(true);

})
test('correct login',async ()=>{
    const value = await doLogin('JoeBiden','PresUSA');
    expect(value).toEqual(true);

})