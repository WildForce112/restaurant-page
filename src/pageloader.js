// export const greeting = "Hello, Odinite!";

export function PageLoad() {
  const HomeContent = document.querySelector("#content")
  
  const RestaurantName = document.createElement("h1");
  RestaurantName.textContent = "William's Tacos"
  HomeContent.appendChild(RestaurantName);

  const quoteContainer = document.createElement('div')
  quoteContainer.id = "quote-container";
  const quote = document.createElement('p');
  quote.id = "quote";
  quote.textContent = `Tacos are like what the voices of a hundred angels singing Bob Dylan while sitting on rainbows and playing banjos would taste like if that sound were edible.`
  quoteContainer.appendChild(quote);
  const quoteAuthor = document.createElement('h4');
  quoteAuthor.id = "quote-author";
  quoteAuthor.textContent = "- Isabel Quintero";
  quoteContainer.appendChild(quoteAuthor);
  HomeContent.appendChild(quoteContainer);

  const hours = [
    "Monday: 7am-9pm",
    "Tuesday: 7am-9pm",
    "Wednesday: 7am-9pm",
    "Thursday: 7am-9pm",
    "Friday: 7am-9pm",
    "Saturday: 7am-9pm",
    "Sunday: 7am-11pm",
  ]
  const openHours = document.createElement('div');
  openHours.id = 'open-hour'
  const openHoursText = document.createElement('h3');
  openHoursText.textContent = "Open Hours";
  openHours.appendChild(openHoursText);
  hours.forEach((hour) => {
    const day = document.createElement('p');
    day.textContent = hour;
    openHours.append(day);
  })
  HomeContent.appendChild(openHours);

  const location = document.createElement('div');
  location.id = 'location';
  const locationHeadline = document.createElement('h3');
  locationHeadline.textContent = "Location";
  location.appendChild(locationHeadline);
  location.appendChild(document.createTextNode("112 Red Coast Avenue, New York City"))
  HomeContent.appendChild(location);
}