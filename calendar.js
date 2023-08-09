document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar');
    const zoomedInDateContainer = document.getElementById('zoomed-in-date');
    const dateContent = document.getElementById('date-content');
    const eventList = document.getElementById('event-list');
    const eventForm = document.getElementById('event-form');
    const eventDates = [3, 10, 15]; // Sample event dates
    let events = getEventsFromLocalStorage();
    function generateCalendar() {
        const calendarGrid = document.createElement('div');
        calendarGrid.classList.add('CalendarGrid');

        const numberOfDays = 31;
        for (let i = 1; i <= numberOfDays; i++) {
            const dayButton = document.createElement('button');
            dayButton.innerText = i;

            if (events[i]) {
                dayButton.classList.add('event-day');
            }

            dayButton.addEventListener('click', function () {
                showZoomedInDate(i);
            });

            calendarGrid.appendChild(dayButton);
        }

        calendarContainer.appendChild(calendarGrid);
    }

    function showZoomedInDate(date) {
        const hasEvent = events[date];
        dateContent.innerText = `Zoomed in on date: ${date}`;
        eventList.innerText = hasEvent ? `Event: ${events[date]}` : 'No events for this date';
        zoomedInDateContainer.style.display = 'flex';
    }

    function exitZoom() {
        zoomedInDateContainer.style.display = 'none';
    }

    function addEvent(eventDate, eventName) {
        if (events[eventDate]) {
            //alert('An event already exists on this date.');
            events[eventDate] += '\n'+eventName;
        } else {
            events[eventDate] = eventName;
            const dayButton = document.querySelector(`.CalendarGrid button:nth-child(${eventDate})`);
            if (dayButton) {
                dayButton.classList.add('event-day');
            }
            saveEventsToLocalStorage(events);
        }
    }

    eventForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const eventDate = parseInt(document.getElementById('event-date').value, 10);
        const eventName = document.getElementById('event-name').value;
        addEvent(eventDate, eventName);
        eventForm.reset();
    });

    generateCalendar();

    const exitButton = document.getElementById('exit-button');
    exitButton.addEventListener('click', exitZoom);

    // Function to retrieve events from local storage
    function getEventsFromLocalStorage() {
        const eventsJSON = localStorage.getItem('events');
        return eventsJSON ? JSON.parse(eventsJSON) : {};
    }

    // Function to save events to local storage
    function saveEventsToLocalStorage(events) {
        localStorage.setItem('events', JSON.stringify(events));
    }
    function clearEventsFromLocalStorage() {
        localStorage.removeItem('events');
    }
    document.getElementById('clear-events-button').addEventListener('click', function () {
        clearEventsFromLocalStorage();
        location.reload();
    });

});
