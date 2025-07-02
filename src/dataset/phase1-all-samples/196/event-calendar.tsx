'use client'

import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CalendarIcon, MapPinIcon, ClockIcon, TicketIcon } from 'lucide-react'

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment)

// Sample event data
const events = [
  {
    id: 1,
    title: 'Street Dance Battle',
    start: new Date(2023, 5, 15, 14, 0),
    end: new Date(2023, 5, 15, 16, 0),
    location: 'Central Park',
    description: 'Annual street dance competition featuring top dancers from around the city.',
    ticketPrice: 15
  },
  {
    id: 2,
    title: 'Ballet Gala',
    start: new Date(2023, 5, 20, 19, 0),
    end: new Date(2023, 5, 20, 21, 30),
    location: 'City Theater',
    description: 'A night of classical and contemporary ballet performances.',
    ticketPrice: 50
  },
  {
    id: 3,
    title: 'Salsa Night',
    start: new Date(2023, 5, 25, 20, 0),
    end: new Date(2023, 5, 25, 23, 0),
    location: 'Rhythm Club',
    description: 'Learn and dance salsa with professional instructors and fellow enthusiasts.',
    ticketPrice: 20
  }
]

export default function EventCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleSelectEvent = (event) => {
    setSelectedEvent(event)
  }

  const handleCloseDialog = () => {
    setSelectedEvent(null)
  }

  const handleRSVP = () => {
    // Implement RSVP logic here
    console.log('RSVP for event:', selectedEvent.title)
    handleCloseDialog()
  }

  const handlePurchaseTicket = () => {
    // Implement ticket purchase logic here
    console.log('Purchase ticket for event:', selectedEvent.title)
    handleCloseDialog()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">RhythmMoves Event Calendar</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardContent className="p-0">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              onSelectEvent={handleSelectEvent}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Performances</CardTitle>
            <CardDescription>Don't miss out on these exciting events!</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              {events.map((event) => (
                <Card key={event.id} className="mb-4">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {moment(event.start).format('MMMM D, YYYY')}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="mr-2 h-4 w-4" />
                        {moment(event.start).format('h:mm A')} - {moment(event.end).format('h:mm A')}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="mr-2 h-4 w-4" />
                        {event.location}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button onClick={() => handleSelectEvent(event)}>View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      {selectedEvent && (
        <Dialog open={!!selectedEvent} onOpenChange={handleCloseDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedEvent.title}</DialogTitle>
              <DialogDescription>
                <div className="flex items-center mb-2">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {moment(selectedEvent.start).format('MMMM D, YYYY')}
                </div>
                <div className="flex items-center mb-2">
                  <ClockIcon className="mr-2 h-4 w-4" />
                  {moment(selectedEvent.start).format('h:mm A')} - {moment(selectedEvent.end).format('h:mm A')}
                </div>
                <div className="flex items-center mb-2">
                  <MapPinIcon className="mr-2 h-4 w-4" />
                  {selectedEvent.location}
                </div>
                <div className="flex items-center mb-2">
                  <TicketIcon className="mr-2 h-4 w-4" />
                  ${selectedEvent.ticketPrice}
                </div>
                <p className="mt-4">{selectedEvent.description}</p>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex justify-between">
              <Button onClick={handleRSVP}>RSVP</Button>
              <Button onClick={handlePurchaseTicket}>Purchase Ticket</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}