import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BellIcon, CheckCircleIcon, CoinsIcon, XIcon } from "lucide-react"

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

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }

  const NotificationIcon = ({ type }: { type: 'transaction' | 'staking' }) => {
    return type === 'transaction' ? (
      <CheckCircleIcon className="h-6 w-6 text-green-500" />
    ) : (
      <CoinsIcon className="h-6 w-6 text-yellow-500" />
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative transition-transform duration-200 hover:scale-110">
          <BellIcon className="h-6 w-6" />
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 animate-pulse" />
          )}
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200">Notifications</h3>
          <Button variant="ghost" size="sm" onClick={() => setNotifications([])} className="text-sm">
            Clear all
          </Button>
        </div>
        <ScrollArea className="h-80">
          {notifications.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">No new notifications</p>
          ) : (
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li key={notification.id} className="flex items-start gap-4 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <NotificationIcon type={notification.type} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{notification.message}</p>
                      <button onClick={() => removeNotification(notification.id)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                        <XIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.timestamp}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </ScrollArea>
        {notifications.length > 0 && (
          <div className="mt-4 flex justify-end">
            <Button variant="secondary" size="sm">
              View all
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}