"use client";

import { Transaction } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: Decimal;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

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
  },

  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
  },

  {
    accessorKey: "date",
    header: "Data",
  },

  {
    accessorKey: "amount",
    header: "Valor",
  },

  {
    accessorKey: "actions",
    header: "",
  },
];
