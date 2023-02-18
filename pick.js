const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux'
  };
function pick (object, expectedKey) {
  var result = {};
    const entries = Object.entries(object);
    for (const [key, value] of entries) {
      for (const values of expectedKey)
      if (key === values) {
        result[key] = value;
      }
    }
    return result;
}
  console.log(pick(data, ['user', 'os']));