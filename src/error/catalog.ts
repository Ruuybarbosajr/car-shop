enum ErrorType {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResponse = {
  message: string,
  status: number
};

type ErrorCatalog = {
  // [key in ErrorType]: ErrorResponse
  EntityNotFound: ErrorResponse;
  InvalidMongoId: ErrorResponse;
};

const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Object not found',
    status: 404,
  },
  InvalidMongoId: {
    message: 'Id must have 24 hexadecimal characters',
    status: 400,
  },
};

export {
  ErrorType,
  errorCatalog,
};