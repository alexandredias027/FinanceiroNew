import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionsColumns } from "./_coluns";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div>
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Button className="rounded-full">
          <ArrowDownUpIcon />
          Adicionar transações
        </Button>
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
