type Result<T> = T | Error;

export type Type<T> = Result<T>;

export function isError<T>(result: Result<T>): result is Error {
  return result instanceof Error;
}

export function isSuccess<T>(result: Result<T>): result is T {
  return !isError(result);
}

type Thing = {
  name: string;
};

function doIt(): Type<Thing> {
  if (true) {
    return { name: 'Todd' };
  } else {
    return new Error('boom');
  }
}

const errorOrSuccess = doIt();

if (isError(errorOrSuccess)) {
  // now we can know that we have an error
  console.log(errorOrSuccess.message);
} else {
  console.log(errorOrSuccess.name);
}
