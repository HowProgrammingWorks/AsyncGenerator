'use strict';

async function* ids(...args) {
  let i = 0;
  while (args.length > i) {
    const id = args[i++];
    if (id === undefined) return;
    yield id;
  }
}

const main = async () => {
  const id = ids(1011, 1078, 1292, 1731, undefined, 1501, 1550);
  let val;
  do {
    val = await id.next();
    console.log({ val });
  } while (!val.done);
};

main();
