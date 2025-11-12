import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

// Chart container component
export const Chart = ({ children, className, ...props }) => (
  <div className={`w-full h-full ${className}`} {...props}>
    {children}
  </div>
)

// Chart tooltip component
export const ChartTooltip = ({ className, ...props }) => (
  <Tooltip
    contentStyle={{
      backgroundColor: "hsl(var(--background))",
      borderColor: "hsl(var(--border))",
      borderRadius: "var(--radius)",
    }}
    {...props}
  />
)

// Chart legend component
export const ChartLegend = ({ className, ...props }) => <Legend verticalAlign="top" height={40} {...props} />

// Line chart component
export const LineChartComponent = ({ data, xKey, yKeys, colors, className, ...props }) => (
  <ResponsiveContainer width="100%" height={350}>
    <LineChart data={data} {...props}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <ChartTooltip />
      <ChartLegend />
      {yKeys.map((key, index) => (
        <Line key={key} type="monotone" dataKey={key} stroke={colors[index % colors.length]} activeDot={{ r: 8 }} />
      ))}
    </LineChart>
  </ResponsiveContainer>
)

// Bar chart component
export const BarChartComponent = ({ data, xKey, yKeys, colors, className, ...props }) => (
  <ResponsiveContainer width="100%" height={350}>
    <ComposedChart data={data} {...props}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <ChartTooltip />
      <ChartLegend />
      {yKeys.map((key, index) => (
        <Bar key={key} dataKey={key} fill={colors[index % colors.length]} barSize={20} />
      ))}
    </ComposedChart>
  </ResponsiveContainer>
)

// Area chart component
export const AreaChartComponent = ({ data, xKey, yKeys, colors, className, ...props }) => (
  <ResponsiveContainer width="100%" height={350}>
    <ComposedChart data={data} {...props}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <ChartTooltip />
      <ChartLegend />
      {yKeys.map((key, index) => (
        <Area
          key={key}
          type="monotone"
          dataKey={key}
          fill={colors[index % colors.length]}
          stroke={colors[index % colors.length]}
        />
      ))}
    </ComposedChart>
  </ResponsiveContainer>
)

