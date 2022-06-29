export type GenericDto = GenericRequestDto | GenericResponseDto;

export type GenericRequestDto = Request;

export type GenericResponseDto = Response;

export type GetAccountBalanceRequestDto = GenericRequestDto;

export type GetAccountBalanceResponseDto = GenericResponseDto;

export type PostCreateAccountRequestDto = GenericRequestDto;

export type PostCreateAccountResponseDto = GenericResponseDto;

export type PostRestoreAccountRequestDto = GenericRequestDto;

export type PostRestoreAccountResponseDto = GenericResponseDto;

export type GetFeeRequestDto = GenericRequestDto;

export type GetFeeResponseDto = GenericResponseDto;

export type GetHistoryRequestDto = GenericRequestDto;

export type GetHistoryResponseDto = GenericResponseDto;

export type GetTxInfoRequestDto = GenericRequestDto;

export type GetTxInfoResponseDto = GenericResponseDto;

export type PostSendTxRequestDto = GenericRequestDto;

export type PostSendTxResponseDto = GenericResponseDto;
