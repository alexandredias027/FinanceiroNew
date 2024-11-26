"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Status",
  },
  {
    accessorKey: "type",
    header: "Tipo",
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
  },
];
