function mooncakeSays(message) {
  let mooncake = '(o.o AAAAA)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
