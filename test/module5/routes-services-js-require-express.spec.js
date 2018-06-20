describe('Require Express and Create Router - services', () => {
  it('require express and create app const @app-require-express-const-app', () => {
    assert(typeof app === 'function', '`app` const has not been created in `app.js`.');
    let express;
    let router;
    try {
      express = servicesModule.__get__('express');
      router = servicesModule.__get__('router');
    } catch (err) {
      assert(express !== undefined, 'Has the `express` framework been required in `src/routes/services.js`?');
      assert(router !== undefined, 'Has the `express` router been added to `src/routes/services.js`?');
    }
    assert(typeof router === 'function', 'Has the router const been set to the express router function?');
  });
});