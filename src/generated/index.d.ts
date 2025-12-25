/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Otp
 *
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>;
/**
 * Model OtpSession
 *
 */
export type OtpSession = $Result.DefaultSelection<Prisma.$OtpSessionPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Product
 *
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>;
/**
 * Model Image
 *
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>;
/**
 * Model Address
 *
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const ProductCategory: {
    MOBILE: 'MOBILE';
    LAPTOP: 'LAPTOP';
    WATCH: 'WATCH';
    OTHER: 'OTHER';
  };

  export type ProductCategory =
    (typeof ProductCategory)[keyof typeof ProductCategory];

  export const UserRole: {
    user: 'user';
    admin: 'admin';
  };

  export type UserRole = (typeof UserRole)[keyof typeof UserRole];
}

export type ProductCategory = $Enums.ProductCategory;

export const ProductCategory: typeof $Enums.ProductCategory;

export type UserRole = $Enums.UserRole;

export const UserRole: typeof $Enums.UserRole;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Otps
 * const otps = await prisma.otp.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Otps
   * const otps = await prisma.otp.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Otps
   * const otps = await prisma.otp.findMany()
   * ```
   */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otpSession`: Exposes CRUD operations for the **OtpSession** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OtpSessions
   * const otpSessions = await prisma.otpSession.findMany()
   * ```
   */
  get otpSession(): Prisma.OtpSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Images
   * const images = await prisma.image.findMany()
   * ```
   */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Otp: 'Otp';
    OtpSession: 'OtpSession';
    User: 'User';
    Product: 'Product';
    Image: 'Image';
    Address: 'Address';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'otp'
        | 'otpSession'
        | 'user'
        | 'product'
        | 'image'
        | 'address';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>;
        fields: Prisma.OtpFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>;
          };
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>;
          };
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[];
          };
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>;
          };
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[];
          };
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>;
          };
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>;
          };
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[];
          };
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>;
          };
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOtp>;
          };
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OtpGroupByOutputType>[];
          };
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>;
            result: $Utils.Optional<OtpCountAggregateOutputType> | number;
          };
        };
      };
      OtpSession: {
        payload: Prisma.$OtpSessionPayload<ExtArgs>;
        fields: Prisma.OtpSessionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OtpSessionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpSessionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OtpSessionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpSessionPayload>;
          };
          findFirst: {
            args: Prisma.OtpSessionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpSessionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OtpSessionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpSessionPayload>;
          };
          findMany: {
            args: Prisma.OtpSessionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpSessionPayload>[];
          };
          create: {
            args: Prisma.OtpSessionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpSessionPayload>;
          };
          createMany: {
            args: Prisma.OtpSessionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OtpSessionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpSessionPayload>[];
          };
          delete: {
            args: Prisma.OtpSessionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpSessionPayload>;
          };
          update: {
            args: Prisma.OtpSessionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpSessionPayload>;
          };
          deleteMany: {
            args: Prisma.OtpSessionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OtpSessionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OtpSessionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpSessionPayload>[];
          };
          upsert: {
            args: Prisma.OtpSessionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OtpSessionPayload>;
          };
          aggregate: {
            args: Prisma.OtpSessionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOtpSession>;
          };
          groupBy: {
            args: Prisma.OtpSessionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OtpSessionGroupByOutputType>[];
          };
          count: {
            args: Prisma.OtpSessionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OtpSessionCountAggregateOutputType>
              | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>;
        fields: Prisma.ProductFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProduct>;
          };
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProductGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>;
            result: $Utils.Optional<ProductCountAggregateOutputType> | number;
          };
        };
      };
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>;
        fields: Prisma.ImageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[];
          };
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[];
          };
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[];
          };
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateImage>;
          };
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ImageGroupByOutputType>[];
          };
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>;
            result: $Utils.Optional<ImageCountAggregateOutputType> | number;
          };
        };
      };
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>;
        fields: Prisma.AddressFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[];
          };
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[];
          };
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[];
          };
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAddress>;
          };
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AddressGroupByOutputType>[];
          };
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>;
            result: $Utils.Optional<AddressCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
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
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    otp?: OtpOmit;
    otpSession?: OtpSessionOmit;
    user?: UserOmit;
    product?: ProductOmit;
    image?: ImageOmit;
    address?: AddressOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    addresses: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AddressWhereInput;
  };

  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    image: number;
  };

  export type ProductCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    image?: boolean | ProductCountOutputTypeCountImageArgs;
  };

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImageArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ImageWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null;
    _avg: OtpAvgAggregateOutputType | null;
    _sum: OtpSumAggregateOutputType | null;
    _min: OtpMinAggregateOutputType | null;
    _max: OtpMaxAggregateOutputType | null;
  };

  export type OtpAvgAggregateOutputType = {
    attempts: number | null;
  };

  export type OtpSumAggregateOutputType = {
    attempts: number | null;
  };

  export type OtpMinAggregateOutputType = {
    id: string | null;
    mobile: string | null;
    code: string | null;
    expiresAt: Date | null;
    used: boolean | null;
    attempts: number | null;
    createdAt: Date | null;
  };

  export type OtpMaxAggregateOutputType = {
    id: string | null;
    mobile: string | null;
    code: string | null;
    expiresAt: Date | null;
    used: boolean | null;
    attempts: number | null;
    createdAt: Date | null;
  };

  export type OtpCountAggregateOutputType = {
    id: number;
    mobile: number;
    code: number;
    expiresAt: number;
    used: number;
    attempts: number;
    createdAt: number;
    _all: number;
  };

  export type OtpAvgAggregateInputType = {
    attempts?: true;
  };

  export type OtpSumAggregateInputType = {
    attempts?: true;
  };

  export type OtpMinAggregateInputType = {
    id?: true;
    mobile?: true;
    code?: true;
    expiresAt?: true;
    used?: true;
    attempts?: true;
    createdAt?: true;
  };

  export type OtpMaxAggregateInputType = {
    id?: true;
    mobile?: true;
    code?: true;
    expiresAt?: true;
    used?: true;
    attempts?: true;
    createdAt?: true;
  };

  export type OtpCountAggregateInputType = {
    id?: true;
    mobile?: true;
    code?: true;
    expiresAt?: true;
    used?: true;
    attempts?: true;
    createdAt?: true;
    _all?: true;
  };

  export type OtpAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Otps
     **/
    _count?: true | OtpCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OtpAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OtpSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OtpMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OtpMaxAggregateInputType;
  };

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
    [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>;
  };

  export type OtpGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OtpWhereInput;
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[];
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum;
    having?: OtpScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OtpCountAggregateInputType | true;
    _avg?: OtpAvgAggregateInputType;
    _sum?: OtpSumAggregateInputType;
    _min?: OtpMinAggregateInputType;
    _max?: OtpMaxAggregateInputType;
  };

  export type OtpGroupByOutputType = {
    id: string;
    mobile: string;
    code: string;
    expiresAt: Date;
    used: boolean;
    attempts: number;
    createdAt: Date;
    _count: OtpCountAggregateOutputType | null;
    _avg: OtpAvgAggregateOutputType | null;
    _sum: OtpSumAggregateOutputType | null;
    _min: OtpMinAggregateOutputType | null;
    _max: OtpMaxAggregateOutputType | null;
  };

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OtpGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
          : GetScalarType<T[P], OtpGroupByOutputType[P]>;
      }
    >
  >;

  export type OtpSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mobile?: boolean;
      code?: boolean;
      expiresAt?: boolean;
      used?: boolean;
      attempts?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['otp']
  >;

  export type OtpSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mobile?: boolean;
      code?: boolean;
      expiresAt?: boolean;
      used?: boolean;
      attempts?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['otp']
  >;

  export type OtpSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mobile?: boolean;
      code?: boolean;
      expiresAt?: boolean;
      used?: boolean;
      attempts?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['otp']
  >;

  export type OtpSelectScalar = {
    id?: boolean;
    mobile?: boolean;
    code?: boolean;
    expiresAt?: boolean;
    used?: boolean;
    attempts?: boolean;
    createdAt?: boolean;
  };

  export type OtpOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'mobile' | 'code' | 'expiresAt' | 'used' | 'attempts' | 'createdAt',
    ExtArgs['result']['otp']
  >;

  export type $OtpPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Otp';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        mobile: string;
        code: string;
        expiresAt: Date;
        used: boolean;
        attempts: number;
        createdAt: Date;
      },
      ExtArgs['result']['otp']
    >;
    composites: {};
  };

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> =
    $Result.GetResult<Prisma.$OtpPayload, S>;

  type OtpCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OtpCountAggregateInputType | true;
  };

  export interface OtpDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Otp'];
      meta: { name: 'Otp' };
    };
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(
      args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Result.GetResult<
        Prisma.$OtpPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Result.GetResult<
        Prisma.$OtpPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(
      args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Result.GetResult<
        Prisma.$OtpPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Result.GetResult<
        Prisma.$OtpPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     *
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OtpFindManyArgs>(
      args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OtpPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     *
     */
    create<T extends OtpCreateArgs>(
      args: SelectSubset<T, OtpCreateArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Result.GetResult<
        Prisma.$OtpPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OtpCreateManyArgs>(
      args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OtpPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     *
     */
    delete<T extends OtpDeleteArgs>(
      args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Result.GetResult<
        Prisma.$OtpPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OtpUpdateArgs>(
      args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Result.GetResult<
        Prisma.$OtpPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OtpDeleteManyArgs>(
      args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OtpUpdateManyArgs>(
      args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OtpPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(
      args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Result.GetResult<
        Prisma.$OtpPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
     **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(
      args: Subset<T, OtpAggregateArgs>,
    ): Prisma.PrismaPromise<GetOtpAggregateType<T>>;

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
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
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetOtpGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Otp model
     */
    readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<'Otp', 'String'>;
    readonly mobile: FieldRef<'Otp', 'String'>;
    readonly code: FieldRef<'Otp', 'String'>;
    readonly expiresAt: FieldRef<'Otp', 'DateTime'>;
    readonly used: FieldRef<'Otp', 'Boolean'>;
    readonly attempts: FieldRef<'Otp', 'Int'>;
    readonly createdAt: FieldRef<'Otp', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput;
  };

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput;
  };

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[];
  };

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[];
  };

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otps.
     */
    skip?: number;
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[];
  };

  /**
   * Otp create
   */
  export type OtpCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>;
  };

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Otp update
   */
  export type OtpUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>;
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput;
  };

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>;
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput;
    /**
     * Limit how many Otps to update.
     */
    limit?: number;
  };

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>;
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput;
    /**
     * Limit how many Otps to update.
     */
    limit?: number;
  };

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput;
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>;
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>;
  };

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput;
  };

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput;
    /**
     * Limit how many Otps to delete.
     */
    limit?: number;
  };

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null;
  };

  /**
   * Model OtpSession
   */

  export type AggregateOtpSession = {
    _count: OtpSessionCountAggregateOutputType | null;
    _min: OtpSessionMinAggregateOutputType | null;
    _max: OtpSessionMaxAggregateOutputType | null;
  };

  export type OtpSessionMinAggregateOutputType = {
    id: string | null;
    mobile: string | null;
    apiKey: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
  };

  export type OtpSessionMaxAggregateOutputType = {
    id: string | null;
    mobile: string | null;
    apiKey: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
  };

  export type OtpSessionCountAggregateOutputType = {
    id: number;
    mobile: number;
    apiKey: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
  };

  export type OtpSessionMinAggregateInputType = {
    id?: true;
    mobile?: true;
    apiKey?: true;
    expiresAt?: true;
    createdAt?: true;
  };

  export type OtpSessionMaxAggregateInputType = {
    id?: true;
    mobile?: true;
    apiKey?: true;
    expiresAt?: true;
    createdAt?: true;
  };

  export type OtpSessionCountAggregateInputType = {
    id?: true;
    mobile?: true;
    apiKey?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
  };

  export type OtpSessionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OtpSession to aggregate.
     */
    where?: OtpSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtpSessions to fetch.
     */
    orderBy?:
      | OtpSessionOrderByWithRelationInput
      | OtpSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OtpSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtpSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtpSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OtpSessions
     **/
    _count?: true | OtpSessionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OtpSessionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OtpSessionMaxAggregateInputType;
  };

  export type GetOtpSessionAggregateType<T extends OtpSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateOtpSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpSession[P]>
      : GetScalarType<T[P], AggregateOtpSession[P]>;
  };

  export type OtpSessionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OtpSessionWhereInput;
    orderBy?:
      | OtpSessionOrderByWithAggregationInput
      | OtpSessionOrderByWithAggregationInput[];
    by: OtpSessionScalarFieldEnum[] | OtpSessionScalarFieldEnum;
    having?: OtpSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OtpSessionCountAggregateInputType | true;
    _min?: OtpSessionMinAggregateInputType;
    _max?: OtpSessionMaxAggregateInputType;
  };

  export type OtpSessionGroupByOutputType = {
    id: string;
    mobile: string;
    apiKey: string;
    expiresAt: Date;
    createdAt: Date;
    _count: OtpSessionCountAggregateOutputType | null;
    _min: OtpSessionMinAggregateOutputType | null;
    _max: OtpSessionMaxAggregateOutputType | null;
  };

  type GetOtpSessionGroupByPayload<T extends OtpSessionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OtpSessionGroupByOutputType, T['by']> & {
          [P in keyof T & keyof OtpSessionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpSessionGroupByOutputType[P]>
            : GetScalarType<T[P], OtpSessionGroupByOutputType[P]>;
        }
      >
    >;

  export type OtpSessionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mobile?: boolean;
      apiKey?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['otpSession']
  >;

  export type OtpSessionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mobile?: boolean;
      apiKey?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['otpSession']
  >;

  export type OtpSessionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      mobile?: boolean;
      apiKey?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['otpSession']
  >;

  export type OtpSessionSelectScalar = {
    id?: boolean;
    mobile?: boolean;
    apiKey?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
  };

  export type OtpSessionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'mobile' | 'apiKey' | 'expiresAt' | 'createdAt',
    ExtArgs['result']['otpSession']
  >;

  export type $OtpSessionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'OtpSession';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        mobile: string;
        apiKey: string;
        expiresAt: Date;
        createdAt: Date;
      },
      ExtArgs['result']['otpSession']
    >;
    composites: {};
  };

  type OtpSessionGetPayload<
    S extends boolean | null | undefined | OtpSessionDefaultArgs,
  > = $Result.GetResult<Prisma.$OtpSessionPayload, S>;

  type OtpSessionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OtpSessionFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: OtpSessionCountAggregateInputType | true;
  };

  export interface OtpSessionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['OtpSession'];
      meta: { name: 'OtpSession' };
    };
    /**
     * Find zero or one OtpSession that matches the filter.
     * @param {OtpSessionFindUniqueArgs} args - Arguments to find a OtpSession
     * @example
     * // Get one OtpSession
     * const otpSession = await prisma.otpSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpSessionFindUniqueArgs>(
      args: SelectSubset<T, OtpSessionFindUniqueArgs<ExtArgs>>,
    ): Prisma__OtpSessionClient<
      $Result.GetResult<
        Prisma.$OtpSessionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one OtpSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpSessionFindUniqueOrThrowArgs} args - Arguments to find a OtpSession
     * @example
     * // Get one OtpSession
     * const otpSession = await prisma.otpSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpSessionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OtpSessionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OtpSessionClient<
      $Result.GetResult<
        Prisma.$OtpSessionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OtpSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpSessionFindFirstArgs} args - Arguments to find a OtpSession
     * @example
     * // Get one OtpSession
     * const otpSession = await prisma.otpSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpSessionFindFirstArgs>(
      args?: SelectSubset<T, OtpSessionFindFirstArgs<ExtArgs>>,
    ): Prisma__OtpSessionClient<
      $Result.GetResult<
        Prisma.$OtpSessionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OtpSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpSessionFindFirstOrThrowArgs} args - Arguments to find a OtpSession
     * @example
     * // Get one OtpSession
     * const otpSession = await prisma.otpSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpSessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OtpSessionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OtpSessionClient<
      $Result.GetResult<
        Prisma.$OtpSessionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more OtpSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpSessions
     * const otpSessions = await prisma.otpSession.findMany()
     *
     * // Get first 10 OtpSessions
     * const otpSessions = await prisma.otpSession.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const otpSessionWithIdOnly = await prisma.otpSession.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OtpSessionFindManyArgs>(
      args?: SelectSubset<T, OtpSessionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OtpSessionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a OtpSession.
     * @param {OtpSessionCreateArgs} args - Arguments to create a OtpSession.
     * @example
     * // Create one OtpSession
     * const OtpSession = await prisma.otpSession.create({
     *   data: {
     *     // ... data to create a OtpSession
     *   }
     * })
     *
     */
    create<T extends OtpSessionCreateArgs>(
      args: SelectSubset<T, OtpSessionCreateArgs<ExtArgs>>,
    ): Prisma__OtpSessionClient<
      $Result.GetResult<
        Prisma.$OtpSessionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many OtpSessions.
     * @param {OtpSessionCreateManyArgs} args - Arguments to create many OtpSessions.
     * @example
     * // Create many OtpSessions
     * const otpSession = await prisma.otpSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OtpSessionCreateManyArgs>(
      args?: SelectSubset<T, OtpSessionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many OtpSessions and returns the data saved in the database.
     * @param {OtpSessionCreateManyAndReturnArgs} args - Arguments to create many OtpSessions.
     * @example
     * // Create many OtpSessions
     * const otpSession = await prisma.otpSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OtpSessions and only return the `id`
     * const otpSessionWithIdOnly = await prisma.otpSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OtpSessionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OtpSessionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OtpSessionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a OtpSession.
     * @param {OtpSessionDeleteArgs} args - Arguments to delete one OtpSession.
     * @example
     * // Delete one OtpSession
     * const OtpSession = await prisma.otpSession.delete({
     *   where: {
     *     // ... filter to delete one OtpSession
     *   }
     * })
     *
     */
    delete<T extends OtpSessionDeleteArgs>(
      args: SelectSubset<T, OtpSessionDeleteArgs<ExtArgs>>,
    ): Prisma__OtpSessionClient<
      $Result.GetResult<
        Prisma.$OtpSessionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one OtpSession.
     * @param {OtpSessionUpdateArgs} args - Arguments to update one OtpSession.
     * @example
     * // Update one OtpSession
     * const otpSession = await prisma.otpSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OtpSessionUpdateArgs>(
      args: SelectSubset<T, OtpSessionUpdateArgs<ExtArgs>>,
    ): Prisma__OtpSessionClient<
      $Result.GetResult<
        Prisma.$OtpSessionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more OtpSessions.
     * @param {OtpSessionDeleteManyArgs} args - Arguments to filter OtpSessions to delete.
     * @example
     * // Delete a few OtpSessions
     * const { count } = await prisma.otpSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OtpSessionDeleteManyArgs>(
      args?: SelectSubset<T, OtpSessionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OtpSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpSessions
     * const otpSession = await prisma.otpSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OtpSessionUpdateManyArgs>(
      args: SelectSubset<T, OtpSessionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OtpSessions and returns the data updated in the database.
     * @param {OtpSessionUpdateManyAndReturnArgs} args - Arguments to update many OtpSessions.
     * @example
     * // Update many OtpSessions
     * const otpSession = await prisma.otpSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OtpSessions and only return the `id`
     * const otpSessionWithIdOnly = await prisma.otpSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpSessionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OtpSessionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OtpSessionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one OtpSession.
     * @param {OtpSessionUpsertArgs} args - Arguments to update or create a OtpSession.
     * @example
     * // Update or create a OtpSession
     * const otpSession = await prisma.otpSession.upsert({
     *   create: {
     *     // ... data to create a OtpSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpSession we want to update
     *   }
     * })
     */
    upsert<T extends OtpSessionUpsertArgs>(
      args: SelectSubset<T, OtpSessionUpsertArgs<ExtArgs>>,
    ): Prisma__OtpSessionClient<
      $Result.GetResult<
        Prisma.$OtpSessionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of OtpSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpSessionCountArgs} args - Arguments to filter OtpSessions to count.
     * @example
     * // Count the number of OtpSessions
     * const count = await prisma.otpSession.count({
     *   where: {
     *     // ... the filter for the OtpSessions we want to count
     *   }
     * })
     **/
    count<T extends OtpSessionCountArgs>(
      args?: Subset<T, OtpSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpSessionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OtpSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpSessionAggregateArgs>(
      args: Subset<T, OtpSessionAggregateArgs>,
    ): Prisma.PrismaPromise<GetOtpSessionAggregateType<T>>;

    /**
     * Group by OtpSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpSessionGroupByArgs} args - Group by arguments.
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
      T extends OtpSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpSessionGroupByArgs['orderBy'] }
        : { orderBy?: OtpSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OtpSessionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOtpSessionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OtpSession model
     */
    readonly fields: OtpSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpSessionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the OtpSession model
   */
  interface OtpSessionFieldRefs {
    readonly id: FieldRef<'OtpSession', 'String'>;
    readonly mobile: FieldRef<'OtpSession', 'String'>;
    readonly apiKey: FieldRef<'OtpSession', 'String'>;
    readonly expiresAt: FieldRef<'OtpSession', 'DateTime'>;
    readonly createdAt: FieldRef<'OtpSession', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * OtpSession findUnique
   */
  export type OtpSessionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
    /**
     * Filter, which OtpSession to fetch.
     */
    where: OtpSessionWhereUniqueInput;
  };

  /**
   * OtpSession findUniqueOrThrow
   */
  export type OtpSessionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
    /**
     * Filter, which OtpSession to fetch.
     */
    where: OtpSessionWhereUniqueInput;
  };

  /**
   * OtpSession findFirst
   */
  export type OtpSessionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
    /**
     * Filter, which OtpSession to fetch.
     */
    where?: OtpSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtpSessions to fetch.
     */
    orderBy?:
      | OtpSessionOrderByWithRelationInput
      | OtpSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OtpSessions.
     */
    cursor?: OtpSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtpSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtpSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OtpSessions.
     */
    distinct?: OtpSessionScalarFieldEnum | OtpSessionScalarFieldEnum[];
  };

  /**
   * OtpSession findFirstOrThrow
   */
  export type OtpSessionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
    /**
     * Filter, which OtpSession to fetch.
     */
    where?: OtpSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtpSessions to fetch.
     */
    orderBy?:
      | OtpSessionOrderByWithRelationInput
      | OtpSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OtpSessions.
     */
    cursor?: OtpSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtpSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtpSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OtpSessions.
     */
    distinct?: OtpSessionScalarFieldEnum | OtpSessionScalarFieldEnum[];
  };

  /**
   * OtpSession findMany
   */
  export type OtpSessionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
    /**
     * Filter, which OtpSessions to fetch.
     */
    where?: OtpSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtpSessions to fetch.
     */
    orderBy?:
      | OtpSessionOrderByWithRelationInput
      | OtpSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OtpSessions.
     */
    cursor?: OtpSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtpSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtpSessions.
     */
    skip?: number;
    distinct?: OtpSessionScalarFieldEnum | OtpSessionScalarFieldEnum[];
  };

  /**
   * OtpSession create
   */
  export type OtpSessionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
    /**
     * The data needed to create a OtpSession.
     */
    data: XOR<OtpSessionCreateInput, OtpSessionUncheckedCreateInput>;
  };

  /**
   * OtpSession createMany
   */
  export type OtpSessionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OtpSessions.
     */
    data: OtpSessionCreateManyInput | OtpSessionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OtpSession createManyAndReturn
   */
  export type OtpSessionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
    /**
     * The data used to create many OtpSessions.
     */
    data: OtpSessionCreateManyInput | OtpSessionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OtpSession update
   */
  export type OtpSessionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
    /**
     * The data needed to update a OtpSession.
     */
    data: XOR<OtpSessionUpdateInput, OtpSessionUncheckedUpdateInput>;
    /**
     * Choose, which OtpSession to update.
     */
    where: OtpSessionWhereUniqueInput;
  };

  /**
   * OtpSession updateMany
   */
  export type OtpSessionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OtpSessions.
     */
    data: XOR<
      OtpSessionUpdateManyMutationInput,
      OtpSessionUncheckedUpdateManyInput
    >;
    /**
     * Filter which OtpSessions to update
     */
    where?: OtpSessionWhereInput;
    /**
     * Limit how many OtpSessions to update.
     */
    limit?: number;
  };

  /**
   * OtpSession updateManyAndReturn
   */
  export type OtpSessionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
    /**
     * The data used to update OtpSessions.
     */
    data: XOR<
      OtpSessionUpdateManyMutationInput,
      OtpSessionUncheckedUpdateManyInput
    >;
    /**
     * Filter which OtpSessions to update
     */
    where?: OtpSessionWhereInput;
    /**
     * Limit how many OtpSessions to update.
     */
    limit?: number;
  };

  /**
   * OtpSession upsert
   */
  export type OtpSessionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
    /**
     * The filter to search for the OtpSession to update in case it exists.
     */
    where: OtpSessionWhereUniqueInput;
    /**
     * In case the OtpSession found by the `where` argument doesn't exist, create a new OtpSession with this data.
     */
    create: XOR<OtpSessionCreateInput, OtpSessionUncheckedCreateInput>;
    /**
     * In case the OtpSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpSessionUpdateInput, OtpSessionUncheckedUpdateInput>;
  };

  /**
   * OtpSession delete
   */
  export type OtpSessionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
    /**
     * Filter which OtpSession to delete.
     */
    where: OtpSessionWhereUniqueInput;
  };

  /**
   * OtpSession deleteMany
   */
  export type OtpSessionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OtpSessions to delete
     */
    where?: OtpSessionWhereInput;
    /**
     * Limit how many OtpSessions to delete.
     */
    limit?: number;
  };

  /**
   * OtpSession without action
   */
  export type OtpSessionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OtpSession
     */
    select?: OtpSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtpSession
     */
    omit?: OtpSessionOmit<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    userName: string | null;
    email: string | null;
    mobile: string | null;
    password: string | null;
    ban: boolean | null;
    role: $Enums.UserRole | null;
    avatarUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    userName: string | null;
    email: string | null;
    mobile: string | null;
    password: string | null;
    ban: boolean | null;
    role: $Enums.UserRole | null;
    avatarUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    userName: number;
    email: number;
    mobile: number;
    password: number;
    ban: number;
    role: number;
    avatarUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    userName?: true;
    email?: true;
    mobile?: true;
    password?: true;
    ban?: true;
    role?: true;
    avatarUrl?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    userName?: true;
    email?: true;
    mobile?: true;
    password?: true;
    ban?: true;
    role?: true;
    avatarUrl?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    userName?: true;
    email?: true;
    mobile?: true;
    password?: true;
    ban?: true;
    role?: true;
    avatarUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    userName: string;
    email: string;
    mobile: string;
    password: string;
    ban: boolean;
    role: $Enums.UserRole;
    avatarUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userName?: boolean;
      email?: boolean;
      mobile?: boolean;
      password?: boolean;
      ban?: boolean;
      role?: boolean;
      avatarUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      addresses?: boolean | User$addressesArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userName?: boolean;
      email?: boolean;
      mobile?: boolean;
      password?: boolean;
      ban?: boolean;
      role?: boolean;
      avatarUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userName?: boolean;
      email?: boolean;
      mobile?: boolean;
      password?: boolean;
      ban?: boolean;
      role?: boolean;
      avatarUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    userName?: boolean;
    email?: boolean;
    mobile?: boolean;
    password?: boolean;
    ban?: boolean;
    role?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'userName'
    | 'email'
    | 'mobile'
    | 'password'
    | 'ban'
    | 'role'
    | 'avatarUrl'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    addresses?: boolean | User$addressesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      addresses: Prisma.$AddressPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userName: string;
        email: string;
        mobile: string;
        password: string;
        ban: boolean;
        role: $Enums.UserRole;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    addresses<T extends User$addressesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$addressesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AddressPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly userName: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly mobile: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly ban: FieldRef<'User', 'Boolean'>;
    readonly role: FieldRef<'User', 'UserRole'>;
    readonly avatarUrl: FieldRef<'User', 'String'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.addresses
   */
  export type User$addressesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    where?: AddressWhereInput;
    orderBy?:
      | AddressOrderByWithRelationInput
      | AddressOrderByWithRelationInput[];
    cursor?: AddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  export type ProductAvgAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type ProductSumAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type ProductMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    catagory: $Enums.ProductCategory | null;
    description: string | null;
    price: number | null;
    quantity: number | null;
  };

  export type ProductMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    catagory: $Enums.ProductCategory | null;
    description: string | null;
    price: number | null;
    quantity: number | null;
  };

  export type ProductCountAggregateOutputType = {
    id: number;
    name: number;
    catagory: number;
    description: number;
    price: number;
    quantity: number;
    _all: number;
  };

  export type ProductAvgAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type ProductSumAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type ProductMinAggregateInputType = {
    id?: true;
    name?: true;
    catagory?: true;
    description?: true;
    price?: true;
    quantity?: true;
  };

  export type ProductMaxAggregateInputType = {
    id?: true;
    name?: true;
    catagory?: true;
    description?: true;
    price?: true;
    quantity?: true;
  };

  export type ProductCountAggregateInputType = {
    id?: true;
    name?: true;
    catagory?: true;
    description?: true;
    price?: true;
    quantity?: true;
    _all?: true;
  };

  export type ProductAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
     **/
    _count?: true | ProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductMaxAggregateInputType;
  };

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>;
  };

  export type ProductGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
    orderBy?:
      | ProductOrderByWithAggregationInput
      | ProductOrderByWithAggregationInput[];
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum;
    having?: ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
  };

  export type ProductGroupByOutputType = {
    id: string;
    name: string;
    catagory: $Enums.ProductCategory;
    description: string | null;
    price: number | null;
    quantity: number | null;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  type GetProductGroupByPayload<T extends ProductGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProductGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProductGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>;
        }
      >
    >;

  export type ProductSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      catagory?: boolean;
      description?: boolean;
      price?: boolean;
      quantity?: boolean;
      image?: boolean | Product$imageArgs<ExtArgs>;
      _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      catagory?: boolean;
      description?: boolean;
      price?: boolean;
      quantity?: boolean;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      catagory?: boolean;
      description?: boolean;
      price?: boolean;
      quantity?: boolean;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectScalar = {
    id?: boolean;
    name?: boolean;
    catagory?: boolean;
    description?: boolean;
    price?: boolean;
    quantity?: boolean;
  };

  export type ProductOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'catagory' | 'description' | 'price' | 'quantity',
    ExtArgs['result']['product']
  >;
  export type ProductInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    image?: boolean | Product$imageArgs<ExtArgs>;
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ProductIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type ProductIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $ProductPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Product';
    objects: {
      image: Prisma.$ImagePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        catagory: $Enums.ProductCategory;
        description: string | null;
        price: number | null;
        quantity: number | null;
      },
      ExtArgs['result']['product']
    >;
    composites: {};
  };

  type ProductGetPayload<
    S extends boolean | null | undefined | ProductDefaultArgs,
  > = $Result.GetResult<Prisma.$ProductPayload, S>;

  type ProductCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
  };

  export interface ProductDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Product'];
      meta: { name: 'Product' };
    };
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     */
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     */
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(
      args: Subset<T, ProductAggregateArgs>,
    ): Prisma.PrismaPromise<GetProductAggregateType<T>>;

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProductGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Product model
     */
    readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    image<T extends Product$imageArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$imageArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ImagePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<'Product', 'String'>;
    readonly name: FieldRef<'Product', 'String'>;
    readonly catagory: FieldRef<'Product', 'ProductCategory'>;
    readonly description: FieldRef<'Product', 'String'>;
    readonly price: FieldRef<'Product', 'Float'>;
    readonly quantity: FieldRef<'Product', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product create
   */
  export type ProductCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
  };

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Product update
   */
  export type ProductUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
  };

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
  };

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput;
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
  };

  /**
   * Product delete
   */
  export type ProductDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to delete.
     */
    limit?: number;
  };

  /**
   * Product.image
   */
  export type Product$imageArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    where?: ImageWhereInput;
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    cursor?: ImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Product without action
   */
  export type ProductDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
  };

  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
  };

  export type ImageMinAggregateOutputType = {
    id: string | null;
    image: string | null;
    productId: string | null;
  };

  export type ImageMaxAggregateOutputType = {
    id: string | null;
    image: string | null;
    productId: string | null;
  };

  export type ImageCountAggregateOutputType = {
    id: number;
    image: number;
    productId: number;
    _all: number;
  };

  export type ImageMinAggregateInputType = {
    id?: true;
    image?: true;
    productId?: true;
  };

  export type ImageMaxAggregateInputType = {
    id?: true;
    image?: true;
    productId?: true;
  };

  export type ImageCountAggregateInputType = {
    id?: true;
    image?: true;
    productId?: true;
    _all?: true;
  };

  export type ImageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Images
     **/
    _count?: true | ImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ImageMaxAggregateInputType;
  };

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
    [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>;
  };

  export type ImageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ImageWhereInput;
    orderBy?:
      | ImageOrderByWithAggregationInput
      | ImageOrderByWithAggregationInput[];
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum;
    having?: ImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ImageCountAggregateInputType | true;
    _min?: ImageMinAggregateInputType;
    _max?: ImageMaxAggregateInputType;
  };

  export type ImageGroupByOutputType = {
    id: string;
    image: string;
    productId: string | null;
    _count: ImageCountAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
  };

  type GetImageGroupByPayload<T extends ImageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ImageGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ImageGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>;
        }
      >
    >;

  export type ImageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      image?: boolean;
      productId?: boolean;
      product?: boolean | Image$productArgs<ExtArgs>;
    },
    ExtArgs['result']['image']
  >;

  export type ImageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      image?: boolean;
      productId?: boolean;
      product?: boolean | Image$productArgs<ExtArgs>;
    },
    ExtArgs['result']['image']
  >;

  export type ImageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      image?: boolean;
      productId?: boolean;
      product?: boolean | Image$productArgs<ExtArgs>;
    },
    ExtArgs['result']['image']
  >;

  export type ImageSelectScalar = {
    id?: boolean;
    image?: boolean;
    productId?: boolean;
  };

  export type ImageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'image' | 'productId',
    ExtArgs['result']['image']
  >;
  export type ImageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | Image$productArgs<ExtArgs>;
  };
  export type ImageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | Image$productArgs<ExtArgs>;
  };
  export type ImageIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | Image$productArgs<ExtArgs>;
  };

  export type $ImagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Image';
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        image: string;
        productId: string | null;
      },
      ExtArgs['result']['image']
    >;
    composites: {};
  };

  type ImageGetPayload<
    S extends boolean | null | undefined | ImageDefaultArgs,
  > = $Result.GetResult<Prisma.$ImagePayload, S>;

  type ImageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ImageCountAggregateInputType | true;
  };

  export interface ImageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Image'];
      meta: { name: 'Image' };
    };
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     *
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     *
     */
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ImageCreateManyArgs>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     *
     */
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
     **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(
      args: Subset<T, ImageAggregateArgs>,
    ): Prisma.PrismaPromise<GetImageAggregateType<T>>;

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetImageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Image model
     */
    readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    product<T extends Image$productArgs<ExtArgs> = {}>(
      args?: Subset<T, Image$productArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<'Image', 'String'>;
    readonly image: FieldRef<'Image', 'String'>;
    readonly productId: FieldRef<'Image', 'String'>;
  }

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image create
   */
  export type ImageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>;
  };

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Image update
   */
  export type ImageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>;
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>;
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput;
    /**
     * Limit how many Images to update.
     */
    limit?: number;
  };

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>;
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput;
    /**
     * Limit how many Images to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput;
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>;
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>;
  };

  /**
   * Image delete
   */
  export type ImageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput;
    /**
     * Limit how many Images to delete.
     */
    limit?: number;
  };

  /**
   * Image.product
   */
  export type Image$productArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    where?: ProductWhereInput;
  };

  /**
   * Image without action
   */
  export type ImageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
  };

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null;
    _min: AddressMinAggregateOutputType | null;
    _max: AddressMaxAggregateOutputType | null;
  };

  export type AddressMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    address: string | null;
    city: string | null;
    Province: string | null;
  };

  export type AddressMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    address: string | null;
    city: string | null;
    Province: string | null;
  };

  export type AddressCountAggregateOutputType = {
    id: number;
    userId: number;
    address: number;
    city: number;
    Province: number;
    _all: number;
  };

  export type AddressMinAggregateInputType = {
    id?: true;
    userId?: true;
    address?: true;
    city?: true;
    Province?: true;
  };

  export type AddressMaxAggregateInputType = {
    id?: true;
    userId?: true;
    address?: true;
    city?: true;
    Province?: true;
  };

  export type AddressCountAggregateInputType = {
    id?: true;
    userId?: true;
    address?: true;
    city?: true;
    Province?: true;
    _all?: true;
  };

  export type AddressAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?:
      | AddressOrderByWithRelationInput
      | AddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Addresses
     **/
    _count?: true | AddressCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AddressMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AddressMaxAggregateInputType;
  };

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
    [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>;
  };

  export type AddressGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AddressWhereInput;
    orderBy?:
      | AddressOrderByWithAggregationInput
      | AddressOrderByWithAggregationInput[];
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum;
    having?: AddressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AddressCountAggregateInputType | true;
    _min?: AddressMinAggregateInputType;
    _max?: AddressMaxAggregateInputType;
  };

  export type AddressGroupByOutputType = {
    id: string;
    userId: string;
    address: string;
    city: string;
    Province: string;
    _count: AddressCountAggregateOutputType | null;
    _min: AddressMinAggregateOutputType | null;
    _max: AddressMaxAggregateOutputType | null;
  };

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AddressGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AddressGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>;
        }
      >
    >;

  export type AddressSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      address?: boolean;
      city?: boolean;
      Province?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['address']
  >;

  export type AddressSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      address?: boolean;
      city?: boolean;
      Province?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['address']
  >;

  export type AddressSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      address?: boolean;
      city?: boolean;
      Province?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['address']
  >;

  export type AddressSelectScalar = {
    id?: boolean;
    userId?: boolean;
    address?: boolean;
    city?: boolean;
    Province?: boolean;
  };

  export type AddressOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'address' | 'city' | 'Province',
    ExtArgs['result']['address']
  >;
  export type AddressInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type AddressIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type AddressIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $AddressPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Address';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        address: string;
        city: string;
        Province: string;
      },
      ExtArgs['result']['address']
    >;
    composites: {};
  };

  type AddressGetPayload<
    S extends boolean | null | undefined | AddressDefaultArgs,
  > = $Result.GetResult<Prisma.$AddressPayload, S>;

  type AddressCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AddressCountAggregateInputType | true;
  };

  export interface AddressDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Address'];
      meta: { name: 'Address' };
    };
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(
      args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>,
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(
      args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>,
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     *
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AddressFindManyArgs>(
      args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     *
     */
    create<T extends AddressCreateArgs>(
      args: SelectSubset<T, AddressCreateArgs<ExtArgs>>,
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AddressCreateManyArgs>(
      args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     *
     */
    delete<T extends AddressDeleteArgs>(
      args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>,
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AddressUpdateArgs>(
      args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>,
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AddressDeleteManyArgs>(
      args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AddressUpdateManyArgs>(
      args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(
      args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>,
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
     **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(
      args: Subset<T, AddressAggregateArgs>,
    ): Prisma.PrismaPromise<GetAddressAggregateType<T>>;

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAddressGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Address model
     */
    readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<'Address', 'String'>;
    readonly userId: FieldRef<'Address', 'String'>;
    readonly address: FieldRef<'Address', 'String'>;
    readonly city: FieldRef<'Address', 'String'>;
    readonly Province: FieldRef<'Address', 'String'>;
  }

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput;
  };

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput;
  };

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?:
      | AddressOrderByWithRelationInput
      | AddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[];
  };

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?:
      | AddressOrderByWithRelationInput
      | AddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[];
  };

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?:
      | AddressOrderByWithRelationInput
      | AddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number;
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[];
  };

  /**
   * Address create
   */
  export type AddressCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>;
  };

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Address update
   */
  export type AddressUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>;
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput;
  };

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>;
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput;
    /**
     * Limit how many Addresses to update.
     */
    limit?: number;
  };

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>;
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput;
    /**
     * Limit how many Addresses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput;
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>;
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>;
  };

  /**
   * Address delete
   */
  export type AddressDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput;
  };

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput;
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number;
  };

  /**
   * Address without action
   */
  export type AddressDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const OtpScalarFieldEnum: {
    id: 'id';
    mobile: 'mobile';
    code: 'code';
    expiresAt: 'expiresAt';
    used: 'used';
    attempts: 'attempts';
    createdAt: 'createdAt';
  };

  export type OtpScalarFieldEnum =
    (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum];

  export const OtpSessionScalarFieldEnum: {
    id: 'id';
    mobile: 'mobile';
    apiKey: 'apiKey';
    expiresAt: 'expiresAt';
    createdAt: 'createdAt';
  };

  export type OtpSessionScalarFieldEnum =
    (typeof OtpSessionScalarFieldEnum)[keyof typeof OtpSessionScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    userName: 'userName';
    email: 'email';
    mobile: 'mobile';
    password: 'password';
    ban: 'ban';
    role: 'role';
    avatarUrl: 'avatarUrl';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ProductScalarFieldEnum: {
    id: 'id';
    name: 'name';
    catagory: 'catagory';
    description: 'description';
    price: 'price';
    quantity: 'quantity';
  };

  export type ProductScalarFieldEnum =
    (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];

  export const ImageScalarFieldEnum: {
    id: 'id';
    image: 'image';
    productId: 'productId';
  };

  export type ImageScalarFieldEnum =
    (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum];

  export const AddressScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    address: 'address';
    city: 'city';
    Province: 'Province';
  };

  export type AddressScalarFieldEnum =
    (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserRole'
  >;

  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserRole[]'
  >;

  /**
   * Reference to a field of type 'ProductCategory'
   */
  export type EnumProductCategoryFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ProductCategory'>;

  /**
   * Reference to a field of type 'ProductCategory[]'
   */
  export type ListEnumProductCategoryFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ProductCategory[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[];
    OR?: OtpWhereInput[];
    NOT?: OtpWhereInput | OtpWhereInput[];
    id?: StringFilter<'Otp'> | string;
    mobile?: StringFilter<'Otp'> | string;
    code?: StringFilter<'Otp'> | string;
    expiresAt?: DateTimeFilter<'Otp'> | Date | string;
    used?: BoolFilter<'Otp'> | boolean;
    attempts?: IntFilter<'Otp'> | number;
    createdAt?: DateTimeFilter<'Otp'> | Date | string;
  };

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder;
    mobile?: SortOrder;
    code?: SortOrder;
    expiresAt?: SortOrder;
    used?: SortOrder;
    attempts?: SortOrder;
    createdAt?: SortOrder;
  };

  export type OtpWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OtpWhereInput | OtpWhereInput[];
      OR?: OtpWhereInput[];
      NOT?: OtpWhereInput | OtpWhereInput[];
      mobile?: StringFilter<'Otp'> | string;
      code?: StringFilter<'Otp'> | string;
      expiresAt?: DateTimeFilter<'Otp'> | Date | string;
      used?: BoolFilter<'Otp'> | boolean;
      attempts?: IntFilter<'Otp'> | number;
      createdAt?: DateTimeFilter<'Otp'> | Date | string;
    },
    'id'
  >;

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder;
    mobile?: SortOrder;
    code?: SortOrder;
    expiresAt?: SortOrder;
    used?: SortOrder;
    attempts?: SortOrder;
    createdAt?: SortOrder;
    _count?: OtpCountOrderByAggregateInput;
    _avg?: OtpAvgOrderByAggregateInput;
    _max?: OtpMaxOrderByAggregateInput;
    _min?: OtpMinOrderByAggregateInput;
    _sum?: OtpSumOrderByAggregateInput;
  };

  export type OtpScalarWhereWithAggregatesInput = {
    AND?:
      | OtpScalarWhereWithAggregatesInput
      | OtpScalarWhereWithAggregatesInput[];
    OR?: OtpScalarWhereWithAggregatesInput[];
    NOT?:
      | OtpScalarWhereWithAggregatesInput
      | OtpScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Otp'> | string;
    mobile?: StringWithAggregatesFilter<'Otp'> | string;
    code?: StringWithAggregatesFilter<'Otp'> | string;
    expiresAt?: DateTimeWithAggregatesFilter<'Otp'> | Date | string;
    used?: BoolWithAggregatesFilter<'Otp'> | boolean;
    attempts?: IntWithAggregatesFilter<'Otp'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Otp'> | Date | string;
  };

  export type OtpSessionWhereInput = {
    AND?: OtpSessionWhereInput | OtpSessionWhereInput[];
    OR?: OtpSessionWhereInput[];
    NOT?: OtpSessionWhereInput | OtpSessionWhereInput[];
    id?: StringFilter<'OtpSession'> | string;
    mobile?: StringFilter<'OtpSession'> | string;
    apiKey?: StringFilter<'OtpSession'> | string;
    expiresAt?: DateTimeFilter<'OtpSession'> | Date | string;
    createdAt?: DateTimeFilter<'OtpSession'> | Date | string;
  };

  export type OtpSessionOrderByWithRelationInput = {
    id?: SortOrder;
    mobile?: SortOrder;
    apiKey?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type OtpSessionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      apiKey?: string;
      AND?: OtpSessionWhereInput | OtpSessionWhereInput[];
      OR?: OtpSessionWhereInput[];
      NOT?: OtpSessionWhereInput | OtpSessionWhereInput[];
      mobile?: StringFilter<'OtpSession'> | string;
      expiresAt?: DateTimeFilter<'OtpSession'> | Date | string;
      createdAt?: DateTimeFilter<'OtpSession'> | Date | string;
    },
    'id' | 'apiKey'
  >;

  export type OtpSessionOrderByWithAggregationInput = {
    id?: SortOrder;
    mobile?: SortOrder;
    apiKey?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    _count?: OtpSessionCountOrderByAggregateInput;
    _max?: OtpSessionMaxOrderByAggregateInput;
    _min?: OtpSessionMinOrderByAggregateInput;
  };

  export type OtpSessionScalarWhereWithAggregatesInput = {
    AND?:
      | OtpSessionScalarWhereWithAggregatesInput
      | OtpSessionScalarWhereWithAggregatesInput[];
    OR?: OtpSessionScalarWhereWithAggregatesInput[];
    NOT?:
      | OtpSessionScalarWhereWithAggregatesInput
      | OtpSessionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'OtpSession'> | string;
    mobile?: StringWithAggregatesFilter<'OtpSession'> | string;
    apiKey?: StringWithAggregatesFilter<'OtpSession'> | string;
    expiresAt?: DateTimeWithAggregatesFilter<'OtpSession'> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<'OtpSession'> | Date | string;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    userName?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    mobile?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    ban?: BoolFilter<'User'> | boolean;
    role?: EnumUserRoleFilter<'User'> | $Enums.UserRole;
    avatarUrl?: StringNullableFilter<'User'> | string | null;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    addresses?: AddressListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    userName?: SortOrder;
    email?: SortOrder;
    mobile?: SortOrder;
    password?: SortOrder;
    ban?: SortOrder;
    role?: SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    addresses?: AddressOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      userName?: StringFilter<'User'> | string;
      mobile?: StringFilter<'User'> | string;
      password?: StringFilter<'User'> | string;
      ban?: BoolFilter<'User'> | boolean;
      role?: EnumUserRoleFilter<'User'> | $Enums.UserRole;
      avatarUrl?: StringNullableFilter<'User'> | string | null;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      addresses?: AddressListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    userName?: SortOrder;
    email?: SortOrder;
    mobile?: SortOrder;
    password?: SortOrder;
    ban?: SortOrder;
    role?: SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    userName?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    mobile?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    ban?: BoolWithAggregatesFilter<'User'> | boolean;
    role?: EnumUserRoleWithAggregatesFilter<'User'> | $Enums.UserRole;
    avatarUrl?: StringNullableWithAggregatesFilter<'User'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[];
    OR?: ProductWhereInput[];
    NOT?: ProductWhereInput | ProductWhereInput[];
    id?: StringFilter<'Product'> | string;
    name?: StringFilter<'Product'> | string;
    catagory?: EnumProductCategoryFilter<'Product'> | $Enums.ProductCategory;
    description?: StringNullableFilter<'Product'> | string | null;
    price?: FloatNullableFilter<'Product'> | number | null;
    quantity?: IntNullableFilter<'Product'> | number | null;
    image?: ImageListRelationFilter;
  };

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    catagory?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    image?: ImageOrderByRelationAggregateInput;
  };

  export type ProductWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ProductWhereInput | ProductWhereInput[];
      OR?: ProductWhereInput[];
      NOT?: ProductWhereInput | ProductWhereInput[];
      name?: StringFilter<'Product'> | string;
      catagory?: EnumProductCategoryFilter<'Product'> | $Enums.ProductCategory;
      description?: StringNullableFilter<'Product'> | string | null;
      price?: FloatNullableFilter<'Product'> | number | null;
      quantity?: IntNullableFilter<'Product'> | number | null;
      image?: ImageListRelationFilter;
    },
    'id'
  >;

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    catagory?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    _count?: ProductCountOrderByAggregateInput;
    _avg?: ProductAvgOrderByAggregateInput;
    _max?: ProductMaxOrderByAggregateInput;
    _min?: ProductMinOrderByAggregateInput;
    _sum?: ProductSumOrderByAggregateInput;
  };

  export type ProductScalarWhereWithAggregatesInput = {
    AND?:
      | ProductScalarWhereWithAggregatesInput
      | ProductScalarWhereWithAggregatesInput[];
    OR?: ProductScalarWhereWithAggregatesInput[];
    NOT?:
      | ProductScalarWhereWithAggregatesInput
      | ProductScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Product'> | string;
    name?: StringWithAggregatesFilter<'Product'> | string;
    catagory?:
      | EnumProductCategoryWithAggregatesFilter<'Product'>
      | $Enums.ProductCategory;
    description?: StringNullableWithAggregatesFilter<'Product'> | string | null;
    price?: FloatNullableWithAggregatesFilter<'Product'> | number | null;
    quantity?: IntNullableWithAggregatesFilter<'Product'> | number | null;
  };

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[];
    OR?: ImageWhereInput[];
    NOT?: ImageWhereInput | ImageWhereInput[];
    id?: StringFilter<'Image'> | string;
    image?: StringFilter<'Image'> | string;
    productId?: StringNullableFilter<'Image'> | string | null;
    product?: XOR<
      ProductNullableScalarRelationFilter,
      ProductWhereInput
    > | null;
  };

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder;
    image?: SortOrder;
    productId?: SortOrderInput | SortOrder;
    product?: ProductOrderByWithRelationInput;
  };

  export type ImageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ImageWhereInput | ImageWhereInput[];
      OR?: ImageWhereInput[];
      NOT?: ImageWhereInput | ImageWhereInput[];
      image?: StringFilter<'Image'> | string;
      productId?: StringNullableFilter<'Image'> | string | null;
      product?: XOR<
        ProductNullableScalarRelationFilter,
        ProductWhereInput
      > | null;
    },
    'id'
  >;

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder;
    image?: SortOrder;
    productId?: SortOrderInput | SortOrder;
    _count?: ImageCountOrderByAggregateInput;
    _max?: ImageMaxOrderByAggregateInput;
    _min?: ImageMinOrderByAggregateInput;
  };

  export type ImageScalarWhereWithAggregatesInput = {
    AND?:
      | ImageScalarWhereWithAggregatesInput
      | ImageScalarWhereWithAggregatesInput[];
    OR?: ImageScalarWhereWithAggregatesInput[];
    NOT?:
      | ImageScalarWhereWithAggregatesInput
      | ImageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Image'> | string;
    image?: StringWithAggregatesFilter<'Image'> | string;
    productId?: StringNullableWithAggregatesFilter<'Image'> | string | null;
  };

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[];
    OR?: AddressWhereInput[];
    NOT?: AddressWhereInput | AddressWhereInput[];
    id?: StringFilter<'Address'> | string;
    userId?: StringFilter<'Address'> | string;
    address?: StringFilter<'Address'> | string;
    city?: StringFilter<'Address'> | string;
    Province?: StringFilter<'Address'> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    Province?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type AddressWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AddressWhereInput | AddressWhereInput[];
      OR?: AddressWhereInput[];
      NOT?: AddressWhereInput | AddressWhereInput[];
      userId?: StringFilter<'Address'> | string;
      address?: StringFilter<'Address'> | string;
      city?: StringFilter<'Address'> | string;
      Province?: StringFilter<'Address'> | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    Province?: SortOrder;
    _count?: AddressCountOrderByAggregateInput;
    _max?: AddressMaxOrderByAggregateInput;
    _min?: AddressMinOrderByAggregateInput;
  };

  export type AddressScalarWhereWithAggregatesInput = {
    AND?:
      | AddressScalarWhereWithAggregatesInput
      | AddressScalarWhereWithAggregatesInput[];
    OR?: AddressScalarWhereWithAggregatesInput[];
    NOT?:
      | AddressScalarWhereWithAggregatesInput
      | AddressScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Address'> | string;
    userId?: StringWithAggregatesFilter<'Address'> | string;
    address?: StringWithAggregatesFilter<'Address'> | string;
    city?: StringWithAggregatesFilter<'Address'> | string;
    Province?: StringWithAggregatesFilter<'Address'> | string;
  };

  export type OtpCreateInput = {
    id?: string;
    mobile: string;
    code: string;
    expiresAt: Date | string;
    used?: boolean;
    attempts?: number;
    createdAt?: Date | string;
  };

  export type OtpUncheckedCreateInput = {
    id?: string;
    mobile: string;
    code: string;
    expiresAt: Date | string;
    used?: boolean;
    attempts?: number;
    createdAt?: Date | string;
  };

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    used?: BoolFieldUpdateOperationsInput | boolean;
    attempts?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    used?: BoolFieldUpdateOperationsInput | boolean;
    attempts?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OtpCreateManyInput = {
    id?: string;
    mobile: string;
    code: string;
    expiresAt: Date | string;
    used?: boolean;
    attempts?: number;
    createdAt?: Date | string;
  };

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    used?: BoolFieldUpdateOperationsInput | boolean;
    attempts?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    used?: BoolFieldUpdateOperationsInput | boolean;
    attempts?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OtpSessionCreateInput = {
    id?: string;
    mobile: string;
    apiKey: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type OtpSessionUncheckedCreateInput = {
    id?: string;
    mobile: string;
    apiKey: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type OtpSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    apiKey?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OtpSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    apiKey?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OtpSessionCreateManyInput = {
    id?: string;
    mobile: string;
    apiKey: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type OtpSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    apiKey?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OtpSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    apiKey?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    userName: string;
    email: string;
    mobile: string;
    password: string;
    ban?: boolean;
    role?: $Enums.UserRole;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    addresses?: AddressCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    userName: string;
    email: string;
    mobile: string;
    password: string;
    ban?: boolean;
    role?: $Enums.UserRole;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    ban?: BoolFieldUpdateOperationsInput | boolean;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: AddressUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    ban?: BoolFieldUpdateOperationsInput | boolean;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    userName: string;
    email: string;
    mobile: string;
    password: string;
    ban?: boolean;
    role?: $Enums.UserRole;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    ban?: BoolFieldUpdateOperationsInput | boolean;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    ban?: BoolFieldUpdateOperationsInput | boolean;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductCreateInput = {
    id?: string;
    name: string;
    catagory: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    image?: ImageCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateInput = {
    id?: string;
    name: string;
    catagory: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    image?: ImageUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    catagory?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    image?: ImageUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    catagory?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    image?: ImageUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateManyInput = {
    id?: string;
    name: string;
    catagory: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
  };

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    catagory?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    catagory?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type ImageCreateInput = {
    id?: string;
    image: string;
    product?: ProductCreateNestedOneWithoutImageInput;
  };

  export type ImageUncheckedCreateInput = {
    id?: string;
    image: string;
    productId?: string | null;
  };

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    product?: ProductUpdateOneWithoutImageNestedInput;
  };

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    productId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ImageCreateManyInput = {
    id?: string;
    image: string;
    productId?: string | null;
  };

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    productId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AddressCreateInput = {
    id?: string;
    address: string;
    city: string;
    Province: string;
    user: UserCreateNestedOneWithoutAddressesInput;
  };

  export type AddressUncheckedCreateInput = {
    id?: string;
    userId: string;
    address: string;
    city: string;
    Province: string;
  };

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    Province?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput;
  };

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    Province?: StringFieldUpdateOperationsInput | string;
  };

  export type AddressCreateManyInput = {
    id?: string;
    userId: string;
    address: string;
    city: string;
    Province: string;
  };

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    Province?: StringFieldUpdateOperationsInput | string;
  };

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    Province?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder;
    mobile?: SortOrder;
    code?: SortOrder;
    expiresAt?: SortOrder;
    used?: SortOrder;
    attempts?: SortOrder;
    createdAt?: SortOrder;
  };

  export type OtpAvgOrderByAggregateInput = {
    attempts?: SortOrder;
  };

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder;
    mobile?: SortOrder;
    code?: SortOrder;
    expiresAt?: SortOrder;
    used?: SortOrder;
    attempts?: SortOrder;
    createdAt?: SortOrder;
  };

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder;
    mobile?: SortOrder;
    code?: SortOrder;
    expiresAt?: SortOrder;
    used?: SortOrder;
    attempts?: SortOrder;
    createdAt?: SortOrder;
  };

  export type OtpSumOrderByAggregateInput = {
    attempts?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type OtpSessionCountOrderByAggregateInput = {
    id?: SortOrder;
    mobile?: SortOrder;
    apiKey?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type OtpSessionMaxOrderByAggregateInput = {
    id?: SortOrder;
    mobile?: SortOrder;
    apiKey?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type OtpSessionMinOrderByAggregateInput = {
    id?: SortOrder;
    mobile?: SortOrder;
    apiKey?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type AddressListRelationFilter = {
    every?: AddressWhereInput;
    some?: AddressWhereInput;
    none?: AddressWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    userName?: SortOrder;
    email?: SortOrder;
    mobile?: SortOrder;
    password?: SortOrder;
    ban?: SortOrder;
    role?: SortOrder;
    avatarUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    userName?: SortOrder;
    email?: SortOrder;
    mobile?: SortOrder;
    password?: SortOrder;
    ban?: SortOrder;
    role?: SortOrder;
    avatarUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    userName?: SortOrder;
    email?: SortOrder;
    mobile?: SortOrder;
    password?: SortOrder;
    ban?: SortOrder;
    role?: SortOrder;
    avatarUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumProductCategoryFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ProductCategory
      | EnumProductCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProductCategoryFilter<$PrismaModel>
      | $Enums.ProductCategory;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type ImageListRelationFilter = {
    every?: ImageWhereInput;
    some?: ImageWhereInput;
    none?: ImageWhereInput;
  };

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    catagory?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    catagory?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    catagory?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type EnumProductCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ProductCategory
      | EnumProductCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel>
      | $Enums.ProductCategory;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProductCategoryFilter<$PrismaModel>;
    _max?: NestedEnumProductCategoryFilter<$PrismaModel>;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null;
    isNot?: ProductWhereInput | null;
  };

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder;
    image?: SortOrder;
    productId?: SortOrder;
  };

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder;
    image?: SortOrder;
    productId?: SortOrder;
  };

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder;
    image?: SortOrder;
    productId?: SortOrder;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    Province?: SortOrder;
  };

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    Province?: SortOrder;
  };

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    Province?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type AddressCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AddressCreateWithoutUserInput,
          AddressUncheckedCreateWithoutUserInput
        >
      | AddressCreateWithoutUserInput[]
      | AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AddressCreateOrConnectWithoutUserInput
      | AddressCreateOrConnectWithoutUserInput[];
    createMany?: AddressCreateManyUserInputEnvelope;
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
  };

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AddressCreateWithoutUserInput,
          AddressUncheckedCreateWithoutUserInput
        >
      | AddressCreateWithoutUserInput[]
      | AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AddressCreateOrConnectWithoutUserInput
      | AddressCreateOrConnectWithoutUserInput[];
    createMany?: AddressCreateManyUserInputEnvelope;
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
  };

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AddressCreateWithoutUserInput,
          AddressUncheckedCreateWithoutUserInput
        >
      | AddressCreateWithoutUserInput[]
      | AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AddressCreateOrConnectWithoutUserInput
      | AddressCreateOrConnectWithoutUserInput[];
    upsert?:
      | AddressUpsertWithWhereUniqueWithoutUserInput
      | AddressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AddressCreateManyUserInputEnvelope;
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    update?:
      | AddressUpdateWithWhereUniqueWithoutUserInput
      | AddressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AddressUpdateManyWithWhereWithoutUserInput
      | AddressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[];
  };

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AddressCreateWithoutUserInput,
          AddressUncheckedCreateWithoutUserInput
        >
      | AddressCreateWithoutUserInput[]
      | AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AddressCreateOrConnectWithoutUserInput
      | AddressCreateOrConnectWithoutUserInput[];
    upsert?:
      | AddressUpsertWithWhereUniqueWithoutUserInput
      | AddressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AddressCreateManyUserInputEnvelope;
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    update?:
      | AddressUpdateWithWhereUniqueWithoutUserInput
      | AddressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AddressUpdateManyWithWhereWithoutUserInput
      | AddressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[];
  };

  export type ImageCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          ImageCreateWithoutProductInput,
          ImageUncheckedCreateWithoutProductInput
        >
      | ImageCreateWithoutProductInput[]
      | ImageUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | ImageCreateOrConnectWithoutProductInput
      | ImageCreateOrConnectWithoutProductInput[];
    createMany?: ImageCreateManyProductInputEnvelope;
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
  };

  export type ImageUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          ImageCreateWithoutProductInput,
          ImageUncheckedCreateWithoutProductInput
        >
      | ImageCreateWithoutProductInput[]
      | ImageUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | ImageCreateOrConnectWithoutProductInput
      | ImageCreateOrConnectWithoutProductInput[];
    createMany?: ImageCreateManyProductInputEnvelope;
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
  };

  export type EnumProductCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ProductCategory;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ImageUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          ImageCreateWithoutProductInput,
          ImageUncheckedCreateWithoutProductInput
        >
      | ImageCreateWithoutProductInput[]
      | ImageUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | ImageCreateOrConnectWithoutProductInput
      | ImageCreateOrConnectWithoutProductInput[];
    upsert?:
      | ImageUpsertWithWhereUniqueWithoutProductInput
      | ImageUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: ImageCreateManyProductInputEnvelope;
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    update?:
      | ImageUpdateWithWhereUniqueWithoutProductInput
      | ImageUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | ImageUpdateManyWithWhereWithoutProductInput
      | ImageUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[];
  };

  export type ImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          ImageCreateWithoutProductInput,
          ImageUncheckedCreateWithoutProductInput
        >
      | ImageCreateWithoutProductInput[]
      | ImageUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | ImageCreateOrConnectWithoutProductInput
      | ImageCreateOrConnectWithoutProductInput[];
    upsert?:
      | ImageUpsertWithWhereUniqueWithoutProductInput
      | ImageUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: ImageCreateManyProductInputEnvelope;
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[];
    update?:
      | ImageUpdateWithWhereUniqueWithoutProductInput
      | ImageUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | ImageUpdateManyWithWhereWithoutProductInput
      | ImageUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[];
  };

  export type ProductCreateNestedOneWithoutImageInput = {
    create?: XOR<
      ProductCreateWithoutImageInput,
      ProductUncheckedCreateWithoutImageInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutImageInput;
    connect?: ProductWhereUniqueInput;
  };

  export type ProductUpdateOneWithoutImageNestedInput = {
    create?: XOR<
      ProductCreateWithoutImageInput,
      ProductUncheckedCreateWithoutImageInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutImageInput;
    upsert?: ProductUpsertWithoutImageInput;
    disconnect?: ProductWhereInput | boolean;
    delete?: ProductWhereInput | boolean;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutImageInput,
        ProductUpdateWithoutImageInput
      >,
      ProductUncheckedUpdateWithoutImageInput
    >;
  };

  export type UserCreateNestedOneWithoutAddressesInput = {
    create?: XOR<
      UserCreateWithoutAddressesInput,
      UserUncheckedCreateWithoutAddressesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<
      UserCreateWithoutAddressesInput,
      UserUncheckedCreateWithoutAddressesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput;
    upsert?: UserUpsertWithoutAddressesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAddressesInput,
        UserUpdateWithoutAddressesInput
      >,
      UserUncheckedUpdateWithoutAddressesInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.UserRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: NestedEnumUserRoleFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumProductCategoryFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ProductCategory
      | EnumProductCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProductCategoryFilter<$PrismaModel>
      | $Enums.ProductCategory;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumProductCategoryWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.ProductCategory
      | EnumProductCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProductCategory[]
      | ListEnumProductCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel>
      | $Enums.ProductCategory;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProductCategoryFilter<$PrismaModel>;
    _max?: NestedEnumProductCategoryFilter<$PrismaModel>;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type AddressCreateWithoutUserInput = {
    id?: string;
    address: string;
    city: string;
    Province: string;
  };

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: string;
    address: string;
    city: string;
    Province: string;
  };

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput;
    create: XOR<
      AddressCreateWithoutUserInput,
      AddressUncheckedCreateWithoutUserInput
    >;
  };

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput;
    update: XOR<
      AddressUpdateWithoutUserInput,
      AddressUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AddressCreateWithoutUserInput,
      AddressUncheckedCreateWithoutUserInput
    >;
  };

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput;
    data: XOR<
      AddressUpdateWithoutUserInput,
      AddressUncheckedUpdateWithoutUserInput
    >;
  };

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput;
    data: XOR<
      AddressUpdateManyMutationInput,
      AddressUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[];
    OR?: AddressScalarWhereInput[];
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[];
    id?: StringFilter<'Address'> | string;
    userId?: StringFilter<'Address'> | string;
    address?: StringFilter<'Address'> | string;
    city?: StringFilter<'Address'> | string;
    Province?: StringFilter<'Address'> | string;
  };

  export type ImageCreateWithoutProductInput = {
    id?: string;
    image: string;
  };

  export type ImageUncheckedCreateWithoutProductInput = {
    id?: string;
    image: string;
  };

  export type ImageCreateOrConnectWithoutProductInput = {
    where: ImageWhereUniqueInput;
    create: XOR<
      ImageCreateWithoutProductInput,
      ImageUncheckedCreateWithoutProductInput
    >;
  };

  export type ImageCreateManyProductInputEnvelope = {
    data: ImageCreateManyProductInput | ImageCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type ImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput;
    update: XOR<
      ImageUpdateWithoutProductInput,
      ImageUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      ImageCreateWithoutProductInput,
      ImageUncheckedCreateWithoutProductInput
    >;
  };

  export type ImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput;
    data: XOR<
      ImageUpdateWithoutProductInput,
      ImageUncheckedUpdateWithoutProductInput
    >;
  };

  export type ImageUpdateManyWithWhereWithoutProductInput = {
    where: ImageScalarWhereInput;
    data: XOR<
      ImageUpdateManyMutationInput,
      ImageUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[];
    OR?: ImageScalarWhereInput[];
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[];
    id?: StringFilter<'Image'> | string;
    image?: StringFilter<'Image'> | string;
    productId?: StringNullableFilter<'Image'> | string | null;
  };

  export type ProductCreateWithoutImageInput = {
    id?: string;
    name: string;
    catagory: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
  };

  export type ProductUncheckedCreateWithoutImageInput = {
    id?: string;
    name: string;
    catagory: $Enums.ProductCategory;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
  };

  export type ProductCreateOrConnectWithoutImageInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutImageInput,
      ProductUncheckedCreateWithoutImageInput
    >;
  };

  export type ProductUpsertWithoutImageInput = {
    update: XOR<
      ProductUpdateWithoutImageInput,
      ProductUncheckedUpdateWithoutImageInput
    >;
    create: XOR<
      ProductCreateWithoutImageInput,
      ProductUncheckedCreateWithoutImageInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutImageInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutImageInput,
      ProductUncheckedUpdateWithoutImageInput
    >;
  };

  export type ProductUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    catagory?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type ProductUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    catagory?:
      | EnumProductCategoryFieldUpdateOperationsInput
      | $Enums.ProductCategory;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type UserCreateWithoutAddressesInput = {
    id?: string;
    userName: string;
    email: string;
    mobile: string;
    password: string;
    ban?: boolean;
    role?: $Enums.UserRole;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUncheckedCreateWithoutAddressesInput = {
    id?: string;
    userName: string;
    email: string;
    mobile: string;
    password: string;
    ban?: boolean;
    role?: $Enums.UserRole;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserCreateOrConnectWithoutAddressesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAddressesInput,
      UserUncheckedCreateWithoutAddressesInput
    >;
  };

  export type UserUpsertWithoutAddressesInput = {
    update: XOR<
      UserUpdateWithoutAddressesInput,
      UserUncheckedUpdateWithoutAddressesInput
    >;
    create: XOR<
      UserCreateWithoutAddressesInput,
      UserUncheckedCreateWithoutAddressesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAddressesInput,
      UserUncheckedUpdateWithoutAddressesInput
    >;
  };

  export type UserUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    ban?: BoolFieldUpdateOperationsInput | boolean;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    mobile?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    ban?: BoolFieldUpdateOperationsInput | boolean;
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AddressCreateManyUserInput = {
    id?: string;
    address: string;
    city: string;
    Province: string;
  };

  export type AddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    Province?: StringFieldUpdateOperationsInput | string;
  };

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    Province?: StringFieldUpdateOperationsInput | string;
  };

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    Province?: StringFieldUpdateOperationsInput | string;
  };

  export type ImageCreateManyProductInput = {
    id?: string;
    image: string;
  };

  export type ImageUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  export type ImageUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  export type ImageUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
