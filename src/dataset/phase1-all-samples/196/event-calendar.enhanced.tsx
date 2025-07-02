'use client'

import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CalendarIcon, MapPinIcon, ClockIcon, TicketIcon } from 'lucide-react'
import Image from 'next/image'

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment)

// Sample event data with images
const events = [
  {
    id: 1,
    title: 'Street Dance Battle',
    start: new Date(2023, 5, 15, 14, 0),
    end: new Date(2023, 5, 15, 16, 0),
    location: 'Central Park',
    description: 'Annual street dance competition featuring top dancers from around the city.',
    ticketPrice: 15,
    image: '/images/street-dance.jpg'
  },
  {
    id: 2,
    title: 'Ballet Gala',
    start: new Date(2023, 5, 20, 19, 0),
    end: new Date(2023, 5, 20, 21, 30),
    location: 'City Theater',
    description: 'A night of classical and contemporary ballet performances.',
    ticketPrice: 50,
    image: '/images/ballet-gala.jpg'
  },
  {
    id: 3,
    title: 'Salsa Night',
    start: new Date(2023, 5, 25, 20, 0),
    end: new Date(2023, 5, 25, 23, 0),
    location: 'Rhythm Club',
    description: 'Learn and dance salsa with professional instructors and fellow enthusiasts.',
    ticketPrice: 20,
    image: '/images/salsa-night.jpg'
  }
]

export default function EventCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [filter, setFilter] = useState('All')

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

  const filteredEvents = filter === 'All' ? events : events.filter(event => event.title.includes(filter))

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-indigo-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">RhythmMoves</h1>
          <nav className="space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Events</Button>
            <Button variant="ghost">About</Button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-indigo-700 animate-fade-in">RhythmMoves Event Calendar</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <Card className="flex-1 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <CardContent className="p-0">
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                onSelectEvent={handleSelectEvent}
                eventPropGetter={(event) => ({
                  className: 'bg-indigo-500 text-white rounded px-2 py-1 cursor-pointer transition-colors duration-300 hover:bg-indigo-600'
                })}
              />
            </CardContent>
          </Card>
          <Card className="mt-6 lg:mt-0 w-full lg:w-1/3 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-indigo-700">Upcoming Performances</CardTitle>
              <CardDescription>Don't miss out on these exciting events!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <Button size="sm" variant={filter === 'All' ? 'default' : 'outline'} onClick={() => setFilter('All')}>All</Button>
                <Button size="sm" variant={filter === 'Dance' ? 'default' : 'outline'} onClick={() => setFilter('Dance')}>Dance</Button>
                <Button size="sm" variant={filter === 'Music' ? 'default' : 'outline'} onClick={() => setFilter('Music')}>Music</Button>
              </div>
              <ScrollArea className="h-[500px] pr-2">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="mb-4 hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="relative h-32">
                      <Image src={event.image} alt={event.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-xl text-indigo-600">{event.title}</CardTitle>
                      <CardDescription className="mt-2 text-gray-700">
                        <div className="flex items-center mb-1">
                          <CalendarIcon className="mr-2 h-5 w-5 text-indigo-500" />
                          {moment(event.start).format('MMMM D, YYYY')}
                        </div>
                        <div className="flex items-center mb-1">
                          <ClockIcon className="mr-2 h-5 w-5 text-indigo-500" />
                          {moment(event.start).format('h:mm A')} - {moment(event.end).format('h:mm A')}
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="mr-2 h-5 w-5 text-indigo-500" />
                          {event.location}
                        </div>
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="secondary" onClick={() => handleSelectEvent(event)} className="w-full">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
        {selectedEvent && (
          <Dialog open={!!selectedEvent} onOpenChange={handleCloseDialog}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-indigo-700">{selectedEvent.title}</DialogTitle>
                <Image src={selectedEvent.image} alt={selectedEvent.title} width={600} height={300} className="rounded-lg mt-4" />
                <DialogDescription className="mt-4 text-gray-700">
                  <div className="flex items-center mb-2">
                    <CalendarIcon className="mr-2 h-5 w-5 text-indigo-500" />
                    {moment(selectedEvent.start).format('MMMM D, YYYY')}
                  </div>
                  <div className="flex items-center mb-2">
                    <ClockIcon className="mr-2 h-5 w-5 text-indigo-500" />
                    {moment(selectedEvent.start).format('h:mm A')} - {moment(selectedEvent.end).format('h:mm A')}
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPinIcon className="mr-2 h-5 w-5 text-indigo-500" />
                    {selectedEvent.location}
                  </div>
                  <div className="flex items-center mb-4">
                    <TicketIcon className="mr-2 h-5 w-5 text-indigo-500" />
                    ${selectedEvent.ticketPrice}
                  </div>
                  <p className="mt-2">{selectedEvent.description}</p>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-4">
                <Button onClick={handleRSVP} className="w-full sm:w-auto">RSVP</Button>
                <Button variant="secondary" onClick={handlePurchaseTicket} className="w-full sm:w-auto">Purchase Ticket</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </main>
      <footer className="bg-white mt-12 shadow-inner">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          &copy; {new Date().getFullYear()} RhythmMoves. All rights reserved.
        </div>
      </footer>
    </div>
  )
}