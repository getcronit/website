import * as React from "react";

import { PageConfig, PageProps } from "@atsnek/jaen";

import { ReloadIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  CalendarIcon,
  ChevronDown,
  MoreHorizontal,
  PlusIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sq } from "@/pylons/kassabuch";
import {
  PaymentMethodType,
  PaymentMethodTypeInput,
  RegisterType,
  Tax,
  TaxType,
  TaxTypeInput,
  Transaction,
} from "@/pylons/kassabuch/src/schema.generated";
import { Link } from "gatsby";
import { useLazyQuery } from "snek-query/react-hooks";
import { zodResolver } from "@hookform/resolvers/zod";

type TransactionType = {
  timestamp: string;
  taxes: {
    type: TaxType;
    total: number;
    net: number;
    tax: number;
  }[];
  products: {
    name: string;
    amount: number;
    total: number;
  }[];
  paymentMethods: {
    type: PaymentMethodType;
    total: number;
  }[];
  revenue: number;
};

function getMonthNameFromIndex(monthIndex: number): string {
  const date = new Date();
  date.setMonth(monthIndex);
  return date.toLocaleDateString(undefined, { month: "long" });
}

interface ManuelCreateTransactionButtonProps {
  registerId: number;
  onCreated: () => void;
}

const ManuelCreateTransactionSchema = z.object({
  timestamp: z.date(),
  taxes: z.array(
    z.object({
      type: z.nativeEnum(TaxTypeInput),
      total: z.number(),
    })
  ),
  paymentMethods: z.array(
    z.object({
      type: z.nativeEnum(PaymentMethodTypeInput),
      total: z.number(),
    })
  ),
  revenue: z.number(),
});

const ManuelCreateTransactionButton: React.FC<
  ManuelCreateTransactionButtonProps
> = ({ registerId, onCreated }) => {
  const [open, setOpen] = React.useState(false);

  const form = useForm<z.infer<typeof ManuelCreateTransactionSchema>>({
    resolver: zodResolver(ManuelCreateTransactionSchema),
    defaultValues: {
      timestamp: new Date(),
      taxes: [
        { type: TaxTypeInput.MWST_10, total: 0 },
        { type: TaxTypeInput.MWST_20, total: 0 },
      ],
      paymentMethods: [
        { type: PaymentMethodTypeInput.CASH, total: 0 },
        { type: PaymentMethodTypeInput.CARD, total: 0 },
      ],
    },
  });

  React.useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset();
      setOpen(false);
    }
  }, [form.formState.isSubmitSuccessful, form.reset]);

  async function onSubmit(data: z.infer<typeof ManuelCreateTransactionSchema>) {
    console.log(data);

    try {
      const [_, errors] = await sq.mutate((m) =>
        m.addEndOfDayTransaction({
          registerId: registerId,
          timestamp: data.timestamp.toISOString(),
          taxes: data.taxes.map((tax) => ({
            type: asEnumKey(TaxTypeInput, tax.type),
            total: tax.total,
          })),
          paymentMethods: data.paymentMethods.map((paymentMethod) => ({
            type: asEnumKey(PaymentMethodTypeInput, paymentMethod.type),
            total: paymentMethod.total,
          })),
          revenue: data.revenue,
        })
      );

      if (errors) {
        throw new Error(errors[0].message);
      }

      toast({
        title: "Transaction created",
        description: "Die Transaktion wurde erfolgreich erstellt.",
      });

      onCreated();
    } catch (error) {
      toast({
        title: "Transaction creation failed",
        description: error.message,
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Manuelle Eingabe
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Manuelle Eingabe</DialogHeader>
        <DialogDescription>
          Füge eine Transaktion manuell hinzu. Dies kann nicht rückgängig
          gemacht werden.
        </DialogDescription>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="timestamp"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Datum</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Wähle ein Datum</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Wähle das Datum der Transaktion.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="taxes.0"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Steuern 10%</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value?.total}
                      onChange={(event) =>
                        field.onChange({
                          type: TaxType.MWST_10,
                          total: parseFloat(event.target.value),
                        })
                      }
                    />
                  </FormControl>
                  <FormDescription>Füge die Steuern 10% hinzu.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="taxes.1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Steuern 20%</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value?.total}
                      onChange={(event) =>
                        field.onChange({
                          type: TaxType.MWST_20,
                          total: parseFloat(event.target.value),
                        })
                      }
                    />
                  </FormControl>
                  <FormDescription>Füge die Steuern 20% hinzu.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentMethods.0"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bar</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value?.total}
                      onChange={(event) =>
                        field.onChange({
                          type: PaymentMethodType.CASH,
                          total: parseFloat(event.target.value),
                        })
                      }
                    />
                  </FormControl>
                  <FormDescription>Füge Barzahlungen hinzu.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentMethods.1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Karte</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value?.total}
                      onChange={(event) =>
                        field.onChange({
                          type: PaymentMethodType.CARD,
                          total: parseFloat(event.target.value),
                        })
                      }
                    />
                  </FormControl>
                  <FormDescription>Füge Kartenzahlungen hinzu.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="revenue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Umsatz</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value}
                      onChange={(event) =>
                        field.onChange(parseFloat(event.target.value))
                      }
                    />
                  </FormControl>
                  <FormDescription>Füge den Umsatz hinzu.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                // disabled={
                //   form.formState.isSubmitting || !form.formState.isValid
                // }
              >
                <ReloadIcon
                  className={cn("mr-2 h-4 w-4 animate-spin", {
                    hidden: !form.formState.isSubmitting,
                  })}
                />
                Erstellen
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export const columns: ColumnDef<TransactionType>[] = [
  {
    accessorKey: "timestamp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Zeit
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const timestamp = new Date(row.getValue("timestamp"));
      const formattedDate = timestamp.toLocaleDateString("de-AT", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return <div className="capitalize">{formattedDate}</div>;
    },
  },
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }) => {
      const products = row.getValue("products") as TransactionType["products"];

      return (
        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <p>
              {products.map((product) => product.name).join(", ")}
              <span className="text-muted-foreground">
                {" "}
                ({products.length})
              </span>
            </p>
          </HoverCardTrigger>
          <HoverCardContent className="w-[500px]">
            <Table>
              <TableCaption>Umsatz aus Produkten</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableCell>Produkt</TableCell>
                  <TableCell>Menge</TableCell>
                  <TableCell>Umsatz</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.name}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.amount}</TableCell>
                    <TableCell>
                      {(product.total || 0).toLocaleString("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </HoverCardContent>
        </HoverCard>
      );

      return (
        <div>
          {products.map((product) => (
            <div key={product.name} className="flex justify-between">
              <div>{product.name}</div>
              <div>{product.amount}</div>
              <div>{product.total}</div>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
    cell: ({ row }) => {
      const revenue = row.getValue<number>("revenue") || 0;

      return (
        <p>
          {revenue.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR",
          })}
        </p>
      );
    },
  },
  {
    accessorKey: "taxes",
    header: "Taxes",
    cell: ({ row }) => {
      const taxes = row.getValue("taxes") as TransactionType["taxes"];

      return (
        <HoverCard>
          <HoverCardTrigger>
            {taxes.map((tax) => (
              <div key={tax.type} className="flex">
                <p>
                  <span className="mr-2">
                    {tax.type === TaxType.MWST_10
                      ? "10%"
                      : TaxType.MWST_20
                      ? "20%"
                      : "UNKOWN"}
                    :
                  </span>

                  {(tax.total || 0).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </p>
              </div>
            ))}
          </HoverCardTrigger>
          <HoverCardContent className="w-[500px]">
            <Table>
              <TableCaption>Umsatz aus Steuern</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableCell>Steuersatz</TableCell>
                  <TableCell>Netto</TableCell>
                  <TableCell>Steuer</TableCell>
                  <TableCell>Brutto</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {taxes.map((tax) => (
                  <TableRow key={tax.type}>
                    <TableCell>
                      {tax.type === TaxType.MWST_10
                        ? "10%"
                        : TaxType.MWST_20
                        ? "20%"
                        : "UNKOWN"}
                    </TableCell>
                    <TableCell>
                      {(tax.net || 0).toLocaleString("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </TableCell>
                    <TableCell>
                      {(tax.tax || 0).toLocaleString("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </TableCell>
                    <TableCell>
                      {(tax.total || 0).toLocaleString("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </HoverCardContent>
        </HoverCard>
      );
    },
  },
  {
    accessorKey: "paymentMethods",
    header: "Payment Methods",
    cell: ({ row }) => {
      const paymentMethods = row.getValue(
        "paymentMethods"
      ) as TransactionType["paymentMethods"];

      return (
        <div>
          {paymentMethods.map((paymentMethod) => (
            <div key={paymentMethod.type} className="flex">
              <p>
                <span className="mr-2">{paymentMethod.type}:</span>
                {(paymentMethod.total || 0).toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </p>
            </div>
          ))}
        </div>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const DataTableDemo: React.FC<{ registerId: number }> = (props) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [_, { data, refetch }] = useLazyQuery(sq);

  const [year, setYear] = React.useState<number | null>(null);
  const [month, setMonth] = React.useState<number | null>(null);

  React.useEffect(() => {
    // Set to current year and month

    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth());
  }, []);

  React.useEffect(() => {
    if (!props.registerId) return;

    refetch();
  }, [props.registerId, year, month]);

  const transactions = React.useMemo(() => {
    const nodes = data.me
      .register({ where: { id: props.registerId } })
      .transactions({
        where: {
          endOfDayTransaction: { is: {} },
          timestamp:
            year && month
              ? {
                  gte: new Date(year, month, 1).toISOString(),
                  lte: new Date(year, month + 1, 0).toISOString(),
                }
              : {},
        },
      }).nodes;

    return nodes.map((transaction: Transaction) => {
      const taxes = transaction
        .endOfDayTransaction()!
        .taxes()
        .nodes.map((tax: Tax) => ({
          type: tax.type,
          total: tax.total,
          net: tax.net,
          tax: tax.tax,
        }));

      const products = transaction
        .endOfDayTransaction()!
        .products()
        .nodes.map((product) => ({
          name: product.name,
          amount: product.amount,
          total: product.total,
        }));

      const paymentMethods = transaction
        .endOfDayTransaction()!
        .paymentMethods()
        .nodes.map((paymentMethod) => ({
          type: paymentMethod.type,
          total: paymentMethod.total,
        }));

      return {
        timestamp: transaction.timestamp,
        taxes,
        products,
        paymentMethods,
        revenue: transaction.endOfDayTransaction()!.revenue,
      };
    });
  }, [data, year, month]);

  const table = useReactTable({
    data: transactions,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        {/* <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        /> */}

        <div className="flex space-x-2">
          <Select
            value={year ? year.toString() : undefined}
            onValueChange={(value) => setYear(parseInt(value))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Wähle ein Jahr" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Jahre</SelectLabel>
                {
                  // Current year and the last 10 years
                  Array.from({ length: 11 }, (_, i) => {
                    const year = new Date().getFullYear() - i;

                    return (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    );
                  })
                }
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            value={month ? month.toString() : undefined}
            onValueChange={(value) => setMonth(parseInt(value))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Wähle ein Monat" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Monate</SelectLabel>
                {
                  // All months
                  Array.from({ length: 12 }, (_, i) => {
                    const month = getMonthNameFromIndex(i);

                    return (
                      <SelectItem key={month} value={i.toString()}>
                        {month}
                      </SelectItem>
                    );
                  })
                }
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { pylonURL } from "@/pylons/kassabuch/src";
import { User } from "oidc-client-ts";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { asEnumKey } from "snek-query";

const JournalUploadButton: React.FC<{
  onUpload: () => void;
  registerId: number;
}> = ({ onUpload, registerId }) => {
  const [isUploading, setIsUploading] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const oidcStorage = sessionStorage.getItem(
      `oidc.user:${__JAEN_ZITADEL__.authority}:${__JAEN_ZITADEL__.clientId}`
    );

    if (oidcStorage) {
      const user = User.fromStorageString(oidcStorage);

      setIsUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(`${pylonURL}/register/${registerId}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
        body: formData,
      });

      setIsUploading(false);

      if (res.ok) {
        toast({
          title: "Journal uploaded",
          description: "Das Journal wurde erfolgreich hochgeladen.",
        });

        onUpload();
      } else {
        toast({
          title: "Journal upload failed",
          description: "Das Journal konnte nicht hochgeladen werden.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <label className="flex items-center space-x-2">
      <input
        ref={inputRef}
        type="file"
        accept=".zip"
        onChange={handleFileChange}
        className="hidden"
      />
      <Button
        disabled={isUploading}
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <ReloadIcon
          className={cn("h-4 w-4 mr-2 animate-spin", {
            hidden: !isUploading,
          })}
        />
        Upload Journal
      </Button>
    </label>
  );
};

const Page: React.FC<PageProps> = (props) => {
  const registerId = parseInt(props.params.registerId);

  const [_, { data, errors, refetch }] = useLazyQuery(sq);

  const { name: registerName, type: registerType } = data.me.register({
    where: { id: registerId },
  });

  React.useEffect(() => {
    refetch();
  }, [registerId]);

  if (errors) {
    console.error(errors);

    return <div>Something went wrong.</div>;
  }

  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/kassabuch">Kassabuch</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{registerName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-semibold">{registerName}</h1>

        {registerType === RegisterType.MANUEL ? (
          <ManuelCreateTransactionButton
            registerId={registerId}
            onCreated={refetch}
          />
        ) : (
          <JournalUploadButton onUpload={refetch} registerId={registerId} />
        )}
      </div>

      <DataTableDemo key={registerName} registerId={registerId} />
    </div>
  );
};

export default Page;

export { Head } from "@atsnek/jaen";

export const pageConfig: PageConfig = {
  label: "Kassabuch",
  layout: {
    name: "jaen",
  },
};
