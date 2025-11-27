import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

const attendanceData = [
  { date: "05.11.2025", checkIn: "09:02 AM", checkOut: "06:00 PM", duration: "07.58 Hours", status: "Present" },
  { date: "04.11.2025", checkIn: "09:02 AM", checkOut: "06:00 PM", duration: "08.00 Hours", status: "Present" },
  { date: "03.11.2025", checkIn: "09:02 AM", checkOut: "06:00 PM", duration: "08.00 Hours", status: "Present" },
  { date: "02.11.2025", checkIn: "09:02 AM", checkOut: "06:00 PM", duration: "08.00 Hours", status: "Absent" },
  { date: "01.11.2025", checkIn: "09:02 AM", checkOut: "06:00 PM", duration: "08.00 Hours", status: "Present" },
  { date: "31.10.2025", checkIn: "09:02 AM", checkOut: "06:00 PM", duration: "08.00 Hours", status: "Present" },
];

const AttendanceTable = () => {
  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      <Table>
        <TableHeader className="bg-teal-50">
          <TableRow className="bg-muted/50">
            <TableHead>Date</TableHead>
            <TableHead>Check-In Time</TableHead>
            <TableHead>Check-Out Time</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendanceData.map((record, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{record.date}</TableCell>
              <TableCell>{record.checkIn}</TableCell>
              <TableCell>{record.checkOut}</TableCell>
              <TableCell>{record.duration}</TableCell>
              <TableCell>
                <span
                  className={`inline-block px-2 py-1 rounded text-sm font-medium ${
                    record.status === "Present"
                      ? "text-present-foreground bg-green-200"
                      : "text-absent-foreground bg-red-200"
                  }`}
                >
                  {record.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AttendanceTable;
