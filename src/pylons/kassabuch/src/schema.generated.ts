
import { proxy, arrayProxy, fnProxy, fnArrayProxy, t } from "snek-query";

export enum RegisterType {
    SHARP = "SHARP",
    QMP_18 = "QMP_18",
    MANUEL = "MANUEL"
}
export enum TransactionType {
    END_OF_DAY = "END_OF_DAY",
    END_OF_MONTH = "END_OF_MONTH",
    OTHER = "OTHER"
}
export enum TaxType {
    MWST_10 = "MWST_10",
    MWST_20 = "MWST_20"
}
export enum PaymentMethodType {
    CASH = "CASH",
    CARD = "CARD"
}
export enum RegisterTypeInput {
    SHARP = "SHARP",
    QMP_18 = "QMP_18",
    MANUEL = "MANUEL"
}
export enum TransactionTypeInput {
    END_OF_DAY = "END_OF_DAY",
    END_OF_MONTH = "END_OF_MONTH",
    OTHER = "OTHER"
}
export enum TaxTypeInput {
    MWST_10 = "MWST_10",
    MWST_20 = "MWST_20"
}
export enum PaymentMethodTypeInput {
    CASH = "CASH",
    CARD = "CARD"
}
export enum SortOrderInput {
    asc = "asc",
    desc = "desc"
}

export type ConnectionArgumentsInput = {
    first?: t.Number;
    after?: t.String;
    last?: t.Number;
    before?: t.String;
};
export type RegisterWhereInputInput = {
    AND?: RegisterWhereInputInput[];
    OR?: RegisterWhereInputInput[];
    NOT?: RegisterWhereInputInput[];
    id?: t.Number;
    type?: EnumRegisterTypeFilterInput;
    physicalId?: t.Number;
    name?: t.String;
    userId?: t.String;
    transactions?: TransactionListRelationFilterInput;
    user?: WithoutInput_14AndUserWhereInputInput;
};
export type EnumRegisterTypeFilterInput = {
    equals?: t.String;
    in?: RegisterTypeInput[];
    notIn?: RegisterTypeInput[];
    not?: t.String;
};
export type TransactionListRelationFilterInput = {
    every?: TransactionWhereInputInput;
    some?: TransactionWhereInputInput;
    none?: TransactionWhereInputInput;
};
export type TransactionWhereInputInput = {
    AND?: TransactionWhereInputInput[];
    OR?: TransactionWhereInputInput[];
    NOT?: TransactionWhereInputInput[];
    id?: t.Number;
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: EnumTransactionTypeFilterInput;
    registerId?: t.Number;
    endOfDayTransaction?: WithoutInput_16AndEndOfDayTransactionWhereInputInput;
    register?: WithoutInput_18AndRegisterWhereInputInput;
};
export type EnumTransactionTypeFilterInput = {
    equals?: t.String;
    in?: TransactionTypeInput[];
    notIn?: TransactionTypeInput[];
    not?: t.String;
};
export type WithoutInput_16AndEndOfDayTransactionWhereInputInput = {
    is?: EndOfDayTransactionWhereInputInput;
    isNot?: EndOfDayTransactionWhereInputInput;
    AND?: EndOfDayTransactionWhereInputInput[];
    OR?: EndOfDayTransactionWhereInputInput[];
    NOT?: EndOfDayTransactionWhereInputInput[];
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    transaction?: WithoutInput_20AndTransactionWhereInputInput;
    products?: ProductListRelationFilterInput;
    taxes?: TaxListRelationFilterInput;
    paymentMethods?: PaymentMethodListRelationFilterInput;
};
export type EndOfDayTransactionWhereInputInput = {
    AND?: EndOfDayTransactionWhereInputInput[];
    OR?: EndOfDayTransactionWhereInputInput[];
    NOT?: EndOfDayTransactionWhereInputInput[];
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    transaction?: WithoutInput_20AndTransactionWhereInputInput;
    products?: ProductListRelationFilterInput;
    taxes?: TaxListRelationFilterInput;
    paymentMethods?: PaymentMethodListRelationFilterInput;
};
export type WithoutInput_20AndTransactionWhereInputInput = {
    is?: TransactionWhereInputInput;
    isNot?: TransactionWhereInputInput;
    AND?: TransactionWhereInputInput[];
    OR?: TransactionWhereInputInput[];
    NOT?: TransactionWhereInputInput[];
    id?: t.Number;
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: EnumTransactionTypeFilterInput;
    registerId?: t.Number;
    endOfDayTransaction?: WithoutInput_16AndEndOfDayTransactionWhereInputInput;
    register?: WithoutInput_18AndRegisterWhereInputInput;
};
export type WithoutInput_18AndRegisterWhereInputInput = {
    is?: RegisterWhereInputInput;
    isNot?: RegisterWhereInputInput;
    AND?: RegisterWhereInputInput[];
    OR?: RegisterWhereInputInput[];
    NOT?: RegisterWhereInputInput[];
    id?: t.Number;
    type?: EnumRegisterTypeFilterInput;
    physicalId?: t.Number;
    name?: t.String;
    userId?: t.String;
    transactions?: TransactionListRelationFilterInput;
    user?: WithoutInput_14AndUserWhereInputInput;
};
export type WithoutInput_14AndUserWhereInputInput = {
    is?: UserWhereInputInput;
    isNot?: UserWhereInputInput;
    AND?: UserWhereInputInput[];
    OR?: UserWhereInputInput[];
    NOT?: UserWhereInputInput[];
    id?: t.String;
    organizationId?: t.String;
    registers?: RegisterListRelationFilterInput;
    organization?: WithoutInput_22AndOrganizationWhereInputInput;
};
export type UserWhereInputInput = {
    AND?: UserWhereInputInput[];
    OR?: UserWhereInputInput[];
    NOT?: UserWhereInputInput[];
    id?: t.String;
    organizationId?: t.String;
    registers?: RegisterListRelationFilterInput;
    organization?: WithoutInput_22AndOrganizationWhereInputInput;
};
export type RegisterListRelationFilterInput = {
    every?: RegisterWhereInputInput;
    some?: RegisterWhereInputInput;
    none?: RegisterWhereInputInput;
};
export type WithoutInput_22AndOrganizationWhereInputInput = {
    is?: OrganizationWhereInputInput;
    isNot?: OrganizationWhereInputInput;
    AND?: OrganizationWhereInputInput[];
    OR?: OrganizationWhereInputInput[];
    NOT?: OrganizationWhereInputInput[];
    id?: t.String;
    users?: UserListRelationFilterInput;
};
export type OrganizationWhereInputInput = {
    AND?: OrganizationWhereInputInput[];
    OR?: OrganizationWhereInputInput[];
    NOT?: OrganizationWhereInputInput[];
    id?: t.String;
    users?: UserListRelationFilterInput;
};
export type UserListRelationFilterInput = {
    every?: UserWhereInputInput;
    some?: UserWhereInputInput;
    none?: UserWhereInputInput;
};
export type ProductListRelationFilterInput = {
    every?: ProductWhereInputInput;
    some?: ProductWhereInputInput;
    none?: ProductWhereInputInput;
};
export type ProductWhereInputInput = {
    AND?: ProductWhereInputInput[];
    OR?: ProductWhereInputInput[];
    NOT?: ProductWhereInputInput[];
    id?: t.Number;
    endOfDayTransactionId?: t.Number;
    name?: t.String;
    amount?: t.Number;
    total?: t.Number;
    endOfDayTransaction?: WithoutInput_24AndEndOfDayTransactionWhereInputInput;
};
export type WithoutInput_24AndEndOfDayTransactionWhereInputInput = {
    is?: EndOfDayTransactionWhereInputInput;
    isNot?: EndOfDayTransactionWhereInputInput;
    AND?: EndOfDayTransactionWhereInputInput[];
    OR?: EndOfDayTransactionWhereInputInput[];
    NOT?: EndOfDayTransactionWhereInputInput[];
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    transaction?: WithoutInput_20AndTransactionWhereInputInput;
    products?: ProductListRelationFilterInput;
    taxes?: TaxListRelationFilterInput;
    paymentMethods?: PaymentMethodListRelationFilterInput;
};
export type TaxListRelationFilterInput = {
    every?: TaxWhereInputInput;
    some?: TaxWhereInputInput;
    none?: TaxWhereInputInput;
};
export type TaxWhereInputInput = {
    AND?: TaxWhereInputInput[];
    OR?: TaxWhereInputInput[];
    NOT?: TaxWhereInputInput[];
    id?: t.Number;
    endOfDayTransactionId?: t.Number;
    type?: EnumTaxTypeFilterInput;
    total?: t.Number;
    net?: t.Number;
    tax?: t.Number;
    endOfDayTransaction?: WithoutInput_24AndEndOfDayTransactionWhereInputInput;
};
export type EnumTaxTypeFilterInput = {
    equals?: t.String;
    in?: TaxTypeInput[];
    notIn?: TaxTypeInput[];
    not?: t.String;
};
export type PaymentMethodListRelationFilterInput = {
    every?: PaymentMethodWhereInputInput;
    some?: PaymentMethodWhereInputInput;
    none?: PaymentMethodWhereInputInput;
};
export type PaymentMethodWhereInputInput = {
    AND?: PaymentMethodWhereInputInput[];
    OR?: PaymentMethodWhereInputInput[];
    NOT?: PaymentMethodWhereInputInput[];
    id?: t.Number;
    endOfDayTransactionId?: t.Number;
    type?: EnumPaymentMethodTypeFilterInput;
    total?: t.Number;
    endOfDayTransaction?: WithoutInput_24AndEndOfDayTransactionWhereInputInput;
};
export type EnumPaymentMethodTypeFilterInput = {
    equals?: t.String;
    in?: PaymentMethodTypeInput[];
    notIn?: PaymentMethodTypeInput[];
    not?: t.String;
};
export type RegisterOrderByWithRelationInputInput = {
    id?: SortOrderInput;
    type?: SortOrderInput;
    physicalId?: SortOrderInput;
    name?: SortOrderInput;
    userId?: SortOrderInput;
    transactions?: TransactionOrderByRelationAggregateInputInput;
    user?: UserOrderByWithRelationInputInput;
};
export type TransactionOrderByRelationAggregateInputInput = {
    _count?: SortOrderInput;
};
export type UserOrderByWithRelationInputInput = {
    id?: SortOrderInput;
    organizationId?: SortOrderInput;
    registers?: RegisterOrderByRelationAggregateInputInput;
    organization?: OrganizationOrderByWithRelationInputInput;
};
export type RegisterOrderByRelationAggregateInputInput = {
    _count?: SortOrderInput;
};
export type OrganizationOrderByWithRelationInputInput = {
    id?: SortOrderInput;
    users?: UserOrderByRelationAggregateInputInput;
};
export type UserOrderByRelationAggregateInputInput = {
    _count?: SortOrderInput;
};
export type TransactionWhereInputInputAndWhereInput_6 = {
    AND?: TransactionWhereInputInput[];
    OR?: TransactionWhereInputInput[];
    NOT?: TransactionWhereInputInput[];
    id?: t.Number;
    timestamp?: StringAndTimestampInput;
    raw?: t.String;
    bonId?: t.Number;
    type?: EnumTransactionTypeFilterInput;
    registerId?: t.Number;
    endOfDayTransaction?: WithoutInput_16AndEndOfDayTransactionWhereInputInput;
    register?: WithoutInput_18AndRegisterWhereInputInput;
};
export type StringAndTimestampInput = {
    gte?: t.String;
    lte?: t.String;
};
export type TransactionOrderByWithRelationInputInput = {
    id?: SortOrderInput;
    timestamp?: SortOrderInput;
    raw?: SortOrderInput;
    bonId?: SortOrderInput;
    type?: SortOrderInput;
    registerId?: SortOrderInput;
    endOfDayTransaction?: EndOfDayTransactionOrderByWithRelationInputInput;
    register?: RegisterOrderByWithRelationInputInput;
};
export type EndOfDayTransactionOrderByWithRelationInputInput = {
    id?: SortOrderInput;
    transactionId?: SortOrderInput;
    bonCounter?: SortOrderInput;
    amount?: SortOrderInput;
    revenue?: SortOrderInput;
    totalRevenue?: SortOrderInput;
    transaction?: TransactionOrderByWithRelationInputInput;
    products?: ProductOrderByRelationAggregateInputInput;
    taxes?: TaxOrderByRelationAggregateInputInput;
    paymentMethods?: PaymentMethodOrderByRelationAggregateInputInput;
};
export type ProductOrderByRelationAggregateInputInput = {
    _count?: SortOrderInput;
};
export type TaxOrderByRelationAggregateInputInput = {
    _count?: SortOrderInput;
};
export type PaymentMethodOrderByRelationAggregateInputInput = {
    _count?: SortOrderInput;
};
export type OmitInput_12 = {
    timestamp: t.String;
    raw: t.String;
    bonId: t.Number;
    type: TransactionTypeInput;
    registerId?: t.Number;
    endOfDayTransaction?: EndOfDayTransactionUncheckedCreateNestedOneWithoutTransactionInputInput;
    register?: RegisterCreateNestedOneWithoutTransactionsInputInput;
};
export type EndOfDayTransactionUncheckedCreateNestedOneWithoutTransactionInputInput = {
    create?: ObjectAndEndOfDayTransactionUncheckedCreateWithoutTransactionInputInput;
    connectOrCreate?: EndOfDayTransactionCreateOrConnectWithoutTransactionInputInput;
    connect?: WhereInput_14AndWhereInput_15;
};
export type ObjectAndEndOfDayTransactionUncheckedCreateWithoutTransactionInputInput = {
    id?: t.Number;
    bonCounter: t.Number;
    amount: t.Number;
    revenue: t.Number;
    totalRevenue: t.Number;
    products?: ProductUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
    taxes?: TaxUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
};
export type ProductUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput = {
    create?: ObjectAndProductUncheckedCreateWithoutEndOfDayTransactionInputInput;
    connectOrCreate?: ProductCreateOrConnectWithoutEndOfDayTransactionInputInput[];
    createMany?: ProductCreateManyEndOfDayTransactionInputEnvelopeInput;
    connect?: WhereInput_20AndWhereInput_19;
};
export type ObjectAndProductUncheckedCreateWithoutEndOfDayTransactionInputInput = {
    id?: t.Number;
    name: t.String;
    amount: t.Number;
    total: t.Number;
};
export type ProductCreateOrConnectWithoutEndOfDayTransactionInputInput = {
    where: WhereInput_18AndWhereInput_19;
    create: ObjectAndProductUncheckedCreateWithoutEndOfDayTransactionInputInput;
};
export type WhereInput_18AndWhereInput_19 = {
    id?: t.Number;
    AND?: ProductWhereInputInput[];
    OR?: ProductWhereInputInput[];
    NOT?: ProductWhereInputInput[];
    endOfDayTransactionId?: t.Number;
    name?: t.String;
    amount?: t.Number;
    total?: t.Number;
    endOfDayTransaction?: WithoutInput_24AndEndOfDayTransactionWhereInputInput;
};
export type ProductCreateManyEndOfDayTransactionInputEnvelopeInput = {
    data?: ProductCreateManyEndOfDayTransactionInputInput[];
    skipDuplicates?: t.Boolean;
};
export type ProductCreateManyEndOfDayTransactionInputInput = {
    id?: t.Number;
    name: t.String;
    amount: t.Number;
    total: t.Number;
};
export type WhereInput_20AndWhereInput_19 = {
    id?: t.Number;
    AND?: ProductWhereInputInput[];
    OR?: ProductWhereInputInput[];
    NOT?: ProductWhereInputInput[];
    endOfDayTransactionId?: t.Number;
    name?: t.String;
    amount?: t.Number;
    total?: t.Number;
    endOfDayTransaction?: WithoutInput_24AndEndOfDayTransactionWhereInputInput;
};
export type TaxUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput = {
    create?: ObjectAndTaxUncheckedCreateWithoutEndOfDayTransactionInputInput;
    connectOrCreate?: TaxCreateOrConnectWithoutEndOfDayTransactionInputInput[];
    createMany?: TaxCreateManyEndOfDayTransactionInputEnvelopeInput;
    connect?: WhereInput_23AndWhereInput_22;
};
export type ObjectAndTaxUncheckedCreateWithoutEndOfDayTransactionInputInput = {
    id?: t.Number;
    type: TaxTypeInput;
    total: t.Number;
    net: t.Number;
    tax: t.Number;
};
export type TaxCreateOrConnectWithoutEndOfDayTransactionInputInput = {
    where: WhereInput_21AndWhereInput_22;
    create: ObjectAndTaxUncheckedCreateWithoutEndOfDayTransactionInputInput;
};
export type WhereInput_21AndWhereInput_22 = {
    id?: t.Number;
    AND?: TaxWhereInputInput[];
    OR?: TaxWhereInputInput[];
    NOT?: TaxWhereInputInput[];
    endOfDayTransactionId?: t.Number;
    type?: EnumTaxTypeFilterInput;
    total?: t.Number;
    net?: t.Number;
    tax?: t.Number;
    endOfDayTransaction?: WithoutInput_24AndEndOfDayTransactionWhereInputInput;
};
export type TaxCreateManyEndOfDayTransactionInputEnvelopeInput = {
    data?: TaxCreateManyEndOfDayTransactionInputInput[];
    skipDuplicates?: t.Boolean;
};
export type TaxCreateManyEndOfDayTransactionInputInput = {
    id?: t.Number;
    type: TaxTypeInput;
    total: t.Number;
    net: t.Number;
    tax: t.Number;
};
export type WhereInput_23AndWhereInput_22 = {
    id?: t.Number;
    AND?: TaxWhereInputInput[];
    OR?: TaxWhereInputInput[];
    NOT?: TaxWhereInputInput[];
    endOfDayTransactionId?: t.Number;
    type?: EnumTaxTypeFilterInput;
    total?: t.Number;
    net?: t.Number;
    tax?: t.Number;
    endOfDayTransaction?: WithoutInput_24AndEndOfDayTransactionWhereInputInput;
};
export type PaymentMethodUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput = {
    create?: ObjectAndPaymentMethodUncheckedCreateWithoutEndOfDayTransactionInputInput;
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutEndOfDayTransactionInputInput[];
    createMany?: PaymentMethodCreateManyEndOfDayTransactionInputEnvelopeInput;
    connect?: WhereInput_26AndWhereInput_25;
};
export type ObjectAndPaymentMethodUncheckedCreateWithoutEndOfDayTransactionInputInput = {
    id?: t.Number;
    type: PaymentMethodTypeInput;
    total: t.Number;
};
export type PaymentMethodCreateOrConnectWithoutEndOfDayTransactionInputInput = {
    where: WhereInput_24AndWhereInput_25;
    create: ObjectAndPaymentMethodUncheckedCreateWithoutEndOfDayTransactionInputInput;
};
export type WhereInput_24AndWhereInput_25 = {
    id?: t.Number;
    AND?: PaymentMethodWhereInputInput[];
    OR?: PaymentMethodWhereInputInput[];
    NOT?: PaymentMethodWhereInputInput[];
    endOfDayTransactionId?: t.Number;
    type?: EnumPaymentMethodTypeFilterInput;
    total?: t.Number;
    endOfDayTransaction?: WithoutInput_24AndEndOfDayTransactionWhereInputInput;
};
export type PaymentMethodCreateManyEndOfDayTransactionInputEnvelopeInput = {
    data?: PaymentMethodCreateManyEndOfDayTransactionInputInput[];
    skipDuplicates?: t.Boolean;
};
export type PaymentMethodCreateManyEndOfDayTransactionInputInput = {
    id?: t.Number;
    type: PaymentMethodTypeInput;
    total: t.Number;
};
export type WhereInput_26AndWhereInput_25 = {
    id?: t.Number;
    AND?: PaymentMethodWhereInputInput[];
    OR?: PaymentMethodWhereInputInput[];
    NOT?: PaymentMethodWhereInputInput[];
    endOfDayTransactionId?: t.Number;
    type?: EnumPaymentMethodTypeFilterInput;
    total?: t.Number;
    endOfDayTransaction?: WithoutInput_24AndEndOfDayTransactionWhereInputInput;
};
export type EndOfDayTransactionCreateOrConnectWithoutTransactionInputInput = {
    where: WhereInput_14AndWhereInput_15;
    create: ObjectAndEndOfDayTransactionUncheckedCreateWithoutTransactionInputInput;
};
export type WhereInput_14AndWhereInput_15 = {
    id?: t.Number;
    transactionId?: t.Number;
    AND?: EndOfDayTransactionWhereInputInput[];
    OR?: EndOfDayTransactionWhereInputInput[];
    NOT?: EndOfDayTransactionWhereInputInput[];
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    transaction?: WithoutInput_20AndTransactionWhereInputInput;
    products?: ProductListRelationFilterInput;
    taxes?: TaxListRelationFilterInput;
    paymentMethods?: PaymentMethodListRelationFilterInput;
};
export type RegisterCreateNestedOneWithoutTransactionsInputInput = {
    create?: WithoutInput_30AndRegisterUncheckedCreateWithoutTransactionsInputInput;
    connectOrCreate?: RegisterCreateOrConnectWithoutTransactionsInputInput;
    connect?: WhereInputAndWhereInput_1;
};
export type WithoutInput_30AndRegisterUncheckedCreateWithoutTransactionsInputInput = {
    user?: UserCreateNestedOneWithoutRegistersInputInput;
    id?: t.Number;
    type: RegisterTypeInput;
    physicalId: t.Number;
    name: t.String;
    userId?: t.String;
};
export type UserCreateNestedOneWithoutRegistersInputInput = {
    create?: WithoutInput_32AndUserUncheckedCreateWithoutRegistersInputInput;
    connectOrCreate?: UserCreateOrConnectWithoutRegistersInputInput;
    connect?: WhereInput_11AndWhereInput_12;
};
export type WithoutInput_32AndUserUncheckedCreateWithoutRegistersInputInput = {
    organization?: OrganizationCreateNestedOneWithoutUsersInputInput;
    id: t.String;
    organizationId?: t.String;
};
export type OrganizationCreateNestedOneWithoutUsersInputInput = {
    create?: ObjectAndOrganizationUncheckedCreateWithoutUsersInputInput;
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInputInput;
    connect?: WhereInput_3AndWhereInput_4;
};
export type ObjectAndOrganizationUncheckedCreateWithoutUsersInputInput = {
    id: t.String;
};
export type OrganizationCreateOrConnectWithoutUsersInputInput = {
    where: WhereInput_3AndWhereInput_4;
    create: ObjectAndOrganizationUncheckedCreateWithoutUsersInputInput;
};
export type WhereInput_3AndWhereInput_4 = {
    id?: t.String;
    AND?: OrganizationWhereInputInput[];
    OR?: OrganizationWhereInputInput[];
    NOT?: OrganizationWhereInputInput[];
    users?: UserListRelationFilterInput;
};
export type UserCreateOrConnectWithoutRegistersInputInput = {
    where: WhereInput_11AndWhereInput_12;
    create: WithoutInput_32AndUserUncheckedCreateWithoutRegistersInputInput;
};
export type WhereInput_11AndWhereInput_12 = {
    id?: t.String;
    AND?: UserWhereInputInput[];
    OR?: UserWhereInputInput[];
    NOT?: UserWhereInputInput[];
    organizationId?: t.String;
    registers?: RegisterListRelationFilterInput;
    organization?: WithoutInput_22AndOrganizationWhereInputInput;
};
export type RegisterCreateOrConnectWithoutTransactionsInputInput = {
    where: WhereInputAndWhereInput_1;
    create: WithoutInput_30AndRegisterUncheckedCreateWithoutTransactionsInputInput;
};
export type WhereInputAndWhereInput_1 = {
    id?: t.Number;
    AND?: RegisterWhereInputInput[];
    OR?: RegisterWhereInputInput[];
    NOT?: RegisterWhereInputInput[];
    type?: EnumRegisterTypeFilterInput;
    physicalId?: t.Number;
    name?: t.String;
    userId?: t.String;
    transactions?: TransactionListRelationFilterInput;
    user?: WithoutInput_14AndUserWhereInputInput;
};
export type WithoutInput_2AndTransactionUncheckedUpdateInputInput = {
    register?: RegisterUpdateOneRequiredWithoutTransactionsNestedInputInput;
    id?: t.Number;
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: t.String;
    registerId?: t.Number;
    endOfDayTransaction?: EndOfDayTransactionUncheckedUpdateOneWithoutTransactionNestedInputInput;
};
export type RegisterUpdateOneRequiredWithoutTransactionsNestedInputInput = {
    create?: WithoutInput_30AndRegisterUncheckedCreateWithoutTransactionsInputInput;
    connectOrCreate?: RegisterCreateOrConnectWithoutTransactionsInputInput;
    upsert?: RegisterUpsertWithoutTransactionsInputInput;
    connect?: WhereInputAndWhereInput_1;
    update?: WithoutInput_34AndRegisterUncheckedUpdateWithoutTransactionsInputInput;
};
export type RegisterUpsertWithoutTransactionsInputInput = {
    update: WithoutInput_40AndRegisterUncheckedUpdateWithoutTransactionsInputInput;
    create: WithoutInput_30AndRegisterUncheckedCreateWithoutTransactionsInputInput;
    where?: RegisterWhereInputInput;
};
export type WithoutInput_40AndRegisterUncheckedUpdateWithoutTransactionsInputInput = {
    user?: UserUpdateOneRequiredWithoutRegistersNestedInputInput;
    id?: t.Number;
    type?: t.String;
    physicalId?: t.Number;
    name?: t.String;
    userId?: t.String;
};
export type UserUpdateOneRequiredWithoutRegistersNestedInputInput = {
    create?: WithoutInput_32AndUserUncheckedCreateWithoutRegistersInputInput;
    connectOrCreate?: UserCreateOrConnectWithoutRegistersInputInput;
    upsert?: UserUpsertWithoutRegistersInputInput;
    connect?: WhereInput_11AndWhereInput_12;
    update?: WithoutInput_42AndUserUncheckedUpdateWithoutRegistersInputInput;
};
export type UserUpsertWithoutRegistersInputInput = {
    update: WithoutInput_48AndUserUncheckedUpdateWithoutRegistersInputInput;
    create: WithoutInput_32AndUserUncheckedCreateWithoutRegistersInputInput;
    where?: UserWhereInputInput;
};
export type WithoutInput_48AndUserUncheckedUpdateWithoutRegistersInputInput = {
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInputInput;
    id?: t.String;
    organizationId?: t.String;
};
export type OrganizationUpdateOneRequiredWithoutUsersNestedInputInput = {
    create?: ObjectAndOrganizationUncheckedCreateWithoutUsersInputInput;
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInputInput;
    upsert?: OrganizationUpsertWithoutUsersInputInput;
    connect?: WhereInput_3AndWhereInput_4;
    update?: WithoutInput_50AndOrganizationUncheckedUpdateWithoutUsersInputInput;
};
export type OrganizationUpsertWithoutUsersInputInput = {
    update: ObjectAndOrganizationUncheckedUpdateWithoutUsersInputInput;
    create: ObjectAndOrganizationUncheckedCreateWithoutUsersInputInput;
    where?: OrganizationWhereInputInput;
};
export type ObjectAndOrganizationUncheckedUpdateWithoutUsersInputInput = {
    id?: t.String;
};
export type WithoutInput_50AndOrganizationUncheckedUpdateWithoutUsersInputInput = {
    where?: OrganizationWhereInputInput;
    data?: ObjectAndOrganizationUncheckedUpdateWithoutUsersInputInput;
    id?: t.String;
};
export type WithoutInput_42AndUserUncheckedUpdateWithoutRegistersInputInput = {
    where?: UserWhereInputInput;
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInputInput;
    data?: WithoutInput_48AndUserUncheckedUpdateWithoutRegistersInputInput;
    id?: t.String;
    organizationId?: t.String;
};
export type WithoutInput_34AndRegisterUncheckedUpdateWithoutTransactionsInputInput = {
    where?: RegisterWhereInputInput;
    user?: UserUpdateOneRequiredWithoutRegistersNestedInputInput;
    data?: WithoutInput_40AndRegisterUncheckedUpdateWithoutTransactionsInputInput;
    id?: t.Number;
    type?: t.String;
    physicalId?: t.Number;
    name?: t.String;
    userId?: t.String;
};
export type EndOfDayTransactionUncheckedUpdateOneWithoutTransactionNestedInputInput = {
    create?: ObjectAndEndOfDayTransactionUncheckedCreateWithoutTransactionInputInput;
    connectOrCreate?: EndOfDayTransactionCreateOrConnectWithoutTransactionInputInput;
    upsert?: EndOfDayTransactionUpsertWithoutTransactionInputInput;
    disconnect?: t.Boolean;
    delete?: t.Boolean;
    connect?: WhereInput_14AndWhereInput_15;
    update?: WithoutInput_54AndEndOfDayTransactionUncheckedUpdateWithoutTransactionInputInput;
};
export type EndOfDayTransactionUpsertWithoutTransactionInputInput = {
    update: ObjectAndEndOfDayTransactionUncheckedUpdateWithoutTransactionInputInput;
    create: ObjectAndEndOfDayTransactionUncheckedCreateWithoutTransactionInputInput;
    where?: EndOfDayTransactionWhereInputInput;
};
export type ObjectAndEndOfDayTransactionUncheckedUpdateWithoutTransactionInputInput = {
    id?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    products?: ProductUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    taxes?: TaxUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
};
export type ProductUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput = {
    create?: ObjectAndProductUncheckedCreateWithoutEndOfDayTransactionInputInput;
    connectOrCreate?: ProductCreateOrConnectWithoutEndOfDayTransactionInputInput[];
    upsert?: ProductUpsertWithWhereUniqueWithoutEndOfDayTransactionInputInput[];
    createMany?: ProductCreateManyEndOfDayTransactionInputEnvelopeInput;
    set?: WhereInput_20AndWhereInput_19;
    disconnect?: WhereInput_20AndWhereInput_19;
    delete?: WhereInput_20AndWhereInput_19;
    connect?: WhereInput_20AndWhereInput_19;
    update?: ProductUpdateWithWhereUniqueWithoutEndOfDayTransactionInputInput[];
    updateMany?: ProductUpdateManyWithWhereWithoutEndOfDayTransactionInputInput[];
    deleteMany?: ProductScalarWhereInputInput[];
};
export type ProductUpsertWithWhereUniqueWithoutEndOfDayTransactionInputInput = {
    where: WhereInput_18AndWhereInput_19;
    update: ObjectAndProductUncheckedUpdateWithoutEndOfDayTransactionInputInput;
    create: ObjectAndProductUncheckedCreateWithoutEndOfDayTransactionInputInput;
};
export type ObjectAndProductUncheckedUpdateWithoutEndOfDayTransactionInputInput = {
    id?: t.Number;
    name?: t.String;
    amount?: t.Number;
    total?: t.Number;
};
export type ProductUpdateWithWhereUniqueWithoutEndOfDayTransactionInputInput = {
    where: WhereInput_18AndWhereInput_19;
    data: ObjectAndProductUncheckedUpdateWithoutEndOfDayTransactionInputInput;
};
export type ProductUpdateManyWithWhereWithoutEndOfDayTransactionInputInput = {
    where: ProductScalarWhereInputInput;
    data: ObjectAndProductUncheckedUpdateManyWithoutEndOfDayTransactionInputInput;
};
export type ProductScalarWhereInputInput = {
    AND?: ProductScalarWhereInputInput[];
    OR?: ProductScalarWhereInputInput[];
    NOT?: ProductScalarWhereInputInput[];
    id?: t.Number;
    endOfDayTransactionId?: t.Number;
    name?: t.String;
    amount?: t.Number;
    total?: t.Number;
};
export type ObjectAndProductUncheckedUpdateManyWithoutEndOfDayTransactionInputInput = {
    id?: t.Number;
    name?: t.String;
    amount?: t.Number;
    total?: t.Number;
};
export type TaxUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput = {
    create?: ObjectAndTaxUncheckedCreateWithoutEndOfDayTransactionInputInput;
    connectOrCreate?: TaxCreateOrConnectWithoutEndOfDayTransactionInputInput[];
    upsert?: TaxUpsertWithWhereUniqueWithoutEndOfDayTransactionInputInput[];
    createMany?: TaxCreateManyEndOfDayTransactionInputEnvelopeInput;
    set?: WhereInput_23AndWhereInput_22;
    disconnect?: WhereInput_23AndWhereInput_22;
    delete?: WhereInput_23AndWhereInput_22;
    connect?: WhereInput_23AndWhereInput_22;
    update?: TaxUpdateWithWhereUniqueWithoutEndOfDayTransactionInputInput[];
    updateMany?: TaxUpdateManyWithWhereWithoutEndOfDayTransactionInputInput[];
    deleteMany?: TaxScalarWhereInputInput[];
};
export type TaxUpsertWithWhereUniqueWithoutEndOfDayTransactionInputInput = {
    where: WhereInput_21AndWhereInput_22;
    update: ObjectAndTaxUncheckedUpdateWithoutEndOfDayTransactionInputInput;
    create: ObjectAndTaxUncheckedCreateWithoutEndOfDayTransactionInputInput;
};
export type ObjectAndTaxUncheckedUpdateWithoutEndOfDayTransactionInputInput = {
    id?: t.Number;
    type?: t.String;
    total?: t.Number;
    net?: t.Number;
    tax?: t.Number;
};
export type TaxUpdateWithWhereUniqueWithoutEndOfDayTransactionInputInput = {
    where: WhereInput_21AndWhereInput_22;
    data: ObjectAndTaxUncheckedUpdateWithoutEndOfDayTransactionInputInput;
};
export type TaxUpdateManyWithWhereWithoutEndOfDayTransactionInputInput = {
    where: TaxScalarWhereInputInput;
    data: ObjectAndTaxUncheckedUpdateManyWithoutEndOfDayTransactionInputInput;
};
export type TaxScalarWhereInputInput = {
    AND?: TaxScalarWhereInputInput[];
    OR?: TaxScalarWhereInputInput[];
    NOT?: TaxScalarWhereInputInput[];
    id?: t.Number;
    endOfDayTransactionId?: t.Number;
    type?: EnumTaxTypeFilterInput;
    total?: t.Number;
    net?: t.Number;
    tax?: t.Number;
};
export type ObjectAndTaxUncheckedUpdateManyWithoutEndOfDayTransactionInputInput = {
    id?: t.Number;
    type?: t.String;
    total?: t.Number;
    net?: t.Number;
    tax?: t.Number;
};
export type PaymentMethodUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput = {
    create?: ObjectAndPaymentMethodUncheckedCreateWithoutEndOfDayTransactionInputInput;
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutEndOfDayTransactionInputInput[];
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutEndOfDayTransactionInputInput[];
    createMany?: PaymentMethodCreateManyEndOfDayTransactionInputEnvelopeInput;
    set?: WhereInput_26AndWhereInput_25;
    disconnect?: WhereInput_26AndWhereInput_25;
    delete?: WhereInput_26AndWhereInput_25;
    connect?: WhereInput_26AndWhereInput_25;
    update?: PaymentMethodUpdateWithWhereUniqueWithoutEndOfDayTransactionInputInput[];
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutEndOfDayTransactionInputInput[];
    deleteMany?: PaymentMethodScalarWhereInputInput[];
};
export type PaymentMethodUpsertWithWhereUniqueWithoutEndOfDayTransactionInputInput = {
    where: WhereInput_24AndWhereInput_25;
    update: ObjectAndPaymentMethodUncheckedUpdateWithoutEndOfDayTransactionInputInput;
    create: ObjectAndPaymentMethodUncheckedCreateWithoutEndOfDayTransactionInputInput;
};
export type ObjectAndPaymentMethodUncheckedUpdateWithoutEndOfDayTransactionInputInput = {
    id?: t.Number;
    type?: t.String;
    total?: t.Number;
};
export type PaymentMethodUpdateWithWhereUniqueWithoutEndOfDayTransactionInputInput = {
    where: WhereInput_24AndWhereInput_25;
    data: ObjectAndPaymentMethodUncheckedUpdateWithoutEndOfDayTransactionInputInput;
};
export type PaymentMethodUpdateManyWithWhereWithoutEndOfDayTransactionInputInput = {
    where: PaymentMethodScalarWhereInputInput;
    data: ObjectAndPaymentMethodUncheckedUpdateManyWithoutEndOfDayTransactionInputInput;
};
export type PaymentMethodScalarWhereInputInput = {
    AND?: PaymentMethodScalarWhereInputInput[];
    OR?: PaymentMethodScalarWhereInputInput[];
    NOT?: PaymentMethodScalarWhereInputInput[];
    id?: t.Number;
    endOfDayTransactionId?: t.Number;
    type?: EnumPaymentMethodTypeFilterInput;
    total?: t.Number;
};
export type ObjectAndPaymentMethodUncheckedUpdateManyWithoutEndOfDayTransactionInputInput = {
    id?: t.Number;
    type?: t.String;
    total?: t.Number;
};
export type WithoutInput_54AndEndOfDayTransactionUncheckedUpdateWithoutTransactionInputInput = {
    where?: EndOfDayTransactionWhereInputInput;
    data?: ObjectAndEndOfDayTransactionUncheckedUpdateWithoutTransactionInputInput;
    id?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    products?: ProductUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    taxes?: TaxUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
};
export type WhereInput_7AndWhereInput_8 = {
    id?: t.Number;
    raw_registerId_timestamp?: TransactionRawRegisterIdTimestampCompoundUniqueInputInput;
    AND?: TransactionWhereInputInput[];
    OR?: TransactionWhereInputInput[];
    NOT?: TransactionWhereInputInput[];
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: EnumTransactionTypeFilterInput;
    registerId?: t.Number;
    endOfDayTransaction?: WithoutInput_16AndEndOfDayTransactionWhereInputInput;
    register?: WithoutInput_18AndRegisterWhereInputInput;
};
export type TransactionRawRegisterIdTimestampCompoundUniqueInputInput = {
    raw: t.String;
    registerId: t.Number;
    timestamp: t.String;
};
export type OmitInput_13 = {
    AND?: TransactionWhereInputInput[];
    OR?: TransactionWhereInputInput[];
    NOT?: TransactionWhereInputInput[];
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: EnumTransactionTypeFilterInput;
    registerId?: t.Number;
    endOfDayTransaction?: WithoutInput_16AndEndOfDayTransactionWhereInputInput;
    register?: WithoutInput_18AndRegisterWhereInputInput;
    raw_registerId_timestamp?: TransactionRawRegisterIdTimestampCompoundUniqueInputInput;
};
export type ProductOrderByWithRelationInputInput = {
    id?: SortOrderInput;
    endOfDayTransactionId?: SortOrderInput;
    name?: SortOrderInput;
    amount?: SortOrderInput;
    total?: SortOrderInput;
    endOfDayTransaction?: EndOfDayTransactionOrderByWithRelationInputInput;
};
export type OmitInput_20 = {
    transactionId?: t.Number;
    bonCounter: t.Number;
    amount: t.Number;
    revenue: t.Number;
    totalRevenue: t.Number;
    transaction?: TransactionCreateNestedOneWithoutEndOfDayTransactionInputInput;
    products?: ProductUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
    taxes?: TaxUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
};
export type TransactionCreateNestedOneWithoutEndOfDayTransactionInputInput = {
    create?: WithoutInput_67AndTransactionUncheckedCreateWithoutEndOfDayTransactionInputInput;
    connectOrCreate?: TransactionCreateOrConnectWithoutEndOfDayTransactionInputInput;
    connect?: WhereInput_7AndWhereInput_8;
};
export type WithoutInput_67AndTransactionUncheckedCreateWithoutEndOfDayTransactionInputInput = {
    register?: RegisterCreateNestedOneWithoutTransactionsInputInput;
    id?: t.Number;
    timestamp: t.String;
    raw: t.String;
    bonId: t.Number;
    type: TransactionTypeInput;
    registerId?: t.Number;
};
export type TransactionCreateOrConnectWithoutEndOfDayTransactionInputInput = {
    where: WhereInput_7AndWhereInput_8;
    create: WithoutInput_67AndTransactionUncheckedCreateWithoutEndOfDayTransactionInputInput;
};
export type WithoutInput_6AndEndOfDayTransactionUncheckedUpdateInputInput = {
    transaction?: TransactionUpdateOneRequiredWithoutEndOfDayTransactionNestedInputInput;
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    products?: ProductUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    taxes?: TaxUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
};
export type TransactionUpdateOneRequiredWithoutEndOfDayTransactionNestedInputInput = {
    create?: WithoutInput_67AndTransactionUncheckedCreateWithoutEndOfDayTransactionInputInput;
    connectOrCreate?: TransactionCreateOrConnectWithoutEndOfDayTransactionInputInput;
    upsert?: TransactionUpsertWithoutEndOfDayTransactionInputInput;
    connect?: WhereInput_7AndWhereInput_8;
    update?: WithoutInput_69AndTransactionUncheckedUpdateWithoutEndOfDayTransactionInputInput;
};
export type TransactionUpsertWithoutEndOfDayTransactionInputInput = {
    update: WithoutInput_75AndTransactionUncheckedUpdateWithoutEndOfDayTransactionInputInput;
    create: WithoutInput_67AndTransactionUncheckedCreateWithoutEndOfDayTransactionInputInput;
    where?: TransactionWhereInputInput;
};
export type WithoutInput_75AndTransactionUncheckedUpdateWithoutEndOfDayTransactionInputInput = {
    register?: RegisterUpdateOneRequiredWithoutTransactionsNestedInputInput;
    id?: t.Number;
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: t.String;
    registerId?: t.Number;
};
export type WithoutInput_69AndTransactionUncheckedUpdateWithoutEndOfDayTransactionInputInput = {
    where?: TransactionWhereInputInput;
    register?: RegisterUpdateOneRequiredWithoutTransactionsNestedInputInput;
    data?: WithoutInput_75AndTransactionUncheckedUpdateWithoutEndOfDayTransactionInputInput;
    id?: t.Number;
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: t.String;
    registerId?: t.Number;
};
export type OmitInput_21 = {
    AND?: EndOfDayTransactionWhereInputInput[];
    OR?: EndOfDayTransactionWhereInputInput[];
    NOT?: EndOfDayTransactionWhereInputInput[];
    transactionId?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    transaction?: WithoutInput_20AndTransactionWhereInputInput;
    products?: ProductListRelationFilterInput;
    taxes?: TaxListRelationFilterInput;
    paymentMethods?: PaymentMethodListRelationFilterInput;
};
export type OmitInput_14 = {
    id?: t.Number;
    name: t.String;
    amount: t.Number;
    total: t.Number;
};
export type WithoutInput_8AndProductUncheckedUpdateInputInput = {
    endOfDayTransaction?: EndOfDayTransactionUpdateOneRequiredWithoutProductsNestedInputInput;
    id?: t.Number;
    endOfDayTransactionId?: t.Number;
    name?: t.String;
    amount?: t.Number;
    total?: t.Number;
};
export type EndOfDayTransactionUpdateOneRequiredWithoutProductsNestedInputInput = {
    create?: WithoutInput_77AndEndOfDayTransactionUncheckedCreateWithoutProductsInputInput;
    connectOrCreate?: EndOfDayTransactionCreateOrConnectWithoutProductsInputInput;
    upsert?: EndOfDayTransactionUpsertWithoutProductsInputInput;
    connect?: WhereInput_14AndWhereInput_15;
    update?: WithoutInput_79AndEndOfDayTransactionUncheckedUpdateWithoutProductsInputInput;
};
export type WithoutInput_77AndEndOfDayTransactionUncheckedCreateWithoutProductsInputInput = {
    transaction?: TransactionCreateNestedOneWithoutEndOfDayTransactionInputInput;
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter: t.Number;
    amount: t.Number;
    revenue: t.Number;
    totalRevenue: t.Number;
    taxes?: TaxUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
};
export type EndOfDayTransactionCreateOrConnectWithoutProductsInputInput = {
    where: WhereInput_14AndWhereInput_15;
    create: WithoutInput_77AndEndOfDayTransactionUncheckedCreateWithoutProductsInputInput;
};
export type EndOfDayTransactionUpsertWithoutProductsInputInput = {
    update: WithoutInput_85AndEndOfDayTransactionUncheckedUpdateWithoutProductsInputInput;
    create: WithoutInput_77AndEndOfDayTransactionUncheckedCreateWithoutProductsInputInput;
    where?: EndOfDayTransactionWhereInputInput;
};
export type WithoutInput_85AndEndOfDayTransactionUncheckedUpdateWithoutProductsInputInput = {
    transaction?: TransactionUpdateOneRequiredWithoutEndOfDayTransactionNestedInputInput;
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    taxes?: TaxUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
};
export type WithoutInput_79AndEndOfDayTransactionUncheckedUpdateWithoutProductsInputInput = {
    where?: EndOfDayTransactionWhereInputInput;
    transaction?: TransactionUpdateOneRequiredWithoutEndOfDayTransactionNestedInputInput;
    data?: WithoutInput_85AndEndOfDayTransactionUncheckedUpdateWithoutProductsInputInput;
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    taxes?: TaxUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
};
export type OmitInput_15 = {
    id?: t.Number;
    name?: t.String;
    AND?: ProductWhereInputInput[];
    OR?: ProductWhereInputInput[];
    NOT?: ProductWhereInputInput[];
    amount?: t.Number;
    total?: t.Number;
};
export type TaxOrderByWithRelationInputInput = {
    id?: SortOrderInput;
    endOfDayTransactionId?: SortOrderInput;
    type?: SortOrderInput;
    total?: SortOrderInput;
    net?: SortOrderInput;
    tax?: SortOrderInput;
    endOfDayTransaction?: EndOfDayTransactionOrderByWithRelationInputInput;
};
export type OmitInput_16 = {
    id?: t.Number;
    type: TaxTypeInput;
    net: t.Number;
    total: t.Number;
    tax: t.Number;
};
export type WithoutInput_10AndTaxUncheckedUpdateInputInput = {
    endOfDayTransaction?: EndOfDayTransactionUpdateOneRequiredWithoutTaxesNestedInputInput;
    id?: t.Number;
    endOfDayTransactionId?: t.Number;
    type?: t.String;
    total?: t.Number;
    net?: t.Number;
    tax?: t.Number;
};
export type EndOfDayTransactionUpdateOneRequiredWithoutTaxesNestedInputInput = {
    create?: WithoutInput_87AndEndOfDayTransactionUncheckedCreateWithoutTaxesInputInput;
    connectOrCreate?: EndOfDayTransactionCreateOrConnectWithoutTaxesInputInput;
    upsert?: EndOfDayTransactionUpsertWithoutTaxesInputInput;
    connect?: WhereInput_14AndWhereInput_15;
    update?: WithoutInput_89AndEndOfDayTransactionUncheckedUpdateWithoutTaxesInputInput;
};
export type WithoutInput_87AndEndOfDayTransactionUncheckedCreateWithoutTaxesInputInput = {
    transaction?: TransactionCreateNestedOneWithoutEndOfDayTransactionInputInput;
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter: t.Number;
    amount: t.Number;
    revenue: t.Number;
    totalRevenue: t.Number;
    products?: ProductUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
};
export type EndOfDayTransactionCreateOrConnectWithoutTaxesInputInput = {
    where: WhereInput_14AndWhereInput_15;
    create: WithoutInput_87AndEndOfDayTransactionUncheckedCreateWithoutTaxesInputInput;
};
export type EndOfDayTransactionUpsertWithoutTaxesInputInput = {
    update: WithoutInput_95AndEndOfDayTransactionUncheckedUpdateWithoutTaxesInputInput;
    create: WithoutInput_87AndEndOfDayTransactionUncheckedCreateWithoutTaxesInputInput;
    where?: EndOfDayTransactionWhereInputInput;
};
export type WithoutInput_95AndEndOfDayTransactionUncheckedUpdateWithoutTaxesInputInput = {
    transaction?: TransactionUpdateOneRequiredWithoutEndOfDayTransactionNestedInputInput;
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    products?: ProductUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
};
export type WithoutInput_89AndEndOfDayTransactionUncheckedUpdateWithoutTaxesInputInput = {
    where?: EndOfDayTransactionWhereInputInput;
    transaction?: TransactionUpdateOneRequiredWithoutEndOfDayTransactionNestedInputInput;
    data?: WithoutInput_95AndEndOfDayTransactionUncheckedUpdateWithoutTaxesInputInput;
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    products?: ProductUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
};
export type OmitInput_17 = {
    id?: t.Number;
    AND?: TaxWhereInputInput[];
    OR?: TaxWhereInputInput[];
    NOT?: TaxWhereInputInput[];
    type?: EnumTaxTypeFilterInput;
    net?: t.Number;
    total?: t.Number;
    tax?: t.Number;
};
export type PaymentMethodOrderByWithRelationInputInput = {
    id?: SortOrderInput;
    endOfDayTransactionId?: SortOrderInput;
    type?: SortOrderInput;
    total?: SortOrderInput;
    endOfDayTransaction?: EndOfDayTransactionOrderByWithRelationInputInput;
};
export type OmitInput_18 = {
    id?: t.Number;
    type: PaymentMethodTypeInput;
    total: t.Number;
};
export type WithoutInput_12AndPaymentMethodUncheckedUpdateInputInput = {
    endOfDayTransaction?: EndOfDayTransactionUpdateOneRequiredWithoutPaymentMethodsNestedInputInput;
    id?: t.Number;
    endOfDayTransactionId?: t.Number;
    type?: t.String;
    total?: t.Number;
};
export type EndOfDayTransactionUpdateOneRequiredWithoutPaymentMethodsNestedInputInput = {
    create?: WithoutInput_97AndEndOfDayTransactionUncheckedCreateWithoutPaymentMethodsInputInput;
    connectOrCreate?: EndOfDayTransactionCreateOrConnectWithoutPaymentMethodsInputInput;
    upsert?: EndOfDayTransactionUpsertWithoutPaymentMethodsInputInput;
    connect?: WhereInput_14AndWhereInput_15;
    update?: WithoutInput_99AndEndOfDayTransactionUncheckedUpdateWithoutPaymentMethodsInputInput;
};
export type WithoutInput_97AndEndOfDayTransactionUncheckedCreateWithoutPaymentMethodsInputInput = {
    transaction?: TransactionCreateNestedOneWithoutEndOfDayTransactionInputInput;
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter: t.Number;
    amount: t.Number;
    revenue: t.Number;
    totalRevenue: t.Number;
    products?: ProductUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
    taxes?: TaxUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
};
export type EndOfDayTransactionCreateOrConnectWithoutPaymentMethodsInputInput = {
    where: WhereInput_14AndWhereInput_15;
    create: WithoutInput_97AndEndOfDayTransactionUncheckedCreateWithoutPaymentMethodsInputInput;
};
export type EndOfDayTransactionUpsertWithoutPaymentMethodsInputInput = {
    update: WithoutInput_105AndEndOfDayTransactionUncheckedUpdateWithoutPaymentMethodsInputInput;
    create: WithoutInput_97AndEndOfDayTransactionUncheckedCreateWithoutPaymentMethodsInputInput;
    where?: EndOfDayTransactionWhereInputInput;
};
export type WithoutInput_105AndEndOfDayTransactionUncheckedUpdateWithoutPaymentMethodsInputInput = {
    transaction?: TransactionUpdateOneRequiredWithoutEndOfDayTransactionNestedInputInput;
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    products?: ProductUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    taxes?: TaxUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
};
export type WithoutInput_99AndEndOfDayTransactionUncheckedUpdateWithoutPaymentMethodsInputInput = {
    where?: EndOfDayTransactionWhereInputInput;
    transaction?: TransactionUpdateOneRequiredWithoutEndOfDayTransactionNestedInputInput;
    data?: WithoutInput_105AndEndOfDayTransactionUncheckedUpdateWithoutPaymentMethodsInputInput;
    id?: t.Number;
    transactionId?: t.Number;
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    products?: ProductUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
    taxes?: TaxUncheckedUpdateManyWithoutEndOfDayTransactionNestedInputInput;
};
export type OmitInput_19 = {
    id?: t.Number;
    AND?: PaymentMethodWhereInputInput[];
    OR?: PaymentMethodWhereInputInput[];
    NOT?: PaymentMethodWhereInputInput[];
    type?: EnumPaymentMethodTypeFilterInput;
    total?: t.Number;
};
export type OmitInput_8 = {
    id?: t.Number;
    bonCounter: t.Number;
    amount: t.Number;
    revenue: t.Number;
    totalRevenue: t.Number;
    products?: ProductUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
    taxes?: TaxUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutEndOfDayTransactionInputInput;
};
export type OmitInput_9 = {
    id?: t.Number;
    AND?: EndOfDayTransactionWhereInputInput[];
    OR?: EndOfDayTransactionWhereInputInput[];
    NOT?: EndOfDayTransactionWhereInputInput[];
    bonCounter?: t.Number;
    amount?: t.Number;
    revenue?: t.Number;
    totalRevenue?: t.Number;
    products?: ProductListRelationFilterInput;
    taxes?: TaxListRelationFilterInput;
    paymentMethods?: PaymentMethodListRelationFilterInput;
};
export type OmitInput_10 = {
    name: t.String;
    type: RegisterTypeInput;
    physicalId: t.Number;
    userId?: t.String;
    transactions?: TransactionUncheckedCreateNestedManyWithoutRegisterInputInput;
    user?: UserCreateNestedOneWithoutRegistersInputInput;
};
export type TransactionUncheckedCreateNestedManyWithoutRegisterInputInput = {
    create?: ObjectAndTransactionUncheckedCreateWithoutRegisterInputInput;
    connectOrCreate?: TransactionCreateOrConnectWithoutRegisterInputInput[];
    createMany?: TransactionCreateManyRegisterInputEnvelopeInput;
    connect?: WhereInput_9AndWhereInput_8;
};
export type ObjectAndTransactionUncheckedCreateWithoutRegisterInputInput = {
    id?: t.Number;
    timestamp: t.String;
    raw: t.String;
    bonId: t.Number;
    type: TransactionTypeInput;
    endOfDayTransaction?: EndOfDayTransactionUncheckedCreateNestedOneWithoutTransactionInputInput;
};
export type TransactionCreateOrConnectWithoutRegisterInputInput = {
    where: WhereInput_7AndWhereInput_8;
    create: ObjectAndTransactionUncheckedCreateWithoutRegisterInputInput;
};
export type TransactionCreateManyRegisterInputEnvelopeInput = {
    data?: TransactionCreateManyRegisterInputInput[];
    skipDuplicates?: t.Boolean;
};
export type TransactionCreateManyRegisterInputInput = {
    id?: t.Number;
    timestamp: t.String;
    raw: t.String;
    bonId: t.Number;
    type: TransactionTypeInput;
};
export type WhereInput_9AndWhereInput_8 = {
    id?: t.Number;
    raw_registerId_timestamp?: TransactionRawRegisterIdTimestampCompoundUniqueInputInput;
    AND?: TransactionWhereInputInput[];
    OR?: TransactionWhereInputInput[];
    NOT?: TransactionWhereInputInput[];
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: EnumTransactionTypeFilterInput;
    registerId?: t.Number;
    endOfDayTransaction?: WithoutInput_16AndEndOfDayTransactionWhereInputInput;
    register?: WithoutInput_18AndRegisterWhereInputInput;
};
export type WithoutInputAndRegisterUncheckedUpdateInputInput = {
    user?: UserUpdateOneRequiredWithoutRegistersNestedInputInput;
    id?: t.Number;
    type?: t.String;
    physicalId?: t.Number;
    name?: t.String;
    userId?: t.String;
    transactions?: TransactionUncheckedUpdateManyWithoutRegisterNestedInputInput;
};
export type TransactionUncheckedUpdateManyWithoutRegisterNestedInputInput = {
    create?: ObjectAndTransactionUncheckedCreateWithoutRegisterInputInput;
    connectOrCreate?: TransactionCreateOrConnectWithoutRegisterInputInput[];
    upsert?: TransactionUpsertWithWhereUniqueWithoutRegisterInputInput[];
    createMany?: TransactionCreateManyRegisterInputEnvelopeInput;
    set?: WhereInput_9AndWhereInput_8;
    disconnect?: WhereInput_9AndWhereInput_8;
    delete?: WhereInput_9AndWhereInput_8;
    connect?: WhereInput_9AndWhereInput_8;
    update?: TransactionUpdateWithWhereUniqueWithoutRegisterInputInput[];
    updateMany?: TransactionUpdateManyWithWhereWithoutRegisterInputInput[];
    deleteMany?: TransactionScalarWhereInputInput[];
};
export type TransactionUpsertWithWhereUniqueWithoutRegisterInputInput = {
    where: WhereInput_7AndWhereInput_8;
    update: ObjectAndTransactionUncheckedUpdateWithoutRegisterInputInput;
    create: ObjectAndTransactionUncheckedCreateWithoutRegisterInputInput;
};
export type ObjectAndTransactionUncheckedUpdateWithoutRegisterInputInput = {
    id?: t.Number;
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: t.String;
    endOfDayTransaction?: EndOfDayTransactionUncheckedUpdateOneWithoutTransactionNestedInputInput;
};
export type TransactionUpdateWithWhereUniqueWithoutRegisterInputInput = {
    where: WhereInput_7AndWhereInput_8;
    data: ObjectAndTransactionUncheckedUpdateWithoutRegisterInputInput;
};
export type TransactionUpdateManyWithWhereWithoutRegisterInputInput = {
    where: TransactionScalarWhereInputInput;
    data: ObjectAndTransactionUncheckedUpdateManyWithoutRegisterInputInput;
};
export type TransactionScalarWhereInputInput = {
    AND?: TransactionScalarWhereInputInput[];
    OR?: TransactionScalarWhereInputInput[];
    NOT?: TransactionScalarWhereInputInput[];
    id?: t.Number;
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: EnumTransactionTypeFilterInput;
    registerId?: t.Number;
};
export type ObjectAndTransactionUncheckedUpdateManyWithoutRegisterInputInput = {
    id?: t.Number;
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: t.String;
};
export type OmitInput_11 = {
    name?: t.String;
    AND?: RegisterWhereInputInput[];
    OR?: RegisterWhereInputInput[];
    NOT?: RegisterWhereInputInput[];
    type?: EnumRegisterTypeFilterInput;
    physicalId?: t.Number;
    userId?: t.String;
    transactions?: TransactionListRelationFilterInput;
    user?: WithoutInput_14AndUserWhereInputInput;
};
export type OmitInput_4 = {
    id?: t.Number;
    timestamp: t.String;
    raw: t.String;
    bonId: t.Number;
    type: TransactionTypeInput;
    endOfDayTransaction?: EndOfDayTransactionUncheckedCreateNestedOneWithoutTransactionInputInput;
};
export type OmitInput_5 = {
    id?: t.Number;
    AND?: TransactionWhereInputInput[];
    OR?: TransactionWhereInputInput[];
    NOT?: TransactionWhereInputInput[];
    timestamp?: t.String;
    raw?: t.String;
    bonId?: t.Number;
    type?: EnumTransactionTypeFilterInput;
    endOfDayTransaction?: WithoutInput_16AndEndOfDayTransactionWhereInputInput;
    raw_registerId_timestamp?: TransactionRawRegisterIdTimestampCompoundUniqueInputInput;
};
export type OmitInput_6 = {
    organizationId?: t.String;
    registers?: RegisterUncheckedCreateNestedManyWithoutUserInputInput;
    organization?: OrganizationCreateNestedOneWithoutUsersInputInput;
};
export type RegisterUncheckedCreateNestedManyWithoutUserInputInput = {
    create?: ObjectAndRegisterUncheckedCreateWithoutUserInputInput;
    connectOrCreate?: RegisterCreateOrConnectWithoutUserInputInput[];
    createMany?: RegisterCreateManyUserInputEnvelopeInput;
    connect?: WhereInput_2AndWhereInput_1;
};
export type ObjectAndRegisterUncheckedCreateWithoutUserInputInput = {
    id?: t.Number;
    type: RegisterTypeInput;
    physicalId: t.Number;
    name: t.String;
    transactions?: TransactionUncheckedCreateNestedManyWithoutRegisterInputInput;
};
export type RegisterCreateOrConnectWithoutUserInputInput = {
    where: WhereInputAndWhereInput_1;
    create: ObjectAndRegisterUncheckedCreateWithoutUserInputInput;
};
export type RegisterCreateManyUserInputEnvelopeInput = {
    data?: RegisterCreateManyUserInputInput[];
    skipDuplicates?: t.Boolean;
};
export type RegisterCreateManyUserInputInput = {
    id?: t.Number;
    type: RegisterTypeInput;
    physicalId: t.Number;
    name: t.String;
};
export type WhereInput_2AndWhereInput_1 = {
    id?: t.Number;
    AND?: RegisterWhereInputInput[];
    OR?: RegisterWhereInputInput[];
    NOT?: RegisterWhereInputInput[];
    type?: EnumRegisterTypeFilterInput;
    physicalId?: t.Number;
    name?: t.String;
    userId?: t.String;
    transactions?: TransactionListRelationFilterInput;
    user?: WithoutInput_14AndUserWhereInputInput;
};
export type WithoutInput_4AndUserUncheckedUpdateInputInput = {
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInputInput;
    id?: t.String;
    organizationId?: t.String;
    registers?: RegisterUncheckedUpdateManyWithoutUserNestedInputInput;
};
export type RegisterUncheckedUpdateManyWithoutUserNestedInputInput = {
    create?: ObjectAndRegisterUncheckedCreateWithoutUserInputInput;
    connectOrCreate?: RegisterCreateOrConnectWithoutUserInputInput[];
    upsert?: RegisterUpsertWithWhereUniqueWithoutUserInputInput[];
    createMany?: RegisterCreateManyUserInputEnvelopeInput;
    set?: WhereInput_2AndWhereInput_1;
    disconnect?: WhereInput_2AndWhereInput_1;
    delete?: WhereInput_2AndWhereInput_1;
    connect?: WhereInput_2AndWhereInput_1;
    update?: RegisterUpdateWithWhereUniqueWithoutUserInputInput[];
    updateMany?: RegisterUpdateManyWithWhereWithoutUserInputInput[];
    deleteMany?: RegisterScalarWhereInputInput[];
};
export type RegisterUpsertWithWhereUniqueWithoutUserInputInput = {
    where: WhereInputAndWhereInput_1;
    update: ObjectAndRegisterUncheckedUpdateWithoutUserInputInput;
    create: ObjectAndRegisterUncheckedCreateWithoutUserInputInput;
};
export type ObjectAndRegisterUncheckedUpdateWithoutUserInputInput = {
    id?: t.Number;
    type?: t.String;
    physicalId?: t.Number;
    name?: t.String;
    transactions?: TransactionUncheckedUpdateManyWithoutRegisterNestedInputInput;
};
export type RegisterUpdateWithWhereUniqueWithoutUserInputInput = {
    where: WhereInputAndWhereInput_1;
    data: ObjectAndRegisterUncheckedUpdateWithoutUserInputInput;
};
export type RegisterUpdateManyWithWhereWithoutUserInputInput = {
    where: RegisterScalarWhereInputInput;
    data: ObjectAndRegisterUncheckedUpdateManyWithoutUserInputInput;
};
export type RegisterScalarWhereInputInput = {
    AND?: RegisterScalarWhereInputInput[];
    OR?: RegisterScalarWhereInputInput[];
    NOT?: RegisterScalarWhereInputInput[];
    id?: t.Number;
    type?: EnumRegisterTypeFilterInput;
    physicalId?: t.Number;
    name?: t.String;
    userId?: t.String;
};
export type ObjectAndRegisterUncheckedUpdateManyWithoutUserInputInput = {
    id?: t.Number;
    type?: t.String;
    physicalId?: t.Number;
    name?: t.String;
};
export type OmitInput_7 = {
    AND?: UserWhereInputInput[];
    OR?: UserWhereInputInput[];
    NOT?: UserWhereInputInput[];
    organizationId?: t.String;
    registers?: RegisterListRelationFilterInput;
    organization?: WithoutInput_22AndOrganizationWhereInputInput;
};
export type OmitInput = {
    id?: t.Number;
    name: t.String;
    type: RegisterTypeInput;
    physicalId: t.Number;
    transactions?: TransactionUncheckedCreateNestedManyWithoutRegisterInputInput;
};
export type OmitInput_1 = {
    id?: t.Number;
    name?: t.String;
    AND?: RegisterWhereInputInput[];
    OR?: RegisterWhereInputInput[];
    NOT?: RegisterWhereInputInput[];
    type?: EnumRegisterTypeFilterInput;
    physicalId?: t.Number;
    transactions?: TransactionListRelationFilterInput;
};
export type OmitInput_22 = {
    id: t.String;
    registers?: RegisterUncheckedCreateNestedManyWithoutUserInputInput;
};
export type OmitInput_23 = {
    id?: t.String;
    AND?: UserWhereInputInput[];
    OR?: UserWhereInputInput[];
    NOT?: UserWhereInputInput[];
    registers?: RegisterListRelationFilterInput;
};
export type OmitInput_2 = {
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInputInput;
};
export type UserUncheckedCreateNestedManyWithoutOrganizationInputInput = {
    create?: ObjectAndUserUncheckedCreateWithoutOrganizationInputInput;
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInputInput[];
    createMany?: UserCreateManyOrganizationInputEnvelopeInput;
    connect?: WhereInput_13AndWhereInput_12;
};
export type ObjectAndUserUncheckedCreateWithoutOrganizationInputInput = {
    id: t.String;
    registers?: RegisterUncheckedCreateNestedManyWithoutUserInputInput;
};
export type UserCreateOrConnectWithoutOrganizationInputInput = {
    where: WhereInput_11AndWhereInput_12;
    create: ObjectAndUserUncheckedCreateWithoutOrganizationInputInput;
};
export type UserCreateManyOrganizationInputEnvelopeInput = {
    data?: UserCreateManyOrganizationInputInput[];
    skipDuplicates?: t.Boolean;
};
export type UserCreateManyOrganizationInputInput = {
    id: t.String;
};
export type WhereInput_13AndWhereInput_12 = {
    id?: t.String;
    AND?: UserWhereInputInput[];
    OR?: UserWhereInputInput[];
    NOT?: UserWhereInputInput[];
    organizationId?: t.String;
    registers?: RegisterListRelationFilterInput;
    organization?: WithoutInput_22AndOrganizationWhereInputInput;
};
export type ObjectAndOrganizationUncheckedUpdateInputInput = {
    id?: t.String;
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInputInput;
};
export type UserUncheckedUpdateManyWithoutOrganizationNestedInputInput = {
    create?: ObjectAndUserUncheckedCreateWithoutOrganizationInputInput;
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInputInput[];
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInputInput[];
    createMany?: UserCreateManyOrganizationInputEnvelopeInput;
    set?: WhereInput_13AndWhereInput_12;
    disconnect?: WhereInput_13AndWhereInput_12;
    delete?: WhereInput_13AndWhereInput_12;
    connect?: WhereInput_13AndWhereInput_12;
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInputInput[];
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInputInput[];
    deleteMany?: UserScalarWhereInputInput[];
};
export type UserUpsertWithWhereUniqueWithoutOrganizationInputInput = {
    where: WhereInput_11AndWhereInput_12;
    update: ObjectAndUserUncheckedUpdateWithoutOrganizationInputInput;
    create: ObjectAndUserUncheckedCreateWithoutOrganizationInputInput;
};
export type ObjectAndUserUncheckedUpdateWithoutOrganizationInputInput = {
    id?: t.String;
    registers?: RegisterUncheckedUpdateManyWithoutUserNestedInputInput;
};
export type UserUpdateWithWhereUniqueWithoutOrganizationInputInput = {
    where: WhereInput_11AndWhereInput_12;
    data: ObjectAndUserUncheckedUpdateWithoutOrganizationInputInput;
};
export type UserUpdateManyWithWhereWithoutOrganizationInputInput = {
    where: UserScalarWhereInputInput;
    data: ObjectAndUserUncheckedUpdateManyWithoutOrganizationInputInput;
};
export type UserScalarWhereInputInput = {
    AND?: UserScalarWhereInputInput[];
    OR?: UserScalarWhereInputInput[];
    NOT?: UserScalarWhereInputInput[];
    id?: t.String;
    organizationId?: t.String;
};
export type ObjectAndUserUncheckedUpdateManyWithoutOrganizationInputInput = {
    id?: t.String;
};
export type OmitInput_3 = {
    AND?: OrganizationWhereInputInput[];
    OR?: OrganizationWhereInputInput[];
    NOT?: OrganizationWhereInputInput[];
    users?: UserListRelationFilterInput;
};
export type TaxesInput = {
    type: TaxTypeInput;
    total: t.Number;
};
export type PaymentMethodsInput = {
    type: PaymentMethodTypeInput;
    total: t.Number;
};

export class Query {
    __typename: t.String;
    me: User;
    version: t.String;
    constructor() { this.__typename = ""; this.me = proxy(User); this.version = ""; }
}
export class User {
    __typename: t.String;
    id: t.String;
    registers: (args?: {
        pagination?: ConnectionArgumentsInput;
        where?: RegisterWhereInputInput;
        orderBy?: RegisterOrderByWithRelationInputInput[];
    }) => Connection;
    register: (args?: {
        where?: RegisterWhereInputInput;
    }) => Register;
    organization: (args?: {
        where?: OrganizationWhereInputInput;
        orderBy?: OrganizationOrderByWithRelationInputInput[];
    }) => Organization;
    constructor() { this.__typename = ""; this.id = ""; this.registers = fnProxy(Connection); this.register = fnProxy(Register); this.organization = fnProxy(Organization); }
}
export class Connection {
    __typename: t.String;
    nodes: Register[];
    edges: Edge[];
    pageInfo: PageInfo;
    totalCount: t.Number;
    constructor() { this.__typename = ""; this.nodes = arrayProxy(Register); this.edges = arrayProxy(Edge); this.pageInfo = proxy(PageInfo); this.totalCount = null; }
}
export class Register {
    __typename: t.String;
    totalNetRevenue: t.Number;
    transactions: (args?: {
        pagination?: ConnectionArgumentsInput;
        where?: TransactionWhereInputInputAndWhereInput_6;
        orderBy?: TransactionOrderByWithRelationInputInput[];
    }) => Connection_1;
    id: t.Number;
    type: t.Nullable<RegisterType>;
    physicalId: t.Number;
    name: t.String;
    transaction: (args?: {
        where?: TransactionWhereInputInput;
    }) => Transaction;
    user: (args?: {
        where?: UserWhereInputInput;
        orderBy?: UserOrderByWithRelationInputInput[];
    }) => User;
    constructor() { this.__typename = ""; this.totalNetRevenue = null; this.transactions = fnProxy(Connection_1); this.id = null; this.type = null; this.physicalId = null; this.name = ""; this.transaction = fnProxy(Transaction); this.user = fnProxy(User); }
}
export class Connection_1 {
    __typename: t.String;
    nodes: Transaction[];
    edges: Edge_1[];
    pageInfo: PageInfo;
    totalCount: t.Number;
    constructor() { this.__typename = ""; this.nodes = arrayProxy(Transaction); this.edges = arrayProxy(Edge_1); this.pageInfo = proxy(PageInfo); this.totalCount = null; }
}
export class Transaction {
    __typename: t.String;
    id: t.Number;
    timestamp: t.Date;
    raw: t.String;
    bonId: t.Number;
    type: t.Nullable<TransactionType>;
    endOfDayTransaction: (args?: {
        where?: EndOfDayTransactionWhereInputInput;
        orderBy?: EndOfDayTransactionOrderByWithRelationInputInput[];
    }) => t.Nullable<EndOfDayTransaction>;
    register: (args?: {
        where?: RegisterWhereInputInput;
        orderBy?: RegisterOrderByWithRelationInputInput[];
    }) => Register;
    constructor() { this.__typename = ""; this.id = null; this.timestamp = ""; this.raw = ""; this.bonId = null; this.type = null; this.endOfDayTransaction = fnProxy(EndOfDayTransaction); this.register = fnProxy(Register); }
}
export class EndOfDayTransaction {
    __typename: t.String;
    id: t.Number;
    transaction: (args?: {
        where?: TransactionWhereInputInput;
        orderBy?: TransactionOrderByWithRelationInputInput[];
    }) => Transaction;
    bonCounter: t.Number;
    amount: t.Number;
    revenue: t.Number;
    totalRevenue: t.Number;
    products: (args?: {
        pagination?: ConnectionArgumentsInput;
        where?: ProductWhereInputInput;
        orderBy?: ProductOrderByWithRelationInputInput[];
    }) => Connection_2;
    product: (args?: {
        where?: ProductWhereInputInput;
    }) => Product;
    taxes: (args?: {
        pagination?: ConnectionArgumentsInput;
        where?: TaxWhereInputInput;
        orderBy?: TaxOrderByWithRelationInputInput[];
    }) => Connection_3;
    taxe: (args?: {
        where?: TaxWhereInputInput;
    }) => Tax;
    paymentMethods: (args?: {
        pagination?: ConnectionArgumentsInput;
        where?: PaymentMethodWhereInputInput;
        orderBy?: PaymentMethodOrderByWithRelationInputInput[];
    }) => Connection_4;
    paymentMethod: (args?: {
        where?: PaymentMethodWhereInputInput;
    }) => PaymentMethod;
    constructor() { this.__typename = ""; this.id = null; this.transaction = fnProxy(Transaction); this.bonCounter = null; this.amount = null; this.revenue = null; this.totalRevenue = null; this.products = fnProxy(Connection_2); this.product = fnProxy(Product); this.taxes = fnProxy(Connection_3); this.taxe = fnProxy(Tax); this.paymentMethods = fnProxy(Connection_4); this.paymentMethod = fnProxy(PaymentMethod); }
}
export class Connection_2 {
    __typename: t.String;
    nodes: Product[];
    edges: Edge_2[];
    pageInfo: PageInfo;
    totalCount: t.Number;
    constructor() { this.__typename = ""; this.nodes = arrayProxy(Product); this.edges = arrayProxy(Edge_2); this.pageInfo = proxy(PageInfo); this.totalCount = null; }
}
export class Product {
    __typename: t.String;
    id: t.Number;
    endOfDayTransaction: (args?: {
        where?: EndOfDayTransactionWhereInputInput;
        orderBy?: EndOfDayTransactionOrderByWithRelationInputInput[];
    }) => EndOfDayTransaction;
    name: t.String;
    amount: t.Number;
    total: t.Number;
    constructor() { this.__typename = ""; this.id = null; this.endOfDayTransaction = fnProxy(EndOfDayTransaction); this.name = ""; this.amount = null; this.total = null; }
}
export class Edge_2 {
    __typename: t.String;
    cursor: t.String;
    node: Product;
    constructor() { this.__typename = ""; this.cursor = ""; this.node = proxy(Product); }
}
export class PageInfo {
    __typename: t.String;
    hasNextPage: t.Boolean;
    hasPreviousPage: t.Boolean;
    startCursor: t.Nullable<t.String>;
    endCursor: t.Nullable<t.String>;
    constructor() { this.__typename = ""; this.hasNextPage = false; this.hasPreviousPage = false; this.startCursor = null; this.endCursor = null; }
}
export class Connection_3 {
    __typename: t.String;
    nodes: Tax[];
    edges: Edge_3[];
    pageInfo: PageInfo;
    totalCount: t.Number;
    constructor() { this.__typename = ""; this.nodes = arrayProxy(Tax); this.edges = arrayProxy(Edge_3); this.pageInfo = proxy(PageInfo); this.totalCount = null; }
}
export class Tax {
    __typename: t.String;
    id: t.Number;
    endOfDayTransaction: (args?: {
        where?: EndOfDayTransactionWhereInputInput;
        orderBy?: EndOfDayTransactionOrderByWithRelationInputInput[];
    }) => EndOfDayTransaction;
    type: t.Nullable<TaxType>;
    total: t.Number;
    net: t.Number;
    tax: t.Number;
    constructor() { this.__typename = ""; this.id = null; this.endOfDayTransaction = fnProxy(EndOfDayTransaction); this.type = null; this.total = null; this.net = null; this.tax = null; }
}
export class Edge_3 {
    __typename: t.String;
    cursor: t.String;
    node: Tax;
    constructor() { this.__typename = ""; this.cursor = ""; this.node = proxy(Tax); }
}
export class Connection_4 {
    __typename: t.String;
    nodes: PaymentMethod[];
    edges: Edge_4[];
    pageInfo: PageInfo;
    totalCount: t.Number;
    constructor() { this.__typename = ""; this.nodes = arrayProxy(PaymentMethod); this.edges = arrayProxy(Edge_4); this.pageInfo = proxy(PageInfo); this.totalCount = null; }
}
export class PaymentMethod {
    __typename: t.String;
    id: t.Number;
    endOfDayTransaction: (args?: {
        where?: EndOfDayTransactionWhereInputInput;
        orderBy?: EndOfDayTransactionOrderByWithRelationInputInput[];
    }) => EndOfDayTransaction;
    type: t.Nullable<PaymentMethodType>;
    total: t.Number;
    constructor() { this.__typename = ""; this.id = null; this.endOfDayTransaction = fnProxy(EndOfDayTransaction); this.type = null; this.total = null; }
}
export class Edge_4 {
    __typename: t.String;
    cursor: t.String;
    node: PaymentMethod;
    constructor() { this.__typename = ""; this.cursor = ""; this.node = proxy(PaymentMethod); }
}
export class Edge_1 {
    __typename: t.String;
    cursor: t.String;
    node: Transaction;
    constructor() { this.__typename = ""; this.cursor = ""; this.node = proxy(Transaction); }
}
export class Edge {
    __typename: t.String;
    cursor: t.String;
    node: Register;
    constructor() { this.__typename = ""; this.cursor = ""; this.node = proxy(Register); }
}
export class Organization {
    __typename: t.String;
    id: t.String;
    users: (args?: {
        pagination?: ConnectionArgumentsInput;
        where?: UserWhereInputInput;
        orderBy?: UserOrderByWithRelationInputInput[];
    }) => Connection_5;
    user: (args?: {
        where?: UserWhereInputInput;
    }) => User;
    constructor() { this.__typename = ""; this.id = ""; this.users = fnProxy(Connection_5); this.user = fnProxy(User); }
}
export class Connection_5 {
    __typename: t.String;
    nodes: User[];
    edges: Edge_5[];
    pageInfo: PageInfo;
    totalCount: t.Number;
    constructor() { this.__typename = ""; this.nodes = arrayProxy(User); this.edges = arrayProxy(Edge_5); this.pageInfo = proxy(PageInfo); this.totalCount = null; }
}
export class Edge_5 {
    __typename: t.String;
    cursor: t.String;
    node: User;
    constructor() { this.__typename = ""; this.cursor = ""; this.node = proxy(User); }
}
export class Mutation {
    __typename: t.String;
    registerCreate: (args: {
        name: t.String;
        type: RegisterTypeInput;
    }) => Register;
    registerUpdate: (args: {
        id: t.Number;
        name: t.String;
    }) => Register;
    registerDelete: (args: {
        id: t.Number;
    }) => Register;
    addEndOfDayTransaction: (args: {
        registerId: t.Number;
        timestamp: t.Date;
        revenue: t.Number;
        taxes: TaxesInput[];
        paymentMethods: PaymentMethodsInput[];
    }) => Transaction;
    constructor() { this.__typename = ""; this.registerCreate = fnProxy(Register); this.registerUpdate = fnProxy(Register); this.registerDelete = fnProxy(Register); this.addEndOfDayTransaction = fnProxy(Transaction); }
}

