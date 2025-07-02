import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BellIcon, CheckCircleIcon, CoinsIcon } from "lucide-react"

interface Notification {
  id: string
  type: 'transaction' | 'staking'
  message: string
  timestamp: string
}

export default function Component() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: '1', type: 'transaction', message: 'Transaction of 0.5 ETH completed', timestamp: '2 minutes ago' },
    { id: '2', type: 'staking', message: 'Received 10 tokens as staking reward', timestamp: '1 hour ago' },
    { id: '3', type: 'transaction', message: 'Swapped 100 USDT for 0.05 ETH', timestamp: '3 hours ago' },
    { id: '4', type: 'staking', message: 'Staking position increased by 5%', timestamp: '1 day ago' },
  ])

  const NotificationIcon = ({ type }: { type: 'transaction' | 'staking' }) => {
    return type === 'transaction' ? (
      <CheckCircleIcon className="h-5 w-5 text-green-500" />
    ) : (
      <CoinsIcon className="h-5 w-5 text-yellow-500" />
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <BellIcon className="h-5 w-5" />
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
          )}
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Notifications</h3>
          <Button variant="ghost" size="sm" onClick={() => setNotifications([])}>
            Clear all
          </Button>
        </div>
        <ScrollArea className="h-[300px]">
          {notifications.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">No new notifications</p>
          ) : (
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li key={notification.id} className="flex items-start gap-3 p-2 rounded-md hover:bg-accent">
                  <NotificationIcon type={notification.type} />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}