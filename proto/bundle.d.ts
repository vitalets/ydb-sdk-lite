import * as $protobuf from "protobufjs";
/** Namespace Ydb. */
export namespace Ydb {

    /** Namespace Table. */
    namespace Table {

        /** Namespace V1. */
        namespace V1 {

            /** Represents a TableService */
            class TableService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new TableService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new TableService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TableService;

                /**
                 * Calls CreateSession.
                 * @param request CreateSessionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateSessionResponse
                 */
                public createSession(request: Ydb.Table.ICreateSessionRequest, callback: Ydb.Table.V1.TableService.CreateSessionCallback): void;

                /**
                 * Calls CreateSession.
                 * @param request CreateSessionRequest message or plain object
                 * @returns Promise
                 */
                public createSession(request: Ydb.Table.ICreateSessionRequest): Promise<Ydb.Table.CreateSessionResponse>;

                /**
                 * Calls DeleteSession.
                 * @param request DeleteSessionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteSessionResponse
                 */
                public deleteSession(request: Ydb.Table.IDeleteSessionRequest, callback: Ydb.Table.V1.TableService.DeleteSessionCallback): void;

                /**
                 * Calls DeleteSession.
                 * @param request DeleteSessionRequest message or plain object
                 * @returns Promise
                 */
                public deleteSession(request: Ydb.Table.IDeleteSessionRequest): Promise<Ydb.Table.DeleteSessionResponse>;

                /**
                 * Calls KeepAlive.
                 * @param request KeepAliveRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and KeepAliveResponse
                 */
                public keepAlive(request: Ydb.Table.IKeepAliveRequest, callback: Ydb.Table.V1.TableService.KeepAliveCallback): void;

                /**
                 * Calls KeepAlive.
                 * @param request KeepAliveRequest message or plain object
                 * @returns Promise
                 */
                public keepAlive(request: Ydb.Table.IKeepAliveRequest): Promise<Ydb.Table.KeepAliveResponse>;

                /**
                 * Calls CreateTable.
                 * @param request CreateTableRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateTableResponse
                 */
                public createTable(request: Ydb.Table.ICreateTableRequest, callback: Ydb.Table.V1.TableService.CreateTableCallback): void;

                /**
                 * Calls CreateTable.
                 * @param request CreateTableRequest message or plain object
                 * @returns Promise
                 */
                public createTable(request: Ydb.Table.ICreateTableRequest): Promise<Ydb.Table.CreateTableResponse>;

                /**
                 * Calls DropTable.
                 * @param request DropTableRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DropTableResponse
                 */
                public dropTable(request: Ydb.Table.IDropTableRequest, callback: Ydb.Table.V1.TableService.DropTableCallback): void;

                /**
                 * Calls DropTable.
                 * @param request DropTableRequest message or plain object
                 * @returns Promise
                 */
                public dropTable(request: Ydb.Table.IDropTableRequest): Promise<Ydb.Table.DropTableResponse>;

                /**
                 * Calls AlterTable.
                 * @param request AlterTableRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and AlterTableResponse
                 */
                public alterTable(request: Ydb.Table.IAlterTableRequest, callback: Ydb.Table.V1.TableService.AlterTableCallback): void;

                /**
                 * Calls AlterTable.
                 * @param request AlterTableRequest message or plain object
                 * @returns Promise
                 */
                public alterTable(request: Ydb.Table.IAlterTableRequest): Promise<Ydb.Table.AlterTableResponse>;

                /**
                 * Calls CopyTable.
                 * @param request CopyTableRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CopyTableResponse
                 */
                public copyTable(request: Ydb.Table.ICopyTableRequest, callback: Ydb.Table.V1.TableService.CopyTableCallback): void;

                /**
                 * Calls CopyTable.
                 * @param request CopyTableRequest message or plain object
                 * @returns Promise
                 */
                public copyTable(request: Ydb.Table.ICopyTableRequest): Promise<Ydb.Table.CopyTableResponse>;

                /**
                 * Calls CopyTables.
                 * @param request CopyTablesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CopyTablesResponse
                 */
                public copyTables(request: Ydb.Table.ICopyTablesRequest, callback: Ydb.Table.V1.TableService.CopyTablesCallback): void;

                /**
                 * Calls CopyTables.
                 * @param request CopyTablesRequest message or plain object
                 * @returns Promise
                 */
                public copyTables(request: Ydb.Table.ICopyTablesRequest): Promise<Ydb.Table.CopyTablesResponse>;

                /**
                 * Calls RenameTables.
                 * @param request RenameTablesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and RenameTablesResponse
                 */
                public renameTables(request: Ydb.Table.IRenameTablesRequest, callback: Ydb.Table.V1.TableService.RenameTablesCallback): void;

                /**
                 * Calls RenameTables.
                 * @param request RenameTablesRequest message or plain object
                 * @returns Promise
                 */
                public renameTables(request: Ydb.Table.IRenameTablesRequest): Promise<Ydb.Table.RenameTablesResponse>;

                /**
                 * Calls DescribeTable.
                 * @param request DescribeTableRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DescribeTableResponse
                 */
                public describeTable(request: Ydb.Table.IDescribeTableRequest, callback: Ydb.Table.V1.TableService.DescribeTableCallback): void;

                /**
                 * Calls DescribeTable.
                 * @param request DescribeTableRequest message or plain object
                 * @returns Promise
                 */
                public describeTable(request: Ydb.Table.IDescribeTableRequest): Promise<Ydb.Table.DescribeTableResponse>;

                /**
                 * Calls ExplainDataQuery.
                 * @param request ExplainDataQueryRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ExplainDataQueryResponse
                 */
                public explainDataQuery(request: Ydb.Table.IExplainDataQueryRequest, callback: Ydb.Table.V1.TableService.ExplainDataQueryCallback): void;

                /**
                 * Calls ExplainDataQuery.
                 * @param request ExplainDataQueryRequest message or plain object
                 * @returns Promise
                 */
                public explainDataQuery(request: Ydb.Table.IExplainDataQueryRequest): Promise<Ydb.Table.ExplainDataQueryResponse>;

                /**
                 * Calls PrepareDataQuery.
                 * @param request PrepareDataQueryRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and PrepareDataQueryResponse
                 */
                public prepareDataQuery(request: Ydb.Table.IPrepareDataQueryRequest, callback: Ydb.Table.V1.TableService.PrepareDataQueryCallback): void;

                /**
                 * Calls PrepareDataQuery.
                 * @param request PrepareDataQueryRequest message or plain object
                 * @returns Promise
                 */
                public prepareDataQuery(request: Ydb.Table.IPrepareDataQueryRequest): Promise<Ydb.Table.PrepareDataQueryResponse>;

                /**
                 * Calls ExecuteDataQuery.
                 * @param request ExecuteDataQueryRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ExecuteDataQueryResponse
                 */
                public executeDataQuery(request: Ydb.Table.IExecuteDataQueryRequest, callback: Ydb.Table.V1.TableService.ExecuteDataQueryCallback): void;

                /**
                 * Calls ExecuteDataQuery.
                 * @param request ExecuteDataQueryRequest message or plain object
                 * @returns Promise
                 */
                public executeDataQuery(request: Ydb.Table.IExecuteDataQueryRequest): Promise<Ydb.Table.ExecuteDataQueryResponse>;

                /**
                 * Calls ExecuteSchemeQuery.
                 * @param request ExecuteSchemeQueryRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ExecuteSchemeQueryResponse
                 */
                public executeSchemeQuery(request: Ydb.Table.IExecuteSchemeQueryRequest, callback: Ydb.Table.V1.TableService.ExecuteSchemeQueryCallback): void;

                /**
                 * Calls ExecuteSchemeQuery.
                 * @param request ExecuteSchemeQueryRequest message or plain object
                 * @returns Promise
                 */
                public executeSchemeQuery(request: Ydb.Table.IExecuteSchemeQueryRequest): Promise<Ydb.Table.ExecuteSchemeQueryResponse>;

                /**
                 * Calls BeginTransaction.
                 * @param request BeginTransactionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and BeginTransactionResponse
                 */
                public beginTransaction(request: Ydb.Table.IBeginTransactionRequest, callback: Ydb.Table.V1.TableService.BeginTransactionCallback): void;

                /**
                 * Calls BeginTransaction.
                 * @param request BeginTransactionRequest message or plain object
                 * @returns Promise
                 */
                public beginTransaction(request: Ydb.Table.IBeginTransactionRequest): Promise<Ydb.Table.BeginTransactionResponse>;

                /**
                 * Calls CommitTransaction.
                 * @param request CommitTransactionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CommitTransactionResponse
                 */
                public commitTransaction(request: Ydb.Table.ICommitTransactionRequest, callback: Ydb.Table.V1.TableService.CommitTransactionCallback): void;

                /**
                 * Calls CommitTransaction.
                 * @param request CommitTransactionRequest message or plain object
                 * @returns Promise
                 */
                public commitTransaction(request: Ydb.Table.ICommitTransactionRequest): Promise<Ydb.Table.CommitTransactionResponse>;

                /**
                 * Calls RollbackTransaction.
                 * @param request RollbackTransactionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and RollbackTransactionResponse
                 */
                public rollbackTransaction(request: Ydb.Table.IRollbackTransactionRequest, callback: Ydb.Table.V1.TableService.RollbackTransactionCallback): void;

                /**
                 * Calls RollbackTransaction.
                 * @param request RollbackTransactionRequest message or plain object
                 * @returns Promise
                 */
                public rollbackTransaction(request: Ydb.Table.IRollbackTransactionRequest): Promise<Ydb.Table.RollbackTransactionResponse>;

                /**
                 * Calls DescribeTableOptions.
                 * @param request DescribeTableOptionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DescribeTableOptionsResponse
                 */
                public describeTableOptions(request: Ydb.Table.IDescribeTableOptionsRequest, callback: Ydb.Table.V1.TableService.DescribeTableOptionsCallback): void;

                /**
                 * Calls DescribeTableOptions.
                 * @param request DescribeTableOptionsRequest message or plain object
                 * @returns Promise
                 */
                public describeTableOptions(request: Ydb.Table.IDescribeTableOptionsRequest): Promise<Ydb.Table.DescribeTableOptionsResponse>;

                /**
                 * Calls StreamReadTable.
                 * @param request ReadTableRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ReadTableResponse
                 */
                public streamReadTable(request: Ydb.Table.IReadTableRequest, callback: Ydb.Table.V1.TableService.StreamReadTableCallback): void;

                /**
                 * Calls StreamReadTable.
                 * @param request ReadTableRequest message or plain object
                 * @returns Promise
                 */
                public streamReadTable(request: Ydb.Table.IReadTableRequest): Promise<Ydb.Table.ReadTableResponse>;

                /**
                 * Calls BulkUpsert.
                 * @param request BulkUpsertRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and BulkUpsertResponse
                 */
                public bulkUpsert(request: Ydb.Table.IBulkUpsertRequest, callback: Ydb.Table.V1.TableService.BulkUpsertCallback): void;

                /**
                 * Calls BulkUpsert.
                 * @param request BulkUpsertRequest message or plain object
                 * @returns Promise
                 */
                public bulkUpsert(request: Ydb.Table.IBulkUpsertRequest): Promise<Ydb.Table.BulkUpsertResponse>;

                /**
                 * Calls StreamExecuteScanQuery.
                 * @param request ExecuteScanQueryRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ExecuteScanQueryPartialResponse
                 */
                public streamExecuteScanQuery(request: Ydb.Table.IExecuteScanQueryRequest, callback: Ydb.Table.V1.TableService.StreamExecuteScanQueryCallback): void;

                /**
                 * Calls StreamExecuteScanQuery.
                 * @param request ExecuteScanQueryRequest message or plain object
                 * @returns Promise
                 */
                public streamExecuteScanQuery(request: Ydb.Table.IExecuteScanQueryRequest): Promise<Ydb.Table.ExecuteScanQueryPartialResponse>;
            }

            namespace TableService {

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#createSession}.
                 * @param error Error, if any
                 * @param [response] CreateSessionResponse
                 */
                type CreateSessionCallback = (error: (Error|null), response?: Ydb.Table.CreateSessionResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#deleteSession}.
                 * @param error Error, if any
                 * @param [response] DeleteSessionResponse
                 */
                type DeleteSessionCallback = (error: (Error|null), response?: Ydb.Table.DeleteSessionResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#keepAlive}.
                 * @param error Error, if any
                 * @param [response] KeepAliveResponse
                 */
                type KeepAliveCallback = (error: (Error|null), response?: Ydb.Table.KeepAliveResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#createTable}.
                 * @param error Error, if any
                 * @param [response] CreateTableResponse
                 */
                type CreateTableCallback = (error: (Error|null), response?: Ydb.Table.CreateTableResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#dropTable}.
                 * @param error Error, if any
                 * @param [response] DropTableResponse
                 */
                type DropTableCallback = (error: (Error|null), response?: Ydb.Table.DropTableResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#alterTable}.
                 * @param error Error, if any
                 * @param [response] AlterTableResponse
                 */
                type AlterTableCallback = (error: (Error|null), response?: Ydb.Table.AlterTableResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#copyTable}.
                 * @param error Error, if any
                 * @param [response] CopyTableResponse
                 */
                type CopyTableCallback = (error: (Error|null), response?: Ydb.Table.CopyTableResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#copyTables}.
                 * @param error Error, if any
                 * @param [response] CopyTablesResponse
                 */
                type CopyTablesCallback = (error: (Error|null), response?: Ydb.Table.CopyTablesResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#renameTables}.
                 * @param error Error, if any
                 * @param [response] RenameTablesResponse
                 */
                type RenameTablesCallback = (error: (Error|null), response?: Ydb.Table.RenameTablesResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#describeTable}.
                 * @param error Error, if any
                 * @param [response] DescribeTableResponse
                 */
                type DescribeTableCallback = (error: (Error|null), response?: Ydb.Table.DescribeTableResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#explainDataQuery}.
                 * @param error Error, if any
                 * @param [response] ExplainDataQueryResponse
                 */
                type ExplainDataQueryCallback = (error: (Error|null), response?: Ydb.Table.ExplainDataQueryResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#prepareDataQuery}.
                 * @param error Error, if any
                 * @param [response] PrepareDataQueryResponse
                 */
                type PrepareDataQueryCallback = (error: (Error|null), response?: Ydb.Table.PrepareDataQueryResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#executeDataQuery}.
                 * @param error Error, if any
                 * @param [response] ExecuteDataQueryResponse
                 */
                type ExecuteDataQueryCallback = (error: (Error|null), response?: Ydb.Table.ExecuteDataQueryResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#executeSchemeQuery}.
                 * @param error Error, if any
                 * @param [response] ExecuteSchemeQueryResponse
                 */
                type ExecuteSchemeQueryCallback = (error: (Error|null), response?: Ydb.Table.ExecuteSchemeQueryResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#beginTransaction}.
                 * @param error Error, if any
                 * @param [response] BeginTransactionResponse
                 */
                type BeginTransactionCallback = (error: (Error|null), response?: Ydb.Table.BeginTransactionResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#commitTransaction}.
                 * @param error Error, if any
                 * @param [response] CommitTransactionResponse
                 */
                type CommitTransactionCallback = (error: (Error|null), response?: Ydb.Table.CommitTransactionResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#rollbackTransaction}.
                 * @param error Error, if any
                 * @param [response] RollbackTransactionResponse
                 */
                type RollbackTransactionCallback = (error: (Error|null), response?: Ydb.Table.RollbackTransactionResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#describeTableOptions}.
                 * @param error Error, if any
                 * @param [response] DescribeTableOptionsResponse
                 */
                type DescribeTableOptionsCallback = (error: (Error|null), response?: Ydb.Table.DescribeTableOptionsResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#streamReadTable}.
                 * @param error Error, if any
                 * @param [response] ReadTableResponse
                 */
                type StreamReadTableCallback = (error: (Error|null), response?: Ydb.Table.ReadTableResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#bulkUpsert}.
                 * @param error Error, if any
                 * @param [response] BulkUpsertResponse
                 */
                type BulkUpsertCallback = (error: (Error|null), response?: Ydb.Table.BulkUpsertResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Table.V1.TableService#streamExecuteScanQuery}.
                 * @param error Error, if any
                 * @param [response] ExecuteScanQueryPartialResponse
                 */
                type StreamExecuteScanQueryCallback = (error: (Error|null), response?: Ydb.Table.ExecuteScanQueryPartialResponse) => void;
            }
        }

        /** Properties of a CreateSessionRequest. */
        interface ICreateSessionRequest {

            /** CreateSessionRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents a CreateSessionRequest. */
        class CreateSessionRequest implements ICreateSessionRequest {

            /**
             * Constructs a new CreateSessionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICreateSessionRequest);

            /** CreateSessionRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new CreateSessionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateSessionRequest instance
             */
            public static create(properties?: Ydb.Table.ICreateSessionRequest): Ydb.Table.CreateSessionRequest;

            /**
             * Encodes the specified CreateSessionRequest message. Does not implicitly {@link Ydb.Table.CreateSessionRequest.verify|verify} messages.
             * @param message CreateSessionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICreateSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateSessionRequest message, length delimited. Does not implicitly {@link Ydb.Table.CreateSessionRequest.verify|verify} messages.
             * @param message CreateSessionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICreateSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateSessionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateSessionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CreateSessionRequest;

            /**
             * Decodes a CreateSessionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateSessionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CreateSessionRequest;

            /**
             * Verifies a CreateSessionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateSessionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateSessionRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CreateSessionRequest;

            /**
             * Creates a plain object from a CreateSessionRequest message. Also converts values to other types if specified.
             * @param message CreateSessionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CreateSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateSessionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateSessionResponse. */
        interface ICreateSessionResponse {

            /** CreateSessionResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a CreateSessionResponse. */
        class CreateSessionResponse implements ICreateSessionResponse {

            /**
             * Constructs a new CreateSessionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICreateSessionResponse);

            /** CreateSessionResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new CreateSessionResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateSessionResponse instance
             */
            public static create(properties?: Ydb.Table.ICreateSessionResponse): Ydb.Table.CreateSessionResponse;

            /**
             * Encodes the specified CreateSessionResponse message. Does not implicitly {@link Ydb.Table.CreateSessionResponse.verify|verify} messages.
             * @param message CreateSessionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICreateSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateSessionResponse message, length delimited. Does not implicitly {@link Ydb.Table.CreateSessionResponse.verify|verify} messages.
             * @param message CreateSessionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICreateSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateSessionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateSessionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CreateSessionResponse;

            /**
             * Decodes a CreateSessionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateSessionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CreateSessionResponse;

            /**
             * Verifies a CreateSessionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateSessionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateSessionResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CreateSessionResponse;

            /**
             * Creates a plain object from a CreateSessionResponse message. Also converts values to other types if specified.
             * @param message CreateSessionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CreateSessionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateSessionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateSessionResult. */
        interface ICreateSessionResult {

            /** CreateSessionResult sessionId */
            sessionId?: (string|null);
        }

        /** Represents a CreateSessionResult. */
        class CreateSessionResult implements ICreateSessionResult {

            /**
             * Constructs a new CreateSessionResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICreateSessionResult);

            /** CreateSessionResult sessionId. */
            public sessionId: string;

            /**
             * Creates a new CreateSessionResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateSessionResult instance
             */
            public static create(properties?: Ydb.Table.ICreateSessionResult): Ydb.Table.CreateSessionResult;

            /**
             * Encodes the specified CreateSessionResult message. Does not implicitly {@link Ydb.Table.CreateSessionResult.verify|verify} messages.
             * @param message CreateSessionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICreateSessionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateSessionResult message, length delimited. Does not implicitly {@link Ydb.Table.CreateSessionResult.verify|verify} messages.
             * @param message CreateSessionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICreateSessionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateSessionResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateSessionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CreateSessionResult;

            /**
             * Decodes a CreateSessionResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateSessionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CreateSessionResult;

            /**
             * Verifies a CreateSessionResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateSessionResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateSessionResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CreateSessionResult;

            /**
             * Creates a plain object from a CreateSessionResult message. Also converts values to other types if specified.
             * @param message CreateSessionResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CreateSessionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateSessionResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteSessionRequest. */
        interface IDeleteSessionRequest {

            /** DeleteSessionRequest sessionId */
            sessionId?: (string|null);

            /** DeleteSessionRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents a DeleteSessionRequest. */
        class DeleteSessionRequest implements IDeleteSessionRequest {

            /**
             * Constructs a new DeleteSessionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IDeleteSessionRequest);

            /** DeleteSessionRequest sessionId. */
            public sessionId: string;

            /** DeleteSessionRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new DeleteSessionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteSessionRequest instance
             */
            public static create(properties?: Ydb.Table.IDeleteSessionRequest): Ydb.Table.DeleteSessionRequest;

            /**
             * Encodes the specified DeleteSessionRequest message. Does not implicitly {@link Ydb.Table.DeleteSessionRequest.verify|verify} messages.
             * @param message DeleteSessionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IDeleteSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteSessionRequest message, length delimited. Does not implicitly {@link Ydb.Table.DeleteSessionRequest.verify|verify} messages.
             * @param message DeleteSessionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IDeleteSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteSessionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteSessionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.DeleteSessionRequest;

            /**
             * Decodes a DeleteSessionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteSessionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.DeleteSessionRequest;

            /**
             * Verifies a DeleteSessionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteSessionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteSessionRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.DeleteSessionRequest;

            /**
             * Creates a plain object from a DeleteSessionRequest message. Also converts values to other types if specified.
             * @param message DeleteSessionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.DeleteSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteSessionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteSessionResponse. */
        interface IDeleteSessionResponse {

            /** DeleteSessionResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a DeleteSessionResponse. */
        class DeleteSessionResponse implements IDeleteSessionResponse {

            /**
             * Constructs a new DeleteSessionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IDeleteSessionResponse);

            /** DeleteSessionResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new DeleteSessionResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteSessionResponse instance
             */
            public static create(properties?: Ydb.Table.IDeleteSessionResponse): Ydb.Table.DeleteSessionResponse;

            /**
             * Encodes the specified DeleteSessionResponse message. Does not implicitly {@link Ydb.Table.DeleteSessionResponse.verify|verify} messages.
             * @param message DeleteSessionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IDeleteSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteSessionResponse message, length delimited. Does not implicitly {@link Ydb.Table.DeleteSessionResponse.verify|verify} messages.
             * @param message DeleteSessionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IDeleteSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteSessionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteSessionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.DeleteSessionResponse;

            /**
             * Decodes a DeleteSessionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteSessionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.DeleteSessionResponse;

            /**
             * Verifies a DeleteSessionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteSessionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteSessionResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.DeleteSessionResponse;

            /**
             * Creates a plain object from a DeleteSessionResponse message. Also converts values to other types if specified.
             * @param message DeleteSessionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.DeleteSessionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteSessionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GlobalIndex. */
        interface IGlobalIndex {
        }

        /** Represents a GlobalIndex. */
        class GlobalIndex implements IGlobalIndex {

            /**
             * Constructs a new GlobalIndex.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IGlobalIndex);

            /**
             * Creates a new GlobalIndex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GlobalIndex instance
             */
            public static create(properties?: Ydb.Table.IGlobalIndex): Ydb.Table.GlobalIndex;

            /**
             * Encodes the specified GlobalIndex message. Does not implicitly {@link Ydb.Table.GlobalIndex.verify|verify} messages.
             * @param message GlobalIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IGlobalIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GlobalIndex message, length delimited. Does not implicitly {@link Ydb.Table.GlobalIndex.verify|verify} messages.
             * @param message GlobalIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IGlobalIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GlobalIndex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GlobalIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.GlobalIndex;

            /**
             * Decodes a GlobalIndex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GlobalIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.GlobalIndex;

            /**
             * Verifies a GlobalIndex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GlobalIndex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GlobalIndex
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.GlobalIndex;

            /**
             * Creates a plain object from a GlobalIndex message. Also converts values to other types if specified.
             * @param message GlobalIndex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.GlobalIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GlobalIndex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GlobalAsyncIndex. */
        interface IGlobalAsyncIndex {
        }

        /** Represents a GlobalAsyncIndex. */
        class GlobalAsyncIndex implements IGlobalAsyncIndex {

            /**
             * Constructs a new GlobalAsyncIndex.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IGlobalAsyncIndex);

            /**
             * Creates a new GlobalAsyncIndex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GlobalAsyncIndex instance
             */
            public static create(properties?: Ydb.Table.IGlobalAsyncIndex): Ydb.Table.GlobalAsyncIndex;

            /**
             * Encodes the specified GlobalAsyncIndex message. Does not implicitly {@link Ydb.Table.GlobalAsyncIndex.verify|verify} messages.
             * @param message GlobalAsyncIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IGlobalAsyncIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GlobalAsyncIndex message, length delimited. Does not implicitly {@link Ydb.Table.GlobalAsyncIndex.verify|verify} messages.
             * @param message GlobalAsyncIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IGlobalAsyncIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GlobalAsyncIndex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GlobalAsyncIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.GlobalAsyncIndex;

            /**
             * Decodes a GlobalAsyncIndex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GlobalAsyncIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.GlobalAsyncIndex;

            /**
             * Verifies a GlobalAsyncIndex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GlobalAsyncIndex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GlobalAsyncIndex
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.GlobalAsyncIndex;

            /**
             * Creates a plain object from a GlobalAsyncIndex message. Also converts values to other types if specified.
             * @param message GlobalAsyncIndex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.GlobalAsyncIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GlobalAsyncIndex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TableIndex. */
        interface ITableIndex {

            /** TableIndex name */
            name?: (string|null);

            /** TableIndex indexColumns */
            indexColumns?: (string[]|null);

            /** TableIndex globalIndex */
            globalIndex?: (Ydb.Table.IGlobalIndex|null);

            /** TableIndex globalAsyncIndex */
            globalAsyncIndex?: (Ydb.Table.IGlobalAsyncIndex|null);

            /** TableIndex dataColumns */
            dataColumns?: (string[]|null);
        }

        /** Represents a TableIndex. */
        class TableIndex implements ITableIndex {

            /**
             * Constructs a new TableIndex.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ITableIndex);

            /** TableIndex name. */
            public name: string;

            /** TableIndex indexColumns. */
            public indexColumns: string[];

            /** TableIndex globalIndex. */
            public globalIndex?: (Ydb.Table.IGlobalIndex|null);

            /** TableIndex globalAsyncIndex. */
            public globalAsyncIndex?: (Ydb.Table.IGlobalAsyncIndex|null);

            /** TableIndex dataColumns. */
            public dataColumns: string[];

            /** TableIndex type. */
            public type?: ("globalIndex"|"globalAsyncIndex");

            /**
             * Creates a new TableIndex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TableIndex instance
             */
            public static create(properties?: Ydb.Table.ITableIndex): Ydb.Table.TableIndex;

            /**
             * Encodes the specified TableIndex message. Does not implicitly {@link Ydb.Table.TableIndex.verify|verify} messages.
             * @param message TableIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ITableIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TableIndex message, length delimited. Does not implicitly {@link Ydb.Table.TableIndex.verify|verify} messages.
             * @param message TableIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ITableIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TableIndex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TableIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.TableIndex;

            /**
             * Decodes a TableIndex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TableIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.TableIndex;

            /**
             * Verifies a TableIndex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TableIndex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TableIndex
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.TableIndex;

            /**
             * Creates a plain object from a TableIndex message. Also converts values to other types if specified.
             * @param message TableIndex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.TableIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TableIndex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TableIndexDescription. */
        interface ITableIndexDescription {

            /** TableIndexDescription name */
            name?: (string|null);

            /** TableIndexDescription indexColumns */
            indexColumns?: (string[]|null);

            /** TableIndexDescription globalIndex */
            globalIndex?: (Ydb.Table.IGlobalIndex|null);

            /** TableIndexDescription globalAsyncIndex */
            globalAsyncIndex?: (Ydb.Table.IGlobalAsyncIndex|null);

            /** TableIndexDescription status */
            status?: (Ydb.Table.TableIndexDescription.Status|null);

            /** TableIndexDescription dataColumns */
            dataColumns?: (string[]|null);
        }

        /** Represents a TableIndexDescription. */
        class TableIndexDescription implements ITableIndexDescription {

            /**
             * Constructs a new TableIndexDescription.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ITableIndexDescription);

            /** TableIndexDescription name. */
            public name: string;

            /** TableIndexDescription indexColumns. */
            public indexColumns: string[];

            /** TableIndexDescription globalIndex. */
            public globalIndex?: (Ydb.Table.IGlobalIndex|null);

            /** TableIndexDescription globalAsyncIndex. */
            public globalAsyncIndex?: (Ydb.Table.IGlobalAsyncIndex|null);

            /** TableIndexDescription status. */
            public status: Ydb.Table.TableIndexDescription.Status;

            /** TableIndexDescription dataColumns. */
            public dataColumns: string[];

            /** TableIndexDescription type. */
            public type?: ("globalIndex"|"globalAsyncIndex");

            /**
             * Creates a new TableIndexDescription instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TableIndexDescription instance
             */
            public static create(properties?: Ydb.Table.ITableIndexDescription): Ydb.Table.TableIndexDescription;

            /**
             * Encodes the specified TableIndexDescription message. Does not implicitly {@link Ydb.Table.TableIndexDescription.verify|verify} messages.
             * @param message TableIndexDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ITableIndexDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TableIndexDescription message, length delimited. Does not implicitly {@link Ydb.Table.TableIndexDescription.verify|verify} messages.
             * @param message TableIndexDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ITableIndexDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TableIndexDescription message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TableIndexDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.TableIndexDescription;

            /**
             * Decodes a TableIndexDescription message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TableIndexDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.TableIndexDescription;

            /**
             * Verifies a TableIndexDescription message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TableIndexDescription message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TableIndexDescription
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.TableIndexDescription;

            /**
             * Creates a plain object from a TableIndexDescription message. Also converts values to other types if specified.
             * @param message TableIndexDescription
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.TableIndexDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TableIndexDescription to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace TableIndexDescription {

            /** Status enum. */
            enum Status {
                STATUS_UNSPECIFIED = 0,
                STATUS_READY = 1,
                STATUS_BUILDING = 2
            }
        }

        /** Properties of an IndexBuildState. */
        interface IIndexBuildState {
        }

        /** Represents an IndexBuildState. */
        class IndexBuildState implements IIndexBuildState {

            /**
             * Constructs a new IndexBuildState.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IIndexBuildState);

            /**
             * Creates a new IndexBuildState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IndexBuildState instance
             */
            public static create(properties?: Ydb.Table.IIndexBuildState): Ydb.Table.IndexBuildState;

            /**
             * Encodes the specified IndexBuildState message. Does not implicitly {@link Ydb.Table.IndexBuildState.verify|verify} messages.
             * @param message IndexBuildState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IIndexBuildState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IndexBuildState message, length delimited. Does not implicitly {@link Ydb.Table.IndexBuildState.verify|verify} messages.
             * @param message IndexBuildState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IIndexBuildState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IndexBuildState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IndexBuildState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.IndexBuildState;

            /**
             * Decodes an IndexBuildState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IndexBuildState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.IndexBuildState;

            /**
             * Verifies an IndexBuildState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IndexBuildState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IndexBuildState
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.IndexBuildState;

            /**
             * Creates a plain object from an IndexBuildState message. Also converts values to other types if specified.
             * @param message IndexBuildState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.IndexBuildState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IndexBuildState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace IndexBuildState {

            /** State enum. */
            enum State {
                STATE_UNSPECIFIED = 0,
                STATE_PREPARING = 1,
                STATE_TRANSFERING_DATA = 2,
                STATE_APPLYING = 3,
                STATE_DONE = 4,
                STATE_CANCELLATION = 5,
                STATE_CANCELLED = 6,
                STATE_REJECTION = 7,
                STATE_REJECTED = 8
            }
        }

        /** Properties of an IndexBuildDescription. */
        interface IIndexBuildDescription {

            /** IndexBuildDescription path */
            path?: (string|null);

            /** IndexBuildDescription index */
            index?: (Ydb.Table.ITableIndex|null);
        }

        /** Represents an IndexBuildDescription. */
        class IndexBuildDescription implements IIndexBuildDescription {

            /**
             * Constructs a new IndexBuildDescription.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IIndexBuildDescription);

            /** IndexBuildDescription path. */
            public path: string;

            /** IndexBuildDescription index. */
            public index?: (Ydb.Table.ITableIndex|null);

            /**
             * Creates a new IndexBuildDescription instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IndexBuildDescription instance
             */
            public static create(properties?: Ydb.Table.IIndexBuildDescription): Ydb.Table.IndexBuildDescription;

            /**
             * Encodes the specified IndexBuildDescription message. Does not implicitly {@link Ydb.Table.IndexBuildDescription.verify|verify} messages.
             * @param message IndexBuildDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IIndexBuildDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IndexBuildDescription message, length delimited. Does not implicitly {@link Ydb.Table.IndexBuildDescription.verify|verify} messages.
             * @param message IndexBuildDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IIndexBuildDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IndexBuildDescription message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IndexBuildDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.IndexBuildDescription;

            /**
             * Decodes an IndexBuildDescription message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IndexBuildDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.IndexBuildDescription;

            /**
             * Verifies an IndexBuildDescription message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IndexBuildDescription message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IndexBuildDescription
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.IndexBuildDescription;

            /**
             * Creates a plain object from an IndexBuildDescription message. Also converts values to other types if specified.
             * @param message IndexBuildDescription
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.IndexBuildDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IndexBuildDescription to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an IndexBuildMetadata. */
        interface IIndexBuildMetadata {

            /** IndexBuildMetadata description */
            description?: (Ydb.Table.IIndexBuildDescription|null);

            /** IndexBuildMetadata state */
            state?: (Ydb.Table.IndexBuildState.State|null);

            /** IndexBuildMetadata progress */
            progress?: (number|null);
        }

        /** Represents an IndexBuildMetadata. */
        class IndexBuildMetadata implements IIndexBuildMetadata {

            /**
             * Constructs a new IndexBuildMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IIndexBuildMetadata);

            /** IndexBuildMetadata description. */
            public description?: (Ydb.Table.IIndexBuildDescription|null);

            /** IndexBuildMetadata state. */
            public state: Ydb.Table.IndexBuildState.State;

            /** IndexBuildMetadata progress. */
            public progress: number;

            /**
             * Creates a new IndexBuildMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IndexBuildMetadata instance
             */
            public static create(properties?: Ydb.Table.IIndexBuildMetadata): Ydb.Table.IndexBuildMetadata;

            /**
             * Encodes the specified IndexBuildMetadata message. Does not implicitly {@link Ydb.Table.IndexBuildMetadata.verify|verify} messages.
             * @param message IndexBuildMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IIndexBuildMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IndexBuildMetadata message, length delimited. Does not implicitly {@link Ydb.Table.IndexBuildMetadata.verify|verify} messages.
             * @param message IndexBuildMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IIndexBuildMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IndexBuildMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IndexBuildMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.IndexBuildMetadata;

            /**
             * Decodes an IndexBuildMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IndexBuildMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.IndexBuildMetadata;

            /**
             * Verifies an IndexBuildMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IndexBuildMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IndexBuildMetadata
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.IndexBuildMetadata;

            /**
             * Creates a plain object from an IndexBuildMetadata message. Also converts values to other types if specified.
             * @param message IndexBuildMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.IndexBuildMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IndexBuildMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StoragePool. */
        interface IStoragePool {

            /** StoragePool media */
            media?: (string|null);
        }

        /** Represents a StoragePool. */
        class StoragePool implements IStoragePool {

            /**
             * Constructs a new StoragePool.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IStoragePool);

            /** StoragePool media. */
            public media: string;

            /**
             * Creates a new StoragePool instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StoragePool instance
             */
            public static create(properties?: Ydb.Table.IStoragePool): Ydb.Table.StoragePool;

            /**
             * Encodes the specified StoragePool message. Does not implicitly {@link Ydb.Table.StoragePool.verify|verify} messages.
             * @param message StoragePool message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IStoragePool, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StoragePool message, length delimited. Does not implicitly {@link Ydb.Table.StoragePool.verify|verify} messages.
             * @param message StoragePool message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IStoragePool, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StoragePool message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StoragePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.StoragePool;

            /**
             * Decodes a StoragePool message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StoragePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.StoragePool;

            /**
             * Verifies a StoragePool message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StoragePool message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StoragePool
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.StoragePool;

            /**
             * Creates a plain object from a StoragePool message. Also converts values to other types if specified.
             * @param message StoragePool
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.StoragePool, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StoragePool to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StoragePolicy. */
        interface IStoragePolicy {

            /** StoragePolicy presetName */
            presetName?: (string|null);

            /** StoragePolicy syslog */
            syslog?: (Ydb.Table.IStoragePool|null);

            /** StoragePolicy log */
            log?: (Ydb.Table.IStoragePool|null);

            /** StoragePolicy data */
            data?: (Ydb.Table.IStoragePool|null);

            /** StoragePolicy external */
            external?: (Ydb.Table.IStoragePool|null);

            /** StoragePolicy keepInMemory */
            keepInMemory?: (Ydb.FeatureFlag.Status|null);

            /** StoragePolicy columnFamilies */
            columnFamilies?: (Ydb.Table.IColumnFamilyPolicy[]|null);
        }

        /** Represents a StoragePolicy. */
        class StoragePolicy implements IStoragePolicy {

            /**
             * Constructs a new StoragePolicy.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IStoragePolicy);

            /** StoragePolicy presetName. */
            public presetName: string;

            /** StoragePolicy syslog. */
            public syslog?: (Ydb.Table.IStoragePool|null);

            /** StoragePolicy log. */
            public log?: (Ydb.Table.IStoragePool|null);

            /** StoragePolicy data. */
            public data?: (Ydb.Table.IStoragePool|null);

            /** StoragePolicy external. */
            public external?: (Ydb.Table.IStoragePool|null);

            /** StoragePolicy keepInMemory. */
            public keepInMemory: Ydb.FeatureFlag.Status;

            /** StoragePolicy columnFamilies. */
            public columnFamilies: Ydb.Table.IColumnFamilyPolicy[];

            /**
             * Creates a new StoragePolicy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StoragePolicy instance
             */
            public static create(properties?: Ydb.Table.IStoragePolicy): Ydb.Table.StoragePolicy;

            /**
             * Encodes the specified StoragePolicy message. Does not implicitly {@link Ydb.Table.StoragePolicy.verify|verify} messages.
             * @param message StoragePolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IStoragePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StoragePolicy message, length delimited. Does not implicitly {@link Ydb.Table.StoragePolicy.verify|verify} messages.
             * @param message StoragePolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IStoragePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StoragePolicy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StoragePolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.StoragePolicy;

            /**
             * Decodes a StoragePolicy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StoragePolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.StoragePolicy;

            /**
             * Verifies a StoragePolicy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StoragePolicy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StoragePolicy
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.StoragePolicy;

            /**
             * Creates a plain object from a StoragePolicy message. Also converts values to other types if specified.
             * @param message StoragePolicy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.StoragePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StoragePolicy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ColumnFamilyPolicy. */
        interface IColumnFamilyPolicy {

            /** ColumnFamilyPolicy name */
            name?: (string|null);

            /** ColumnFamilyPolicy data */
            data?: (Ydb.Table.IStoragePool|null);

            /** ColumnFamilyPolicy external */
            external?: (Ydb.Table.IStoragePool|null);

            /** ColumnFamilyPolicy keepInMemory */
            keepInMemory?: (Ydb.FeatureFlag.Status|null);

            /** ColumnFamilyPolicy compression */
            compression?: (Ydb.Table.ColumnFamilyPolicy.Compression|null);
        }

        /** Represents a ColumnFamilyPolicy. */
        class ColumnFamilyPolicy implements IColumnFamilyPolicy {

            /**
             * Constructs a new ColumnFamilyPolicy.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IColumnFamilyPolicy);

            /** ColumnFamilyPolicy name. */
            public name: string;

            /** ColumnFamilyPolicy data. */
            public data?: (Ydb.Table.IStoragePool|null);

            /** ColumnFamilyPolicy external. */
            public external?: (Ydb.Table.IStoragePool|null);

            /** ColumnFamilyPolicy keepInMemory. */
            public keepInMemory: Ydb.FeatureFlag.Status;

            /** ColumnFamilyPolicy compression. */
            public compression: Ydb.Table.ColumnFamilyPolicy.Compression;

            /**
             * Creates a new ColumnFamilyPolicy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ColumnFamilyPolicy instance
             */
            public static create(properties?: Ydb.Table.IColumnFamilyPolicy): Ydb.Table.ColumnFamilyPolicy;

            /**
             * Encodes the specified ColumnFamilyPolicy message. Does not implicitly {@link Ydb.Table.ColumnFamilyPolicy.verify|verify} messages.
             * @param message ColumnFamilyPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IColumnFamilyPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ColumnFamilyPolicy message, length delimited. Does not implicitly {@link Ydb.Table.ColumnFamilyPolicy.verify|verify} messages.
             * @param message ColumnFamilyPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IColumnFamilyPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ColumnFamilyPolicy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ColumnFamilyPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ColumnFamilyPolicy;

            /**
             * Decodes a ColumnFamilyPolicy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ColumnFamilyPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ColumnFamilyPolicy;

            /**
             * Verifies a ColumnFamilyPolicy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ColumnFamilyPolicy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ColumnFamilyPolicy
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ColumnFamilyPolicy;

            /**
             * Creates a plain object from a ColumnFamilyPolicy message. Also converts values to other types if specified.
             * @param message ColumnFamilyPolicy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ColumnFamilyPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ColumnFamilyPolicy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ColumnFamilyPolicy {

            /** Compression enum. */
            enum Compression {
                COMPRESSION_UNSPECIFIED = 0,
                UNCOMPRESSED = 1,
                COMPRESSED = 2
            }
        }

        /** Properties of a CompactionPolicy. */
        interface ICompactionPolicy {

            /** CompactionPolicy presetName */
            presetName?: (string|null);
        }

        /** Represents a CompactionPolicy. */
        class CompactionPolicy implements ICompactionPolicy {

            /**
             * Constructs a new CompactionPolicy.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICompactionPolicy);

            /** CompactionPolicy presetName. */
            public presetName: string;

            /**
             * Creates a new CompactionPolicy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompactionPolicy instance
             */
            public static create(properties?: Ydb.Table.ICompactionPolicy): Ydb.Table.CompactionPolicy;

            /**
             * Encodes the specified CompactionPolicy message. Does not implicitly {@link Ydb.Table.CompactionPolicy.verify|verify} messages.
             * @param message CompactionPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICompactionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CompactionPolicy message, length delimited. Does not implicitly {@link Ydb.Table.CompactionPolicy.verify|verify} messages.
             * @param message CompactionPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICompactionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompactionPolicy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompactionPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CompactionPolicy;

            /**
             * Decodes a CompactionPolicy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CompactionPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CompactionPolicy;

            /**
             * Verifies a CompactionPolicy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CompactionPolicy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CompactionPolicy
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CompactionPolicy;

            /**
             * Creates a plain object from a CompactionPolicy message. Also converts values to other types if specified.
             * @param message CompactionPolicy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CompactionPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CompactionPolicy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExplicitPartitions. */
        interface IExplicitPartitions {

            /** ExplicitPartitions splitPoints */
            splitPoints?: (Ydb.ITypedValue[]|null);
        }

        /** Represents an ExplicitPartitions. */
        class ExplicitPartitions implements IExplicitPartitions {

            /**
             * Constructs a new ExplicitPartitions.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExplicitPartitions);

            /** ExplicitPartitions splitPoints. */
            public splitPoints: Ydb.ITypedValue[];

            /**
             * Creates a new ExplicitPartitions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExplicitPartitions instance
             */
            public static create(properties?: Ydb.Table.IExplicitPartitions): Ydb.Table.ExplicitPartitions;

            /**
             * Encodes the specified ExplicitPartitions message. Does not implicitly {@link Ydb.Table.ExplicitPartitions.verify|verify} messages.
             * @param message ExplicitPartitions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExplicitPartitions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExplicitPartitions message, length delimited. Does not implicitly {@link Ydb.Table.ExplicitPartitions.verify|verify} messages.
             * @param message ExplicitPartitions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExplicitPartitions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExplicitPartitions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExplicitPartitions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExplicitPartitions;

            /**
             * Decodes an ExplicitPartitions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExplicitPartitions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExplicitPartitions;

            /**
             * Verifies an ExplicitPartitions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExplicitPartitions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExplicitPartitions
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExplicitPartitions;

            /**
             * Creates a plain object from an ExplicitPartitions message. Also converts values to other types if specified.
             * @param message ExplicitPartitions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExplicitPartitions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExplicitPartitions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PartitionStats. */
        interface IPartitionStats {

            /** PartitionStats rowsEstimate */
            rowsEstimate?: (number|Long|null);

            /** PartitionStats storeSize */
            storeSize?: (number|Long|null);
        }

        /** Represents a PartitionStats. */
        class PartitionStats implements IPartitionStats {

            /**
             * Constructs a new PartitionStats.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IPartitionStats);

            /** PartitionStats rowsEstimate. */
            public rowsEstimate: (number|Long);

            /** PartitionStats storeSize. */
            public storeSize: (number|Long);

            /**
             * Creates a new PartitionStats instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PartitionStats instance
             */
            public static create(properties?: Ydb.Table.IPartitionStats): Ydb.Table.PartitionStats;

            /**
             * Encodes the specified PartitionStats message. Does not implicitly {@link Ydb.Table.PartitionStats.verify|verify} messages.
             * @param message PartitionStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IPartitionStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PartitionStats message, length delimited. Does not implicitly {@link Ydb.Table.PartitionStats.verify|verify} messages.
             * @param message PartitionStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IPartitionStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PartitionStats message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PartitionStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.PartitionStats;

            /**
             * Decodes a PartitionStats message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PartitionStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.PartitionStats;

            /**
             * Verifies a PartitionStats message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PartitionStats message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PartitionStats
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.PartitionStats;

            /**
             * Creates a plain object from a PartitionStats message. Also converts values to other types if specified.
             * @param message PartitionStats
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.PartitionStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PartitionStats to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TableStats. */
        interface ITableStats {

            /** TableStats partitionStats */
            partitionStats?: (Ydb.Table.IPartitionStats[]|null);

            /** TableStats rowsEstimate */
            rowsEstimate?: (number|Long|null);

            /** TableStats storeSize */
            storeSize?: (number|Long|null);

            /** TableStats partitions */
            partitions?: (number|Long|null);

            /** TableStats creationTime */
            creationTime?: (google.protobuf.ITimestamp|null);

            /** TableStats modificationTime */
            modificationTime?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a TableStats. */
        class TableStats implements ITableStats {

            /**
             * Constructs a new TableStats.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ITableStats);

            /** TableStats partitionStats. */
            public partitionStats: Ydb.Table.IPartitionStats[];

            /** TableStats rowsEstimate. */
            public rowsEstimate: (number|Long);

            /** TableStats storeSize. */
            public storeSize: (number|Long);

            /** TableStats partitions. */
            public partitions: (number|Long);

            /** TableStats creationTime. */
            public creationTime?: (google.protobuf.ITimestamp|null);

            /** TableStats modificationTime. */
            public modificationTime?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new TableStats instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TableStats instance
             */
            public static create(properties?: Ydb.Table.ITableStats): Ydb.Table.TableStats;

            /**
             * Encodes the specified TableStats message. Does not implicitly {@link Ydb.Table.TableStats.verify|verify} messages.
             * @param message TableStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ITableStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TableStats message, length delimited. Does not implicitly {@link Ydb.Table.TableStats.verify|verify} messages.
             * @param message TableStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ITableStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TableStats message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TableStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.TableStats;

            /**
             * Decodes a TableStats message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TableStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.TableStats;

            /**
             * Verifies a TableStats message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TableStats message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TableStats
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.TableStats;

            /**
             * Creates a plain object from a TableStats message. Also converts values to other types if specified.
             * @param message TableStats
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.TableStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TableStats to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PartitioningPolicy. */
        interface IPartitioningPolicy {

            /** PartitioningPolicy presetName */
            presetName?: (string|null);

            /** PartitioningPolicy autoPartitioning */
            autoPartitioning?: (Ydb.Table.PartitioningPolicy.AutoPartitioningPolicy|null);

            /** PartitioningPolicy uniformPartitions */
            uniformPartitions?: (number|Long|null);

            /** PartitioningPolicy explicitPartitions */
            explicitPartitions?: (Ydb.Table.IExplicitPartitions|null);
        }

        /** Represents a PartitioningPolicy. */
        class PartitioningPolicy implements IPartitioningPolicy {

            /**
             * Constructs a new PartitioningPolicy.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IPartitioningPolicy);

            /** PartitioningPolicy presetName. */
            public presetName: string;

            /** PartitioningPolicy autoPartitioning. */
            public autoPartitioning: Ydb.Table.PartitioningPolicy.AutoPartitioningPolicy;

            /** PartitioningPolicy uniformPartitions. */
            public uniformPartitions?: (number|Long|null);

            /** PartitioningPolicy explicitPartitions. */
            public explicitPartitions?: (Ydb.Table.IExplicitPartitions|null);

            /** PartitioningPolicy partitions. */
            public partitions?: ("uniformPartitions"|"explicitPartitions");

            /**
             * Creates a new PartitioningPolicy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PartitioningPolicy instance
             */
            public static create(properties?: Ydb.Table.IPartitioningPolicy): Ydb.Table.PartitioningPolicy;

            /**
             * Encodes the specified PartitioningPolicy message. Does not implicitly {@link Ydb.Table.PartitioningPolicy.verify|verify} messages.
             * @param message PartitioningPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IPartitioningPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PartitioningPolicy message, length delimited. Does not implicitly {@link Ydb.Table.PartitioningPolicy.verify|verify} messages.
             * @param message PartitioningPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IPartitioningPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PartitioningPolicy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PartitioningPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.PartitioningPolicy;

            /**
             * Decodes a PartitioningPolicy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PartitioningPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.PartitioningPolicy;

            /**
             * Verifies a PartitioningPolicy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PartitioningPolicy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PartitioningPolicy
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.PartitioningPolicy;

            /**
             * Creates a plain object from a PartitioningPolicy message. Also converts values to other types if specified.
             * @param message PartitioningPolicy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.PartitioningPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PartitioningPolicy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace PartitioningPolicy {

            /** AutoPartitioningPolicy enum. */
            enum AutoPartitioningPolicy {
                AUTO_PARTITIONING_POLICY_UNSPECIFIED = 0,
                DISABLED = 1,
                AUTO_SPLIT = 2,
                AUTO_SPLIT_MERGE = 3
            }
        }

        /** Properties of an ExecutionPolicy. */
        interface IExecutionPolicy {

            /** ExecutionPolicy presetName */
            presetName?: (string|null);
        }

        /** Represents an ExecutionPolicy. */
        class ExecutionPolicy implements IExecutionPolicy {

            /**
             * Constructs a new ExecutionPolicy.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExecutionPolicy);

            /** ExecutionPolicy presetName. */
            public presetName: string;

            /**
             * Creates a new ExecutionPolicy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionPolicy instance
             */
            public static create(properties?: Ydb.Table.IExecutionPolicy): Ydb.Table.ExecutionPolicy;

            /**
             * Encodes the specified ExecutionPolicy message. Does not implicitly {@link Ydb.Table.ExecutionPolicy.verify|verify} messages.
             * @param message ExecutionPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExecutionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecutionPolicy message, length delimited. Does not implicitly {@link Ydb.Table.ExecutionPolicy.verify|verify} messages.
             * @param message ExecutionPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExecutionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionPolicy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExecutionPolicy;

            /**
             * Decodes an ExecutionPolicy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecutionPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExecutionPolicy;

            /**
             * Verifies an ExecutionPolicy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecutionPolicy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecutionPolicy
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExecutionPolicy;

            /**
             * Creates a plain object from an ExecutionPolicy message. Also converts values to other types if specified.
             * @param message ExecutionPolicy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExecutionPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecutionPolicy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReplicationPolicy. */
        interface IReplicationPolicy {

            /** ReplicationPolicy presetName */
            presetName?: (string|null);

            /** ReplicationPolicy replicasCount */
            replicasCount?: (number|null);

            /** ReplicationPolicy createPerAvailabilityZone */
            createPerAvailabilityZone?: (Ydb.FeatureFlag.Status|null);

            /** ReplicationPolicy allowPromotion */
            allowPromotion?: (Ydb.FeatureFlag.Status|null);
        }

        /** Represents a ReplicationPolicy. */
        class ReplicationPolicy implements IReplicationPolicy {

            /**
             * Constructs a new ReplicationPolicy.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IReplicationPolicy);

            /** ReplicationPolicy presetName. */
            public presetName: string;

            /** ReplicationPolicy replicasCount. */
            public replicasCount: number;

            /** ReplicationPolicy createPerAvailabilityZone. */
            public createPerAvailabilityZone: Ydb.FeatureFlag.Status;

            /** ReplicationPolicy allowPromotion. */
            public allowPromotion: Ydb.FeatureFlag.Status;

            /**
             * Creates a new ReplicationPolicy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReplicationPolicy instance
             */
            public static create(properties?: Ydb.Table.IReplicationPolicy): Ydb.Table.ReplicationPolicy;

            /**
             * Encodes the specified ReplicationPolicy message. Does not implicitly {@link Ydb.Table.ReplicationPolicy.verify|verify} messages.
             * @param message ReplicationPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IReplicationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReplicationPolicy message, length delimited. Does not implicitly {@link Ydb.Table.ReplicationPolicy.verify|verify} messages.
             * @param message ReplicationPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IReplicationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReplicationPolicy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReplicationPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ReplicationPolicy;

            /**
             * Decodes a ReplicationPolicy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReplicationPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ReplicationPolicy;

            /**
             * Verifies a ReplicationPolicy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReplicationPolicy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReplicationPolicy
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ReplicationPolicy;

            /**
             * Creates a plain object from a ReplicationPolicy message. Also converts values to other types if specified.
             * @param message ReplicationPolicy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ReplicationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReplicationPolicy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CachingPolicy. */
        interface ICachingPolicy {

            /** CachingPolicy presetName */
            presetName?: (string|null);
        }

        /** Represents a CachingPolicy. */
        class CachingPolicy implements ICachingPolicy {

            /**
             * Constructs a new CachingPolicy.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICachingPolicy);

            /** CachingPolicy presetName. */
            public presetName: string;

            /**
             * Creates a new CachingPolicy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CachingPolicy instance
             */
            public static create(properties?: Ydb.Table.ICachingPolicy): Ydb.Table.CachingPolicy;

            /**
             * Encodes the specified CachingPolicy message. Does not implicitly {@link Ydb.Table.CachingPolicy.verify|verify} messages.
             * @param message CachingPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICachingPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CachingPolicy message, length delimited. Does not implicitly {@link Ydb.Table.CachingPolicy.verify|verify} messages.
             * @param message CachingPolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICachingPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CachingPolicy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CachingPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CachingPolicy;

            /**
             * Decodes a CachingPolicy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CachingPolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CachingPolicy;

            /**
             * Verifies a CachingPolicy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CachingPolicy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CachingPolicy
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CachingPolicy;

            /**
             * Creates a plain object from a CachingPolicy message. Also converts values to other types if specified.
             * @param message CachingPolicy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CachingPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CachingPolicy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TableProfile. */
        interface ITableProfile {

            /** TableProfile presetName */
            presetName?: (string|null);

            /** TableProfile storagePolicy */
            storagePolicy?: (Ydb.Table.IStoragePolicy|null);

            /** TableProfile compactionPolicy */
            compactionPolicy?: (Ydb.Table.ICompactionPolicy|null);

            /** TableProfile partitioningPolicy */
            partitioningPolicy?: (Ydb.Table.IPartitioningPolicy|null);

            /** TableProfile executionPolicy */
            executionPolicy?: (Ydb.Table.IExecutionPolicy|null);

            /** TableProfile replicationPolicy */
            replicationPolicy?: (Ydb.Table.IReplicationPolicy|null);

            /** TableProfile cachingPolicy */
            cachingPolicy?: (Ydb.Table.ICachingPolicy|null);
        }

        /** Represents a TableProfile. */
        class TableProfile implements ITableProfile {

            /**
             * Constructs a new TableProfile.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ITableProfile);

            /** TableProfile presetName. */
            public presetName: string;

            /** TableProfile storagePolicy. */
            public storagePolicy?: (Ydb.Table.IStoragePolicy|null);

            /** TableProfile compactionPolicy. */
            public compactionPolicy?: (Ydb.Table.ICompactionPolicy|null);

            /** TableProfile partitioningPolicy. */
            public partitioningPolicy?: (Ydb.Table.IPartitioningPolicy|null);

            /** TableProfile executionPolicy. */
            public executionPolicy?: (Ydb.Table.IExecutionPolicy|null);

            /** TableProfile replicationPolicy. */
            public replicationPolicy?: (Ydb.Table.IReplicationPolicy|null);

            /** TableProfile cachingPolicy. */
            public cachingPolicy?: (Ydb.Table.ICachingPolicy|null);

            /**
             * Creates a new TableProfile instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TableProfile instance
             */
            public static create(properties?: Ydb.Table.ITableProfile): Ydb.Table.TableProfile;

            /**
             * Encodes the specified TableProfile message. Does not implicitly {@link Ydb.Table.TableProfile.verify|verify} messages.
             * @param message TableProfile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ITableProfile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TableProfile message, length delimited. Does not implicitly {@link Ydb.Table.TableProfile.verify|verify} messages.
             * @param message TableProfile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ITableProfile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TableProfile message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TableProfile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.TableProfile;

            /**
             * Decodes a TableProfile message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TableProfile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.TableProfile;

            /**
             * Verifies a TableProfile message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TableProfile message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TableProfile
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.TableProfile;

            /**
             * Creates a plain object from a TableProfile message. Also converts values to other types if specified.
             * @param message TableProfile
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.TableProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TableProfile to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ColumnMeta. */
        interface IColumnMeta {

            /** ColumnMeta name */
            name?: (string|null);

            /** ColumnMeta type */
            type?: (Ydb.IType|null);

            /** ColumnMeta family */
            family?: (string|null);
        }

        /** Represents a ColumnMeta. */
        class ColumnMeta implements IColumnMeta {

            /**
             * Constructs a new ColumnMeta.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IColumnMeta);

            /** ColumnMeta name. */
            public name: string;

            /** ColumnMeta type. */
            public type?: (Ydb.IType|null);

            /** ColumnMeta family. */
            public family: string;

            /**
             * Creates a new ColumnMeta instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ColumnMeta instance
             */
            public static create(properties?: Ydb.Table.IColumnMeta): Ydb.Table.ColumnMeta;

            /**
             * Encodes the specified ColumnMeta message. Does not implicitly {@link Ydb.Table.ColumnMeta.verify|verify} messages.
             * @param message ColumnMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IColumnMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ColumnMeta message, length delimited. Does not implicitly {@link Ydb.Table.ColumnMeta.verify|verify} messages.
             * @param message ColumnMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IColumnMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ColumnMeta message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ColumnMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ColumnMeta;

            /**
             * Decodes a ColumnMeta message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ColumnMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ColumnMeta;

            /**
             * Verifies a ColumnMeta message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ColumnMeta message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ColumnMeta
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ColumnMeta;

            /**
             * Creates a plain object from a ColumnMeta message. Also converts values to other types if specified.
             * @param message ColumnMeta
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ColumnMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ColumnMeta to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DateTypeColumnModeSettings. */
        interface IDateTypeColumnModeSettings {

            /** DateTypeColumnModeSettings columnName */
            columnName?: (string|null);

            /** DateTypeColumnModeSettings expireAfterSeconds */
            expireAfterSeconds?: (number|null);
        }

        /** Represents a DateTypeColumnModeSettings. */
        class DateTypeColumnModeSettings implements IDateTypeColumnModeSettings {

            /**
             * Constructs a new DateTypeColumnModeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IDateTypeColumnModeSettings);

            /** DateTypeColumnModeSettings columnName. */
            public columnName: string;

            /** DateTypeColumnModeSettings expireAfterSeconds. */
            public expireAfterSeconds: number;

            /**
             * Creates a new DateTypeColumnModeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DateTypeColumnModeSettings instance
             */
            public static create(properties?: Ydb.Table.IDateTypeColumnModeSettings): Ydb.Table.DateTypeColumnModeSettings;

            /**
             * Encodes the specified DateTypeColumnModeSettings message. Does not implicitly {@link Ydb.Table.DateTypeColumnModeSettings.verify|verify} messages.
             * @param message DateTypeColumnModeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IDateTypeColumnModeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DateTypeColumnModeSettings message, length delimited. Does not implicitly {@link Ydb.Table.DateTypeColumnModeSettings.verify|verify} messages.
             * @param message DateTypeColumnModeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IDateTypeColumnModeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DateTypeColumnModeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DateTypeColumnModeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.DateTypeColumnModeSettings;

            /**
             * Decodes a DateTypeColumnModeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DateTypeColumnModeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.DateTypeColumnModeSettings;

            /**
             * Verifies a DateTypeColumnModeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DateTypeColumnModeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DateTypeColumnModeSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.DateTypeColumnModeSettings;

            /**
             * Creates a plain object from a DateTypeColumnModeSettings message. Also converts values to other types if specified.
             * @param message DateTypeColumnModeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.DateTypeColumnModeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DateTypeColumnModeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValueSinceUnixEpochModeSettings. */
        interface IValueSinceUnixEpochModeSettings {

            /** ValueSinceUnixEpochModeSettings columnName */
            columnName?: (string|null);

            /** ValueSinceUnixEpochModeSettings columnUnit */
            columnUnit?: (Ydb.Table.ValueSinceUnixEpochModeSettings.Unit|null);

            /** ValueSinceUnixEpochModeSettings expireAfterSeconds */
            expireAfterSeconds?: (number|null);
        }

        /** Represents a ValueSinceUnixEpochModeSettings. */
        class ValueSinceUnixEpochModeSettings implements IValueSinceUnixEpochModeSettings {

            /**
             * Constructs a new ValueSinceUnixEpochModeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IValueSinceUnixEpochModeSettings);

            /** ValueSinceUnixEpochModeSettings columnName. */
            public columnName: string;

            /** ValueSinceUnixEpochModeSettings columnUnit. */
            public columnUnit: Ydb.Table.ValueSinceUnixEpochModeSettings.Unit;

            /** ValueSinceUnixEpochModeSettings expireAfterSeconds. */
            public expireAfterSeconds: number;

            /**
             * Creates a new ValueSinceUnixEpochModeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ValueSinceUnixEpochModeSettings instance
             */
            public static create(properties?: Ydb.Table.IValueSinceUnixEpochModeSettings): Ydb.Table.ValueSinceUnixEpochModeSettings;

            /**
             * Encodes the specified ValueSinceUnixEpochModeSettings message. Does not implicitly {@link Ydb.Table.ValueSinceUnixEpochModeSettings.verify|verify} messages.
             * @param message ValueSinceUnixEpochModeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IValueSinceUnixEpochModeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValueSinceUnixEpochModeSettings message, length delimited. Does not implicitly {@link Ydb.Table.ValueSinceUnixEpochModeSettings.verify|verify} messages.
             * @param message ValueSinceUnixEpochModeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IValueSinceUnixEpochModeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValueSinceUnixEpochModeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValueSinceUnixEpochModeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ValueSinceUnixEpochModeSettings;

            /**
             * Decodes a ValueSinceUnixEpochModeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValueSinceUnixEpochModeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ValueSinceUnixEpochModeSettings;

            /**
             * Verifies a ValueSinceUnixEpochModeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValueSinceUnixEpochModeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValueSinceUnixEpochModeSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ValueSinceUnixEpochModeSettings;

            /**
             * Creates a plain object from a ValueSinceUnixEpochModeSettings message. Also converts values to other types if specified.
             * @param message ValueSinceUnixEpochModeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ValueSinceUnixEpochModeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValueSinceUnixEpochModeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ValueSinceUnixEpochModeSettings {

            /** Unit enum. */
            enum Unit {
                UNIT_UNSPECIFIED = 0,
                UNIT_SECONDS = 1,
                UNIT_MILLISECONDS = 2,
                UNIT_MICROSECONDS = 3,
                UNIT_NANOSECONDS = 4
            }
        }

        /** Properties of a TtlSettings. */
        interface ITtlSettings {

            /** TtlSettings dateTypeColumn */
            dateTypeColumn?: (Ydb.Table.IDateTypeColumnModeSettings|null);

            /** TtlSettings valueSinceUnixEpoch */
            valueSinceUnixEpoch?: (Ydb.Table.IValueSinceUnixEpochModeSettings|null);
        }

        /** Represents a TtlSettings. */
        class TtlSettings implements ITtlSettings {

            /**
             * Constructs a new TtlSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ITtlSettings);

            /** TtlSettings dateTypeColumn. */
            public dateTypeColumn?: (Ydb.Table.IDateTypeColumnModeSettings|null);

            /** TtlSettings valueSinceUnixEpoch. */
            public valueSinceUnixEpoch?: (Ydb.Table.IValueSinceUnixEpochModeSettings|null);

            /** TtlSettings mode. */
            public mode?: ("dateTypeColumn"|"valueSinceUnixEpoch");

            /**
             * Creates a new TtlSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TtlSettings instance
             */
            public static create(properties?: Ydb.Table.ITtlSettings): Ydb.Table.TtlSettings;

            /**
             * Encodes the specified TtlSettings message. Does not implicitly {@link Ydb.Table.TtlSettings.verify|verify} messages.
             * @param message TtlSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ITtlSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TtlSettings message, length delimited. Does not implicitly {@link Ydb.Table.TtlSettings.verify|verify} messages.
             * @param message TtlSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ITtlSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TtlSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TtlSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.TtlSettings;

            /**
             * Decodes a TtlSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TtlSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.TtlSettings;

            /**
             * Verifies a TtlSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TtlSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TtlSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.TtlSettings;

            /**
             * Creates a plain object from a TtlSettings message. Also converts values to other types if specified.
             * @param message TtlSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.TtlSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TtlSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StorageSettings. */
        interface IStorageSettings {

            /** StorageSettings tabletCommitLog0 */
            tabletCommitLog0?: (Ydb.Table.IStoragePool|null);

            /** StorageSettings tabletCommitLog1 */
            tabletCommitLog1?: (Ydb.Table.IStoragePool|null);

            /** StorageSettings external */
            external?: (Ydb.Table.IStoragePool|null);

            /** StorageSettings storeExternalBlobs */
            storeExternalBlobs?: (Ydb.FeatureFlag.Status|null);
        }

        /** Represents a StorageSettings. */
        class StorageSettings implements IStorageSettings {

            /**
             * Constructs a new StorageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IStorageSettings);

            /** StorageSettings tabletCommitLog0. */
            public tabletCommitLog0?: (Ydb.Table.IStoragePool|null);

            /** StorageSettings tabletCommitLog1. */
            public tabletCommitLog1?: (Ydb.Table.IStoragePool|null);

            /** StorageSettings external. */
            public external?: (Ydb.Table.IStoragePool|null);

            /** StorageSettings storeExternalBlobs. */
            public storeExternalBlobs: Ydb.FeatureFlag.Status;

            /**
             * Creates a new StorageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StorageSettings instance
             */
            public static create(properties?: Ydb.Table.IStorageSettings): Ydb.Table.StorageSettings;

            /**
             * Encodes the specified StorageSettings message. Does not implicitly {@link Ydb.Table.StorageSettings.verify|verify} messages.
             * @param message StorageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IStorageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StorageSettings message, length delimited. Does not implicitly {@link Ydb.Table.StorageSettings.verify|verify} messages.
             * @param message StorageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IStorageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StorageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StorageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.StorageSettings;

            /**
             * Decodes a StorageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StorageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.StorageSettings;

            /**
             * Verifies a StorageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StorageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StorageSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.StorageSettings;

            /**
             * Creates a plain object from a StorageSettings message. Also converts values to other types if specified.
             * @param message StorageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.StorageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StorageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ColumnFamily. */
        interface IColumnFamily {

            /** ColumnFamily name */
            name?: (string|null);

            /** ColumnFamily data */
            data?: (Ydb.Table.IStoragePool|null);

            /** ColumnFamily compression */
            compression?: (Ydb.Table.ColumnFamily.Compression|null);

            /** ColumnFamily keepInMemory */
            keepInMemory?: (Ydb.FeatureFlag.Status|null);
        }

        /** Represents a ColumnFamily. */
        class ColumnFamily implements IColumnFamily {

            /**
             * Constructs a new ColumnFamily.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IColumnFamily);

            /** ColumnFamily name. */
            public name: string;

            /** ColumnFamily data. */
            public data?: (Ydb.Table.IStoragePool|null);

            /** ColumnFamily compression. */
            public compression: Ydb.Table.ColumnFamily.Compression;

            /** ColumnFamily keepInMemory. */
            public keepInMemory: Ydb.FeatureFlag.Status;

            /**
             * Creates a new ColumnFamily instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ColumnFamily instance
             */
            public static create(properties?: Ydb.Table.IColumnFamily): Ydb.Table.ColumnFamily;

            /**
             * Encodes the specified ColumnFamily message. Does not implicitly {@link Ydb.Table.ColumnFamily.verify|verify} messages.
             * @param message ColumnFamily message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IColumnFamily, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ColumnFamily message, length delimited. Does not implicitly {@link Ydb.Table.ColumnFamily.verify|verify} messages.
             * @param message ColumnFamily message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IColumnFamily, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ColumnFamily message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ColumnFamily
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ColumnFamily;

            /**
             * Decodes a ColumnFamily message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ColumnFamily
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ColumnFamily;

            /**
             * Verifies a ColumnFamily message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ColumnFamily message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ColumnFamily
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ColumnFamily;

            /**
             * Creates a plain object from a ColumnFamily message. Also converts values to other types if specified.
             * @param message ColumnFamily
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ColumnFamily, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ColumnFamily to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ColumnFamily {

            /** Compression enum. */
            enum Compression {
                COMPRESSION_UNSPECIFIED = 0,
                COMPRESSION_NONE = 1,
                COMPRESSION_LZ4 = 2
            }
        }

        /** Properties of a PartitioningSettings. */
        interface IPartitioningSettings {

            /** PartitioningSettings partitioningBySize */
            partitioningBySize?: (Ydb.FeatureFlag.Status|null);

            /** PartitioningSettings partitionSizeMb */
            partitionSizeMb?: (number|Long|null);

            /** PartitioningSettings partitioningByLoad */
            partitioningByLoad?: (Ydb.FeatureFlag.Status|null);

            /** PartitioningSettings minPartitionsCount */
            minPartitionsCount?: (number|Long|null);

            /** PartitioningSettings maxPartitionsCount */
            maxPartitionsCount?: (number|Long|null);
        }

        /** Represents a PartitioningSettings. */
        class PartitioningSettings implements IPartitioningSettings {

            /**
             * Constructs a new PartitioningSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IPartitioningSettings);

            /** PartitioningSettings partitioningBySize. */
            public partitioningBySize: Ydb.FeatureFlag.Status;

            /** PartitioningSettings partitionSizeMb. */
            public partitionSizeMb: (number|Long);

            /** PartitioningSettings partitioningByLoad. */
            public partitioningByLoad: Ydb.FeatureFlag.Status;

            /** PartitioningSettings minPartitionsCount. */
            public minPartitionsCount: (number|Long);

            /** PartitioningSettings maxPartitionsCount. */
            public maxPartitionsCount: (number|Long);

            /**
             * Creates a new PartitioningSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PartitioningSettings instance
             */
            public static create(properties?: Ydb.Table.IPartitioningSettings): Ydb.Table.PartitioningSettings;

            /**
             * Encodes the specified PartitioningSettings message. Does not implicitly {@link Ydb.Table.PartitioningSettings.verify|verify} messages.
             * @param message PartitioningSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IPartitioningSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PartitioningSettings message, length delimited. Does not implicitly {@link Ydb.Table.PartitioningSettings.verify|verify} messages.
             * @param message PartitioningSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IPartitioningSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PartitioningSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PartitioningSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.PartitioningSettings;

            /**
             * Decodes a PartitioningSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PartitioningSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.PartitioningSettings;

            /**
             * Verifies a PartitioningSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PartitioningSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PartitioningSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.PartitioningSettings;

            /**
             * Creates a plain object from a PartitioningSettings message. Also converts values to other types if specified.
             * @param message PartitioningSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.PartitioningSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PartitioningSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AzReadReplicasSettings. */
        interface IAzReadReplicasSettings {

            /** AzReadReplicasSettings name */
            name?: (string|null);

            /** AzReadReplicasSettings readReplicasCount */
            readReplicasCount?: (number|Long|null);
        }

        /** Represents an AzReadReplicasSettings. */
        class AzReadReplicasSettings implements IAzReadReplicasSettings {

            /**
             * Constructs a new AzReadReplicasSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IAzReadReplicasSettings);

            /** AzReadReplicasSettings name. */
            public name: string;

            /** AzReadReplicasSettings readReplicasCount. */
            public readReplicasCount: (number|Long);

            /**
             * Creates a new AzReadReplicasSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AzReadReplicasSettings instance
             */
            public static create(properties?: Ydb.Table.IAzReadReplicasSettings): Ydb.Table.AzReadReplicasSettings;

            /**
             * Encodes the specified AzReadReplicasSettings message. Does not implicitly {@link Ydb.Table.AzReadReplicasSettings.verify|verify} messages.
             * @param message AzReadReplicasSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IAzReadReplicasSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AzReadReplicasSettings message, length delimited. Does not implicitly {@link Ydb.Table.AzReadReplicasSettings.verify|verify} messages.
             * @param message AzReadReplicasSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IAzReadReplicasSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AzReadReplicasSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AzReadReplicasSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.AzReadReplicasSettings;

            /**
             * Decodes an AzReadReplicasSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AzReadReplicasSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.AzReadReplicasSettings;

            /**
             * Verifies an AzReadReplicasSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AzReadReplicasSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AzReadReplicasSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.AzReadReplicasSettings;

            /**
             * Creates a plain object from an AzReadReplicasSettings message. Also converts values to other types if specified.
             * @param message AzReadReplicasSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.AzReadReplicasSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AzReadReplicasSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ClusterReplicasSettings. */
        interface IClusterReplicasSettings {

            /** ClusterReplicasSettings azReadReplicasSettings */
            azReadReplicasSettings?: (Ydb.Table.IAzReadReplicasSettings[]|null);
        }

        /** Represents a ClusterReplicasSettings. */
        class ClusterReplicasSettings implements IClusterReplicasSettings {

            /**
             * Constructs a new ClusterReplicasSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IClusterReplicasSettings);

            /** ClusterReplicasSettings azReadReplicasSettings. */
            public azReadReplicasSettings: Ydb.Table.IAzReadReplicasSettings[];

            /**
             * Creates a new ClusterReplicasSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClusterReplicasSettings instance
             */
            public static create(properties?: Ydb.Table.IClusterReplicasSettings): Ydb.Table.ClusterReplicasSettings;

            /**
             * Encodes the specified ClusterReplicasSettings message. Does not implicitly {@link Ydb.Table.ClusterReplicasSettings.verify|verify} messages.
             * @param message ClusterReplicasSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IClusterReplicasSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClusterReplicasSettings message, length delimited. Does not implicitly {@link Ydb.Table.ClusterReplicasSettings.verify|verify} messages.
             * @param message ClusterReplicasSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IClusterReplicasSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClusterReplicasSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClusterReplicasSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ClusterReplicasSettings;

            /**
             * Decodes a ClusterReplicasSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClusterReplicasSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ClusterReplicasSettings;

            /**
             * Verifies a ClusterReplicasSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClusterReplicasSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClusterReplicasSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ClusterReplicasSettings;

            /**
             * Creates a plain object from a ClusterReplicasSettings message. Also converts values to other types if specified.
             * @param message ClusterReplicasSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ClusterReplicasSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClusterReplicasSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadReplicasSettings. */
        interface IReadReplicasSettings {

            /** ReadReplicasSettings perAzReadReplicasCount */
            perAzReadReplicasCount?: (number|Long|null);

            /** ReadReplicasSettings anyAzReadReplicasCount */
            anyAzReadReplicasCount?: (number|Long|null);
        }

        /** Represents a ReadReplicasSettings. */
        class ReadReplicasSettings implements IReadReplicasSettings {

            /**
             * Constructs a new ReadReplicasSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IReadReplicasSettings);

            /** ReadReplicasSettings perAzReadReplicasCount. */
            public perAzReadReplicasCount?: (number|Long|null);

            /** ReadReplicasSettings anyAzReadReplicasCount. */
            public anyAzReadReplicasCount?: (number|Long|null);

            /** ReadReplicasSettings settings. */
            public settings?: ("perAzReadReplicasCount"|"anyAzReadReplicasCount");

            /**
             * Creates a new ReadReplicasSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadReplicasSettings instance
             */
            public static create(properties?: Ydb.Table.IReadReplicasSettings): Ydb.Table.ReadReplicasSettings;

            /**
             * Encodes the specified ReadReplicasSettings message. Does not implicitly {@link Ydb.Table.ReadReplicasSettings.verify|verify} messages.
             * @param message ReadReplicasSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IReadReplicasSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadReplicasSettings message, length delimited. Does not implicitly {@link Ydb.Table.ReadReplicasSettings.verify|verify} messages.
             * @param message ReadReplicasSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IReadReplicasSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadReplicasSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadReplicasSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ReadReplicasSettings;

            /**
             * Decodes a ReadReplicasSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadReplicasSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ReadReplicasSettings;

            /**
             * Verifies a ReadReplicasSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadReplicasSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadReplicasSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ReadReplicasSettings;

            /**
             * Creates a plain object from a ReadReplicasSettings message. Also converts values to other types if specified.
             * @param message ReadReplicasSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ReadReplicasSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadReplicasSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateTableRequest. */
        interface ICreateTableRequest {

            /** CreateTableRequest sessionId */
            sessionId?: (string|null);

            /** CreateTableRequest path */
            path?: (string|null);

            /** CreateTableRequest columns */
            columns?: (Ydb.Table.IColumnMeta[]|null);

            /** CreateTableRequest primaryKey */
            primaryKey?: (string[]|null);

            /** CreateTableRequest profile */
            profile?: (Ydb.Table.ITableProfile|null);

            /** CreateTableRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** CreateTableRequest indexes */
            indexes?: (Ydb.Table.ITableIndex[]|null);

            /** CreateTableRequest ttlSettings */
            ttlSettings?: (Ydb.Table.ITtlSettings|null);

            /** CreateTableRequest storageSettings */
            storageSettings?: (Ydb.Table.IStorageSettings|null);

            /** CreateTableRequest columnFamilies */
            columnFamilies?: (Ydb.Table.IColumnFamily[]|null);

            /** CreateTableRequest attributes */
            attributes?: ({ [k: string]: string }|null);

            /** CreateTableRequest compactionPolicy */
            compactionPolicy?: (string|null);

            /** CreateTableRequest uniformPartitions */
            uniformPartitions?: (number|Long|null);

            /** CreateTableRequest partitionAtKeys */
            partitionAtKeys?: (Ydb.Table.IExplicitPartitions|null);

            /** CreateTableRequest partitioningSettings */
            partitioningSettings?: (Ydb.Table.IPartitioningSettings|null);

            /** CreateTableRequest keyBloomFilter */
            keyBloomFilter?: (Ydb.FeatureFlag.Status|null);

            /** CreateTableRequest readReplicasSettings */
            readReplicasSettings?: (Ydb.Table.IReadReplicasSettings|null);
        }

        /** Represents a CreateTableRequest. */
        class CreateTableRequest implements ICreateTableRequest {

            /**
             * Constructs a new CreateTableRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICreateTableRequest);

            /** CreateTableRequest sessionId. */
            public sessionId: string;

            /** CreateTableRequest path. */
            public path: string;

            /** CreateTableRequest columns. */
            public columns: Ydb.Table.IColumnMeta[];

            /** CreateTableRequest primaryKey. */
            public primaryKey: string[];

            /** CreateTableRequest profile. */
            public profile?: (Ydb.Table.ITableProfile|null);

            /** CreateTableRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** CreateTableRequest indexes. */
            public indexes: Ydb.Table.ITableIndex[];

            /** CreateTableRequest ttlSettings. */
            public ttlSettings?: (Ydb.Table.ITtlSettings|null);

            /** CreateTableRequest storageSettings. */
            public storageSettings?: (Ydb.Table.IStorageSettings|null);

            /** CreateTableRequest columnFamilies. */
            public columnFamilies: Ydb.Table.IColumnFamily[];

            /** CreateTableRequest attributes. */
            public attributes: { [k: string]: string };

            /** CreateTableRequest compactionPolicy. */
            public compactionPolicy: string;

            /** CreateTableRequest uniformPartitions. */
            public uniformPartitions?: (number|Long|null);

            /** CreateTableRequest partitionAtKeys. */
            public partitionAtKeys?: (Ydb.Table.IExplicitPartitions|null);

            /** CreateTableRequest partitioningSettings. */
            public partitioningSettings?: (Ydb.Table.IPartitioningSettings|null);

            /** CreateTableRequest keyBloomFilter. */
            public keyBloomFilter: Ydb.FeatureFlag.Status;

            /** CreateTableRequest readReplicasSettings. */
            public readReplicasSettings?: (Ydb.Table.IReadReplicasSettings|null);

            /** CreateTableRequest partitions. */
            public partitions?: ("uniformPartitions"|"partitionAtKeys");

            /**
             * Creates a new CreateTableRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateTableRequest instance
             */
            public static create(properties?: Ydb.Table.ICreateTableRequest): Ydb.Table.CreateTableRequest;

            /**
             * Encodes the specified CreateTableRequest message. Does not implicitly {@link Ydb.Table.CreateTableRequest.verify|verify} messages.
             * @param message CreateTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICreateTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateTableRequest message, length delimited. Does not implicitly {@link Ydb.Table.CreateTableRequest.verify|verify} messages.
             * @param message CreateTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICreateTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateTableRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CreateTableRequest;

            /**
             * Decodes a CreateTableRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CreateTableRequest;

            /**
             * Verifies a CreateTableRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateTableRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateTableRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CreateTableRequest;

            /**
             * Creates a plain object from a CreateTableRequest message. Also converts values to other types if specified.
             * @param message CreateTableRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CreateTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateTableRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateTableResponse. */
        interface ICreateTableResponse {

            /** CreateTableResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a CreateTableResponse. */
        class CreateTableResponse implements ICreateTableResponse {

            /**
             * Constructs a new CreateTableResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICreateTableResponse);

            /** CreateTableResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new CreateTableResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateTableResponse instance
             */
            public static create(properties?: Ydb.Table.ICreateTableResponse): Ydb.Table.CreateTableResponse;

            /**
             * Encodes the specified CreateTableResponse message. Does not implicitly {@link Ydb.Table.CreateTableResponse.verify|verify} messages.
             * @param message CreateTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICreateTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateTableResponse message, length delimited. Does not implicitly {@link Ydb.Table.CreateTableResponse.verify|verify} messages.
             * @param message CreateTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICreateTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateTableResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CreateTableResponse;

            /**
             * Decodes a CreateTableResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CreateTableResponse;

            /**
             * Verifies a CreateTableResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateTableResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateTableResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CreateTableResponse;

            /**
             * Creates a plain object from a CreateTableResponse message. Also converts values to other types if specified.
             * @param message CreateTableResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CreateTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateTableResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DropTableRequest. */
        interface IDropTableRequest {

            /** DropTableRequest sessionId */
            sessionId?: (string|null);

            /** DropTableRequest path */
            path?: (string|null);

            /** DropTableRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents a DropTableRequest. */
        class DropTableRequest implements IDropTableRequest {

            /**
             * Constructs a new DropTableRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IDropTableRequest);

            /** DropTableRequest sessionId. */
            public sessionId: string;

            /** DropTableRequest path. */
            public path: string;

            /** DropTableRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new DropTableRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DropTableRequest instance
             */
            public static create(properties?: Ydb.Table.IDropTableRequest): Ydb.Table.DropTableRequest;

            /**
             * Encodes the specified DropTableRequest message. Does not implicitly {@link Ydb.Table.DropTableRequest.verify|verify} messages.
             * @param message DropTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IDropTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DropTableRequest message, length delimited. Does not implicitly {@link Ydb.Table.DropTableRequest.verify|verify} messages.
             * @param message DropTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IDropTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DropTableRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DropTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.DropTableRequest;

            /**
             * Decodes a DropTableRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DropTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.DropTableRequest;

            /**
             * Verifies a DropTableRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DropTableRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DropTableRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.DropTableRequest;

            /**
             * Creates a plain object from a DropTableRequest message. Also converts values to other types if specified.
             * @param message DropTableRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.DropTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DropTableRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DropTableResponse. */
        interface IDropTableResponse {

            /** DropTableResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a DropTableResponse. */
        class DropTableResponse implements IDropTableResponse {

            /**
             * Constructs a new DropTableResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IDropTableResponse);

            /** DropTableResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new DropTableResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DropTableResponse instance
             */
            public static create(properties?: Ydb.Table.IDropTableResponse): Ydb.Table.DropTableResponse;

            /**
             * Encodes the specified DropTableResponse message. Does not implicitly {@link Ydb.Table.DropTableResponse.verify|verify} messages.
             * @param message DropTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IDropTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DropTableResponse message, length delimited. Does not implicitly {@link Ydb.Table.DropTableResponse.verify|verify} messages.
             * @param message DropTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IDropTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DropTableResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DropTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.DropTableResponse;

            /**
             * Decodes a DropTableResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DropTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.DropTableResponse;

            /**
             * Verifies a DropTableResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DropTableResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DropTableResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.DropTableResponse;

            /**
             * Creates a plain object from a DropTableResponse message. Also converts values to other types if specified.
             * @param message DropTableResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.DropTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DropTableResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AlterTableRequest. */
        interface IAlterTableRequest {

            /** AlterTableRequest sessionId */
            sessionId?: (string|null);

            /** AlterTableRequest path */
            path?: (string|null);

            /** AlterTableRequest addColumns */
            addColumns?: (Ydb.Table.IColumnMeta[]|null);

            /** AlterTableRequest dropColumns */
            dropColumns?: (string[]|null);

            /** AlterTableRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** AlterTableRequest alterColumns */
            alterColumns?: (Ydb.Table.IColumnMeta[]|null);

            /** AlterTableRequest setTtlSettings */
            setTtlSettings?: (Ydb.Table.ITtlSettings|null);

            /** AlterTableRequest dropTtlSettings */
            dropTtlSettings?: (google.protobuf.IEmpty|null);

            /** AlterTableRequest addIndexes */
            addIndexes?: (Ydb.Table.ITableIndex[]|null);

            /** AlterTableRequest dropIndexes */
            dropIndexes?: (string[]|null);

            /** AlterTableRequest alterStorageSettings */
            alterStorageSettings?: (Ydb.Table.IStorageSettings|null);

            /** AlterTableRequest addColumnFamilies */
            addColumnFamilies?: (Ydb.Table.IColumnFamily[]|null);

            /** AlterTableRequest alterColumnFamilies */
            alterColumnFamilies?: (Ydb.Table.IColumnFamily[]|null);

            /** AlterTableRequest alterAttributes */
            alterAttributes?: ({ [k: string]: string }|null);

            /** AlterTableRequest setCompactionPolicy */
            setCompactionPolicy?: (string|null);

            /** AlterTableRequest alterPartitioningSettings */
            alterPartitioningSettings?: (Ydb.Table.IPartitioningSettings|null);

            /** AlterTableRequest setKeyBloomFilter */
            setKeyBloomFilter?: (Ydb.FeatureFlag.Status|null);

            /** AlterTableRequest setReadReplicasSettings */
            setReadReplicasSettings?: (Ydb.Table.IReadReplicasSettings|null);
        }

        /** Represents an AlterTableRequest. */
        class AlterTableRequest implements IAlterTableRequest {

            /**
             * Constructs a new AlterTableRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IAlterTableRequest);

            /** AlterTableRequest sessionId. */
            public sessionId: string;

            /** AlterTableRequest path. */
            public path: string;

            /** AlterTableRequest addColumns. */
            public addColumns: Ydb.Table.IColumnMeta[];

            /** AlterTableRequest dropColumns. */
            public dropColumns: string[];

            /** AlterTableRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** AlterTableRequest alterColumns. */
            public alterColumns: Ydb.Table.IColumnMeta[];

            /** AlterTableRequest setTtlSettings. */
            public setTtlSettings?: (Ydb.Table.ITtlSettings|null);

            /** AlterTableRequest dropTtlSettings. */
            public dropTtlSettings?: (google.protobuf.IEmpty|null);

            /** AlterTableRequest addIndexes. */
            public addIndexes: Ydb.Table.ITableIndex[];

            /** AlterTableRequest dropIndexes. */
            public dropIndexes: string[];

            /** AlterTableRequest alterStorageSettings. */
            public alterStorageSettings?: (Ydb.Table.IStorageSettings|null);

            /** AlterTableRequest addColumnFamilies. */
            public addColumnFamilies: Ydb.Table.IColumnFamily[];

            /** AlterTableRequest alterColumnFamilies. */
            public alterColumnFamilies: Ydb.Table.IColumnFamily[];

            /** AlterTableRequest alterAttributes. */
            public alterAttributes: { [k: string]: string };

            /** AlterTableRequest setCompactionPolicy. */
            public setCompactionPolicy: string;

            /** AlterTableRequest alterPartitioningSettings. */
            public alterPartitioningSettings?: (Ydb.Table.IPartitioningSettings|null);

            /** AlterTableRequest setKeyBloomFilter. */
            public setKeyBloomFilter: Ydb.FeatureFlag.Status;

            /** AlterTableRequest setReadReplicasSettings. */
            public setReadReplicasSettings?: (Ydb.Table.IReadReplicasSettings|null);

            /** AlterTableRequest ttlAction. */
            public ttlAction?: ("setTtlSettings"|"dropTtlSettings");

            /**
             * Creates a new AlterTableRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AlterTableRequest instance
             */
            public static create(properties?: Ydb.Table.IAlterTableRequest): Ydb.Table.AlterTableRequest;

            /**
             * Encodes the specified AlterTableRequest message. Does not implicitly {@link Ydb.Table.AlterTableRequest.verify|verify} messages.
             * @param message AlterTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IAlterTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AlterTableRequest message, length delimited. Does not implicitly {@link Ydb.Table.AlterTableRequest.verify|verify} messages.
             * @param message AlterTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IAlterTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AlterTableRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AlterTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.AlterTableRequest;

            /**
             * Decodes an AlterTableRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AlterTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.AlterTableRequest;

            /**
             * Verifies an AlterTableRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AlterTableRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AlterTableRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.AlterTableRequest;

            /**
             * Creates a plain object from an AlterTableRequest message. Also converts values to other types if specified.
             * @param message AlterTableRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.AlterTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AlterTableRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AlterTableResponse. */
        interface IAlterTableResponse {

            /** AlterTableResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents an AlterTableResponse. */
        class AlterTableResponse implements IAlterTableResponse {

            /**
             * Constructs a new AlterTableResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IAlterTableResponse);

            /** AlterTableResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new AlterTableResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AlterTableResponse instance
             */
            public static create(properties?: Ydb.Table.IAlterTableResponse): Ydb.Table.AlterTableResponse;

            /**
             * Encodes the specified AlterTableResponse message. Does not implicitly {@link Ydb.Table.AlterTableResponse.verify|verify} messages.
             * @param message AlterTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IAlterTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AlterTableResponse message, length delimited. Does not implicitly {@link Ydb.Table.AlterTableResponse.verify|verify} messages.
             * @param message AlterTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IAlterTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AlterTableResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AlterTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.AlterTableResponse;

            /**
             * Decodes an AlterTableResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AlterTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.AlterTableResponse;

            /**
             * Verifies an AlterTableResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AlterTableResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AlterTableResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.AlterTableResponse;

            /**
             * Creates a plain object from an AlterTableResponse message. Also converts values to other types if specified.
             * @param message AlterTableResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.AlterTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AlterTableResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CopyTableRequest. */
        interface ICopyTableRequest {

            /** CopyTableRequest sessionId */
            sessionId?: (string|null);

            /** CopyTableRequest sourcePath */
            sourcePath?: (string|null);

            /** CopyTableRequest destinationPath */
            destinationPath?: (string|null);

            /** CopyTableRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents a CopyTableRequest. */
        class CopyTableRequest implements ICopyTableRequest {

            /**
             * Constructs a new CopyTableRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICopyTableRequest);

            /** CopyTableRequest sessionId. */
            public sessionId: string;

            /** CopyTableRequest sourcePath. */
            public sourcePath: string;

            /** CopyTableRequest destinationPath. */
            public destinationPath: string;

            /** CopyTableRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new CopyTableRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CopyTableRequest instance
             */
            public static create(properties?: Ydb.Table.ICopyTableRequest): Ydb.Table.CopyTableRequest;

            /**
             * Encodes the specified CopyTableRequest message. Does not implicitly {@link Ydb.Table.CopyTableRequest.verify|verify} messages.
             * @param message CopyTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICopyTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CopyTableRequest message, length delimited. Does not implicitly {@link Ydb.Table.CopyTableRequest.verify|verify} messages.
             * @param message CopyTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICopyTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CopyTableRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CopyTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CopyTableRequest;

            /**
             * Decodes a CopyTableRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CopyTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CopyTableRequest;

            /**
             * Verifies a CopyTableRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CopyTableRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CopyTableRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CopyTableRequest;

            /**
             * Creates a plain object from a CopyTableRequest message. Also converts values to other types if specified.
             * @param message CopyTableRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CopyTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CopyTableRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CopyTableResponse. */
        interface ICopyTableResponse {

            /** CopyTableResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a CopyTableResponse. */
        class CopyTableResponse implements ICopyTableResponse {

            /**
             * Constructs a new CopyTableResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICopyTableResponse);

            /** CopyTableResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new CopyTableResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CopyTableResponse instance
             */
            public static create(properties?: Ydb.Table.ICopyTableResponse): Ydb.Table.CopyTableResponse;

            /**
             * Encodes the specified CopyTableResponse message. Does not implicitly {@link Ydb.Table.CopyTableResponse.verify|verify} messages.
             * @param message CopyTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICopyTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CopyTableResponse message, length delimited. Does not implicitly {@link Ydb.Table.CopyTableResponse.verify|verify} messages.
             * @param message CopyTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICopyTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CopyTableResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CopyTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CopyTableResponse;

            /**
             * Decodes a CopyTableResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CopyTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CopyTableResponse;

            /**
             * Verifies a CopyTableResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CopyTableResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CopyTableResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CopyTableResponse;

            /**
             * Creates a plain object from a CopyTableResponse message. Also converts values to other types if specified.
             * @param message CopyTableResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CopyTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CopyTableResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CopyTableItem. */
        interface ICopyTableItem {

            /** CopyTableItem sourcePath */
            sourcePath?: (string|null);

            /** CopyTableItem destinationPath */
            destinationPath?: (string|null);

            /** CopyTableItem omitIndexes */
            omitIndexes?: (boolean|null);
        }

        /** Represents a CopyTableItem. */
        class CopyTableItem implements ICopyTableItem {

            /**
             * Constructs a new CopyTableItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICopyTableItem);

            /** CopyTableItem sourcePath. */
            public sourcePath: string;

            /** CopyTableItem destinationPath. */
            public destinationPath: string;

            /** CopyTableItem omitIndexes. */
            public omitIndexes: boolean;

            /**
             * Creates a new CopyTableItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CopyTableItem instance
             */
            public static create(properties?: Ydb.Table.ICopyTableItem): Ydb.Table.CopyTableItem;

            /**
             * Encodes the specified CopyTableItem message. Does not implicitly {@link Ydb.Table.CopyTableItem.verify|verify} messages.
             * @param message CopyTableItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICopyTableItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CopyTableItem message, length delimited. Does not implicitly {@link Ydb.Table.CopyTableItem.verify|verify} messages.
             * @param message CopyTableItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICopyTableItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CopyTableItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CopyTableItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CopyTableItem;

            /**
             * Decodes a CopyTableItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CopyTableItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CopyTableItem;

            /**
             * Verifies a CopyTableItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CopyTableItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CopyTableItem
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CopyTableItem;

            /**
             * Creates a plain object from a CopyTableItem message. Also converts values to other types if specified.
             * @param message CopyTableItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CopyTableItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CopyTableItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CopyTablesRequest. */
        interface ICopyTablesRequest {

            /** CopyTablesRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** CopyTablesRequest sessionId */
            sessionId?: (string|null);

            /** CopyTablesRequest tables */
            tables?: (Ydb.Table.ICopyTableItem[]|null);
        }

        /** Represents a CopyTablesRequest. */
        class CopyTablesRequest implements ICopyTablesRequest {

            /**
             * Constructs a new CopyTablesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICopyTablesRequest);

            /** CopyTablesRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** CopyTablesRequest sessionId. */
            public sessionId: string;

            /** CopyTablesRequest tables. */
            public tables: Ydb.Table.ICopyTableItem[];

            /**
             * Creates a new CopyTablesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CopyTablesRequest instance
             */
            public static create(properties?: Ydb.Table.ICopyTablesRequest): Ydb.Table.CopyTablesRequest;

            /**
             * Encodes the specified CopyTablesRequest message. Does not implicitly {@link Ydb.Table.CopyTablesRequest.verify|verify} messages.
             * @param message CopyTablesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICopyTablesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CopyTablesRequest message, length delimited. Does not implicitly {@link Ydb.Table.CopyTablesRequest.verify|verify} messages.
             * @param message CopyTablesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICopyTablesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CopyTablesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CopyTablesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CopyTablesRequest;

            /**
             * Decodes a CopyTablesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CopyTablesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CopyTablesRequest;

            /**
             * Verifies a CopyTablesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CopyTablesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CopyTablesRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CopyTablesRequest;

            /**
             * Creates a plain object from a CopyTablesRequest message. Also converts values to other types if specified.
             * @param message CopyTablesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CopyTablesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CopyTablesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CopyTablesResponse. */
        interface ICopyTablesResponse {

            /** CopyTablesResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a CopyTablesResponse. */
        class CopyTablesResponse implements ICopyTablesResponse {

            /**
             * Constructs a new CopyTablesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICopyTablesResponse);

            /** CopyTablesResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new CopyTablesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CopyTablesResponse instance
             */
            public static create(properties?: Ydb.Table.ICopyTablesResponse): Ydb.Table.CopyTablesResponse;

            /**
             * Encodes the specified CopyTablesResponse message. Does not implicitly {@link Ydb.Table.CopyTablesResponse.verify|verify} messages.
             * @param message CopyTablesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICopyTablesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CopyTablesResponse message, length delimited. Does not implicitly {@link Ydb.Table.CopyTablesResponse.verify|verify} messages.
             * @param message CopyTablesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICopyTablesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CopyTablesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CopyTablesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CopyTablesResponse;

            /**
             * Decodes a CopyTablesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CopyTablesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CopyTablesResponse;

            /**
             * Verifies a CopyTablesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CopyTablesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CopyTablesResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CopyTablesResponse;

            /**
             * Creates a plain object from a CopyTablesResponse message. Also converts values to other types if specified.
             * @param message CopyTablesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CopyTablesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CopyTablesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RenameTableItem. */
        interface IRenameTableItem {

            /** RenameTableItem sourcePath */
            sourcePath?: (string|null);

            /** RenameTableItem destinationPath */
            destinationPath?: (string|null);

            /** RenameTableItem replaceDestination */
            replaceDestination?: (boolean|null);
        }

        /** Represents a RenameTableItem. */
        class RenameTableItem implements IRenameTableItem {

            /**
             * Constructs a new RenameTableItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IRenameTableItem);

            /** RenameTableItem sourcePath. */
            public sourcePath: string;

            /** RenameTableItem destinationPath. */
            public destinationPath: string;

            /** RenameTableItem replaceDestination. */
            public replaceDestination: boolean;

            /**
             * Creates a new RenameTableItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RenameTableItem instance
             */
            public static create(properties?: Ydb.Table.IRenameTableItem): Ydb.Table.RenameTableItem;

            /**
             * Encodes the specified RenameTableItem message. Does not implicitly {@link Ydb.Table.RenameTableItem.verify|verify} messages.
             * @param message RenameTableItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IRenameTableItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RenameTableItem message, length delimited. Does not implicitly {@link Ydb.Table.RenameTableItem.verify|verify} messages.
             * @param message RenameTableItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IRenameTableItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RenameTableItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RenameTableItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.RenameTableItem;

            /**
             * Decodes a RenameTableItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RenameTableItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.RenameTableItem;

            /**
             * Verifies a RenameTableItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RenameTableItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RenameTableItem
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.RenameTableItem;

            /**
             * Creates a plain object from a RenameTableItem message. Also converts values to other types if specified.
             * @param message RenameTableItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.RenameTableItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RenameTableItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RenameTablesRequest. */
        interface IRenameTablesRequest {

            /** RenameTablesRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** RenameTablesRequest sessionId */
            sessionId?: (string|null);

            /** RenameTablesRequest tables */
            tables?: (Ydb.Table.IRenameTableItem[]|null);
        }

        /** Represents a RenameTablesRequest. */
        class RenameTablesRequest implements IRenameTablesRequest {

            /**
             * Constructs a new RenameTablesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IRenameTablesRequest);

            /** RenameTablesRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** RenameTablesRequest sessionId. */
            public sessionId: string;

            /** RenameTablesRequest tables. */
            public tables: Ydb.Table.IRenameTableItem[];

            /**
             * Creates a new RenameTablesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RenameTablesRequest instance
             */
            public static create(properties?: Ydb.Table.IRenameTablesRequest): Ydb.Table.RenameTablesRequest;

            /**
             * Encodes the specified RenameTablesRequest message. Does not implicitly {@link Ydb.Table.RenameTablesRequest.verify|verify} messages.
             * @param message RenameTablesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IRenameTablesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RenameTablesRequest message, length delimited. Does not implicitly {@link Ydb.Table.RenameTablesRequest.verify|verify} messages.
             * @param message RenameTablesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IRenameTablesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RenameTablesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RenameTablesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.RenameTablesRequest;

            /**
             * Decodes a RenameTablesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RenameTablesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.RenameTablesRequest;

            /**
             * Verifies a RenameTablesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RenameTablesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RenameTablesRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.RenameTablesRequest;

            /**
             * Creates a plain object from a RenameTablesRequest message. Also converts values to other types if specified.
             * @param message RenameTablesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.RenameTablesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RenameTablesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RenameTablesResponse. */
        interface IRenameTablesResponse {

            /** RenameTablesResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a RenameTablesResponse. */
        class RenameTablesResponse implements IRenameTablesResponse {

            /**
             * Constructs a new RenameTablesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IRenameTablesResponse);

            /** RenameTablesResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new RenameTablesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RenameTablesResponse instance
             */
            public static create(properties?: Ydb.Table.IRenameTablesResponse): Ydb.Table.RenameTablesResponse;

            /**
             * Encodes the specified RenameTablesResponse message. Does not implicitly {@link Ydb.Table.RenameTablesResponse.verify|verify} messages.
             * @param message RenameTablesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IRenameTablesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RenameTablesResponse message, length delimited. Does not implicitly {@link Ydb.Table.RenameTablesResponse.verify|verify} messages.
             * @param message RenameTablesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IRenameTablesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RenameTablesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RenameTablesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.RenameTablesResponse;

            /**
             * Decodes a RenameTablesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RenameTablesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.RenameTablesResponse;

            /**
             * Verifies a RenameTablesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RenameTablesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RenameTablesResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.RenameTablesResponse;

            /**
             * Creates a plain object from a RenameTablesResponse message. Also converts values to other types if specified.
             * @param message RenameTablesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.RenameTablesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RenameTablesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescribeTableRequest. */
        interface IDescribeTableRequest {

            /** DescribeTableRequest sessionId */
            sessionId?: (string|null);

            /** DescribeTableRequest path */
            path?: (string|null);

            /** DescribeTableRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** DescribeTableRequest includeShardKeyBounds */
            includeShardKeyBounds?: (boolean|null);

            /** DescribeTableRequest includeTableStats */
            includeTableStats?: (boolean|null);

            /** DescribeTableRequest includePartitionStats */
            includePartitionStats?: (boolean|null);
        }

        /** Represents a DescribeTableRequest. */
        class DescribeTableRequest implements IDescribeTableRequest {

            /**
             * Constructs a new DescribeTableRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IDescribeTableRequest);

            /** DescribeTableRequest sessionId. */
            public sessionId: string;

            /** DescribeTableRequest path. */
            public path: string;

            /** DescribeTableRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** DescribeTableRequest includeShardKeyBounds. */
            public includeShardKeyBounds: boolean;

            /** DescribeTableRequest includeTableStats. */
            public includeTableStats: boolean;

            /** DescribeTableRequest includePartitionStats. */
            public includePartitionStats: boolean;

            /**
             * Creates a new DescribeTableRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescribeTableRequest instance
             */
            public static create(properties?: Ydb.Table.IDescribeTableRequest): Ydb.Table.DescribeTableRequest;

            /**
             * Encodes the specified DescribeTableRequest message. Does not implicitly {@link Ydb.Table.DescribeTableRequest.verify|verify} messages.
             * @param message DescribeTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IDescribeTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescribeTableRequest message, length delimited. Does not implicitly {@link Ydb.Table.DescribeTableRequest.verify|verify} messages.
             * @param message DescribeTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IDescribeTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescribeTableRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescribeTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.DescribeTableRequest;

            /**
             * Decodes a DescribeTableRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescribeTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.DescribeTableRequest;

            /**
             * Verifies a DescribeTableRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescribeTableRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescribeTableRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.DescribeTableRequest;

            /**
             * Creates a plain object from a DescribeTableRequest message. Also converts values to other types if specified.
             * @param message DescribeTableRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.DescribeTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescribeTableRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescribeTableResponse. */
        interface IDescribeTableResponse {

            /** DescribeTableResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a DescribeTableResponse. */
        class DescribeTableResponse implements IDescribeTableResponse {

            /**
             * Constructs a new DescribeTableResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IDescribeTableResponse);

            /** DescribeTableResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new DescribeTableResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescribeTableResponse instance
             */
            public static create(properties?: Ydb.Table.IDescribeTableResponse): Ydb.Table.DescribeTableResponse;

            /**
             * Encodes the specified DescribeTableResponse message. Does not implicitly {@link Ydb.Table.DescribeTableResponse.verify|verify} messages.
             * @param message DescribeTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IDescribeTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescribeTableResponse message, length delimited. Does not implicitly {@link Ydb.Table.DescribeTableResponse.verify|verify} messages.
             * @param message DescribeTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IDescribeTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescribeTableResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescribeTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.DescribeTableResponse;

            /**
             * Decodes a DescribeTableResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescribeTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.DescribeTableResponse;

            /**
             * Verifies a DescribeTableResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescribeTableResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescribeTableResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.DescribeTableResponse;

            /**
             * Creates a plain object from a DescribeTableResponse message. Also converts values to other types if specified.
             * @param message DescribeTableResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.DescribeTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescribeTableResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescribeTableResult. */
        interface IDescribeTableResult {

            /** DescribeTableResult self */
            self?: (Ydb.Scheme.IEntry|null);

            /** DescribeTableResult columns */
            columns?: (Ydb.Table.IColumnMeta[]|null);

            /** DescribeTableResult primaryKey */
            primaryKey?: (string[]|null);

            /** DescribeTableResult shardKeyBounds */
            shardKeyBounds?: (Ydb.ITypedValue[]|null);

            /** DescribeTableResult indexes */
            indexes?: (Ydb.Table.ITableIndexDescription[]|null);

            /** DescribeTableResult tableStats */
            tableStats?: (Ydb.Table.ITableStats|null);

            /** DescribeTableResult ttlSettings */
            ttlSettings?: (Ydb.Table.ITtlSettings|null);

            /** DescribeTableResult storageSettings */
            storageSettings?: (Ydb.Table.IStorageSettings|null);

            /** DescribeTableResult columnFamilies */
            columnFamilies?: (Ydb.Table.IColumnFamily[]|null);

            /** DescribeTableResult attributes */
            attributes?: ({ [k: string]: string }|null);

            /** DescribeTableResult partitioningSettings */
            partitioningSettings?: (Ydb.Table.IPartitioningSettings|null);

            /** DescribeTableResult keyBloomFilter */
            keyBloomFilter?: (Ydb.FeatureFlag.Status|null);

            /** DescribeTableResult readReplicasSettings */
            readReplicasSettings?: (Ydb.Table.IReadReplicasSettings|null);
        }

        /** Represents a DescribeTableResult. */
        class DescribeTableResult implements IDescribeTableResult {

            /**
             * Constructs a new DescribeTableResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IDescribeTableResult);

            /** DescribeTableResult self. */
            public self?: (Ydb.Scheme.IEntry|null);

            /** DescribeTableResult columns. */
            public columns: Ydb.Table.IColumnMeta[];

            /** DescribeTableResult primaryKey. */
            public primaryKey: string[];

            /** DescribeTableResult shardKeyBounds. */
            public shardKeyBounds: Ydb.ITypedValue[];

            /** DescribeTableResult indexes. */
            public indexes: Ydb.Table.ITableIndexDescription[];

            /** DescribeTableResult tableStats. */
            public tableStats?: (Ydb.Table.ITableStats|null);

            /** DescribeTableResult ttlSettings. */
            public ttlSettings?: (Ydb.Table.ITtlSettings|null);

            /** DescribeTableResult storageSettings. */
            public storageSettings?: (Ydb.Table.IStorageSettings|null);

            /** DescribeTableResult columnFamilies. */
            public columnFamilies: Ydb.Table.IColumnFamily[];

            /** DescribeTableResult attributes. */
            public attributes: { [k: string]: string };

            /** DescribeTableResult partitioningSettings. */
            public partitioningSettings?: (Ydb.Table.IPartitioningSettings|null);

            /** DescribeTableResult keyBloomFilter. */
            public keyBloomFilter: Ydb.FeatureFlag.Status;

            /** DescribeTableResult readReplicasSettings. */
            public readReplicasSettings?: (Ydb.Table.IReadReplicasSettings|null);

            /**
             * Creates a new DescribeTableResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescribeTableResult instance
             */
            public static create(properties?: Ydb.Table.IDescribeTableResult): Ydb.Table.DescribeTableResult;

            /**
             * Encodes the specified DescribeTableResult message. Does not implicitly {@link Ydb.Table.DescribeTableResult.verify|verify} messages.
             * @param message DescribeTableResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IDescribeTableResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescribeTableResult message, length delimited. Does not implicitly {@link Ydb.Table.DescribeTableResult.verify|verify} messages.
             * @param message DescribeTableResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IDescribeTableResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescribeTableResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescribeTableResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.DescribeTableResult;

            /**
             * Decodes a DescribeTableResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescribeTableResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.DescribeTableResult;

            /**
             * Verifies a DescribeTableResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescribeTableResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescribeTableResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.DescribeTableResult;

            /**
             * Creates a plain object from a DescribeTableResult message. Also converts values to other types if specified.
             * @param message DescribeTableResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.DescribeTableResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescribeTableResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Query. */
        interface IQuery {

            /** Query yqlText */
            yqlText?: (string|null);

            /** Query id */
            id?: (string|null);
        }

        /** Represents a Query. */
        class Query implements IQuery {

            /**
             * Constructs a new Query.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IQuery);

            /** Query yqlText. */
            public yqlText?: (string|null);

            /** Query id. */
            public id?: (string|null);

            /** Query query. */
            public query?: ("yqlText"|"id");

            /**
             * Creates a new Query instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Query instance
             */
            public static create(properties?: Ydb.Table.IQuery): Ydb.Table.Query;

            /**
             * Encodes the specified Query message. Does not implicitly {@link Ydb.Table.Query.verify|verify} messages.
             * @param message Query message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Query message, length delimited. Does not implicitly {@link Ydb.Table.Query.verify|verify} messages.
             * @param message Query message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Query message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Query
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.Query;

            /**
             * Decodes a Query message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Query
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.Query;

            /**
             * Verifies a Query message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Query message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Query
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.Query;

            /**
             * Creates a plain object from a Query message. Also converts values to other types if specified.
             * @param message Query
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.Query, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Query to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SerializableModeSettings. */
        interface ISerializableModeSettings {
        }

        /** Represents a SerializableModeSettings. */
        class SerializableModeSettings implements ISerializableModeSettings {

            /**
             * Constructs a new SerializableModeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ISerializableModeSettings);

            /**
             * Creates a new SerializableModeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SerializableModeSettings instance
             */
            public static create(properties?: Ydb.Table.ISerializableModeSettings): Ydb.Table.SerializableModeSettings;

            /**
             * Encodes the specified SerializableModeSettings message. Does not implicitly {@link Ydb.Table.SerializableModeSettings.verify|verify} messages.
             * @param message SerializableModeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ISerializableModeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SerializableModeSettings message, length delimited. Does not implicitly {@link Ydb.Table.SerializableModeSettings.verify|verify} messages.
             * @param message SerializableModeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ISerializableModeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SerializableModeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SerializableModeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.SerializableModeSettings;

            /**
             * Decodes a SerializableModeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SerializableModeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.SerializableModeSettings;

            /**
             * Verifies a SerializableModeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SerializableModeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SerializableModeSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.SerializableModeSettings;

            /**
             * Creates a plain object from a SerializableModeSettings message. Also converts values to other types if specified.
             * @param message SerializableModeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.SerializableModeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SerializableModeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OnlineModeSettings. */
        interface IOnlineModeSettings {

            /** OnlineModeSettings allowInconsistentReads */
            allowInconsistentReads?: (boolean|null);
        }

        /** Represents an OnlineModeSettings. */
        class OnlineModeSettings implements IOnlineModeSettings {

            /**
             * Constructs a new OnlineModeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IOnlineModeSettings);

            /** OnlineModeSettings allowInconsistentReads. */
            public allowInconsistentReads: boolean;

            /**
             * Creates a new OnlineModeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OnlineModeSettings instance
             */
            public static create(properties?: Ydb.Table.IOnlineModeSettings): Ydb.Table.OnlineModeSettings;

            /**
             * Encodes the specified OnlineModeSettings message. Does not implicitly {@link Ydb.Table.OnlineModeSettings.verify|verify} messages.
             * @param message OnlineModeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IOnlineModeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OnlineModeSettings message, length delimited. Does not implicitly {@link Ydb.Table.OnlineModeSettings.verify|verify} messages.
             * @param message OnlineModeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IOnlineModeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OnlineModeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OnlineModeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.OnlineModeSettings;

            /**
             * Decodes an OnlineModeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OnlineModeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.OnlineModeSettings;

            /**
             * Verifies an OnlineModeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OnlineModeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OnlineModeSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.OnlineModeSettings;

            /**
             * Creates a plain object from an OnlineModeSettings message. Also converts values to other types if specified.
             * @param message OnlineModeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.OnlineModeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OnlineModeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StaleModeSettings. */
        interface IStaleModeSettings {
        }

        /** Represents a StaleModeSettings. */
        class StaleModeSettings implements IStaleModeSettings {

            /**
             * Constructs a new StaleModeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IStaleModeSettings);

            /**
             * Creates a new StaleModeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StaleModeSettings instance
             */
            public static create(properties?: Ydb.Table.IStaleModeSettings): Ydb.Table.StaleModeSettings;

            /**
             * Encodes the specified StaleModeSettings message. Does not implicitly {@link Ydb.Table.StaleModeSettings.verify|verify} messages.
             * @param message StaleModeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IStaleModeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StaleModeSettings message, length delimited. Does not implicitly {@link Ydb.Table.StaleModeSettings.verify|verify} messages.
             * @param message StaleModeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IStaleModeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StaleModeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StaleModeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.StaleModeSettings;

            /**
             * Decodes a StaleModeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StaleModeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.StaleModeSettings;

            /**
             * Verifies a StaleModeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StaleModeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StaleModeSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.StaleModeSettings;

            /**
             * Creates a plain object from a StaleModeSettings message. Also converts values to other types if specified.
             * @param message StaleModeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.StaleModeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StaleModeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TransactionSettings. */
        interface ITransactionSettings {

            /** TransactionSettings serializableReadWrite */
            serializableReadWrite?: (Ydb.Table.ISerializableModeSettings|null);

            /** TransactionSettings onlineReadOnly */
            onlineReadOnly?: (Ydb.Table.IOnlineModeSettings|null);

            /** TransactionSettings staleReadOnly */
            staleReadOnly?: (Ydb.Table.IStaleModeSettings|null);
        }

        /** Represents a TransactionSettings. */
        class TransactionSettings implements ITransactionSettings {

            /**
             * Constructs a new TransactionSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ITransactionSettings);

            /** TransactionSettings serializableReadWrite. */
            public serializableReadWrite?: (Ydb.Table.ISerializableModeSettings|null);

            /** TransactionSettings onlineReadOnly. */
            public onlineReadOnly?: (Ydb.Table.IOnlineModeSettings|null);

            /** TransactionSettings staleReadOnly. */
            public staleReadOnly?: (Ydb.Table.IStaleModeSettings|null);

            /** TransactionSettings txMode. */
            public txMode?: ("serializableReadWrite"|"onlineReadOnly"|"staleReadOnly");

            /**
             * Creates a new TransactionSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransactionSettings instance
             */
            public static create(properties?: Ydb.Table.ITransactionSettings): Ydb.Table.TransactionSettings;

            /**
             * Encodes the specified TransactionSettings message. Does not implicitly {@link Ydb.Table.TransactionSettings.verify|verify} messages.
             * @param message TransactionSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ITransactionSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransactionSettings message, length delimited. Does not implicitly {@link Ydb.Table.TransactionSettings.verify|verify} messages.
             * @param message TransactionSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ITransactionSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransactionSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TransactionSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.TransactionSettings;

            /**
             * Decodes a TransactionSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TransactionSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.TransactionSettings;

            /**
             * Verifies a TransactionSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransactionSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransactionSettings
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.TransactionSettings;

            /**
             * Creates a plain object from a TransactionSettings message. Also converts values to other types if specified.
             * @param message TransactionSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.TransactionSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransactionSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TransactionControl. */
        interface ITransactionControl {

            /** TransactionControl txId */
            txId?: (string|null);

            /** TransactionControl beginTx */
            beginTx?: (Ydb.Table.ITransactionSettings|null);

            /** TransactionControl commitTx */
            commitTx?: (boolean|null);
        }

        /** Represents a TransactionControl. */
        class TransactionControl implements ITransactionControl {

            /**
             * Constructs a new TransactionControl.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ITransactionControl);

            /** TransactionControl txId. */
            public txId?: (string|null);

            /** TransactionControl beginTx. */
            public beginTx?: (Ydb.Table.ITransactionSettings|null);

            /** TransactionControl commitTx. */
            public commitTx: boolean;

            /** TransactionControl txSelector. */
            public txSelector?: ("txId"|"beginTx");

            /**
             * Creates a new TransactionControl instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransactionControl instance
             */
            public static create(properties?: Ydb.Table.ITransactionControl): Ydb.Table.TransactionControl;

            /**
             * Encodes the specified TransactionControl message. Does not implicitly {@link Ydb.Table.TransactionControl.verify|verify} messages.
             * @param message TransactionControl message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ITransactionControl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransactionControl message, length delimited. Does not implicitly {@link Ydb.Table.TransactionControl.verify|verify} messages.
             * @param message TransactionControl message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ITransactionControl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransactionControl message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TransactionControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.TransactionControl;

            /**
             * Decodes a TransactionControl message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TransactionControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.TransactionControl;

            /**
             * Verifies a TransactionControl message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransactionControl message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransactionControl
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.TransactionControl;

            /**
             * Creates a plain object from a TransactionControl message. Also converts values to other types if specified.
             * @param message TransactionControl
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.TransactionControl, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransactionControl to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryCachePolicy. */
        interface IQueryCachePolicy {

            /** QueryCachePolicy keepInCache */
            keepInCache?: (boolean|null);
        }

        /** Represents a QueryCachePolicy. */
        class QueryCachePolicy implements IQueryCachePolicy {

            /**
             * Constructs a new QueryCachePolicy.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IQueryCachePolicy);

            /** QueryCachePolicy keepInCache. */
            public keepInCache: boolean;

            /**
             * Creates a new QueryCachePolicy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryCachePolicy instance
             */
            public static create(properties?: Ydb.Table.IQueryCachePolicy): Ydb.Table.QueryCachePolicy;

            /**
             * Encodes the specified QueryCachePolicy message. Does not implicitly {@link Ydb.Table.QueryCachePolicy.verify|verify} messages.
             * @param message QueryCachePolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IQueryCachePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryCachePolicy message, length delimited. Does not implicitly {@link Ydb.Table.QueryCachePolicy.verify|verify} messages.
             * @param message QueryCachePolicy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IQueryCachePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryCachePolicy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryCachePolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.QueryCachePolicy;

            /**
             * Decodes a QueryCachePolicy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryCachePolicy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.QueryCachePolicy;

            /**
             * Verifies a QueryCachePolicy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryCachePolicy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryCachePolicy
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.QueryCachePolicy;

            /**
             * Creates a plain object from a QueryCachePolicy message. Also converts values to other types if specified.
             * @param message QueryCachePolicy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.QueryCachePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryCachePolicy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryStatsCollection. */
        interface IQueryStatsCollection {
        }

        /** Represents a QueryStatsCollection. */
        class QueryStatsCollection implements IQueryStatsCollection {

            /**
             * Constructs a new QueryStatsCollection.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IQueryStatsCollection);

            /**
             * Creates a new QueryStatsCollection instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryStatsCollection instance
             */
            public static create(properties?: Ydb.Table.IQueryStatsCollection): Ydb.Table.QueryStatsCollection;

            /**
             * Encodes the specified QueryStatsCollection message. Does not implicitly {@link Ydb.Table.QueryStatsCollection.verify|verify} messages.
             * @param message QueryStatsCollection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IQueryStatsCollection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryStatsCollection message, length delimited. Does not implicitly {@link Ydb.Table.QueryStatsCollection.verify|verify} messages.
             * @param message QueryStatsCollection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IQueryStatsCollection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryStatsCollection message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryStatsCollection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.QueryStatsCollection;

            /**
             * Decodes a QueryStatsCollection message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryStatsCollection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.QueryStatsCollection;

            /**
             * Verifies a QueryStatsCollection message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryStatsCollection message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryStatsCollection
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.QueryStatsCollection;

            /**
             * Creates a plain object from a QueryStatsCollection message. Also converts values to other types if specified.
             * @param message QueryStatsCollection
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.QueryStatsCollection, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryStatsCollection to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace QueryStatsCollection {

            /** Mode enum. */
            enum Mode {
                STATS_COLLECTION_UNSPECIFIED = 0,
                STATS_COLLECTION_NONE = 1,
                STATS_COLLECTION_BASIC = 2,
                STATS_COLLECTION_FULL = 3
            }
        }

        /** Properties of an ExecuteDataQueryRequest. */
        interface IExecuteDataQueryRequest {

            /** ExecuteDataQueryRequest sessionId */
            sessionId?: (string|null);

            /** ExecuteDataQueryRequest txControl */
            txControl?: (Ydb.Table.ITransactionControl|null);

            /** ExecuteDataQueryRequest query */
            query?: (Ydb.Table.IQuery|null);

            /** ExecuteDataQueryRequest parameters */
            parameters?: ({ [k: string]: Ydb.ITypedValue }|null);

            /** ExecuteDataQueryRequest queryCachePolicy */
            queryCachePolicy?: (Ydb.Table.IQueryCachePolicy|null);

            /** ExecuteDataQueryRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** ExecuteDataQueryRequest collectStats */
            collectStats?: (Ydb.Table.QueryStatsCollection.Mode|null);
        }

        /** Represents an ExecuteDataQueryRequest. */
        class ExecuteDataQueryRequest implements IExecuteDataQueryRequest {

            /**
             * Constructs a new ExecuteDataQueryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExecuteDataQueryRequest);

            /** ExecuteDataQueryRequest sessionId. */
            public sessionId: string;

            /** ExecuteDataQueryRequest txControl. */
            public txControl?: (Ydb.Table.ITransactionControl|null);

            /** ExecuteDataQueryRequest query. */
            public query?: (Ydb.Table.IQuery|null);

            /** ExecuteDataQueryRequest parameters. */
            public parameters: { [k: string]: Ydb.ITypedValue };

            /** ExecuteDataQueryRequest queryCachePolicy. */
            public queryCachePolicy?: (Ydb.Table.IQueryCachePolicy|null);

            /** ExecuteDataQueryRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** ExecuteDataQueryRequest collectStats. */
            public collectStats: Ydb.Table.QueryStatsCollection.Mode;

            /**
             * Creates a new ExecuteDataQueryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteDataQueryRequest instance
             */
            public static create(properties?: Ydb.Table.IExecuteDataQueryRequest): Ydb.Table.ExecuteDataQueryRequest;

            /**
             * Encodes the specified ExecuteDataQueryRequest message. Does not implicitly {@link Ydb.Table.ExecuteDataQueryRequest.verify|verify} messages.
             * @param message ExecuteDataQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExecuteDataQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteDataQueryRequest message, length delimited. Does not implicitly {@link Ydb.Table.ExecuteDataQueryRequest.verify|verify} messages.
             * @param message ExecuteDataQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExecuteDataQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteDataQueryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteDataQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExecuteDataQueryRequest;

            /**
             * Decodes an ExecuteDataQueryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteDataQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExecuteDataQueryRequest;

            /**
             * Verifies an ExecuteDataQueryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteDataQueryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteDataQueryRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExecuteDataQueryRequest;

            /**
             * Creates a plain object from an ExecuteDataQueryRequest message. Also converts values to other types if specified.
             * @param message ExecuteDataQueryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExecuteDataQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteDataQueryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecuteDataQueryResponse. */
        interface IExecuteDataQueryResponse {

            /** ExecuteDataQueryResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents an ExecuteDataQueryResponse. */
        class ExecuteDataQueryResponse implements IExecuteDataQueryResponse {

            /**
             * Constructs a new ExecuteDataQueryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExecuteDataQueryResponse);

            /** ExecuteDataQueryResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new ExecuteDataQueryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteDataQueryResponse instance
             */
            public static create(properties?: Ydb.Table.IExecuteDataQueryResponse): Ydb.Table.ExecuteDataQueryResponse;

            /**
             * Encodes the specified ExecuteDataQueryResponse message. Does not implicitly {@link Ydb.Table.ExecuteDataQueryResponse.verify|verify} messages.
             * @param message ExecuteDataQueryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExecuteDataQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteDataQueryResponse message, length delimited. Does not implicitly {@link Ydb.Table.ExecuteDataQueryResponse.verify|verify} messages.
             * @param message ExecuteDataQueryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExecuteDataQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteDataQueryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteDataQueryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExecuteDataQueryResponse;

            /**
             * Decodes an ExecuteDataQueryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteDataQueryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExecuteDataQueryResponse;

            /**
             * Verifies an ExecuteDataQueryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteDataQueryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteDataQueryResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExecuteDataQueryResponse;

            /**
             * Creates a plain object from an ExecuteDataQueryResponse message. Also converts values to other types if specified.
             * @param message ExecuteDataQueryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExecuteDataQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteDataQueryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecuteSchemeQueryRequest. */
        interface IExecuteSchemeQueryRequest {

            /** ExecuteSchemeQueryRequest sessionId */
            sessionId?: (string|null);

            /** ExecuteSchemeQueryRequest yqlText */
            yqlText?: (string|null);

            /** ExecuteSchemeQueryRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents an ExecuteSchemeQueryRequest. */
        class ExecuteSchemeQueryRequest implements IExecuteSchemeQueryRequest {

            /**
             * Constructs a new ExecuteSchemeQueryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExecuteSchemeQueryRequest);

            /** ExecuteSchemeQueryRequest sessionId. */
            public sessionId: string;

            /** ExecuteSchemeQueryRequest yqlText. */
            public yqlText: string;

            /** ExecuteSchemeQueryRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new ExecuteSchemeQueryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteSchemeQueryRequest instance
             */
            public static create(properties?: Ydb.Table.IExecuteSchemeQueryRequest): Ydb.Table.ExecuteSchemeQueryRequest;

            /**
             * Encodes the specified ExecuteSchemeQueryRequest message. Does not implicitly {@link Ydb.Table.ExecuteSchemeQueryRequest.verify|verify} messages.
             * @param message ExecuteSchemeQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExecuteSchemeQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteSchemeQueryRequest message, length delimited. Does not implicitly {@link Ydb.Table.ExecuteSchemeQueryRequest.verify|verify} messages.
             * @param message ExecuteSchemeQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExecuteSchemeQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteSchemeQueryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteSchemeQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExecuteSchemeQueryRequest;

            /**
             * Decodes an ExecuteSchemeQueryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteSchemeQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExecuteSchemeQueryRequest;

            /**
             * Verifies an ExecuteSchemeQueryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteSchemeQueryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteSchemeQueryRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExecuteSchemeQueryRequest;

            /**
             * Creates a plain object from an ExecuteSchemeQueryRequest message. Also converts values to other types if specified.
             * @param message ExecuteSchemeQueryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExecuteSchemeQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteSchemeQueryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecuteSchemeQueryResponse. */
        interface IExecuteSchemeQueryResponse {

            /** ExecuteSchemeQueryResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents an ExecuteSchemeQueryResponse. */
        class ExecuteSchemeQueryResponse implements IExecuteSchemeQueryResponse {

            /**
             * Constructs a new ExecuteSchemeQueryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExecuteSchemeQueryResponse);

            /** ExecuteSchemeQueryResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new ExecuteSchemeQueryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteSchemeQueryResponse instance
             */
            public static create(properties?: Ydb.Table.IExecuteSchemeQueryResponse): Ydb.Table.ExecuteSchemeQueryResponse;

            /**
             * Encodes the specified ExecuteSchemeQueryResponse message. Does not implicitly {@link Ydb.Table.ExecuteSchemeQueryResponse.verify|verify} messages.
             * @param message ExecuteSchemeQueryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExecuteSchemeQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteSchemeQueryResponse message, length delimited. Does not implicitly {@link Ydb.Table.ExecuteSchemeQueryResponse.verify|verify} messages.
             * @param message ExecuteSchemeQueryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExecuteSchemeQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteSchemeQueryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteSchemeQueryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExecuteSchemeQueryResponse;

            /**
             * Decodes an ExecuteSchemeQueryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteSchemeQueryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExecuteSchemeQueryResponse;

            /**
             * Verifies an ExecuteSchemeQueryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteSchemeQueryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteSchemeQueryResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExecuteSchemeQueryResponse;

            /**
             * Creates a plain object from an ExecuteSchemeQueryResponse message. Also converts values to other types if specified.
             * @param message ExecuteSchemeQueryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExecuteSchemeQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteSchemeQueryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TransactionMeta. */
        interface ITransactionMeta {

            /** TransactionMeta id */
            id?: (string|null);
        }

        /** Represents a TransactionMeta. */
        class TransactionMeta implements ITransactionMeta {

            /**
             * Constructs a new TransactionMeta.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ITransactionMeta);

            /** TransactionMeta id. */
            public id: string;

            /**
             * Creates a new TransactionMeta instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransactionMeta instance
             */
            public static create(properties?: Ydb.Table.ITransactionMeta): Ydb.Table.TransactionMeta;

            /**
             * Encodes the specified TransactionMeta message. Does not implicitly {@link Ydb.Table.TransactionMeta.verify|verify} messages.
             * @param message TransactionMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ITransactionMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransactionMeta message, length delimited. Does not implicitly {@link Ydb.Table.TransactionMeta.verify|verify} messages.
             * @param message TransactionMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ITransactionMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransactionMeta message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TransactionMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.TransactionMeta;

            /**
             * Decodes a TransactionMeta message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TransactionMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.TransactionMeta;

            /**
             * Verifies a TransactionMeta message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransactionMeta message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransactionMeta
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.TransactionMeta;

            /**
             * Creates a plain object from a TransactionMeta message. Also converts values to other types if specified.
             * @param message TransactionMeta
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.TransactionMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransactionMeta to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryMeta. */
        interface IQueryMeta {

            /** QueryMeta id */
            id?: (string|null);

            /** QueryMeta parametersTypes */
            parametersTypes?: ({ [k: string]: Ydb.IType }|null);
        }

        /** Represents a QueryMeta. */
        class QueryMeta implements IQueryMeta {

            /**
             * Constructs a new QueryMeta.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IQueryMeta);

            /** QueryMeta id. */
            public id: string;

            /** QueryMeta parametersTypes. */
            public parametersTypes: { [k: string]: Ydb.IType };

            /**
             * Creates a new QueryMeta instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryMeta instance
             */
            public static create(properties?: Ydb.Table.IQueryMeta): Ydb.Table.QueryMeta;

            /**
             * Encodes the specified QueryMeta message. Does not implicitly {@link Ydb.Table.QueryMeta.verify|verify} messages.
             * @param message QueryMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IQueryMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryMeta message, length delimited. Does not implicitly {@link Ydb.Table.QueryMeta.verify|verify} messages.
             * @param message QueryMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IQueryMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryMeta message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.QueryMeta;

            /**
             * Decodes a QueryMeta message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.QueryMeta;

            /**
             * Verifies a QueryMeta message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryMeta message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryMeta
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.QueryMeta;

            /**
             * Creates a plain object from a QueryMeta message. Also converts values to other types if specified.
             * @param message QueryMeta
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.QueryMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryMeta to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecuteQueryResult. */
        interface IExecuteQueryResult {

            /** ExecuteQueryResult resultSets */
            resultSets?: (Ydb.IResultSet[]|null);

            /** ExecuteQueryResult txMeta */
            txMeta?: (Ydb.Table.ITransactionMeta|null);

            /** ExecuteQueryResult queryMeta */
            queryMeta?: (Ydb.Table.IQueryMeta|null);

            /** ExecuteQueryResult queryStats */
            queryStats?: (Ydb.TableStats.IQueryStats|null);
        }

        /** Represents an ExecuteQueryResult. */
        class ExecuteQueryResult implements IExecuteQueryResult {

            /**
             * Constructs a new ExecuteQueryResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExecuteQueryResult);

            /** ExecuteQueryResult resultSets. */
            public resultSets: Ydb.IResultSet[];

            /** ExecuteQueryResult txMeta. */
            public txMeta?: (Ydb.Table.ITransactionMeta|null);

            /** ExecuteQueryResult queryMeta. */
            public queryMeta?: (Ydb.Table.IQueryMeta|null);

            /** ExecuteQueryResult queryStats. */
            public queryStats?: (Ydb.TableStats.IQueryStats|null);

            /**
             * Creates a new ExecuteQueryResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteQueryResult instance
             */
            public static create(properties?: Ydb.Table.IExecuteQueryResult): Ydb.Table.ExecuteQueryResult;

            /**
             * Encodes the specified ExecuteQueryResult message. Does not implicitly {@link Ydb.Table.ExecuteQueryResult.verify|verify} messages.
             * @param message ExecuteQueryResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExecuteQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteQueryResult message, length delimited. Does not implicitly {@link Ydb.Table.ExecuteQueryResult.verify|verify} messages.
             * @param message ExecuteQueryResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExecuteQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteQueryResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteQueryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExecuteQueryResult;

            /**
             * Decodes an ExecuteQueryResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteQueryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExecuteQueryResult;

            /**
             * Verifies an ExecuteQueryResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteQueryResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteQueryResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExecuteQueryResult;

            /**
             * Creates a plain object from an ExecuteQueryResult message. Also converts values to other types if specified.
             * @param message ExecuteQueryResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExecuteQueryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteQueryResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExplainDataQueryRequest. */
        interface IExplainDataQueryRequest {

            /** ExplainDataQueryRequest sessionId */
            sessionId?: (string|null);

            /** ExplainDataQueryRequest yqlText */
            yqlText?: (string|null);

            /** ExplainDataQueryRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents an ExplainDataQueryRequest. */
        class ExplainDataQueryRequest implements IExplainDataQueryRequest {

            /**
             * Constructs a new ExplainDataQueryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExplainDataQueryRequest);

            /** ExplainDataQueryRequest sessionId. */
            public sessionId: string;

            /** ExplainDataQueryRequest yqlText. */
            public yqlText: string;

            /** ExplainDataQueryRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new ExplainDataQueryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExplainDataQueryRequest instance
             */
            public static create(properties?: Ydb.Table.IExplainDataQueryRequest): Ydb.Table.ExplainDataQueryRequest;

            /**
             * Encodes the specified ExplainDataQueryRequest message. Does not implicitly {@link Ydb.Table.ExplainDataQueryRequest.verify|verify} messages.
             * @param message ExplainDataQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExplainDataQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExplainDataQueryRequest message, length delimited. Does not implicitly {@link Ydb.Table.ExplainDataQueryRequest.verify|verify} messages.
             * @param message ExplainDataQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExplainDataQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExplainDataQueryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExplainDataQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExplainDataQueryRequest;

            /**
             * Decodes an ExplainDataQueryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExplainDataQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExplainDataQueryRequest;

            /**
             * Verifies an ExplainDataQueryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExplainDataQueryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExplainDataQueryRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExplainDataQueryRequest;

            /**
             * Creates a plain object from an ExplainDataQueryRequest message. Also converts values to other types if specified.
             * @param message ExplainDataQueryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExplainDataQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExplainDataQueryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExplainDataQueryResponse. */
        interface IExplainDataQueryResponse {

            /** ExplainDataQueryResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents an ExplainDataQueryResponse. */
        class ExplainDataQueryResponse implements IExplainDataQueryResponse {

            /**
             * Constructs a new ExplainDataQueryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExplainDataQueryResponse);

            /** ExplainDataQueryResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new ExplainDataQueryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExplainDataQueryResponse instance
             */
            public static create(properties?: Ydb.Table.IExplainDataQueryResponse): Ydb.Table.ExplainDataQueryResponse;

            /**
             * Encodes the specified ExplainDataQueryResponse message. Does not implicitly {@link Ydb.Table.ExplainDataQueryResponse.verify|verify} messages.
             * @param message ExplainDataQueryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExplainDataQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExplainDataQueryResponse message, length delimited. Does not implicitly {@link Ydb.Table.ExplainDataQueryResponse.verify|verify} messages.
             * @param message ExplainDataQueryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExplainDataQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExplainDataQueryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExplainDataQueryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExplainDataQueryResponse;

            /**
             * Decodes an ExplainDataQueryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExplainDataQueryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExplainDataQueryResponse;

            /**
             * Verifies an ExplainDataQueryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExplainDataQueryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExplainDataQueryResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExplainDataQueryResponse;

            /**
             * Creates a plain object from an ExplainDataQueryResponse message. Also converts values to other types if specified.
             * @param message ExplainDataQueryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExplainDataQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExplainDataQueryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExplainQueryResult. */
        interface IExplainQueryResult {

            /** ExplainQueryResult queryAst */
            queryAst?: (string|null);

            /** ExplainQueryResult queryPlan */
            queryPlan?: (string|null);
        }

        /** Represents an ExplainQueryResult. */
        class ExplainQueryResult implements IExplainQueryResult {

            /**
             * Constructs a new ExplainQueryResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExplainQueryResult);

            /** ExplainQueryResult queryAst. */
            public queryAst: string;

            /** ExplainQueryResult queryPlan. */
            public queryPlan: string;

            /**
             * Creates a new ExplainQueryResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExplainQueryResult instance
             */
            public static create(properties?: Ydb.Table.IExplainQueryResult): Ydb.Table.ExplainQueryResult;

            /**
             * Encodes the specified ExplainQueryResult message. Does not implicitly {@link Ydb.Table.ExplainQueryResult.verify|verify} messages.
             * @param message ExplainQueryResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExplainQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExplainQueryResult message, length delimited. Does not implicitly {@link Ydb.Table.ExplainQueryResult.verify|verify} messages.
             * @param message ExplainQueryResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExplainQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExplainQueryResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExplainQueryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExplainQueryResult;

            /**
             * Decodes an ExplainQueryResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExplainQueryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExplainQueryResult;

            /**
             * Verifies an ExplainQueryResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExplainQueryResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExplainQueryResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExplainQueryResult;

            /**
             * Creates a plain object from an ExplainQueryResult message. Also converts values to other types if specified.
             * @param message ExplainQueryResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExplainQueryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExplainQueryResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PrepareDataQueryRequest. */
        interface IPrepareDataQueryRequest {

            /** PrepareDataQueryRequest sessionId */
            sessionId?: (string|null);

            /** PrepareDataQueryRequest yqlText */
            yqlText?: (string|null);

            /** PrepareDataQueryRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents a PrepareDataQueryRequest. */
        class PrepareDataQueryRequest implements IPrepareDataQueryRequest {

            /**
             * Constructs a new PrepareDataQueryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IPrepareDataQueryRequest);

            /** PrepareDataQueryRequest sessionId. */
            public sessionId: string;

            /** PrepareDataQueryRequest yqlText. */
            public yqlText: string;

            /** PrepareDataQueryRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new PrepareDataQueryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrepareDataQueryRequest instance
             */
            public static create(properties?: Ydb.Table.IPrepareDataQueryRequest): Ydb.Table.PrepareDataQueryRequest;

            /**
             * Encodes the specified PrepareDataQueryRequest message. Does not implicitly {@link Ydb.Table.PrepareDataQueryRequest.verify|verify} messages.
             * @param message PrepareDataQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IPrepareDataQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrepareDataQueryRequest message, length delimited. Does not implicitly {@link Ydb.Table.PrepareDataQueryRequest.verify|verify} messages.
             * @param message PrepareDataQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IPrepareDataQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrepareDataQueryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PrepareDataQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.PrepareDataQueryRequest;

            /**
             * Decodes a PrepareDataQueryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PrepareDataQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.PrepareDataQueryRequest;

            /**
             * Verifies a PrepareDataQueryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrepareDataQueryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrepareDataQueryRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.PrepareDataQueryRequest;

            /**
             * Creates a plain object from a PrepareDataQueryRequest message. Also converts values to other types if specified.
             * @param message PrepareDataQueryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.PrepareDataQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrepareDataQueryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PrepareDataQueryResponse. */
        interface IPrepareDataQueryResponse {

            /** PrepareDataQueryResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a PrepareDataQueryResponse. */
        class PrepareDataQueryResponse implements IPrepareDataQueryResponse {

            /**
             * Constructs a new PrepareDataQueryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IPrepareDataQueryResponse);

            /** PrepareDataQueryResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new PrepareDataQueryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrepareDataQueryResponse instance
             */
            public static create(properties?: Ydb.Table.IPrepareDataQueryResponse): Ydb.Table.PrepareDataQueryResponse;

            /**
             * Encodes the specified PrepareDataQueryResponse message. Does not implicitly {@link Ydb.Table.PrepareDataQueryResponse.verify|verify} messages.
             * @param message PrepareDataQueryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IPrepareDataQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrepareDataQueryResponse message, length delimited. Does not implicitly {@link Ydb.Table.PrepareDataQueryResponse.verify|verify} messages.
             * @param message PrepareDataQueryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IPrepareDataQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrepareDataQueryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PrepareDataQueryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.PrepareDataQueryResponse;

            /**
             * Decodes a PrepareDataQueryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PrepareDataQueryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.PrepareDataQueryResponse;

            /**
             * Verifies a PrepareDataQueryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrepareDataQueryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrepareDataQueryResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.PrepareDataQueryResponse;

            /**
             * Creates a plain object from a PrepareDataQueryResponse message. Also converts values to other types if specified.
             * @param message PrepareDataQueryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.PrepareDataQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrepareDataQueryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PrepareQueryResult. */
        interface IPrepareQueryResult {

            /** PrepareQueryResult queryId */
            queryId?: (string|null);

            /** PrepareQueryResult parametersTypes */
            parametersTypes?: ({ [k: string]: Ydb.IType }|null);
        }

        /** Represents a PrepareQueryResult. */
        class PrepareQueryResult implements IPrepareQueryResult {

            /**
             * Constructs a new PrepareQueryResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IPrepareQueryResult);

            /** PrepareQueryResult queryId. */
            public queryId: string;

            /** PrepareQueryResult parametersTypes. */
            public parametersTypes: { [k: string]: Ydb.IType };

            /**
             * Creates a new PrepareQueryResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrepareQueryResult instance
             */
            public static create(properties?: Ydb.Table.IPrepareQueryResult): Ydb.Table.PrepareQueryResult;

            /**
             * Encodes the specified PrepareQueryResult message. Does not implicitly {@link Ydb.Table.PrepareQueryResult.verify|verify} messages.
             * @param message PrepareQueryResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IPrepareQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrepareQueryResult message, length delimited. Does not implicitly {@link Ydb.Table.PrepareQueryResult.verify|verify} messages.
             * @param message PrepareQueryResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IPrepareQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrepareQueryResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PrepareQueryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.PrepareQueryResult;

            /**
             * Decodes a PrepareQueryResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PrepareQueryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.PrepareQueryResult;

            /**
             * Verifies a PrepareQueryResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrepareQueryResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrepareQueryResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.PrepareQueryResult;

            /**
             * Creates a plain object from a PrepareQueryResult message. Also converts values to other types if specified.
             * @param message PrepareQueryResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.PrepareQueryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrepareQueryResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KeepAliveRequest. */
        interface IKeepAliveRequest {

            /** KeepAliveRequest sessionId */
            sessionId?: (string|null);

            /** KeepAliveRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents a KeepAliveRequest. */
        class KeepAliveRequest implements IKeepAliveRequest {

            /**
             * Constructs a new KeepAliveRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IKeepAliveRequest);

            /** KeepAliveRequest sessionId. */
            public sessionId: string;

            /** KeepAliveRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new KeepAliveRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeepAliveRequest instance
             */
            public static create(properties?: Ydb.Table.IKeepAliveRequest): Ydb.Table.KeepAliveRequest;

            /**
             * Encodes the specified KeepAliveRequest message. Does not implicitly {@link Ydb.Table.KeepAliveRequest.verify|verify} messages.
             * @param message KeepAliveRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IKeepAliveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeepAliveRequest message, length delimited. Does not implicitly {@link Ydb.Table.KeepAliveRequest.verify|verify} messages.
             * @param message KeepAliveRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IKeepAliveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeepAliveRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeepAliveRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.KeepAliveRequest;

            /**
             * Decodes a KeepAliveRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeepAliveRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.KeepAliveRequest;

            /**
             * Verifies a KeepAliveRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeepAliveRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeepAliveRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.KeepAliveRequest;

            /**
             * Creates a plain object from a KeepAliveRequest message. Also converts values to other types if specified.
             * @param message KeepAliveRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.KeepAliveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeepAliveRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KeepAliveResponse. */
        interface IKeepAliveResponse {

            /** KeepAliveResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a KeepAliveResponse. */
        class KeepAliveResponse implements IKeepAliveResponse {

            /**
             * Constructs a new KeepAliveResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IKeepAliveResponse);

            /** KeepAliveResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new KeepAliveResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeepAliveResponse instance
             */
            public static create(properties?: Ydb.Table.IKeepAliveResponse): Ydb.Table.KeepAliveResponse;

            /**
             * Encodes the specified KeepAliveResponse message. Does not implicitly {@link Ydb.Table.KeepAliveResponse.verify|verify} messages.
             * @param message KeepAliveResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IKeepAliveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeepAliveResponse message, length delimited. Does not implicitly {@link Ydb.Table.KeepAliveResponse.verify|verify} messages.
             * @param message KeepAliveResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IKeepAliveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeepAliveResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeepAliveResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.KeepAliveResponse;

            /**
             * Decodes a KeepAliveResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeepAliveResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.KeepAliveResponse;

            /**
             * Verifies a KeepAliveResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeepAliveResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeepAliveResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.KeepAliveResponse;

            /**
             * Creates a plain object from a KeepAliveResponse message. Also converts values to other types if specified.
             * @param message KeepAliveResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.KeepAliveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeepAliveResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KeepAliveResult. */
        interface IKeepAliveResult {

            /** KeepAliveResult sessionStatus */
            sessionStatus?: (Ydb.Table.KeepAliveResult.SessionStatus|null);
        }

        /** Represents a KeepAliveResult. */
        class KeepAliveResult implements IKeepAliveResult {

            /**
             * Constructs a new KeepAliveResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IKeepAliveResult);

            /** KeepAliveResult sessionStatus. */
            public sessionStatus: Ydb.Table.KeepAliveResult.SessionStatus;

            /**
             * Creates a new KeepAliveResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeepAliveResult instance
             */
            public static create(properties?: Ydb.Table.IKeepAliveResult): Ydb.Table.KeepAliveResult;

            /**
             * Encodes the specified KeepAliveResult message. Does not implicitly {@link Ydb.Table.KeepAliveResult.verify|verify} messages.
             * @param message KeepAliveResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IKeepAliveResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeepAliveResult message, length delimited. Does not implicitly {@link Ydb.Table.KeepAliveResult.verify|verify} messages.
             * @param message KeepAliveResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IKeepAliveResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeepAliveResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeepAliveResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.KeepAliveResult;

            /**
             * Decodes a KeepAliveResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeepAliveResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.KeepAliveResult;

            /**
             * Verifies a KeepAliveResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeepAliveResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeepAliveResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.KeepAliveResult;

            /**
             * Creates a plain object from a KeepAliveResult message. Also converts values to other types if specified.
             * @param message KeepAliveResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.KeepAliveResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeepAliveResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace KeepAliveResult {

            /** SessionStatus enum. */
            enum SessionStatus {
                SESSION_STATUS_UNSPECIFIED = 0,
                SESSION_STATUS_READY = 1,
                SESSION_STATUS_BUSY = 2
            }
        }

        /** Properties of a BeginTransactionRequest. */
        interface IBeginTransactionRequest {

            /** BeginTransactionRequest sessionId */
            sessionId?: (string|null);

            /** BeginTransactionRequest txSettings */
            txSettings?: (Ydb.Table.ITransactionSettings|null);

            /** BeginTransactionRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents a BeginTransactionRequest. */
        class BeginTransactionRequest implements IBeginTransactionRequest {

            /**
             * Constructs a new BeginTransactionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IBeginTransactionRequest);

            /** BeginTransactionRequest sessionId. */
            public sessionId: string;

            /** BeginTransactionRequest txSettings. */
            public txSettings?: (Ydb.Table.ITransactionSettings|null);

            /** BeginTransactionRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new BeginTransactionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BeginTransactionRequest instance
             */
            public static create(properties?: Ydb.Table.IBeginTransactionRequest): Ydb.Table.BeginTransactionRequest;

            /**
             * Encodes the specified BeginTransactionRequest message. Does not implicitly {@link Ydb.Table.BeginTransactionRequest.verify|verify} messages.
             * @param message BeginTransactionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IBeginTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BeginTransactionRequest message, length delimited. Does not implicitly {@link Ydb.Table.BeginTransactionRequest.verify|verify} messages.
             * @param message BeginTransactionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IBeginTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BeginTransactionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BeginTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.BeginTransactionRequest;

            /**
             * Decodes a BeginTransactionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BeginTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.BeginTransactionRequest;

            /**
             * Verifies a BeginTransactionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BeginTransactionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BeginTransactionRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.BeginTransactionRequest;

            /**
             * Creates a plain object from a BeginTransactionRequest message. Also converts values to other types if specified.
             * @param message BeginTransactionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.BeginTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BeginTransactionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BeginTransactionResponse. */
        interface IBeginTransactionResponse {

            /** BeginTransactionResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a BeginTransactionResponse. */
        class BeginTransactionResponse implements IBeginTransactionResponse {

            /**
             * Constructs a new BeginTransactionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IBeginTransactionResponse);

            /** BeginTransactionResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new BeginTransactionResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BeginTransactionResponse instance
             */
            public static create(properties?: Ydb.Table.IBeginTransactionResponse): Ydb.Table.BeginTransactionResponse;

            /**
             * Encodes the specified BeginTransactionResponse message. Does not implicitly {@link Ydb.Table.BeginTransactionResponse.verify|verify} messages.
             * @param message BeginTransactionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IBeginTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BeginTransactionResponse message, length delimited. Does not implicitly {@link Ydb.Table.BeginTransactionResponse.verify|verify} messages.
             * @param message BeginTransactionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IBeginTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BeginTransactionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BeginTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.BeginTransactionResponse;

            /**
             * Decodes a BeginTransactionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BeginTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.BeginTransactionResponse;

            /**
             * Verifies a BeginTransactionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BeginTransactionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BeginTransactionResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.BeginTransactionResponse;

            /**
             * Creates a plain object from a BeginTransactionResponse message. Also converts values to other types if specified.
             * @param message BeginTransactionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.BeginTransactionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BeginTransactionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BeginTransactionResult. */
        interface IBeginTransactionResult {

            /** BeginTransactionResult txMeta */
            txMeta?: (Ydb.Table.ITransactionMeta|null);
        }

        /** Represents a BeginTransactionResult. */
        class BeginTransactionResult implements IBeginTransactionResult {

            /**
             * Constructs a new BeginTransactionResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IBeginTransactionResult);

            /** BeginTransactionResult txMeta. */
            public txMeta?: (Ydb.Table.ITransactionMeta|null);

            /**
             * Creates a new BeginTransactionResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BeginTransactionResult instance
             */
            public static create(properties?: Ydb.Table.IBeginTransactionResult): Ydb.Table.BeginTransactionResult;

            /**
             * Encodes the specified BeginTransactionResult message. Does not implicitly {@link Ydb.Table.BeginTransactionResult.verify|verify} messages.
             * @param message BeginTransactionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IBeginTransactionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BeginTransactionResult message, length delimited. Does not implicitly {@link Ydb.Table.BeginTransactionResult.verify|verify} messages.
             * @param message BeginTransactionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IBeginTransactionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BeginTransactionResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BeginTransactionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.BeginTransactionResult;

            /**
             * Decodes a BeginTransactionResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BeginTransactionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.BeginTransactionResult;

            /**
             * Verifies a BeginTransactionResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BeginTransactionResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BeginTransactionResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.BeginTransactionResult;

            /**
             * Creates a plain object from a BeginTransactionResult message. Also converts values to other types if specified.
             * @param message BeginTransactionResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.BeginTransactionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BeginTransactionResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CommitTransactionRequest. */
        interface ICommitTransactionRequest {

            /** CommitTransactionRequest sessionId */
            sessionId?: (string|null);

            /** CommitTransactionRequest txId */
            txId?: (string|null);

            /** CommitTransactionRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** CommitTransactionRequest collectStats */
            collectStats?: (Ydb.Table.QueryStatsCollection.Mode|null);
        }

        /** Represents a CommitTransactionRequest. */
        class CommitTransactionRequest implements ICommitTransactionRequest {

            /**
             * Constructs a new CommitTransactionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICommitTransactionRequest);

            /** CommitTransactionRequest sessionId. */
            public sessionId: string;

            /** CommitTransactionRequest txId. */
            public txId: string;

            /** CommitTransactionRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** CommitTransactionRequest collectStats. */
            public collectStats: Ydb.Table.QueryStatsCollection.Mode;

            /**
             * Creates a new CommitTransactionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommitTransactionRequest instance
             */
            public static create(properties?: Ydb.Table.ICommitTransactionRequest): Ydb.Table.CommitTransactionRequest;

            /**
             * Encodes the specified CommitTransactionRequest message. Does not implicitly {@link Ydb.Table.CommitTransactionRequest.verify|verify} messages.
             * @param message CommitTransactionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICommitTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommitTransactionRequest message, length delimited. Does not implicitly {@link Ydb.Table.CommitTransactionRequest.verify|verify} messages.
             * @param message CommitTransactionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICommitTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommitTransactionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommitTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CommitTransactionRequest;

            /**
             * Decodes a CommitTransactionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommitTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CommitTransactionRequest;

            /**
             * Verifies a CommitTransactionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommitTransactionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommitTransactionRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CommitTransactionRequest;

            /**
             * Creates a plain object from a CommitTransactionRequest message. Also converts values to other types if specified.
             * @param message CommitTransactionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CommitTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommitTransactionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CommitTransactionResponse. */
        interface ICommitTransactionResponse {

            /** CommitTransactionResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a CommitTransactionResponse. */
        class CommitTransactionResponse implements ICommitTransactionResponse {

            /**
             * Constructs a new CommitTransactionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICommitTransactionResponse);

            /** CommitTransactionResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new CommitTransactionResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommitTransactionResponse instance
             */
            public static create(properties?: Ydb.Table.ICommitTransactionResponse): Ydb.Table.CommitTransactionResponse;

            /**
             * Encodes the specified CommitTransactionResponse message. Does not implicitly {@link Ydb.Table.CommitTransactionResponse.verify|verify} messages.
             * @param message CommitTransactionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICommitTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommitTransactionResponse message, length delimited. Does not implicitly {@link Ydb.Table.CommitTransactionResponse.verify|verify} messages.
             * @param message CommitTransactionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICommitTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommitTransactionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommitTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CommitTransactionResponse;

            /**
             * Decodes a CommitTransactionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommitTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CommitTransactionResponse;

            /**
             * Verifies a CommitTransactionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommitTransactionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommitTransactionResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CommitTransactionResponse;

            /**
             * Creates a plain object from a CommitTransactionResponse message. Also converts values to other types if specified.
             * @param message CommitTransactionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CommitTransactionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommitTransactionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CommitTransactionResult. */
        interface ICommitTransactionResult {

            /** CommitTransactionResult queryStats */
            queryStats?: (Ydb.TableStats.IQueryStats|null);
        }

        /** Represents a CommitTransactionResult. */
        class CommitTransactionResult implements ICommitTransactionResult {

            /**
             * Constructs a new CommitTransactionResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICommitTransactionResult);

            /** CommitTransactionResult queryStats. */
            public queryStats?: (Ydb.TableStats.IQueryStats|null);

            /**
             * Creates a new CommitTransactionResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommitTransactionResult instance
             */
            public static create(properties?: Ydb.Table.ICommitTransactionResult): Ydb.Table.CommitTransactionResult;

            /**
             * Encodes the specified CommitTransactionResult message. Does not implicitly {@link Ydb.Table.CommitTransactionResult.verify|verify} messages.
             * @param message CommitTransactionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICommitTransactionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommitTransactionResult message, length delimited. Does not implicitly {@link Ydb.Table.CommitTransactionResult.verify|verify} messages.
             * @param message CommitTransactionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICommitTransactionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommitTransactionResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommitTransactionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CommitTransactionResult;

            /**
             * Decodes a CommitTransactionResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommitTransactionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CommitTransactionResult;

            /**
             * Verifies a CommitTransactionResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommitTransactionResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommitTransactionResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CommitTransactionResult;

            /**
             * Creates a plain object from a CommitTransactionResult message. Also converts values to other types if specified.
             * @param message CommitTransactionResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CommitTransactionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommitTransactionResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RollbackTransactionRequest. */
        interface IRollbackTransactionRequest {

            /** RollbackTransactionRequest sessionId */
            sessionId?: (string|null);

            /** RollbackTransactionRequest txId */
            txId?: (string|null);

            /** RollbackTransactionRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents a RollbackTransactionRequest. */
        class RollbackTransactionRequest implements IRollbackTransactionRequest {

            /**
             * Constructs a new RollbackTransactionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IRollbackTransactionRequest);

            /** RollbackTransactionRequest sessionId. */
            public sessionId: string;

            /** RollbackTransactionRequest txId. */
            public txId: string;

            /** RollbackTransactionRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new RollbackTransactionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RollbackTransactionRequest instance
             */
            public static create(properties?: Ydb.Table.IRollbackTransactionRequest): Ydb.Table.RollbackTransactionRequest;

            /**
             * Encodes the specified RollbackTransactionRequest message. Does not implicitly {@link Ydb.Table.RollbackTransactionRequest.verify|verify} messages.
             * @param message RollbackTransactionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IRollbackTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RollbackTransactionRequest message, length delimited. Does not implicitly {@link Ydb.Table.RollbackTransactionRequest.verify|verify} messages.
             * @param message RollbackTransactionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IRollbackTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RollbackTransactionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RollbackTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.RollbackTransactionRequest;

            /**
             * Decodes a RollbackTransactionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RollbackTransactionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.RollbackTransactionRequest;

            /**
             * Verifies a RollbackTransactionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RollbackTransactionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RollbackTransactionRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.RollbackTransactionRequest;

            /**
             * Creates a plain object from a RollbackTransactionRequest message. Also converts values to other types if specified.
             * @param message RollbackTransactionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.RollbackTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RollbackTransactionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RollbackTransactionResponse. */
        interface IRollbackTransactionResponse {

            /** RollbackTransactionResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a RollbackTransactionResponse. */
        class RollbackTransactionResponse implements IRollbackTransactionResponse {

            /**
             * Constructs a new RollbackTransactionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IRollbackTransactionResponse);

            /** RollbackTransactionResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new RollbackTransactionResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RollbackTransactionResponse instance
             */
            public static create(properties?: Ydb.Table.IRollbackTransactionResponse): Ydb.Table.RollbackTransactionResponse;

            /**
             * Encodes the specified RollbackTransactionResponse message. Does not implicitly {@link Ydb.Table.RollbackTransactionResponse.verify|verify} messages.
             * @param message RollbackTransactionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IRollbackTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RollbackTransactionResponse message, length delimited. Does not implicitly {@link Ydb.Table.RollbackTransactionResponse.verify|verify} messages.
             * @param message RollbackTransactionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IRollbackTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RollbackTransactionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RollbackTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.RollbackTransactionResponse;

            /**
             * Decodes a RollbackTransactionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RollbackTransactionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.RollbackTransactionResponse;

            /**
             * Verifies a RollbackTransactionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RollbackTransactionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RollbackTransactionResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.RollbackTransactionResponse;

            /**
             * Creates a plain object from a RollbackTransactionResponse message. Also converts values to other types if specified.
             * @param message RollbackTransactionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.RollbackTransactionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RollbackTransactionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StoragePolicyDescription. */
        interface IStoragePolicyDescription {

            /** StoragePolicyDescription name */
            name?: (string|null);

            /** StoragePolicyDescription labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a StoragePolicyDescription. */
        class StoragePolicyDescription implements IStoragePolicyDescription {

            /**
             * Constructs a new StoragePolicyDescription.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IStoragePolicyDescription);

            /** StoragePolicyDescription name. */
            public name: string;

            /** StoragePolicyDescription labels. */
            public labels: { [k: string]: string };

            /**
             * Creates a new StoragePolicyDescription instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StoragePolicyDescription instance
             */
            public static create(properties?: Ydb.Table.IStoragePolicyDescription): Ydb.Table.StoragePolicyDescription;

            /**
             * Encodes the specified StoragePolicyDescription message. Does not implicitly {@link Ydb.Table.StoragePolicyDescription.verify|verify} messages.
             * @param message StoragePolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IStoragePolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StoragePolicyDescription message, length delimited. Does not implicitly {@link Ydb.Table.StoragePolicyDescription.verify|verify} messages.
             * @param message StoragePolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IStoragePolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StoragePolicyDescription message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StoragePolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.StoragePolicyDescription;

            /**
             * Decodes a StoragePolicyDescription message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StoragePolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.StoragePolicyDescription;

            /**
             * Verifies a StoragePolicyDescription message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StoragePolicyDescription message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StoragePolicyDescription
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.StoragePolicyDescription;

            /**
             * Creates a plain object from a StoragePolicyDescription message. Also converts values to other types if specified.
             * @param message StoragePolicyDescription
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.StoragePolicyDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StoragePolicyDescription to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CompactionPolicyDescription. */
        interface ICompactionPolicyDescription {

            /** CompactionPolicyDescription name */
            name?: (string|null);

            /** CompactionPolicyDescription labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a CompactionPolicyDescription. */
        class CompactionPolicyDescription implements ICompactionPolicyDescription {

            /**
             * Constructs a new CompactionPolicyDescription.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICompactionPolicyDescription);

            /** CompactionPolicyDescription name. */
            public name: string;

            /** CompactionPolicyDescription labels. */
            public labels: { [k: string]: string };

            /**
             * Creates a new CompactionPolicyDescription instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompactionPolicyDescription instance
             */
            public static create(properties?: Ydb.Table.ICompactionPolicyDescription): Ydb.Table.CompactionPolicyDescription;

            /**
             * Encodes the specified CompactionPolicyDescription message. Does not implicitly {@link Ydb.Table.CompactionPolicyDescription.verify|verify} messages.
             * @param message CompactionPolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICompactionPolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CompactionPolicyDescription message, length delimited. Does not implicitly {@link Ydb.Table.CompactionPolicyDescription.verify|verify} messages.
             * @param message CompactionPolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICompactionPolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompactionPolicyDescription message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompactionPolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CompactionPolicyDescription;

            /**
             * Decodes a CompactionPolicyDescription message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CompactionPolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CompactionPolicyDescription;

            /**
             * Verifies a CompactionPolicyDescription message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CompactionPolicyDescription message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CompactionPolicyDescription
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CompactionPolicyDescription;

            /**
             * Creates a plain object from a CompactionPolicyDescription message. Also converts values to other types if specified.
             * @param message CompactionPolicyDescription
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CompactionPolicyDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CompactionPolicyDescription to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PartitioningPolicyDescription. */
        interface IPartitioningPolicyDescription {

            /** PartitioningPolicyDescription name */
            name?: (string|null);

            /** PartitioningPolicyDescription labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a PartitioningPolicyDescription. */
        class PartitioningPolicyDescription implements IPartitioningPolicyDescription {

            /**
             * Constructs a new PartitioningPolicyDescription.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IPartitioningPolicyDescription);

            /** PartitioningPolicyDescription name. */
            public name: string;

            /** PartitioningPolicyDescription labels. */
            public labels: { [k: string]: string };

            /**
             * Creates a new PartitioningPolicyDescription instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PartitioningPolicyDescription instance
             */
            public static create(properties?: Ydb.Table.IPartitioningPolicyDescription): Ydb.Table.PartitioningPolicyDescription;

            /**
             * Encodes the specified PartitioningPolicyDescription message. Does not implicitly {@link Ydb.Table.PartitioningPolicyDescription.verify|verify} messages.
             * @param message PartitioningPolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IPartitioningPolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PartitioningPolicyDescription message, length delimited. Does not implicitly {@link Ydb.Table.PartitioningPolicyDescription.verify|verify} messages.
             * @param message PartitioningPolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IPartitioningPolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PartitioningPolicyDescription message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PartitioningPolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.PartitioningPolicyDescription;

            /**
             * Decodes a PartitioningPolicyDescription message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PartitioningPolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.PartitioningPolicyDescription;

            /**
             * Verifies a PartitioningPolicyDescription message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PartitioningPolicyDescription message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PartitioningPolicyDescription
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.PartitioningPolicyDescription;

            /**
             * Creates a plain object from a PartitioningPolicyDescription message. Also converts values to other types if specified.
             * @param message PartitioningPolicyDescription
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.PartitioningPolicyDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PartitioningPolicyDescription to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecutionPolicyDescription. */
        interface IExecutionPolicyDescription {

            /** ExecutionPolicyDescription name */
            name?: (string|null);

            /** ExecutionPolicyDescription labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents an ExecutionPolicyDescription. */
        class ExecutionPolicyDescription implements IExecutionPolicyDescription {

            /**
             * Constructs a new ExecutionPolicyDescription.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExecutionPolicyDescription);

            /** ExecutionPolicyDescription name. */
            public name: string;

            /** ExecutionPolicyDescription labels. */
            public labels: { [k: string]: string };

            /**
             * Creates a new ExecutionPolicyDescription instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionPolicyDescription instance
             */
            public static create(properties?: Ydb.Table.IExecutionPolicyDescription): Ydb.Table.ExecutionPolicyDescription;

            /**
             * Encodes the specified ExecutionPolicyDescription message. Does not implicitly {@link Ydb.Table.ExecutionPolicyDescription.verify|verify} messages.
             * @param message ExecutionPolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExecutionPolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecutionPolicyDescription message, length delimited. Does not implicitly {@link Ydb.Table.ExecutionPolicyDescription.verify|verify} messages.
             * @param message ExecutionPolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExecutionPolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionPolicyDescription message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionPolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExecutionPolicyDescription;

            /**
             * Decodes an ExecutionPolicyDescription message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecutionPolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExecutionPolicyDescription;

            /**
             * Verifies an ExecutionPolicyDescription message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecutionPolicyDescription message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecutionPolicyDescription
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExecutionPolicyDescription;

            /**
             * Creates a plain object from an ExecutionPolicyDescription message. Also converts values to other types if specified.
             * @param message ExecutionPolicyDescription
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExecutionPolicyDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecutionPolicyDescription to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReplicationPolicyDescription. */
        interface IReplicationPolicyDescription {

            /** ReplicationPolicyDescription name */
            name?: (string|null);

            /** ReplicationPolicyDescription labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a ReplicationPolicyDescription. */
        class ReplicationPolicyDescription implements IReplicationPolicyDescription {

            /**
             * Constructs a new ReplicationPolicyDescription.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IReplicationPolicyDescription);

            /** ReplicationPolicyDescription name. */
            public name: string;

            /** ReplicationPolicyDescription labels. */
            public labels: { [k: string]: string };

            /**
             * Creates a new ReplicationPolicyDescription instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReplicationPolicyDescription instance
             */
            public static create(properties?: Ydb.Table.IReplicationPolicyDescription): Ydb.Table.ReplicationPolicyDescription;

            /**
             * Encodes the specified ReplicationPolicyDescription message. Does not implicitly {@link Ydb.Table.ReplicationPolicyDescription.verify|verify} messages.
             * @param message ReplicationPolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IReplicationPolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReplicationPolicyDescription message, length delimited. Does not implicitly {@link Ydb.Table.ReplicationPolicyDescription.verify|verify} messages.
             * @param message ReplicationPolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IReplicationPolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReplicationPolicyDescription message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReplicationPolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ReplicationPolicyDescription;

            /**
             * Decodes a ReplicationPolicyDescription message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReplicationPolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ReplicationPolicyDescription;

            /**
             * Verifies a ReplicationPolicyDescription message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReplicationPolicyDescription message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReplicationPolicyDescription
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ReplicationPolicyDescription;

            /**
             * Creates a plain object from a ReplicationPolicyDescription message. Also converts values to other types if specified.
             * @param message ReplicationPolicyDescription
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ReplicationPolicyDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReplicationPolicyDescription to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CachingPolicyDescription. */
        interface ICachingPolicyDescription {

            /** CachingPolicyDescription name */
            name?: (string|null);

            /** CachingPolicyDescription labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a CachingPolicyDescription. */
        class CachingPolicyDescription implements ICachingPolicyDescription {

            /**
             * Constructs a new CachingPolicyDescription.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ICachingPolicyDescription);

            /** CachingPolicyDescription name. */
            public name: string;

            /** CachingPolicyDescription labels. */
            public labels: { [k: string]: string };

            /**
             * Creates a new CachingPolicyDescription instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CachingPolicyDescription instance
             */
            public static create(properties?: Ydb.Table.ICachingPolicyDescription): Ydb.Table.CachingPolicyDescription;

            /**
             * Encodes the specified CachingPolicyDescription message. Does not implicitly {@link Ydb.Table.CachingPolicyDescription.verify|verify} messages.
             * @param message CachingPolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ICachingPolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CachingPolicyDescription message, length delimited. Does not implicitly {@link Ydb.Table.CachingPolicyDescription.verify|verify} messages.
             * @param message CachingPolicyDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ICachingPolicyDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CachingPolicyDescription message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CachingPolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.CachingPolicyDescription;

            /**
             * Decodes a CachingPolicyDescription message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CachingPolicyDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.CachingPolicyDescription;

            /**
             * Verifies a CachingPolicyDescription message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CachingPolicyDescription message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CachingPolicyDescription
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.CachingPolicyDescription;

            /**
             * Creates a plain object from a CachingPolicyDescription message. Also converts values to other types if specified.
             * @param message CachingPolicyDescription
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.CachingPolicyDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CachingPolicyDescription to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TableProfileDescription. */
        interface ITableProfileDescription {

            /** TableProfileDescription name */
            name?: (string|null);

            /** TableProfileDescription labels */
            labels?: ({ [k: string]: string }|null);

            /** TableProfileDescription defaultStoragePolicy */
            defaultStoragePolicy?: (string|null);

            /** TableProfileDescription allowedStoragePolicies */
            allowedStoragePolicies?: (string[]|null);

            /** TableProfileDescription defaultCompactionPolicy */
            defaultCompactionPolicy?: (string|null);

            /** TableProfileDescription allowedCompactionPolicies */
            allowedCompactionPolicies?: (string[]|null);

            /** TableProfileDescription defaultPartitioningPolicy */
            defaultPartitioningPolicy?: (string|null);

            /** TableProfileDescription allowedPartitioningPolicies */
            allowedPartitioningPolicies?: (string[]|null);

            /** TableProfileDescription defaultExecutionPolicy */
            defaultExecutionPolicy?: (string|null);

            /** TableProfileDescription allowedExecutionPolicies */
            allowedExecutionPolicies?: (string[]|null);

            /** TableProfileDescription defaultReplicationPolicy */
            defaultReplicationPolicy?: (string|null);

            /** TableProfileDescription allowedReplicationPolicies */
            allowedReplicationPolicies?: (string[]|null);

            /** TableProfileDescription defaultCachingPolicy */
            defaultCachingPolicy?: (string|null);

            /** TableProfileDescription allowedCachingPolicies */
            allowedCachingPolicies?: (string[]|null);
        }

        /** Represents a TableProfileDescription. */
        class TableProfileDescription implements ITableProfileDescription {

            /**
             * Constructs a new TableProfileDescription.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.ITableProfileDescription);

            /** TableProfileDescription name. */
            public name: string;

            /** TableProfileDescription labels. */
            public labels: { [k: string]: string };

            /** TableProfileDescription defaultStoragePolicy. */
            public defaultStoragePolicy: string;

            /** TableProfileDescription allowedStoragePolicies. */
            public allowedStoragePolicies: string[];

            /** TableProfileDescription defaultCompactionPolicy. */
            public defaultCompactionPolicy: string;

            /** TableProfileDescription allowedCompactionPolicies. */
            public allowedCompactionPolicies: string[];

            /** TableProfileDescription defaultPartitioningPolicy. */
            public defaultPartitioningPolicy: string;

            /** TableProfileDescription allowedPartitioningPolicies. */
            public allowedPartitioningPolicies: string[];

            /** TableProfileDescription defaultExecutionPolicy. */
            public defaultExecutionPolicy: string;

            /** TableProfileDescription allowedExecutionPolicies. */
            public allowedExecutionPolicies: string[];

            /** TableProfileDescription defaultReplicationPolicy. */
            public defaultReplicationPolicy: string;

            /** TableProfileDescription allowedReplicationPolicies. */
            public allowedReplicationPolicies: string[];

            /** TableProfileDescription defaultCachingPolicy. */
            public defaultCachingPolicy: string;

            /** TableProfileDescription allowedCachingPolicies. */
            public allowedCachingPolicies: string[];

            /**
             * Creates a new TableProfileDescription instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TableProfileDescription instance
             */
            public static create(properties?: Ydb.Table.ITableProfileDescription): Ydb.Table.TableProfileDescription;

            /**
             * Encodes the specified TableProfileDescription message. Does not implicitly {@link Ydb.Table.TableProfileDescription.verify|verify} messages.
             * @param message TableProfileDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.ITableProfileDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TableProfileDescription message, length delimited. Does not implicitly {@link Ydb.Table.TableProfileDescription.verify|verify} messages.
             * @param message TableProfileDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.ITableProfileDescription, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TableProfileDescription message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TableProfileDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.TableProfileDescription;

            /**
             * Decodes a TableProfileDescription message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TableProfileDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.TableProfileDescription;

            /**
             * Verifies a TableProfileDescription message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TableProfileDescription message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TableProfileDescription
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.TableProfileDescription;

            /**
             * Creates a plain object from a TableProfileDescription message. Also converts values to other types if specified.
             * @param message TableProfileDescription
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.TableProfileDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TableProfileDescription to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescribeTableOptionsRequest. */
        interface IDescribeTableOptionsRequest {

            /** DescribeTableOptionsRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents a DescribeTableOptionsRequest. */
        class DescribeTableOptionsRequest implements IDescribeTableOptionsRequest {

            /**
             * Constructs a new DescribeTableOptionsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IDescribeTableOptionsRequest);

            /** DescribeTableOptionsRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new DescribeTableOptionsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescribeTableOptionsRequest instance
             */
            public static create(properties?: Ydb.Table.IDescribeTableOptionsRequest): Ydb.Table.DescribeTableOptionsRequest;

            /**
             * Encodes the specified DescribeTableOptionsRequest message. Does not implicitly {@link Ydb.Table.DescribeTableOptionsRequest.verify|verify} messages.
             * @param message DescribeTableOptionsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IDescribeTableOptionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescribeTableOptionsRequest message, length delimited. Does not implicitly {@link Ydb.Table.DescribeTableOptionsRequest.verify|verify} messages.
             * @param message DescribeTableOptionsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IDescribeTableOptionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescribeTableOptionsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescribeTableOptionsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.DescribeTableOptionsRequest;

            /**
             * Decodes a DescribeTableOptionsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescribeTableOptionsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.DescribeTableOptionsRequest;

            /**
             * Verifies a DescribeTableOptionsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescribeTableOptionsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescribeTableOptionsRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.DescribeTableOptionsRequest;

            /**
             * Creates a plain object from a DescribeTableOptionsRequest message. Also converts values to other types if specified.
             * @param message DescribeTableOptionsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.DescribeTableOptionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescribeTableOptionsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescribeTableOptionsResponse. */
        interface IDescribeTableOptionsResponse {

            /** DescribeTableOptionsResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a DescribeTableOptionsResponse. */
        class DescribeTableOptionsResponse implements IDescribeTableOptionsResponse {

            /**
             * Constructs a new DescribeTableOptionsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IDescribeTableOptionsResponse);

            /** DescribeTableOptionsResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new DescribeTableOptionsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescribeTableOptionsResponse instance
             */
            public static create(properties?: Ydb.Table.IDescribeTableOptionsResponse): Ydb.Table.DescribeTableOptionsResponse;

            /**
             * Encodes the specified DescribeTableOptionsResponse message. Does not implicitly {@link Ydb.Table.DescribeTableOptionsResponse.verify|verify} messages.
             * @param message DescribeTableOptionsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IDescribeTableOptionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescribeTableOptionsResponse message, length delimited. Does not implicitly {@link Ydb.Table.DescribeTableOptionsResponse.verify|verify} messages.
             * @param message DescribeTableOptionsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IDescribeTableOptionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescribeTableOptionsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescribeTableOptionsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.DescribeTableOptionsResponse;

            /**
             * Decodes a DescribeTableOptionsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescribeTableOptionsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.DescribeTableOptionsResponse;

            /**
             * Verifies a DescribeTableOptionsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescribeTableOptionsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescribeTableOptionsResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.DescribeTableOptionsResponse;

            /**
             * Creates a plain object from a DescribeTableOptionsResponse message. Also converts values to other types if specified.
             * @param message DescribeTableOptionsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.DescribeTableOptionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescribeTableOptionsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescribeTableOptionsResult. */
        interface IDescribeTableOptionsResult {

            /** DescribeTableOptionsResult tableProfilePresets */
            tableProfilePresets?: (Ydb.Table.ITableProfileDescription[]|null);

            /** DescribeTableOptionsResult storagePolicyPresets */
            storagePolicyPresets?: (Ydb.Table.IStoragePolicyDescription[]|null);

            /** DescribeTableOptionsResult compactionPolicyPresets */
            compactionPolicyPresets?: (Ydb.Table.ICompactionPolicyDescription[]|null);

            /** DescribeTableOptionsResult partitioningPolicyPresets */
            partitioningPolicyPresets?: (Ydb.Table.IPartitioningPolicyDescription[]|null);

            /** DescribeTableOptionsResult executionPolicyPresets */
            executionPolicyPresets?: (Ydb.Table.IExecutionPolicyDescription[]|null);

            /** DescribeTableOptionsResult replicationPolicyPresets */
            replicationPolicyPresets?: (Ydb.Table.IReplicationPolicyDescription[]|null);

            /** DescribeTableOptionsResult cachingPolicyPresets */
            cachingPolicyPresets?: (Ydb.Table.ICachingPolicyDescription[]|null);
        }

        /** Represents a DescribeTableOptionsResult. */
        class DescribeTableOptionsResult implements IDescribeTableOptionsResult {

            /**
             * Constructs a new DescribeTableOptionsResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IDescribeTableOptionsResult);

            /** DescribeTableOptionsResult tableProfilePresets. */
            public tableProfilePresets: Ydb.Table.ITableProfileDescription[];

            /** DescribeTableOptionsResult storagePolicyPresets. */
            public storagePolicyPresets: Ydb.Table.IStoragePolicyDescription[];

            /** DescribeTableOptionsResult compactionPolicyPresets. */
            public compactionPolicyPresets: Ydb.Table.ICompactionPolicyDescription[];

            /** DescribeTableOptionsResult partitioningPolicyPresets. */
            public partitioningPolicyPresets: Ydb.Table.IPartitioningPolicyDescription[];

            /** DescribeTableOptionsResult executionPolicyPresets. */
            public executionPolicyPresets: Ydb.Table.IExecutionPolicyDescription[];

            /** DescribeTableOptionsResult replicationPolicyPresets. */
            public replicationPolicyPresets: Ydb.Table.IReplicationPolicyDescription[];

            /** DescribeTableOptionsResult cachingPolicyPresets. */
            public cachingPolicyPresets: Ydb.Table.ICachingPolicyDescription[];

            /**
             * Creates a new DescribeTableOptionsResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescribeTableOptionsResult instance
             */
            public static create(properties?: Ydb.Table.IDescribeTableOptionsResult): Ydb.Table.DescribeTableOptionsResult;

            /**
             * Encodes the specified DescribeTableOptionsResult message. Does not implicitly {@link Ydb.Table.DescribeTableOptionsResult.verify|verify} messages.
             * @param message DescribeTableOptionsResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IDescribeTableOptionsResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescribeTableOptionsResult message, length delimited. Does not implicitly {@link Ydb.Table.DescribeTableOptionsResult.verify|verify} messages.
             * @param message DescribeTableOptionsResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IDescribeTableOptionsResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescribeTableOptionsResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescribeTableOptionsResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.DescribeTableOptionsResult;

            /**
             * Decodes a DescribeTableOptionsResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescribeTableOptionsResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.DescribeTableOptionsResult;

            /**
             * Verifies a DescribeTableOptionsResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescribeTableOptionsResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescribeTableOptionsResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.DescribeTableOptionsResult;

            /**
             * Creates a plain object from a DescribeTableOptionsResult message. Also converts values to other types if specified.
             * @param message DescribeTableOptionsResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.DescribeTableOptionsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescribeTableOptionsResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KeyRange. */
        interface IKeyRange {

            /** KeyRange greater */
            greater?: (Ydb.ITypedValue|null);

            /** KeyRange greaterOrEqual */
            greaterOrEqual?: (Ydb.ITypedValue|null);

            /** KeyRange less */
            less?: (Ydb.ITypedValue|null);

            /** KeyRange lessOrEqual */
            lessOrEqual?: (Ydb.ITypedValue|null);
        }

        /** Represents a KeyRange. */
        class KeyRange implements IKeyRange {

            /**
             * Constructs a new KeyRange.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IKeyRange);

            /** KeyRange greater. */
            public greater?: (Ydb.ITypedValue|null);

            /** KeyRange greaterOrEqual. */
            public greaterOrEqual?: (Ydb.ITypedValue|null);

            /** KeyRange less. */
            public less?: (Ydb.ITypedValue|null);

            /** KeyRange lessOrEqual. */
            public lessOrEqual?: (Ydb.ITypedValue|null);

            /** KeyRange fromBound. */
            public fromBound?: ("greater"|"greaterOrEqual");

            /** KeyRange toBound. */
            public toBound?: ("less"|"lessOrEqual");

            /**
             * Creates a new KeyRange instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyRange instance
             */
            public static create(properties?: Ydb.Table.IKeyRange): Ydb.Table.KeyRange;

            /**
             * Encodes the specified KeyRange message. Does not implicitly {@link Ydb.Table.KeyRange.verify|verify} messages.
             * @param message KeyRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IKeyRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeyRange message, length delimited. Does not implicitly {@link Ydb.Table.KeyRange.verify|verify} messages.
             * @param message KeyRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IKeyRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyRange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeyRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.KeyRange;

            /**
             * Decodes a KeyRange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeyRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.KeyRange;

            /**
             * Verifies a KeyRange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeyRange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeyRange
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.KeyRange;

            /**
             * Creates a plain object from a KeyRange message. Also converts values to other types if specified.
             * @param message KeyRange
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.KeyRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeyRange to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadTableRequest. */
        interface IReadTableRequest {

            /** ReadTableRequest sessionId */
            sessionId?: (string|null);

            /** ReadTableRequest path */
            path?: (string|null);

            /** ReadTableRequest keyRange */
            keyRange?: (Ydb.Table.IKeyRange|null);

            /** ReadTableRequest columns */
            columns?: (string[]|null);

            /** ReadTableRequest ordered */
            ordered?: (boolean|null);

            /** ReadTableRequest rowLimit */
            rowLimit?: (number|Long|null);

            /** ReadTableRequest useSnapshot */
            useSnapshot?: (Ydb.FeatureFlag.Status|null);
        }

        /** Represents a ReadTableRequest. */
        class ReadTableRequest implements IReadTableRequest {

            /**
             * Constructs a new ReadTableRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IReadTableRequest);

            /** ReadTableRequest sessionId. */
            public sessionId: string;

            /** ReadTableRequest path. */
            public path: string;

            /** ReadTableRequest keyRange. */
            public keyRange?: (Ydb.Table.IKeyRange|null);

            /** ReadTableRequest columns. */
            public columns: string[];

            /** ReadTableRequest ordered. */
            public ordered: boolean;

            /** ReadTableRequest rowLimit. */
            public rowLimit: (number|Long);

            /** ReadTableRequest useSnapshot. */
            public useSnapshot: Ydb.FeatureFlag.Status;

            /**
             * Creates a new ReadTableRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadTableRequest instance
             */
            public static create(properties?: Ydb.Table.IReadTableRequest): Ydb.Table.ReadTableRequest;

            /**
             * Encodes the specified ReadTableRequest message. Does not implicitly {@link Ydb.Table.ReadTableRequest.verify|verify} messages.
             * @param message ReadTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IReadTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadTableRequest message, length delimited. Does not implicitly {@link Ydb.Table.ReadTableRequest.verify|verify} messages.
             * @param message ReadTableRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IReadTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadTableRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ReadTableRequest;

            /**
             * Decodes a ReadTableRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadTableRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ReadTableRequest;

            /**
             * Verifies a ReadTableRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadTableRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadTableRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ReadTableRequest;

            /**
             * Creates a plain object from a ReadTableRequest message. Also converts values to other types if specified.
             * @param message ReadTableRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ReadTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadTableRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadTableResponse. */
        interface IReadTableResponse {

            /** ReadTableResponse status */
            status?: (Ydb.StatusIds.StatusCode|null);

            /** ReadTableResponse issues */
            issues?: (Ydb.Issue.IIssueMessage[]|null);

            /** ReadTableResponse result */
            result?: (Ydb.Table.IReadTableResult|null);
        }

        /** Represents a ReadTableResponse. */
        class ReadTableResponse implements IReadTableResponse {

            /**
             * Constructs a new ReadTableResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IReadTableResponse);

            /** ReadTableResponse status. */
            public status: Ydb.StatusIds.StatusCode;

            /** ReadTableResponse issues. */
            public issues: Ydb.Issue.IIssueMessage[];

            /** ReadTableResponse result. */
            public result?: (Ydb.Table.IReadTableResult|null);

            /**
             * Creates a new ReadTableResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadTableResponse instance
             */
            public static create(properties?: Ydb.Table.IReadTableResponse): Ydb.Table.ReadTableResponse;

            /**
             * Encodes the specified ReadTableResponse message. Does not implicitly {@link Ydb.Table.ReadTableResponse.verify|verify} messages.
             * @param message ReadTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IReadTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadTableResponse message, length delimited. Does not implicitly {@link Ydb.Table.ReadTableResponse.verify|verify} messages.
             * @param message ReadTableResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IReadTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadTableResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ReadTableResponse;

            /**
             * Decodes a ReadTableResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadTableResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ReadTableResponse;

            /**
             * Verifies a ReadTableResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadTableResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadTableResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ReadTableResponse;

            /**
             * Creates a plain object from a ReadTableResponse message. Also converts values to other types if specified.
             * @param message ReadTableResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ReadTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadTableResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadTableResult. */
        interface IReadTableResult {

            /** ReadTableResult resultSet */
            resultSet?: (Ydb.IResultSet|null);
        }

        /** Represents a ReadTableResult. */
        class ReadTableResult implements IReadTableResult {

            /**
             * Constructs a new ReadTableResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IReadTableResult);

            /** ReadTableResult resultSet. */
            public resultSet?: (Ydb.IResultSet|null);

            /**
             * Creates a new ReadTableResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadTableResult instance
             */
            public static create(properties?: Ydb.Table.IReadTableResult): Ydb.Table.ReadTableResult;

            /**
             * Encodes the specified ReadTableResult message. Does not implicitly {@link Ydb.Table.ReadTableResult.verify|verify} messages.
             * @param message ReadTableResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IReadTableResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadTableResult message, length delimited. Does not implicitly {@link Ydb.Table.ReadTableResult.verify|verify} messages.
             * @param message ReadTableResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IReadTableResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadTableResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadTableResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ReadTableResult;

            /**
             * Decodes a ReadTableResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadTableResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ReadTableResult;

            /**
             * Verifies a ReadTableResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadTableResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadTableResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ReadTableResult;

            /**
             * Creates a plain object from a ReadTableResult message. Also converts values to other types if specified.
             * @param message ReadTableResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ReadTableResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadTableResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BulkUpsertRequest. */
        interface IBulkUpsertRequest {

            /** BulkUpsertRequest table */
            table?: (string|null);

            /** BulkUpsertRequest rows */
            rows?: (Ydb.ITypedValue|null);

            /** BulkUpsertRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);
        }

        /** Represents a BulkUpsertRequest. */
        class BulkUpsertRequest implements IBulkUpsertRequest {

            /**
             * Constructs a new BulkUpsertRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IBulkUpsertRequest);

            /** BulkUpsertRequest table. */
            public table: string;

            /** BulkUpsertRequest rows. */
            public rows?: (Ydb.ITypedValue|null);

            /** BulkUpsertRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /**
             * Creates a new BulkUpsertRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BulkUpsertRequest instance
             */
            public static create(properties?: Ydb.Table.IBulkUpsertRequest): Ydb.Table.BulkUpsertRequest;

            /**
             * Encodes the specified BulkUpsertRequest message. Does not implicitly {@link Ydb.Table.BulkUpsertRequest.verify|verify} messages.
             * @param message BulkUpsertRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IBulkUpsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BulkUpsertRequest message, length delimited. Does not implicitly {@link Ydb.Table.BulkUpsertRequest.verify|verify} messages.
             * @param message BulkUpsertRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IBulkUpsertRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BulkUpsertRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BulkUpsertRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.BulkUpsertRequest;

            /**
             * Decodes a BulkUpsertRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BulkUpsertRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.BulkUpsertRequest;

            /**
             * Verifies a BulkUpsertRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BulkUpsertRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BulkUpsertRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.BulkUpsertRequest;

            /**
             * Creates a plain object from a BulkUpsertRequest message. Also converts values to other types if specified.
             * @param message BulkUpsertRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.BulkUpsertRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BulkUpsertRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BulkUpsertResponse. */
        interface IBulkUpsertResponse {

            /** BulkUpsertResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a BulkUpsertResponse. */
        class BulkUpsertResponse implements IBulkUpsertResponse {

            /**
             * Constructs a new BulkUpsertResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IBulkUpsertResponse);

            /** BulkUpsertResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new BulkUpsertResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BulkUpsertResponse instance
             */
            public static create(properties?: Ydb.Table.IBulkUpsertResponse): Ydb.Table.BulkUpsertResponse;

            /**
             * Encodes the specified BulkUpsertResponse message. Does not implicitly {@link Ydb.Table.BulkUpsertResponse.verify|verify} messages.
             * @param message BulkUpsertResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IBulkUpsertResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BulkUpsertResponse message, length delimited. Does not implicitly {@link Ydb.Table.BulkUpsertResponse.verify|verify} messages.
             * @param message BulkUpsertResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IBulkUpsertResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BulkUpsertResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BulkUpsertResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.BulkUpsertResponse;

            /**
             * Decodes a BulkUpsertResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BulkUpsertResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.BulkUpsertResponse;

            /**
             * Verifies a BulkUpsertResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BulkUpsertResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BulkUpsertResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.BulkUpsertResponse;

            /**
             * Creates a plain object from a BulkUpsertResponse message. Also converts values to other types if specified.
             * @param message BulkUpsertResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.BulkUpsertResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BulkUpsertResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BulkUpsertResult. */
        interface IBulkUpsertResult {
        }

        /** Represents a BulkUpsertResult. */
        class BulkUpsertResult implements IBulkUpsertResult {

            /**
             * Constructs a new BulkUpsertResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IBulkUpsertResult);

            /**
             * Creates a new BulkUpsertResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BulkUpsertResult instance
             */
            public static create(properties?: Ydb.Table.IBulkUpsertResult): Ydb.Table.BulkUpsertResult;

            /**
             * Encodes the specified BulkUpsertResult message. Does not implicitly {@link Ydb.Table.BulkUpsertResult.verify|verify} messages.
             * @param message BulkUpsertResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IBulkUpsertResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BulkUpsertResult message, length delimited. Does not implicitly {@link Ydb.Table.BulkUpsertResult.verify|verify} messages.
             * @param message BulkUpsertResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IBulkUpsertResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BulkUpsertResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BulkUpsertResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.BulkUpsertResult;

            /**
             * Decodes a BulkUpsertResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BulkUpsertResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.BulkUpsertResult;

            /**
             * Verifies a BulkUpsertResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BulkUpsertResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BulkUpsertResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.BulkUpsertResult;

            /**
             * Creates a plain object from a BulkUpsertResult message. Also converts values to other types if specified.
             * @param message BulkUpsertResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.BulkUpsertResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BulkUpsertResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecuteScanQueryRequest. */
        interface IExecuteScanQueryRequest {

            /** ExecuteScanQueryRequest query */
            query?: (Ydb.Table.IQuery|null);

            /** ExecuteScanQueryRequest parameters */
            parameters?: ({ [k: string]: Ydb.ITypedValue }|null);

            /** ExecuteScanQueryRequest mode */
            mode?: (Ydb.Table.ExecuteScanQueryRequest.Mode|null);

            /** ExecuteScanQueryRequest collectStats */
            collectStats?: (Ydb.Table.QueryStatsCollection.Mode|null);
        }

        /** Represents an ExecuteScanQueryRequest. */
        class ExecuteScanQueryRequest implements IExecuteScanQueryRequest {

            /**
             * Constructs a new ExecuteScanQueryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExecuteScanQueryRequest);

            /** ExecuteScanQueryRequest query. */
            public query?: (Ydb.Table.IQuery|null);

            /** ExecuteScanQueryRequest parameters. */
            public parameters: { [k: string]: Ydb.ITypedValue };

            /** ExecuteScanQueryRequest mode. */
            public mode: Ydb.Table.ExecuteScanQueryRequest.Mode;

            /** ExecuteScanQueryRequest collectStats. */
            public collectStats: Ydb.Table.QueryStatsCollection.Mode;

            /**
             * Creates a new ExecuteScanQueryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteScanQueryRequest instance
             */
            public static create(properties?: Ydb.Table.IExecuteScanQueryRequest): Ydb.Table.ExecuteScanQueryRequest;

            /**
             * Encodes the specified ExecuteScanQueryRequest message. Does not implicitly {@link Ydb.Table.ExecuteScanQueryRequest.verify|verify} messages.
             * @param message ExecuteScanQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExecuteScanQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteScanQueryRequest message, length delimited. Does not implicitly {@link Ydb.Table.ExecuteScanQueryRequest.verify|verify} messages.
             * @param message ExecuteScanQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExecuteScanQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteScanQueryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteScanQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExecuteScanQueryRequest;

            /**
             * Decodes an ExecuteScanQueryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteScanQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExecuteScanQueryRequest;

            /**
             * Verifies an ExecuteScanQueryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteScanQueryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteScanQueryRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExecuteScanQueryRequest;

            /**
             * Creates a plain object from an ExecuteScanQueryRequest message. Also converts values to other types if specified.
             * @param message ExecuteScanQueryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExecuteScanQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteScanQueryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ExecuteScanQueryRequest {

            /** Mode enum. */
            enum Mode {
                MODE_UNSPECIFIED = 0,
                MODE_EXPLAIN = 1,
                MODE_EXEC = 3
            }
        }

        /** Properties of an ExecuteScanQueryPartialResponse. */
        interface IExecuteScanQueryPartialResponse {

            /** ExecuteScanQueryPartialResponse status */
            status?: (Ydb.StatusIds.StatusCode|null);

            /** ExecuteScanQueryPartialResponse issues */
            issues?: (Ydb.Issue.IIssueMessage[]|null);

            /** ExecuteScanQueryPartialResponse result */
            result?: (Ydb.Table.IExecuteScanQueryPartialResult|null);
        }

        /** Represents an ExecuteScanQueryPartialResponse. */
        class ExecuteScanQueryPartialResponse implements IExecuteScanQueryPartialResponse {

            /**
             * Constructs a new ExecuteScanQueryPartialResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExecuteScanQueryPartialResponse);

            /** ExecuteScanQueryPartialResponse status. */
            public status: Ydb.StatusIds.StatusCode;

            /** ExecuteScanQueryPartialResponse issues. */
            public issues: Ydb.Issue.IIssueMessage[];

            /** ExecuteScanQueryPartialResponse result. */
            public result?: (Ydb.Table.IExecuteScanQueryPartialResult|null);

            /**
             * Creates a new ExecuteScanQueryPartialResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteScanQueryPartialResponse instance
             */
            public static create(properties?: Ydb.Table.IExecuteScanQueryPartialResponse): Ydb.Table.ExecuteScanQueryPartialResponse;

            /**
             * Encodes the specified ExecuteScanQueryPartialResponse message. Does not implicitly {@link Ydb.Table.ExecuteScanQueryPartialResponse.verify|verify} messages.
             * @param message ExecuteScanQueryPartialResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExecuteScanQueryPartialResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteScanQueryPartialResponse message, length delimited. Does not implicitly {@link Ydb.Table.ExecuteScanQueryPartialResponse.verify|verify} messages.
             * @param message ExecuteScanQueryPartialResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExecuteScanQueryPartialResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteScanQueryPartialResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteScanQueryPartialResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExecuteScanQueryPartialResponse;

            /**
             * Decodes an ExecuteScanQueryPartialResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteScanQueryPartialResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExecuteScanQueryPartialResponse;

            /**
             * Verifies an ExecuteScanQueryPartialResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteScanQueryPartialResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteScanQueryPartialResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExecuteScanQueryPartialResponse;

            /**
             * Creates a plain object from an ExecuteScanQueryPartialResponse message. Also converts values to other types if specified.
             * @param message ExecuteScanQueryPartialResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExecuteScanQueryPartialResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteScanQueryPartialResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecuteScanQueryPartialResult. */
        interface IExecuteScanQueryPartialResult {

            /** ExecuteScanQueryPartialResult resultSet */
            resultSet?: (Ydb.IResultSet|null);

            /** ExecuteScanQueryPartialResult queryStats */
            queryStats?: (Ydb.TableStats.IQueryStats|null);
        }

        /** Represents an ExecuteScanQueryPartialResult. */
        class ExecuteScanQueryPartialResult implements IExecuteScanQueryPartialResult {

            /**
             * Constructs a new ExecuteScanQueryPartialResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Table.IExecuteScanQueryPartialResult);

            /** ExecuteScanQueryPartialResult resultSet. */
            public resultSet?: (Ydb.IResultSet|null);

            /** ExecuteScanQueryPartialResult queryStats. */
            public queryStats?: (Ydb.TableStats.IQueryStats|null);

            /**
             * Creates a new ExecuteScanQueryPartialResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteScanQueryPartialResult instance
             */
            public static create(properties?: Ydb.Table.IExecuteScanQueryPartialResult): Ydb.Table.ExecuteScanQueryPartialResult;

            /**
             * Encodes the specified ExecuteScanQueryPartialResult message. Does not implicitly {@link Ydb.Table.ExecuteScanQueryPartialResult.verify|verify} messages.
             * @param message ExecuteScanQueryPartialResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Table.IExecuteScanQueryPartialResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteScanQueryPartialResult message, length delimited. Does not implicitly {@link Ydb.Table.ExecuteScanQueryPartialResult.verify|verify} messages.
             * @param message ExecuteScanQueryPartialResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Table.IExecuteScanQueryPartialResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteScanQueryPartialResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteScanQueryPartialResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Table.ExecuteScanQueryPartialResult;

            /**
             * Decodes an ExecuteScanQueryPartialResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteScanQueryPartialResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Table.ExecuteScanQueryPartialResult;

            /**
             * Verifies an ExecuteScanQueryPartialResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteScanQueryPartialResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteScanQueryPartialResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Table.ExecuteScanQueryPartialResult;

            /**
             * Creates a plain object from an ExecuteScanQueryPartialResult message. Also converts values to other types if specified.
             * @param message ExecuteScanQueryPartialResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Table.ExecuteScanQueryPartialResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteScanQueryPartialResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Limit. */
    interface ILimit {

        /** Limit range */
        range?: (Ydb.Limit.IRange|null);

        /** Limit lt */
        lt?: (number|null);

        /** Limit le */
        le?: (number|null);

        /** Limit eq */
        eq?: (number|null);

        /** Limit ge */
        ge?: (number|null);

        /** Limit gt */
        gt?: (number|null);
    }

    /** Represents a Limit. */
    class Limit implements ILimit {

        /**
         * Constructs a new Limit.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.ILimit);

        /** Limit range. */
        public range?: (Ydb.Limit.IRange|null);

        /** Limit lt. */
        public lt?: (number|null);

        /** Limit le. */
        public le?: (number|null);

        /** Limit eq. */
        public eq?: (number|null);

        /** Limit ge. */
        public ge?: (number|null);

        /** Limit gt. */
        public gt?: (number|null);

        /** Limit kind. */
        public kind?: ("range"|"lt"|"le"|"eq"|"ge"|"gt");

        /**
         * Creates a new Limit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Limit instance
         */
        public static create(properties?: Ydb.ILimit): Ydb.Limit;

        /**
         * Encodes the specified Limit message. Does not implicitly {@link Ydb.Limit.verify|verify} messages.
         * @param message Limit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.ILimit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Limit message, length delimited. Does not implicitly {@link Ydb.Limit.verify|verify} messages.
         * @param message Limit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.ILimit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Limit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Limit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Limit;

        /**
         * Decodes a Limit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Limit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Limit;

        /**
         * Verifies a Limit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Limit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Limit
         */
        public static fromObject(object: { [k: string]: any }): Ydb.Limit;

        /**
         * Creates a plain object from a Limit message. Also converts values to other types if specified.
         * @param message Limit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.Limit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Limit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Limit {

        /** Properties of a Range. */
        interface IRange {

            /** Range min */
            min?: (number|null);

            /** Range max */
            max?: (number|null);
        }

        /** Represents a Range. */
        class Range implements IRange {

            /**
             * Constructs a new Range.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Limit.IRange);

            /** Range min. */
            public min: number;

            /** Range max. */
            public max: number;

            /**
             * Creates a new Range instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Range instance
             */
            public static create(properties?: Ydb.Limit.IRange): Ydb.Limit.Range;

            /**
             * Encodes the specified Range message. Does not implicitly {@link Ydb.Limit.Range.verify|verify} messages.
             * @param message Range message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Limit.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Range message, length delimited. Does not implicitly {@link Ydb.Limit.Range.verify|verify} messages.
             * @param message Range message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Limit.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Range message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Range
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Limit.Range;

            /**
             * Decodes a Range message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Range
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Limit.Range;

            /**
             * Verifies a Range message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Range message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Range
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Limit.Range;

            /**
             * Creates a plain object from a Range message. Also converts values to other types if specified.
             * @param message Range
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Limit.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Range to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a MapKey. */
    interface IMapKey {

        /** MapKey length */
        length?: (Ydb.ILimit|null);

        /** MapKey value */
        value?: (string|null);
    }

    /** Represents a MapKey. */
    class MapKey implements IMapKey {

        /**
         * Constructs a new MapKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IMapKey);

        /** MapKey length. */
        public length?: (Ydb.ILimit|null);

        /** MapKey value. */
        public value: string;

        /**
         * Creates a new MapKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MapKey instance
         */
        public static create(properties?: Ydb.IMapKey): Ydb.MapKey;

        /**
         * Encodes the specified MapKey message. Does not implicitly {@link Ydb.MapKey.verify|verify} messages.
         * @param message MapKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IMapKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MapKey message, length delimited. Does not implicitly {@link Ydb.MapKey.verify|verify} messages.
         * @param message MapKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IMapKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MapKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MapKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.MapKey;

        /**
         * Decodes a MapKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MapKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.MapKey;

        /**
         * Verifies a MapKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MapKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MapKey
         */
        public static fromObject(object: { [k: string]: any }): Ydb.MapKey;

        /**
         * Creates a plain object from a MapKey message. Also converts values to other types if specified.
         * @param message MapKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.MapKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MapKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FeatureFlag. */
    interface IFeatureFlag {
    }

    /** Represents a FeatureFlag. */
    class FeatureFlag implements IFeatureFlag {

        /**
         * Constructs a new FeatureFlag.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IFeatureFlag);

        /**
         * Creates a new FeatureFlag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureFlag instance
         */
        public static create(properties?: Ydb.IFeatureFlag): Ydb.FeatureFlag;

        /**
         * Encodes the specified FeatureFlag message. Does not implicitly {@link Ydb.FeatureFlag.verify|verify} messages.
         * @param message FeatureFlag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IFeatureFlag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureFlag message, length delimited. Does not implicitly {@link Ydb.FeatureFlag.verify|verify} messages.
         * @param message FeatureFlag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IFeatureFlag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureFlag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureFlag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.FeatureFlag;

        /**
         * Decodes a FeatureFlag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureFlag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.FeatureFlag;

        /**
         * Verifies a FeatureFlag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatureFlag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatureFlag
         */
        public static fromObject(object: { [k: string]: any }): Ydb.FeatureFlag;

        /**
         * Creates a plain object from a FeatureFlag message. Also converts values to other types if specified.
         * @param message FeatureFlag
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.FeatureFlag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatureFlag to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace FeatureFlag {

        /** Status enum. */
        enum Status {
            STATUS_UNSPECIFIED = 0,
            ENABLED = 1,
            DISABLED = 2
        }
    }

    /** Properties of a CostInfo. */
    interface ICostInfo {

        /** CostInfo consumedUnits */
        consumedUnits?: (number|null);
    }

    /** Represents a CostInfo. */
    class CostInfo implements ICostInfo {

        /**
         * Constructs a new CostInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.ICostInfo);

        /** CostInfo consumedUnits. */
        public consumedUnits: number;

        /**
         * Creates a new CostInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CostInfo instance
         */
        public static create(properties?: Ydb.ICostInfo): Ydb.CostInfo;

        /**
         * Encodes the specified CostInfo message. Does not implicitly {@link Ydb.CostInfo.verify|verify} messages.
         * @param message CostInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.ICostInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CostInfo message, length delimited. Does not implicitly {@link Ydb.CostInfo.verify|verify} messages.
         * @param message CostInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.ICostInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CostInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CostInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.CostInfo;

        /**
         * Decodes a CostInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CostInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.CostInfo;

        /**
         * Verifies a CostInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CostInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CostInfo
         */
        public static fromObject(object: { [k: string]: any }): Ydb.CostInfo;

        /**
         * Creates a plain object from a CostInfo message. Also converts values to other types if specified.
         * @param message CostInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.CostInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CostInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Namespace Issue. */
    namespace Issue {

        /** Properties of an IssueMessage. */
        interface IIssueMessage {

            /** IssueMessage position */
            position?: (Ydb.Issue.IssueMessage.IPosition|null);

            /** IssueMessage message */
            message?: (string|null);

            /** IssueMessage endPosition */
            endPosition?: (Ydb.Issue.IssueMessage.IPosition|null);

            /** IssueMessage issueCode */
            issueCode?: (number|null);

            /** IssueMessage severity */
            severity?: (number|null);

            /** IssueMessage issues */
            issues?: (Ydb.Issue.IIssueMessage[]|null);
        }

        /** Represents an IssueMessage. */
        class IssueMessage implements IIssueMessage {

            /**
             * Constructs a new IssueMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Issue.IIssueMessage);

            /** IssueMessage position. */
            public position?: (Ydb.Issue.IssueMessage.IPosition|null);

            /** IssueMessage message. */
            public message: string;

            /** IssueMessage endPosition. */
            public endPosition?: (Ydb.Issue.IssueMessage.IPosition|null);

            /** IssueMessage issueCode. */
            public issueCode: number;

            /** IssueMessage severity. */
            public severity: number;

            /** IssueMessage issues. */
            public issues: Ydb.Issue.IIssueMessage[];

            /**
             * Creates a new IssueMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IssueMessage instance
             */
            public static create(properties?: Ydb.Issue.IIssueMessage): Ydb.Issue.IssueMessage;

            /**
             * Encodes the specified IssueMessage message. Does not implicitly {@link Ydb.Issue.IssueMessage.verify|verify} messages.
             * @param message IssueMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Issue.IIssueMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IssueMessage message, length delimited. Does not implicitly {@link Ydb.Issue.IssueMessage.verify|verify} messages.
             * @param message IssueMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Issue.IIssueMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IssueMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IssueMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Issue.IssueMessage;

            /**
             * Decodes an IssueMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IssueMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Issue.IssueMessage;

            /**
             * Verifies an IssueMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IssueMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IssueMessage
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Issue.IssueMessage;

            /**
             * Creates a plain object from an IssueMessage message. Also converts values to other types if specified.
             * @param message IssueMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Issue.IssueMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IssueMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace IssueMessage {

            /** Properties of a Position. */
            interface IPosition {

                /** Position row */
                row?: (number|null);

                /** Position column */
                column?: (number|null);

                /** Position file */
                file?: (string|null);
            }

            /** Represents a Position. */
            class Position implements IPosition {

                /**
                 * Constructs a new Position.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Ydb.Issue.IssueMessage.IPosition);

                /** Position row. */
                public row: number;

                /** Position column. */
                public column: number;

                /** Position file. */
                public file: string;

                /**
                 * Creates a new Position instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Position instance
                 */
                public static create(properties?: Ydb.Issue.IssueMessage.IPosition): Ydb.Issue.IssueMessage.Position;

                /**
                 * Encodes the specified Position message. Does not implicitly {@link Ydb.Issue.IssueMessage.Position.verify|verify} messages.
                 * @param message Position message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Ydb.Issue.IssueMessage.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Position message, length delimited. Does not implicitly {@link Ydb.Issue.IssueMessage.Position.verify|verify} messages.
                 * @param message Position message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Ydb.Issue.IssueMessage.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Position message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Position
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Issue.IssueMessage.Position;

                /**
                 * Decodes a Position message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Position
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Issue.IssueMessage.Position;

                /**
                 * Verifies a Position message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Position message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Position
                 */
                public static fromObject(object: { [k: string]: any }): Ydb.Issue.IssueMessage.Position;

                /**
                 * Creates a plain object from a Position message. Also converts values to other types if specified.
                 * @param message Position
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Ydb.Issue.IssueMessage.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Position to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace Operations. */
    namespace Operations {

        /** Properties of an OperationParams. */
        interface IOperationParams {

            /** OperationParams operationMode */
            operationMode?: (Ydb.Operations.OperationParams.OperationMode|null);

            /** OperationParams operationTimeout */
            operationTimeout?: (google.protobuf.IDuration|null);

            /** OperationParams cancelAfter */
            cancelAfter?: (google.protobuf.IDuration|null);

            /** OperationParams labels */
            labels?: ({ [k: string]: string }|null);

            /** OperationParams reportCostInfo */
            reportCostInfo?: (Ydb.FeatureFlag.Status|null);
        }

        /** Represents an OperationParams. */
        class OperationParams implements IOperationParams {

            /**
             * Constructs a new OperationParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Operations.IOperationParams);

            /** OperationParams operationMode. */
            public operationMode: Ydb.Operations.OperationParams.OperationMode;

            /** OperationParams operationTimeout. */
            public operationTimeout?: (google.protobuf.IDuration|null);

            /** OperationParams cancelAfter. */
            public cancelAfter?: (google.protobuf.IDuration|null);

            /** OperationParams labels. */
            public labels: { [k: string]: string };

            /** OperationParams reportCostInfo. */
            public reportCostInfo: Ydb.FeatureFlag.Status;

            /**
             * Creates a new OperationParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationParams instance
             */
            public static create(properties?: Ydb.Operations.IOperationParams): Ydb.Operations.OperationParams;

            /**
             * Encodes the specified OperationParams message. Does not implicitly {@link Ydb.Operations.OperationParams.verify|verify} messages.
             * @param message OperationParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Operations.IOperationParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationParams message, length delimited. Does not implicitly {@link Ydb.Operations.OperationParams.verify|verify} messages.
             * @param message OperationParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Operations.IOperationParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Operations.OperationParams;

            /**
             * Decodes an OperationParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Operations.OperationParams;

            /**
             * Verifies an OperationParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationParams
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Operations.OperationParams;

            /**
             * Creates a plain object from an OperationParams message. Also converts values to other types if specified.
             * @param message OperationParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Operations.OperationParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace OperationParams {

            /** OperationMode enum. */
            enum OperationMode {
                OPERATION_MODE_UNSPECIFIED = 0,
                SYNC = 1,
                ASYNC = 2
            }
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest id */
            id?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Operations.IGetOperationRequest);

            /** GetOperationRequest id. */
            public id: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: Ydb.Operations.IGetOperationRequest): Ydb.Operations.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link Ydb.Operations.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Operations.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link Ydb.Operations.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Operations.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Operations.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Operations.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Operations.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Operations.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationResponse. */
        interface IGetOperationResponse {

            /** GetOperationResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a GetOperationResponse. */
        class GetOperationResponse implements IGetOperationResponse {

            /**
             * Constructs a new GetOperationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Operations.IGetOperationResponse);

            /** GetOperationResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new GetOperationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationResponse instance
             */
            public static create(properties?: Ydb.Operations.IGetOperationResponse): Ydb.Operations.GetOperationResponse;

            /**
             * Encodes the specified GetOperationResponse message. Does not implicitly {@link Ydb.Operations.GetOperationResponse.verify|verify} messages.
             * @param message GetOperationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Operations.IGetOperationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationResponse message, length delimited. Does not implicitly {@link Ydb.Operations.GetOperationResponse.verify|verify} messages.
             * @param message GetOperationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Operations.IGetOperationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Operations.GetOperationResponse;

            /**
             * Decodes a GetOperationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Operations.GetOperationResponse;

            /**
             * Verifies a GetOperationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Operations.GetOperationResponse;

            /**
             * Creates a plain object from a GetOperationResponse message. Also converts values to other types if specified.
             * @param message GetOperationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Operations.GetOperationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest id */
            id?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Operations.ICancelOperationRequest);

            /** CancelOperationRequest id. */
            public id: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: Ydb.Operations.ICancelOperationRequest): Ydb.Operations.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link Ydb.Operations.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Operations.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link Ydb.Operations.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Operations.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Operations.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Operations.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Operations.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Operations.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationResponse. */
        interface ICancelOperationResponse {

            /** CancelOperationResponse status */
            status?: (Ydb.StatusIds.StatusCode|null);

            /** CancelOperationResponse issues */
            issues?: (Ydb.Issue.IIssueMessage[]|null);
        }

        /** Represents a CancelOperationResponse. */
        class CancelOperationResponse implements ICancelOperationResponse {

            /**
             * Constructs a new CancelOperationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Operations.ICancelOperationResponse);

            /** CancelOperationResponse status. */
            public status: Ydb.StatusIds.StatusCode;

            /** CancelOperationResponse issues. */
            public issues: Ydb.Issue.IIssueMessage[];

            /**
             * Creates a new CancelOperationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationResponse instance
             */
            public static create(properties?: Ydb.Operations.ICancelOperationResponse): Ydb.Operations.CancelOperationResponse;

            /**
             * Encodes the specified CancelOperationResponse message. Does not implicitly {@link Ydb.Operations.CancelOperationResponse.verify|verify} messages.
             * @param message CancelOperationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Operations.ICancelOperationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationResponse message, length delimited. Does not implicitly {@link Ydb.Operations.CancelOperationResponse.verify|verify} messages.
             * @param message CancelOperationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Operations.ICancelOperationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Operations.CancelOperationResponse;

            /**
             * Decodes a CancelOperationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Operations.CancelOperationResponse;

            /**
             * Verifies a CancelOperationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Operations.CancelOperationResponse;

            /**
             * Creates a plain object from a CancelOperationResponse message. Also converts values to other types if specified.
             * @param message CancelOperationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Operations.CancelOperationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ForgetOperationRequest. */
        interface IForgetOperationRequest {

            /** ForgetOperationRequest id */
            id?: (string|null);
        }

        /** Represents a ForgetOperationRequest. */
        class ForgetOperationRequest implements IForgetOperationRequest {

            /**
             * Constructs a new ForgetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Operations.IForgetOperationRequest);

            /** ForgetOperationRequest id. */
            public id: string;

            /**
             * Creates a new ForgetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForgetOperationRequest instance
             */
            public static create(properties?: Ydb.Operations.IForgetOperationRequest): Ydb.Operations.ForgetOperationRequest;

            /**
             * Encodes the specified ForgetOperationRequest message. Does not implicitly {@link Ydb.Operations.ForgetOperationRequest.verify|verify} messages.
             * @param message ForgetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Operations.IForgetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForgetOperationRequest message, length delimited. Does not implicitly {@link Ydb.Operations.ForgetOperationRequest.verify|verify} messages.
             * @param message ForgetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Operations.IForgetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForgetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ForgetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Operations.ForgetOperationRequest;

            /**
             * Decodes a ForgetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ForgetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Operations.ForgetOperationRequest;

            /**
             * Verifies a ForgetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForgetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForgetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Operations.ForgetOperationRequest;

            /**
             * Creates a plain object from a ForgetOperationRequest message. Also converts values to other types if specified.
             * @param message ForgetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Operations.ForgetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForgetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ForgetOperationResponse. */
        interface IForgetOperationResponse {

            /** ForgetOperationResponse status */
            status?: (Ydb.StatusIds.StatusCode|null);

            /** ForgetOperationResponse issues */
            issues?: (Ydb.Issue.IIssueMessage[]|null);
        }

        /** Represents a ForgetOperationResponse. */
        class ForgetOperationResponse implements IForgetOperationResponse {

            /**
             * Constructs a new ForgetOperationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Operations.IForgetOperationResponse);

            /** ForgetOperationResponse status. */
            public status: Ydb.StatusIds.StatusCode;

            /** ForgetOperationResponse issues. */
            public issues: Ydb.Issue.IIssueMessage[];

            /**
             * Creates a new ForgetOperationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForgetOperationResponse instance
             */
            public static create(properties?: Ydb.Operations.IForgetOperationResponse): Ydb.Operations.ForgetOperationResponse;

            /**
             * Encodes the specified ForgetOperationResponse message. Does not implicitly {@link Ydb.Operations.ForgetOperationResponse.verify|verify} messages.
             * @param message ForgetOperationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Operations.IForgetOperationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForgetOperationResponse message, length delimited. Does not implicitly {@link Ydb.Operations.ForgetOperationResponse.verify|verify} messages.
             * @param message ForgetOperationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Operations.IForgetOperationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForgetOperationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ForgetOperationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Operations.ForgetOperationResponse;

            /**
             * Decodes a ForgetOperationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ForgetOperationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Operations.ForgetOperationResponse;

            /**
             * Verifies a ForgetOperationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForgetOperationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForgetOperationResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Operations.ForgetOperationResponse;

            /**
             * Creates a plain object from a ForgetOperationResponse message. Also converts values to other types if specified.
             * @param message ForgetOperationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Operations.ForgetOperationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForgetOperationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest kind */
            kind?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|Long|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Operations.IListOperationsRequest);

            /** ListOperationsRequest kind. */
            public kind: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: (number|Long);

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: Ydb.Operations.IListOperationsRequest): Ydb.Operations.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link Ydb.Operations.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Operations.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link Ydb.Operations.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Operations.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Operations.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Operations.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Operations.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Operations.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse status */
            status?: (Ydb.StatusIds.StatusCode|null);

            /** ListOperationsResponse issues */
            issues?: (Ydb.Issue.IIssueMessage[]|null);

            /** ListOperationsResponse operations */
            operations?: (Ydb.Operations.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Operations.IListOperationsResponse);

            /** ListOperationsResponse status. */
            public status: Ydb.StatusIds.StatusCode;

            /** ListOperationsResponse issues. */
            public issues: Ydb.Issue.IIssueMessage[];

            /** ListOperationsResponse operations. */
            public operations: Ydb.Operations.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: Ydb.Operations.IListOperationsResponse): Ydb.Operations.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link Ydb.Operations.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Operations.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link Ydb.Operations.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Operations.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Operations.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Operations.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Operations.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Operations.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation id */
            id?: (string|null);

            /** Operation ready */
            ready?: (boolean|null);

            /** Operation status */
            status?: (Ydb.StatusIds.StatusCode|null);

            /** Operation issues */
            issues?: (Ydb.Issue.IIssueMessage[]|null);

            /** Operation result */
            result?: (google.protobuf.IAny|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation costInfo */
            costInfo?: (Ydb.ICostInfo|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Operations.IOperation);

            /** Operation id. */
            public id: string;

            /** Operation ready. */
            public ready: boolean;

            /** Operation status. */
            public status: Ydb.StatusIds.StatusCode;

            /** Operation issues. */
            public issues: Ydb.Issue.IIssueMessage[];

            /** Operation result. */
            public result?: (google.protobuf.IAny|null);

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation costInfo. */
            public costInfo?: (Ydb.ICostInfo|null);

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: Ydb.Operations.IOperation): Ydb.Operations.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link Ydb.Operations.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Operations.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link Ydb.Operations.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Operations.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Operations.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Operations.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Operations.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Operations.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a StatusIds. */
    interface IStatusIds {
    }

    /** Represents a StatusIds. */
    class StatusIds implements IStatusIds {

        /**
         * Constructs a new StatusIds.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IStatusIds);

        /**
         * Creates a new StatusIds instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatusIds instance
         */
        public static create(properties?: Ydb.IStatusIds): Ydb.StatusIds;

        /**
         * Encodes the specified StatusIds message. Does not implicitly {@link Ydb.StatusIds.verify|verify} messages.
         * @param message StatusIds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IStatusIds, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatusIds message, length delimited. Does not implicitly {@link Ydb.StatusIds.verify|verify} messages.
         * @param message StatusIds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IStatusIds, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatusIds message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatusIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.StatusIds;

        /**
         * Decodes a StatusIds message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StatusIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.StatusIds;

        /**
         * Verifies a StatusIds message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatusIds message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatusIds
         */
        public static fromObject(object: { [k: string]: any }): Ydb.StatusIds;

        /**
         * Creates a plain object from a StatusIds message. Also converts values to other types if specified.
         * @param message StatusIds
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.StatusIds, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatusIds to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace StatusIds {

        /** StatusCode enum. */
        enum StatusCode {
            STATUS_CODE_UNSPECIFIED = 0,
            SUCCESS = 400000,
            BAD_REQUEST = 400010,
            UNAUTHORIZED = 400020,
            INTERNAL_ERROR = 400030,
            ABORTED = 400040,
            UNAVAILABLE = 400050,
            OVERLOADED = 400060,
            SCHEME_ERROR = 400070,
            GENERIC_ERROR = 400080,
            TIMEOUT = 400090,
            BAD_SESSION = 400100,
            PRECONDITION_FAILED = 400120,
            ALREADY_EXISTS = 400130,
            NOT_FOUND = 400140,
            SESSION_EXPIRED = 400150,
            CANCELLED = 400160,
            UNDETERMINED = 400170,
            UNSUPPORTED = 400180,
            SESSION_BUSY = 400190
        }
    }

    /** Namespace TableStats. */
    namespace TableStats {

        /** Properties of an OperationStats. */
        interface IOperationStats {

            /** OperationStats rows */
            rows?: (number|Long|null);

            /** OperationStats bytes */
            bytes?: (number|Long|null);
        }

        /** Represents an OperationStats. */
        class OperationStats implements IOperationStats {

            /**
             * Constructs a new OperationStats.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.TableStats.IOperationStats);

            /** OperationStats rows. */
            public rows: (number|Long);

            /** OperationStats bytes. */
            public bytes: (number|Long);

            /**
             * Creates a new OperationStats instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationStats instance
             */
            public static create(properties?: Ydb.TableStats.IOperationStats): Ydb.TableStats.OperationStats;

            /**
             * Encodes the specified OperationStats message. Does not implicitly {@link Ydb.TableStats.OperationStats.verify|verify} messages.
             * @param message OperationStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.TableStats.IOperationStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationStats message, length delimited. Does not implicitly {@link Ydb.TableStats.OperationStats.verify|verify} messages.
             * @param message OperationStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.TableStats.IOperationStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationStats message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.TableStats.OperationStats;

            /**
             * Decodes an OperationStats message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.TableStats.OperationStats;

            /**
             * Verifies an OperationStats message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationStats message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationStats
             */
            public static fromObject(object: { [k: string]: any }): Ydb.TableStats.OperationStats;

            /**
             * Creates a plain object from an OperationStats message. Also converts values to other types if specified.
             * @param message OperationStats
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.TableStats.OperationStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationStats to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TableAccessStats. */
        interface ITableAccessStats {

            /** TableAccessStats name */
            name?: (string|null);

            /** TableAccessStats reads */
            reads?: (Ydb.TableStats.IOperationStats|null);

            /** TableAccessStats updates */
            updates?: (Ydb.TableStats.IOperationStats|null);

            /** TableAccessStats deletes */
            deletes?: (Ydb.TableStats.IOperationStats|null);

            /** TableAccessStats partitionsCount */
            partitionsCount?: (number|Long|null);
        }

        /** Represents a TableAccessStats. */
        class TableAccessStats implements ITableAccessStats {

            /**
             * Constructs a new TableAccessStats.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.TableStats.ITableAccessStats);

            /** TableAccessStats name. */
            public name: string;

            /** TableAccessStats reads. */
            public reads?: (Ydb.TableStats.IOperationStats|null);

            /** TableAccessStats updates. */
            public updates?: (Ydb.TableStats.IOperationStats|null);

            /** TableAccessStats deletes. */
            public deletes?: (Ydb.TableStats.IOperationStats|null);

            /** TableAccessStats partitionsCount. */
            public partitionsCount: (number|Long);

            /**
             * Creates a new TableAccessStats instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TableAccessStats instance
             */
            public static create(properties?: Ydb.TableStats.ITableAccessStats): Ydb.TableStats.TableAccessStats;

            /**
             * Encodes the specified TableAccessStats message. Does not implicitly {@link Ydb.TableStats.TableAccessStats.verify|verify} messages.
             * @param message TableAccessStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.TableStats.ITableAccessStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TableAccessStats message, length delimited. Does not implicitly {@link Ydb.TableStats.TableAccessStats.verify|verify} messages.
             * @param message TableAccessStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.TableStats.ITableAccessStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TableAccessStats message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TableAccessStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.TableStats.TableAccessStats;

            /**
             * Decodes a TableAccessStats message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TableAccessStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.TableStats.TableAccessStats;

            /**
             * Verifies a TableAccessStats message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TableAccessStats message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TableAccessStats
             */
            public static fromObject(object: { [k: string]: any }): Ydb.TableStats.TableAccessStats;

            /**
             * Creates a plain object from a TableAccessStats message. Also converts values to other types if specified.
             * @param message TableAccessStats
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.TableStats.TableAccessStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TableAccessStats to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryPhaseStats. */
        interface IQueryPhaseStats {

            /** QueryPhaseStats durationUs */
            durationUs?: (number|Long|null);

            /** QueryPhaseStats tableAccess */
            tableAccess?: (Ydb.TableStats.ITableAccessStats[]|null);

            /** QueryPhaseStats cpuTimeUs */
            cpuTimeUs?: (number|Long|null);

            /** QueryPhaseStats affectedShards */
            affectedShards?: (number|Long|null);

            /** QueryPhaseStats literalPhase */
            literalPhase?: (boolean|null);
        }

        /** Represents a QueryPhaseStats. */
        class QueryPhaseStats implements IQueryPhaseStats {

            /**
             * Constructs a new QueryPhaseStats.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.TableStats.IQueryPhaseStats);

            /** QueryPhaseStats durationUs. */
            public durationUs: (number|Long);

            /** QueryPhaseStats tableAccess. */
            public tableAccess: Ydb.TableStats.ITableAccessStats[];

            /** QueryPhaseStats cpuTimeUs. */
            public cpuTimeUs: (number|Long);

            /** QueryPhaseStats affectedShards. */
            public affectedShards: (number|Long);

            /** QueryPhaseStats literalPhase. */
            public literalPhase: boolean;

            /**
             * Creates a new QueryPhaseStats instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryPhaseStats instance
             */
            public static create(properties?: Ydb.TableStats.IQueryPhaseStats): Ydb.TableStats.QueryPhaseStats;

            /**
             * Encodes the specified QueryPhaseStats message. Does not implicitly {@link Ydb.TableStats.QueryPhaseStats.verify|verify} messages.
             * @param message QueryPhaseStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.TableStats.IQueryPhaseStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryPhaseStats message, length delimited. Does not implicitly {@link Ydb.TableStats.QueryPhaseStats.verify|verify} messages.
             * @param message QueryPhaseStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.TableStats.IQueryPhaseStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryPhaseStats message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryPhaseStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.TableStats.QueryPhaseStats;

            /**
             * Decodes a QueryPhaseStats message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryPhaseStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.TableStats.QueryPhaseStats;

            /**
             * Verifies a QueryPhaseStats message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryPhaseStats message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryPhaseStats
             */
            public static fromObject(object: { [k: string]: any }): Ydb.TableStats.QueryPhaseStats;

            /**
             * Creates a plain object from a QueryPhaseStats message. Also converts values to other types if specified.
             * @param message QueryPhaseStats
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.TableStats.QueryPhaseStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryPhaseStats to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CompilationStats. */
        interface ICompilationStats {

            /** CompilationStats fromCache */
            fromCache?: (boolean|null);

            /** CompilationStats durationUs */
            durationUs?: (number|Long|null);

            /** CompilationStats cpuTimeUs */
            cpuTimeUs?: (number|Long|null);
        }

        /** Represents a CompilationStats. */
        class CompilationStats implements ICompilationStats {

            /**
             * Constructs a new CompilationStats.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.TableStats.ICompilationStats);

            /** CompilationStats fromCache. */
            public fromCache: boolean;

            /** CompilationStats durationUs. */
            public durationUs: (number|Long);

            /** CompilationStats cpuTimeUs. */
            public cpuTimeUs: (number|Long);

            /**
             * Creates a new CompilationStats instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompilationStats instance
             */
            public static create(properties?: Ydb.TableStats.ICompilationStats): Ydb.TableStats.CompilationStats;

            /**
             * Encodes the specified CompilationStats message. Does not implicitly {@link Ydb.TableStats.CompilationStats.verify|verify} messages.
             * @param message CompilationStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.TableStats.ICompilationStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CompilationStats message, length delimited. Does not implicitly {@link Ydb.TableStats.CompilationStats.verify|verify} messages.
             * @param message CompilationStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.TableStats.ICompilationStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompilationStats message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompilationStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.TableStats.CompilationStats;

            /**
             * Decodes a CompilationStats message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CompilationStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.TableStats.CompilationStats;

            /**
             * Verifies a CompilationStats message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CompilationStats message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CompilationStats
             */
            public static fromObject(object: { [k: string]: any }): Ydb.TableStats.CompilationStats;

            /**
             * Creates a plain object from a CompilationStats message. Also converts values to other types if specified.
             * @param message CompilationStats
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.TableStats.CompilationStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CompilationStats to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryStats. */
        interface IQueryStats {

            /** QueryStats queryPhases */
            queryPhases?: (Ydb.TableStats.IQueryPhaseStats[]|null);

            /** QueryStats compilation */
            compilation?: (Ydb.TableStats.ICompilationStats|null);

            /** QueryStats processCpuTimeUs */
            processCpuTimeUs?: (number|Long|null);

            /** QueryStats queryPlan */
            queryPlan?: (string|null);

            /** QueryStats queryAst */
            queryAst?: (string|null);
        }

        /** Represents a QueryStats. */
        class QueryStats implements IQueryStats {

            /**
             * Constructs a new QueryStats.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.TableStats.IQueryStats);

            /** QueryStats queryPhases. */
            public queryPhases: Ydb.TableStats.IQueryPhaseStats[];

            /** QueryStats compilation. */
            public compilation?: (Ydb.TableStats.ICompilationStats|null);

            /** QueryStats processCpuTimeUs. */
            public processCpuTimeUs: (number|Long);

            /** QueryStats queryPlan. */
            public queryPlan: string;

            /** QueryStats queryAst. */
            public queryAst: string;

            /**
             * Creates a new QueryStats instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryStats instance
             */
            public static create(properties?: Ydb.TableStats.IQueryStats): Ydb.TableStats.QueryStats;

            /**
             * Encodes the specified QueryStats message. Does not implicitly {@link Ydb.TableStats.QueryStats.verify|verify} messages.
             * @param message QueryStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.TableStats.IQueryStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryStats message, length delimited. Does not implicitly {@link Ydb.TableStats.QueryStats.verify|verify} messages.
             * @param message QueryStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.TableStats.IQueryStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryStats message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.TableStats.QueryStats;

            /**
             * Decodes a QueryStats message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.TableStats.QueryStats;

            /**
             * Verifies a QueryStats message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryStats message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryStats
             */
            public static fromObject(object: { [k: string]: any }): Ydb.TableStats.QueryStats;

            /**
             * Creates a plain object from a QueryStats message. Also converts values to other types if specified.
             * @param message QueryStats
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.TableStats.QueryStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryStats to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a DecimalType. */
    interface IDecimalType {

        /** DecimalType precision */
        precision?: (number|null);

        /** DecimalType scale */
        scale?: (number|null);
    }

    /** Represents a DecimalType. */
    class DecimalType implements IDecimalType {

        /**
         * Constructs a new DecimalType.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IDecimalType);

        /** DecimalType precision. */
        public precision: number;

        /** DecimalType scale. */
        public scale: number;

        /**
         * Creates a new DecimalType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecimalType instance
         */
        public static create(properties?: Ydb.IDecimalType): Ydb.DecimalType;

        /**
         * Encodes the specified DecimalType message. Does not implicitly {@link Ydb.DecimalType.verify|verify} messages.
         * @param message DecimalType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IDecimalType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DecimalType message, length delimited. Does not implicitly {@link Ydb.DecimalType.verify|verify} messages.
         * @param message DecimalType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IDecimalType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DecimalType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DecimalType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.DecimalType;

        /**
         * Decodes a DecimalType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DecimalType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.DecimalType;

        /**
         * Verifies a DecimalType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DecimalType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DecimalType
         */
        public static fromObject(object: { [k: string]: any }): Ydb.DecimalType;

        /**
         * Creates a plain object from a DecimalType message. Also converts values to other types if specified.
         * @param message DecimalType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.DecimalType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DecimalType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OptionalType. */
    interface IOptionalType {

        /** OptionalType item */
        item?: (Ydb.IType|null);
    }

    /** Represents an OptionalType. */
    class OptionalType implements IOptionalType {

        /**
         * Constructs a new OptionalType.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IOptionalType);

        /** OptionalType item. */
        public item?: (Ydb.IType|null);

        /**
         * Creates a new OptionalType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OptionalType instance
         */
        public static create(properties?: Ydb.IOptionalType): Ydb.OptionalType;

        /**
         * Encodes the specified OptionalType message. Does not implicitly {@link Ydb.OptionalType.verify|verify} messages.
         * @param message OptionalType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IOptionalType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OptionalType message, length delimited. Does not implicitly {@link Ydb.OptionalType.verify|verify} messages.
         * @param message OptionalType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IOptionalType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OptionalType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OptionalType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.OptionalType;

        /**
         * Decodes an OptionalType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OptionalType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.OptionalType;

        /**
         * Verifies an OptionalType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OptionalType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OptionalType
         */
        public static fromObject(object: { [k: string]: any }): Ydb.OptionalType;

        /**
         * Creates a plain object from an OptionalType message. Also converts values to other types if specified.
         * @param message OptionalType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.OptionalType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OptionalType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListType. */
    interface IListType {

        /** ListType item */
        item?: (Ydb.IType|null);
    }

    /** Represents a ListType. */
    class ListType implements IListType {

        /**
         * Constructs a new ListType.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IListType);

        /** ListType item. */
        public item?: (Ydb.IType|null);

        /**
         * Creates a new ListType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListType instance
         */
        public static create(properties?: Ydb.IListType): Ydb.ListType;

        /**
         * Encodes the specified ListType message. Does not implicitly {@link Ydb.ListType.verify|verify} messages.
         * @param message ListType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IListType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListType message, length delimited. Does not implicitly {@link Ydb.ListType.verify|verify} messages.
         * @param message ListType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IListType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.ListType;

        /**
         * Decodes a ListType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.ListType;

        /**
         * Verifies a ListType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListType
         */
        public static fromObject(object: { [k: string]: any }): Ydb.ListType;

        /**
         * Creates a plain object from a ListType message. Also converts values to other types if specified.
         * @param message ListType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.ListType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VariantType. */
    interface IVariantType {

        /** VariantType tupleItems */
        tupleItems?: (Ydb.ITupleType|null);

        /** VariantType structItems */
        structItems?: (Ydb.IStructType|null);
    }

    /** Represents a VariantType. */
    class VariantType implements IVariantType {

        /**
         * Constructs a new VariantType.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IVariantType);

        /** VariantType tupleItems. */
        public tupleItems?: (Ydb.ITupleType|null);

        /** VariantType structItems. */
        public structItems?: (Ydb.IStructType|null);

        /** VariantType type. */
        public type?: ("tupleItems"|"structItems");

        /**
         * Creates a new VariantType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VariantType instance
         */
        public static create(properties?: Ydb.IVariantType): Ydb.VariantType;

        /**
         * Encodes the specified VariantType message. Does not implicitly {@link Ydb.VariantType.verify|verify} messages.
         * @param message VariantType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IVariantType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VariantType message, length delimited. Does not implicitly {@link Ydb.VariantType.verify|verify} messages.
         * @param message VariantType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IVariantType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VariantType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VariantType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.VariantType;

        /**
         * Decodes a VariantType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VariantType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.VariantType;

        /**
         * Verifies a VariantType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VariantType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VariantType
         */
        public static fromObject(object: { [k: string]: any }): Ydb.VariantType;

        /**
         * Creates a plain object from a VariantType message. Also converts values to other types if specified.
         * @param message VariantType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.VariantType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VariantType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TupleType. */
    interface ITupleType {

        /** TupleType elements */
        elements?: (Ydb.IType[]|null);
    }

    /** Represents a TupleType. */
    class TupleType implements ITupleType {

        /**
         * Constructs a new TupleType.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.ITupleType);

        /** TupleType elements. */
        public elements: Ydb.IType[];

        /**
         * Creates a new TupleType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TupleType instance
         */
        public static create(properties?: Ydb.ITupleType): Ydb.TupleType;

        /**
         * Encodes the specified TupleType message. Does not implicitly {@link Ydb.TupleType.verify|verify} messages.
         * @param message TupleType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.ITupleType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TupleType message, length delimited. Does not implicitly {@link Ydb.TupleType.verify|verify} messages.
         * @param message TupleType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.ITupleType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TupleType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TupleType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.TupleType;

        /**
         * Decodes a TupleType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TupleType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.TupleType;

        /**
         * Verifies a TupleType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TupleType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TupleType
         */
        public static fromObject(object: { [k: string]: any }): Ydb.TupleType;

        /**
         * Creates a plain object from a TupleType message. Also converts values to other types if specified.
         * @param message TupleType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.TupleType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TupleType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StructMember. */
    interface IStructMember {

        /** StructMember name */
        name?: (string|null);

        /** StructMember type */
        type?: (Ydb.IType|null);
    }

    /** Represents a StructMember. */
    class StructMember implements IStructMember {

        /**
         * Constructs a new StructMember.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IStructMember);

        /** StructMember name. */
        public name: string;

        /** StructMember type. */
        public type?: (Ydb.IType|null);

        /**
         * Creates a new StructMember instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StructMember instance
         */
        public static create(properties?: Ydb.IStructMember): Ydb.StructMember;

        /**
         * Encodes the specified StructMember message. Does not implicitly {@link Ydb.StructMember.verify|verify} messages.
         * @param message StructMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IStructMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StructMember message, length delimited. Does not implicitly {@link Ydb.StructMember.verify|verify} messages.
         * @param message StructMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IStructMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StructMember message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StructMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.StructMember;

        /**
         * Decodes a StructMember message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StructMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.StructMember;

        /**
         * Verifies a StructMember message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StructMember message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StructMember
         */
        public static fromObject(object: { [k: string]: any }): Ydb.StructMember;

        /**
         * Creates a plain object from a StructMember message. Also converts values to other types if specified.
         * @param message StructMember
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.StructMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StructMember to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StructType. */
    interface IStructType {

        /** StructType members */
        members?: (Ydb.IStructMember[]|null);
    }

    /** Represents a StructType. */
    class StructType implements IStructType {

        /**
         * Constructs a new StructType.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IStructType);

        /** StructType members. */
        public members: Ydb.IStructMember[];

        /**
         * Creates a new StructType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StructType instance
         */
        public static create(properties?: Ydb.IStructType): Ydb.StructType;

        /**
         * Encodes the specified StructType message. Does not implicitly {@link Ydb.StructType.verify|verify} messages.
         * @param message StructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StructType message, length delimited. Does not implicitly {@link Ydb.StructType.verify|verify} messages.
         * @param message StructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StructType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.StructType;

        /**
         * Decodes a StructType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.StructType;

        /**
         * Verifies a StructType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StructType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StructType
         */
        public static fromObject(object: { [k: string]: any }): Ydb.StructType;

        /**
         * Creates a plain object from a StructType message. Also converts values to other types if specified.
         * @param message StructType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.StructType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StructType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DictType. */
    interface IDictType {

        /** DictType key */
        key?: (Ydb.IType|null);

        /** DictType payload */
        payload?: (Ydb.IType|null);
    }

    /** Represents a DictType. */
    class DictType implements IDictType {

        /**
         * Constructs a new DictType.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IDictType);

        /** DictType key. */
        public key?: (Ydb.IType|null);

        /** DictType payload. */
        public payload?: (Ydb.IType|null);

        /**
         * Creates a new DictType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DictType instance
         */
        public static create(properties?: Ydb.IDictType): Ydb.DictType;

        /**
         * Encodes the specified DictType message. Does not implicitly {@link Ydb.DictType.verify|verify} messages.
         * @param message DictType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IDictType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DictType message, length delimited. Does not implicitly {@link Ydb.DictType.verify|verify} messages.
         * @param message DictType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IDictType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DictType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DictType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.DictType;

        /**
         * Decodes a DictType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DictType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.DictType;

        /**
         * Verifies a DictType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DictType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DictType
         */
        public static fromObject(object: { [k: string]: any }): Ydb.DictType;

        /**
         * Creates a plain object from a DictType message. Also converts values to other types if specified.
         * @param message DictType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.DictType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DictType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Type. */
    interface IType {

        /** Type typeId */
        typeId?: (Ydb.Type.PrimitiveTypeId|null);

        /** Type decimalType */
        decimalType?: (Ydb.IDecimalType|null);

        /** Type optionalType */
        optionalType?: (Ydb.IOptionalType|null);

        /** Type listType */
        listType?: (Ydb.IListType|null);

        /** Type tupleType */
        tupleType?: (Ydb.ITupleType|null);

        /** Type structType */
        structType?: (Ydb.IStructType|null);

        /** Type dictType */
        dictType?: (Ydb.IDictType|null);

        /** Type variantType */
        variantType?: (Ydb.IVariantType|null);

        /** Type voidType */
        voidType?: (google.protobuf.NullValue|null);
    }

    /** Represents a Type. */
    class Type implements IType {

        /**
         * Constructs a new Type.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IType);

        /** Type typeId. */
        public typeId?: (Ydb.Type.PrimitiveTypeId|null);

        /** Type decimalType. */
        public decimalType?: (Ydb.IDecimalType|null);

        /** Type optionalType. */
        public optionalType?: (Ydb.IOptionalType|null);

        /** Type listType. */
        public listType?: (Ydb.IListType|null);

        /** Type tupleType. */
        public tupleType?: (Ydb.ITupleType|null);

        /** Type structType. */
        public structType?: (Ydb.IStructType|null);

        /** Type dictType. */
        public dictType?: (Ydb.IDictType|null);

        /** Type variantType. */
        public variantType?: (Ydb.IVariantType|null);

        /** Type voidType. */
        public voidType?: (google.protobuf.NullValue|null);

        /** Type type. */
        public type?: ("typeId"|"decimalType"|"optionalType"|"listType"|"tupleType"|"structType"|"dictType"|"variantType"|"voidType");

        /**
         * Creates a new Type instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Type instance
         */
        public static create(properties?: Ydb.IType): Ydb.Type;

        /**
         * Encodes the specified Type message. Does not implicitly {@link Ydb.Type.verify|verify} messages.
         * @param message Type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Type message, length delimited. Does not implicitly {@link Ydb.Type.verify|verify} messages.
         * @param message Type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Type message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Type;

        /**
         * Decodes a Type message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Type;

        /**
         * Verifies a Type message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Type message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Type
         */
        public static fromObject(object: { [k: string]: any }): Ydb.Type;

        /**
         * Creates a plain object from a Type message. Also converts values to other types if specified.
         * @param message Type
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.Type, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Type to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Type {

        /** PrimitiveTypeId enum. */
        enum PrimitiveTypeId {
            PRIMITIVE_TYPE_ID_UNSPECIFIED = 0,
            BOOL = 6,
            INT8 = 7,
            UINT8 = 5,
            INT16 = 8,
            UINT16 = 9,
            INT32 = 1,
            UINT32 = 2,
            INT64 = 3,
            UINT64 = 4,
            FLOAT = 33,
            DOUBLE = 32,
            DATE = 48,
            DATETIME = 49,
            TIMESTAMP = 50,
            INTERVAL = 51,
            TZ_DATE = 52,
            TZ_DATETIME = 53,
            TZ_TIMESTAMP = 54,
            STRING = 4097,
            UTF8 = 4608,
            YSON = 4609,
            JSON = 4610,
            UUID = 4611,
            JSON_DOCUMENT = 4612,
            DYNUMBER = 4866
        }
    }

    /** Properties of a ValuePair. */
    interface IValuePair {

        /** ValuePair key */
        key?: (Ydb.IValue|null);

        /** ValuePair payload */
        payload?: (Ydb.IValue|null);
    }

    /** Represents a ValuePair. */
    class ValuePair implements IValuePair {

        /**
         * Constructs a new ValuePair.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IValuePair);

        /** ValuePair key. */
        public key?: (Ydb.IValue|null);

        /** ValuePair payload. */
        public payload?: (Ydb.IValue|null);

        /**
         * Creates a new ValuePair instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValuePair instance
         */
        public static create(properties?: Ydb.IValuePair): Ydb.ValuePair;

        /**
         * Encodes the specified ValuePair message. Does not implicitly {@link Ydb.ValuePair.verify|verify} messages.
         * @param message ValuePair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IValuePair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ValuePair message, length delimited. Does not implicitly {@link Ydb.ValuePair.verify|verify} messages.
         * @param message ValuePair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IValuePair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValuePair message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValuePair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.ValuePair;

        /**
         * Decodes a ValuePair message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ValuePair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.ValuePair;

        /**
         * Verifies a ValuePair message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ValuePair message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValuePair
         */
        public static fromObject(object: { [k: string]: any }): Ydb.ValuePair;

        /**
         * Creates a plain object from a ValuePair message. Also converts values to other types if specified.
         * @param message ValuePair
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.ValuePair, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValuePair to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Value. */
    interface IValue {

        /** Value boolValue */
        boolValue?: (boolean|null);

        /** Value int32Value */
        int32Value?: (number|null);

        /** Value uint32Value */
        uint32Value?: (number|null);

        /** Value int64Value */
        int64Value?: (number|Long|null);

        /** Value uint64Value */
        uint64Value?: (number|Long|null);

        /** Value floatValue */
        floatValue?: (number|null);

        /** Value doubleValue */
        doubleValue?: (number|null);

        /** Value bytesValue */
        bytesValue?: (Uint8Array|null);

        /** Value textValue */
        textValue?: (string|null);

        /** Value nullFlagValue */
        nullFlagValue?: (google.protobuf.NullValue|null);

        /** Value nestedValue */
        nestedValue?: (Ydb.IValue|null);

        /** Value low_128 */
        low_128?: (number|Long|null);

        /** Value items */
        items?: (Ydb.IValue[]|null);

        /** Value pairs */
        pairs?: (Ydb.IValuePair[]|null);

        /** Value variantIndex */
        variantIndex?: (number|null);

        /** Value high_128 */
        high_128?: (number|Long|null);
    }

    /** Represents a Value. */
    class Value implements IValue {

        /**
         * Constructs a new Value.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IValue);

        /** Value boolValue. */
        public boolValue?: (boolean|null);

        /** Value int32Value. */
        public int32Value?: (number|null);

        /** Value uint32Value. */
        public uint32Value?: (number|null);

        /** Value int64Value. */
        public int64Value?: (number|Long|null);

        /** Value uint64Value. */
        public uint64Value?: (number|Long|null);

        /** Value floatValue. */
        public floatValue?: (number|null);

        /** Value doubleValue. */
        public doubleValue?: (number|null);

        /** Value bytesValue. */
        public bytesValue?: (Uint8Array|null);

        /** Value textValue. */
        public textValue?: (string|null);

        /** Value nullFlagValue. */
        public nullFlagValue?: (google.protobuf.NullValue|null);

        /** Value nestedValue. */
        public nestedValue?: (Ydb.IValue|null);

        /** Value low_128. */
        public low_128?: (number|Long|null);

        /** Value items. */
        public items: Ydb.IValue[];

        /** Value pairs. */
        public pairs: Ydb.IValuePair[];

        /** Value variantIndex. */
        public variantIndex: number;

        /** Value high_128. */
        public high_128: (number|Long);

        /** Value value. */
        public value?: ("boolValue"|"int32Value"|"uint32Value"|"int64Value"|"uint64Value"|"floatValue"|"doubleValue"|"bytesValue"|"textValue"|"nullFlagValue"|"nestedValue"|"low_128");

        /**
         * Creates a new Value instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Value instance
         */
        public static create(properties?: Ydb.IValue): Ydb.Value;

        /**
         * Encodes the specified Value message. Does not implicitly {@link Ydb.Value.verify|verify} messages.
         * @param message Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Value message, length delimited. Does not implicitly {@link Ydb.Value.verify|verify} messages.
         * @param message Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Value message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Value;

        /**
         * Decodes a Value message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Value;

        /**
         * Verifies a Value message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Value message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Value
         */
        public static fromObject(object: { [k: string]: any }): Ydb.Value;

        /**
         * Creates a plain object from a Value message. Also converts values to other types if specified.
         * @param message Value
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Value to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TypedValue. */
    interface ITypedValue {

        /** TypedValue type */
        type?: (Ydb.IType|null);

        /** TypedValue value */
        value?: (Ydb.IValue|null);
    }

    /** Represents a TypedValue. */
    class TypedValue implements ITypedValue {

        /**
         * Constructs a new TypedValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.ITypedValue);

        /** TypedValue type. */
        public type?: (Ydb.IType|null);

        /** TypedValue value. */
        public value?: (Ydb.IValue|null);

        /**
         * Creates a new TypedValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TypedValue instance
         */
        public static create(properties?: Ydb.ITypedValue): Ydb.TypedValue;

        /**
         * Encodes the specified TypedValue message. Does not implicitly {@link Ydb.TypedValue.verify|verify} messages.
         * @param message TypedValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.ITypedValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TypedValue message, length delimited. Does not implicitly {@link Ydb.TypedValue.verify|verify} messages.
         * @param message TypedValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.ITypedValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TypedValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TypedValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.TypedValue;

        /**
         * Decodes a TypedValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TypedValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.TypedValue;

        /**
         * Verifies a TypedValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TypedValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TypedValue
         */
        public static fromObject(object: { [k: string]: any }): Ydb.TypedValue;

        /**
         * Creates a plain object from a TypedValue message. Also converts values to other types if specified.
         * @param message TypedValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.TypedValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TypedValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Column. */
    interface IColumn {

        /** Column name */
        name?: (string|null);

        /** Column type */
        type?: (Ydb.IType|null);
    }

    /** Represents a Column. */
    class Column implements IColumn {

        /**
         * Constructs a new Column.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IColumn);

        /** Column name. */
        public name: string;

        /** Column type. */
        public type?: (Ydb.IType|null);

        /**
         * Creates a new Column instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Column instance
         */
        public static create(properties?: Ydb.IColumn): Ydb.Column;

        /**
         * Encodes the specified Column message. Does not implicitly {@link Ydb.Column.verify|verify} messages.
         * @param message Column message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Column message, length delimited. Does not implicitly {@link Ydb.Column.verify|verify} messages.
         * @param message Column message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Column message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Column
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Column;

        /**
         * Decodes a Column message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Column
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Column;

        /**
         * Verifies a Column message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Column message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Column
         */
        public static fromObject(object: { [k: string]: any }): Ydb.Column;

        /**
         * Creates a plain object from a Column message. Also converts values to other types if specified.
         * @param message Column
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.Column, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Column to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResultSet. */
    interface IResultSet {

        /** ResultSet columns */
        columns?: (Ydb.IColumn[]|null);

        /** ResultSet rows */
        rows?: (Ydb.IValue[]|null);

        /** ResultSet truncated */
        truncated?: (boolean|null);
    }

    /** Represents a ResultSet. */
    class ResultSet implements IResultSet {

        /**
         * Constructs a new ResultSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ydb.IResultSet);

        /** ResultSet columns. */
        public columns: Ydb.IColumn[];

        /** ResultSet rows. */
        public rows: Ydb.IValue[];

        /** ResultSet truncated. */
        public truncated: boolean;

        /**
         * Creates a new ResultSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultSet instance
         */
        public static create(properties?: Ydb.IResultSet): Ydb.ResultSet;

        /**
         * Encodes the specified ResultSet message. Does not implicitly {@link Ydb.ResultSet.verify|verify} messages.
         * @param message ResultSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ydb.IResultSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResultSet message, length delimited. Does not implicitly {@link Ydb.ResultSet.verify|verify} messages.
         * @param message ResultSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ydb.IResultSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResultSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.ResultSet;

        /**
         * Decodes a ResultSet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.ResultSet;

        /**
         * Verifies a ResultSet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResultSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResultSet
         */
        public static fromObject(object: { [k: string]: any }): Ydb.ResultSet;

        /**
         * Creates a plain object from a ResultSet message. Also converts values to other types if specified.
         * @param message ResultSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ydb.ResultSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResultSet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Namespace Scheme. */
    namespace Scheme {

        /** Properties of a MakeDirectoryRequest. */
        interface IMakeDirectoryRequest {

            /** MakeDirectoryRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** MakeDirectoryRequest path */
            path?: (string|null);
        }

        /** Represents a MakeDirectoryRequest. */
        class MakeDirectoryRequest implements IMakeDirectoryRequest {

            /**
             * Constructs a new MakeDirectoryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IMakeDirectoryRequest);

            /** MakeDirectoryRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** MakeDirectoryRequest path. */
            public path: string;

            /**
             * Creates a new MakeDirectoryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MakeDirectoryRequest instance
             */
            public static create(properties?: Ydb.Scheme.IMakeDirectoryRequest): Ydb.Scheme.MakeDirectoryRequest;

            /**
             * Encodes the specified MakeDirectoryRequest message. Does not implicitly {@link Ydb.Scheme.MakeDirectoryRequest.verify|verify} messages.
             * @param message MakeDirectoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IMakeDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MakeDirectoryRequest message, length delimited. Does not implicitly {@link Ydb.Scheme.MakeDirectoryRequest.verify|verify} messages.
             * @param message MakeDirectoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IMakeDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MakeDirectoryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MakeDirectoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.MakeDirectoryRequest;

            /**
             * Decodes a MakeDirectoryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MakeDirectoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.MakeDirectoryRequest;

            /**
             * Verifies a MakeDirectoryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MakeDirectoryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MakeDirectoryRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.MakeDirectoryRequest;

            /**
             * Creates a plain object from a MakeDirectoryRequest message. Also converts values to other types if specified.
             * @param message MakeDirectoryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.MakeDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MakeDirectoryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MakeDirectoryResponse. */
        interface IMakeDirectoryResponse {

            /** MakeDirectoryResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a MakeDirectoryResponse. */
        class MakeDirectoryResponse implements IMakeDirectoryResponse {

            /**
             * Constructs a new MakeDirectoryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IMakeDirectoryResponse);

            /** MakeDirectoryResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new MakeDirectoryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MakeDirectoryResponse instance
             */
            public static create(properties?: Ydb.Scheme.IMakeDirectoryResponse): Ydb.Scheme.MakeDirectoryResponse;

            /**
             * Encodes the specified MakeDirectoryResponse message. Does not implicitly {@link Ydb.Scheme.MakeDirectoryResponse.verify|verify} messages.
             * @param message MakeDirectoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IMakeDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MakeDirectoryResponse message, length delimited. Does not implicitly {@link Ydb.Scheme.MakeDirectoryResponse.verify|verify} messages.
             * @param message MakeDirectoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IMakeDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MakeDirectoryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MakeDirectoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.MakeDirectoryResponse;

            /**
             * Decodes a MakeDirectoryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MakeDirectoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.MakeDirectoryResponse;

            /**
             * Verifies a MakeDirectoryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MakeDirectoryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MakeDirectoryResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.MakeDirectoryResponse;

            /**
             * Creates a plain object from a MakeDirectoryResponse message. Also converts values to other types if specified.
             * @param message MakeDirectoryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.MakeDirectoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MakeDirectoryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RemoveDirectoryRequest. */
        interface IRemoveDirectoryRequest {

            /** RemoveDirectoryRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** RemoveDirectoryRequest path */
            path?: (string|null);
        }

        /** Represents a RemoveDirectoryRequest. */
        class RemoveDirectoryRequest implements IRemoveDirectoryRequest {

            /**
             * Constructs a new RemoveDirectoryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IRemoveDirectoryRequest);

            /** RemoveDirectoryRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** RemoveDirectoryRequest path. */
            public path: string;

            /**
             * Creates a new RemoveDirectoryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoveDirectoryRequest instance
             */
            public static create(properties?: Ydb.Scheme.IRemoveDirectoryRequest): Ydb.Scheme.RemoveDirectoryRequest;

            /**
             * Encodes the specified RemoveDirectoryRequest message. Does not implicitly {@link Ydb.Scheme.RemoveDirectoryRequest.verify|verify} messages.
             * @param message RemoveDirectoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IRemoveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveDirectoryRequest message, length delimited. Does not implicitly {@link Ydb.Scheme.RemoveDirectoryRequest.verify|verify} messages.
             * @param message RemoveDirectoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IRemoveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveDirectoryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemoveDirectoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.RemoveDirectoryRequest;

            /**
             * Decodes a RemoveDirectoryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemoveDirectoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.RemoveDirectoryRequest;

            /**
             * Verifies a RemoveDirectoryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RemoveDirectoryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoveDirectoryRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.RemoveDirectoryRequest;

            /**
             * Creates a plain object from a RemoveDirectoryRequest message. Also converts values to other types if specified.
             * @param message RemoveDirectoryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.RemoveDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveDirectoryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RemoveDirectoryResponse. */
        interface IRemoveDirectoryResponse {

            /** RemoveDirectoryResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a RemoveDirectoryResponse. */
        class RemoveDirectoryResponse implements IRemoveDirectoryResponse {

            /**
             * Constructs a new RemoveDirectoryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IRemoveDirectoryResponse);

            /** RemoveDirectoryResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new RemoveDirectoryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoveDirectoryResponse instance
             */
            public static create(properties?: Ydb.Scheme.IRemoveDirectoryResponse): Ydb.Scheme.RemoveDirectoryResponse;

            /**
             * Encodes the specified RemoveDirectoryResponse message. Does not implicitly {@link Ydb.Scheme.RemoveDirectoryResponse.verify|verify} messages.
             * @param message RemoveDirectoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IRemoveDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveDirectoryResponse message, length delimited. Does not implicitly {@link Ydb.Scheme.RemoveDirectoryResponse.verify|verify} messages.
             * @param message RemoveDirectoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IRemoveDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveDirectoryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemoveDirectoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.RemoveDirectoryResponse;

            /**
             * Decodes a RemoveDirectoryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemoveDirectoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.RemoveDirectoryResponse;

            /**
             * Verifies a RemoveDirectoryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RemoveDirectoryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoveDirectoryResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.RemoveDirectoryResponse;

            /**
             * Creates a plain object from a RemoveDirectoryResponse message. Also converts values to other types if specified.
             * @param message RemoveDirectoryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.RemoveDirectoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveDirectoryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListDirectoryRequest. */
        interface IListDirectoryRequest {

            /** ListDirectoryRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** ListDirectoryRequest path */
            path?: (string|null);
        }

        /** Represents a ListDirectoryRequest. */
        class ListDirectoryRequest implements IListDirectoryRequest {

            /**
             * Constructs a new ListDirectoryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IListDirectoryRequest);

            /** ListDirectoryRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** ListDirectoryRequest path. */
            public path: string;

            /**
             * Creates a new ListDirectoryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListDirectoryRequest instance
             */
            public static create(properties?: Ydb.Scheme.IListDirectoryRequest): Ydb.Scheme.ListDirectoryRequest;

            /**
             * Encodes the specified ListDirectoryRequest message. Does not implicitly {@link Ydb.Scheme.ListDirectoryRequest.verify|verify} messages.
             * @param message ListDirectoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IListDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListDirectoryRequest message, length delimited. Does not implicitly {@link Ydb.Scheme.ListDirectoryRequest.verify|verify} messages.
             * @param message ListDirectoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IListDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListDirectoryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListDirectoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.ListDirectoryRequest;

            /**
             * Decodes a ListDirectoryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListDirectoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.ListDirectoryRequest;

            /**
             * Verifies a ListDirectoryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListDirectoryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListDirectoryRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.ListDirectoryRequest;

            /**
             * Creates a plain object from a ListDirectoryRequest message. Also converts values to other types if specified.
             * @param message ListDirectoryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.ListDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListDirectoryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListDirectoryResponse. */
        interface IListDirectoryResponse {

            /** ListDirectoryResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a ListDirectoryResponse. */
        class ListDirectoryResponse implements IListDirectoryResponse {

            /**
             * Constructs a new ListDirectoryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IListDirectoryResponse);

            /** ListDirectoryResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new ListDirectoryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListDirectoryResponse instance
             */
            public static create(properties?: Ydb.Scheme.IListDirectoryResponse): Ydb.Scheme.ListDirectoryResponse;

            /**
             * Encodes the specified ListDirectoryResponse message. Does not implicitly {@link Ydb.Scheme.ListDirectoryResponse.verify|verify} messages.
             * @param message ListDirectoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IListDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListDirectoryResponse message, length delimited. Does not implicitly {@link Ydb.Scheme.ListDirectoryResponse.verify|verify} messages.
             * @param message ListDirectoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IListDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListDirectoryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListDirectoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.ListDirectoryResponse;

            /**
             * Decodes a ListDirectoryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListDirectoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.ListDirectoryResponse;

            /**
             * Verifies a ListDirectoryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListDirectoryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListDirectoryResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.ListDirectoryResponse;

            /**
             * Creates a plain object from a ListDirectoryResponse message. Also converts values to other types if specified.
             * @param message ListDirectoryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.ListDirectoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListDirectoryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Permissions. */
        interface IPermissions {

            /** Permissions subject */
            subject?: (string|null);

            /** Permissions permissionNames */
            permissionNames?: (string[]|null);
        }

        /** Represents a Permissions. */
        class Permissions implements IPermissions {

            /**
             * Constructs a new Permissions.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IPermissions);

            /** Permissions subject. */
            public subject: string;

            /** Permissions permissionNames. */
            public permissionNames: string[];

            /**
             * Creates a new Permissions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Permissions instance
             */
            public static create(properties?: Ydb.Scheme.IPermissions): Ydb.Scheme.Permissions;

            /**
             * Encodes the specified Permissions message. Does not implicitly {@link Ydb.Scheme.Permissions.verify|verify} messages.
             * @param message Permissions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Permissions message, length delimited. Does not implicitly {@link Ydb.Scheme.Permissions.verify|verify} messages.
             * @param message Permissions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Permissions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Permissions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.Permissions;

            /**
             * Decodes a Permissions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Permissions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.Permissions;

            /**
             * Verifies a Permissions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Permissions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Permissions
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.Permissions;

            /**
             * Creates a plain object from a Permissions message. Also converts values to other types if specified.
             * @param message Permissions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.Permissions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Permissions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Entry. */
        interface IEntry {

            /** Entry name */
            name?: (string|null);

            /** Entry owner */
            owner?: (string|null);

            /** Entry type */
            type?: (Ydb.Scheme.Entry.Type|null);

            /** Entry effectivePermissions */
            effectivePermissions?: (Ydb.Scheme.IPermissions[]|null);

            /** Entry permissions */
            permissions?: (Ydb.Scheme.IPermissions[]|null);
        }

        /** Represents an Entry. */
        class Entry implements IEntry {

            /**
             * Constructs a new Entry.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IEntry);

            /** Entry name. */
            public name: string;

            /** Entry owner. */
            public owner: string;

            /** Entry type. */
            public type: Ydb.Scheme.Entry.Type;

            /** Entry effectivePermissions. */
            public effectivePermissions: Ydb.Scheme.IPermissions[];

            /** Entry permissions. */
            public permissions: Ydb.Scheme.IPermissions[];

            /**
             * Creates a new Entry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Entry instance
             */
            public static create(properties?: Ydb.Scheme.IEntry): Ydb.Scheme.Entry;

            /**
             * Encodes the specified Entry message. Does not implicitly {@link Ydb.Scheme.Entry.verify|verify} messages.
             * @param message Entry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Entry message, length delimited. Does not implicitly {@link Ydb.Scheme.Entry.verify|verify} messages.
             * @param message Entry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Entry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Entry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.Entry;

            /**
             * Decodes an Entry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Entry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.Entry;

            /**
             * Verifies an Entry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Entry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Entry
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.Entry;

            /**
             * Creates a plain object from an Entry message. Also converts values to other types if specified.
             * @param message Entry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Entry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Entry {

            /** Type enum. */
            enum Type {
                TYPE_UNSPECIFIED = 0,
                DIRECTORY = 1,
                TABLE = 2,
                PERS_QUEUE_GROUP = 3,
                DATABASE = 4,
                RTMR_VOLUME = 5,
                BLOCK_STORE_VOLUME = 6,
                COORDINATION_NODE = 7
            }
        }

        /** Properties of a ListDirectoryResult. */
        interface IListDirectoryResult {

            /** ListDirectoryResult self */
            self?: (Ydb.Scheme.IEntry|null);

            /** ListDirectoryResult children */
            children?: (Ydb.Scheme.IEntry[]|null);
        }

        /** Represents a ListDirectoryResult. */
        class ListDirectoryResult implements IListDirectoryResult {

            /**
             * Constructs a new ListDirectoryResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IListDirectoryResult);

            /** ListDirectoryResult self. */
            public self?: (Ydb.Scheme.IEntry|null);

            /** ListDirectoryResult children. */
            public children: Ydb.Scheme.IEntry[];

            /**
             * Creates a new ListDirectoryResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListDirectoryResult instance
             */
            public static create(properties?: Ydb.Scheme.IListDirectoryResult): Ydb.Scheme.ListDirectoryResult;

            /**
             * Encodes the specified ListDirectoryResult message. Does not implicitly {@link Ydb.Scheme.ListDirectoryResult.verify|verify} messages.
             * @param message ListDirectoryResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IListDirectoryResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListDirectoryResult message, length delimited. Does not implicitly {@link Ydb.Scheme.ListDirectoryResult.verify|verify} messages.
             * @param message ListDirectoryResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IListDirectoryResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListDirectoryResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListDirectoryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.ListDirectoryResult;

            /**
             * Decodes a ListDirectoryResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListDirectoryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.ListDirectoryResult;

            /**
             * Verifies a ListDirectoryResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListDirectoryResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListDirectoryResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.ListDirectoryResult;

            /**
             * Creates a plain object from a ListDirectoryResult message. Also converts values to other types if specified.
             * @param message ListDirectoryResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.ListDirectoryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListDirectoryResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescribePathRequest. */
        interface IDescribePathRequest {

            /** DescribePathRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** DescribePathRequest path */
            path?: (string|null);
        }

        /** Represents a DescribePathRequest. */
        class DescribePathRequest implements IDescribePathRequest {

            /**
             * Constructs a new DescribePathRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IDescribePathRequest);

            /** DescribePathRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** DescribePathRequest path. */
            public path: string;

            /**
             * Creates a new DescribePathRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescribePathRequest instance
             */
            public static create(properties?: Ydb.Scheme.IDescribePathRequest): Ydb.Scheme.DescribePathRequest;

            /**
             * Encodes the specified DescribePathRequest message. Does not implicitly {@link Ydb.Scheme.DescribePathRequest.verify|verify} messages.
             * @param message DescribePathRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IDescribePathRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescribePathRequest message, length delimited. Does not implicitly {@link Ydb.Scheme.DescribePathRequest.verify|verify} messages.
             * @param message DescribePathRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IDescribePathRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescribePathRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescribePathRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.DescribePathRequest;

            /**
             * Decodes a DescribePathRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescribePathRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.DescribePathRequest;

            /**
             * Verifies a DescribePathRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescribePathRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescribePathRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.DescribePathRequest;

            /**
             * Creates a plain object from a DescribePathRequest message. Also converts values to other types if specified.
             * @param message DescribePathRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.DescribePathRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescribePathRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescribePathResponse. */
        interface IDescribePathResponse {

            /** DescribePathResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a DescribePathResponse. */
        class DescribePathResponse implements IDescribePathResponse {

            /**
             * Constructs a new DescribePathResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IDescribePathResponse);

            /** DescribePathResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new DescribePathResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescribePathResponse instance
             */
            public static create(properties?: Ydb.Scheme.IDescribePathResponse): Ydb.Scheme.DescribePathResponse;

            /**
             * Encodes the specified DescribePathResponse message. Does not implicitly {@link Ydb.Scheme.DescribePathResponse.verify|verify} messages.
             * @param message DescribePathResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IDescribePathResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescribePathResponse message, length delimited. Does not implicitly {@link Ydb.Scheme.DescribePathResponse.verify|verify} messages.
             * @param message DescribePathResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IDescribePathResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescribePathResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescribePathResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.DescribePathResponse;

            /**
             * Decodes a DescribePathResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescribePathResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.DescribePathResponse;

            /**
             * Verifies a DescribePathResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescribePathResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescribePathResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.DescribePathResponse;

            /**
             * Creates a plain object from a DescribePathResponse message. Also converts values to other types if specified.
             * @param message DescribePathResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.DescribePathResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescribePathResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescribePathResult. */
        interface IDescribePathResult {

            /** DescribePathResult self */
            self?: (Ydb.Scheme.IEntry|null);
        }

        /** Represents a DescribePathResult. */
        class DescribePathResult implements IDescribePathResult {

            /**
             * Constructs a new DescribePathResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IDescribePathResult);

            /** DescribePathResult self. */
            public self?: (Ydb.Scheme.IEntry|null);

            /**
             * Creates a new DescribePathResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescribePathResult instance
             */
            public static create(properties?: Ydb.Scheme.IDescribePathResult): Ydb.Scheme.DescribePathResult;

            /**
             * Encodes the specified DescribePathResult message. Does not implicitly {@link Ydb.Scheme.DescribePathResult.verify|verify} messages.
             * @param message DescribePathResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IDescribePathResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescribePathResult message, length delimited. Does not implicitly {@link Ydb.Scheme.DescribePathResult.verify|verify} messages.
             * @param message DescribePathResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IDescribePathResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescribePathResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescribePathResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.DescribePathResult;

            /**
             * Decodes a DescribePathResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescribePathResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.DescribePathResult;

            /**
             * Verifies a DescribePathResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescribePathResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescribePathResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.DescribePathResult;

            /**
             * Creates a plain object from a DescribePathResult message. Also converts values to other types if specified.
             * @param message DescribePathResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.DescribePathResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescribePathResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PermissionsAction. */
        interface IPermissionsAction {

            /** PermissionsAction grant */
            grant?: (Ydb.Scheme.IPermissions|null);

            /** PermissionsAction revoke */
            revoke?: (Ydb.Scheme.IPermissions|null);

            /** PermissionsAction set */
            set?: (Ydb.Scheme.IPermissions|null);

            /** PermissionsAction changeOwner */
            changeOwner?: (string|null);
        }

        /** Represents a PermissionsAction. */
        class PermissionsAction implements IPermissionsAction {

            /**
             * Constructs a new PermissionsAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IPermissionsAction);

            /** PermissionsAction grant. */
            public grant?: (Ydb.Scheme.IPermissions|null);

            /** PermissionsAction revoke. */
            public revoke?: (Ydb.Scheme.IPermissions|null);

            /** PermissionsAction set. */
            public set?: (Ydb.Scheme.IPermissions|null);

            /** PermissionsAction changeOwner. */
            public changeOwner?: (string|null);

            /** PermissionsAction action. */
            public action?: ("grant"|"revoke"|"set"|"changeOwner");

            /**
             * Creates a new PermissionsAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PermissionsAction instance
             */
            public static create(properties?: Ydb.Scheme.IPermissionsAction): Ydb.Scheme.PermissionsAction;

            /**
             * Encodes the specified PermissionsAction message. Does not implicitly {@link Ydb.Scheme.PermissionsAction.verify|verify} messages.
             * @param message PermissionsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IPermissionsAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PermissionsAction message, length delimited. Does not implicitly {@link Ydb.Scheme.PermissionsAction.verify|verify} messages.
             * @param message PermissionsAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IPermissionsAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PermissionsAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PermissionsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.PermissionsAction;

            /**
             * Decodes a PermissionsAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PermissionsAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.PermissionsAction;

            /**
             * Verifies a PermissionsAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PermissionsAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PermissionsAction
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.PermissionsAction;

            /**
             * Creates a plain object from a PermissionsAction message. Also converts values to other types if specified.
             * @param message PermissionsAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.PermissionsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PermissionsAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ModifyPermissionsRequest. */
        interface IModifyPermissionsRequest {

            /** ModifyPermissionsRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** ModifyPermissionsRequest path */
            path?: (string|null);

            /** ModifyPermissionsRequest actions */
            actions?: (Ydb.Scheme.IPermissionsAction[]|null);

            /** ModifyPermissionsRequest clearPermissions */
            clearPermissions?: (boolean|null);
        }

        /** Represents a ModifyPermissionsRequest. */
        class ModifyPermissionsRequest implements IModifyPermissionsRequest {

            /**
             * Constructs a new ModifyPermissionsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IModifyPermissionsRequest);

            /** ModifyPermissionsRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** ModifyPermissionsRequest path. */
            public path: string;

            /** ModifyPermissionsRequest actions. */
            public actions: Ydb.Scheme.IPermissionsAction[];

            /** ModifyPermissionsRequest clearPermissions. */
            public clearPermissions: boolean;

            /**
             * Creates a new ModifyPermissionsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ModifyPermissionsRequest instance
             */
            public static create(properties?: Ydb.Scheme.IModifyPermissionsRequest): Ydb.Scheme.ModifyPermissionsRequest;

            /**
             * Encodes the specified ModifyPermissionsRequest message. Does not implicitly {@link Ydb.Scheme.ModifyPermissionsRequest.verify|verify} messages.
             * @param message ModifyPermissionsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IModifyPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ModifyPermissionsRequest message, length delimited. Does not implicitly {@link Ydb.Scheme.ModifyPermissionsRequest.verify|verify} messages.
             * @param message ModifyPermissionsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IModifyPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ModifyPermissionsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ModifyPermissionsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.ModifyPermissionsRequest;

            /**
             * Decodes a ModifyPermissionsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ModifyPermissionsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.ModifyPermissionsRequest;

            /**
             * Verifies a ModifyPermissionsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ModifyPermissionsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ModifyPermissionsRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.ModifyPermissionsRequest;

            /**
             * Creates a plain object from a ModifyPermissionsRequest message. Also converts values to other types if specified.
             * @param message ModifyPermissionsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.ModifyPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ModifyPermissionsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ModifyPermissionsResponse. */
        interface IModifyPermissionsResponse {

            /** ModifyPermissionsResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a ModifyPermissionsResponse. */
        class ModifyPermissionsResponse implements IModifyPermissionsResponse {

            /**
             * Constructs a new ModifyPermissionsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scheme.IModifyPermissionsResponse);

            /** ModifyPermissionsResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new ModifyPermissionsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ModifyPermissionsResponse instance
             */
            public static create(properties?: Ydb.Scheme.IModifyPermissionsResponse): Ydb.Scheme.ModifyPermissionsResponse;

            /**
             * Encodes the specified ModifyPermissionsResponse message. Does not implicitly {@link Ydb.Scheme.ModifyPermissionsResponse.verify|verify} messages.
             * @param message ModifyPermissionsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scheme.IModifyPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ModifyPermissionsResponse message, length delimited. Does not implicitly {@link Ydb.Scheme.ModifyPermissionsResponse.verify|verify} messages.
             * @param message ModifyPermissionsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scheme.IModifyPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ModifyPermissionsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ModifyPermissionsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scheme.ModifyPermissionsResponse;

            /**
             * Decodes a ModifyPermissionsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ModifyPermissionsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scheme.ModifyPermissionsResponse;

            /**
             * Verifies a ModifyPermissionsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ModifyPermissionsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ModifyPermissionsResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scheme.ModifyPermissionsResponse;

            /**
             * Creates a plain object from a ModifyPermissionsResponse message. Also converts values to other types if specified.
             * @param message ModifyPermissionsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scheme.ModifyPermissionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ModifyPermissionsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace Scripting. */
    namespace Scripting {

        /** Namespace V1. */
        namespace V1 {

            /** Represents a ScriptingService */
            class ScriptingService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new ScriptingService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new ScriptingService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ScriptingService;

                /**
                 * Calls ExecuteYql.
                 * @param request ExecuteYqlRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ExecuteYqlResponse
                 */
                public executeYql(request: Ydb.Scripting.IExecuteYqlRequest, callback: Ydb.Scripting.V1.ScriptingService.ExecuteYqlCallback): void;

                /**
                 * Calls ExecuteYql.
                 * @param request ExecuteYqlRequest message or plain object
                 * @returns Promise
                 */
                public executeYql(request: Ydb.Scripting.IExecuteYqlRequest): Promise<Ydb.Scripting.ExecuteYqlResponse>;

                /**
                 * Calls StreamExecuteYql.
                 * @param request ExecuteYqlRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ExecuteYqlPartialResponse
                 */
                public streamExecuteYql(request: Ydb.Scripting.IExecuteYqlRequest, callback: Ydb.Scripting.V1.ScriptingService.StreamExecuteYqlCallback): void;

                /**
                 * Calls StreamExecuteYql.
                 * @param request ExecuteYqlRequest message or plain object
                 * @returns Promise
                 */
                public streamExecuteYql(request: Ydb.Scripting.IExecuteYqlRequest): Promise<Ydb.Scripting.ExecuteYqlPartialResponse>;

                /**
                 * Calls ExplainYql.
                 * @param request ExplainYqlRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ExplainYqlResponse
                 */
                public explainYql(request: Ydb.Scripting.IExplainYqlRequest, callback: Ydb.Scripting.V1.ScriptingService.ExplainYqlCallback): void;

                /**
                 * Calls ExplainYql.
                 * @param request ExplainYqlRequest message or plain object
                 * @returns Promise
                 */
                public explainYql(request: Ydb.Scripting.IExplainYqlRequest): Promise<Ydb.Scripting.ExplainYqlResponse>;
            }

            namespace ScriptingService {

                /**
                 * Callback as used by {@link Ydb.Scripting.V1.ScriptingService#executeYql}.
                 * @param error Error, if any
                 * @param [response] ExecuteYqlResponse
                 */
                type ExecuteYqlCallback = (error: (Error|null), response?: Ydb.Scripting.ExecuteYqlResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Scripting.V1.ScriptingService#streamExecuteYql}.
                 * @param error Error, if any
                 * @param [response] ExecuteYqlPartialResponse
                 */
                type StreamExecuteYqlCallback = (error: (Error|null), response?: Ydb.Scripting.ExecuteYqlPartialResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Scripting.V1.ScriptingService#explainYql}.
                 * @param error Error, if any
                 * @param [response] ExplainYqlResponse
                 */
                type ExplainYqlCallback = (error: (Error|null), response?: Ydb.Scripting.ExplainYqlResponse) => void;
            }
        }

        /** Properties of an ExecuteYqlRequest. */
        interface IExecuteYqlRequest {

            /** ExecuteYqlRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** ExecuteYqlRequest script */
            script?: (string|null);

            /** ExecuteYqlRequest parameters */
            parameters?: ({ [k: string]: Ydb.ITypedValue }|null);

            /** ExecuteYqlRequest collectStats */
            collectStats?: (Ydb.Table.QueryStatsCollection.Mode|null);
        }

        /** Represents an ExecuteYqlRequest. */
        class ExecuteYqlRequest implements IExecuteYqlRequest {

            /**
             * Constructs a new ExecuteYqlRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scripting.IExecuteYqlRequest);

            /** ExecuteYqlRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** ExecuteYqlRequest script. */
            public script: string;

            /** ExecuteYqlRequest parameters. */
            public parameters: { [k: string]: Ydb.ITypedValue };

            /** ExecuteYqlRequest collectStats. */
            public collectStats: Ydb.Table.QueryStatsCollection.Mode;

            /**
             * Creates a new ExecuteYqlRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteYqlRequest instance
             */
            public static create(properties?: Ydb.Scripting.IExecuteYqlRequest): Ydb.Scripting.ExecuteYqlRequest;

            /**
             * Encodes the specified ExecuteYqlRequest message. Does not implicitly {@link Ydb.Scripting.ExecuteYqlRequest.verify|verify} messages.
             * @param message ExecuteYqlRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scripting.IExecuteYqlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteYqlRequest message, length delimited. Does not implicitly {@link Ydb.Scripting.ExecuteYqlRequest.verify|verify} messages.
             * @param message ExecuteYqlRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scripting.IExecuteYqlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteYqlRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteYqlRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scripting.ExecuteYqlRequest;

            /**
             * Decodes an ExecuteYqlRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteYqlRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scripting.ExecuteYqlRequest;

            /**
             * Verifies an ExecuteYqlRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteYqlRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteYqlRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scripting.ExecuteYqlRequest;

            /**
             * Creates a plain object from an ExecuteYqlRequest message. Also converts values to other types if specified.
             * @param message ExecuteYqlRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scripting.ExecuteYqlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteYqlRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecuteYqlResponse. */
        interface IExecuteYqlResponse {

            /** ExecuteYqlResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents an ExecuteYqlResponse. */
        class ExecuteYqlResponse implements IExecuteYqlResponse {

            /**
             * Constructs a new ExecuteYqlResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scripting.IExecuteYqlResponse);

            /** ExecuteYqlResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new ExecuteYqlResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteYqlResponse instance
             */
            public static create(properties?: Ydb.Scripting.IExecuteYqlResponse): Ydb.Scripting.ExecuteYqlResponse;

            /**
             * Encodes the specified ExecuteYqlResponse message. Does not implicitly {@link Ydb.Scripting.ExecuteYqlResponse.verify|verify} messages.
             * @param message ExecuteYqlResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scripting.IExecuteYqlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteYqlResponse message, length delimited. Does not implicitly {@link Ydb.Scripting.ExecuteYqlResponse.verify|verify} messages.
             * @param message ExecuteYqlResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scripting.IExecuteYqlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteYqlResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteYqlResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scripting.ExecuteYqlResponse;

            /**
             * Decodes an ExecuteYqlResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteYqlResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scripting.ExecuteYqlResponse;

            /**
             * Verifies an ExecuteYqlResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteYqlResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteYqlResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scripting.ExecuteYqlResponse;

            /**
             * Creates a plain object from an ExecuteYqlResponse message. Also converts values to other types if specified.
             * @param message ExecuteYqlResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scripting.ExecuteYqlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteYqlResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecuteYqlResult. */
        interface IExecuteYqlResult {

            /** ExecuteYqlResult resultSets */
            resultSets?: (Ydb.IResultSet[]|null);

            /** ExecuteYqlResult queryStats */
            queryStats?: (Ydb.TableStats.IQueryStats|null);
        }

        /** Represents an ExecuteYqlResult. */
        class ExecuteYqlResult implements IExecuteYqlResult {

            /**
             * Constructs a new ExecuteYqlResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scripting.IExecuteYqlResult);

            /** ExecuteYqlResult resultSets. */
            public resultSets: Ydb.IResultSet[];

            /** ExecuteYqlResult queryStats. */
            public queryStats?: (Ydb.TableStats.IQueryStats|null);

            /**
             * Creates a new ExecuteYqlResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteYqlResult instance
             */
            public static create(properties?: Ydb.Scripting.IExecuteYqlResult): Ydb.Scripting.ExecuteYqlResult;

            /**
             * Encodes the specified ExecuteYqlResult message. Does not implicitly {@link Ydb.Scripting.ExecuteYqlResult.verify|verify} messages.
             * @param message ExecuteYqlResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scripting.IExecuteYqlResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteYqlResult message, length delimited. Does not implicitly {@link Ydb.Scripting.ExecuteYqlResult.verify|verify} messages.
             * @param message ExecuteYqlResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scripting.IExecuteYqlResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteYqlResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteYqlResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scripting.ExecuteYqlResult;

            /**
             * Decodes an ExecuteYqlResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteYqlResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scripting.ExecuteYqlResult;

            /**
             * Verifies an ExecuteYqlResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteYqlResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteYqlResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scripting.ExecuteYqlResult;

            /**
             * Creates a plain object from an ExecuteYqlResult message. Also converts values to other types if specified.
             * @param message ExecuteYqlResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scripting.ExecuteYqlResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteYqlResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecuteYqlPartialResponse. */
        interface IExecuteYqlPartialResponse {

            /** ExecuteYqlPartialResponse status */
            status?: (Ydb.StatusIds.StatusCode|null);

            /** ExecuteYqlPartialResponse issues */
            issues?: (Ydb.Issue.IIssueMessage[]|null);

            /** ExecuteYqlPartialResponse result */
            result?: (Ydb.Scripting.IExecuteYqlPartialResult|null);
        }

        /** Represents an ExecuteYqlPartialResponse. */
        class ExecuteYqlPartialResponse implements IExecuteYqlPartialResponse {

            /**
             * Constructs a new ExecuteYqlPartialResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scripting.IExecuteYqlPartialResponse);

            /** ExecuteYqlPartialResponse status. */
            public status: Ydb.StatusIds.StatusCode;

            /** ExecuteYqlPartialResponse issues. */
            public issues: Ydb.Issue.IIssueMessage[];

            /** ExecuteYqlPartialResponse result. */
            public result?: (Ydb.Scripting.IExecuteYqlPartialResult|null);

            /**
             * Creates a new ExecuteYqlPartialResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteYqlPartialResponse instance
             */
            public static create(properties?: Ydb.Scripting.IExecuteYqlPartialResponse): Ydb.Scripting.ExecuteYqlPartialResponse;

            /**
             * Encodes the specified ExecuteYqlPartialResponse message. Does not implicitly {@link Ydb.Scripting.ExecuteYqlPartialResponse.verify|verify} messages.
             * @param message ExecuteYqlPartialResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scripting.IExecuteYqlPartialResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteYqlPartialResponse message, length delimited. Does not implicitly {@link Ydb.Scripting.ExecuteYqlPartialResponse.verify|verify} messages.
             * @param message ExecuteYqlPartialResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scripting.IExecuteYqlPartialResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteYqlPartialResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteYqlPartialResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scripting.ExecuteYqlPartialResponse;

            /**
             * Decodes an ExecuteYqlPartialResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteYqlPartialResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scripting.ExecuteYqlPartialResponse;

            /**
             * Verifies an ExecuteYqlPartialResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteYqlPartialResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteYqlPartialResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scripting.ExecuteYqlPartialResponse;

            /**
             * Creates a plain object from an ExecuteYqlPartialResponse message. Also converts values to other types if specified.
             * @param message ExecuteYqlPartialResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scripting.ExecuteYqlPartialResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteYqlPartialResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExecuteYqlPartialResult. */
        interface IExecuteYqlPartialResult {

            /** ExecuteYqlPartialResult resultSetIndex */
            resultSetIndex?: (number|null);

            /** ExecuteYqlPartialResult resultSet */
            resultSet?: (Ydb.IResultSet|null);

            /** ExecuteYqlPartialResult queryStats */
            queryStats?: (Ydb.TableStats.IQueryStats|null);
        }

        /** Represents an ExecuteYqlPartialResult. */
        class ExecuteYqlPartialResult implements IExecuteYqlPartialResult {

            /**
             * Constructs a new ExecuteYqlPartialResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scripting.IExecuteYqlPartialResult);

            /** ExecuteYqlPartialResult resultSetIndex. */
            public resultSetIndex: number;

            /** ExecuteYqlPartialResult resultSet. */
            public resultSet?: (Ydb.IResultSet|null);

            /** ExecuteYqlPartialResult queryStats. */
            public queryStats?: (Ydb.TableStats.IQueryStats|null);

            /**
             * Creates a new ExecuteYqlPartialResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecuteYqlPartialResult instance
             */
            public static create(properties?: Ydb.Scripting.IExecuteYqlPartialResult): Ydb.Scripting.ExecuteYqlPartialResult;

            /**
             * Encodes the specified ExecuteYqlPartialResult message. Does not implicitly {@link Ydb.Scripting.ExecuteYqlPartialResult.verify|verify} messages.
             * @param message ExecuteYqlPartialResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scripting.IExecuteYqlPartialResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecuteYqlPartialResult message, length delimited. Does not implicitly {@link Ydb.Scripting.ExecuteYqlPartialResult.verify|verify} messages.
             * @param message ExecuteYqlPartialResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scripting.IExecuteYqlPartialResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecuteYqlPartialResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecuteYqlPartialResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scripting.ExecuteYqlPartialResult;

            /**
             * Decodes an ExecuteYqlPartialResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecuteYqlPartialResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scripting.ExecuteYqlPartialResult;

            /**
             * Verifies an ExecuteYqlPartialResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecuteYqlPartialResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecuteYqlPartialResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scripting.ExecuteYqlPartialResult;

            /**
             * Creates a plain object from an ExecuteYqlPartialResult message. Also converts values to other types if specified.
             * @param message ExecuteYqlPartialResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scripting.ExecuteYqlPartialResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecuteYqlPartialResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExplainYqlRequest. */
        interface IExplainYqlRequest {

            /** ExplainYqlRequest operationParams */
            operationParams?: (Ydb.Operations.IOperationParams|null);

            /** ExplainYqlRequest script */
            script?: (string|null);

            /** ExplainYqlRequest mode */
            mode?: (Ydb.Scripting.ExplainYqlRequest.Mode|null);
        }

        /** Represents an ExplainYqlRequest. */
        class ExplainYqlRequest implements IExplainYqlRequest {

            /**
             * Constructs a new ExplainYqlRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scripting.IExplainYqlRequest);

            /** ExplainYqlRequest operationParams. */
            public operationParams?: (Ydb.Operations.IOperationParams|null);

            /** ExplainYqlRequest script. */
            public script: string;

            /** ExplainYqlRequest mode. */
            public mode: Ydb.Scripting.ExplainYqlRequest.Mode;

            /**
             * Creates a new ExplainYqlRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExplainYqlRequest instance
             */
            public static create(properties?: Ydb.Scripting.IExplainYqlRequest): Ydb.Scripting.ExplainYqlRequest;

            /**
             * Encodes the specified ExplainYqlRequest message. Does not implicitly {@link Ydb.Scripting.ExplainYqlRequest.verify|verify} messages.
             * @param message ExplainYqlRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scripting.IExplainYqlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExplainYqlRequest message, length delimited. Does not implicitly {@link Ydb.Scripting.ExplainYqlRequest.verify|verify} messages.
             * @param message ExplainYqlRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scripting.IExplainYqlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExplainYqlRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExplainYqlRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scripting.ExplainYqlRequest;

            /**
             * Decodes an ExplainYqlRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExplainYqlRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scripting.ExplainYqlRequest;

            /**
             * Verifies an ExplainYqlRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExplainYqlRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExplainYqlRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scripting.ExplainYqlRequest;

            /**
             * Creates a plain object from an ExplainYqlRequest message. Also converts values to other types if specified.
             * @param message ExplainYqlRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scripting.ExplainYqlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExplainYqlRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ExplainYqlRequest {

            /** Mode enum. */
            enum Mode {
                MODE_UNSPECIFIED = 0,
                VALIDATE = 2,
                PLAN = 3
            }
        }

        /** Properties of an ExplainYqlResponse. */
        interface IExplainYqlResponse {

            /** ExplainYqlResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents an ExplainYqlResponse. */
        class ExplainYqlResponse implements IExplainYqlResponse {

            /**
             * Constructs a new ExplainYqlResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scripting.IExplainYqlResponse);

            /** ExplainYqlResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new ExplainYqlResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExplainYqlResponse instance
             */
            public static create(properties?: Ydb.Scripting.IExplainYqlResponse): Ydb.Scripting.ExplainYqlResponse;

            /**
             * Encodes the specified ExplainYqlResponse message. Does not implicitly {@link Ydb.Scripting.ExplainYqlResponse.verify|verify} messages.
             * @param message ExplainYqlResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scripting.IExplainYqlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExplainYqlResponse message, length delimited. Does not implicitly {@link Ydb.Scripting.ExplainYqlResponse.verify|verify} messages.
             * @param message ExplainYqlResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scripting.IExplainYqlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExplainYqlResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExplainYqlResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scripting.ExplainYqlResponse;

            /**
             * Decodes an ExplainYqlResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExplainYqlResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scripting.ExplainYqlResponse;

            /**
             * Verifies an ExplainYqlResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExplainYqlResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExplainYqlResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scripting.ExplainYqlResponse;

            /**
             * Creates a plain object from an ExplainYqlResponse message. Also converts values to other types if specified.
             * @param message ExplainYqlResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scripting.ExplainYqlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExplainYqlResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExplainYqlResult. */
        interface IExplainYqlResult {

            /** ExplainYqlResult parametersTypes */
            parametersTypes?: ({ [k: string]: Ydb.IType }|null);

            /** ExplainYqlResult plan */
            plan?: (string|null);
        }

        /** Represents an ExplainYqlResult. */
        class ExplainYqlResult implements IExplainYqlResult {

            /**
             * Constructs a new ExplainYqlResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Scripting.IExplainYqlResult);

            /** ExplainYqlResult parametersTypes. */
            public parametersTypes: { [k: string]: Ydb.IType };

            /** ExplainYqlResult plan. */
            public plan: string;

            /**
             * Creates a new ExplainYqlResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExplainYqlResult instance
             */
            public static create(properties?: Ydb.Scripting.IExplainYqlResult): Ydb.Scripting.ExplainYqlResult;

            /**
             * Encodes the specified ExplainYqlResult message. Does not implicitly {@link Ydb.Scripting.ExplainYqlResult.verify|verify} messages.
             * @param message ExplainYqlResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Scripting.IExplainYqlResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExplainYqlResult message, length delimited. Does not implicitly {@link Ydb.Scripting.ExplainYqlResult.verify|verify} messages.
             * @param message ExplainYqlResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Scripting.IExplainYqlResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExplainYqlResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExplainYqlResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Scripting.ExplainYqlResult;

            /**
             * Decodes an ExplainYqlResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExplainYqlResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Scripting.ExplainYqlResult;

            /**
             * Verifies an ExplainYqlResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExplainYqlResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExplainYqlResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Scripting.ExplainYqlResult;

            /**
             * Creates a plain object from an ExplainYqlResult message. Also converts values to other types if specified.
             * @param message ExplainYqlResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Scripting.ExplainYqlResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExplainYqlResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace Discovery. */
    namespace Discovery {

        /** Namespace V1. */
        namespace V1 {

            /** Represents a DiscoveryService */
            class DiscoveryService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new DiscoveryService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new DiscoveryService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DiscoveryService;

                /**
                 * Calls ListEndpoints.
                 * @param request ListEndpointsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListEndpointsResponse
                 */
                public listEndpoints(request: Ydb.Discovery.IListEndpointsRequest, callback: Ydb.Discovery.V1.DiscoveryService.ListEndpointsCallback): void;

                /**
                 * Calls ListEndpoints.
                 * @param request ListEndpointsRequest message or plain object
                 * @returns Promise
                 */
                public listEndpoints(request: Ydb.Discovery.IListEndpointsRequest): Promise<Ydb.Discovery.ListEndpointsResponse>;

                /**
                 * Calls WhoAmI.
                 * @param request WhoAmIRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and WhoAmIResponse
                 */
                public whoAmI(request: Ydb.Discovery.IWhoAmIRequest, callback: Ydb.Discovery.V1.DiscoveryService.WhoAmICallback): void;

                /**
                 * Calls WhoAmI.
                 * @param request WhoAmIRequest message or plain object
                 * @returns Promise
                 */
                public whoAmI(request: Ydb.Discovery.IWhoAmIRequest): Promise<Ydb.Discovery.WhoAmIResponse>;
            }

            namespace DiscoveryService {

                /**
                 * Callback as used by {@link Ydb.Discovery.V1.DiscoveryService#listEndpoints}.
                 * @param error Error, if any
                 * @param [response] ListEndpointsResponse
                 */
                type ListEndpointsCallback = (error: (Error|null), response?: Ydb.Discovery.ListEndpointsResponse) => void;

                /**
                 * Callback as used by {@link Ydb.Discovery.V1.DiscoveryService#whoAmI}.
                 * @param error Error, if any
                 * @param [response] WhoAmIResponse
                 */
                type WhoAmICallback = (error: (Error|null), response?: Ydb.Discovery.WhoAmIResponse) => void;
            }
        }

        /** Properties of a ListEndpointsRequest. */
        interface IListEndpointsRequest {

            /** ListEndpointsRequest database */
            database?: (string|null);

            /** ListEndpointsRequest service */
            service?: (string[]|null);
        }

        /** Represents a ListEndpointsRequest. */
        class ListEndpointsRequest implements IListEndpointsRequest {

            /**
             * Constructs a new ListEndpointsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Discovery.IListEndpointsRequest);

            /** ListEndpointsRequest database. */
            public database: string;

            /** ListEndpointsRequest service. */
            public service: string[];

            /**
             * Creates a new ListEndpointsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListEndpointsRequest instance
             */
            public static create(properties?: Ydb.Discovery.IListEndpointsRequest): Ydb.Discovery.ListEndpointsRequest;

            /**
             * Encodes the specified ListEndpointsRequest message. Does not implicitly {@link Ydb.Discovery.ListEndpointsRequest.verify|verify} messages.
             * @param message ListEndpointsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Discovery.IListEndpointsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListEndpointsRequest message, length delimited. Does not implicitly {@link Ydb.Discovery.ListEndpointsRequest.verify|verify} messages.
             * @param message ListEndpointsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Discovery.IListEndpointsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListEndpointsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListEndpointsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Discovery.ListEndpointsRequest;

            /**
             * Decodes a ListEndpointsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListEndpointsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Discovery.ListEndpointsRequest;

            /**
             * Verifies a ListEndpointsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListEndpointsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListEndpointsRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Discovery.ListEndpointsRequest;

            /**
             * Creates a plain object from a ListEndpointsRequest message. Also converts values to other types if specified.
             * @param message ListEndpointsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Discovery.ListEndpointsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListEndpointsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EndpointInfo. */
        interface IEndpointInfo {

            /** EndpointInfo address */
            address?: (string|null);

            /** EndpointInfo port */
            port?: (number|null);

            /** EndpointInfo loadFactor */
            loadFactor?: (number|null);

            /** EndpointInfo ssl */
            ssl?: (boolean|null);

            /** EndpointInfo service */
            service?: (string[]|null);

            /** EndpointInfo location */
            location?: (string|null);

            /** EndpointInfo nodeId */
            nodeId?: (number|null);
        }

        /** Represents an EndpointInfo. */
        class EndpointInfo implements IEndpointInfo {

            /**
             * Constructs a new EndpointInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Discovery.IEndpointInfo);

            /** EndpointInfo address. */
            public address: string;

            /** EndpointInfo port. */
            public port: number;

            /** EndpointInfo loadFactor. */
            public loadFactor: number;

            /** EndpointInfo ssl. */
            public ssl: boolean;

            /** EndpointInfo service. */
            public service: string[];

            /** EndpointInfo location. */
            public location: string;

            /** EndpointInfo nodeId. */
            public nodeId: number;

            /**
             * Creates a new EndpointInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EndpointInfo instance
             */
            public static create(properties?: Ydb.Discovery.IEndpointInfo): Ydb.Discovery.EndpointInfo;

            /**
             * Encodes the specified EndpointInfo message. Does not implicitly {@link Ydb.Discovery.EndpointInfo.verify|verify} messages.
             * @param message EndpointInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Discovery.IEndpointInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EndpointInfo message, length delimited. Does not implicitly {@link Ydb.Discovery.EndpointInfo.verify|verify} messages.
             * @param message EndpointInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Discovery.IEndpointInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EndpointInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EndpointInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Discovery.EndpointInfo;

            /**
             * Decodes an EndpointInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EndpointInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Discovery.EndpointInfo;

            /**
             * Verifies an EndpointInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EndpointInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EndpointInfo
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Discovery.EndpointInfo;

            /**
             * Creates a plain object from an EndpointInfo message. Also converts values to other types if specified.
             * @param message EndpointInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Discovery.EndpointInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EndpointInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListEndpointsResult. */
        interface IListEndpointsResult {

            /** ListEndpointsResult endpoints */
            endpoints?: (Ydb.Discovery.IEndpointInfo[]|null);

            /** ListEndpointsResult selfLocation */
            selfLocation?: (string|null);
        }

        /** Represents a ListEndpointsResult. */
        class ListEndpointsResult implements IListEndpointsResult {

            /**
             * Constructs a new ListEndpointsResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Discovery.IListEndpointsResult);

            /** ListEndpointsResult endpoints. */
            public endpoints: Ydb.Discovery.IEndpointInfo[];

            /** ListEndpointsResult selfLocation. */
            public selfLocation: string;

            /**
             * Creates a new ListEndpointsResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListEndpointsResult instance
             */
            public static create(properties?: Ydb.Discovery.IListEndpointsResult): Ydb.Discovery.ListEndpointsResult;

            /**
             * Encodes the specified ListEndpointsResult message. Does not implicitly {@link Ydb.Discovery.ListEndpointsResult.verify|verify} messages.
             * @param message ListEndpointsResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Discovery.IListEndpointsResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListEndpointsResult message, length delimited. Does not implicitly {@link Ydb.Discovery.ListEndpointsResult.verify|verify} messages.
             * @param message ListEndpointsResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Discovery.IListEndpointsResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListEndpointsResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListEndpointsResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Discovery.ListEndpointsResult;

            /**
             * Decodes a ListEndpointsResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListEndpointsResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Discovery.ListEndpointsResult;

            /**
             * Verifies a ListEndpointsResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListEndpointsResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListEndpointsResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Discovery.ListEndpointsResult;

            /**
             * Creates a plain object from a ListEndpointsResult message. Also converts values to other types if specified.
             * @param message ListEndpointsResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Discovery.ListEndpointsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListEndpointsResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListEndpointsResponse. */
        interface IListEndpointsResponse {

            /** ListEndpointsResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a ListEndpointsResponse. */
        class ListEndpointsResponse implements IListEndpointsResponse {

            /**
             * Constructs a new ListEndpointsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Discovery.IListEndpointsResponse);

            /** ListEndpointsResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new ListEndpointsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListEndpointsResponse instance
             */
            public static create(properties?: Ydb.Discovery.IListEndpointsResponse): Ydb.Discovery.ListEndpointsResponse;

            /**
             * Encodes the specified ListEndpointsResponse message. Does not implicitly {@link Ydb.Discovery.ListEndpointsResponse.verify|verify} messages.
             * @param message ListEndpointsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Discovery.IListEndpointsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListEndpointsResponse message, length delimited. Does not implicitly {@link Ydb.Discovery.ListEndpointsResponse.verify|verify} messages.
             * @param message ListEndpointsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Discovery.IListEndpointsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListEndpointsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListEndpointsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Discovery.ListEndpointsResponse;

            /**
             * Decodes a ListEndpointsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListEndpointsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Discovery.ListEndpointsResponse;

            /**
             * Verifies a ListEndpointsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListEndpointsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListEndpointsResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Discovery.ListEndpointsResponse;

            /**
             * Creates a plain object from a ListEndpointsResponse message. Also converts values to other types if specified.
             * @param message ListEndpointsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Discovery.ListEndpointsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListEndpointsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WhoAmIRequest. */
        interface IWhoAmIRequest {

            /** WhoAmIRequest includeGroups */
            includeGroups?: (boolean|null);
        }

        /** Represents a WhoAmIRequest. */
        class WhoAmIRequest implements IWhoAmIRequest {

            /**
             * Constructs a new WhoAmIRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Discovery.IWhoAmIRequest);

            /** WhoAmIRequest includeGroups. */
            public includeGroups: boolean;

            /**
             * Creates a new WhoAmIRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WhoAmIRequest instance
             */
            public static create(properties?: Ydb.Discovery.IWhoAmIRequest): Ydb.Discovery.WhoAmIRequest;

            /**
             * Encodes the specified WhoAmIRequest message. Does not implicitly {@link Ydb.Discovery.WhoAmIRequest.verify|verify} messages.
             * @param message WhoAmIRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Discovery.IWhoAmIRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WhoAmIRequest message, length delimited. Does not implicitly {@link Ydb.Discovery.WhoAmIRequest.verify|verify} messages.
             * @param message WhoAmIRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Discovery.IWhoAmIRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WhoAmIRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WhoAmIRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Discovery.WhoAmIRequest;

            /**
             * Decodes a WhoAmIRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WhoAmIRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Discovery.WhoAmIRequest;

            /**
             * Verifies a WhoAmIRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WhoAmIRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WhoAmIRequest
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Discovery.WhoAmIRequest;

            /**
             * Creates a plain object from a WhoAmIRequest message. Also converts values to other types if specified.
             * @param message WhoAmIRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Discovery.WhoAmIRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WhoAmIRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WhoAmIResult. */
        interface IWhoAmIResult {

            /** WhoAmIResult user */
            user?: (string|null);

            /** WhoAmIResult groups */
            groups?: (string[]|null);
        }

        /** Represents a WhoAmIResult. */
        class WhoAmIResult implements IWhoAmIResult {

            /**
             * Constructs a new WhoAmIResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Discovery.IWhoAmIResult);

            /** WhoAmIResult user. */
            public user: string;

            /** WhoAmIResult groups. */
            public groups: string[];

            /**
             * Creates a new WhoAmIResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WhoAmIResult instance
             */
            public static create(properties?: Ydb.Discovery.IWhoAmIResult): Ydb.Discovery.WhoAmIResult;

            /**
             * Encodes the specified WhoAmIResult message. Does not implicitly {@link Ydb.Discovery.WhoAmIResult.verify|verify} messages.
             * @param message WhoAmIResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Discovery.IWhoAmIResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WhoAmIResult message, length delimited. Does not implicitly {@link Ydb.Discovery.WhoAmIResult.verify|verify} messages.
             * @param message WhoAmIResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Discovery.IWhoAmIResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WhoAmIResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WhoAmIResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Discovery.WhoAmIResult;

            /**
             * Decodes a WhoAmIResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WhoAmIResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Discovery.WhoAmIResult;

            /**
             * Verifies a WhoAmIResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WhoAmIResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WhoAmIResult
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Discovery.WhoAmIResult;

            /**
             * Creates a plain object from a WhoAmIResult message. Also converts values to other types if specified.
             * @param message WhoAmIResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Discovery.WhoAmIResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WhoAmIResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WhoAmIResponse. */
        interface IWhoAmIResponse {

            /** WhoAmIResponse operation */
            operation?: (Ydb.Operations.IOperation|null);
        }

        /** Represents a WhoAmIResponse. */
        class WhoAmIResponse implements IWhoAmIResponse {

            /**
             * Constructs a new WhoAmIResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Ydb.Discovery.IWhoAmIResponse);

            /** WhoAmIResponse operation. */
            public operation?: (Ydb.Operations.IOperation|null);

            /**
             * Creates a new WhoAmIResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WhoAmIResponse instance
             */
            public static create(properties?: Ydb.Discovery.IWhoAmIResponse): Ydb.Discovery.WhoAmIResponse;

            /**
             * Encodes the specified WhoAmIResponse message. Does not implicitly {@link Ydb.Discovery.WhoAmIResponse.verify|verify} messages.
             * @param message WhoAmIResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Ydb.Discovery.IWhoAmIResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WhoAmIResponse message, length delimited. Does not implicitly {@link Ydb.Discovery.WhoAmIResponse.verify|verify} messages.
             * @param message WhoAmIResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Ydb.Discovery.IWhoAmIResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WhoAmIResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WhoAmIResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ydb.Discovery.WhoAmIResponse;

            /**
             * Decodes a WhoAmIResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WhoAmIResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ydb.Discovery.WhoAmIResponse;

            /**
             * Verifies a WhoAmIResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WhoAmIResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WhoAmIResponse
             */
            public static fromObject(object: { [k: string]: any }): Ydb.Discovery.WhoAmIResponse;

            /**
             * Creates a plain object from a WhoAmIResponse message. Also converts values to other types if specified.
             * @param message WhoAmIResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Ydb.Discovery.WhoAmIResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WhoAmIResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .Ydb.required */
            ".Ydb.required"?: (boolean|null);

            /** FieldOptions .Ydb.size */
            ".Ydb.size"?: (Ydb.ILimit|null);

            /** FieldOptions .Ydb.length */
            ".Ydb.length"?: (Ydb.ILimit|null);

            /** FieldOptions .Ydb.mapKey */
            ".Ydb.mapKey"?: (Ydb.IMapKey|null);

            /** FieldOptions .Ydb.value */
            ".Ydb.value"?: (string|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
