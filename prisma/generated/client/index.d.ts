
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model invite
 * 
 */
export type invite = $Result.DefaultSelection<Prisma.$invitePayload>
/**
 * Model mentor
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type mentor = $Result.DefaultSelection<Prisma.$mentorPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model value
 * 
 */
export type value = $Result.DefaultSelection<Prisma.$valuePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Invites
 * const invites = await prisma.invite.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Invites
   * const invites = await prisma.invite.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.invite`: Exposes CRUD operations for the **invite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invites
    * const invites = await prisma.invite.findMany()
    * ```
    */
  get invite(): Prisma.inviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentor`: Exposes CRUD operations for the **mentor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mentors
    * const mentors = await prisma.mentor.findMany()
    * ```
    */
  get mentor(): Prisma.mentorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.value`: Exposes CRUD operations for the **value** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Values
    * const values = await prisma.value.findMany()
    * ```
    */
  get value(): Prisma.valueDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    invite: 'invite',
    mentor: 'mentor',
    project: 'project',
    value: 'value'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "invite" | "mentor" | "project" | "value"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      invite: {
        payload: Prisma.$invitePayload<ExtArgs>
        fields: Prisma.inviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitePayload>
          }
          findFirst: {
            args: Prisma.inviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitePayload>
          }
          findMany: {
            args: Prisma.inviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitePayload>[]
          }
          create: {
            args: Prisma.inviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitePayload>
          }
          createMany: {
            args: Prisma.inviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitePayload>[]
          }
          delete: {
            args: Prisma.inviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitePayload>
          }
          update: {
            args: Prisma.inviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitePayload>
          }
          deleteMany: {
            args: Prisma.inviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitePayload>[]
          }
          upsert: {
            args: Prisma.inviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitePayload>
          }
          aggregate: {
            args: Prisma.InviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvite>
          }
          groupBy: {
            args: Prisma.inviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<InviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.inviteCountArgs<ExtArgs>
            result: $Utils.Optional<InviteCountAggregateOutputType> | number
          }
        }
      }
      mentor: {
        payload: Prisma.$mentorPayload<ExtArgs>
        fields: Prisma.mentorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mentorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mentorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          findFirst: {
            args: Prisma.mentorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mentorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          findMany: {
            args: Prisma.mentorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>[]
          }
          create: {
            args: Prisma.mentorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          createMany: {
            args: Prisma.mentorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mentorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>[]
          }
          delete: {
            args: Prisma.mentorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          update: {
            args: Prisma.mentorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          deleteMany: {
            args: Prisma.mentorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mentorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mentorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>[]
          }
          upsert: {
            args: Prisma.mentorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          aggregate: {
            args: Prisma.MentorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentor>
          }
          groupBy: {
            args: Prisma.mentorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorGroupByOutputType>[]
          }
          count: {
            args: Prisma.mentorCountArgs<ExtArgs>
            result: $Utils.Optional<MentorCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      value: {
        payload: Prisma.$valuePayload<ExtArgs>
        fields: Prisma.valueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.valueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.valueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuePayload>
          }
          findFirst: {
            args: Prisma.valueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.valueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuePayload>
          }
          findMany: {
            args: Prisma.valueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuePayload>[]
          }
          create: {
            args: Prisma.valueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuePayload>
          }
          createMany: {
            args: Prisma.valueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.valueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuePayload>[]
          }
          delete: {
            args: Prisma.valueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuePayload>
          }
          update: {
            args: Prisma.valueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuePayload>
          }
          deleteMany: {
            args: Prisma.valueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.valueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.valueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuePayload>[]
          }
          upsert: {
            args: Prisma.valueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valuePayload>
          }
          aggregate: {
            args: Prisma.ValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValue>
          }
          groupBy: {
            args: Prisma.valueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.valueCountArgs<ExtArgs>
            result: $Utils.Optional<ValueCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    invite?: inviteOmit
    mentor?: mentorOmit
    project?: projectOmit
    value?: valueOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model invite
   */

  export type AggregateInvite = {
    _count: InviteCountAggregateOutputType | null
    _avg: InviteAvgAggregateOutputType | null
    _sum: InviteSumAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  export type InviteAvgAggregateOutputType = {
    id: number | null
    projectid: number | null
    mentorid: number | null
  }

  export type InviteSumAggregateOutputType = {
    id: number | null
    projectid: number | null
    mentorid: number | null
  }

  export type InviteMinAggregateOutputType = {
    id: number | null
    projectid: number | null
    mentorid: number | null
    status: string | null
    message: string | null
    createdat: Date | null
    updatedat: Date | null
    response_message: string | null
  }

  export type InviteMaxAggregateOutputType = {
    id: number | null
    projectid: number | null
    mentorid: number | null
    status: string | null
    message: string | null
    createdat: Date | null
    updatedat: Date | null
    response_message: string | null
  }

  export type InviteCountAggregateOutputType = {
    id: number
    projectid: number
    mentorid: number
    status: number
    message: number
    createdat: number
    updatedat: number
    response_message: number
    _all: number
  }


  export type InviteAvgAggregateInputType = {
    id?: true
    projectid?: true
    mentorid?: true
  }

  export type InviteSumAggregateInputType = {
    id?: true
    projectid?: true
    mentorid?: true
  }

  export type InviteMinAggregateInputType = {
    id?: true
    projectid?: true
    mentorid?: true
    status?: true
    message?: true
    createdat?: true
    updatedat?: true
    response_message?: true
  }

  export type InviteMaxAggregateInputType = {
    id?: true
    projectid?: true
    mentorid?: true
    status?: true
    message?: true
    createdat?: true
    updatedat?: true
    response_message?: true
  }

  export type InviteCountAggregateInputType = {
    id?: true
    projectid?: true
    mentorid?: true
    status?: true
    message?: true
    createdat?: true
    updatedat?: true
    response_message?: true
    _all?: true
  }

  export type InviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invite to aggregate.
     */
    where?: inviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invites to fetch.
     */
    orderBy?: inviteOrderByWithRelationInput | inviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invites
    **/
    _count?: true | InviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InviteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InviteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteMaxAggregateInputType
  }

  export type GetInviteAggregateType<T extends InviteAggregateArgs> = {
        [P in keyof T & keyof AggregateInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvite[P]>
      : GetScalarType<T[P], AggregateInvite[P]>
  }




  export type inviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inviteWhereInput
    orderBy?: inviteOrderByWithAggregationInput | inviteOrderByWithAggregationInput[]
    by: InviteScalarFieldEnum[] | InviteScalarFieldEnum
    having?: inviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCountAggregateInputType | true
    _avg?: InviteAvgAggregateInputType
    _sum?: InviteSumAggregateInputType
    _min?: InviteMinAggregateInputType
    _max?: InviteMaxAggregateInputType
  }

  export type InviteGroupByOutputType = {
    id: number
    projectid: number
    mentorid: number
    status: string | null
    message: string | null
    createdat: Date | null
    updatedat: Date | null
    response_message: string | null
    _count: InviteCountAggregateOutputType | null
    _avg: InviteAvgAggregateOutputType | null
    _sum: InviteSumAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  type GetInviteGroupByPayload<T extends inviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteGroupByOutputType[P]>
            : GetScalarType<T[P], InviteGroupByOutputType[P]>
        }
      >
    >


  export type inviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectid?: boolean
    mentorid?: boolean
    status?: boolean
    message?: boolean
    createdat?: boolean
    updatedat?: boolean
    response_message?: boolean
  }, ExtArgs["result"]["invite"]>

  export type inviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectid?: boolean
    mentorid?: boolean
    status?: boolean
    message?: boolean
    createdat?: boolean
    updatedat?: boolean
    response_message?: boolean
  }, ExtArgs["result"]["invite"]>

  export type inviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectid?: boolean
    mentorid?: boolean
    status?: boolean
    message?: boolean
    createdat?: boolean
    updatedat?: boolean
    response_message?: boolean
  }, ExtArgs["result"]["invite"]>

  export type inviteSelectScalar = {
    id?: boolean
    projectid?: boolean
    mentorid?: boolean
    status?: boolean
    message?: boolean
    createdat?: boolean
    updatedat?: boolean
    response_message?: boolean
  }

  export type inviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectid" | "mentorid" | "status" | "message" | "createdat" | "updatedat" | "response_message", ExtArgs["result"]["invite"]>

  export type $invitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invite"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectid: number
      mentorid: number
      status: string | null
      message: string | null
      createdat: Date | null
      updatedat: Date | null
      response_message: string | null
    }, ExtArgs["result"]["invite"]>
    composites: {}
  }

  type inviteGetPayload<S extends boolean | null | undefined | inviteDefaultArgs> = $Result.GetResult<Prisma.$invitePayload, S>

  type inviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InviteCountAggregateInputType | true
    }

  export interface inviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invite'], meta: { name: 'invite' } }
    /**
     * Find zero or one Invite that matches the filter.
     * @param {inviteFindUniqueArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inviteFindUniqueArgs>(args: SelectSubset<T, inviteFindUniqueArgs<ExtArgs>>): Prisma__inviteClient<$Result.GetResult<Prisma.$invitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inviteFindUniqueOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inviteFindUniqueOrThrowArgs>(args: SelectSubset<T, inviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inviteClient<$Result.GetResult<Prisma.$invitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inviteFindFirstArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inviteFindFirstArgs>(args?: SelectSubset<T, inviteFindFirstArgs<ExtArgs>>): Prisma__inviteClient<$Result.GetResult<Prisma.$invitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inviteFindFirstOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inviteFindFirstOrThrowArgs>(args?: SelectSubset<T, inviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__inviteClient<$Result.GetResult<Prisma.$invitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invite.findMany()
     * 
     * // Get first 10 Invites
     * const invites = await prisma.invite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inviteWithIdOnly = await prisma.invite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inviteFindManyArgs>(args?: SelectSubset<T, inviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invite.
     * @param {inviteCreateArgs} args - Arguments to create a Invite.
     * @example
     * // Create one Invite
     * const Invite = await prisma.invite.create({
     *   data: {
     *     // ... data to create a Invite
     *   }
     * })
     * 
     */
    create<T extends inviteCreateArgs>(args: SelectSubset<T, inviteCreateArgs<ExtArgs>>): Prisma__inviteClient<$Result.GetResult<Prisma.$invitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invites.
     * @param {inviteCreateManyArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invite = await prisma.invite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inviteCreateManyArgs>(args?: SelectSubset<T, inviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invites and returns the data saved in the database.
     * @param {inviteCreateManyAndReturnArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invite = await prisma.invite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invites and only return the `id`
     * const inviteWithIdOnly = await prisma.invite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inviteCreateManyAndReturnArgs>(args?: SelectSubset<T, inviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invite.
     * @param {inviteDeleteArgs} args - Arguments to delete one Invite.
     * @example
     * // Delete one Invite
     * const Invite = await prisma.invite.delete({
     *   where: {
     *     // ... filter to delete one Invite
     *   }
     * })
     * 
     */
    delete<T extends inviteDeleteArgs>(args: SelectSubset<T, inviteDeleteArgs<ExtArgs>>): Prisma__inviteClient<$Result.GetResult<Prisma.$invitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invite.
     * @param {inviteUpdateArgs} args - Arguments to update one Invite.
     * @example
     * // Update one Invite
     * const invite = await prisma.invite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inviteUpdateArgs>(args: SelectSubset<T, inviteUpdateArgs<ExtArgs>>): Prisma__inviteClient<$Result.GetResult<Prisma.$invitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invites.
     * @param {inviteDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inviteDeleteManyArgs>(args?: SelectSubset<T, inviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inviteUpdateManyArgs>(args: SelectSubset<T, inviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites and returns the data updated in the database.
     * @param {inviteUpdateManyAndReturnArgs} args - Arguments to update many Invites.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invites and only return the `id`
     * const inviteWithIdOnly = await prisma.invite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inviteUpdateManyAndReturnArgs>(args: SelectSubset<T, inviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invite.
     * @param {inviteUpsertArgs} args - Arguments to update or create a Invite.
     * @example
     * // Update or create a Invite
     * const invite = await prisma.invite.upsert({
     *   create: {
     *     // ... data to create a Invite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invite we want to update
     *   }
     * })
     */
    upsert<T extends inviteUpsertArgs>(args: SelectSubset<T, inviteUpsertArgs<ExtArgs>>): Prisma__inviteClient<$Result.GetResult<Prisma.$invitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inviteCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invite.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
    **/
    count<T extends inviteCountArgs>(
      args?: Subset<T, inviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InviteAggregateArgs>(args: Subset<T, InviteAggregateArgs>): Prisma.PrismaPromise<GetInviteAggregateType<T>>

    /**
     * Group by Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inviteGroupByArgs['orderBy'] }
        : { orderBy?: inviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invite model
   */
  readonly fields: inviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invite model
   */
  interface inviteFieldRefs {
    readonly id: FieldRef<"invite", 'Int'>
    readonly projectid: FieldRef<"invite", 'Int'>
    readonly mentorid: FieldRef<"invite", 'Int'>
    readonly status: FieldRef<"invite", 'String'>
    readonly message: FieldRef<"invite", 'String'>
    readonly createdat: FieldRef<"invite", 'DateTime'>
    readonly updatedat: FieldRef<"invite", 'DateTime'>
    readonly response_message: FieldRef<"invite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * invite findUnique
   */
  export type inviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
    /**
     * Filter, which invite to fetch.
     */
    where: inviteWhereUniqueInput
  }

  /**
   * invite findUniqueOrThrow
   */
  export type inviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
    /**
     * Filter, which invite to fetch.
     */
    where: inviteWhereUniqueInput
  }

  /**
   * invite findFirst
   */
  export type inviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
    /**
     * Filter, which invite to fetch.
     */
    where?: inviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invites to fetch.
     */
    orderBy?: inviteOrderByWithRelationInput | inviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invites.
     */
    cursor?: inviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * invite findFirstOrThrow
   */
  export type inviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
    /**
     * Filter, which invite to fetch.
     */
    where?: inviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invites to fetch.
     */
    orderBy?: inviteOrderByWithRelationInput | inviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invites.
     */
    cursor?: inviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * invite findMany
   */
  export type inviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
    /**
     * Filter, which invites to fetch.
     */
    where?: inviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invites to fetch.
     */
    orderBy?: inviteOrderByWithRelationInput | inviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invites.
     */
    cursor?: inviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invites.
     */
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * invite create
   */
  export type inviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
    /**
     * The data needed to create a invite.
     */
    data: XOR<inviteCreateInput, inviteUncheckedCreateInput>
  }

  /**
   * invite createMany
   */
  export type inviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invites.
     */
    data: inviteCreateManyInput | inviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invite createManyAndReturn
   */
  export type inviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
    /**
     * The data used to create many invites.
     */
    data: inviteCreateManyInput | inviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invite update
   */
  export type inviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
    /**
     * The data needed to update a invite.
     */
    data: XOR<inviteUpdateInput, inviteUncheckedUpdateInput>
    /**
     * Choose, which invite to update.
     */
    where: inviteWhereUniqueInput
  }

  /**
   * invite updateMany
   */
  export type inviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invites.
     */
    data: XOR<inviteUpdateManyMutationInput, inviteUncheckedUpdateManyInput>
    /**
     * Filter which invites to update
     */
    where?: inviteWhereInput
    /**
     * Limit how many invites to update.
     */
    limit?: number
  }

  /**
   * invite updateManyAndReturn
   */
  export type inviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
    /**
     * The data used to update invites.
     */
    data: XOR<inviteUpdateManyMutationInput, inviteUncheckedUpdateManyInput>
    /**
     * Filter which invites to update
     */
    where?: inviteWhereInput
    /**
     * Limit how many invites to update.
     */
    limit?: number
  }

  /**
   * invite upsert
   */
  export type inviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
    /**
     * The filter to search for the invite to update in case it exists.
     */
    where: inviteWhereUniqueInput
    /**
     * In case the invite found by the `where` argument doesn't exist, create a new invite with this data.
     */
    create: XOR<inviteCreateInput, inviteUncheckedCreateInput>
    /**
     * In case the invite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inviteUpdateInput, inviteUncheckedUpdateInput>
  }

  /**
   * invite delete
   */
  export type inviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
    /**
     * Filter which invite to delete.
     */
    where: inviteWhereUniqueInput
  }

  /**
   * invite deleteMany
   */
  export type inviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invites to delete
     */
    where?: inviteWhereInput
    /**
     * Limit how many invites to delete.
     */
    limit?: number
  }

  /**
   * invite without action
   */
  export type inviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invite
     */
    select?: inviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invite
     */
    omit?: inviteOmit<ExtArgs> | null
  }


  /**
   * Model mentor
   */

  export type AggregateMentor = {
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  export type MentorAvgAggregateOutputType = {
    id: number | null
  }

  export type MentorSumAggregateOutputType = {
    id: number | null
  }

  export type MentorMinAggregateOutputType = {
    id: number | null
    clerkId: string | null
    name: string | null
    email: string | null
    address: string | null
    phone: string | null
    linkedin: string | null
    ocuppation: string | null
    exp: string | null
    bio: string | null
    password: string | null
    disponibility: string | null
    weekly_availability: string | null
    hourly_rate: string | null
    admin: boolean | null
  }

  export type MentorMaxAggregateOutputType = {
    id: number | null
    clerkId: string | null
    name: string | null
    email: string | null
    address: string | null
    phone: string | null
    linkedin: string | null
    ocuppation: string | null
    exp: string | null
    bio: string | null
    password: string | null
    disponibility: string | null
    weekly_availability: string | null
    hourly_rate: string | null
    admin: boolean | null
  }

  export type MentorCountAggregateOutputType = {
    id: number
    clerkId: number
    name: number
    email: number
    address: number
    phone: number
    linkedin: number
    ocuppation: number
    exp: number
    bio: number
    password: number
    skill: number
    disponibility: number
    weekly_availability: number
    hourly_rate: number
    admin: number
    _all: number
  }


  export type MentorAvgAggregateInputType = {
    id?: true
  }

  export type MentorSumAggregateInputType = {
    id?: true
  }

  export type MentorMinAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    address?: true
    phone?: true
    linkedin?: true
    ocuppation?: true
    exp?: true
    bio?: true
    password?: true
    disponibility?: true
    weekly_availability?: true
    hourly_rate?: true
    admin?: true
  }

  export type MentorMaxAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    address?: true
    phone?: true
    linkedin?: true
    ocuppation?: true
    exp?: true
    bio?: true
    password?: true
    disponibility?: true
    weekly_availability?: true
    hourly_rate?: true
    admin?: true
  }

  export type MentorCountAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    address?: true
    phone?: true
    linkedin?: true
    ocuppation?: true
    exp?: true
    bio?: true
    password?: true
    skill?: true
    disponibility?: true
    weekly_availability?: true
    hourly_rate?: true
    admin?: true
    _all?: true
  }

  export type MentorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mentor to aggregate.
     */
    where?: mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentors to fetch.
     */
    orderBy?: mentorOrderByWithRelationInput | mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mentors
    **/
    _count?: true | MentorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorMaxAggregateInputType
  }

  export type GetMentorAggregateType<T extends MentorAggregateArgs> = {
        [P in keyof T & keyof AggregateMentor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentor[P]>
      : GetScalarType<T[P], AggregateMentor[P]>
  }




  export type mentorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mentorWhereInput
    orderBy?: mentorOrderByWithAggregationInput | mentorOrderByWithAggregationInput[]
    by: MentorScalarFieldEnum[] | MentorScalarFieldEnum
    having?: mentorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorCountAggregateInputType | true
    _avg?: MentorAvgAggregateInputType
    _sum?: MentorSumAggregateInputType
    _min?: MentorMinAggregateInputType
    _max?: MentorMaxAggregateInputType
  }

  export type MentorGroupByOutputType = {
    id: number
    clerkId: string
    name: string
    email: string | null
    address: string | null
    phone: string | null
    linkedin: string | null
    ocuppation: string | null
    exp: string | null
    bio: string | null
    password: string | null
    skill: string[]
    disponibility: string | null
    weekly_availability: string | null
    hourly_rate: string | null
    admin: boolean | null
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  type GetMentorGroupByPayload<T extends mentorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorGroupByOutputType[P]>
            : GetScalarType<T[P], MentorGroupByOutputType[P]>
        }
      >
    >


  export type mentorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    linkedin?: boolean
    ocuppation?: boolean
    exp?: boolean
    bio?: boolean
    password?: boolean
    skill?: boolean
    disponibility?: boolean
    weekly_availability?: boolean
    hourly_rate?: boolean
    admin?: boolean
  }, ExtArgs["result"]["mentor"]>

  export type mentorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    linkedin?: boolean
    ocuppation?: boolean
    exp?: boolean
    bio?: boolean
    password?: boolean
    skill?: boolean
    disponibility?: boolean
    weekly_availability?: boolean
    hourly_rate?: boolean
    admin?: boolean
  }, ExtArgs["result"]["mentor"]>

  export type mentorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    linkedin?: boolean
    ocuppation?: boolean
    exp?: boolean
    bio?: boolean
    password?: boolean
    skill?: boolean
    disponibility?: boolean
    weekly_availability?: boolean
    hourly_rate?: boolean
    admin?: boolean
  }, ExtArgs["result"]["mentor"]>

  export type mentorSelectScalar = {
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    linkedin?: boolean
    ocuppation?: boolean
    exp?: boolean
    bio?: boolean
    password?: boolean
    skill?: boolean
    disponibility?: boolean
    weekly_availability?: boolean
    hourly_rate?: boolean
    admin?: boolean
  }

  export type mentorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "name" | "email" | "address" | "phone" | "linkedin" | "ocuppation" | "exp" | "bio" | "password" | "skill" | "disponibility" | "weekly_availability" | "hourly_rate" | "admin", ExtArgs["result"]["mentor"]>

  export type $mentorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mentor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkId: string
      name: string
      email: string | null
      address: string | null
      phone: string | null
      linkedin: string | null
      ocuppation: string | null
      exp: string | null
      bio: string | null
      password: string | null
      skill: string[]
      disponibility: string | null
      weekly_availability: string | null
      hourly_rate: string | null
      admin: boolean | null
    }, ExtArgs["result"]["mentor"]>
    composites: {}
  }

  type mentorGetPayload<S extends boolean | null | undefined | mentorDefaultArgs> = $Result.GetResult<Prisma.$mentorPayload, S>

  type mentorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mentorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorCountAggregateInputType | true
    }

  export interface mentorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mentor'], meta: { name: 'mentor' } }
    /**
     * Find zero or one Mentor that matches the filter.
     * @param {mentorFindUniqueArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mentorFindUniqueArgs>(args: SelectSubset<T, mentorFindUniqueArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mentor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mentorFindUniqueOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mentorFindUniqueOrThrowArgs>(args: SelectSubset<T, mentorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorFindFirstArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mentorFindFirstArgs>(args?: SelectSubset<T, mentorFindFirstArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorFindFirstOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mentorFindFirstOrThrowArgs>(args?: SelectSubset<T, mentorFindFirstOrThrowArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mentors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mentors
     * const mentors = await prisma.mentor.findMany()
     * 
     * // Get first 10 Mentors
     * const mentors = await prisma.mentor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorWithIdOnly = await prisma.mentor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mentorFindManyArgs>(args?: SelectSubset<T, mentorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mentor.
     * @param {mentorCreateArgs} args - Arguments to create a Mentor.
     * @example
     * // Create one Mentor
     * const Mentor = await prisma.mentor.create({
     *   data: {
     *     // ... data to create a Mentor
     *   }
     * })
     * 
     */
    create<T extends mentorCreateArgs>(args: SelectSubset<T, mentorCreateArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mentors.
     * @param {mentorCreateManyArgs} args - Arguments to create many Mentors.
     * @example
     * // Create many Mentors
     * const mentor = await prisma.mentor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mentorCreateManyArgs>(args?: SelectSubset<T, mentorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mentors and returns the data saved in the database.
     * @param {mentorCreateManyAndReturnArgs} args - Arguments to create many Mentors.
     * @example
     * // Create many Mentors
     * const mentor = await prisma.mentor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mentors and only return the `id`
     * const mentorWithIdOnly = await prisma.mentor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mentorCreateManyAndReturnArgs>(args?: SelectSubset<T, mentorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mentor.
     * @param {mentorDeleteArgs} args - Arguments to delete one Mentor.
     * @example
     * // Delete one Mentor
     * const Mentor = await prisma.mentor.delete({
     *   where: {
     *     // ... filter to delete one Mentor
     *   }
     * })
     * 
     */
    delete<T extends mentorDeleteArgs>(args: SelectSubset<T, mentorDeleteArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mentor.
     * @param {mentorUpdateArgs} args - Arguments to update one Mentor.
     * @example
     * // Update one Mentor
     * const mentor = await prisma.mentor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mentorUpdateArgs>(args: SelectSubset<T, mentorUpdateArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mentors.
     * @param {mentorDeleteManyArgs} args - Arguments to filter Mentors to delete.
     * @example
     * // Delete a few Mentors
     * const { count } = await prisma.mentor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mentorDeleteManyArgs>(args?: SelectSubset<T, mentorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mentors
     * const mentor = await prisma.mentor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mentorUpdateManyArgs>(args: SelectSubset<T, mentorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentors and returns the data updated in the database.
     * @param {mentorUpdateManyAndReturnArgs} args - Arguments to update many Mentors.
     * @example
     * // Update many Mentors
     * const mentor = await prisma.mentor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mentors and only return the `id`
     * const mentorWithIdOnly = await prisma.mentor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mentorUpdateManyAndReturnArgs>(args: SelectSubset<T, mentorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mentor.
     * @param {mentorUpsertArgs} args - Arguments to update or create a Mentor.
     * @example
     * // Update or create a Mentor
     * const mentor = await prisma.mentor.upsert({
     *   create: {
     *     // ... data to create a Mentor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mentor we want to update
     *   }
     * })
     */
    upsert<T extends mentorUpsertArgs>(args: SelectSubset<T, mentorUpsertArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorCountArgs} args - Arguments to filter Mentors to count.
     * @example
     * // Count the number of Mentors
     * const count = await prisma.mentor.count({
     *   where: {
     *     // ... the filter for the Mentors we want to count
     *   }
     * })
    **/
    count<T extends mentorCountArgs>(
      args?: Subset<T, mentorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentorAggregateArgs>(args: Subset<T, MentorAggregateArgs>): Prisma.PrismaPromise<GetMentorAggregateType<T>>

    /**
     * Group by Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mentorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mentorGroupByArgs['orderBy'] }
        : { orderBy?: mentorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mentorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mentor model
   */
  readonly fields: mentorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mentor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mentorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mentor model
   */
  interface mentorFieldRefs {
    readonly id: FieldRef<"mentor", 'Int'>
    readonly clerkId: FieldRef<"mentor", 'String'>
    readonly name: FieldRef<"mentor", 'String'>
    readonly email: FieldRef<"mentor", 'String'>
    readonly address: FieldRef<"mentor", 'String'>
    readonly phone: FieldRef<"mentor", 'String'>
    readonly linkedin: FieldRef<"mentor", 'String'>
    readonly ocuppation: FieldRef<"mentor", 'String'>
    readonly exp: FieldRef<"mentor", 'String'>
    readonly bio: FieldRef<"mentor", 'String'>
    readonly password: FieldRef<"mentor", 'String'>
    readonly skill: FieldRef<"mentor", 'String[]'>
    readonly disponibility: FieldRef<"mentor", 'String'>
    readonly weekly_availability: FieldRef<"mentor", 'String'>
    readonly hourly_rate: FieldRef<"mentor", 'String'>
    readonly admin: FieldRef<"mentor", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * mentor findUnique
   */
  export type mentorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Filter, which mentor to fetch.
     */
    where: mentorWhereUniqueInput
  }

  /**
   * mentor findUniqueOrThrow
   */
  export type mentorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Filter, which mentor to fetch.
     */
    where: mentorWhereUniqueInput
  }

  /**
   * mentor findFirst
   */
  export type mentorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Filter, which mentor to fetch.
     */
    where?: mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentors to fetch.
     */
    orderBy?: mentorOrderByWithRelationInput | mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mentors.
     */
    cursor?: mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * mentor findFirstOrThrow
   */
  export type mentorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Filter, which mentor to fetch.
     */
    where?: mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentors to fetch.
     */
    orderBy?: mentorOrderByWithRelationInput | mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mentors.
     */
    cursor?: mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * mentor findMany
   */
  export type mentorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Filter, which mentors to fetch.
     */
    where?: mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentors to fetch.
     */
    orderBy?: mentorOrderByWithRelationInput | mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mentors.
     */
    cursor?: mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentors.
     */
    skip?: number
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * mentor create
   */
  export type mentorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * The data needed to create a mentor.
     */
    data: XOR<mentorCreateInput, mentorUncheckedCreateInput>
  }

  /**
   * mentor createMany
   */
  export type mentorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mentors.
     */
    data: mentorCreateManyInput | mentorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mentor createManyAndReturn
   */
  export type mentorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * The data used to create many mentors.
     */
    data: mentorCreateManyInput | mentorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mentor update
   */
  export type mentorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * The data needed to update a mentor.
     */
    data: XOR<mentorUpdateInput, mentorUncheckedUpdateInput>
    /**
     * Choose, which mentor to update.
     */
    where: mentorWhereUniqueInput
  }

  /**
   * mentor updateMany
   */
  export type mentorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mentors.
     */
    data: XOR<mentorUpdateManyMutationInput, mentorUncheckedUpdateManyInput>
    /**
     * Filter which mentors to update
     */
    where?: mentorWhereInput
    /**
     * Limit how many mentors to update.
     */
    limit?: number
  }

  /**
   * mentor updateManyAndReturn
   */
  export type mentorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * The data used to update mentors.
     */
    data: XOR<mentorUpdateManyMutationInput, mentorUncheckedUpdateManyInput>
    /**
     * Filter which mentors to update
     */
    where?: mentorWhereInput
    /**
     * Limit how many mentors to update.
     */
    limit?: number
  }

  /**
   * mentor upsert
   */
  export type mentorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * The filter to search for the mentor to update in case it exists.
     */
    where: mentorWhereUniqueInput
    /**
     * In case the mentor found by the `where` argument doesn't exist, create a new mentor with this data.
     */
    create: XOR<mentorCreateInput, mentorUncheckedCreateInput>
    /**
     * In case the mentor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mentorUpdateInput, mentorUncheckedUpdateInput>
  }

  /**
   * mentor delete
   */
  export type mentorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Filter which mentor to delete.
     */
    where: mentorWhereUniqueInput
  }

  /**
   * mentor deleteMany
   */
  export type mentorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mentors to delete
     */
    where?: mentorWhereInput
    /**
     * Limit how many mentors to delete.
     */
    limit?: number
  }

  /**
   * mentor without action
   */
  export type mentorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    budget: Decimal | null
    id: number | null
    owner: number | null
    mentorid: number | null
  }

  export type ProjectSumAggregateOutputType = {
    budget: Decimal | null
    id: number | null
    owner: number | null
    mentorid: number | null
  }

  export type ProjectMinAggregateOutputType = {
    tittle: string | null
    description: string | null
    category: string | null
    duration: string | null
    budget: Decimal | null
    priority: string | null
    start_date: string | null
    end_date: string | null
    requirements: string | null
    id: number | null
    owner: number | null
    mentorid: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    tittle: string | null
    description: string | null
    category: string | null
    duration: string | null
    budget: Decimal | null
    priority: string | null
    start_date: string | null
    end_date: string | null
    requirements: string | null
    id: number | null
    owner: number | null
    mentorid: number | null
  }

  export type ProjectCountAggregateOutputType = {
    tittle: number
    description: number
    category: number
    duration: number
    budget: number
    priority: number
    skills: number
    start_date: number
    end_date: number
    requirements: number
    id: number
    owner: number
    mentorid: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    budget?: true
    id?: true
    owner?: true
    mentorid?: true
  }

  export type ProjectSumAggregateInputType = {
    budget?: true
    id?: true
    owner?: true
    mentorid?: true
  }

  export type ProjectMinAggregateInputType = {
    tittle?: true
    description?: true
    category?: true
    duration?: true
    budget?: true
    priority?: true
    start_date?: true
    end_date?: true
    requirements?: true
    id?: true
    owner?: true
    mentorid?: true
  }

  export type ProjectMaxAggregateInputType = {
    tittle?: true
    description?: true
    category?: true
    duration?: true
    budget?: true
    priority?: true
    start_date?: true
    end_date?: true
    requirements?: true
    id?: true
    owner?: true
    mentorid?: true
  }

  export type ProjectCountAggregateInputType = {
    tittle?: true
    description?: true
    category?: true
    duration?: true
    budget?: true
    priority?: true
    skills?: true
    start_date?: true
    end_date?: true
    requirements?: true
    id?: true
    owner?: true
    mentorid?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    tittle: string | null
    description: string | null
    category: string | null
    duration: string | null
    budget: Decimal | null
    priority: string | null
    skills: string[]
    start_date: string | null
    end_date: string | null
    requirements: string | null
    id: number
    owner: number | null
    mentorid: number | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tittle?: boolean
    description?: boolean
    category?: boolean
    duration?: boolean
    budget?: boolean
    priority?: boolean
    skills?: boolean
    start_date?: boolean
    end_date?: boolean
    requirements?: boolean
    id?: boolean
    owner?: boolean
    mentorid?: boolean
  }, ExtArgs["result"]["project"]>

  export type projectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tittle?: boolean
    description?: boolean
    category?: boolean
    duration?: boolean
    budget?: boolean
    priority?: boolean
    skills?: boolean
    start_date?: boolean
    end_date?: boolean
    requirements?: boolean
    id?: boolean
    owner?: boolean
    mentorid?: boolean
  }, ExtArgs["result"]["project"]>

  export type projectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tittle?: boolean
    description?: boolean
    category?: boolean
    duration?: boolean
    budget?: boolean
    priority?: boolean
    skills?: boolean
    start_date?: boolean
    end_date?: boolean
    requirements?: boolean
    id?: boolean
    owner?: boolean
    mentorid?: boolean
  }, ExtArgs["result"]["project"]>

  export type projectSelectScalar = {
    tittle?: boolean
    description?: boolean
    category?: boolean
    duration?: boolean
    budget?: boolean
    priority?: boolean
    skills?: boolean
    start_date?: boolean
    end_date?: boolean
    requirements?: boolean
    id?: boolean
    owner?: boolean
    mentorid?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tittle" | "description" | "category" | "duration" | "budget" | "priority" | "skills" | "start_date" | "end_date" | "requirements" | "id" | "owner" | "mentorid", ExtArgs["result"]["project"]>

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tittle: string | null
      description: string | null
      category: string | null
      duration: string | null
      budget: Prisma.Decimal | null
      priority: string | null
      skills: string[]
      start_date: string | null
      end_date: string | null
      requirements: string | null
      id: number
      owner: number | null
      mentorid: number | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `tittle`
     * const projectWithTittleOnly = await prisma.project.findMany({ select: { tittle: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `tittle`
     * const projectWithTittleOnly = await prisma.project.createManyAndReturn({
     *   select: { tittle: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectCreateManyAndReturnArgs>(args?: SelectSubset<T, projectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `tittle`
     * const projectWithTittleOnly = await prisma.project.updateManyAndReturn({
     *   select: { tittle: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectUpdateManyAndReturnArgs>(args: SelectSubset<T, projectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly tittle: FieldRef<"project", 'String'>
    readonly description: FieldRef<"project", 'String'>
    readonly category: FieldRef<"project", 'String'>
    readonly duration: FieldRef<"project", 'String'>
    readonly budget: FieldRef<"project", 'Decimal'>
    readonly priority: FieldRef<"project", 'String'>
    readonly skills: FieldRef<"project", 'String[]'>
    readonly start_date: FieldRef<"project", 'String'>
    readonly end_date: FieldRef<"project", 'String'>
    readonly requirements: FieldRef<"project", 'String'>
    readonly id: FieldRef<"project", 'Int'>
    readonly owner: FieldRef<"project", 'Int'>
    readonly mentorid: FieldRef<"project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data?: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project createManyAndReturn
   */
  export type projectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project updateManyAndReturn
   */
  export type projectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
  }


  /**
   * Model value
   */

  export type AggregateValue = {
    _count: ValueCountAggregateOutputType | null
    _avg: ValueAvgAggregateOutputType | null
    _sum: ValueSumAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  export type ValueAvgAggregateOutputType = {
    mentor_value_id: number | null
  }

  export type ValueSumAggregateOutputType = {
    mentor_value_id: number | null
  }

  export type ValueMinAggregateOutputType = {
    mentor_value_id: number | null
    hour_value: string | null
    days_a_week: string | null
  }

  export type ValueMaxAggregateOutputType = {
    mentor_value_id: number | null
    hour_value: string | null
    days_a_week: string | null
  }

  export type ValueCountAggregateOutputType = {
    mentor_value_id: number
    hour_value: number
    days_a_week: number
    _all: number
  }


  export type ValueAvgAggregateInputType = {
    mentor_value_id?: true
  }

  export type ValueSumAggregateInputType = {
    mentor_value_id?: true
  }

  export type ValueMinAggregateInputType = {
    mentor_value_id?: true
    hour_value?: true
    days_a_week?: true
  }

  export type ValueMaxAggregateInputType = {
    mentor_value_id?: true
    hour_value?: true
    days_a_week?: true
  }

  export type ValueCountAggregateInputType = {
    mentor_value_id?: true
    hour_value?: true
    days_a_week?: true
    _all?: true
  }

  export type ValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which value to aggregate.
     */
    where?: valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of values to fetch.
     */
    orderBy?: valueOrderByWithRelationInput | valueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned values
    **/
    _count?: true | ValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValueMaxAggregateInputType
  }

  export type GetValueAggregateType<T extends ValueAggregateArgs> = {
        [P in keyof T & keyof AggregateValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValue[P]>
      : GetScalarType<T[P], AggregateValue[P]>
  }




  export type valueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: valueWhereInput
    orderBy?: valueOrderByWithAggregationInput | valueOrderByWithAggregationInput[]
    by: ValueScalarFieldEnum[] | ValueScalarFieldEnum
    having?: valueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValueCountAggregateInputType | true
    _avg?: ValueAvgAggregateInputType
    _sum?: ValueSumAggregateInputType
    _min?: ValueMinAggregateInputType
    _max?: ValueMaxAggregateInputType
  }

  export type ValueGroupByOutputType = {
    mentor_value_id: number
    hour_value: string | null
    days_a_week: string | null
    _count: ValueCountAggregateOutputType | null
    _avg: ValueAvgAggregateOutputType | null
    _sum: ValueSumAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  type GetValueGroupByPayload<T extends valueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValueGroupByOutputType[P]>
            : GetScalarType<T[P], ValueGroupByOutputType[P]>
        }
      >
    >


  export type valueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mentor_value_id?: boolean
    hour_value?: boolean
    days_a_week?: boolean
  }, ExtArgs["result"]["value"]>

  export type valueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mentor_value_id?: boolean
    hour_value?: boolean
    days_a_week?: boolean
  }, ExtArgs["result"]["value"]>

  export type valueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mentor_value_id?: boolean
    hour_value?: boolean
    days_a_week?: boolean
  }, ExtArgs["result"]["value"]>

  export type valueSelectScalar = {
    mentor_value_id?: boolean
    hour_value?: boolean
    days_a_week?: boolean
  }

  export type valueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mentor_value_id" | "hour_value" | "days_a_week", ExtArgs["result"]["value"]>

  export type $valuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "value"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      mentor_value_id: number
      hour_value: string | null
      days_a_week: string | null
    }, ExtArgs["result"]["value"]>
    composites: {}
  }

  type valueGetPayload<S extends boolean | null | undefined | valueDefaultArgs> = $Result.GetResult<Prisma.$valuePayload, S>

  type valueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<valueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValueCountAggregateInputType | true
    }

  export interface valueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['value'], meta: { name: 'value' } }
    /**
     * Find zero or one Value that matches the filter.
     * @param {valueFindUniqueArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends valueFindUniqueArgs>(args: SelectSubset<T, valueFindUniqueArgs<ExtArgs>>): Prisma__valueClient<$Result.GetResult<Prisma.$valuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Value that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {valueFindUniqueOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends valueFindUniqueOrThrowArgs>(args: SelectSubset<T, valueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__valueClient<$Result.GetResult<Prisma.$valuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Value that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valueFindFirstArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends valueFindFirstArgs>(args?: SelectSubset<T, valueFindFirstArgs<ExtArgs>>): Prisma__valueClient<$Result.GetResult<Prisma.$valuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Value that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valueFindFirstOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends valueFindFirstOrThrowArgs>(args?: SelectSubset<T, valueFindFirstOrThrowArgs<ExtArgs>>): Prisma__valueClient<$Result.GetResult<Prisma.$valuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Values
     * const values = await prisma.value.findMany()
     * 
     * // Get first 10 Values
     * const values = await prisma.value.findMany({ take: 10 })
     * 
     * // Only select the `mentor_value_id`
     * const valueWithMentor_value_idOnly = await prisma.value.findMany({ select: { mentor_value_id: true } })
     * 
     */
    findMany<T extends valueFindManyArgs>(args?: SelectSubset<T, valueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Value.
     * @param {valueCreateArgs} args - Arguments to create a Value.
     * @example
     * // Create one Value
     * const Value = await prisma.value.create({
     *   data: {
     *     // ... data to create a Value
     *   }
     * })
     * 
     */
    create<T extends valueCreateArgs>(args: SelectSubset<T, valueCreateArgs<ExtArgs>>): Prisma__valueClient<$Result.GetResult<Prisma.$valuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Values.
     * @param {valueCreateManyArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const value = await prisma.value.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends valueCreateManyArgs>(args?: SelectSubset<T, valueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Values and returns the data saved in the database.
     * @param {valueCreateManyAndReturnArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const value = await prisma.value.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Values and only return the `mentor_value_id`
     * const valueWithMentor_value_idOnly = await prisma.value.createManyAndReturn({
     *   select: { mentor_value_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends valueCreateManyAndReturnArgs>(args?: SelectSubset<T, valueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Value.
     * @param {valueDeleteArgs} args - Arguments to delete one Value.
     * @example
     * // Delete one Value
     * const Value = await prisma.value.delete({
     *   where: {
     *     // ... filter to delete one Value
     *   }
     * })
     * 
     */
    delete<T extends valueDeleteArgs>(args: SelectSubset<T, valueDeleteArgs<ExtArgs>>): Prisma__valueClient<$Result.GetResult<Prisma.$valuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Value.
     * @param {valueUpdateArgs} args - Arguments to update one Value.
     * @example
     * // Update one Value
     * const value = await prisma.value.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends valueUpdateArgs>(args: SelectSubset<T, valueUpdateArgs<ExtArgs>>): Prisma__valueClient<$Result.GetResult<Prisma.$valuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Values.
     * @param {valueDeleteManyArgs} args - Arguments to filter Values to delete.
     * @example
     * // Delete a few Values
     * const { count } = await prisma.value.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends valueDeleteManyArgs>(args?: SelectSubset<T, valueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Values
     * const value = await prisma.value.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends valueUpdateManyArgs>(args: SelectSubset<T, valueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values and returns the data updated in the database.
     * @param {valueUpdateManyAndReturnArgs} args - Arguments to update many Values.
     * @example
     * // Update many Values
     * const value = await prisma.value.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Values and only return the `mentor_value_id`
     * const valueWithMentor_value_idOnly = await prisma.value.updateManyAndReturn({
     *   select: { mentor_value_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends valueUpdateManyAndReturnArgs>(args: SelectSubset<T, valueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Value.
     * @param {valueUpsertArgs} args - Arguments to update or create a Value.
     * @example
     * // Update or create a Value
     * const value = await prisma.value.upsert({
     *   create: {
     *     // ... data to create a Value
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Value we want to update
     *   }
     * })
     */
    upsert<T extends valueUpsertArgs>(args: SelectSubset<T, valueUpsertArgs<ExtArgs>>): Prisma__valueClient<$Result.GetResult<Prisma.$valuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valueCountArgs} args - Arguments to filter Values to count.
     * @example
     * // Count the number of Values
     * const count = await prisma.value.count({
     *   where: {
     *     // ... the filter for the Values we want to count
     *   }
     * })
    **/
    count<T extends valueCountArgs>(
      args?: Subset<T, valueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ValueAggregateArgs>(args: Subset<T, ValueAggregateArgs>): Prisma.PrismaPromise<GetValueAggregateType<T>>

    /**
     * Group by Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends valueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: valueGroupByArgs['orderBy'] }
        : { orderBy?: valueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, valueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the value model
   */
  readonly fields: valueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for value.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__valueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the value model
   */
  interface valueFieldRefs {
    readonly mentor_value_id: FieldRef<"value", 'Int'>
    readonly hour_value: FieldRef<"value", 'String'>
    readonly days_a_week: FieldRef<"value", 'String'>
  }
    

  // Custom InputTypes
  /**
   * value findUnique
   */
  export type valueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
    /**
     * Filter, which value to fetch.
     */
    where: valueWhereUniqueInput
  }

  /**
   * value findUniqueOrThrow
   */
  export type valueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
    /**
     * Filter, which value to fetch.
     */
    where: valueWhereUniqueInput
  }

  /**
   * value findFirst
   */
  export type valueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
    /**
     * Filter, which value to fetch.
     */
    where?: valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of values to fetch.
     */
    orderBy?: valueOrderByWithRelationInput | valueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for values.
     */
    cursor?: valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * value findFirstOrThrow
   */
  export type valueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
    /**
     * Filter, which value to fetch.
     */
    where?: valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of values to fetch.
     */
    orderBy?: valueOrderByWithRelationInput | valueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for values.
     */
    cursor?: valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * value findMany
   */
  export type valueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
    /**
     * Filter, which values to fetch.
     */
    where?: valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of values to fetch.
     */
    orderBy?: valueOrderByWithRelationInput | valueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing values.
     */
    cursor?: valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` values.
     */
    skip?: number
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * value create
   */
  export type valueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
    /**
     * The data needed to create a value.
     */
    data: XOR<valueCreateInput, valueUncheckedCreateInput>
  }

  /**
   * value createMany
   */
  export type valueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many values.
     */
    data: valueCreateManyInput | valueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * value createManyAndReturn
   */
  export type valueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
    /**
     * The data used to create many values.
     */
    data: valueCreateManyInput | valueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * value update
   */
  export type valueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
    /**
     * The data needed to update a value.
     */
    data: XOR<valueUpdateInput, valueUncheckedUpdateInput>
    /**
     * Choose, which value to update.
     */
    where: valueWhereUniqueInput
  }

  /**
   * value updateMany
   */
  export type valueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update values.
     */
    data: XOR<valueUpdateManyMutationInput, valueUncheckedUpdateManyInput>
    /**
     * Filter which values to update
     */
    where?: valueWhereInput
    /**
     * Limit how many values to update.
     */
    limit?: number
  }

  /**
   * value updateManyAndReturn
   */
  export type valueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
    /**
     * The data used to update values.
     */
    data: XOR<valueUpdateManyMutationInput, valueUncheckedUpdateManyInput>
    /**
     * Filter which values to update
     */
    where?: valueWhereInput
    /**
     * Limit how many values to update.
     */
    limit?: number
  }

  /**
   * value upsert
   */
  export type valueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
    /**
     * The filter to search for the value to update in case it exists.
     */
    where: valueWhereUniqueInput
    /**
     * In case the value found by the `where` argument doesn't exist, create a new value with this data.
     */
    create: XOR<valueCreateInput, valueUncheckedCreateInput>
    /**
     * In case the value was found with the provided `where` argument, update it with this data.
     */
    update: XOR<valueUpdateInput, valueUncheckedUpdateInput>
  }

  /**
   * value delete
   */
  export type valueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
    /**
     * Filter which value to delete.
     */
    where: valueWhereUniqueInput
  }

  /**
   * value deleteMany
   */
  export type valueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which values to delete
     */
    where?: valueWhereInput
    /**
     * Limit how many values to delete.
     */
    limit?: number
  }

  /**
   * value without action
   */
  export type valueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the value
     */
    select?: valueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the value
     */
    omit?: valueOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InviteScalarFieldEnum: {
    id: 'id',
    projectid: 'projectid',
    mentorid: 'mentorid',
    status: 'status',
    message: 'message',
    createdat: 'createdat',
    updatedat: 'updatedat',
    response_message: 'response_message'
  };

  export type InviteScalarFieldEnum = (typeof InviteScalarFieldEnum)[keyof typeof InviteScalarFieldEnum]


  export const MentorScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    name: 'name',
    email: 'email',
    address: 'address',
    phone: 'phone',
    linkedin: 'linkedin',
    ocuppation: 'ocuppation',
    exp: 'exp',
    bio: 'bio',
    password: 'password',
    skill: 'skill',
    disponibility: 'disponibility',
    weekly_availability: 'weekly_availability',
    hourly_rate: 'hourly_rate',
    admin: 'admin'
  };

  export type MentorScalarFieldEnum = (typeof MentorScalarFieldEnum)[keyof typeof MentorScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    tittle: 'tittle',
    description: 'description',
    category: 'category',
    duration: 'duration',
    budget: 'budget',
    priority: 'priority',
    skills: 'skills',
    start_date: 'start_date',
    end_date: 'end_date',
    requirements: 'requirements',
    id: 'id',
    owner: 'owner',
    mentorid: 'mentorid'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ValueScalarFieldEnum: {
    mentor_value_id: 'mentor_value_id',
    hour_value: 'hour_value',
    days_a_week: 'days_a_week'
  };

  export type ValueScalarFieldEnum = (typeof ValueScalarFieldEnum)[keyof typeof ValueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type inviteWhereInput = {
    AND?: inviteWhereInput | inviteWhereInput[]
    OR?: inviteWhereInput[]
    NOT?: inviteWhereInput | inviteWhereInput[]
    id?: IntFilter<"invite"> | number
    projectid?: IntFilter<"invite"> | number
    mentorid?: IntFilter<"invite"> | number
    status?: StringNullableFilter<"invite"> | string | null
    message?: StringNullableFilter<"invite"> | string | null
    createdat?: DateTimeNullableFilter<"invite"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"invite"> | Date | string | null
    response_message?: StringNullableFilter<"invite"> | string | null
  }

  export type inviteOrderByWithRelationInput = {
    id?: SortOrder
    projectid?: SortOrder
    mentorid?: SortOrder
    status?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    response_message?: SortOrderInput | SortOrder
  }

  export type inviteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectid_mentorid?: inviteProjectidMentoridCompoundUniqueInput
    AND?: inviteWhereInput | inviteWhereInput[]
    OR?: inviteWhereInput[]
    NOT?: inviteWhereInput | inviteWhereInput[]
    projectid?: IntFilter<"invite"> | number
    mentorid?: IntFilter<"invite"> | number
    status?: StringNullableFilter<"invite"> | string | null
    message?: StringNullableFilter<"invite"> | string | null
    createdat?: DateTimeNullableFilter<"invite"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"invite"> | Date | string | null
    response_message?: StringNullableFilter<"invite"> | string | null
  }, "id" | "projectid_mentorid">

  export type inviteOrderByWithAggregationInput = {
    id?: SortOrder
    projectid?: SortOrder
    mentorid?: SortOrder
    status?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    response_message?: SortOrderInput | SortOrder
    _count?: inviteCountOrderByAggregateInput
    _avg?: inviteAvgOrderByAggregateInput
    _max?: inviteMaxOrderByAggregateInput
    _min?: inviteMinOrderByAggregateInput
    _sum?: inviteSumOrderByAggregateInput
  }

  export type inviteScalarWhereWithAggregatesInput = {
    AND?: inviteScalarWhereWithAggregatesInput | inviteScalarWhereWithAggregatesInput[]
    OR?: inviteScalarWhereWithAggregatesInput[]
    NOT?: inviteScalarWhereWithAggregatesInput | inviteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invite"> | number
    projectid?: IntWithAggregatesFilter<"invite"> | number
    mentorid?: IntWithAggregatesFilter<"invite"> | number
    status?: StringNullableWithAggregatesFilter<"invite"> | string | null
    message?: StringNullableWithAggregatesFilter<"invite"> | string | null
    createdat?: DateTimeNullableWithAggregatesFilter<"invite"> | Date | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"invite"> | Date | string | null
    response_message?: StringNullableWithAggregatesFilter<"invite"> | string | null
  }

  export type mentorWhereInput = {
    AND?: mentorWhereInput | mentorWhereInput[]
    OR?: mentorWhereInput[]
    NOT?: mentorWhereInput | mentorWhereInput[]
    id?: IntFilter<"mentor"> | number
    clerkId?: StringFilter<"mentor"> | string
    name?: StringFilter<"mentor"> | string
    email?: StringNullableFilter<"mentor"> | string | null
    address?: StringNullableFilter<"mentor"> | string | null
    phone?: StringNullableFilter<"mentor"> | string | null
    linkedin?: StringNullableFilter<"mentor"> | string | null
    ocuppation?: StringNullableFilter<"mentor"> | string | null
    exp?: StringNullableFilter<"mentor"> | string | null
    bio?: StringNullableFilter<"mentor"> | string | null
    password?: StringNullableFilter<"mentor"> | string | null
    skill?: StringNullableListFilter<"mentor">
    disponibility?: StringNullableFilter<"mentor"> | string | null
    weekly_availability?: StringNullableFilter<"mentor"> | string | null
    hourly_rate?: StringNullableFilter<"mentor"> | string | null
    admin?: BoolNullableFilter<"mentor"> | boolean | null
  }

  export type mentorOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    ocuppation?: SortOrderInput | SortOrder
    exp?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    skill?: SortOrder
    disponibility?: SortOrderInput | SortOrder
    weekly_availability?: SortOrderInput | SortOrder
    hourly_rate?: SortOrderInput | SortOrder
    admin?: SortOrderInput | SortOrder
  }

  export type mentorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clerkId?: string
    email?: string
    AND?: mentorWhereInput | mentorWhereInput[]
    OR?: mentorWhereInput[]
    NOT?: mentorWhereInput | mentorWhereInput[]
    name?: StringFilter<"mentor"> | string
    address?: StringNullableFilter<"mentor"> | string | null
    phone?: StringNullableFilter<"mentor"> | string | null
    linkedin?: StringNullableFilter<"mentor"> | string | null
    ocuppation?: StringNullableFilter<"mentor"> | string | null
    exp?: StringNullableFilter<"mentor"> | string | null
    bio?: StringNullableFilter<"mentor"> | string | null
    password?: StringNullableFilter<"mentor"> | string | null
    skill?: StringNullableListFilter<"mentor">
    disponibility?: StringNullableFilter<"mentor"> | string | null
    weekly_availability?: StringNullableFilter<"mentor"> | string | null
    hourly_rate?: StringNullableFilter<"mentor"> | string | null
    admin?: BoolNullableFilter<"mentor"> | boolean | null
  }, "id" | "clerkId" | "email">

  export type mentorOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    ocuppation?: SortOrderInput | SortOrder
    exp?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    skill?: SortOrder
    disponibility?: SortOrderInput | SortOrder
    weekly_availability?: SortOrderInput | SortOrder
    hourly_rate?: SortOrderInput | SortOrder
    admin?: SortOrderInput | SortOrder
    _count?: mentorCountOrderByAggregateInput
    _avg?: mentorAvgOrderByAggregateInput
    _max?: mentorMaxOrderByAggregateInput
    _min?: mentorMinOrderByAggregateInput
    _sum?: mentorSumOrderByAggregateInput
  }

  export type mentorScalarWhereWithAggregatesInput = {
    AND?: mentorScalarWhereWithAggregatesInput | mentorScalarWhereWithAggregatesInput[]
    OR?: mentorScalarWhereWithAggregatesInput[]
    NOT?: mentorScalarWhereWithAggregatesInput | mentorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mentor"> | number
    clerkId?: StringWithAggregatesFilter<"mentor"> | string
    name?: StringWithAggregatesFilter<"mentor"> | string
    email?: StringNullableWithAggregatesFilter<"mentor"> | string | null
    address?: StringNullableWithAggregatesFilter<"mentor"> | string | null
    phone?: StringNullableWithAggregatesFilter<"mentor"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"mentor"> | string | null
    ocuppation?: StringNullableWithAggregatesFilter<"mentor"> | string | null
    exp?: StringNullableWithAggregatesFilter<"mentor"> | string | null
    bio?: StringNullableWithAggregatesFilter<"mentor"> | string | null
    password?: StringNullableWithAggregatesFilter<"mentor"> | string | null
    skill?: StringNullableListFilter<"mentor">
    disponibility?: StringNullableWithAggregatesFilter<"mentor"> | string | null
    weekly_availability?: StringNullableWithAggregatesFilter<"mentor"> | string | null
    hourly_rate?: StringNullableWithAggregatesFilter<"mentor"> | string | null
    admin?: BoolNullableWithAggregatesFilter<"mentor"> | boolean | null
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    tittle?: StringNullableFilter<"project"> | string | null
    description?: StringNullableFilter<"project"> | string | null
    category?: StringNullableFilter<"project"> | string | null
    duration?: StringNullableFilter<"project"> | string | null
    budget?: DecimalNullableFilter<"project"> | Decimal | DecimalJsLike | number | string | null
    priority?: StringNullableFilter<"project"> | string | null
    skills?: StringNullableListFilter<"project">
    start_date?: StringNullableFilter<"project"> | string | null
    end_date?: StringNullableFilter<"project"> | string | null
    requirements?: StringNullableFilter<"project"> | string | null
    id?: IntFilter<"project"> | number
    owner?: IntNullableFilter<"project"> | number | null
    mentorid?: IntNullableFilter<"project"> | number | null
  }

  export type projectOrderByWithRelationInput = {
    tittle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    skills?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    id?: SortOrder
    owner?: SortOrderInput | SortOrder
    mentorid?: SortOrderInput | SortOrder
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    tittle?: StringNullableFilter<"project"> | string | null
    description?: StringNullableFilter<"project"> | string | null
    category?: StringNullableFilter<"project"> | string | null
    duration?: StringNullableFilter<"project"> | string | null
    budget?: DecimalNullableFilter<"project"> | Decimal | DecimalJsLike | number | string | null
    priority?: StringNullableFilter<"project"> | string | null
    skills?: StringNullableListFilter<"project">
    start_date?: StringNullableFilter<"project"> | string | null
    end_date?: StringNullableFilter<"project"> | string | null
    requirements?: StringNullableFilter<"project"> | string | null
    owner?: IntNullableFilter<"project"> | number | null
    mentorid?: IntNullableFilter<"project"> | number | null
  }, "id" | "id">

  export type projectOrderByWithAggregationInput = {
    tittle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    skills?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    id?: SortOrder
    owner?: SortOrderInput | SortOrder
    mentorid?: SortOrderInput | SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    tittle?: StringNullableWithAggregatesFilter<"project"> | string | null
    description?: StringNullableWithAggregatesFilter<"project"> | string | null
    category?: StringNullableWithAggregatesFilter<"project"> | string | null
    duration?: StringNullableWithAggregatesFilter<"project"> | string | null
    budget?: DecimalNullableWithAggregatesFilter<"project"> | Decimal | DecimalJsLike | number | string | null
    priority?: StringNullableWithAggregatesFilter<"project"> | string | null
    skills?: StringNullableListFilter<"project">
    start_date?: StringNullableWithAggregatesFilter<"project"> | string | null
    end_date?: StringNullableWithAggregatesFilter<"project"> | string | null
    requirements?: StringNullableWithAggregatesFilter<"project"> | string | null
    id?: IntWithAggregatesFilter<"project"> | number
    owner?: IntNullableWithAggregatesFilter<"project"> | number | null
    mentorid?: IntNullableWithAggregatesFilter<"project"> | number | null
  }

  export type valueWhereInput = {
    AND?: valueWhereInput | valueWhereInput[]
    OR?: valueWhereInput[]
    NOT?: valueWhereInput | valueWhereInput[]
    mentor_value_id?: IntFilter<"value"> | number
    hour_value?: StringNullableFilter<"value"> | string | null
    days_a_week?: StringNullableFilter<"value"> | string | null
  }

  export type valueOrderByWithRelationInput = {
    mentor_value_id?: SortOrder
    hour_value?: SortOrderInput | SortOrder
    days_a_week?: SortOrderInput | SortOrder
  }

  export type valueWhereUniqueInput = Prisma.AtLeast<{
    mentor_value_id?: number
    AND?: valueWhereInput | valueWhereInput[]
    OR?: valueWhereInput[]
    NOT?: valueWhereInput | valueWhereInput[]
    hour_value?: StringNullableFilter<"value"> | string | null
    days_a_week?: StringNullableFilter<"value"> | string | null
  }, "mentor_value_id" | "mentor_value_id">

  export type valueOrderByWithAggregationInput = {
    mentor_value_id?: SortOrder
    hour_value?: SortOrderInput | SortOrder
    days_a_week?: SortOrderInput | SortOrder
    _count?: valueCountOrderByAggregateInput
    _avg?: valueAvgOrderByAggregateInput
    _max?: valueMaxOrderByAggregateInput
    _min?: valueMinOrderByAggregateInput
    _sum?: valueSumOrderByAggregateInput
  }

  export type valueScalarWhereWithAggregatesInput = {
    AND?: valueScalarWhereWithAggregatesInput | valueScalarWhereWithAggregatesInput[]
    OR?: valueScalarWhereWithAggregatesInput[]
    NOT?: valueScalarWhereWithAggregatesInput | valueScalarWhereWithAggregatesInput[]
    mentor_value_id?: IntWithAggregatesFilter<"value"> | number
    hour_value?: StringNullableWithAggregatesFilter<"value"> | string | null
    days_a_week?: StringNullableWithAggregatesFilter<"value"> | string | null
  }

  export type inviteCreateInput = {
    projectid: number
    mentorid: number
    status?: string | null
    message?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    response_message?: string | null
  }

  export type inviteUncheckedCreateInput = {
    id?: number
    projectid: number
    mentorid: number
    status?: string | null
    message?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    response_message?: string | null
  }

  export type inviteUpdateInput = {
    projectid?: IntFieldUpdateOperationsInput | number
    mentorid?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inviteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectid?: IntFieldUpdateOperationsInput | number
    mentorid?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inviteCreateManyInput = {
    id?: number
    projectid: number
    mentorid: number
    status?: string | null
    message?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    response_message?: string | null
  }

  export type inviteUpdateManyMutationInput = {
    projectid?: IntFieldUpdateOperationsInput | number
    mentorid?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inviteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectid?: IntFieldUpdateOperationsInput | number
    mentorid?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mentorCreateInput = {
    clerkId: string
    name: string
    email?: string | null
    address?: string | null
    phone?: string | null
    linkedin?: string | null
    ocuppation?: string | null
    exp?: string | null
    bio?: string | null
    password?: string | null
    skill?: mentorCreateskillInput | string[]
    disponibility?: string | null
    weekly_availability?: string | null
    hourly_rate?: string | null
    admin?: boolean | null
  }

  export type mentorUncheckedCreateInput = {
    id?: number
    clerkId: string
    name: string
    email?: string | null
    address?: string | null
    phone?: string | null
    linkedin?: string | null
    ocuppation?: string | null
    exp?: string | null
    bio?: string | null
    password?: string | null
    skill?: mentorCreateskillInput | string[]
    disponibility?: string | null
    weekly_availability?: string | null
    hourly_rate?: string | null
    admin?: boolean | null
  }

  export type mentorUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    ocuppation?: NullableStringFieldUpdateOperationsInput | string | null
    exp?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: mentorUpdateskillInput | string[]
    disponibility?: NullableStringFieldUpdateOperationsInput | string | null
    weekly_availability?: NullableStringFieldUpdateOperationsInput | string | null
    hourly_rate?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type mentorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    ocuppation?: NullableStringFieldUpdateOperationsInput | string | null
    exp?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: mentorUpdateskillInput | string[]
    disponibility?: NullableStringFieldUpdateOperationsInput | string | null
    weekly_availability?: NullableStringFieldUpdateOperationsInput | string | null
    hourly_rate?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type mentorCreateManyInput = {
    id?: number
    clerkId: string
    name: string
    email?: string | null
    address?: string | null
    phone?: string | null
    linkedin?: string | null
    ocuppation?: string | null
    exp?: string | null
    bio?: string | null
    password?: string | null
    skill?: mentorCreateskillInput | string[]
    disponibility?: string | null
    weekly_availability?: string | null
    hourly_rate?: string | null
    admin?: boolean | null
  }

  export type mentorUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    ocuppation?: NullableStringFieldUpdateOperationsInput | string | null
    exp?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: mentorUpdateskillInput | string[]
    disponibility?: NullableStringFieldUpdateOperationsInput | string | null
    weekly_availability?: NullableStringFieldUpdateOperationsInput | string | null
    hourly_rate?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type mentorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    ocuppation?: NullableStringFieldUpdateOperationsInput | string | null
    exp?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: mentorUpdateskillInput | string[]
    disponibility?: NullableStringFieldUpdateOperationsInput | string | null
    weekly_availability?: NullableStringFieldUpdateOperationsInput | string | null
    hourly_rate?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type projectCreateInput = {
    tittle?: string | null
    description?: string | null
    category?: string | null
    duration?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    priority?: string | null
    skills?: projectCreateskillsInput | string[]
    start_date?: string | null
    end_date?: string | null
    requirements?: string | null
    owner?: number | null
    mentorid?: number | null
  }

  export type projectUncheckedCreateInput = {
    tittle?: string | null
    description?: string | null
    category?: string | null
    duration?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    priority?: string | null
    skills?: projectCreateskillsInput | string[]
    start_date?: string | null
    end_date?: string | null
    requirements?: string | null
    id?: number
    owner?: number | null
    mentorid?: number | null
  }

  export type projectUpdateInput = {
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: projectUpdateskillsInput | string[]
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableIntFieldUpdateOperationsInput | number | null
    mentorid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type projectUncheckedUpdateInput = {
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: projectUpdateskillsInput | string[]
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    owner?: NullableIntFieldUpdateOperationsInput | number | null
    mentorid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type projectCreateManyInput = {
    tittle?: string | null
    description?: string | null
    category?: string | null
    duration?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    priority?: string | null
    skills?: projectCreateskillsInput | string[]
    start_date?: string | null
    end_date?: string | null
    requirements?: string | null
    id?: number
    owner?: number | null
    mentorid?: number | null
  }

  export type projectUpdateManyMutationInput = {
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: projectUpdateskillsInput | string[]
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableIntFieldUpdateOperationsInput | number | null
    mentorid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type projectUncheckedUpdateManyInput = {
    tittle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: projectUpdateskillsInput | string[]
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    owner?: NullableIntFieldUpdateOperationsInput | number | null
    mentorid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type valueCreateInput = {
    mentor_value_id: number
    hour_value?: string | null
    days_a_week?: string | null
  }

  export type valueUncheckedCreateInput = {
    mentor_value_id: number
    hour_value?: string | null
    days_a_week?: string | null
  }

  export type valueUpdateInput = {
    mentor_value_id?: IntFieldUpdateOperationsInput | number
    hour_value?: NullableStringFieldUpdateOperationsInput | string | null
    days_a_week?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type valueUncheckedUpdateInput = {
    mentor_value_id?: IntFieldUpdateOperationsInput | number
    hour_value?: NullableStringFieldUpdateOperationsInput | string | null
    days_a_week?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type valueCreateManyInput = {
    mentor_value_id: number
    hour_value?: string | null
    days_a_week?: string | null
  }

  export type valueUpdateManyMutationInput = {
    mentor_value_id?: IntFieldUpdateOperationsInput | number
    hour_value?: NullableStringFieldUpdateOperationsInput | string | null
    days_a_week?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type valueUncheckedUpdateManyInput = {
    mentor_value_id?: IntFieldUpdateOperationsInput | number
    hour_value?: NullableStringFieldUpdateOperationsInput | string | null
    days_a_week?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type inviteProjectidMentoridCompoundUniqueInput = {
    projectid: number
    mentorid: number
  }

  export type inviteCountOrderByAggregateInput = {
    id?: SortOrder
    projectid?: SortOrder
    mentorid?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    response_message?: SortOrder
  }

  export type inviteAvgOrderByAggregateInput = {
    id?: SortOrder
    projectid?: SortOrder
    mentorid?: SortOrder
  }

  export type inviteMaxOrderByAggregateInput = {
    id?: SortOrder
    projectid?: SortOrder
    mentorid?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    response_message?: SortOrder
  }

  export type inviteMinOrderByAggregateInput = {
    id?: SortOrder
    projectid?: SortOrder
    mentorid?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    response_message?: SortOrder
  }

  export type inviteSumOrderByAggregateInput = {
    id?: SortOrder
    projectid?: SortOrder
    mentorid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type mentorCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    linkedin?: SortOrder
    ocuppation?: SortOrder
    exp?: SortOrder
    bio?: SortOrder
    password?: SortOrder
    skill?: SortOrder
    disponibility?: SortOrder
    weekly_availability?: SortOrder
    hourly_rate?: SortOrder
    admin?: SortOrder
  }

  export type mentorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mentorMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    linkedin?: SortOrder
    ocuppation?: SortOrder
    exp?: SortOrder
    bio?: SortOrder
    password?: SortOrder
    disponibility?: SortOrder
    weekly_availability?: SortOrder
    hourly_rate?: SortOrder
    admin?: SortOrder
  }

  export type mentorMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    linkedin?: SortOrder
    ocuppation?: SortOrder
    exp?: SortOrder
    bio?: SortOrder
    password?: SortOrder
    disponibility?: SortOrder
    weekly_availability?: SortOrder
    hourly_rate?: SortOrder
    admin?: SortOrder
  }

  export type mentorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type projectCountOrderByAggregateInput = {
    tittle?: SortOrder
    description?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    budget?: SortOrder
    priority?: SortOrder
    skills?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    requirements?: SortOrder
    id?: SortOrder
    owner?: SortOrder
    mentorid?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    budget?: SortOrder
    id?: SortOrder
    owner?: SortOrder
    mentorid?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    tittle?: SortOrder
    description?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    budget?: SortOrder
    priority?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    requirements?: SortOrder
    id?: SortOrder
    owner?: SortOrder
    mentorid?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    tittle?: SortOrder
    description?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    budget?: SortOrder
    priority?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    requirements?: SortOrder
    id?: SortOrder
    owner?: SortOrder
    mentorid?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    budget?: SortOrder
    id?: SortOrder
    owner?: SortOrder
    mentorid?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type valueCountOrderByAggregateInput = {
    mentor_value_id?: SortOrder
    hour_value?: SortOrder
    days_a_week?: SortOrder
  }

  export type valueAvgOrderByAggregateInput = {
    mentor_value_id?: SortOrder
  }

  export type valueMaxOrderByAggregateInput = {
    mentor_value_id?: SortOrder
    hour_value?: SortOrder
    days_a_week?: SortOrder
  }

  export type valueMinOrderByAggregateInput = {
    mentor_value_id?: SortOrder
    hour_value?: SortOrder
    days_a_week?: SortOrder
  }

  export type valueSumOrderByAggregateInput = {
    mentor_value_id?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type mentorCreateskillInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type mentorUpdateskillInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type projectCreateskillsInput = {
    set: string[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type projectUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}