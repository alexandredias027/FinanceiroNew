"use client";

import { Transaction } from "@prisma/client";
//import { Decimal } from "@prisma/client/runtime/library";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/app/_constantes/transactions";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string;
//   amount: Decimal;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

// export const TRANSACTION_CATEGORY_LABELS = {
//   EDUCATION: "Educação",
//   ENTERTAINMENT: "Entretenimento",
//   FOOD: "Alimentação",
//   HOUSING: "Moradia",
//   HEALTH: "Saúde",
//   INVESTMENT: "Investimento",
//   OUTHER: "Outros",
//   SALARY: "Salário",
//   TRANSPORTATION: "Transporte",
//   UTILITY: "Utilidades",
// };

// export const TRANSACTION_PAYMENT_METHOD_LABELS = {
//   CREDIT_CARD: "Cartão de Crédito",
//   DEBIT_CARD: "Cartão de Débito",
//   BANK_TRANSFER: "Transferência Bancária",
//   BANK_SLIP: "Boleto Bancário",
//   CASH: "Dinheiro",
//   PIX: "PIX",
//   OTHER: "Outros",
// };

export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },

  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },

  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },

  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },

  {
    accessorKey: "actions",
    header: "Ações",
    cell: () => {
      return (
        <div className="space-x-1">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <PencilIcon />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
