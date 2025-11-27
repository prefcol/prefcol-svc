import { Card } from "../components/ui/Card";

const ScheduleCard = ({ title, instructor, time }) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow bg-emerald-50">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground mb-2">{instructor}</p>
      <p className="text-sm font-medium">{time}</p>
    </Card>
  );
};

export default ScheduleCard;
