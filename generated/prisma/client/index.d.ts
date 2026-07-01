
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
 * Model arriendos
 * 
 */
export type arriendos = $Result.DefaultSelection<Prisma.$arriendosPayload>
/**
 * Model clientes
 * 
 */
export type clientes = $Result.DefaultSelection<Prisma.$clientesPayload>
/**
 * Model perfiles
 * 
 */
export type perfiles = $Result.DefaultSelection<Prisma.$perfilesPayload>
/**
 * Model tipos_vehiculo
 * 
 */
export type tipos_vehiculo = $Result.DefaultSelection<Prisma.$tipos_vehiculoPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model vehiculos
 * 
 */
export type vehiculos = $Result.DefaultSelection<Prisma.$vehiculosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const vehiculos_estado: {
  disponible: 'disponible',
  arrendado: 'arrendado',
  en_mantenimiento: 'en_mantenimiento',
  de_baja: 'de_baja'
};

export type vehiculos_estado = (typeof vehiculos_estado)[keyof typeof vehiculos_estado]


export const arriendos_estado: {
  vigente: 'vigente',
  finalizado: 'finalizado'
};

export type arriendos_estado = (typeof arriendos_estado)[keyof typeof arriendos_estado]

}

export type vehiculos_estado = $Enums.vehiculos_estado

export const vehiculos_estado: typeof $Enums.vehiculos_estado

export type arriendos_estado = $Enums.arriendos_estado

export const arriendos_estado: typeof $Enums.arriendos_estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Arriendos
 * const arriendos = await prisma.arriendos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Arriendos
   * const arriendos = await prisma.arriendos.findMany()
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
   * `prisma.arriendos`: Exposes CRUD operations for the **arriendos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arriendos
    * const arriendos = await prisma.arriendos.findMany()
    * ```
    */
  get arriendos(): Prisma.arriendosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientes`: Exposes CRUD operations for the **clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.clientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perfiles`: Exposes CRUD operations for the **perfiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfiles
    * const perfiles = await prisma.perfiles.findMany()
    * ```
    */
  get perfiles(): Prisma.perfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipos_vehiculo`: Exposes CRUD operations for the **tipos_vehiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipos_vehiculos
    * const tipos_vehiculos = await prisma.tipos_vehiculo.findMany()
    * ```
    */
  get tipos_vehiculo(): Prisma.tipos_vehiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehiculos`: Exposes CRUD operations for the **vehiculos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehiculos
    * const vehiculos = await prisma.vehiculos.findMany()
    * ```
    */
  get vehiculos(): Prisma.vehiculosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    arriendos: 'arriendos',
    clientes: 'clientes',
    perfiles: 'perfiles',
    tipos_vehiculo: 'tipos_vehiculo',
    usuarios: 'usuarios',
    vehiculos: 'vehiculos'
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
      modelProps: "arriendos" | "clientes" | "perfiles" | "tipos_vehiculo" | "usuarios" | "vehiculos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      arriendos: {
        payload: Prisma.$arriendosPayload<ExtArgs>
        fields: Prisma.arriendosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.arriendosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$arriendosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.arriendosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$arriendosPayload>
          }
          findFirst: {
            args: Prisma.arriendosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$arriendosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.arriendosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$arriendosPayload>
          }
          findMany: {
            args: Prisma.arriendosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$arriendosPayload>[]
          }
          create: {
            args: Prisma.arriendosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$arriendosPayload>
          }
          createMany: {
            args: Prisma.arriendosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.arriendosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$arriendosPayload>
          }
          update: {
            args: Prisma.arriendosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$arriendosPayload>
          }
          deleteMany: {
            args: Prisma.arriendosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.arriendosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.arriendosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$arriendosPayload>
          }
          aggregate: {
            args: Prisma.ArriendosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArriendos>
          }
          groupBy: {
            args: Prisma.arriendosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArriendosGroupByOutputType>[]
          }
          count: {
            args: Prisma.arriendosCountArgs<ExtArgs>
            result: $Utils.Optional<ArriendosCountAggregateOutputType> | number
          }
        }
      }
      clientes: {
        payload: Prisma.$clientesPayload<ExtArgs>
        fields: Prisma.clientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findFirst: {
            args: Prisma.clientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findMany: {
            args: Prisma.clientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          create: {
            args: Prisma.clientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          createMany: {
            args: Prisma.clientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          update: {
            args: Prisma.clientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          deleteMany: {
            args: Prisma.clientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.clientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      perfiles: {
        payload: Prisma.$perfilesPayload<ExtArgs>
        fields: Prisma.perfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.perfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.perfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          findFirst: {
            args: Prisma.perfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.perfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          findMany: {
            args: Prisma.perfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>[]
          }
          create: {
            args: Prisma.perfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          createMany: {
            args: Prisma.perfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.perfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          update: {
            args: Prisma.perfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          deleteMany: {
            args: Prisma.perfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.perfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.perfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          aggregate: {
            args: Prisma.PerfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfiles>
          }
          groupBy: {
            args: Prisma.perfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.perfilesCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilesCountAggregateOutputType> | number
          }
        }
      }
      tipos_vehiculo: {
        payload: Prisma.$tipos_vehiculoPayload<ExtArgs>
        fields: Prisma.tipos_vehiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipos_vehiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_vehiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipos_vehiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_vehiculoPayload>
          }
          findFirst: {
            args: Prisma.tipos_vehiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_vehiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipos_vehiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_vehiculoPayload>
          }
          findMany: {
            args: Prisma.tipos_vehiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_vehiculoPayload>[]
          }
          create: {
            args: Prisma.tipos_vehiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_vehiculoPayload>
          }
          createMany: {
            args: Prisma.tipos_vehiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tipos_vehiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_vehiculoPayload>
          }
          update: {
            args: Prisma.tipos_vehiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_vehiculoPayload>
          }
          deleteMany: {
            args: Prisma.tipos_vehiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipos_vehiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tipos_vehiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_vehiculoPayload>
          }
          aggregate: {
            args: Prisma.Tipos_vehiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipos_vehiculo>
          }
          groupBy: {
            args: Prisma.tipos_vehiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipos_vehiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipos_vehiculoCountArgs<ExtArgs>
            result: $Utils.Optional<Tipos_vehiculoCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      vehiculos: {
        payload: Prisma.$vehiculosPayload<ExtArgs>
        fields: Prisma.vehiculosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vehiculosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vehiculosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          findFirst: {
            args: Prisma.vehiculosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vehiculosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          findMany: {
            args: Prisma.vehiculosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>[]
          }
          create: {
            args: Prisma.vehiculosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          createMany: {
            args: Prisma.vehiculosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vehiculosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          update: {
            args: Prisma.vehiculosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          deleteMany: {
            args: Prisma.vehiculosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vehiculosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vehiculosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          aggregate: {
            args: Prisma.VehiculosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiculos>
          }
          groupBy: {
            args: Prisma.vehiculosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculosGroupByOutputType>[]
          }
          count: {
            args: Prisma.vehiculosCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculosCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    arriendos?: arriendosOmit
    clientes?: clientesOmit
    perfiles?: perfilesOmit
    tipos_vehiculo?: tipos_vehiculoOmit
    usuarios?: usuariosOmit
    vehiculos?: vehiculosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ClientesCountOutputType
   */

  export type ClientesCountOutputType = {
    arriendos: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arriendos?: boolean | ClientesCountOutputTypeCountArriendosArgs
  }

  // Custom InputTypes
  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountArriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: arriendosWhereInput
  }


  /**
   * Count Type PerfilesCountOutputType
   */

  export type PerfilesCountOutputType = {
    usuarios: number
  }

  export type PerfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | PerfilesCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * PerfilesCountOutputType without action
   */
  export type PerfilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilesCountOutputType
     */
    select?: PerfilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerfilesCountOutputType without action
   */
  export type PerfilesCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
  }


  /**
   * Count Type Tipos_vehiculoCountOutputType
   */

  export type Tipos_vehiculoCountOutputType = {
    vehiculos: number
  }

  export type Tipos_vehiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | Tipos_vehiculoCountOutputTypeCountVehiculosArgs
  }

  // Custom InputTypes
  /**
   * Tipos_vehiculoCountOutputType without action
   */
  export type Tipos_vehiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipos_vehiculoCountOutputType
     */
    select?: Tipos_vehiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipos_vehiculoCountOutputType without action
   */
  export type Tipos_vehiculoCountOutputTypeCountVehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehiculosWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    arriendos: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arriendos?: boolean | UsuariosCountOutputTypeCountArriendosArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountArriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: arriendosWhereInput
  }


  /**
   * Count Type VehiculosCountOutputType
   */

  export type VehiculosCountOutputType = {
    arriendos: number
  }

  export type VehiculosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arriendos?: boolean | VehiculosCountOutputTypeCountArriendosArgs
  }

  // Custom InputTypes
  /**
   * VehiculosCountOutputType without action
   */
  export type VehiculosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosCountOutputType
     */
    select?: VehiculosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiculosCountOutputType without action
   */
  export type VehiculosCountOutputTypeCountArriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: arriendosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model arriendos
   */

  export type AggregateArriendos = {
    _count: ArriendosCountAggregateOutputType | null
    _avg: ArriendosAvgAggregateOutputType | null
    _sum: ArriendosSumAggregateOutputType | null
    _min: ArriendosMinAggregateOutputType | null
    _max: ArriendosMaxAggregateOutputType | null
  }

  export type ArriendosAvgAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    vehiculo_id: number | null
    usuario_id: number | null
    valor_diario_aplicado: number | null
    dias_arriendo: number | null
    valor_total: number | null
    vehiculo_activo_id: number | null
  }

  export type ArriendosSumAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    vehiculo_id: number | null
    usuario_id: number | null
    valor_diario_aplicado: number | null
    dias_arriendo: number | null
    valor_total: number | null
    vehiculo_activo_id: number | null
  }

  export type ArriendosMinAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    vehiculo_id: number | null
    usuario_id: number | null
    fecha_inicio: Date | null
    fecha_termino: Date | null
    fecha_hora_entrega: Date | null
    fecha_hora_recepcion: Date | null
    valor_diario_aplicado: number | null
    dias_arriendo: number | null
    valor_total: number | null
    estado: $Enums.arriendos_estado | null
    fotos_entrega: string | null
    fotos_recepcion: string | null
    vehiculo_activo_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ArriendosMaxAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    vehiculo_id: number | null
    usuario_id: number | null
    fecha_inicio: Date | null
    fecha_termino: Date | null
    fecha_hora_entrega: Date | null
    fecha_hora_recepcion: Date | null
    valor_diario_aplicado: number | null
    dias_arriendo: number | null
    valor_total: number | null
    estado: $Enums.arriendos_estado | null
    fotos_entrega: string | null
    fotos_recepcion: string | null
    vehiculo_activo_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ArriendosCountAggregateOutputType = {
    id: number
    cliente_id: number
    vehiculo_id: number
    usuario_id: number
    fecha_inicio: number
    fecha_termino: number
    fecha_hora_entrega: number
    fecha_hora_recepcion: number
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado: number
    fotos_entrega: number
    fotos_recepcion: number
    vehiculo_activo_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ArriendosAvgAggregateInputType = {
    id?: true
    cliente_id?: true
    vehiculo_id?: true
    usuario_id?: true
    valor_diario_aplicado?: true
    dias_arriendo?: true
    valor_total?: true
    vehiculo_activo_id?: true
  }

  export type ArriendosSumAggregateInputType = {
    id?: true
    cliente_id?: true
    vehiculo_id?: true
    usuario_id?: true
    valor_diario_aplicado?: true
    dias_arriendo?: true
    valor_total?: true
    vehiculo_activo_id?: true
  }

  export type ArriendosMinAggregateInputType = {
    id?: true
    cliente_id?: true
    vehiculo_id?: true
    usuario_id?: true
    fecha_inicio?: true
    fecha_termino?: true
    fecha_hora_entrega?: true
    fecha_hora_recepcion?: true
    valor_diario_aplicado?: true
    dias_arriendo?: true
    valor_total?: true
    estado?: true
    fotos_entrega?: true
    fotos_recepcion?: true
    vehiculo_activo_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ArriendosMaxAggregateInputType = {
    id?: true
    cliente_id?: true
    vehiculo_id?: true
    usuario_id?: true
    fecha_inicio?: true
    fecha_termino?: true
    fecha_hora_entrega?: true
    fecha_hora_recepcion?: true
    valor_diario_aplicado?: true
    dias_arriendo?: true
    valor_total?: true
    estado?: true
    fotos_entrega?: true
    fotos_recepcion?: true
    vehiculo_activo_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ArriendosCountAggregateInputType = {
    id?: true
    cliente_id?: true
    vehiculo_id?: true
    usuario_id?: true
    fecha_inicio?: true
    fecha_termino?: true
    fecha_hora_entrega?: true
    fecha_hora_recepcion?: true
    valor_diario_aplicado?: true
    dias_arriendo?: true
    valor_total?: true
    estado?: true
    fotos_entrega?: true
    fotos_recepcion?: true
    vehiculo_activo_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ArriendosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which arriendos to aggregate.
     */
    where?: arriendosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of arriendos to fetch.
     */
    orderBy?: arriendosOrderByWithRelationInput | arriendosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: arriendosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` arriendos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned arriendos
    **/
    _count?: true | ArriendosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArriendosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArriendosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArriendosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArriendosMaxAggregateInputType
  }

  export type GetArriendosAggregateType<T extends ArriendosAggregateArgs> = {
        [P in keyof T & keyof AggregateArriendos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArriendos[P]>
      : GetScalarType<T[P], AggregateArriendos[P]>
  }




  export type arriendosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: arriendosWhereInput
    orderBy?: arriendosOrderByWithAggregationInput | arriendosOrderByWithAggregationInput[]
    by: ArriendosScalarFieldEnum[] | ArriendosScalarFieldEnum
    having?: arriendosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArriendosCountAggregateInputType | true
    _avg?: ArriendosAvgAggregateInputType
    _sum?: ArriendosSumAggregateInputType
    _min?: ArriendosMinAggregateInputType
    _max?: ArriendosMaxAggregateInputType
  }

  export type ArriendosGroupByOutputType = {
    id: number
    cliente_id: number
    vehiculo_id: number
    usuario_id: number
    fecha_inicio: Date
    fecha_termino: Date
    fecha_hora_entrega: Date
    fecha_hora_recepcion: Date | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion: string | null
    vehiculo_activo_id: number | null
    created_at: Date
    updated_at: Date
    _count: ArriendosCountAggregateOutputType | null
    _avg: ArriendosAvgAggregateOutputType | null
    _sum: ArriendosSumAggregateOutputType | null
    _min: ArriendosMinAggregateOutputType | null
    _max: ArriendosMaxAggregateOutputType | null
  }

  type GetArriendosGroupByPayload<T extends arriendosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArriendosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArriendosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArriendosGroupByOutputType[P]>
            : GetScalarType<T[P], ArriendosGroupByOutputType[P]>
        }
      >
    >


  export type arriendosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente_id?: boolean
    vehiculo_id?: boolean
    usuario_id?: boolean
    fecha_inicio?: boolean
    fecha_termino?: boolean
    fecha_hora_entrega?: boolean
    fecha_hora_recepcion?: boolean
    valor_diario_aplicado?: boolean
    dias_arriendo?: boolean
    valor_total?: boolean
    estado?: boolean
    fotos_entrega?: boolean
    fotos_recepcion?: boolean
    vehiculo_activo_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    vehiculos?: boolean | vehiculosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arriendos"]>



  export type arriendosSelectScalar = {
    id?: boolean
    cliente_id?: boolean
    vehiculo_id?: boolean
    usuario_id?: boolean
    fecha_inicio?: boolean
    fecha_termino?: boolean
    fecha_hora_entrega?: boolean
    fecha_hora_recepcion?: boolean
    valor_diario_aplicado?: boolean
    dias_arriendo?: boolean
    valor_total?: boolean
    estado?: boolean
    fotos_entrega?: boolean
    fotos_recepcion?: boolean
    vehiculo_activo_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type arriendosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cliente_id" | "vehiculo_id" | "usuario_id" | "fecha_inicio" | "fecha_termino" | "fecha_hora_entrega" | "fecha_hora_recepcion" | "valor_diario_aplicado" | "dias_arriendo" | "valor_total" | "estado" | "fotos_entrega" | "fotos_recepcion" | "vehiculo_activo_id" | "created_at" | "updated_at", ExtArgs["result"]["arriendos"]>
  export type arriendosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    vehiculos?: boolean | vehiculosDefaultArgs<ExtArgs>
  }

  export type $arriendosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "arriendos"
    objects: {
      clientes: Prisma.$clientesPayload<ExtArgs>
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      vehiculos: Prisma.$vehiculosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cliente_id: number
      vehiculo_id: number
      usuario_id: number
      fecha_inicio: Date
      fecha_termino: Date
      fecha_hora_entrega: Date
      fecha_hora_recepcion: Date | null
      valor_diario_aplicado: number
      dias_arriendo: number
      valor_total: number
      estado: $Enums.arriendos_estado
      fotos_entrega: string
      fotos_recepcion: string | null
      vehiculo_activo_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["arriendos"]>
    composites: {}
  }

  type arriendosGetPayload<S extends boolean | null | undefined | arriendosDefaultArgs> = $Result.GetResult<Prisma.$arriendosPayload, S>

  type arriendosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<arriendosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArriendosCountAggregateInputType | true
    }

  export interface arriendosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['arriendos'], meta: { name: 'arriendos' } }
    /**
     * Find zero or one Arriendos that matches the filter.
     * @param {arriendosFindUniqueArgs} args - Arguments to find a Arriendos
     * @example
     * // Get one Arriendos
     * const arriendos = await prisma.arriendos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends arriendosFindUniqueArgs>(args: SelectSubset<T, arriendosFindUniqueArgs<ExtArgs>>): Prisma__arriendosClient<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Arriendos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {arriendosFindUniqueOrThrowArgs} args - Arguments to find a Arriendos
     * @example
     * // Get one Arriendos
     * const arriendos = await prisma.arriendos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends arriendosFindUniqueOrThrowArgs>(args: SelectSubset<T, arriendosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__arriendosClient<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arriendos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {arriendosFindFirstArgs} args - Arguments to find a Arriendos
     * @example
     * // Get one Arriendos
     * const arriendos = await prisma.arriendos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends arriendosFindFirstArgs>(args?: SelectSubset<T, arriendosFindFirstArgs<ExtArgs>>): Prisma__arriendosClient<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arriendos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {arriendosFindFirstOrThrowArgs} args - Arguments to find a Arriendos
     * @example
     * // Get one Arriendos
     * const arriendos = await prisma.arriendos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends arriendosFindFirstOrThrowArgs>(args?: SelectSubset<T, arriendosFindFirstOrThrowArgs<ExtArgs>>): Prisma__arriendosClient<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Arriendos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {arriendosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arriendos
     * const arriendos = await prisma.arriendos.findMany()
     * 
     * // Get first 10 Arriendos
     * const arriendos = await prisma.arriendos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arriendosWithIdOnly = await prisma.arriendos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends arriendosFindManyArgs>(args?: SelectSubset<T, arriendosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Arriendos.
     * @param {arriendosCreateArgs} args - Arguments to create a Arriendos.
     * @example
     * // Create one Arriendos
     * const Arriendos = await prisma.arriendos.create({
     *   data: {
     *     // ... data to create a Arriendos
     *   }
     * })
     * 
     */
    create<T extends arriendosCreateArgs>(args: SelectSubset<T, arriendosCreateArgs<ExtArgs>>): Prisma__arriendosClient<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Arriendos.
     * @param {arriendosCreateManyArgs} args - Arguments to create many Arriendos.
     * @example
     * // Create many Arriendos
     * const arriendos = await prisma.arriendos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends arriendosCreateManyArgs>(args?: SelectSubset<T, arriendosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Arriendos.
     * @param {arriendosDeleteArgs} args - Arguments to delete one Arriendos.
     * @example
     * // Delete one Arriendos
     * const Arriendos = await prisma.arriendos.delete({
     *   where: {
     *     // ... filter to delete one Arriendos
     *   }
     * })
     * 
     */
    delete<T extends arriendosDeleteArgs>(args: SelectSubset<T, arriendosDeleteArgs<ExtArgs>>): Prisma__arriendosClient<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Arriendos.
     * @param {arriendosUpdateArgs} args - Arguments to update one Arriendos.
     * @example
     * // Update one Arriendos
     * const arriendos = await prisma.arriendos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends arriendosUpdateArgs>(args: SelectSubset<T, arriendosUpdateArgs<ExtArgs>>): Prisma__arriendosClient<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Arriendos.
     * @param {arriendosDeleteManyArgs} args - Arguments to filter Arriendos to delete.
     * @example
     * // Delete a few Arriendos
     * const { count } = await prisma.arriendos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends arriendosDeleteManyArgs>(args?: SelectSubset<T, arriendosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arriendos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {arriendosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arriendos
     * const arriendos = await prisma.arriendos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends arriendosUpdateManyArgs>(args: SelectSubset<T, arriendosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Arriendos.
     * @param {arriendosUpsertArgs} args - Arguments to update or create a Arriendos.
     * @example
     * // Update or create a Arriendos
     * const arriendos = await prisma.arriendos.upsert({
     *   create: {
     *     // ... data to create a Arriendos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arriendos we want to update
     *   }
     * })
     */
    upsert<T extends arriendosUpsertArgs>(args: SelectSubset<T, arriendosUpsertArgs<ExtArgs>>): Prisma__arriendosClient<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Arriendos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {arriendosCountArgs} args - Arguments to filter Arriendos to count.
     * @example
     * // Count the number of Arriendos
     * const count = await prisma.arriendos.count({
     *   where: {
     *     // ... the filter for the Arriendos we want to count
     *   }
     * })
    **/
    count<T extends arriendosCountArgs>(
      args?: Subset<T, arriendosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArriendosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arriendos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArriendosAggregateArgs>(args: Subset<T, ArriendosAggregateArgs>): Prisma.PrismaPromise<GetArriendosAggregateType<T>>

    /**
     * Group by Arriendos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {arriendosGroupByArgs} args - Group by arguments.
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
      T extends arriendosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: arriendosGroupByArgs['orderBy'] }
        : { orderBy?: arriendosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, arriendosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArriendosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the arriendos model
   */
  readonly fields: arriendosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for arriendos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__arriendosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends clientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientesDefaultArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehiculos<T extends vehiculosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehiculosDefaultArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the arriendos model
   */
  interface arriendosFieldRefs {
    readonly id: FieldRef<"arriendos", 'Int'>
    readonly cliente_id: FieldRef<"arriendos", 'Int'>
    readonly vehiculo_id: FieldRef<"arriendos", 'Int'>
    readonly usuario_id: FieldRef<"arriendos", 'Int'>
    readonly fecha_inicio: FieldRef<"arriendos", 'DateTime'>
    readonly fecha_termino: FieldRef<"arriendos", 'DateTime'>
    readonly fecha_hora_entrega: FieldRef<"arriendos", 'DateTime'>
    readonly fecha_hora_recepcion: FieldRef<"arriendos", 'DateTime'>
    readonly valor_diario_aplicado: FieldRef<"arriendos", 'Int'>
    readonly dias_arriendo: FieldRef<"arriendos", 'Int'>
    readonly valor_total: FieldRef<"arriendos", 'Int'>
    readonly estado: FieldRef<"arriendos", 'arriendos_estado'>
    readonly fotos_entrega: FieldRef<"arriendos", 'String'>
    readonly fotos_recepcion: FieldRef<"arriendos", 'String'>
    readonly vehiculo_activo_id: FieldRef<"arriendos", 'Int'>
    readonly created_at: FieldRef<"arriendos", 'DateTime'>
    readonly updated_at: FieldRef<"arriendos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * arriendos findUnique
   */
  export type arriendosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    /**
     * Filter, which arriendos to fetch.
     */
    where: arriendosWhereUniqueInput
  }

  /**
   * arriendos findUniqueOrThrow
   */
  export type arriendosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    /**
     * Filter, which arriendos to fetch.
     */
    where: arriendosWhereUniqueInput
  }

  /**
   * arriendos findFirst
   */
  export type arriendosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    /**
     * Filter, which arriendos to fetch.
     */
    where?: arriendosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of arriendos to fetch.
     */
    orderBy?: arriendosOrderByWithRelationInput | arriendosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for arriendos.
     */
    cursor?: arriendosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` arriendos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of arriendos.
     */
    distinct?: ArriendosScalarFieldEnum | ArriendosScalarFieldEnum[]
  }

  /**
   * arriendos findFirstOrThrow
   */
  export type arriendosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    /**
     * Filter, which arriendos to fetch.
     */
    where?: arriendosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of arriendos to fetch.
     */
    orderBy?: arriendosOrderByWithRelationInput | arriendosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for arriendos.
     */
    cursor?: arriendosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` arriendos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of arriendos.
     */
    distinct?: ArriendosScalarFieldEnum | ArriendosScalarFieldEnum[]
  }

  /**
   * arriendos findMany
   */
  export type arriendosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    /**
     * Filter, which arriendos to fetch.
     */
    where?: arriendosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of arriendos to fetch.
     */
    orderBy?: arriendosOrderByWithRelationInput | arriendosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing arriendos.
     */
    cursor?: arriendosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` arriendos.
     */
    skip?: number
    distinct?: ArriendosScalarFieldEnum | ArriendosScalarFieldEnum[]
  }

  /**
   * arriendos create
   */
  export type arriendosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    /**
     * The data needed to create a arriendos.
     */
    data: XOR<arriendosCreateInput, arriendosUncheckedCreateInput>
  }

  /**
   * arriendos createMany
   */
  export type arriendosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many arriendos.
     */
    data: arriendosCreateManyInput | arriendosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * arriendos update
   */
  export type arriendosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    /**
     * The data needed to update a arriendos.
     */
    data: XOR<arriendosUpdateInput, arriendosUncheckedUpdateInput>
    /**
     * Choose, which arriendos to update.
     */
    where: arriendosWhereUniqueInput
  }

  /**
   * arriendos updateMany
   */
  export type arriendosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update arriendos.
     */
    data: XOR<arriendosUpdateManyMutationInput, arriendosUncheckedUpdateManyInput>
    /**
     * Filter which arriendos to update
     */
    where?: arriendosWhereInput
    /**
     * Limit how many arriendos to update.
     */
    limit?: number
  }

  /**
   * arriendos upsert
   */
  export type arriendosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    /**
     * The filter to search for the arriendos to update in case it exists.
     */
    where: arriendosWhereUniqueInput
    /**
     * In case the arriendos found by the `where` argument doesn't exist, create a new arriendos with this data.
     */
    create: XOR<arriendosCreateInput, arriendosUncheckedCreateInput>
    /**
     * In case the arriendos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<arriendosUpdateInput, arriendosUncheckedUpdateInput>
  }

  /**
   * arriendos delete
   */
  export type arriendosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    /**
     * Filter which arriendos to delete.
     */
    where: arriendosWhereUniqueInput
  }

  /**
   * arriendos deleteMany
   */
  export type arriendosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which arriendos to delete
     */
    where?: arriendosWhereInput
    /**
     * Limit how many arriendos to delete.
     */
    limit?: number
  }

  /**
   * arriendos without action
   */
  export type arriendosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
  }


  /**
   * Model clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientesSumAggregateOutputType = {
    id: number | null
  }

  export type ClientesMinAggregateOutputType = {
    id: number | null
    rut: string | null
    nombres: string | null
    apellidos: string | null
    email: string | null
    telefono: string | null
    direccion: string | null
    licencia_conducir: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClientesMaxAggregateOutputType = {
    id: number | null
    rut: string | null
    nombres: string | null
    apellidos: string | null
    email: string | null
    telefono: string | null
    direccion: string | null
    licencia_conducir: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClientesCountAggregateOutputType = {
    id: number
    rut: number
    nombres: number
    apellidos: number
    email: number
    telefono: number
    direccion: number
    licencia_conducir: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    id?: true
  }

  export type ClientesSumAggregateInputType = {
    id?: true
  }

  export type ClientesMinAggregateInputType = {
    id?: true
    rut?: true
    nombres?: true
    apellidos?: true
    email?: true
    telefono?: true
    direccion?: true
    licencia_conducir?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ClientesMaxAggregateInputType = {
    id?: true
    rut?: true
    nombres?: true
    apellidos?: true
    email?: true
    telefono?: true
    direccion?: true
    licencia_conducir?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ClientesCountAggregateInputType = {
    id?: true
    rut?: true
    nombres?: true
    apellidos?: true
    email?: true
    telefono?: true
    direccion?: true
    licencia_conducir?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to aggregate.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type clientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientesWhereInput
    orderBy?: clientesOrderByWithAggregationInput | clientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    id: number
    rut: string
    nombres: string
    apellidos: string
    email: string
    telefono: string
    direccion: string
    licencia_conducir: string
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends clientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type clientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rut?: boolean
    nombres?: boolean
    apellidos?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    licencia_conducir?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    arriendos?: boolean | clientes$arriendosArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>



  export type clientesSelectScalar = {
    id?: boolean
    rut?: boolean
    nombres?: boolean
    apellidos?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    licencia_conducir?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type clientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rut" | "nombres" | "apellidos" | "email" | "telefono" | "direccion" | "licencia_conducir" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["clientes"]>
  export type clientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arriendos?: boolean | clientes$arriendosArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $clientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clientes"
    objects: {
      arriendos: Prisma.$arriendosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rut: string
      nombres: string
      apellidos: string
      email: string
      telefono: string
      direccion: string
      licencia_conducir: string
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type clientesGetPayload<S extends boolean | null | undefined | clientesDefaultArgs> = $Result.GetResult<Prisma.$clientesPayload, S>

  type clientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface clientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientes'], meta: { name: 'clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {clientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientesFindUniqueArgs>(args: SelectSubset<T, clientesFindUniqueArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs>(args: SelectSubset<T, clientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientesFindFirstArgs>(args?: SelectSubset<T, clientesFindFirstArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs>(args?: SelectSubset<T, clientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientesWithIdOnly = await prisma.clientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clientesFindManyArgs>(args?: SelectSubset<T, clientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientes.
     * @param {clientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends clientesCreateArgs>(args: SelectSubset<T, clientesCreateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientesCreateManyArgs>(args?: SelectSubset<T, clientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clientes.
     * @param {clientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends clientesDeleteArgs>(args: SelectSubset<T, clientesDeleteArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientes.
     * @param {clientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientesUpdateArgs>(args: SelectSubset<T, clientesUpdateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientesDeleteManyArgs>(args?: SelectSubset<T, clientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientesUpdateManyArgs>(args: SelectSubset<T, clientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {clientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends clientesUpsertArgs>(args: SelectSubset<T, clientesUpsertArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clientesCountArgs>(
      args?: Subset<T, clientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesGroupByArgs} args - Group by arguments.
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
      T extends clientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientesGroupByArgs['orderBy'] }
        : { orderBy?: clientesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clientes model
   */
  readonly fields: clientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    arriendos<T extends clientes$arriendosArgs<ExtArgs> = {}>(args?: Subset<T, clientes$arriendosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the clientes model
   */
  interface clientesFieldRefs {
    readonly id: FieldRef<"clientes", 'Int'>
    readonly rut: FieldRef<"clientes", 'String'>
    readonly nombres: FieldRef<"clientes", 'String'>
    readonly apellidos: FieldRef<"clientes", 'String'>
    readonly email: FieldRef<"clientes", 'String'>
    readonly telefono: FieldRef<"clientes", 'String'>
    readonly direccion: FieldRef<"clientes", 'String'>
    readonly licencia_conducir: FieldRef<"clientes", 'String'>
    readonly activo: FieldRef<"clientes", 'Boolean'>
    readonly created_at: FieldRef<"clientes", 'DateTime'>
    readonly updated_at: FieldRef<"clientes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clientes findUnique
   */
  export type clientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findUniqueOrThrow
   */
  export type clientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findFirst
   */
  export type clientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findFirstOrThrow
   */
  export type clientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findMany
   */
  export type clientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes create
   */
  export type clientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to create a clientes.
     */
    data: XOR<clientesCreateInput, clientesUncheckedCreateInput>
  }

  /**
   * clientes createMany
   */
  export type clientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes update
   */
  export type clientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to update a clientes.
     */
    data: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
    /**
     * Choose, which clientes to update.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes updateMany
   */
  export type clientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * clientes upsert
   */
  export type clientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The filter to search for the clientes to update in case it exists.
     */
    where: clientesWhereUniqueInput
    /**
     * In case the clientes found by the `where` argument doesn't exist, create a new clientes with this data.
     */
    create: XOR<clientesCreateInput, clientesUncheckedCreateInput>
    /**
     * In case the clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
  }

  /**
   * clientes delete
   */
  export type clientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter which clientes to delete.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes deleteMany
   */
  export type clientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * clientes.arriendos
   */
  export type clientes$arriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    where?: arriendosWhereInput
    orderBy?: arriendosOrderByWithRelationInput | arriendosOrderByWithRelationInput[]
    cursor?: arriendosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArriendosScalarFieldEnum | ArriendosScalarFieldEnum[]
  }

  /**
   * clientes without action
   */
  export type clientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
  }


  /**
   * Model perfiles
   */

  export type AggregatePerfiles = {
    _count: PerfilesCountAggregateOutputType | null
    _avg: PerfilesAvgAggregateOutputType | null
    _sum: PerfilesSumAggregateOutputType | null
    _min: PerfilesMinAggregateOutputType | null
    _max: PerfilesMaxAggregateOutputType | null
  }

  export type PerfilesAvgAggregateOutputType = {
    id: number | null
  }

  export type PerfilesSumAggregateOutputType = {
    id: number | null
  }

  export type PerfilesMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PerfilesMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PerfilesCountAggregateOutputType = {
    id: number
    nombre: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PerfilesAvgAggregateInputType = {
    id?: true
  }

  export type PerfilesSumAggregateInputType = {
    id?: true
  }

  export type PerfilesMinAggregateInputType = {
    id?: true
    nombre?: true
    created_at?: true
    updated_at?: true
  }

  export type PerfilesMaxAggregateInputType = {
    id?: true
    nombre?: true
    created_at?: true
    updated_at?: true
  }

  export type PerfilesCountAggregateInputType = {
    id?: true
    nombre?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PerfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which perfiles to aggregate.
     */
    where?: perfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfiles to fetch.
     */
    orderBy?: perfilesOrderByWithRelationInput | perfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: perfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned perfiles
    **/
    _count?: true | PerfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilesMaxAggregateInputType
  }

  export type GetPerfilesAggregateType<T extends PerfilesAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfiles[P]>
      : GetScalarType<T[P], AggregatePerfiles[P]>
  }




  export type perfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: perfilesWhereInput
    orderBy?: perfilesOrderByWithAggregationInput | perfilesOrderByWithAggregationInput[]
    by: PerfilesScalarFieldEnum[] | PerfilesScalarFieldEnum
    having?: perfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilesCountAggregateInputType | true
    _avg?: PerfilesAvgAggregateInputType
    _sum?: PerfilesSumAggregateInputType
    _min?: PerfilesMinAggregateInputType
    _max?: PerfilesMaxAggregateInputType
  }

  export type PerfilesGroupByOutputType = {
    id: number
    nombre: string
    created_at: Date
    updated_at: Date
    _count: PerfilesCountAggregateOutputType | null
    _avg: PerfilesAvgAggregateOutputType | null
    _sum: PerfilesSumAggregateOutputType | null
    _min: PerfilesMinAggregateOutputType | null
    _max: PerfilesMaxAggregateOutputType | null
  }

  type GetPerfilesGroupByPayload<T extends perfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilesGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilesGroupByOutputType[P]>
        }
      >
    >


  export type perfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    created_at?: boolean
    updated_at?: boolean
    usuarios?: boolean | perfiles$usuariosArgs<ExtArgs>
    _count?: boolean | PerfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfiles"]>



  export type perfilesSelectScalar = {
    id?: boolean
    nombre?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type perfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "created_at" | "updated_at", ExtArgs["result"]["perfiles"]>
  export type perfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | perfiles$usuariosArgs<ExtArgs>
    _count?: boolean | PerfilesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $perfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "perfiles"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["perfiles"]>
    composites: {}
  }

  type perfilesGetPayload<S extends boolean | null | undefined | perfilesDefaultArgs> = $Result.GetResult<Prisma.$perfilesPayload, S>

  type perfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<perfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerfilesCountAggregateInputType | true
    }

  export interface perfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['perfiles'], meta: { name: 'perfiles' } }
    /**
     * Find zero or one Perfiles that matches the filter.
     * @param {perfilesFindUniqueArgs} args - Arguments to find a Perfiles
     * @example
     * // Get one Perfiles
     * const perfiles = await prisma.perfiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends perfilesFindUniqueArgs>(args: SelectSubset<T, perfilesFindUniqueArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perfiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {perfilesFindUniqueOrThrowArgs} args - Arguments to find a Perfiles
     * @example
     * // Get one Perfiles
     * const perfiles = await prisma.perfiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends perfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, perfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesFindFirstArgs} args - Arguments to find a Perfiles
     * @example
     * // Get one Perfiles
     * const perfiles = await prisma.perfiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends perfilesFindFirstArgs>(args?: SelectSubset<T, perfilesFindFirstArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesFindFirstOrThrowArgs} args - Arguments to find a Perfiles
     * @example
     * // Get one Perfiles
     * const perfiles = await prisma.perfiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends perfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, perfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfiles
     * const perfiles = await prisma.perfiles.findMany()
     * 
     * // Get first 10 Perfiles
     * const perfiles = await prisma.perfiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilesWithIdOnly = await prisma.perfiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends perfilesFindManyArgs>(args?: SelectSubset<T, perfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perfiles.
     * @param {perfilesCreateArgs} args - Arguments to create a Perfiles.
     * @example
     * // Create one Perfiles
     * const Perfiles = await prisma.perfiles.create({
     *   data: {
     *     // ... data to create a Perfiles
     *   }
     * })
     * 
     */
    create<T extends perfilesCreateArgs>(args: SelectSubset<T, perfilesCreateArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perfiles.
     * @param {perfilesCreateManyArgs} args - Arguments to create many Perfiles.
     * @example
     * // Create many Perfiles
     * const perfiles = await prisma.perfiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends perfilesCreateManyArgs>(args?: SelectSubset<T, perfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Perfiles.
     * @param {perfilesDeleteArgs} args - Arguments to delete one Perfiles.
     * @example
     * // Delete one Perfiles
     * const Perfiles = await prisma.perfiles.delete({
     *   where: {
     *     // ... filter to delete one Perfiles
     *   }
     * })
     * 
     */
    delete<T extends perfilesDeleteArgs>(args: SelectSubset<T, perfilesDeleteArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perfiles.
     * @param {perfilesUpdateArgs} args - Arguments to update one Perfiles.
     * @example
     * // Update one Perfiles
     * const perfiles = await prisma.perfiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends perfilesUpdateArgs>(args: SelectSubset<T, perfilesUpdateArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perfiles.
     * @param {perfilesDeleteManyArgs} args - Arguments to filter Perfiles to delete.
     * @example
     * // Delete a few Perfiles
     * const { count } = await prisma.perfiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends perfilesDeleteManyArgs>(args?: SelectSubset<T, perfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfiles
     * const perfiles = await prisma.perfiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends perfilesUpdateManyArgs>(args: SelectSubset<T, perfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Perfiles.
     * @param {perfilesUpsertArgs} args - Arguments to update or create a Perfiles.
     * @example
     * // Update or create a Perfiles
     * const perfiles = await prisma.perfiles.upsert({
     *   create: {
     *     // ... data to create a Perfiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfiles we want to update
     *   }
     * })
     */
    upsert<T extends perfilesUpsertArgs>(args: SelectSubset<T, perfilesUpsertArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesCountArgs} args - Arguments to filter Perfiles to count.
     * @example
     * // Count the number of Perfiles
     * const count = await prisma.perfiles.count({
     *   where: {
     *     // ... the filter for the Perfiles we want to count
     *   }
     * })
    **/
    count<T extends perfilesCountArgs>(
      args?: Subset<T, perfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerfilesAggregateArgs>(args: Subset<T, PerfilesAggregateArgs>): Prisma.PrismaPromise<GetPerfilesAggregateType<T>>

    /**
     * Group by Perfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesGroupByArgs} args - Group by arguments.
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
      T extends perfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: perfilesGroupByArgs['orderBy'] }
        : { orderBy?: perfilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, perfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the perfiles model
   */
  readonly fields: perfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for perfiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__perfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends perfiles$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, perfiles$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the perfiles model
   */
  interface perfilesFieldRefs {
    readonly id: FieldRef<"perfiles", 'Int'>
    readonly nombre: FieldRef<"perfiles", 'String'>
    readonly created_at: FieldRef<"perfiles", 'DateTime'>
    readonly updated_at: FieldRef<"perfiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * perfiles findUnique
   */
  export type perfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfiles
     */
    omit?: perfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter, which perfiles to fetch.
     */
    where: perfilesWhereUniqueInput
  }

  /**
   * perfiles findUniqueOrThrow
   */
  export type perfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfiles
     */
    omit?: perfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter, which perfiles to fetch.
     */
    where: perfilesWhereUniqueInput
  }

  /**
   * perfiles findFirst
   */
  export type perfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfiles
     */
    omit?: perfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter, which perfiles to fetch.
     */
    where?: perfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfiles to fetch.
     */
    orderBy?: perfilesOrderByWithRelationInput | perfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for perfiles.
     */
    cursor?: perfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of perfiles.
     */
    distinct?: PerfilesScalarFieldEnum | PerfilesScalarFieldEnum[]
  }

  /**
   * perfiles findFirstOrThrow
   */
  export type perfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfiles
     */
    omit?: perfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter, which perfiles to fetch.
     */
    where?: perfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfiles to fetch.
     */
    orderBy?: perfilesOrderByWithRelationInput | perfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for perfiles.
     */
    cursor?: perfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of perfiles.
     */
    distinct?: PerfilesScalarFieldEnum | PerfilesScalarFieldEnum[]
  }

  /**
   * perfiles findMany
   */
  export type perfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfiles
     */
    omit?: perfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter, which perfiles to fetch.
     */
    where?: perfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfiles to fetch.
     */
    orderBy?: perfilesOrderByWithRelationInput | perfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing perfiles.
     */
    cursor?: perfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfiles.
     */
    skip?: number
    distinct?: PerfilesScalarFieldEnum | PerfilesScalarFieldEnum[]
  }

  /**
   * perfiles create
   */
  export type perfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfiles
     */
    omit?: perfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a perfiles.
     */
    data: XOR<perfilesCreateInput, perfilesUncheckedCreateInput>
  }

  /**
   * perfiles createMany
   */
  export type perfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many perfiles.
     */
    data: perfilesCreateManyInput | perfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * perfiles update
   */
  export type perfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfiles
     */
    omit?: perfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a perfiles.
     */
    data: XOR<perfilesUpdateInput, perfilesUncheckedUpdateInput>
    /**
     * Choose, which perfiles to update.
     */
    where: perfilesWhereUniqueInput
  }

  /**
   * perfiles updateMany
   */
  export type perfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update perfiles.
     */
    data: XOR<perfilesUpdateManyMutationInput, perfilesUncheckedUpdateManyInput>
    /**
     * Filter which perfiles to update
     */
    where?: perfilesWhereInput
    /**
     * Limit how many perfiles to update.
     */
    limit?: number
  }

  /**
   * perfiles upsert
   */
  export type perfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfiles
     */
    omit?: perfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the perfiles to update in case it exists.
     */
    where: perfilesWhereUniqueInput
    /**
     * In case the perfiles found by the `where` argument doesn't exist, create a new perfiles with this data.
     */
    create: XOR<perfilesCreateInput, perfilesUncheckedCreateInput>
    /**
     * In case the perfiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<perfilesUpdateInput, perfilesUncheckedUpdateInput>
  }

  /**
   * perfiles delete
   */
  export type perfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfiles
     */
    omit?: perfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter which perfiles to delete.
     */
    where: perfilesWhereUniqueInput
  }

  /**
   * perfiles deleteMany
   */
  export type perfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which perfiles to delete
     */
    where?: perfilesWhereInput
    /**
     * Limit how many perfiles to delete.
     */
    limit?: number
  }

  /**
   * perfiles.usuarios
   */
  export type perfiles$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    cursor?: usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * perfiles without action
   */
  export type perfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfiles
     */
    omit?: perfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
  }


  /**
   * Model tipos_vehiculo
   */

  export type AggregateTipos_vehiculo = {
    _count: Tipos_vehiculoCountAggregateOutputType | null
    _avg: Tipos_vehiculoAvgAggregateOutputType | null
    _sum: Tipos_vehiculoSumAggregateOutputType | null
    _min: Tipos_vehiculoMinAggregateOutputType | null
    _max: Tipos_vehiculoMaxAggregateOutputType | null
  }

  export type Tipos_vehiculoAvgAggregateOutputType = {
    id: number | null
    valor_diario: number | null
  }

  export type Tipos_vehiculoSumAggregateOutputType = {
    id: number | null
    valor_diario: number | null
  }

  export type Tipos_vehiculoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    valor_diario: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Tipos_vehiculoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    valor_diario: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Tipos_vehiculoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    valor_diario: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Tipos_vehiculoAvgAggregateInputType = {
    id?: true
    valor_diario?: true
  }

  export type Tipos_vehiculoSumAggregateInputType = {
    id?: true
    valor_diario?: true
  }

  export type Tipos_vehiculoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    valor_diario?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type Tipos_vehiculoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    valor_diario?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type Tipos_vehiculoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    valor_diario?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Tipos_vehiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipos_vehiculo to aggregate.
     */
    where?: tipos_vehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipos_vehiculos to fetch.
     */
    orderBy?: tipos_vehiculoOrderByWithRelationInput | tipos_vehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipos_vehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipos_vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipos_vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipos_vehiculos
    **/
    _count?: true | Tipos_vehiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipos_vehiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipos_vehiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipos_vehiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipos_vehiculoMaxAggregateInputType
  }

  export type GetTipos_vehiculoAggregateType<T extends Tipos_vehiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipos_vehiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipos_vehiculo[P]>
      : GetScalarType<T[P], AggregateTipos_vehiculo[P]>
  }




  export type tipos_vehiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipos_vehiculoWhereInput
    orderBy?: tipos_vehiculoOrderByWithAggregationInput | tipos_vehiculoOrderByWithAggregationInput[]
    by: Tipos_vehiculoScalarFieldEnum[] | Tipos_vehiculoScalarFieldEnum
    having?: tipos_vehiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipos_vehiculoCountAggregateInputType | true
    _avg?: Tipos_vehiculoAvgAggregateInputType
    _sum?: Tipos_vehiculoSumAggregateInputType
    _min?: Tipos_vehiculoMinAggregateInputType
    _max?: Tipos_vehiculoMaxAggregateInputType
  }

  export type Tipos_vehiculoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    valor_diario: number
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: Tipos_vehiculoCountAggregateOutputType | null
    _avg: Tipos_vehiculoAvgAggregateOutputType | null
    _sum: Tipos_vehiculoSumAggregateOutputType | null
    _min: Tipos_vehiculoMinAggregateOutputType | null
    _max: Tipos_vehiculoMaxAggregateOutputType | null
  }

  type GetTipos_vehiculoGroupByPayload<T extends tipos_vehiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipos_vehiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipos_vehiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipos_vehiculoGroupByOutputType[P]>
            : GetScalarType<T[P], Tipos_vehiculoGroupByOutputType[P]>
        }
      >
    >


  export type tipos_vehiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    valor_diario?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    vehiculos?: boolean | tipos_vehiculo$vehiculosArgs<ExtArgs>
    _count?: boolean | Tipos_vehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipos_vehiculo"]>



  export type tipos_vehiculoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    valor_diario?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tipos_vehiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "valor_diario" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["tipos_vehiculo"]>
  export type tipos_vehiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | tipos_vehiculo$vehiculosArgs<ExtArgs>
    _count?: boolean | Tipos_vehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tipos_vehiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipos_vehiculo"
    objects: {
      vehiculos: Prisma.$vehiculosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      valor_diario: number
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tipos_vehiculo"]>
    composites: {}
  }

  type tipos_vehiculoGetPayload<S extends boolean | null | undefined | tipos_vehiculoDefaultArgs> = $Result.GetResult<Prisma.$tipos_vehiculoPayload, S>

  type tipos_vehiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipos_vehiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipos_vehiculoCountAggregateInputType | true
    }

  export interface tipos_vehiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipos_vehiculo'], meta: { name: 'tipos_vehiculo' } }
    /**
     * Find zero or one Tipos_vehiculo that matches the filter.
     * @param {tipos_vehiculoFindUniqueArgs} args - Arguments to find a Tipos_vehiculo
     * @example
     * // Get one Tipos_vehiculo
     * const tipos_vehiculo = await prisma.tipos_vehiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipos_vehiculoFindUniqueArgs>(args: SelectSubset<T, tipos_vehiculoFindUniqueArgs<ExtArgs>>): Prisma__tipos_vehiculoClient<$Result.GetResult<Prisma.$tipos_vehiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipos_vehiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipos_vehiculoFindUniqueOrThrowArgs} args - Arguments to find a Tipos_vehiculo
     * @example
     * // Get one Tipos_vehiculo
     * const tipos_vehiculo = await prisma.tipos_vehiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipos_vehiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, tipos_vehiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipos_vehiculoClient<$Result.GetResult<Prisma.$tipos_vehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipos_vehiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_vehiculoFindFirstArgs} args - Arguments to find a Tipos_vehiculo
     * @example
     * // Get one Tipos_vehiculo
     * const tipos_vehiculo = await prisma.tipos_vehiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipos_vehiculoFindFirstArgs>(args?: SelectSubset<T, tipos_vehiculoFindFirstArgs<ExtArgs>>): Prisma__tipos_vehiculoClient<$Result.GetResult<Prisma.$tipos_vehiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipos_vehiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_vehiculoFindFirstOrThrowArgs} args - Arguments to find a Tipos_vehiculo
     * @example
     * // Get one Tipos_vehiculo
     * const tipos_vehiculo = await prisma.tipos_vehiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipos_vehiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, tipos_vehiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipos_vehiculoClient<$Result.GetResult<Prisma.$tipos_vehiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipos_vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_vehiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipos_vehiculos
     * const tipos_vehiculos = await prisma.tipos_vehiculo.findMany()
     * 
     * // Get first 10 Tipos_vehiculos
     * const tipos_vehiculos = await prisma.tipos_vehiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipos_vehiculoWithIdOnly = await prisma.tipos_vehiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tipos_vehiculoFindManyArgs>(args?: SelectSubset<T, tipos_vehiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipos_vehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipos_vehiculo.
     * @param {tipos_vehiculoCreateArgs} args - Arguments to create a Tipos_vehiculo.
     * @example
     * // Create one Tipos_vehiculo
     * const Tipos_vehiculo = await prisma.tipos_vehiculo.create({
     *   data: {
     *     // ... data to create a Tipos_vehiculo
     *   }
     * })
     * 
     */
    create<T extends tipos_vehiculoCreateArgs>(args: SelectSubset<T, tipos_vehiculoCreateArgs<ExtArgs>>): Prisma__tipos_vehiculoClient<$Result.GetResult<Prisma.$tipos_vehiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipos_vehiculos.
     * @param {tipos_vehiculoCreateManyArgs} args - Arguments to create many Tipos_vehiculos.
     * @example
     * // Create many Tipos_vehiculos
     * const tipos_vehiculo = await prisma.tipos_vehiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipos_vehiculoCreateManyArgs>(args?: SelectSubset<T, tipos_vehiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipos_vehiculo.
     * @param {tipos_vehiculoDeleteArgs} args - Arguments to delete one Tipos_vehiculo.
     * @example
     * // Delete one Tipos_vehiculo
     * const Tipos_vehiculo = await prisma.tipos_vehiculo.delete({
     *   where: {
     *     // ... filter to delete one Tipos_vehiculo
     *   }
     * })
     * 
     */
    delete<T extends tipos_vehiculoDeleteArgs>(args: SelectSubset<T, tipos_vehiculoDeleteArgs<ExtArgs>>): Prisma__tipos_vehiculoClient<$Result.GetResult<Prisma.$tipos_vehiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipos_vehiculo.
     * @param {tipos_vehiculoUpdateArgs} args - Arguments to update one Tipos_vehiculo.
     * @example
     * // Update one Tipos_vehiculo
     * const tipos_vehiculo = await prisma.tipos_vehiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipos_vehiculoUpdateArgs>(args: SelectSubset<T, tipos_vehiculoUpdateArgs<ExtArgs>>): Prisma__tipos_vehiculoClient<$Result.GetResult<Prisma.$tipos_vehiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipos_vehiculos.
     * @param {tipos_vehiculoDeleteManyArgs} args - Arguments to filter Tipos_vehiculos to delete.
     * @example
     * // Delete a few Tipos_vehiculos
     * const { count } = await prisma.tipos_vehiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipos_vehiculoDeleteManyArgs>(args?: SelectSubset<T, tipos_vehiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos_vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_vehiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipos_vehiculos
     * const tipos_vehiculo = await prisma.tipos_vehiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipos_vehiculoUpdateManyArgs>(args: SelectSubset<T, tipos_vehiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipos_vehiculo.
     * @param {tipos_vehiculoUpsertArgs} args - Arguments to update or create a Tipos_vehiculo.
     * @example
     * // Update or create a Tipos_vehiculo
     * const tipos_vehiculo = await prisma.tipos_vehiculo.upsert({
     *   create: {
     *     // ... data to create a Tipos_vehiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipos_vehiculo we want to update
     *   }
     * })
     */
    upsert<T extends tipos_vehiculoUpsertArgs>(args: SelectSubset<T, tipos_vehiculoUpsertArgs<ExtArgs>>): Prisma__tipos_vehiculoClient<$Result.GetResult<Prisma.$tipos_vehiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipos_vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_vehiculoCountArgs} args - Arguments to filter Tipos_vehiculos to count.
     * @example
     * // Count the number of Tipos_vehiculos
     * const count = await prisma.tipos_vehiculo.count({
     *   where: {
     *     // ... the filter for the Tipos_vehiculos we want to count
     *   }
     * })
    **/
    count<T extends tipos_vehiculoCountArgs>(
      args?: Subset<T, tipos_vehiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipos_vehiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipos_vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipos_vehiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tipos_vehiculoAggregateArgs>(args: Subset<T, Tipos_vehiculoAggregateArgs>): Prisma.PrismaPromise<GetTipos_vehiculoAggregateType<T>>

    /**
     * Group by Tipos_vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_vehiculoGroupByArgs} args - Group by arguments.
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
      T extends tipos_vehiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipos_vehiculoGroupByArgs['orderBy'] }
        : { orderBy?: tipos_vehiculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tipos_vehiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipos_vehiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipos_vehiculo model
   */
  readonly fields: tipos_vehiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipos_vehiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipos_vehiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculos<T extends tipos_vehiculo$vehiculosArgs<ExtArgs> = {}>(args?: Subset<T, tipos_vehiculo$vehiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tipos_vehiculo model
   */
  interface tipos_vehiculoFieldRefs {
    readonly id: FieldRef<"tipos_vehiculo", 'Int'>
    readonly nombre: FieldRef<"tipos_vehiculo", 'String'>
    readonly descripcion: FieldRef<"tipos_vehiculo", 'String'>
    readonly valor_diario: FieldRef<"tipos_vehiculo", 'Int'>
    readonly activo: FieldRef<"tipos_vehiculo", 'Boolean'>
    readonly created_at: FieldRef<"tipos_vehiculo", 'DateTime'>
    readonly updated_at: FieldRef<"tipos_vehiculo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tipos_vehiculo findUnique
   */
  export type tipos_vehiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_vehiculo
     */
    select?: tipos_vehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_vehiculo
     */
    omit?: tipos_vehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_vehiculoInclude<ExtArgs> | null
    /**
     * Filter, which tipos_vehiculo to fetch.
     */
    where: tipos_vehiculoWhereUniqueInput
  }

  /**
   * tipos_vehiculo findUniqueOrThrow
   */
  export type tipos_vehiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_vehiculo
     */
    select?: tipos_vehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_vehiculo
     */
    omit?: tipos_vehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_vehiculoInclude<ExtArgs> | null
    /**
     * Filter, which tipos_vehiculo to fetch.
     */
    where: tipos_vehiculoWhereUniqueInput
  }

  /**
   * tipos_vehiculo findFirst
   */
  export type tipos_vehiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_vehiculo
     */
    select?: tipos_vehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_vehiculo
     */
    omit?: tipos_vehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_vehiculoInclude<ExtArgs> | null
    /**
     * Filter, which tipos_vehiculo to fetch.
     */
    where?: tipos_vehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipos_vehiculos to fetch.
     */
    orderBy?: tipos_vehiculoOrderByWithRelationInput | tipos_vehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipos_vehiculos.
     */
    cursor?: tipos_vehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipos_vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipos_vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipos_vehiculos.
     */
    distinct?: Tipos_vehiculoScalarFieldEnum | Tipos_vehiculoScalarFieldEnum[]
  }

  /**
   * tipos_vehiculo findFirstOrThrow
   */
  export type tipos_vehiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_vehiculo
     */
    select?: tipos_vehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_vehiculo
     */
    omit?: tipos_vehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_vehiculoInclude<ExtArgs> | null
    /**
     * Filter, which tipos_vehiculo to fetch.
     */
    where?: tipos_vehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipos_vehiculos to fetch.
     */
    orderBy?: tipos_vehiculoOrderByWithRelationInput | tipos_vehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipos_vehiculos.
     */
    cursor?: tipos_vehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipos_vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipos_vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipos_vehiculos.
     */
    distinct?: Tipos_vehiculoScalarFieldEnum | Tipos_vehiculoScalarFieldEnum[]
  }

  /**
   * tipos_vehiculo findMany
   */
  export type tipos_vehiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_vehiculo
     */
    select?: tipos_vehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_vehiculo
     */
    omit?: tipos_vehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_vehiculoInclude<ExtArgs> | null
    /**
     * Filter, which tipos_vehiculos to fetch.
     */
    where?: tipos_vehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipos_vehiculos to fetch.
     */
    orderBy?: tipos_vehiculoOrderByWithRelationInput | tipos_vehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipos_vehiculos.
     */
    cursor?: tipos_vehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipos_vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipos_vehiculos.
     */
    skip?: number
    distinct?: Tipos_vehiculoScalarFieldEnum | Tipos_vehiculoScalarFieldEnum[]
  }

  /**
   * tipos_vehiculo create
   */
  export type tipos_vehiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_vehiculo
     */
    select?: tipos_vehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_vehiculo
     */
    omit?: tipos_vehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_vehiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a tipos_vehiculo.
     */
    data: XOR<tipos_vehiculoCreateInput, tipos_vehiculoUncheckedCreateInput>
  }

  /**
   * tipos_vehiculo createMany
   */
  export type tipos_vehiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipos_vehiculos.
     */
    data: tipos_vehiculoCreateManyInput | tipos_vehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipos_vehiculo update
   */
  export type tipos_vehiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_vehiculo
     */
    select?: tipos_vehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_vehiculo
     */
    omit?: tipos_vehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_vehiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a tipos_vehiculo.
     */
    data: XOR<tipos_vehiculoUpdateInput, tipos_vehiculoUncheckedUpdateInput>
    /**
     * Choose, which tipos_vehiculo to update.
     */
    where: tipos_vehiculoWhereUniqueInput
  }

  /**
   * tipos_vehiculo updateMany
   */
  export type tipos_vehiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipos_vehiculos.
     */
    data: XOR<tipos_vehiculoUpdateManyMutationInput, tipos_vehiculoUncheckedUpdateManyInput>
    /**
     * Filter which tipos_vehiculos to update
     */
    where?: tipos_vehiculoWhereInput
    /**
     * Limit how many tipos_vehiculos to update.
     */
    limit?: number
  }

  /**
   * tipos_vehiculo upsert
   */
  export type tipos_vehiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_vehiculo
     */
    select?: tipos_vehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_vehiculo
     */
    omit?: tipos_vehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_vehiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the tipos_vehiculo to update in case it exists.
     */
    where: tipos_vehiculoWhereUniqueInput
    /**
     * In case the tipos_vehiculo found by the `where` argument doesn't exist, create a new tipos_vehiculo with this data.
     */
    create: XOR<tipos_vehiculoCreateInput, tipos_vehiculoUncheckedCreateInput>
    /**
     * In case the tipos_vehiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipos_vehiculoUpdateInput, tipos_vehiculoUncheckedUpdateInput>
  }

  /**
   * tipos_vehiculo delete
   */
  export type tipos_vehiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_vehiculo
     */
    select?: tipos_vehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_vehiculo
     */
    omit?: tipos_vehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_vehiculoInclude<ExtArgs> | null
    /**
     * Filter which tipos_vehiculo to delete.
     */
    where: tipos_vehiculoWhereUniqueInput
  }

  /**
   * tipos_vehiculo deleteMany
   */
  export type tipos_vehiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipos_vehiculos to delete
     */
    where?: tipos_vehiculoWhereInput
    /**
     * Limit how many tipos_vehiculos to delete.
     */
    limit?: number
  }

  /**
   * tipos_vehiculo.vehiculos
   */
  export type tipos_vehiculo$vehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiculosInclude<ExtArgs> | null
    where?: vehiculosWhereInput
    orderBy?: vehiculosOrderByWithRelationInput | vehiculosOrderByWithRelationInput[]
    cursor?: vehiculosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehiculosScalarFieldEnum | VehiculosScalarFieldEnum[]
  }

  /**
   * tipos_vehiculo without action
   */
  export type tipos_vehiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_vehiculo
     */
    select?: tipos_vehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_vehiculo
     */
    omit?: tipos_vehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_vehiculoInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
    perfil_id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
    perfil_id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    perfil_id: number | null
    rut: string | null
    nombres: string | null
    apellidos: string | null
    email: string | null
    password_hash: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    perfil_id: number | null
    rut: string | null
    nombres: string | null
    apellidos: string | null
    email: string | null
    password_hash: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    perfil_id: number
    rut: number
    nombres: number
    apellidos: number
    email: number
    password_hash: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
    perfil_id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
    perfil_id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    perfil_id?: true
    rut?: true
    nombres?: true
    apellidos?: true
    email?: true
    password_hash?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    perfil_id?: true
    rut?: true
    nombres?: true
    apellidos?: true
    email?: true
    password_hash?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    perfil_id?: true
    rut?: true
    nombres?: true
    apellidos?: true
    email?: true
    password_hash?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    perfil_id: number
    rut: string
    nombres: string
    apellidos: string
    email: string
    password_hash: string
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    perfil_id?: boolean
    rut?: boolean
    nombres?: boolean
    apellidos?: boolean
    email?: boolean
    password_hash?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    arriendos?: boolean | usuarios$arriendosArgs<ExtArgs>
    perfiles?: boolean | perfilesDefaultArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id?: boolean
    perfil_id?: boolean
    rut?: boolean
    nombres?: boolean
    apellidos?: boolean
    email?: boolean
    password_hash?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "perfil_id" | "rut" | "nombres" | "apellidos" | "email" | "password_hash" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arriendos?: boolean | usuarios$arriendosArgs<ExtArgs>
    perfiles?: boolean | perfilesDefaultArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      arriendos: Prisma.$arriendosPayload<ExtArgs>[]
      perfiles: Prisma.$perfilesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      perfil_id: number
      rut: string
      nombres: string
      apellidos: string
      email: string
      password_hash: string
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    arriendos<T extends usuarios$arriendosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$arriendosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    perfiles<T extends perfilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, perfilesDefaultArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly perfil_id: FieldRef<"usuarios", 'Int'>
    readonly rut: FieldRef<"usuarios", 'String'>
    readonly nombres: FieldRef<"usuarios", 'String'>
    readonly apellidos: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly password_hash: FieldRef<"usuarios", 'String'>
    readonly activo: FieldRef<"usuarios", 'Boolean'>
    readonly created_at: FieldRef<"usuarios", 'DateTime'>
    readonly updated_at: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.arriendos
   */
  export type usuarios$arriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    where?: arriendosWhereInput
    orderBy?: arriendosOrderByWithRelationInput | arriendosOrderByWithRelationInput[]
    cursor?: arriendosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArriendosScalarFieldEnum | ArriendosScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model vehiculos
   */

  export type AggregateVehiculos = {
    _count: VehiculosCountAggregateOutputType | null
    _avg: VehiculosAvgAggregateOutputType | null
    _sum: VehiculosSumAggregateOutputType | null
    _min: VehiculosMinAggregateOutputType | null
    _max: VehiculosMaxAggregateOutputType | null
  }

  export type VehiculosAvgAggregateOutputType = {
    id: number | null
    tipo_id: number | null
    anio: number | null
  }

  export type VehiculosSumAggregateOutputType = {
    id: number | null
    tipo_id: number | null
    anio: number | null
  }

  export type VehiculosMinAggregateOutputType = {
    id: number | null
    tipo_id: number | null
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    color: string | null
    estado: $Enums.vehiculos_estado | null
    foto_url: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VehiculosMaxAggregateOutputType = {
    id: number | null
    tipo_id: number | null
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    color: string | null
    estado: $Enums.vehiculos_estado | null
    foto_url: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VehiculosCountAggregateOutputType = {
    id: number
    tipo_id: number
    patente: number
    marca: number
    modelo: number
    anio: number
    color: number
    estado: number
    foto_url: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VehiculosAvgAggregateInputType = {
    id?: true
    tipo_id?: true
    anio?: true
  }

  export type VehiculosSumAggregateInputType = {
    id?: true
    tipo_id?: true
    anio?: true
  }

  export type VehiculosMinAggregateInputType = {
    id?: true
    tipo_id?: true
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    color?: true
    estado?: true
    foto_url?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type VehiculosMaxAggregateInputType = {
    id?: true
    tipo_id?: true
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    color?: true
    estado?: true
    foto_url?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type VehiculosCountAggregateInputType = {
    id?: true
    tipo_id?: true
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    color?: true
    estado?: true
    foto_url?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VehiculosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehiculos to aggregate.
     */
    where?: vehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehiculos to fetch.
     */
    orderBy?: vehiculosOrderByWithRelationInput | vehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vehiculos
    **/
    _count?: true | VehiculosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiculosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiculosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculosMaxAggregateInputType
  }

  export type GetVehiculosAggregateType<T extends VehiculosAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiculos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiculos[P]>
      : GetScalarType<T[P], AggregateVehiculos[P]>
  }




  export type vehiculosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehiculosWhereInput
    orderBy?: vehiculosOrderByWithAggregationInput | vehiculosOrderByWithAggregationInput[]
    by: VehiculosScalarFieldEnum[] | VehiculosScalarFieldEnum
    having?: vehiculosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculosCountAggregateInputType | true
    _avg?: VehiculosAvgAggregateInputType
    _sum?: VehiculosSumAggregateInputType
    _min?: VehiculosMinAggregateInputType
    _max?: VehiculosMaxAggregateInputType
  }

  export type VehiculosGroupByOutputType = {
    id: number
    tipo_id: number
    patente: string
    marca: string
    modelo: string
    anio: number
    color: string
    estado: $Enums.vehiculos_estado
    foto_url: string
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: VehiculosCountAggregateOutputType | null
    _avg: VehiculosAvgAggregateOutputType | null
    _sum: VehiculosSumAggregateOutputType | null
    _min: VehiculosMinAggregateOutputType | null
    _max: VehiculosMaxAggregateOutputType | null
  }

  type GetVehiculosGroupByPayload<T extends vehiculosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculosGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculosGroupByOutputType[P]>
        }
      >
    >


  export type vehiculosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_id?: boolean
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    color?: boolean
    estado?: boolean
    foto_url?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    arriendos?: boolean | vehiculos$arriendosArgs<ExtArgs>
    tipos_vehiculo?: boolean | tipos_vehiculoDefaultArgs<ExtArgs>
    _count?: boolean | VehiculosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculos"]>



  export type vehiculosSelectScalar = {
    id?: boolean
    tipo_id?: boolean
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    color?: boolean
    estado?: boolean
    foto_url?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type vehiculosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo_id" | "patente" | "marca" | "modelo" | "anio" | "color" | "estado" | "foto_url" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["vehiculos"]>
  export type vehiculosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arriendos?: boolean | vehiculos$arriendosArgs<ExtArgs>
    tipos_vehiculo?: boolean | tipos_vehiculoDefaultArgs<ExtArgs>
    _count?: boolean | VehiculosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vehiculosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vehiculos"
    objects: {
      arriendos: Prisma.$arriendosPayload<ExtArgs>[]
      tipos_vehiculo: Prisma.$tipos_vehiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo_id: number
      patente: string
      marca: string
      modelo: string
      anio: number
      color: string
      estado: $Enums.vehiculos_estado
      foto_url: string
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["vehiculos"]>
    composites: {}
  }

  type vehiculosGetPayload<S extends boolean | null | undefined | vehiculosDefaultArgs> = $Result.GetResult<Prisma.$vehiculosPayload, S>

  type vehiculosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vehiculosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculosCountAggregateInputType | true
    }

  export interface vehiculosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehiculos'], meta: { name: 'vehiculos' } }
    /**
     * Find zero or one Vehiculos that matches the filter.
     * @param {vehiculosFindUniqueArgs} args - Arguments to find a Vehiculos
     * @example
     * // Get one Vehiculos
     * const vehiculos = await prisma.vehiculos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vehiculosFindUniqueArgs>(args: SelectSubset<T, vehiculosFindUniqueArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehiculos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vehiculosFindUniqueOrThrowArgs} args - Arguments to find a Vehiculos
     * @example
     * // Get one Vehiculos
     * const vehiculos = await prisma.vehiculos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vehiculosFindUniqueOrThrowArgs>(args: SelectSubset<T, vehiculosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosFindFirstArgs} args - Arguments to find a Vehiculos
     * @example
     * // Get one Vehiculos
     * const vehiculos = await prisma.vehiculos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vehiculosFindFirstArgs>(args?: SelectSubset<T, vehiculosFindFirstArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosFindFirstOrThrowArgs} args - Arguments to find a Vehiculos
     * @example
     * // Get one Vehiculos
     * const vehiculos = await prisma.vehiculos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vehiculosFindFirstOrThrowArgs>(args?: SelectSubset<T, vehiculosFindFirstOrThrowArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehiculos
     * const vehiculos = await prisma.vehiculos.findMany()
     * 
     * // Get first 10 Vehiculos
     * const vehiculos = await prisma.vehiculos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiculosWithIdOnly = await prisma.vehiculos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vehiculosFindManyArgs>(args?: SelectSubset<T, vehiculosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehiculos.
     * @param {vehiculosCreateArgs} args - Arguments to create a Vehiculos.
     * @example
     * // Create one Vehiculos
     * const Vehiculos = await prisma.vehiculos.create({
     *   data: {
     *     // ... data to create a Vehiculos
     *   }
     * })
     * 
     */
    create<T extends vehiculosCreateArgs>(args: SelectSubset<T, vehiculosCreateArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehiculos.
     * @param {vehiculosCreateManyArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculos = await prisma.vehiculos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vehiculosCreateManyArgs>(args?: SelectSubset<T, vehiculosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehiculos.
     * @param {vehiculosDeleteArgs} args - Arguments to delete one Vehiculos.
     * @example
     * // Delete one Vehiculos
     * const Vehiculos = await prisma.vehiculos.delete({
     *   where: {
     *     // ... filter to delete one Vehiculos
     *   }
     * })
     * 
     */
    delete<T extends vehiculosDeleteArgs>(args: SelectSubset<T, vehiculosDeleteArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehiculos.
     * @param {vehiculosUpdateArgs} args - Arguments to update one Vehiculos.
     * @example
     * // Update one Vehiculos
     * const vehiculos = await prisma.vehiculos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vehiculosUpdateArgs>(args: SelectSubset<T, vehiculosUpdateArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehiculos.
     * @param {vehiculosDeleteManyArgs} args - Arguments to filter Vehiculos to delete.
     * @example
     * // Delete a few Vehiculos
     * const { count } = await prisma.vehiculos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vehiculosDeleteManyArgs>(args?: SelectSubset<T, vehiculosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehiculos
     * const vehiculos = await prisma.vehiculos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vehiculosUpdateManyArgs>(args: SelectSubset<T, vehiculosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehiculos.
     * @param {vehiculosUpsertArgs} args - Arguments to update or create a Vehiculos.
     * @example
     * // Update or create a Vehiculos
     * const vehiculos = await prisma.vehiculos.upsert({
     *   create: {
     *     // ... data to create a Vehiculos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehiculos we want to update
     *   }
     * })
     */
    upsert<T extends vehiculosUpsertArgs>(args: SelectSubset<T, vehiculosUpsertArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosCountArgs} args - Arguments to filter Vehiculos to count.
     * @example
     * // Count the number of Vehiculos
     * const count = await prisma.vehiculos.count({
     *   where: {
     *     // ... the filter for the Vehiculos we want to count
     *   }
     * })
    **/
    count<T extends vehiculosCountArgs>(
      args?: Subset<T, vehiculosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehiculosAggregateArgs>(args: Subset<T, VehiculosAggregateArgs>): Prisma.PrismaPromise<GetVehiculosAggregateType<T>>

    /**
     * Group by Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosGroupByArgs} args - Group by arguments.
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
      T extends vehiculosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehiculosGroupByArgs['orderBy'] }
        : { orderBy?: vehiculosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vehiculosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vehiculos model
   */
  readonly fields: vehiculosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehiculos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehiculosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    arriendos<T extends vehiculos$arriendosArgs<ExtArgs> = {}>(args?: Subset<T, vehiculos$arriendosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$arriendosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tipos_vehiculo<T extends tipos_vehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipos_vehiculoDefaultArgs<ExtArgs>>): Prisma__tipos_vehiculoClient<$Result.GetResult<Prisma.$tipos_vehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the vehiculos model
   */
  interface vehiculosFieldRefs {
    readonly id: FieldRef<"vehiculos", 'Int'>
    readonly tipo_id: FieldRef<"vehiculos", 'Int'>
    readonly patente: FieldRef<"vehiculos", 'String'>
    readonly marca: FieldRef<"vehiculos", 'String'>
    readonly modelo: FieldRef<"vehiculos", 'String'>
    readonly anio: FieldRef<"vehiculos", 'Int'>
    readonly color: FieldRef<"vehiculos", 'String'>
    readonly estado: FieldRef<"vehiculos", 'vehiculos_estado'>
    readonly foto_url: FieldRef<"vehiculos", 'String'>
    readonly activo: FieldRef<"vehiculos", 'Boolean'>
    readonly created_at: FieldRef<"vehiculos", 'DateTime'>
    readonly updated_at: FieldRef<"vehiculos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vehiculos findUnique
   */
  export type vehiculosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiculosInclude<ExtArgs> | null
    /**
     * Filter, which vehiculos to fetch.
     */
    where: vehiculosWhereUniqueInput
  }

  /**
   * vehiculos findUniqueOrThrow
   */
  export type vehiculosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiculosInclude<ExtArgs> | null
    /**
     * Filter, which vehiculos to fetch.
     */
    where: vehiculosWhereUniqueInput
  }

  /**
   * vehiculos findFirst
   */
  export type vehiculosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiculosInclude<ExtArgs> | null
    /**
     * Filter, which vehiculos to fetch.
     */
    where?: vehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehiculos to fetch.
     */
    orderBy?: vehiculosOrderByWithRelationInput | vehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehiculos.
     */
    cursor?: vehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehiculos.
     */
    distinct?: VehiculosScalarFieldEnum | VehiculosScalarFieldEnum[]
  }

  /**
   * vehiculos findFirstOrThrow
   */
  export type vehiculosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiculosInclude<ExtArgs> | null
    /**
     * Filter, which vehiculos to fetch.
     */
    where?: vehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehiculos to fetch.
     */
    orderBy?: vehiculosOrderByWithRelationInput | vehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehiculos.
     */
    cursor?: vehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehiculos.
     */
    distinct?: VehiculosScalarFieldEnum | VehiculosScalarFieldEnum[]
  }

  /**
   * vehiculos findMany
   */
  export type vehiculosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiculosInclude<ExtArgs> | null
    /**
     * Filter, which vehiculos to fetch.
     */
    where?: vehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehiculos to fetch.
     */
    orderBy?: vehiculosOrderByWithRelationInput | vehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vehiculos.
     */
    cursor?: vehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehiculos.
     */
    skip?: number
    distinct?: VehiculosScalarFieldEnum | VehiculosScalarFieldEnum[]
  }

  /**
   * vehiculos create
   */
  export type vehiculosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiculosInclude<ExtArgs> | null
    /**
     * The data needed to create a vehiculos.
     */
    data: XOR<vehiculosCreateInput, vehiculosUncheckedCreateInput>
  }

  /**
   * vehiculos createMany
   */
  export type vehiculosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehiculos.
     */
    data: vehiculosCreateManyInput | vehiculosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehiculos update
   */
  export type vehiculosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiculosInclude<ExtArgs> | null
    /**
     * The data needed to update a vehiculos.
     */
    data: XOR<vehiculosUpdateInput, vehiculosUncheckedUpdateInput>
    /**
     * Choose, which vehiculos to update.
     */
    where: vehiculosWhereUniqueInput
  }

  /**
   * vehiculos updateMany
   */
  export type vehiculosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehiculos.
     */
    data: XOR<vehiculosUpdateManyMutationInput, vehiculosUncheckedUpdateManyInput>
    /**
     * Filter which vehiculos to update
     */
    where?: vehiculosWhereInput
    /**
     * Limit how many vehiculos to update.
     */
    limit?: number
  }

  /**
   * vehiculos upsert
   */
  export type vehiculosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiculosInclude<ExtArgs> | null
    /**
     * The filter to search for the vehiculos to update in case it exists.
     */
    where: vehiculosWhereUniqueInput
    /**
     * In case the vehiculos found by the `where` argument doesn't exist, create a new vehiculos with this data.
     */
    create: XOR<vehiculosCreateInput, vehiculosUncheckedCreateInput>
    /**
     * In case the vehiculos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehiculosUpdateInput, vehiculosUncheckedUpdateInput>
  }

  /**
   * vehiculos delete
   */
  export type vehiculosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiculosInclude<ExtArgs> | null
    /**
     * Filter which vehiculos to delete.
     */
    where: vehiculosWhereUniqueInput
  }

  /**
   * vehiculos deleteMany
   */
  export type vehiculosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehiculos to delete
     */
    where?: vehiculosWhereInput
    /**
     * Limit how many vehiculos to delete.
     */
    limit?: number
  }

  /**
   * vehiculos.arriendos
   */
  export type vehiculos$arriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the arriendos
     */
    select?: arriendosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the arriendos
     */
    omit?: arriendosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: arriendosInclude<ExtArgs> | null
    where?: arriendosWhereInput
    orderBy?: arriendosOrderByWithRelationInput | arriendosOrderByWithRelationInput[]
    cursor?: arriendosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArriendosScalarFieldEnum | ArriendosScalarFieldEnum[]
  }

  /**
   * vehiculos without action
   */
  export type vehiculosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiculosInclude<ExtArgs> | null
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


  export const ArriendosScalarFieldEnum: {
    id: 'id',
    cliente_id: 'cliente_id',
    vehiculo_id: 'vehiculo_id',
    usuario_id: 'usuario_id',
    fecha_inicio: 'fecha_inicio',
    fecha_termino: 'fecha_termino',
    fecha_hora_entrega: 'fecha_hora_entrega',
    fecha_hora_recepcion: 'fecha_hora_recepcion',
    valor_diario_aplicado: 'valor_diario_aplicado',
    dias_arriendo: 'dias_arriendo',
    valor_total: 'valor_total',
    estado: 'estado',
    fotos_entrega: 'fotos_entrega',
    fotos_recepcion: 'fotos_recepcion',
    vehiculo_activo_id: 'vehiculo_activo_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ArriendosScalarFieldEnum = (typeof ArriendosScalarFieldEnum)[keyof typeof ArriendosScalarFieldEnum]


  export const ClientesScalarFieldEnum: {
    id: 'id',
    rut: 'rut',
    nombres: 'nombres',
    apellidos: 'apellidos',
    email: 'email',
    telefono: 'telefono',
    direccion: 'direccion',
    licencia_conducir: 'licencia_conducir',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const PerfilesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PerfilesScalarFieldEnum = (typeof PerfilesScalarFieldEnum)[keyof typeof PerfilesScalarFieldEnum]


  export const Tipos_vehiculoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    valor_diario: 'valor_diario',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Tipos_vehiculoScalarFieldEnum = (typeof Tipos_vehiculoScalarFieldEnum)[keyof typeof Tipos_vehiculoScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    perfil_id: 'perfil_id',
    rut: 'rut',
    nombres: 'nombres',
    apellidos: 'apellidos',
    email: 'email',
    password_hash: 'password_hash',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const VehiculosScalarFieldEnum: {
    id: 'id',
    tipo_id: 'tipo_id',
    patente: 'patente',
    marca: 'marca',
    modelo: 'modelo',
    anio: 'anio',
    color: 'color',
    estado: 'estado',
    foto_url: 'foto_url',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VehiculosScalarFieldEnum = (typeof VehiculosScalarFieldEnum)[keyof typeof VehiculosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const arriendosOrderByRelevanceFieldEnum: {
    fotos_entrega: 'fotos_entrega',
    fotos_recepcion: 'fotos_recepcion'
  };

  export type arriendosOrderByRelevanceFieldEnum = (typeof arriendosOrderByRelevanceFieldEnum)[keyof typeof arriendosOrderByRelevanceFieldEnum]


  export const clientesOrderByRelevanceFieldEnum: {
    rut: 'rut',
    nombres: 'nombres',
    apellidos: 'apellidos',
    email: 'email',
    telefono: 'telefono',
    direccion: 'direccion',
    licencia_conducir: 'licencia_conducir'
  };

  export type clientesOrderByRelevanceFieldEnum = (typeof clientesOrderByRelevanceFieldEnum)[keyof typeof clientesOrderByRelevanceFieldEnum]


  export const perfilesOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type perfilesOrderByRelevanceFieldEnum = (typeof perfilesOrderByRelevanceFieldEnum)[keyof typeof perfilesOrderByRelevanceFieldEnum]


  export const tipos_vehiculoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type tipos_vehiculoOrderByRelevanceFieldEnum = (typeof tipos_vehiculoOrderByRelevanceFieldEnum)[keyof typeof tipos_vehiculoOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    rut: 'rut',
    nombres: 'nombres',
    apellidos: 'apellidos',
    email: 'email',
    password_hash: 'password_hash'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  export const vehiculosOrderByRelevanceFieldEnum: {
    patente: 'patente',
    marca: 'marca',
    modelo: 'modelo',
    color: 'color',
    foto_url: 'foto_url'
  };

  export type vehiculosOrderByRelevanceFieldEnum = (typeof vehiculosOrderByRelevanceFieldEnum)[keyof typeof vehiculosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'arriendos_estado'
   */
  export type Enumarriendos_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'arriendos_estado'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'vehiculos_estado'
   */
  export type Enumvehiculos_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'vehiculos_estado'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type arriendosWhereInput = {
    AND?: arriendosWhereInput | arriendosWhereInput[]
    OR?: arriendosWhereInput[]
    NOT?: arriendosWhereInput | arriendosWhereInput[]
    id?: IntFilter<"arriendos"> | number
    cliente_id?: IntFilter<"arriendos"> | number
    vehiculo_id?: IntFilter<"arriendos"> | number
    usuario_id?: IntFilter<"arriendos"> | number
    fecha_inicio?: DateTimeFilter<"arriendos"> | Date | string
    fecha_termino?: DateTimeFilter<"arriendos"> | Date | string
    fecha_hora_entrega?: DateTimeFilter<"arriendos"> | Date | string
    fecha_hora_recepcion?: DateTimeNullableFilter<"arriendos"> | Date | string | null
    valor_diario_aplicado?: IntFilter<"arriendos"> | number
    dias_arriendo?: IntFilter<"arriendos"> | number
    valor_total?: IntFilter<"arriendos"> | number
    estado?: Enumarriendos_estadoFilter<"arriendos"> | $Enums.arriendos_estado
    fotos_entrega?: StringFilter<"arriendos"> | string
    fotos_recepcion?: StringNullableFilter<"arriendos"> | string | null
    vehiculo_activo_id?: IntNullableFilter<"arriendos"> | number | null
    created_at?: DateTimeFilter<"arriendos"> | Date | string
    updated_at?: DateTimeFilter<"arriendos"> | Date | string
    clientes?: XOR<ClientesScalarRelationFilter, clientesWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    vehiculos?: XOR<VehiculosScalarRelationFilter, vehiculosWhereInput>
  }

  export type arriendosOrderByWithRelationInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    vehiculo_id?: SortOrder
    usuario_id?: SortOrder
    fecha_inicio?: SortOrder
    fecha_termino?: SortOrder
    fecha_hora_entrega?: SortOrder
    fecha_hora_recepcion?: SortOrderInput | SortOrder
    valor_diario_aplicado?: SortOrder
    dias_arriendo?: SortOrder
    valor_total?: SortOrder
    estado?: SortOrder
    fotos_entrega?: SortOrder
    fotos_recepcion?: SortOrderInput | SortOrder
    vehiculo_activo_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clientes?: clientesOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
    vehiculos?: vehiculosOrderByWithRelationInput
    _relevance?: arriendosOrderByRelevanceInput
  }

  export type arriendosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    vehiculo_activo_id?: number
    AND?: arriendosWhereInput | arriendosWhereInput[]
    OR?: arriendosWhereInput[]
    NOT?: arriendosWhereInput | arriendosWhereInput[]
    cliente_id?: IntFilter<"arriendos"> | number
    vehiculo_id?: IntFilter<"arriendos"> | number
    usuario_id?: IntFilter<"arriendos"> | number
    fecha_inicio?: DateTimeFilter<"arriendos"> | Date | string
    fecha_termino?: DateTimeFilter<"arriendos"> | Date | string
    fecha_hora_entrega?: DateTimeFilter<"arriendos"> | Date | string
    fecha_hora_recepcion?: DateTimeNullableFilter<"arriendos"> | Date | string | null
    valor_diario_aplicado?: IntFilter<"arriendos"> | number
    dias_arriendo?: IntFilter<"arriendos"> | number
    valor_total?: IntFilter<"arriendos"> | number
    estado?: Enumarriendos_estadoFilter<"arriendos"> | $Enums.arriendos_estado
    fotos_entrega?: StringFilter<"arriendos"> | string
    fotos_recepcion?: StringNullableFilter<"arriendos"> | string | null
    created_at?: DateTimeFilter<"arriendos"> | Date | string
    updated_at?: DateTimeFilter<"arriendos"> | Date | string
    clientes?: XOR<ClientesScalarRelationFilter, clientesWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    vehiculos?: XOR<VehiculosScalarRelationFilter, vehiculosWhereInput>
  }, "id" | "vehiculo_activo_id">

  export type arriendosOrderByWithAggregationInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    vehiculo_id?: SortOrder
    usuario_id?: SortOrder
    fecha_inicio?: SortOrder
    fecha_termino?: SortOrder
    fecha_hora_entrega?: SortOrder
    fecha_hora_recepcion?: SortOrderInput | SortOrder
    valor_diario_aplicado?: SortOrder
    dias_arriendo?: SortOrder
    valor_total?: SortOrder
    estado?: SortOrder
    fotos_entrega?: SortOrder
    fotos_recepcion?: SortOrderInput | SortOrder
    vehiculo_activo_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: arriendosCountOrderByAggregateInput
    _avg?: arriendosAvgOrderByAggregateInput
    _max?: arriendosMaxOrderByAggregateInput
    _min?: arriendosMinOrderByAggregateInput
    _sum?: arriendosSumOrderByAggregateInput
  }

  export type arriendosScalarWhereWithAggregatesInput = {
    AND?: arriendosScalarWhereWithAggregatesInput | arriendosScalarWhereWithAggregatesInput[]
    OR?: arriendosScalarWhereWithAggregatesInput[]
    NOT?: arriendosScalarWhereWithAggregatesInput | arriendosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"arriendos"> | number
    cliente_id?: IntWithAggregatesFilter<"arriendos"> | number
    vehiculo_id?: IntWithAggregatesFilter<"arriendos"> | number
    usuario_id?: IntWithAggregatesFilter<"arriendos"> | number
    fecha_inicio?: DateTimeWithAggregatesFilter<"arriendos"> | Date | string
    fecha_termino?: DateTimeWithAggregatesFilter<"arriendos"> | Date | string
    fecha_hora_entrega?: DateTimeWithAggregatesFilter<"arriendos"> | Date | string
    fecha_hora_recepcion?: DateTimeNullableWithAggregatesFilter<"arriendos"> | Date | string | null
    valor_diario_aplicado?: IntWithAggregatesFilter<"arriendos"> | number
    dias_arriendo?: IntWithAggregatesFilter<"arriendos"> | number
    valor_total?: IntWithAggregatesFilter<"arriendos"> | number
    estado?: Enumarriendos_estadoWithAggregatesFilter<"arriendos"> | $Enums.arriendos_estado
    fotos_entrega?: StringWithAggregatesFilter<"arriendos"> | string
    fotos_recepcion?: StringNullableWithAggregatesFilter<"arriendos"> | string | null
    vehiculo_activo_id?: IntNullableWithAggregatesFilter<"arriendos"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"arriendos"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"arriendos"> | Date | string
  }

  export type clientesWhereInput = {
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    id?: IntFilter<"clientes"> | number
    rut?: StringFilter<"clientes"> | string
    nombres?: StringFilter<"clientes"> | string
    apellidos?: StringFilter<"clientes"> | string
    email?: StringFilter<"clientes"> | string
    telefono?: StringFilter<"clientes"> | string
    direccion?: StringFilter<"clientes"> | string
    licencia_conducir?: StringFilter<"clientes"> | string
    activo?: BoolFilter<"clientes"> | boolean
    created_at?: DateTimeFilter<"clientes"> | Date | string
    updated_at?: DateTimeFilter<"clientes"> | Date | string
    arriendos?: ArriendosListRelationFilter
  }

  export type clientesOrderByWithRelationInput = {
    id?: SortOrder
    rut?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    licencia_conducir?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    arriendos?: arriendosOrderByRelationAggregateInput
    _relevance?: clientesOrderByRelevanceInput
  }

  export type clientesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rut?: string
    email?: string
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    nombres?: StringFilter<"clientes"> | string
    apellidos?: StringFilter<"clientes"> | string
    telefono?: StringFilter<"clientes"> | string
    direccion?: StringFilter<"clientes"> | string
    licencia_conducir?: StringFilter<"clientes"> | string
    activo?: BoolFilter<"clientes"> | boolean
    created_at?: DateTimeFilter<"clientes"> | Date | string
    updated_at?: DateTimeFilter<"clientes"> | Date | string
    arriendos?: ArriendosListRelationFilter
  }, "id" | "rut" | "email">

  export type clientesOrderByWithAggregationInput = {
    id?: SortOrder
    rut?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    licencia_conducir?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: clientesCountOrderByAggregateInput
    _avg?: clientesAvgOrderByAggregateInput
    _max?: clientesMaxOrderByAggregateInput
    _min?: clientesMinOrderByAggregateInput
    _sum?: clientesSumOrderByAggregateInput
  }

  export type clientesScalarWhereWithAggregatesInput = {
    AND?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    OR?: clientesScalarWhereWithAggregatesInput[]
    NOT?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clientes"> | number
    rut?: StringWithAggregatesFilter<"clientes"> | string
    nombres?: StringWithAggregatesFilter<"clientes"> | string
    apellidos?: StringWithAggregatesFilter<"clientes"> | string
    email?: StringWithAggregatesFilter<"clientes"> | string
    telefono?: StringWithAggregatesFilter<"clientes"> | string
    direccion?: StringWithAggregatesFilter<"clientes"> | string
    licencia_conducir?: StringWithAggregatesFilter<"clientes"> | string
    activo?: BoolWithAggregatesFilter<"clientes"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"clientes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"clientes"> | Date | string
  }

  export type perfilesWhereInput = {
    AND?: perfilesWhereInput | perfilesWhereInput[]
    OR?: perfilesWhereInput[]
    NOT?: perfilesWhereInput | perfilesWhereInput[]
    id?: IntFilter<"perfiles"> | number
    nombre?: StringFilter<"perfiles"> | string
    created_at?: DateTimeFilter<"perfiles"> | Date | string
    updated_at?: DateTimeFilter<"perfiles"> | Date | string
    usuarios?: UsuariosListRelationFilter
  }

  export type perfilesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    usuarios?: usuariosOrderByRelationAggregateInput
    _relevance?: perfilesOrderByRelevanceInput
  }

  export type perfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: perfilesWhereInput | perfilesWhereInput[]
    OR?: perfilesWhereInput[]
    NOT?: perfilesWhereInput | perfilesWhereInput[]
    created_at?: DateTimeFilter<"perfiles"> | Date | string
    updated_at?: DateTimeFilter<"perfiles"> | Date | string
    usuarios?: UsuariosListRelationFilter
  }, "id" | "nombre">

  export type perfilesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: perfilesCountOrderByAggregateInput
    _avg?: perfilesAvgOrderByAggregateInput
    _max?: perfilesMaxOrderByAggregateInput
    _min?: perfilesMinOrderByAggregateInput
    _sum?: perfilesSumOrderByAggregateInput
  }

  export type perfilesScalarWhereWithAggregatesInput = {
    AND?: perfilesScalarWhereWithAggregatesInput | perfilesScalarWhereWithAggregatesInput[]
    OR?: perfilesScalarWhereWithAggregatesInput[]
    NOT?: perfilesScalarWhereWithAggregatesInput | perfilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"perfiles"> | number
    nombre?: StringWithAggregatesFilter<"perfiles"> | string
    created_at?: DateTimeWithAggregatesFilter<"perfiles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"perfiles"> | Date | string
  }

  export type tipos_vehiculoWhereInput = {
    AND?: tipos_vehiculoWhereInput | tipos_vehiculoWhereInput[]
    OR?: tipos_vehiculoWhereInput[]
    NOT?: tipos_vehiculoWhereInput | tipos_vehiculoWhereInput[]
    id?: IntFilter<"tipos_vehiculo"> | number
    nombre?: StringFilter<"tipos_vehiculo"> | string
    descripcion?: StringFilter<"tipos_vehiculo"> | string
    valor_diario?: IntFilter<"tipos_vehiculo"> | number
    activo?: BoolFilter<"tipos_vehiculo"> | boolean
    created_at?: DateTimeFilter<"tipos_vehiculo"> | Date | string
    updated_at?: DateTimeFilter<"tipos_vehiculo"> | Date | string
    vehiculos?: VehiculosListRelationFilter
  }

  export type tipos_vehiculoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    valor_diario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    vehiculos?: vehiculosOrderByRelationAggregateInput
    _relevance?: tipos_vehiculoOrderByRelevanceInput
  }

  export type tipos_vehiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: tipos_vehiculoWhereInput | tipos_vehiculoWhereInput[]
    OR?: tipos_vehiculoWhereInput[]
    NOT?: tipos_vehiculoWhereInput | tipos_vehiculoWhereInput[]
    descripcion?: StringFilter<"tipos_vehiculo"> | string
    valor_diario?: IntFilter<"tipos_vehiculo"> | number
    activo?: BoolFilter<"tipos_vehiculo"> | boolean
    created_at?: DateTimeFilter<"tipos_vehiculo"> | Date | string
    updated_at?: DateTimeFilter<"tipos_vehiculo"> | Date | string
    vehiculos?: VehiculosListRelationFilter
  }, "id" | "nombre">

  export type tipos_vehiculoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    valor_diario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: tipos_vehiculoCountOrderByAggregateInput
    _avg?: tipos_vehiculoAvgOrderByAggregateInput
    _max?: tipos_vehiculoMaxOrderByAggregateInput
    _min?: tipos_vehiculoMinOrderByAggregateInput
    _sum?: tipos_vehiculoSumOrderByAggregateInput
  }

  export type tipos_vehiculoScalarWhereWithAggregatesInput = {
    AND?: tipos_vehiculoScalarWhereWithAggregatesInput | tipos_vehiculoScalarWhereWithAggregatesInput[]
    OR?: tipos_vehiculoScalarWhereWithAggregatesInput[]
    NOT?: tipos_vehiculoScalarWhereWithAggregatesInput | tipos_vehiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tipos_vehiculo"> | number
    nombre?: StringWithAggregatesFilter<"tipos_vehiculo"> | string
    descripcion?: StringWithAggregatesFilter<"tipos_vehiculo"> | string
    valor_diario?: IntWithAggregatesFilter<"tipos_vehiculo"> | number
    activo?: BoolWithAggregatesFilter<"tipos_vehiculo"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"tipos_vehiculo"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tipos_vehiculo"> | Date | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    perfil_id?: IntFilter<"usuarios"> | number
    rut?: StringFilter<"usuarios"> | string
    nombres?: StringFilter<"usuarios"> | string
    apellidos?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    password_hash?: StringFilter<"usuarios"> | string
    activo?: BoolFilter<"usuarios"> | boolean
    created_at?: DateTimeFilter<"usuarios"> | Date | string
    updated_at?: DateTimeFilter<"usuarios"> | Date | string
    arriendos?: ArriendosListRelationFilter
    perfiles?: XOR<PerfilesScalarRelationFilter, perfilesWhereInput>
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    perfil_id?: SortOrder
    rut?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    arriendos?: arriendosOrderByRelationAggregateInput
    perfiles?: perfilesOrderByWithRelationInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rut?: string
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    perfil_id?: IntFilter<"usuarios"> | number
    nombres?: StringFilter<"usuarios"> | string
    apellidos?: StringFilter<"usuarios"> | string
    password_hash?: StringFilter<"usuarios"> | string
    activo?: BoolFilter<"usuarios"> | boolean
    created_at?: DateTimeFilter<"usuarios"> | Date | string
    updated_at?: DateTimeFilter<"usuarios"> | Date | string
    arriendos?: ArriendosListRelationFilter
    perfiles?: XOR<PerfilesScalarRelationFilter, perfilesWhereInput>
  }, "id" | "rut" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    perfil_id?: SortOrder
    rut?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    perfil_id?: IntWithAggregatesFilter<"usuarios"> | number
    rut?: StringWithAggregatesFilter<"usuarios"> | string
    nombres?: StringWithAggregatesFilter<"usuarios"> | string
    apellidos?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    password_hash?: StringWithAggregatesFilter<"usuarios"> | string
    activo?: BoolWithAggregatesFilter<"usuarios"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type vehiculosWhereInput = {
    AND?: vehiculosWhereInput | vehiculosWhereInput[]
    OR?: vehiculosWhereInput[]
    NOT?: vehiculosWhereInput | vehiculosWhereInput[]
    id?: IntFilter<"vehiculos"> | number
    tipo_id?: IntFilter<"vehiculos"> | number
    patente?: StringFilter<"vehiculos"> | string
    marca?: StringFilter<"vehiculos"> | string
    modelo?: StringFilter<"vehiculos"> | string
    anio?: IntFilter<"vehiculos"> | number
    color?: StringFilter<"vehiculos"> | string
    estado?: Enumvehiculos_estadoFilter<"vehiculos"> | $Enums.vehiculos_estado
    foto_url?: StringFilter<"vehiculos"> | string
    activo?: BoolFilter<"vehiculos"> | boolean
    created_at?: DateTimeFilter<"vehiculos"> | Date | string
    updated_at?: DateTimeFilter<"vehiculos"> | Date | string
    arriendos?: ArriendosListRelationFilter
    tipos_vehiculo?: XOR<Tipos_vehiculoScalarRelationFilter, tipos_vehiculoWhereInput>
  }

  export type vehiculosOrderByWithRelationInput = {
    id?: SortOrder
    tipo_id?: SortOrder
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    color?: SortOrder
    estado?: SortOrder
    foto_url?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    arriendos?: arriendosOrderByRelationAggregateInput
    tipos_vehiculo?: tipos_vehiculoOrderByWithRelationInput
    _relevance?: vehiculosOrderByRelevanceInput
  }

  export type vehiculosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    patente?: string
    AND?: vehiculosWhereInput | vehiculosWhereInput[]
    OR?: vehiculosWhereInput[]
    NOT?: vehiculosWhereInput | vehiculosWhereInput[]
    tipo_id?: IntFilter<"vehiculos"> | number
    marca?: StringFilter<"vehiculos"> | string
    modelo?: StringFilter<"vehiculos"> | string
    anio?: IntFilter<"vehiculos"> | number
    color?: StringFilter<"vehiculos"> | string
    estado?: Enumvehiculos_estadoFilter<"vehiculos"> | $Enums.vehiculos_estado
    foto_url?: StringFilter<"vehiculos"> | string
    activo?: BoolFilter<"vehiculos"> | boolean
    created_at?: DateTimeFilter<"vehiculos"> | Date | string
    updated_at?: DateTimeFilter<"vehiculos"> | Date | string
    arriendos?: ArriendosListRelationFilter
    tipos_vehiculo?: XOR<Tipos_vehiculoScalarRelationFilter, tipos_vehiculoWhereInput>
  }, "id" | "patente">

  export type vehiculosOrderByWithAggregationInput = {
    id?: SortOrder
    tipo_id?: SortOrder
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    color?: SortOrder
    estado?: SortOrder
    foto_url?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: vehiculosCountOrderByAggregateInput
    _avg?: vehiculosAvgOrderByAggregateInput
    _max?: vehiculosMaxOrderByAggregateInput
    _min?: vehiculosMinOrderByAggregateInput
    _sum?: vehiculosSumOrderByAggregateInput
  }

  export type vehiculosScalarWhereWithAggregatesInput = {
    AND?: vehiculosScalarWhereWithAggregatesInput | vehiculosScalarWhereWithAggregatesInput[]
    OR?: vehiculosScalarWhereWithAggregatesInput[]
    NOT?: vehiculosScalarWhereWithAggregatesInput | vehiculosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vehiculos"> | number
    tipo_id?: IntWithAggregatesFilter<"vehiculos"> | number
    patente?: StringWithAggregatesFilter<"vehiculos"> | string
    marca?: StringWithAggregatesFilter<"vehiculos"> | string
    modelo?: StringWithAggregatesFilter<"vehiculos"> | string
    anio?: IntWithAggregatesFilter<"vehiculos"> | number
    color?: StringWithAggregatesFilter<"vehiculos"> | string
    estado?: Enumvehiculos_estadoWithAggregatesFilter<"vehiculos"> | $Enums.vehiculos_estado
    foto_url?: StringWithAggregatesFilter<"vehiculos"> | string
    activo?: BoolWithAggregatesFilter<"vehiculos"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"vehiculos"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"vehiculos"> | Date | string
  }

  export type arriendosCreateInput = {
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    clientes: clientesCreateNestedOneWithoutArriendosInput
    usuarios: usuariosCreateNestedOneWithoutArriendosInput
    vehiculos: vehiculosCreateNestedOneWithoutArriendosInput
  }

  export type arriendosUncheckedCreateInput = {
    id?: number
    cliente_id: number
    vehiculo_id: number
    usuario_id: number
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type arriendosUpdateInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneRequiredWithoutArriendosNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutArriendosNestedInput
    vehiculos?: vehiculosUpdateOneRequiredWithoutArriendosNestedInput
  }

  export type arriendosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    vehiculo_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type arriendosCreateManyInput = {
    id?: number
    cliente_id: number
    vehiculo_id: number
    usuario_id: number
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type arriendosUpdateManyMutationInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type arriendosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    vehiculo_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientesCreateInput = {
    rut: string
    nombres: string
    apellidos: string
    email: string
    telefono: string
    direccion: string
    licencia_conducir: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    arriendos?: arriendosCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateInput = {
    id?: number
    rut: string
    nombres: string
    apellidos: string
    email: string
    telefono: string
    direccion: string
    licencia_conducir: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    arriendos?: arriendosUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesUpdateInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    licencia_conducir?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arriendos?: arriendosUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    licencia_conducir?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arriendos?: arriendosUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type clientesCreateManyInput = {
    id?: number
    rut: string
    nombres: string
    apellidos: string
    email: string
    telefono: string
    direccion: string
    licencia_conducir: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type clientesUpdateManyMutationInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    licencia_conducir?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    licencia_conducir?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type perfilesCreateInput = {
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
    usuarios?: usuariosCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesUncheckedCreateInput = {
    id?: number
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
    usuarios?: usuariosUncheckedCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateManyWithoutPerfilesNestedInput
  }

  export type perfilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUncheckedUpdateManyWithoutPerfilesNestedInput
  }

  export type perfilesCreateManyInput = {
    id?: number
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type perfilesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type perfilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tipos_vehiculoCreateInput = {
    nombre: string
    descripcion: string
    valor_diario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    vehiculos?: vehiculosCreateNestedManyWithoutTipos_vehiculoInput
  }

  export type tipos_vehiculoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    valor_diario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    vehiculos?: vehiculosUncheckedCreateNestedManyWithoutTipos_vehiculoInput
  }

  export type tipos_vehiculoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor_diario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculos?: vehiculosUpdateManyWithoutTipos_vehiculoNestedInput
  }

  export type tipos_vehiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor_diario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculos?: vehiculosUncheckedUpdateManyWithoutTipos_vehiculoNestedInput
  }

  export type tipos_vehiculoCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    valor_diario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tipos_vehiculoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor_diario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tipos_vehiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor_diario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosCreateInput = {
    rut: string
    nombres: string
    apellidos: string
    email: string
    password_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    arriendos?: arriendosCreateNestedManyWithoutUsuariosInput
    perfiles: perfilesCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    perfil_id: number
    rut: string
    nombres: string
    apellidos: string
    email: string
    password_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    arriendos?: arriendosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arriendos?: arriendosUpdateManyWithoutUsuariosNestedInput
    perfiles?: perfilesUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    perfil_id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arriendos?: arriendosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    perfil_id: number
    rut: string
    nombres: string
    apellidos: string
    email: string
    password_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    perfil_id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehiculosCreateInput = {
    patente: string
    marca: string
    modelo: string
    anio: number
    color: string
    estado?: $Enums.vehiculos_estado
    foto_url: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    arriendos?: arriendosCreateNestedManyWithoutVehiculosInput
    tipos_vehiculo: tipos_vehiculoCreateNestedOneWithoutVehiculosInput
  }

  export type vehiculosUncheckedCreateInput = {
    id?: number
    tipo_id: number
    patente: string
    marca: string
    modelo: string
    anio: number
    color: string
    estado?: $Enums.vehiculos_estado
    foto_url: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    arriendos?: arriendosUncheckedCreateNestedManyWithoutVehiculosInput
  }

  export type vehiculosUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: Enumvehiculos_estadoFieldUpdateOperationsInput | $Enums.vehiculos_estado
    foto_url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arriendos?: arriendosUpdateManyWithoutVehiculosNestedInput
    tipos_vehiculo?: tipos_vehiculoUpdateOneRequiredWithoutVehiculosNestedInput
  }

  export type vehiculosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: Enumvehiculos_estadoFieldUpdateOperationsInput | $Enums.vehiculos_estado
    foto_url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arriendos?: arriendosUncheckedUpdateManyWithoutVehiculosNestedInput
  }

  export type vehiculosCreateManyInput = {
    id?: number
    tipo_id: number
    patente: string
    marca: string
    modelo: string
    anio: number
    color: string
    estado?: $Enums.vehiculos_estado
    foto_url: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vehiculosUpdateManyMutationInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: Enumvehiculos_estadoFieldUpdateOperationsInput | $Enums.vehiculos_estado
    foto_url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehiculosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: Enumvehiculos_estadoFieldUpdateOperationsInput | $Enums.vehiculos_estado
    foto_url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumarriendos_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.arriendos_estado | Enumarriendos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.arriendos_estado[]
    notIn?: $Enums.arriendos_estado[]
    not?: NestedEnumarriendos_estadoFilter<$PrismaModel> | $Enums.arriendos_estado
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClientesScalarRelationFilter = {
    is?: clientesWhereInput
    isNot?: clientesWhereInput
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type VehiculosScalarRelationFilter = {
    is?: vehiculosWhereInput
    isNot?: vehiculosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type arriendosOrderByRelevanceInput = {
    fields: arriendosOrderByRelevanceFieldEnum | arriendosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type arriendosCountOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    vehiculo_id?: SortOrder
    usuario_id?: SortOrder
    fecha_inicio?: SortOrder
    fecha_termino?: SortOrder
    fecha_hora_entrega?: SortOrder
    fecha_hora_recepcion?: SortOrder
    valor_diario_aplicado?: SortOrder
    dias_arriendo?: SortOrder
    valor_total?: SortOrder
    estado?: SortOrder
    fotos_entrega?: SortOrder
    fotos_recepcion?: SortOrder
    vehiculo_activo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type arriendosAvgOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    vehiculo_id?: SortOrder
    usuario_id?: SortOrder
    valor_diario_aplicado?: SortOrder
    dias_arriendo?: SortOrder
    valor_total?: SortOrder
    vehiculo_activo_id?: SortOrder
  }

  export type arriendosMaxOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    vehiculo_id?: SortOrder
    usuario_id?: SortOrder
    fecha_inicio?: SortOrder
    fecha_termino?: SortOrder
    fecha_hora_entrega?: SortOrder
    fecha_hora_recepcion?: SortOrder
    valor_diario_aplicado?: SortOrder
    dias_arriendo?: SortOrder
    valor_total?: SortOrder
    estado?: SortOrder
    fotos_entrega?: SortOrder
    fotos_recepcion?: SortOrder
    vehiculo_activo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type arriendosMinOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    vehiculo_id?: SortOrder
    usuario_id?: SortOrder
    fecha_inicio?: SortOrder
    fecha_termino?: SortOrder
    fecha_hora_entrega?: SortOrder
    fecha_hora_recepcion?: SortOrder
    valor_diario_aplicado?: SortOrder
    dias_arriendo?: SortOrder
    valor_total?: SortOrder
    estado?: SortOrder
    fotos_entrega?: SortOrder
    fotos_recepcion?: SortOrder
    vehiculo_activo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type arriendosSumOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    vehiculo_id?: SortOrder
    usuario_id?: SortOrder
    valor_diario_aplicado?: SortOrder
    dias_arriendo?: SortOrder
    valor_total?: SortOrder
    vehiculo_activo_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumarriendos_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.arriendos_estado | Enumarriendos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.arriendos_estado[]
    notIn?: $Enums.arriendos_estado[]
    not?: NestedEnumarriendos_estadoWithAggregatesFilter<$PrismaModel> | $Enums.arriendos_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumarriendos_estadoFilter<$PrismaModel>
    _max?: NestedEnumarriendos_estadoFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ArriendosListRelationFilter = {
    every?: arriendosWhereInput
    some?: arriendosWhereInput
    none?: arriendosWhereInput
  }

  export type arriendosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientesOrderByRelevanceInput = {
    fields: clientesOrderByRelevanceFieldEnum | clientesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clientesCountOrderByAggregateInput = {
    id?: SortOrder
    rut?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    licencia_conducir?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clientesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clientesMaxOrderByAggregateInput = {
    id?: SortOrder
    rut?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    licencia_conducir?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clientesMinOrderByAggregateInput = {
    id?: SortOrder
    rut?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    licencia_conducir?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clientesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsuariosListRelationFilter = {
    every?: usuariosWhereInput
    some?: usuariosWhereInput
    none?: usuariosWhereInput
  }

  export type usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type perfilesOrderByRelevanceInput = {
    fields: perfilesOrderByRelevanceFieldEnum | perfilesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type perfilesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type perfilesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type perfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type perfilesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type perfilesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehiculosListRelationFilter = {
    every?: vehiculosWhereInput
    some?: vehiculosWhereInput
    none?: vehiculosWhereInput
  }

  export type vehiculosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipos_vehiculoOrderByRelevanceInput = {
    fields: tipos_vehiculoOrderByRelevanceFieldEnum | tipos_vehiculoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tipos_vehiculoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    valor_diario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tipos_vehiculoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor_diario?: SortOrder
  }

  export type tipos_vehiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    valor_diario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tipos_vehiculoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    valor_diario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tipos_vehiculoSumOrderByAggregateInput = {
    id?: SortOrder
    valor_diario?: SortOrder
  }

  export type PerfilesScalarRelationFilter = {
    is?: perfilesWhereInput
    isNot?: perfilesWhereInput
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    perfil_id?: SortOrder
    rut?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
    perfil_id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    perfil_id?: SortOrder
    rut?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    perfil_id?: SortOrder
    rut?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
    perfil_id?: SortOrder
  }

  export type Enumvehiculos_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.vehiculos_estado | Enumvehiculos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.vehiculos_estado[]
    notIn?: $Enums.vehiculos_estado[]
    not?: NestedEnumvehiculos_estadoFilter<$PrismaModel> | $Enums.vehiculos_estado
  }

  export type Tipos_vehiculoScalarRelationFilter = {
    is?: tipos_vehiculoWhereInput
    isNot?: tipos_vehiculoWhereInput
  }

  export type vehiculosOrderByRelevanceInput = {
    fields: vehiculosOrderByRelevanceFieldEnum | vehiculosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vehiculosCountOrderByAggregateInput = {
    id?: SortOrder
    tipo_id?: SortOrder
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    color?: SortOrder
    estado?: SortOrder
    foto_url?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vehiculosAvgOrderByAggregateInput = {
    id?: SortOrder
    tipo_id?: SortOrder
    anio?: SortOrder
  }

  export type vehiculosMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo_id?: SortOrder
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    color?: SortOrder
    estado?: SortOrder
    foto_url?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vehiculosMinOrderByAggregateInput = {
    id?: SortOrder
    tipo_id?: SortOrder
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    color?: SortOrder
    estado?: SortOrder
    foto_url?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vehiculosSumOrderByAggregateInput = {
    id?: SortOrder
    tipo_id?: SortOrder
    anio?: SortOrder
  }

  export type Enumvehiculos_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vehiculos_estado | Enumvehiculos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.vehiculos_estado[]
    notIn?: $Enums.vehiculos_estado[]
    not?: NestedEnumvehiculos_estadoWithAggregatesFilter<$PrismaModel> | $Enums.vehiculos_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvehiculos_estadoFilter<$PrismaModel>
    _max?: NestedEnumvehiculos_estadoFilter<$PrismaModel>
  }

  export type clientesCreateNestedOneWithoutArriendosInput = {
    create?: XOR<clientesCreateWithoutArriendosInput, clientesUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: clientesCreateOrConnectWithoutArriendosInput
    connect?: clientesWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutArriendosInput = {
    create?: XOR<usuariosCreateWithoutArriendosInput, usuariosUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutArriendosInput
    connect?: usuariosWhereUniqueInput
  }

  export type vehiculosCreateNestedOneWithoutArriendosInput = {
    create?: XOR<vehiculosCreateWithoutArriendosInput, vehiculosUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: vehiculosCreateOrConnectWithoutArriendosInput
    connect?: vehiculosWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumarriendos_estadoFieldUpdateOperationsInput = {
    set?: $Enums.arriendos_estado
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type clientesUpdateOneRequiredWithoutArriendosNestedInput = {
    create?: XOR<clientesCreateWithoutArriendosInput, clientesUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: clientesCreateOrConnectWithoutArriendosInput
    upsert?: clientesUpsertWithoutArriendosInput
    connect?: clientesWhereUniqueInput
    update?: XOR<XOR<clientesUpdateToOneWithWhereWithoutArriendosInput, clientesUpdateWithoutArriendosInput>, clientesUncheckedUpdateWithoutArriendosInput>
  }

  export type usuariosUpdateOneRequiredWithoutArriendosNestedInput = {
    create?: XOR<usuariosCreateWithoutArriendosInput, usuariosUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutArriendosInput
    upsert?: usuariosUpsertWithoutArriendosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutArriendosInput, usuariosUpdateWithoutArriendosInput>, usuariosUncheckedUpdateWithoutArriendosInput>
  }

  export type vehiculosUpdateOneRequiredWithoutArriendosNestedInput = {
    create?: XOR<vehiculosCreateWithoutArriendosInput, vehiculosUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: vehiculosCreateOrConnectWithoutArriendosInput
    upsert?: vehiculosUpsertWithoutArriendosInput
    connect?: vehiculosWhereUniqueInput
    update?: XOR<XOR<vehiculosUpdateToOneWithWhereWithoutArriendosInput, vehiculosUpdateWithoutArriendosInput>, vehiculosUncheckedUpdateWithoutArriendosInput>
  }

  export type arriendosCreateNestedManyWithoutClientesInput = {
    create?: XOR<arriendosCreateWithoutClientesInput, arriendosUncheckedCreateWithoutClientesInput> | arriendosCreateWithoutClientesInput[] | arriendosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutClientesInput | arriendosCreateOrConnectWithoutClientesInput[]
    createMany?: arriendosCreateManyClientesInputEnvelope
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
  }

  export type arriendosUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<arriendosCreateWithoutClientesInput, arriendosUncheckedCreateWithoutClientesInput> | arriendosCreateWithoutClientesInput[] | arriendosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutClientesInput | arriendosCreateOrConnectWithoutClientesInput[]
    createMany?: arriendosCreateManyClientesInputEnvelope
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type arriendosUpdateManyWithoutClientesNestedInput = {
    create?: XOR<arriendosCreateWithoutClientesInput, arriendosUncheckedCreateWithoutClientesInput> | arriendosCreateWithoutClientesInput[] | arriendosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutClientesInput | arriendosCreateOrConnectWithoutClientesInput[]
    upsert?: arriendosUpsertWithWhereUniqueWithoutClientesInput | arriendosUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: arriendosCreateManyClientesInputEnvelope
    set?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    disconnect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    delete?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    update?: arriendosUpdateWithWhereUniqueWithoutClientesInput | arriendosUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: arriendosUpdateManyWithWhereWithoutClientesInput | arriendosUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: arriendosScalarWhereInput | arriendosScalarWhereInput[]
  }

  export type arriendosUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<arriendosCreateWithoutClientesInput, arriendosUncheckedCreateWithoutClientesInput> | arriendosCreateWithoutClientesInput[] | arriendosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutClientesInput | arriendosCreateOrConnectWithoutClientesInput[]
    upsert?: arriendosUpsertWithWhereUniqueWithoutClientesInput | arriendosUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: arriendosCreateManyClientesInputEnvelope
    set?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    disconnect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    delete?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    update?: arriendosUpdateWithWhereUniqueWithoutClientesInput | arriendosUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: arriendosUpdateManyWithWhereWithoutClientesInput | arriendosUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: arriendosScalarWhereInput | arriendosScalarWhereInput[]
  }

  export type usuariosCreateNestedManyWithoutPerfilesInput = {
    create?: XOR<usuariosCreateWithoutPerfilesInput, usuariosUncheckedCreateWithoutPerfilesInput> | usuariosCreateWithoutPerfilesInput[] | usuariosUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutPerfilesInput | usuariosCreateOrConnectWithoutPerfilesInput[]
    createMany?: usuariosCreateManyPerfilesInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type usuariosUncheckedCreateNestedManyWithoutPerfilesInput = {
    create?: XOR<usuariosCreateWithoutPerfilesInput, usuariosUncheckedCreateWithoutPerfilesInput> | usuariosCreateWithoutPerfilesInput[] | usuariosUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutPerfilesInput | usuariosCreateOrConnectWithoutPerfilesInput[]
    createMany?: usuariosCreateManyPerfilesInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type usuariosUpdateManyWithoutPerfilesNestedInput = {
    create?: XOR<usuariosCreateWithoutPerfilesInput, usuariosUncheckedCreateWithoutPerfilesInput> | usuariosCreateWithoutPerfilesInput[] | usuariosUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutPerfilesInput | usuariosCreateOrConnectWithoutPerfilesInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutPerfilesInput | usuariosUpsertWithWhereUniqueWithoutPerfilesInput[]
    createMany?: usuariosCreateManyPerfilesInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutPerfilesInput | usuariosUpdateWithWhereUniqueWithoutPerfilesInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutPerfilesInput | usuariosUpdateManyWithWhereWithoutPerfilesInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type usuariosUncheckedUpdateManyWithoutPerfilesNestedInput = {
    create?: XOR<usuariosCreateWithoutPerfilesInput, usuariosUncheckedCreateWithoutPerfilesInput> | usuariosCreateWithoutPerfilesInput[] | usuariosUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutPerfilesInput | usuariosCreateOrConnectWithoutPerfilesInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutPerfilesInput | usuariosUpsertWithWhereUniqueWithoutPerfilesInput[]
    createMany?: usuariosCreateManyPerfilesInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutPerfilesInput | usuariosUpdateWithWhereUniqueWithoutPerfilesInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutPerfilesInput | usuariosUpdateManyWithWhereWithoutPerfilesInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type vehiculosCreateNestedManyWithoutTipos_vehiculoInput = {
    create?: XOR<vehiculosCreateWithoutTipos_vehiculoInput, vehiculosUncheckedCreateWithoutTipos_vehiculoInput> | vehiculosCreateWithoutTipos_vehiculoInput[] | vehiculosUncheckedCreateWithoutTipos_vehiculoInput[]
    connectOrCreate?: vehiculosCreateOrConnectWithoutTipos_vehiculoInput | vehiculosCreateOrConnectWithoutTipos_vehiculoInput[]
    createMany?: vehiculosCreateManyTipos_vehiculoInputEnvelope
    connect?: vehiculosWhereUniqueInput | vehiculosWhereUniqueInput[]
  }

  export type vehiculosUncheckedCreateNestedManyWithoutTipos_vehiculoInput = {
    create?: XOR<vehiculosCreateWithoutTipos_vehiculoInput, vehiculosUncheckedCreateWithoutTipos_vehiculoInput> | vehiculosCreateWithoutTipos_vehiculoInput[] | vehiculosUncheckedCreateWithoutTipos_vehiculoInput[]
    connectOrCreate?: vehiculosCreateOrConnectWithoutTipos_vehiculoInput | vehiculosCreateOrConnectWithoutTipos_vehiculoInput[]
    createMany?: vehiculosCreateManyTipos_vehiculoInputEnvelope
    connect?: vehiculosWhereUniqueInput | vehiculosWhereUniqueInput[]
  }

  export type vehiculosUpdateManyWithoutTipos_vehiculoNestedInput = {
    create?: XOR<vehiculosCreateWithoutTipos_vehiculoInput, vehiculosUncheckedCreateWithoutTipos_vehiculoInput> | vehiculosCreateWithoutTipos_vehiculoInput[] | vehiculosUncheckedCreateWithoutTipos_vehiculoInput[]
    connectOrCreate?: vehiculosCreateOrConnectWithoutTipos_vehiculoInput | vehiculosCreateOrConnectWithoutTipos_vehiculoInput[]
    upsert?: vehiculosUpsertWithWhereUniqueWithoutTipos_vehiculoInput | vehiculosUpsertWithWhereUniqueWithoutTipos_vehiculoInput[]
    createMany?: vehiculosCreateManyTipos_vehiculoInputEnvelope
    set?: vehiculosWhereUniqueInput | vehiculosWhereUniqueInput[]
    disconnect?: vehiculosWhereUniqueInput | vehiculosWhereUniqueInput[]
    delete?: vehiculosWhereUniqueInput | vehiculosWhereUniqueInput[]
    connect?: vehiculosWhereUniqueInput | vehiculosWhereUniqueInput[]
    update?: vehiculosUpdateWithWhereUniqueWithoutTipos_vehiculoInput | vehiculosUpdateWithWhereUniqueWithoutTipos_vehiculoInput[]
    updateMany?: vehiculosUpdateManyWithWhereWithoutTipos_vehiculoInput | vehiculosUpdateManyWithWhereWithoutTipos_vehiculoInput[]
    deleteMany?: vehiculosScalarWhereInput | vehiculosScalarWhereInput[]
  }

  export type vehiculosUncheckedUpdateManyWithoutTipos_vehiculoNestedInput = {
    create?: XOR<vehiculosCreateWithoutTipos_vehiculoInput, vehiculosUncheckedCreateWithoutTipos_vehiculoInput> | vehiculosCreateWithoutTipos_vehiculoInput[] | vehiculosUncheckedCreateWithoutTipos_vehiculoInput[]
    connectOrCreate?: vehiculosCreateOrConnectWithoutTipos_vehiculoInput | vehiculosCreateOrConnectWithoutTipos_vehiculoInput[]
    upsert?: vehiculosUpsertWithWhereUniqueWithoutTipos_vehiculoInput | vehiculosUpsertWithWhereUniqueWithoutTipos_vehiculoInput[]
    createMany?: vehiculosCreateManyTipos_vehiculoInputEnvelope
    set?: vehiculosWhereUniqueInput | vehiculosWhereUniqueInput[]
    disconnect?: vehiculosWhereUniqueInput | vehiculosWhereUniqueInput[]
    delete?: vehiculosWhereUniqueInput | vehiculosWhereUniqueInput[]
    connect?: vehiculosWhereUniqueInput | vehiculosWhereUniqueInput[]
    update?: vehiculosUpdateWithWhereUniqueWithoutTipos_vehiculoInput | vehiculosUpdateWithWhereUniqueWithoutTipos_vehiculoInput[]
    updateMany?: vehiculosUpdateManyWithWhereWithoutTipos_vehiculoInput | vehiculosUpdateManyWithWhereWithoutTipos_vehiculoInput[]
    deleteMany?: vehiculosScalarWhereInput | vehiculosScalarWhereInput[]
  }

  export type arriendosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<arriendosCreateWithoutUsuariosInput, arriendosUncheckedCreateWithoutUsuariosInput> | arriendosCreateWithoutUsuariosInput[] | arriendosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutUsuariosInput | arriendosCreateOrConnectWithoutUsuariosInput[]
    createMany?: arriendosCreateManyUsuariosInputEnvelope
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
  }

  export type perfilesCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<perfilesCreateWithoutUsuariosInput, perfilesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: perfilesCreateOrConnectWithoutUsuariosInput
    connect?: perfilesWhereUniqueInput
  }

  export type arriendosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<arriendosCreateWithoutUsuariosInput, arriendosUncheckedCreateWithoutUsuariosInput> | arriendosCreateWithoutUsuariosInput[] | arriendosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutUsuariosInput | arriendosCreateOrConnectWithoutUsuariosInput[]
    createMany?: arriendosCreateManyUsuariosInputEnvelope
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
  }

  export type arriendosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<arriendosCreateWithoutUsuariosInput, arriendosUncheckedCreateWithoutUsuariosInput> | arriendosCreateWithoutUsuariosInput[] | arriendosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutUsuariosInput | arriendosCreateOrConnectWithoutUsuariosInput[]
    upsert?: arriendosUpsertWithWhereUniqueWithoutUsuariosInput | arriendosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: arriendosCreateManyUsuariosInputEnvelope
    set?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    disconnect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    delete?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    update?: arriendosUpdateWithWhereUniqueWithoutUsuariosInput | arriendosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: arriendosUpdateManyWithWhereWithoutUsuariosInput | arriendosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: arriendosScalarWhereInput | arriendosScalarWhereInput[]
  }

  export type perfilesUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<perfilesCreateWithoutUsuariosInput, perfilesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: perfilesCreateOrConnectWithoutUsuariosInput
    upsert?: perfilesUpsertWithoutUsuariosInput
    connect?: perfilesWhereUniqueInput
    update?: XOR<XOR<perfilesUpdateToOneWithWhereWithoutUsuariosInput, perfilesUpdateWithoutUsuariosInput>, perfilesUncheckedUpdateWithoutUsuariosInput>
  }

  export type arriendosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<arriendosCreateWithoutUsuariosInput, arriendosUncheckedCreateWithoutUsuariosInput> | arriendosCreateWithoutUsuariosInput[] | arriendosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutUsuariosInput | arriendosCreateOrConnectWithoutUsuariosInput[]
    upsert?: arriendosUpsertWithWhereUniqueWithoutUsuariosInput | arriendosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: arriendosCreateManyUsuariosInputEnvelope
    set?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    disconnect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    delete?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    update?: arriendosUpdateWithWhereUniqueWithoutUsuariosInput | arriendosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: arriendosUpdateManyWithWhereWithoutUsuariosInput | arriendosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: arriendosScalarWhereInput | arriendosScalarWhereInput[]
  }

  export type arriendosCreateNestedManyWithoutVehiculosInput = {
    create?: XOR<arriendosCreateWithoutVehiculosInput, arriendosUncheckedCreateWithoutVehiculosInput> | arriendosCreateWithoutVehiculosInput[] | arriendosUncheckedCreateWithoutVehiculosInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutVehiculosInput | arriendosCreateOrConnectWithoutVehiculosInput[]
    createMany?: arriendosCreateManyVehiculosInputEnvelope
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
  }

  export type tipos_vehiculoCreateNestedOneWithoutVehiculosInput = {
    create?: XOR<tipos_vehiculoCreateWithoutVehiculosInput, tipos_vehiculoUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: tipos_vehiculoCreateOrConnectWithoutVehiculosInput
    connect?: tipos_vehiculoWhereUniqueInput
  }

  export type arriendosUncheckedCreateNestedManyWithoutVehiculosInput = {
    create?: XOR<arriendosCreateWithoutVehiculosInput, arriendosUncheckedCreateWithoutVehiculosInput> | arriendosCreateWithoutVehiculosInput[] | arriendosUncheckedCreateWithoutVehiculosInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutVehiculosInput | arriendosCreateOrConnectWithoutVehiculosInput[]
    createMany?: arriendosCreateManyVehiculosInputEnvelope
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
  }

  export type Enumvehiculos_estadoFieldUpdateOperationsInput = {
    set?: $Enums.vehiculos_estado
  }

  export type arriendosUpdateManyWithoutVehiculosNestedInput = {
    create?: XOR<arriendosCreateWithoutVehiculosInput, arriendosUncheckedCreateWithoutVehiculosInput> | arriendosCreateWithoutVehiculosInput[] | arriendosUncheckedCreateWithoutVehiculosInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutVehiculosInput | arriendosCreateOrConnectWithoutVehiculosInput[]
    upsert?: arriendosUpsertWithWhereUniqueWithoutVehiculosInput | arriendosUpsertWithWhereUniqueWithoutVehiculosInput[]
    createMany?: arriendosCreateManyVehiculosInputEnvelope
    set?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    disconnect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    delete?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    update?: arriendosUpdateWithWhereUniqueWithoutVehiculosInput | arriendosUpdateWithWhereUniqueWithoutVehiculosInput[]
    updateMany?: arriendosUpdateManyWithWhereWithoutVehiculosInput | arriendosUpdateManyWithWhereWithoutVehiculosInput[]
    deleteMany?: arriendosScalarWhereInput | arriendosScalarWhereInput[]
  }

  export type tipos_vehiculoUpdateOneRequiredWithoutVehiculosNestedInput = {
    create?: XOR<tipos_vehiculoCreateWithoutVehiculosInput, tipos_vehiculoUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: tipos_vehiculoCreateOrConnectWithoutVehiculosInput
    upsert?: tipos_vehiculoUpsertWithoutVehiculosInput
    connect?: tipos_vehiculoWhereUniqueInput
    update?: XOR<XOR<tipos_vehiculoUpdateToOneWithWhereWithoutVehiculosInput, tipos_vehiculoUpdateWithoutVehiculosInput>, tipos_vehiculoUncheckedUpdateWithoutVehiculosInput>
  }

  export type arriendosUncheckedUpdateManyWithoutVehiculosNestedInput = {
    create?: XOR<arriendosCreateWithoutVehiculosInput, arriendosUncheckedCreateWithoutVehiculosInput> | arriendosCreateWithoutVehiculosInput[] | arriendosUncheckedCreateWithoutVehiculosInput[]
    connectOrCreate?: arriendosCreateOrConnectWithoutVehiculosInput | arriendosCreateOrConnectWithoutVehiculosInput[]
    upsert?: arriendosUpsertWithWhereUniqueWithoutVehiculosInput | arriendosUpsertWithWhereUniqueWithoutVehiculosInput[]
    createMany?: arriendosCreateManyVehiculosInputEnvelope
    set?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    disconnect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    delete?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    connect?: arriendosWhereUniqueInput | arriendosWhereUniqueInput[]
    update?: arriendosUpdateWithWhereUniqueWithoutVehiculosInput | arriendosUpdateWithWhereUniqueWithoutVehiculosInput[]
    updateMany?: arriendosUpdateManyWithWhereWithoutVehiculosInput | arriendosUpdateManyWithWhereWithoutVehiculosInput[]
    deleteMany?: arriendosScalarWhereInput | arriendosScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumarriendos_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.arriendos_estado | Enumarriendos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.arriendos_estado[]
    notIn?: $Enums.arriendos_estado[]
    not?: NestedEnumarriendos_estadoFilter<$PrismaModel> | $Enums.arriendos_estado
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumarriendos_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.arriendos_estado | Enumarriendos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.arriendos_estado[]
    notIn?: $Enums.arriendos_estado[]
    not?: NestedEnumarriendos_estadoWithAggregatesFilter<$PrismaModel> | $Enums.arriendos_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumarriendos_estadoFilter<$PrismaModel>
    _max?: NestedEnumarriendos_estadoFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumvehiculos_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.vehiculos_estado | Enumvehiculos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.vehiculos_estado[]
    notIn?: $Enums.vehiculos_estado[]
    not?: NestedEnumvehiculos_estadoFilter<$PrismaModel> | $Enums.vehiculos_estado
  }

  export type NestedEnumvehiculos_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vehiculos_estado | Enumvehiculos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.vehiculos_estado[]
    notIn?: $Enums.vehiculos_estado[]
    not?: NestedEnumvehiculos_estadoWithAggregatesFilter<$PrismaModel> | $Enums.vehiculos_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvehiculos_estadoFilter<$PrismaModel>
    _max?: NestedEnumvehiculos_estadoFilter<$PrismaModel>
  }

  export type clientesCreateWithoutArriendosInput = {
    rut: string
    nombres: string
    apellidos: string
    email: string
    telefono: string
    direccion: string
    licencia_conducir: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type clientesUncheckedCreateWithoutArriendosInput = {
    id?: number
    rut: string
    nombres: string
    apellidos: string
    email: string
    telefono: string
    direccion: string
    licencia_conducir: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type clientesCreateOrConnectWithoutArriendosInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutArriendosInput, clientesUncheckedCreateWithoutArriendosInput>
  }

  export type usuariosCreateWithoutArriendosInput = {
    rut: string
    nombres: string
    apellidos: string
    email: string
    password_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    perfiles: perfilesCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutArriendosInput = {
    id?: number
    perfil_id: number
    rut: string
    nombres: string
    apellidos: string
    email: string
    password_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usuariosCreateOrConnectWithoutArriendosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutArriendosInput, usuariosUncheckedCreateWithoutArriendosInput>
  }

  export type vehiculosCreateWithoutArriendosInput = {
    patente: string
    marca: string
    modelo: string
    anio: number
    color: string
    estado?: $Enums.vehiculos_estado
    foto_url: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tipos_vehiculo: tipos_vehiculoCreateNestedOneWithoutVehiculosInput
  }

  export type vehiculosUncheckedCreateWithoutArriendosInput = {
    id?: number
    tipo_id: number
    patente: string
    marca: string
    modelo: string
    anio: number
    color: string
    estado?: $Enums.vehiculos_estado
    foto_url: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vehiculosCreateOrConnectWithoutArriendosInput = {
    where: vehiculosWhereUniqueInput
    create: XOR<vehiculosCreateWithoutArriendosInput, vehiculosUncheckedCreateWithoutArriendosInput>
  }

  export type clientesUpsertWithoutArriendosInput = {
    update: XOR<clientesUpdateWithoutArriendosInput, clientesUncheckedUpdateWithoutArriendosInput>
    create: XOR<clientesCreateWithoutArriendosInput, clientesUncheckedCreateWithoutArriendosInput>
    where?: clientesWhereInput
  }

  export type clientesUpdateToOneWithWhereWithoutArriendosInput = {
    where?: clientesWhereInput
    data: XOR<clientesUpdateWithoutArriendosInput, clientesUncheckedUpdateWithoutArriendosInput>
  }

  export type clientesUpdateWithoutArriendosInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    licencia_conducir?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientesUncheckedUpdateWithoutArriendosInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    licencia_conducir?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUpsertWithoutArriendosInput = {
    update: XOR<usuariosUpdateWithoutArriendosInput, usuariosUncheckedUpdateWithoutArriendosInput>
    create: XOR<usuariosCreateWithoutArriendosInput, usuariosUncheckedCreateWithoutArriendosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutArriendosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutArriendosInput, usuariosUncheckedUpdateWithoutArriendosInput>
  }

  export type usuariosUpdateWithoutArriendosInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    perfiles?: perfilesUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutArriendosInput = {
    id?: IntFieldUpdateOperationsInput | number
    perfil_id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehiculosUpsertWithoutArriendosInput = {
    update: XOR<vehiculosUpdateWithoutArriendosInput, vehiculosUncheckedUpdateWithoutArriendosInput>
    create: XOR<vehiculosCreateWithoutArriendosInput, vehiculosUncheckedCreateWithoutArriendosInput>
    where?: vehiculosWhereInput
  }

  export type vehiculosUpdateToOneWithWhereWithoutArriendosInput = {
    where?: vehiculosWhereInput
    data: XOR<vehiculosUpdateWithoutArriendosInput, vehiculosUncheckedUpdateWithoutArriendosInput>
  }

  export type vehiculosUpdateWithoutArriendosInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: Enumvehiculos_estadoFieldUpdateOperationsInput | $Enums.vehiculos_estado
    foto_url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipos_vehiculo?: tipos_vehiculoUpdateOneRequiredWithoutVehiculosNestedInput
  }

  export type vehiculosUncheckedUpdateWithoutArriendosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: Enumvehiculos_estadoFieldUpdateOperationsInput | $Enums.vehiculos_estado
    foto_url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type arriendosCreateWithoutClientesInput = {
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    usuarios: usuariosCreateNestedOneWithoutArriendosInput
    vehiculos: vehiculosCreateNestedOneWithoutArriendosInput
  }

  export type arriendosUncheckedCreateWithoutClientesInput = {
    id?: number
    vehiculo_id: number
    usuario_id: number
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type arriendosCreateOrConnectWithoutClientesInput = {
    where: arriendosWhereUniqueInput
    create: XOR<arriendosCreateWithoutClientesInput, arriendosUncheckedCreateWithoutClientesInput>
  }

  export type arriendosCreateManyClientesInputEnvelope = {
    data: arriendosCreateManyClientesInput | arriendosCreateManyClientesInput[]
    skipDuplicates?: boolean
  }

  export type arriendosUpsertWithWhereUniqueWithoutClientesInput = {
    where: arriendosWhereUniqueInput
    update: XOR<arriendosUpdateWithoutClientesInput, arriendosUncheckedUpdateWithoutClientesInput>
    create: XOR<arriendosCreateWithoutClientesInput, arriendosUncheckedCreateWithoutClientesInput>
  }

  export type arriendosUpdateWithWhereUniqueWithoutClientesInput = {
    where: arriendosWhereUniqueInput
    data: XOR<arriendosUpdateWithoutClientesInput, arriendosUncheckedUpdateWithoutClientesInput>
  }

  export type arriendosUpdateManyWithWhereWithoutClientesInput = {
    where: arriendosScalarWhereInput
    data: XOR<arriendosUpdateManyMutationInput, arriendosUncheckedUpdateManyWithoutClientesInput>
  }

  export type arriendosScalarWhereInput = {
    AND?: arriendosScalarWhereInput | arriendosScalarWhereInput[]
    OR?: arriendosScalarWhereInput[]
    NOT?: arriendosScalarWhereInput | arriendosScalarWhereInput[]
    id?: IntFilter<"arriendos"> | number
    cliente_id?: IntFilter<"arriendos"> | number
    vehiculo_id?: IntFilter<"arriendos"> | number
    usuario_id?: IntFilter<"arriendos"> | number
    fecha_inicio?: DateTimeFilter<"arriendos"> | Date | string
    fecha_termino?: DateTimeFilter<"arriendos"> | Date | string
    fecha_hora_entrega?: DateTimeFilter<"arriendos"> | Date | string
    fecha_hora_recepcion?: DateTimeNullableFilter<"arriendos"> | Date | string | null
    valor_diario_aplicado?: IntFilter<"arriendos"> | number
    dias_arriendo?: IntFilter<"arriendos"> | number
    valor_total?: IntFilter<"arriendos"> | number
    estado?: Enumarriendos_estadoFilter<"arriendos"> | $Enums.arriendos_estado
    fotos_entrega?: StringFilter<"arriendos"> | string
    fotos_recepcion?: StringNullableFilter<"arriendos"> | string | null
    vehiculo_activo_id?: IntNullableFilter<"arriendos"> | number | null
    created_at?: DateTimeFilter<"arriendos"> | Date | string
    updated_at?: DateTimeFilter<"arriendos"> | Date | string
  }

  export type usuariosCreateWithoutPerfilesInput = {
    rut: string
    nombres: string
    apellidos: string
    email: string
    password_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    arriendos?: arriendosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutPerfilesInput = {
    id?: number
    rut: string
    nombres: string
    apellidos: string
    email: string
    password_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    arriendos?: arriendosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutPerfilesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutPerfilesInput, usuariosUncheckedCreateWithoutPerfilesInput>
  }

  export type usuariosCreateManyPerfilesInputEnvelope = {
    data: usuariosCreateManyPerfilesInput | usuariosCreateManyPerfilesInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithWhereUniqueWithoutPerfilesInput = {
    where: usuariosWhereUniqueInput
    update: XOR<usuariosUpdateWithoutPerfilesInput, usuariosUncheckedUpdateWithoutPerfilesInput>
    create: XOR<usuariosCreateWithoutPerfilesInput, usuariosUncheckedCreateWithoutPerfilesInput>
  }

  export type usuariosUpdateWithWhereUniqueWithoutPerfilesInput = {
    where: usuariosWhereUniqueInput
    data: XOR<usuariosUpdateWithoutPerfilesInput, usuariosUncheckedUpdateWithoutPerfilesInput>
  }

  export type usuariosUpdateManyWithWhereWithoutPerfilesInput = {
    where: usuariosScalarWhereInput
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyWithoutPerfilesInput>
  }

  export type usuariosScalarWhereInput = {
    AND?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    OR?: usuariosScalarWhereInput[]
    NOT?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    id?: IntFilter<"usuarios"> | number
    perfil_id?: IntFilter<"usuarios"> | number
    rut?: StringFilter<"usuarios"> | string
    nombres?: StringFilter<"usuarios"> | string
    apellidos?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    password_hash?: StringFilter<"usuarios"> | string
    activo?: BoolFilter<"usuarios"> | boolean
    created_at?: DateTimeFilter<"usuarios"> | Date | string
    updated_at?: DateTimeFilter<"usuarios"> | Date | string
  }

  export type vehiculosCreateWithoutTipos_vehiculoInput = {
    patente: string
    marca: string
    modelo: string
    anio: number
    color: string
    estado?: $Enums.vehiculos_estado
    foto_url: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    arriendos?: arriendosCreateNestedManyWithoutVehiculosInput
  }

  export type vehiculosUncheckedCreateWithoutTipos_vehiculoInput = {
    id?: number
    patente: string
    marca: string
    modelo: string
    anio: number
    color: string
    estado?: $Enums.vehiculos_estado
    foto_url: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    arriendos?: arriendosUncheckedCreateNestedManyWithoutVehiculosInput
  }

  export type vehiculosCreateOrConnectWithoutTipos_vehiculoInput = {
    where: vehiculosWhereUniqueInput
    create: XOR<vehiculosCreateWithoutTipos_vehiculoInput, vehiculosUncheckedCreateWithoutTipos_vehiculoInput>
  }

  export type vehiculosCreateManyTipos_vehiculoInputEnvelope = {
    data: vehiculosCreateManyTipos_vehiculoInput | vehiculosCreateManyTipos_vehiculoInput[]
    skipDuplicates?: boolean
  }

  export type vehiculosUpsertWithWhereUniqueWithoutTipos_vehiculoInput = {
    where: vehiculosWhereUniqueInput
    update: XOR<vehiculosUpdateWithoutTipos_vehiculoInput, vehiculosUncheckedUpdateWithoutTipos_vehiculoInput>
    create: XOR<vehiculosCreateWithoutTipos_vehiculoInput, vehiculosUncheckedCreateWithoutTipos_vehiculoInput>
  }

  export type vehiculosUpdateWithWhereUniqueWithoutTipos_vehiculoInput = {
    where: vehiculosWhereUniqueInput
    data: XOR<vehiculosUpdateWithoutTipos_vehiculoInput, vehiculosUncheckedUpdateWithoutTipos_vehiculoInput>
  }

  export type vehiculosUpdateManyWithWhereWithoutTipos_vehiculoInput = {
    where: vehiculosScalarWhereInput
    data: XOR<vehiculosUpdateManyMutationInput, vehiculosUncheckedUpdateManyWithoutTipos_vehiculoInput>
  }

  export type vehiculosScalarWhereInput = {
    AND?: vehiculosScalarWhereInput | vehiculosScalarWhereInput[]
    OR?: vehiculosScalarWhereInput[]
    NOT?: vehiculosScalarWhereInput | vehiculosScalarWhereInput[]
    id?: IntFilter<"vehiculos"> | number
    tipo_id?: IntFilter<"vehiculos"> | number
    patente?: StringFilter<"vehiculos"> | string
    marca?: StringFilter<"vehiculos"> | string
    modelo?: StringFilter<"vehiculos"> | string
    anio?: IntFilter<"vehiculos"> | number
    color?: StringFilter<"vehiculos"> | string
    estado?: Enumvehiculos_estadoFilter<"vehiculos"> | $Enums.vehiculos_estado
    foto_url?: StringFilter<"vehiculos"> | string
    activo?: BoolFilter<"vehiculos"> | boolean
    created_at?: DateTimeFilter<"vehiculos"> | Date | string
    updated_at?: DateTimeFilter<"vehiculos"> | Date | string
  }

  export type arriendosCreateWithoutUsuariosInput = {
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    clientes: clientesCreateNestedOneWithoutArriendosInput
    vehiculos: vehiculosCreateNestedOneWithoutArriendosInput
  }

  export type arriendosUncheckedCreateWithoutUsuariosInput = {
    id?: number
    cliente_id: number
    vehiculo_id: number
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type arriendosCreateOrConnectWithoutUsuariosInput = {
    where: arriendosWhereUniqueInput
    create: XOR<arriendosCreateWithoutUsuariosInput, arriendosUncheckedCreateWithoutUsuariosInput>
  }

  export type arriendosCreateManyUsuariosInputEnvelope = {
    data: arriendosCreateManyUsuariosInput | arriendosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type perfilesCreateWithoutUsuariosInput = {
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type perfilesUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type perfilesCreateOrConnectWithoutUsuariosInput = {
    where: perfilesWhereUniqueInput
    create: XOR<perfilesCreateWithoutUsuariosInput, perfilesUncheckedCreateWithoutUsuariosInput>
  }

  export type arriendosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: arriendosWhereUniqueInput
    update: XOR<arriendosUpdateWithoutUsuariosInput, arriendosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<arriendosCreateWithoutUsuariosInput, arriendosUncheckedCreateWithoutUsuariosInput>
  }

  export type arriendosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: arriendosWhereUniqueInput
    data: XOR<arriendosUpdateWithoutUsuariosInput, arriendosUncheckedUpdateWithoutUsuariosInput>
  }

  export type arriendosUpdateManyWithWhereWithoutUsuariosInput = {
    where: arriendosScalarWhereInput
    data: XOR<arriendosUpdateManyMutationInput, arriendosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type perfilesUpsertWithoutUsuariosInput = {
    update: XOR<perfilesUpdateWithoutUsuariosInput, perfilesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<perfilesCreateWithoutUsuariosInput, perfilesUncheckedCreateWithoutUsuariosInput>
    where?: perfilesWhereInput
  }

  export type perfilesUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: perfilesWhereInput
    data: XOR<perfilesUpdateWithoutUsuariosInput, perfilesUncheckedUpdateWithoutUsuariosInput>
  }

  export type perfilesUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type perfilesUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type arriendosCreateWithoutVehiculosInput = {
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    clientes: clientesCreateNestedOneWithoutArriendosInput
    usuarios: usuariosCreateNestedOneWithoutArriendosInput
  }

  export type arriendosUncheckedCreateWithoutVehiculosInput = {
    id?: number
    cliente_id: number
    usuario_id: number
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type arriendosCreateOrConnectWithoutVehiculosInput = {
    where: arriendosWhereUniqueInput
    create: XOR<arriendosCreateWithoutVehiculosInput, arriendosUncheckedCreateWithoutVehiculosInput>
  }

  export type arriendosCreateManyVehiculosInputEnvelope = {
    data: arriendosCreateManyVehiculosInput | arriendosCreateManyVehiculosInput[]
    skipDuplicates?: boolean
  }

  export type tipos_vehiculoCreateWithoutVehiculosInput = {
    nombre: string
    descripcion: string
    valor_diario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tipos_vehiculoUncheckedCreateWithoutVehiculosInput = {
    id?: number
    nombre: string
    descripcion: string
    valor_diario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tipos_vehiculoCreateOrConnectWithoutVehiculosInput = {
    where: tipos_vehiculoWhereUniqueInput
    create: XOR<tipos_vehiculoCreateWithoutVehiculosInput, tipos_vehiculoUncheckedCreateWithoutVehiculosInput>
  }

  export type arriendosUpsertWithWhereUniqueWithoutVehiculosInput = {
    where: arriendosWhereUniqueInput
    update: XOR<arriendosUpdateWithoutVehiculosInput, arriendosUncheckedUpdateWithoutVehiculosInput>
    create: XOR<arriendosCreateWithoutVehiculosInput, arriendosUncheckedCreateWithoutVehiculosInput>
  }

  export type arriendosUpdateWithWhereUniqueWithoutVehiculosInput = {
    where: arriendosWhereUniqueInput
    data: XOR<arriendosUpdateWithoutVehiculosInput, arriendosUncheckedUpdateWithoutVehiculosInput>
  }

  export type arriendosUpdateManyWithWhereWithoutVehiculosInput = {
    where: arriendosScalarWhereInput
    data: XOR<arriendosUpdateManyMutationInput, arriendosUncheckedUpdateManyWithoutVehiculosInput>
  }

  export type tipos_vehiculoUpsertWithoutVehiculosInput = {
    update: XOR<tipos_vehiculoUpdateWithoutVehiculosInput, tipos_vehiculoUncheckedUpdateWithoutVehiculosInput>
    create: XOR<tipos_vehiculoCreateWithoutVehiculosInput, tipos_vehiculoUncheckedCreateWithoutVehiculosInput>
    where?: tipos_vehiculoWhereInput
  }

  export type tipos_vehiculoUpdateToOneWithWhereWithoutVehiculosInput = {
    where?: tipos_vehiculoWhereInput
    data: XOR<tipos_vehiculoUpdateWithoutVehiculosInput, tipos_vehiculoUncheckedUpdateWithoutVehiculosInput>
  }

  export type tipos_vehiculoUpdateWithoutVehiculosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor_diario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tipos_vehiculoUncheckedUpdateWithoutVehiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor_diario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type arriendosCreateManyClientesInput = {
    id?: number
    vehiculo_id: number
    usuario_id: number
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type arriendosUpdateWithoutClientesInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneRequiredWithoutArriendosNestedInput
    vehiculos?: vehiculosUpdateOneRequiredWithoutArriendosNestedInput
  }

  export type arriendosUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehiculo_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type arriendosUncheckedUpdateManyWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehiculo_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosCreateManyPerfilesInput = {
    id?: number
    rut: string
    nombres: string
    apellidos: string
    email: string
    password_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usuariosUpdateWithoutPerfilesInput = {
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arriendos?: arriendosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutPerfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arriendos?: arriendosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateManyWithoutPerfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehiculosCreateManyTipos_vehiculoInput = {
    id?: number
    patente: string
    marca: string
    modelo: string
    anio: number
    color: string
    estado?: $Enums.vehiculos_estado
    foto_url: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vehiculosUpdateWithoutTipos_vehiculoInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: Enumvehiculos_estadoFieldUpdateOperationsInput | $Enums.vehiculos_estado
    foto_url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arriendos?: arriendosUpdateManyWithoutVehiculosNestedInput
  }

  export type vehiculosUncheckedUpdateWithoutTipos_vehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: Enumvehiculos_estadoFieldUpdateOperationsInput | $Enums.vehiculos_estado
    foto_url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arriendos?: arriendosUncheckedUpdateManyWithoutVehiculosNestedInput
  }

  export type vehiculosUncheckedUpdateManyWithoutTipos_vehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: Enumvehiculos_estadoFieldUpdateOperationsInput | $Enums.vehiculos_estado
    foto_url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type arriendosCreateManyUsuariosInput = {
    id?: number
    cliente_id: number
    vehiculo_id: number
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type arriendosUpdateWithoutUsuariosInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneRequiredWithoutArriendosNestedInput
    vehiculos?: vehiculosUpdateOneRequiredWithoutArriendosNestedInput
  }

  export type arriendosUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    vehiculo_id?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type arriendosUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    vehiculo_id?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type arriendosCreateManyVehiculosInput = {
    id?: number
    cliente_id: number
    usuario_id: number
    fecha_inicio: Date | string
    fecha_termino: Date | string
    fecha_hora_entrega: Date | string
    fecha_hora_recepcion?: Date | string | null
    valor_diario_aplicado: number
    dias_arriendo: number
    valor_total: number
    estado?: $Enums.arriendos_estado
    fotos_entrega: string
    fotos_recepcion?: string | null
    vehiculo_activo_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type arriendosUpdateWithoutVehiculosInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneRequiredWithoutArriendosNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutArriendosNestedInput
  }

  export type arriendosUncheckedUpdateWithoutVehiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type arriendosUncheckedUpdateManyWithoutVehiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_recepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor_diario_aplicado?: IntFieldUpdateOperationsInput | number
    dias_arriendo?: IntFieldUpdateOperationsInput | number
    valor_total?: IntFieldUpdateOperationsInput | number
    estado?: Enumarriendos_estadoFieldUpdateOperationsInput | $Enums.arriendos_estado
    fotos_entrega?: StringFieldUpdateOperationsInput | string
    fotos_recepcion?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo_activo_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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