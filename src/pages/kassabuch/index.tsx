import * as React from "react";

import { PageConfig, PageProps } from "@atsnek/jaen";

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
  CalendarIcon,
  ChevronDown,
  MoreHorizontal,
  PlusIcon,
} from "lucide-react";
import { useLazyQuery, useQuery } from "snek-query/react-hooks";

import "chartjs-adapter-date-fns"; // Import Date-fns adapter for Chart.js
import { Line } from "react-chartjs-2";

import {
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
} from "chart.js";

import { ReloadIcon } from "@radix-ui/react-icons";

Chart.register(
  LineElement,
  LineController,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale
);

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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { sq } from "@/pylons/kassabuch";
import {
  RegisterType,
  RegisterTypeInput,
  SortOrderInput,
} from "@/pylons/kassabuch/src/schema.generated";
import { Chart } from "chart.js";
import { addDays, format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import { asEnumKey } from "snek-query";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Link } from "gatsby";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCashRegister } from "@react-icons/all-files/fa/FaCashRegister";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { User } from "oidc-client-ts";
import { pylonURL } from "@/pylons/kassabuch/src";

const getColorForId = (id: number) => {
  const hue = (id * 137.508) % 360; // Generate hue based on the id
  return `hsl(${hue}, 70%, 50%)`; // Convert hue to RGB color
};

const Graph = () => {
  const [_, { data, refetch }] = useLazyQuery(sq);

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 1),
    to: new Date(),
  });

  React.useEffect(() => {
    refetch();
  }, [date]);

  const graphData = React.useMemo(() => {
    const registers = data.me.registers().nodes;

    return registers.map((register) => {
      const transactions = register.transactions({
        where: {
          endOfDayTransaction: { is: {} },
          timestamp: date
            ? {
                gte: date.from?.toISOString(),
                lte: date.to?.toISOString(),
              }
            : {},
        },
        orderBy: [{ timestamp: asEnumKey(SortOrderInput, "asc") }],
      }).nodes;

      return {
        label: register.name, // Assign a label for the register
        data: transactions.map((transaction) => ({
          x: new Date(transaction.timestamp),
          y: transaction.endOfDayTransaction()!.revenue,
        })),
        borderColor: getColorForId(register.id), // Assign a color based on the register id
        tension: 0.1,
        fill: true,
      };
    });
  }, [data, date]);

  const chartData = {
    datasets: graphData,
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between">
        <h2 className="text-xl font-semibold">Umsatzentwicklung nach Kassen</h2>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="flex w-auto flex-col space-y-2 p-2"
            align="start"
          >
            <Select
              onValueChange={(value) => {
                if (value === "0") {
                  //  Current week

                  setDate({
                    from: new Date(
                      new Date().getFullYear(),
                      new Date().getMonth(),
                      new Date().getDate() -
                        new Date().getDay() +
                        (new Date().getDay() === 0 ? -6 : 1)
                    ),
                    to: new Date(),
                  });
                } else if (value === "1") {
                  // Current month
                  setDate({
                    from: new Date(
                      new Date().getFullYear(),
                      new Date().getMonth(),
                      1
                    ),
                    to: new Date(),
                  });
                } else {
                  // First possible date that the Date object can represent
                  setDate(undefined);
                }
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="0">Diese Woche</SelectItem>
                <SelectItem value="1">Diesen Monat</SelectItem>
                <SelectItem value="2">Gesamt</SelectItem>
              </SelectContent>
            </Select>

            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={(date) => {
                // set date + 1 day to include the selected date
                setDate({
                  from: date?.from,
                  to: date?.to ? addDays(date.to, 1) : undefined,
                });
              }}
              numberOfMonths={2}
            />

            <Button
              variant="destructive"
              onClick={() =>
                setDate({
                  from: new Date(new Date().getFullYear(), 0, 1),
                  to: new Date(),
                })
              }
            >
              Zurücksetzen
            </Button>
          </PopoverContent>
        </Popover>
      </div>

      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
                tooltipFormat: "mmmm dd, yyyy", // Optional: format for tooltip
              },
            },
            y: {
              title: {
                display: true,
                text: "Umsatz (€)",
              },
            },
          },
        }}
      />
    </div>
  );
};

type RegisterType = {
  id: number;
  type: RegisterType;
  name: string;
  totalNetRevenue: string;
};

export const columns: ColumnDef<RegisterType>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type");

      return (
        <div>
          {type === RegisterType.SHARP && "Sharp"}
          {type === RegisterType.QMP_18 && "Casio QMP-18"}
          {type === RegisterType.MANUEL && "Manuelle Kassa"}
        </div>
      );
    },
  },
  {
    accessorKey: "totalNetRevenue",
    header: () => <div>Net Revenue</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalNetRevenue"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("de-AT", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    meta: {
      style: {
        textAlign: "end",
      },
    },
    cell: ({ row, onDelete }) => {
      const register = row.original;

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

            <DropdownMenuItem asChild>
              <Link to={`/kassabuch/${register.id}`}>Öffnen</Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={async () => {
                const oidcStorage = sessionStorage.getItem(
                  `oidc.user:${__JAEN_ZITADEL__.authority}:${__JAEN_ZITADEL__.clientId}`
                );

                if (oidcStorage) {
                  const user = User.fromStorageString(oidcStorage);

                  const res = await fetch(
                    `${pylonURL}/register/${register.id}/export`,
                    {
                      headers: {
                        Authorization: `Bearer ${user.access_token}`,
                      },
                    }
                  );

                  let fileName = res.headers
                    .get("Content-Disposition")
                    ?.split("filename=")[1];

                  // Cut off the quotes
                  fileName = fileName?.substring(1, fileName.length - 1);

                  // This returns a csv file that should be downloaded
                  const blob = await res.blob();

                  const url = window.URL.createObjectURL(blob);

                  const a = document.createElement("a");
                  a.href = url;
                  a.download = fileName || `register-${register.id}.csv`;
                  a.click();

                  window.URL.revokeObjectURL(url);

                  toast({
                    title: "Success",
                    description: "Erfolgreich exportiert.",
                  });
                }
              }}
            >
              Exportieren als CSV
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <AlertDialog>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <AlertDialogTrigger className="text-red-500 w-full text-left">
                  Löschen
                </AlertDialogTrigger>
              </DropdownMenuItem>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Bist du dir sicher?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Diese Aktion kann nicht rückgängig gemacht werden. Die Daten
                    werden unwiderruflich gelöscht.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                  <AlertDialogAction
                    variant="destructive"
                    onClick={async () => {
                      await sq.mutate((m) =>
                        m.registerDelete({ id: register.id })
                      );

                      onDelete();
                    }}
                  >
                    Löschen
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const RegisterCreateSchema = z.object({
  name: z.string(),
  type: z.nativeEnum(RegisterType),
});

const RegisterCreateButton: React.FC<{
  onCreate?: () => void;
}> = (props) => {
  const [open, setOpen] = React.useState(false);

  const form = useForm<z.infer<typeof RegisterCreateSchema>>({
    resolver: zodResolver(RegisterCreateSchema),
  });

  React.useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset();
      setOpen(false);
    }
  }, [form.formState.isSubmitSuccessful, form.reset]);

  async function onSubmit(data: z.infer<typeof RegisterCreateSchema>) {
    console.log(data);

    try {
      const [_, errors] = await sq.mutate((m) =>
        m.registerCreate({
          name: data.name,
          type: asEnumKey(RegisterTypeInput, data.type),
        })
      );

      if (errors) {
        throw new Error(errors[0].message);
      }

      toast({
        title: "Success",
        description: "Kassa wurde erfolgreich erstellt.",
      });

      props.onCreate?.();
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: error.message,
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Erstellen
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Kassa erstellen</DialogTitle>
          {/* <DialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </DialogDescription> */}
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="type"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Kassatyp</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={RegisterType.SHARP} />
                        </FormControl>
                        <FormLabel className="font-normal">Sharp</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={RegisterType.QMP_18} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Casio QMP-18
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={RegisterType.MANUEL} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Manuelle Kassa
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                disabled={
                  form.formState.isSubmitting || !form.formState.isValid
                }
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

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const { data, refetch } = useQuery(sq);

  const tabelData = React.useMemo(() => {
    return data.me.registers().nodes.map((register) => ({
      id: register.id,
      type: register.type,
      name: register.name,
      totalNetRevenue: register.totalNetRevenue,
    }));
  }, [data]);

  const table = useReactTable({
    data: tabelData,
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
      <div className="flex items-center py-4 justify-end">
        <RegisterCreateButton onCreate={refetch} />
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
                    <TableCell
                      key={cell.id}
                      style={cell.column.columnDef.meta?.style}
                    >
                      {cell.column.id !== "actions" ? (
                        <Link to={`/kassabuch/${row.original.id}`}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Link>
                      ) : (
                        flexRender(cell.column.columnDef.cell, {
                          ...cell.getContext(),
                          onDelete: () => {
                            refetch();
                          },
                        })
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
}

const Page: React.FC<PageProps> = () => {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Kassabuch</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DataTableDemo />

      <Graph />
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
