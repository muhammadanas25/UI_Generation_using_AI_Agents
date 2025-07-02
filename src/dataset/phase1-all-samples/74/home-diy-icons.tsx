import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const DIYIcon = ({ d, label }: { d: string; label: string }) => (
  <div className="flex flex-col items-center">
    <svg
      className="w-12 h-12 sm:w-16 sm:h-16 mb-2"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
    <span className="text-xs sm:text-sm font-medium text-center">{label}</span>
  </div>
)

export default function HomeDIYIcons() {
  const icons = [
    { d: "M3 3h18v18H3zM21 9H3m0 8h18m-9-8v8", label: "Furniture" },
    { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", label: "Decor" },
    { d: "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM3 7h18M3 11h18", label: "Painting" },
    { d: "M12 19c0-5 8-5 8-10a4 4 0 00-8-0 4 4 0 00-8 0c0 5 8 5 8 10z", label: "Gardening" },
    { d: "M15 14l-3-3 3-3m-6 0l3 3-3 3m3-6v12", label: "Lighting" },
    { d: "M3 3h18v18H3zM9 3v18m6-18v18", label: "Storage" },
    { d: "M3 3h18v18H3zm0 6h18M3 15h18", label: "Flooring" },
  ]

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-xl sm:text-2xl text-center sm:text-left">HomeDIY Icon Set</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {icons.map((icon, index) => (
            <DIYIcon key={index} d={icon.d} label={icon.label} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

